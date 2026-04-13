# Springers School Website - PRD

## Problem Statement
Build a school website for "Springers School" (classes PG to 5) with 3D dashboard/effects (CSS animations), featuring navbar with gallery, about, contact, and location sections.

## Architecture
- Frontend: React 19 + Tailwind CSS + Framer Motion + Lucide React
- Backend: FastAPI + MongoDB (currently unused)
- 3D Effects: CSS transforms only (Three.js/R3F removed due to React 19 incompatibility)
- All data hardcoded in App.js (no backend integration yet)

## Key Files
- `/app/frontend/src/App.js` — Main application (all UI, data, modals)
- `/app/frontend/src/App.css` — CSS animations, floating backgrounds, 3D effects

## Completed Features
- Hero section with school image, animated background, scrolling admission banner
- About section with class cards (PG to Class 5) with 3D hover effects
- Multi-tab Gallery: Achievements, Events, Celebrations, Classroom Learning, School Album
- Celebrations: 3-level navigation (Month -> Festival -> Media) with image/video support
- Month cards display festival thumbnail images with month name and festival labels
- Level 2 shows festival names listed under month heading
- Custom full-screen modal photo viewer with navigation
- Contact section with phone, email, address cards
- Location section with embedded Google Maps
- Footer

## Upcoming Tasks (P1)
- Populate remaining gallery sections (Achievements, Events, Classroom Learning) with real photos when user provides Google Drive links

## Future/Backlog (P2)
- Backend integration: Move hardcoded data to MongoDB with CRUD APIs
- Refactor App.js into smaller component files
- Admin panel for content management
