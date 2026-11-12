from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# ─── Enrollment Inquiry Models ───────────────────────────────────────────────

class EnrollmentInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    parent_name: str
    child_name: str
    phone: str
    class_interested: str
    message: Optional[str] = ""
    status: str = "pending"
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class EnrollmentInquiryCreate(BaseModel):
    parent_name: str
    child_name: str
    phone: str
    class_interested: str
    message: Optional[str] = ""


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# ─── Enrollment Endpoints ─────────────────────────────────────────────────────

@api_router.post("/enrollment", response_model=EnrollmentInquiry)
async def create_enrollment(input: EnrollmentInquiryCreate):
    inquiry_obj = EnrollmentInquiry(**input.model_dump())
    doc = inquiry_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.enrollments.insert_one(doc)
    logger.info(f"New enrollment inquiry: {inquiry_obj.child_name} → {inquiry_obj.class_interested}")
    return inquiry_obj


@api_router.get("/enrollment", response_model=List[EnrollmentInquiry])
async def get_enrollments():
    inquiries = await db.enrollments.find({}, {"_id": 0}).to_list(1000)
    for item in inquiries:
        if isinstance(item.get('timestamp'), str):
            item['timestamp'] = datetime.fromisoformat(item['timestamp'])
    return inquiries


@api_router.get("/stats")
async def get_stats():
    total_enrollments = await db.enrollments.count_documents({})
    pending = await db.enrollments.count_documents({"status": "pending"})
    confirmed = await db.enrollments.count_documents({"status": "confirmed"})
    return {
        "total_inquiries": total_enrollments,
        "pending": pending,
        "confirmed": confirmed,
        "classes_offered": 8,
        "founded_year": 2000,
        "school_name": "Springers School"
    }


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()