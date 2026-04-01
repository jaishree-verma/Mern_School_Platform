import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { School, Phone, Mail, MapPin, ChevronRight, BookOpen, Users, Star, Heart } from 'lucide-react';
import '@/App.css';

function HomePage() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeGalleryTab, setActiveGalleryTab] = useState('achievements');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const galleryCategories = {
    achievements: [
      { url: 'https://images.pexels.com/photos/9411422/pexels-photo-9411422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'Young Champions' },
      { url: 'https://images.pexels.com/photos/6125928/pexels-photo-6125928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'Victory Moments' },
      { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800', title: 'Academic Excellence' },
    ],
    events: [
      { url: 'https://images.unsplash.com/photo-1759675934052-1d82517c76c8?crop=entropy&cs=srgb&fm=jpg&w=800', title: 'Annual Day' },
      { url: 'https://images.unsplash.com/photo-1774266854775-4831c6c516b3?crop=entropy&cs=srgb&fm=jpg&w=800', title: 'Sports Day' },
      { url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800', title: 'Science Fair' },
    ],
    celebrations: [
      { url: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800', title: 'Festival Celebrations' },
      { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800', title: 'Independence Day' },
      { url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800', title: 'Republic Day' },
    ],
    classroom: [
      { url: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'Learning Together' },
      { url: 'https://images.pexels.com/photos/8363130/pexels-photo-8363130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'Active Participation' },
      { url: 'https://images.unsplash.com/photo-1603140841888-ef505a7f7045?crop=entropy&cs=srgb&fm=jpg&w=800', title: 'Bright Minds' },
    ],
    aboutSchool: [
      { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800', title: 'School Campus' },
      { url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800', title: 'Our Facilities' },
      { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800', title: 'Learning Environment' },
    ],
  };

  const classes = [
    { name: 'Pre-Primary (PG)', color: '#FACC15', description: 'Foundation of learning through play' },
    { name: 'Kindergarten', color: '#FB7185', description: 'Developing social and motor skills' },
    { name: 'Class 1', color: '#38BDF8', description: 'Beginning formal education' },
    { name: 'Class 2', color: '#34D399', description: 'Building core concepts' },
    { name: 'Class 3', color: '#A78BFA', description: 'Enhancing critical thinking' },
    { name: 'Class 4', color: '#F472B6', description: 'Advanced learning modules' },
    { name: 'Class 5', color: '#FB923C', description: 'Preparing for higher education' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
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
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1E293B] mb-6 tracking-tighter"
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
              className="text-base md:text-lg font-medium text-[#475569] mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Nunito' }}
              data-testid="hero-subtitle"
            >
              Nurturing young minds from Pre-Primary to Class 5 with love, care, and excellence
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
        </div>
      </section>

      <section id="about" className="py-24 px-4 md:px-8" data-testid="about-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="about-title">
              Our Learning Journey
            </h2>
            <p className="text-base md:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }} data-testid="about-description">
              From tiny tots to brilliant scholars - watch them grow!
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
                className="bg-white rounded-2xl p-8 hover:-translate-y-2 transition-transform"
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

      <section id="gallery" className="py-24 px-4 md:px-8 bg-white" data-testid="gallery-section">
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
              onClick={() => setActiveGalleryTab('celebrations')}
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
              onClick={() => setActiveGalleryTab('aboutSchool')}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeGalleryTab === 'aboutSchool'
                  ? 'bg-[#A78BFA] text-white shadow-lg scale-105'
                  : 'bg-white text-[#475569] border-2 border-[#E2E8F0] hover:border-[#A78BFA]'
              }`}
              style={{ fontFamily: 'Nunito' }}
              data-testid="gallery-tab-about-school"
            >
              About School
            </button>
          </div>

          <motion.div
            key={activeGalleryTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryCategories[activeGalleryTab].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer h-64"
                data-testid={`gallery-image-${activeGalleryTab}-${index}`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold" style={{ fontFamily: 'Fredoka' }}>
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 md:px-8" data-testid="contact-section">
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
              className="bg-white rounded-2xl p-8 border-4 border-[#38BDF8] text-center hover:-translate-y-2 transition-transform"
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
              className="bg-white rounded-2xl p-8 border-4 border-[#FACC15] text-center hover:-translate-y-2 transition-transform"
              data-testid="contact-email-card"
            >
              <div className="w-16 h-16 bg-[#FACC15] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#1E293B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2" style={{ fontFamily: 'Fredoka' }}>
                Email
              </h3>
              <p className="text-base font-semibold text-[#FACC15] break-words" style={{ fontFamily: 'Nunito' }}>
                springerschool2004<br />@gmail.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border-4 border-[#FB7185] text-center hover:-translate-y-2 transition-transform"
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

      <section id="location" className="py-24 px-4 md:px-8 bg-white" data-testid="location-section">
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
            className="rounded-3xl overflow-hidden border-8 border-[#38BDF8]"
            style={{ height: '500px' }}
            data-testid="location-map"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.7239844444444!2d80.32959999999999!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47f0bb28c0ff%3A0x93b5bc5ab7ca8f62!2sVikas%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703001234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#1E293B] text-white py-12 px-4 md:px-8" data-testid="footer">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <School className="w-8 h-8 text-[#FACC15]" />
            <span className="text-2xl font-bold" style={{ fontFamily: 'Fredoka' }}>Springers School</span>
          </div>
          <p className="text-base font-medium text-gray-400 mb-4" style={{ fontFamily: 'Nunito' }}>
            Shaping tomorrow's leaders, one child at a time
          </p>
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Nunito' }}>
            © 2004 Springers School. All rights reserved.
          </p>
        </div>
      </footer>
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