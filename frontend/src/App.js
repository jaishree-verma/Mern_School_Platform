import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { School, Phone, Mail, MapPin, ChevronRight, BookOpen, Users, Star, Heart, X, ChevronLeft, ChevronRight as ChevronRightIcon, ChevronDown, FolderOpen, ArrowLeft } from 'lucide-react';
import '@/App.css';

function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeGalleryTab, setActiveGalleryTab] = useState('achievements');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [viewingPhoto, setViewingPhoto] = useState(null);
  const [viewingPhotoIndex, setViewingPhotoIndex] = useState(0);
  const [viewingPhotoList, setViewingPhotoList] = useState([]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const galleryCategories = {
    achievements: [
      { url: 'https://images.pexels.com/photos/9411422/pexels-photo-9411422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'Young Champions', description: 'Our pride and joy' },
      { url: 'https://images.pexels.com/photos/6125928/pexels-photo-6125928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'School Victory Moments', description: 'Celebrating excellence' },
    ],
    events: [
      { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800', title: 'School Trips', description: 'Adventures and learning beyond classroom' },
      { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', title: 'Annual Prize Distribution Ceremony', description: 'Honoring achievements' },
    ],
    celebrations: [
      { month: 'January', color: '#FF9933', festivals: [
        { name: 'Republic Day', thumbnail: 'https://images.unsplash.com/photo-1611770991819-89677a4a87c3?w=800', photos: [] }
      ]},
      { month: 'April', color: '#34D399', festivals: [
        { name: 'Earth Day', thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800', photos: [] }
      ]},
      { month: 'June', color: '#10B981', festivals: [
        { name: 'World Environment Day', thumbnail: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800', photos: [] }
      ]},
      { month: 'August', color: '#38BDF8', festivals: [
        { name: 'Independence Day', thumbnail: 'https://images.unsplash.com/photo-1565690502656-2370a1f4d48a?w=800', photos: [] },
        { name: 'Janmashtmi', thumbnail: 'https://images.unsplash.com/photo-1628625294421-ee9e2a44ef1d?w=800', photos: [] }
      ]},
      { month: 'September', color: '#F59E0B', festivals: [
        { name: 'Teachers Day', thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800', photos: [] }
      ]},
      { month: 'October', color: '#EF4444', festivals: [
        { name: 'Dussehra', thumbnail: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?w=800', photos: [] }
      ]},
      { month: 'November', color: '#FB7185', festivals: [
        { name: 'Diwali', thumbnail: 'https://images.unsplash.com/photo-1605641490144-554d7f2ae740?w=800', photos: [] },
        { name: "Children's Day", thumbnail: 'https://lh3.googleusercontent.com/d/1KH79bJDsNlXZbdldQw1vYa1JdtUcpVEO', photos: [
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1KH79bJDsNlXZbdldQw1vYa1JdtUcpVEO' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1ERBruyokXy2VG-FsJuVm3J0GdUB0k-NH' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1qX0kdUZ7rje8oCIGAMkJLnMUpl9EJ85G' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1SiK1uVCtMBVesZhaDV7PiLIW7BxJuz26' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1eEdXKgLxrtxXg8FpcjFILi0X55LmFB5q' },
          { type: 'video', url: 'https://drive.google.com/file/d/1SiK1uVCtMBVesZhaDV7PiLIW7BxJuz26/preview' }
        ]}
      ]},
      { month: 'December', color: '#DC2626', festivals: [
        { name: 'Christmas', thumbnail: 'https://lh3.googleusercontent.com/d/1NbsNS-wu_kQAILD6kwaM-VSeufV3t1Cv', photos: [
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1NbsNS-wu_kQAILD6kwaM-VSeufV3t1Cv' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/15VpzIJQpKCS55ohsO9no1OArHt83bWoC' },
          { type: 'video', url: 'https://drive.google.com/file/d/1jO1aUB7ZuIdI5-DhoM8yo7FdLz9cPivr/preview' }
        ]}
      ]},
    ],
    classroom: [
      { url: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'Learning', description: 'Building strong foundations' },
      { url: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800', title: 'Entertainment', description: 'Fun and engaging activities' },
    ],
    schoolAlbum: [
      { 
        url: 'https://lh3.googleusercontent.com/d/14eH48FzKgI-U6LNSbD9s44z10inT_QW0', 
        title: 'School Photo', 
        description: 'Our beautiful campus',
        images: [
          { url: 'https://lh3.googleusercontent.com/d/14eH48FzKgI-U6LNSbD9s44z10inT_QW0', title: 'Front View' },
          { url: 'https://lh3.googleusercontent.com/d/1ovYZV3wpnT8aWRLhJuclo7z8kHUa0-4i', title: 'Building' },
          { url: 'https://lh3.googleusercontent.com/d/1ZUGSnOynX9Y-dAox6Lor4fCO01N78rMT', title: 'Campus' }
        ]
      },
      { 
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800', 
        title: 'Memories', 
        description: 'Treasured moments',
        images: []
      },
    ],
  };

  const openGalleryGrid = (images) => {
    setGalleryImages(images);
    setIsGalleryOpen(true);
  };

  const openGalleryViewer = (images, startIndex = 0) => {
    setGalleryImages(images);
    setCurrentImageIndex(startIndex);
    setIsGalleryOpen(true);
  };

  const closeGalleryViewer = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const classes = [
    { name: 'Play Group, Nursery', color: '#FACC15', description: 'Foundation of learning through play' },
    { name: 'LKG (Lower Kindergarten)', color: '#FB7185', description: 'Developing social and motor skills' },
    { name: 'UKG (Upper Kindergarten)', color: '#A78BFA', description: 'Preparing for formal education' },
    { name: 'Class 1', color: '#38BDF8', description: 'Beginning formal education' },
    { name: 'Class 2', color: '#34D399', description: 'Building core concepts' },
    { name: 'Class 3', color: '#F472B6', description: 'Enhancing critical thinking' },
    { name: 'Class 4', color: '#FB923C', description: 'Advanced learning modules' },
    { name: 'Class 5', color: '#8B5CF6', description: 'Preparing for higher education' },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="app-background">
        <div className="floating-shape" style={{ width: '300px', height: '300px', background: '#38BDF8', top: '10%', left: '5%', animationDelay: '0s' }}></div>
        <div className="floating-shape" style={{ width: '400px', height: '400px', background: '#FACC15', top: '60%', right: '10%', animationDelay: '5s' }}></div>
        <div className="floating-shape" style={{ width: '250px', height: '250px', background: '#FB7185', bottom: '20%', left: '15%', animationDelay: '10s' }}></div>
        <div className="floating-shape" style={{ width: '350px', height: '350px', background: '#34D399', top: '30%', right: '20%', animationDelay: '7s' }}></div>
        
        {/* Animated Icons Throughout Background */}
        <motion.div
          className="absolute top-[15%] left-[10%]"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Star className="w-8 h-8 text-[#FACC15]" fill="#FACC15" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute top-[25%] right-[15%]"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-[#38BDF8]" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute top-[45%] left-[8%]"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Users className="w-7 h-7 text-[#FB7185]" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-[30%] right-[25%]"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 20, 0]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <div className="w-12 h-12 rounded-full bg-[#FACC15]/30 backdrop-blur-sm" />
        </motion.div>
        
        <motion.div
          className="absolute top-[65%] left-[20%]"
          animate={{
            y: [0, -25, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        >
          <div className="w-18 h-18 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center p-4">
            <Heart className="w-9 h-9 text-[#FB7185]" fill="#FB7185" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-[15%] left-[35%]"
          animate={{
            y: [0, 18, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <div className="w-10 h-10 rounded-full bg-[#38BDF8]/30 backdrop-blur-sm" />
        </motion.div>
        
        <motion.div
          className="absolute top-[55%] right-[12%]"
          animate={{
            y: [0, -22, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Star className="w-8 h-8 text-[#34D399]" fill="#34D399" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute top-[80%] right-[30%]"
          animate={{
            y: [0, 28, 0],
            rotate: [0, -12, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8
          }}
        >
          <div className="w-14 h-14 rounded-full bg-[#FB7185]/30 backdrop-blur-sm" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-[40%] left-[45%]"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, 0]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.2
          }}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-[#A78BFA]" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute top-[35%] left-[60%]"
          animate={{
            y: [0, 24, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5
          }}
        >
          <div className="w-12 h-12 rounded-full bg-[#34D399]/30 backdrop-blur-sm" />
        </motion.div>
      </div>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl" data-testid="main-navigation">
        <div className="backdrop-blur-xl bg-white/80 rounded-full shadow-[0_4px_32px_rgba(0,0,0,0.1)] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <School className="w-8 h-8 text-[#38BDF8]" />
              <span className="text-xl font-bold text-[#1E293B]" style={{ fontFamily: 'Fredoka' }}>Springers School</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => scrollToSection('home')}
                className="px-6 py-2 rounded-full font-semibold text-[#475569] hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] transition-colors"
                data-testid="nav-home-link"
                style={{ fontFamily: 'Nunito' }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-6 py-2 rounded-full font-semibold text-[#475569] hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] transition-colors"
                data-testid="nav-about-link"
                style={{ fontFamily: 'Nunito' }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="px-6 py-2 rounded-full font-semibold text-[#475569] hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] transition-colors"
                data-testid="nav-gallery-link"
                style={{ fontFamily: 'Nunito' }}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 rounded-full font-semibold text-[#475569] hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] transition-colors"
                data-testid="nav-contact-link"
                style={{ fontFamily: 'Nunito' }}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="px-6 py-2 rounded-full bg-[#FACC15] text-[#1E293B] font-bold hover:-translate-y-1 active:translate-y-0 transition-transform"
                data-testid="nav-location-link"
                style={{ fontFamily: 'Nunito' }}
              >
                Location
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Admission Announcement Banner */}
      <div className="fixed top-24 left-0 right-0 z-40 bg-gradient-to-r from-[#38BDF8] via-[#FACC15] to-[#FB7185] py-3 overflow-hidden" data-testid="admission-banner">
        <div className="admission-scroll">
          <div className="admission-text whitespace-nowrap inline-block" style={{ fontFamily: 'Nunito' }}>
            <span className="text-white text-lg font-bold mx-8">
              🎓 Admission Open for 2026-27 
            </span>
            <span className="text-white text-lg font-bold mx-8">
              📚 Affiliated to CBSE Board 
            </span>
            <span className="text-white text-lg font-bold mx-8">
              📞 Contact School Office Now for Admission Process
            </span>
            <span className="text-white text-lg font-bold mx-8">
              🎓 Admission Open for 2026-27 
            </span>
            <span className="text-white text-lg font-bold mx-8">
              📚 Affiliated to CBSE Board 
            </span>
            <span className="text-white text-lg font-bold mx-8">
              📞 Contact School Office Now for Admission Process
            </span>
          </div>
        </div>
      </div>

      <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FAFAF9] via-[#E0F2FE] to-[#FEF3C7]" data-testid="hero-section">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-[#FACC15] rounded-full opacity-20"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-[#38BDF8] rounded-full opacity-20"
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-20 h-20 bg-[#FB7185] rounded-full opacity-20"
            animate={{
              y: [0, 25, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-20 right-1/3 w-28 h-28 bg-[#34D399] rounded-full opacity-20"
            animate={{
              y: [0, -35, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
          
          <motion.div
            className="absolute top-1/3 left-1/4"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <BookOpen className="w-16 h-16 text-[#38BDF8] opacity-30" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 right-1/4"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <Users className="w-20 h-20 text-[#FACC15] opacity-30" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/3 left-1/3"
            animate={{
              y: [0, -18, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Star className="w-14 h-14 text-[#FB7185] opacity-30" />
          </motion.div>
          
          <motion.div
            className="absolute top-2/3 right-1/3"
            animate={{
              y: [0, 20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <Heart className="w-12 h-12 text-[#34D399] opacity-30" fill="currentColor" />
          </motion.div>
        </div>
        
        <div className="relative z-10 flex items-start justify-center min-h-screen px-4 pt-48">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="text-center lg:text-left order-2 lg:order-1 mt-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1E293B] mb-6 tracking-tighter"
                style={{ fontFamily: 'Fredoka' }}
                data-testid="hero-title"
              >
                Welcome to<br />
                <span className="text-[#38BDF8]">Springers School</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg font-bold text-[#475569] mb-8 leading-relaxed"
                style={{ fontFamily: 'Nunito' }}
                data-testid="hero-subtitle"
              >
                Nurturing young minds from Play Group to Class 5 with love, care, and excellence
              </motion.p>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-[#FACC15] text-[#1E293B] font-bold rounded-full hover:-translate-y-1 active:translate-y-0 transition-transform inline-flex items-center space-x-2"
                style={{ fontFamily: 'Nunito' }}
                data-testid="hero-cta-button"
              >
                <span>Explore Our School</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2 mt-8"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[10px_10px_0px_#38BDF8] card-3d max-w-sm mx-auto">
                <img
                  src="https://lh3.googleusercontent.com/d/14eH48FzKgI-U6LNSbD9s44z10inT_QW0"
                  alt="Springers School Building"
                  className="w-full h-auto object-cover rounded-3xl"
                  data-testid="hero-school-image"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <h3 className="text-white text-lg font-bold mb-1" style={{ fontFamily: 'Fredoka' }}>
                    Springers School
                  </h3>
                  <p className="text-white/90 text-xs" style={{ fontFamily: 'Nunito' }}>
                    A nurturing environment
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 md:px-8 relative" data-testid="about-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="about-title">
              Our Learning Journey
            </h2>
            <p className="text-base md:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }} data-testid="about-description">
              From Play Group to Class 5 - watch them grow!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classInfo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 card-3d cursor-pointer"
                style={{ boxShadow: `8px 8px 0px ${classInfo.color}` }}
                data-testid={`class-card-${index}`}
              >
                <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: classInfo.color }}>
                  <School className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E293B] mb-2" style={{ fontFamily: 'Fredoka' }}>
                  {classInfo.name}
                </h3>
                <p className="text-base font-medium text-[#475569] leading-relaxed" style={{ fontFamily: 'Nunito' }}>
                  {classInfo.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4 md:px-8 relative" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="gallery-title">
              Our Gallery
            </h2>
            <p className="text-base md:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }} data-testid="gallery-description">
              Capturing precious moments of learning, growth, and achievement
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveGalleryTab('achievements')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeGalleryTab === 'achievements'
                  ? 'bg-[#38BDF8] text-white shadow-lg scale-105'
                  : 'bg-white text-[#475569] border-2 border-[#E2E8F0] hover:border-[#38BDF8]'
              }`}
              style={{ fontFamily: 'Nunito' }}
              data-testid="gallery-tab-achievements"
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveGalleryTab('events')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeGalleryTab === 'events'
                  ? 'bg-[#FACC15] text-[#1E293B] shadow-lg scale-105'
                  : 'bg-white text-[#475569] border-2 border-[#E2E8F0] hover:border-[#FACC15]'
              }`}
              style={{ fontFamily: 'Nunito' }}
              data-testid="gallery-tab-events"
            >
              Events
            </button>
            <button
              onClick={() => { setActiveGalleryTab('celebrations'); setSelectedMonth(null); setSelectedFestival(null); }}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeGalleryTab === 'celebrations'
                  ? 'bg-[#FB7185] text-white shadow-lg scale-105'
                  : 'bg-white text-[#475569] border-2 border-[#E2E8F0] hover:border-[#FB7185]'
              }`}
              style={{ fontFamily: 'Nunito' }}
              data-testid="gallery-tab-celebrations"
            >
              Celebrations
            </button>
            <button
              onClick={() => setActiveGalleryTab('classroom')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeGalleryTab === 'classroom'
                  ? 'bg-[#34D399] text-white shadow-lg scale-105'
                  : 'bg-white text-[#475569] border-2 border-[#E2E8F0] hover:border-[#34D399]'
              }`}
              style={{ fontFamily: 'Nunito' }}
              data-testid="gallery-tab-classroom"
            >
              Classroom Learning
            </button>
            <button
              onClick={() => setActiveGalleryTab('schoolAlbum')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeGalleryTab === 'schoolAlbum'
                  ? 'bg-[#A78BFA] text-white shadow-lg scale-105'
                  : 'bg-white text-[#475569] border-2 border-[#E2E8F0] hover:border-[#A78BFA]'
              }`}
              style={{ fontFamily: 'Nunito' }}
              data-testid="gallery-tab-school-album"
            >
              School Album
            </button>
          </div>

          <motion.div
            key={activeGalleryTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Achievements Layout - Large Cards */}
            {activeGalleryTab === 'achievements' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {galleryCategories.achievements.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative rounded-3xl overflow-hidden group cursor-pointer h-96 shadow-[8px_8px_0px_#38BDF8] card-3d"
                    data-testid={`gallery-image-achievements-${index}`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: 'Fredoka' }}>
                          {image.title}
                        </h3>
                        <p className="text-white/90 text-lg" style={{ fontFamily: 'Nunito' }}>
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Events Layout - Horizontal Cards */}
            {activeGalleryTab === 'events' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {galleryCategories.events.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative rounded-3xl overflow-hidden group cursor-pointer h-80 shadow-[8px_8px_0px_#FACC15] card-3d"
                    data-testid={`gallery-image-events-${index}`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'Fredoka' }}>
                          {image.title}
                        </h3>
                        <p className="text-white/90 text-base" style={{ fontFamily: 'Nunito' }}>
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Celebrations Layout - Month Dropdown → Festival Folders → Photos */}
            {activeGalleryTab === 'celebrations' && (
              <div>
                {/* Back Button */}
                {(selectedMonth || selectedFestival) && (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => {
                      if (selectedFestival) setSelectedFestival(null);
                      else setSelectedMonth(null);
                    }}
                    className="mb-6 px-5 py-2 bg-white rounded-full font-bold text-[#475569] border-2 border-[#E2E8F0] hover:border-[#38BDF8] transition-colors flex items-center space-x-2"
                    style={{ fontFamily: 'Nunito' }}
                    data-testid="celebrations-back-btn"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </motion.button>
                )}

                {/* Level 1: Months Grid */}
                {!selectedMonth && !selectedFestival && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {galleryCategories.celebrations.map((monthData, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        onClick={() => setSelectedMonth(monthData)}
                        className="bg-white rounded-2xl p-6 card-3d cursor-pointer text-center border-4 border-white hover:border-current transition-colors"
                        style={{ boxShadow: `6px 6px 0px ${monthData.color}` }}
                        data-testid={`month-${monthData.month.toLowerCase()}`}
                      >
                        <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: monthData.color }}>
                          <ChevronDown className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1E293B]" style={{ fontFamily: 'Fredoka' }}>
                          {monthData.month}
                        </h3>
                        <p className="text-sm text-[#475569] mt-1" style={{ fontFamily: 'Nunito' }}>
                          {monthData.festivals.length} festival{monthData.festivals.length > 1 ? 's' : ''}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Level 2: Festivals for Selected Month */}
                {selectedMonth && !selectedFestival && (
                  <div>
                    <h3 className="text-2xl font-bold text-[#1E293B] mb-6 flex items-center space-x-3" style={{ fontFamily: 'Fredoka' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: selectedMonth.color }}>
                        <FolderOpen className="w-5 h-5 text-white" />
                      </div>
                      <span>{selectedMonth.month} Celebrations</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedMonth.festivals.map((festival, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          onClick={() => festival.photos.length > 0 ? setSelectedFestival(festival) : null}
                          className={`relative rounded-2xl overflow-hidden group ${festival.photos.length > 0 ? 'cursor-pointer' : 'cursor-default'} h-64 card-3d border-4 border-white`}
                          style={{ boxShadow: `6px 6px 0px ${selectedMonth.color}` }}
                          data-testid={`festival-${festival.name.toLowerCase().replace(/['\s]/g, '-')}`}
                        >
                          <img
                            src={festival.thumbnail}
                            alt={festival.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                            <div className="absolute bottom-4 left-4 right-4">
                              <h4 className="text-white text-xl font-bold" style={{ fontFamily: 'Fredoka' }}>
                                {festival.name}
                              </h4>
                              {festival.photos.length > 0 ? (
                                <p className="text-white/70 text-sm mt-1" style={{ fontFamily: 'Nunito' }}>
                                  {festival.photos.length} photos - Click to view →
                                </p>
                              ) : (
                                <p className="text-white/50 text-sm mt-1" style={{ fontFamily: 'Nunito' }}>
                                  Photos coming soon
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Level 3: Photos for Selected Festival */}
                {selectedFestival && (
                  <div>
                    <h3 className="text-2xl font-bold text-[#1E293B] mb-6 flex items-center space-x-3" style={{ fontFamily: 'Fredoka' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: selectedMonth.color }}>
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <span>{selectedFestival.name}</span>
                      <span className="text-base font-normal text-[#475569]">({selectedFestival.photos.length} items)</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedFestival.photos.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.08 }}
                          className="relative rounded-2xl overflow-hidden group cursor-pointer h-56 card-3d border-4 border-white shadow-lg"
                          onClick={() => {
                            if (item.type === 'image') {
                              const imageItems = selectedFestival.photos.filter(p => p.type === 'image');
                              const imgIndex = imageItems.indexOf(item);
                              setViewingPhotoList(imageItems.map(p => p.url));
                              setViewingPhotoIndex(imgIndex >= 0 ? imgIndex : 0);
                              setViewingPhoto(item.url);
                            }
                          }}
                          data-testid={`festival-photo-${index}`}
                        >
                          {item.type === 'video' ? (
                            <iframe
                              src={item.url}
                              width="100%"
                              height="100%"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                              title="Festival Video"
                              className="w-full h-full"
                              style={{ border: 0 }}
                            />
                          ) : (
                            <>
                              <img
                                src={item.url}
                                alt={`${selectedFestival.name} Photo ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-3 left-3">
                                  <p className="text-white text-sm font-bold" style={{ fontFamily: 'Nunito' }}>
                                    Photo {index + 1}
                                  </p>
                                </div>
                              </div>
                            </>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Classroom Learning Layout - Split View */}
            {activeGalleryTab === 'classroom' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {galleryCategories.classroom.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative rounded-3xl overflow-hidden group cursor-pointer h-96 shadow-[8px_8px_0px_#34D399] card-3d"
                    data-testid={`gallery-image-classroom-${index}`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: 'Fredoka' }}>
                          {image.title}
                        </h3>
                        <p className="text-white/90 text-lg" style={{ fontFamily: 'Nunito' }}>
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* School Album Layout - Main Cards with Grid Popup */}
            {activeGalleryTab === 'schoolAlbum' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {galleryCategories.schoolAlbum.map((album, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, rotate: index % 2 === 0 ? -5 : 5 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    onClick={() => album.images.length > 0 ? openGalleryGrid(album.images) : null}
                    className={`relative rounded-3xl overflow-hidden group ${album.images.length > 0 ? 'cursor-pointer' : 'cursor-default'} h-96 shadow-[8px_8px_0px_#A78BFA] card-3d`}
                    data-testid={`gallery-image-school-album-${index}`}
                  >
                    <img
                      src={album.url}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: 'Fredoka' }}>
                          {album.title}
                        </h3>
                        <p className="text-white/90 text-lg mb-2" style={{ fontFamily: 'Nunito' }}>
                          {album.description}
                        </p>
                        {album.images.length > 0 && (
                          <p className="text-white/70 text-sm" style={{ fontFamily: 'Nunito' }}>
                            Click to view {album.images.length} photos →
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 md:px-8 relative" data-testid="contact-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="contact-title">
              Get in Touch
            </h2>
            <p className="text-base md:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }} data-testid="contact-description">
              We'd love to hear from you! Reach out for admissions or any queries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border-4 border-[#38BDF8] text-center card-3d"
              data-testid="contact-phone-card"
            >
              <div className="w-16 h-16 bg-[#38BDF8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2" style={{ fontFamily: 'Fredoka' }}>
                Phone
              </h3>
              <p className="text-lg font-semibold text-[#38BDF8]" style={{ fontFamily: 'Nunito' }}>
                +91-835 481183
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border-4 border-[#FACC15] text-center card-3d"
              data-testid="contact-email-card"
            >
              <div className="w-16 h-16 bg-[#FACC15] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#1E293B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2" style={{ fontFamily: 'Fredoka' }}>
                Email
              </h3>
              <p className="text-base font-semibold text-[#FACC15] break-words" style={{ fontFamily: 'Nunito' }}>
                springerschool2000<br />@gmail.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border-4 border-[#FB7185] text-center card-3d"
              data-testid="contact-address-card"
            >
              <div className="w-16 h-16 bg-[#FB7185] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2" style={{ fontFamily: 'Fredoka' }}>
                Address
              </h3>
              <p className="text-lg font-semibold text-[#FB7185]" style={{ fontFamily: 'Nunito' }}>
                199 Awadhpuri Road<br />Lakhanpur Society Vikas Nagar<br />Kanpur
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="location" className="py-24 px-4 md:px-8 relative" data-testid="location-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="location-title">
              Find Us Here
            </h2>
            <p className="text-base md:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }} data-testid="location-description">
              Visit our vibrant campus and experience the Springers School difference
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border-8 border-[#38BDF8] relative group"
            style={{ height: '500px' }}
            data-testid="location-map"
          >
            <a 
              href="https://maps.app.goo.gl/j97CUKAJeuKgrqHg9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-10 bg-white px-4 py-2 rounded-full shadow-lg font-bold text-[#38BDF8] hover:bg-[#38BDF8] hover:text-white transition-colors"
              style={{ fontFamily: 'Nunito' }}
            >
              Open in Google Maps →
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.7!2d80.3296!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47f0bb28c0ff%3A0x93b5bc5ab7ca8f62!2s199%20Awadhpuri%20Rd%2C%20Lakhanpur%2C%20Vikas%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703001234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Springers School Location - 199 Awadhpuri Road, Vikas Nagar, Kanpur"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <footer className="bg-white text-[#1E3A8A] py-12 px-4 md:px-8 border-t-4 border-[#38BDF8]" data-testid="footer">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <School className="w-8 h-8 text-[#FACC15]" />
            <span className="text-2xl font-bold" style={{ fontFamily: 'Fredoka' }}>Springers School</span>
          </div>
          <p className="text-base font-medium text-[#475569] mb-4" style={{ fontFamily: 'Nunito' }}>
            Shaping tomorrow's leaders, one child at a time
          </p>
          <p className="text-sm text-[#475569]" style={{ fontFamily: 'Nunito' }}>
            © 2000 Springers School. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Full Screen Photo Viewer */}
      <AnimatePresence>
        {viewingPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setViewingPhoto(null)}
          >
            <button
              onClick={() => setViewingPhoto(null)}
              className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              data-testid="close-photo-viewer"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {viewingPhotoList.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newIndex = (viewingPhotoIndex - 1 + viewingPhotoList.length) % viewingPhotoList.length;
                    setViewingPhotoIndex(newIndex);
                    setViewingPhoto(viewingPhotoList[newIndex]);
                  }}
                  className="absolute left-4 z-[110] bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                  data-testid="prev-photo"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newIndex = (viewingPhotoIndex + 1) % viewingPhotoList.length;
                    setViewingPhotoIndex(newIndex);
                    setViewingPhoto(viewingPhotoList[newIndex]);
                  }}
                  className="absolute right-4 z-[110] bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                  data-testid="next-photo"
                >
                  <ChevronRightIcon className="w-8 h-8 text-white" />
                </button>
              </>
            )}

            <motion.div
              key={viewingPhoto}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-md max-h-[60vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={viewingPhoto}
                alt="Full view"
                className="w-full h-auto max-h-[55vh] object-contain rounded-lg"
              />
              {viewingPhotoList.length > 1 && (
                <p className="text-white text-center mt-4 text-lg" style={{ fontFamily: 'Nunito' }}>
                  {viewingPhotoIndex + 1} / {viewingPhotoList.length}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Gallery Modal - Grid of Small Frames */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeGalleryViewer}
          >
            <button
              onClick={closeGalleryViewer}
              className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              data-testid="close-gallery"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-white text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Fredoka' }}>
                School Photos ({galleryImages.length})
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 border-4 border-white/20 hover:border-[#FACC15] transition-colors"
                    data-testid={`gallery-grid-image-${index}`}
                  >
                    <img
                      src={image.url}
                      alt={image.title || `Photo ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-lg font-bold" style={{ fontFamily: 'Fredoka' }}>
                          {image.title || `Photo ${index + 1}`}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;