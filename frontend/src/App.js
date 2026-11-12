import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { School, Phone, Mail, MapPin, ChevronRight, BookOpen, Users, Star, Heart, X, Menu, ChevronLeft, ChevronRight as ChevronRightIcon, ChevronDown, FolderOpen, ArrowLeft, Shield, Lightbulb, GraduationCap, Smile, Quote, Instagram } from 'lucide-react';
import '@/App.css';
import EnrollButton from '@/components/EnrollButton';
import EnrollmentModal from '@/components/EnrollmentModal';
import '@/components/EnrollButton.css';

// Decorative floating elements - no circles, school-themed only
const DecoElements = () => {
  const red = '#B91C1C';
  const blue = '#1E3A8A';
  const gold = '#D97706';
  return (
    <>
      <svg className="deco-element deco-star" style={{ top: '6%', left: '4%', width: 32, height: 32 }} viewBox="0 0 24 24" fill={red}><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7L2 9.4h7.6z"/></svg>
      <svg className="deco-element deco-star" style={{ top: '14%', right: '6%', width: 24, height: 24, animationDelay: '1.2s' }} viewBox="0 0 24 24" fill={blue}><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7L2 9.4h7.6z"/></svg>
      <svg className="deco-element deco-star" style={{ bottom: '18%', left: '10%', width: 20, height: 20, animationDelay: '2.5s' }} viewBox="0 0 24 24" fill={gold}><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7L2 9.4h7.6z"/></svg>
      <svg className="deco-element deco-moon" style={{ top: '35%', left: '5%', width: 34, height: 34, animationDelay: '1.5s' }} viewBox="0 0 24 24" fill="none" stroke={red} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
      <svg className="deco-element deco-plus" style={{ bottom: '12%', right: '5%', width: 32, height: 32, animationDelay: '0.8s', animationDuration: '20s' }} viewBox="0 0 24 24" fill="none" stroke={blue} strokeWidth="2" strokeLinecap="round"><rect x="1" y="6" width="22" height="12" rx="2"/><line x1="6" y1="6" x2="6" y2="10"/><line x1="10" y1="6" x2="10" y2="10"/><line x1="14" y1="6" x2="14" y2="10"/><line x1="18" y1="6" x2="18" y2="10"/></svg>
      <svg className="deco-element deco-moon" style={{ top: '65%', right: '7%', width: 28, height: 28, animationDelay: '2.2s' }} viewBox="0 0 24 24" fill="none" stroke={red} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20L12 4z"/></svg>
      <svg className="deco-element deco-star" style={{ bottom: '25%', left: '22%', width: 28, height: 28, animationDelay: '3s' }} viewBox="0 0 24 24" fill="none" stroke={blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      <svg className="deco-element deco-plus" style={{ top: '45%', left: '14%', width: 20, height: 20, animationDelay: '1.8s', animationDuration: '15s' }} viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
      <svg className="deco-element deco-moon" style={{ top: '82%', right: '28%', width: 24, height: 24, animationDelay: '0.6s' }} viewBox="0 0 24 24" fill={blue}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    </>
  );
};

// Airplane with dashed trail - deep red, thin line (unused, kept for reference)
const AirplaneTrail = ({ className = '', flip = false }) => null;

// Hero airplane - starts from school photo (right) and curves up-left to Welcome text
const HeroAirplane = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 500 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M420,200 Q380,150 320,120 Q240,80 160,60 Q100,45 50,20" stroke="#B91C1C" strokeWidth="1.2" strokeDasharray="5 4" fill="none" />
    {/* Small stars & flowers along the trail */}
    <circle cx="350" cy="140" r="3" fill="#FACC15" opacity="0.5"/>
    <circle cx="250" cy="80" r="2.5" fill="#38BDF8" opacity="0.5"/>
    <circle cx="140" cy="55" r="2" fill="#FB7185" opacity="0.5"/>
    <path d="M300,105 l2,5 l5,-2 l-4,4 l2,5 l-5,-2 l-4,4 l1,-5 l-5,-2 l5,-1z" fill="#FACC15" opacity="0.4"/>
    <path d="M200,65 l1.5,4 l4,-1.5 l-3,3 l1.5,4 l-4,-1.5 l-3,3 l0.8,-4 l-4,-1.5 l4,-0.8z" fill="#FB7185" opacity="0.4"/>
    {/* Airplane at the tip near text */}
    <g transform="translate(35,14) rotate(150)">
      <path d="M0,6 L16,0 L16,3 L22,3 L22,9 L16,9 L16,12 Z" fill="#B91C1C" stroke="#991B1B" strokeWidth="0.6"/>
    </g>
  </svg>
);

// Section connector airplane - connects 4 boxes with wavy trail, stars & flowers
const SectionConnector = ({ className = '', color = '#B91C1C' }) => (
  <svg className={className} viewBox="0 0 900 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M30,50 Q120,15 220,40 Q320,65 430,30 Q540,0 650,45 Q760,75 870,25" stroke={color} strokeWidth="1.2" strokeDasharray="5 4" fill="none" />
    {/* Stars along trail */}
    <path d="M120,28 l1.5,4.5 l4.5,-1.5 l-3.5,3 l1.5,4.5 l-4,-2 l-3.5,3 l1,-4.5 l-4,-2 l4.5,-1z" fill="#FACC15" opacity="0.5"/>
    <path d="M330,48 l1.5,4.5 l4.5,-1.5 l-3.5,3 l1.5,4.5 l-4,-2 l-3.5,3 l1,-4.5 l-4,-2 l4.5,-1z" fill="#FB7185" opacity="0.5"/>
    <path d="M550,18 l1.5,4.5 l4.5,-1.5 l-3.5,3 l1.5,4.5 l-4,-2 l-3.5,3 l1,-4.5 l-4,-2 l4.5,-1z" fill="#38BDF8" opacity="0.5"/>
    <path d="M760,50 l1.5,4.5 l4.5,-1.5 l-3.5,3 l1.5,4.5 l-4,-2 l-3.5,3 l1,-4.5 l-4,-2 l4.5,-1z" fill="#FACC15" opacity="0.5"/>
    {/* Small flowers */}
    <circle cx="220" cy="38" r="3" fill="#34D399" opacity="0.4"/>
    <circle cx="220" cy="38" r="1.5" fill="#FACC15" opacity="0.6"/>
    <circle cx="650" cy="42" r="3" fill="#FB7185" opacity="0.4"/>
    <circle cx="650" cy="42" r="1.5" fill="#FACC15" opacity="0.6"/>
    {/* Airplane at end */}
    <g transform="translate(865,18) rotate(-30)">
      <path d="M0,5 L14,0 L14,2.5 L19,2.5 L19,7.5 L14,7.5 L14,10 Z" fill={color} stroke={color} strokeWidth="0.4"/>
    </g>
  </svg>
);

// Gallery airplane removed
const GalleryAirplane = () => null;

// Wave divider SVG (double-layered wave matching hero & footer)
const WaveTop = ({ color = '#ffffff' }) => (
  <div className="wave-top pointer-events-none">
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-16 md:h-20">
      <path d="M0,45 C240,0 480,90 720,45 C960,0 1200,80 1440,40 L1440,0 L0,0 Z" fill="#BAE6FD" fillOpacity="0.55" />
      <path d="M0,25 C320,80 640,-5 960,50 C1180,85 1340,55 1440,30 L1440,0 L0,0 Z" fill={color} />
    </svg>
  </div>
);

const WaveBottom = ({ color = '#ffffff' }) => (
  <div className="wave-bottom pointer-events-none">
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-16 md:h-20">
      <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z" fill="#BAE6FD" fillOpacity="0.55" />
      <path d="M0,65 C320,10 640,95 960,40 C1180,5 1340,35 1440,60 L1440,90 L0,90 Z" fill={color} />
    </svg>
  </div>
);

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
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [liveFeedbackIndex, setLiveFeedbackIndex] = useState(0);
  const [isFeedbackPaused, setIsFeedbackPaused] = useState(false);

  const parentTestimonials = [
    {
      name: 'Priya Sharma',
      child: 'Mother of Aarav, Class 2',
      text: 'Springers School has been a wonderful journey for my son. The teachers are so caring and attentive. Aarav loves going to school every day and has grown so much in confidence and academics.',
      accent: '#FB7185',
      lipColor: '#FECDD3',
      bgTint: 'rgba(255, 228, 230, 0.45)',
    },
    {
      name: 'Rajesh Gupta',
      child: 'Father of Ananya, Nursery',
      text: 'We were looking for a school that feels like a second home for our daughter. Springers School exceeded our expectations with their nurturing environment and excellent teaching approach.',
      accent: '#0EA5E9',
      lipColor: '#BAE6FD',
      bgTint: 'rgba(224, 242, 254, 0.45)',
    },
    {
      name: 'Neha Verma',
      child: 'Mother of Ishaan, Class 4',
      text: 'The best decision we made was enrolling Ishaan at Springers. The school focuses not just on studies but on overall personality development. The celebrations and activities are amazing!',
      accent: '#F59E0B',
      lipColor: '#FDE68A',
      bgTint: 'rgba(254, 249, 195, 0.5)',
    },
    {
      name: 'Amit & Pooja Mishra',
      child: 'Parents of Kiara, LKG',
      text: 'Kiara wakes up excited for school every morning! The creative art sessions, storytelling, and warm teachers have helped her become so expressive and joyful.',
      accent: '#10B981',
      lipColor: '#A7F3D0',
      bgTint: 'rgba(209, 250, 229, 0.5)',
    },
    {
      name: 'Sunita Tiwari',
      child: 'Mother of Vivaan, Class 1',
      text: 'I truly appreciate the personal attention every child receives here. The communication with parents and the focus on moral values set Springers School apart.',
      accent: '#8B5CF6',
      lipColor: '#DDD6FE',
      bgTint: 'rgba(237, 233, 254, 0.5)',
    },
    {
      name: 'Vikram Singh',
      child: 'Father of Myra, Play Group',
      text: 'Safe campus, loving staff, and a playful learning atmosphere. Watching Myra learn through fun activities gives us complete peace of mind.',
      accent: '#EC4899',
      lipColor: '#FBCFE8',
      bgTint: 'rgba(252, 231, 243, 0.5)',
    },
  ];

  useEffect(() => {
    if (isFeedbackPaused) return undefined;
    const timer = setInterval(() => {
      setLiveFeedbackIndex((prev) => (prev + 1) % parentTestimonials.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isFeedbackPaused, parentTestimonials.length]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
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
      { url: 'https://lh3.googleusercontent.com/d/1E70lom6GIFu8JXpo5T14-gw6JNFZmduW', title: 'Blue World Theme Park', description: 'Fun-filled school trip', photos: [
        'https://lh3.googleusercontent.com/d/1E70lom6GIFu8JXpo5T14-gw6JNFZmduW',
        'https://lh3.googleusercontent.com/d/1z8t1weXfRhabXSDB-S78bvT1NA1i74Si',
        'https://lh3.googleusercontent.com/d/1dsrxwzbpy4D7Zigld08X54M_xwz8t1Fx',
        'https://lh3.googleusercontent.com/d/16HchjE_xJNJceWTJvu7N_5tz4YTRYc6q',
        'https://lh3.googleusercontent.com/d/10EujOflcScnNoT1oSNR_kfNYG25bdiUD',
        'https://lh3.googleusercontent.com/d/1bUz-OxAfAa8TYSeGQDAn1qfZNeZ_TCRt',
        'https://lh3.googleusercontent.com/d/1j5mG2nXC_PREged9VhHHW3Ok-4y5Ttae',
        'https://lh3.googleusercontent.com/d/1rjv3M8o7kswViSMMKzWCOjAHt-rJKuHz'
      ] },
      { url: 'https://lh3.googleusercontent.com/d/1vM0SWhngm-KJvsxQ2tY-Ic20lv3zO4sz', title: 'Shudhanshuji Ashram Visit', description: 'Spiritual learning', photos: [
        'https://lh3.googleusercontent.com/d/1vM0SWhngm-KJvsxQ2tY-Ic20lv3zO4sz',
        'https://lh3.googleusercontent.com/d/11ta9rUXF-cVPvbamYFOjVZFirMOf1Be_',
        'https://lh3.googleusercontent.com/d/1CVoAUXk6jmY3pWgrp6E3w6XPYXkxs3BT',
        'https://lh3.googleusercontent.com/d/1kniyZhJ-4p4MS9zoiLJOY2jBXVKSBzbw',
        'https://lh3.googleusercontent.com/d/1Y-aTnafoUVLWCK079cTtcBg6ms4aLLCn',
        'https://lh3.googleusercontent.com/d/1MFALYYRAtpN85_G56iP41ftSNDsaTtjm',
        'https://lh3.googleusercontent.com/d/1ZTkB5lWMjRG9XYGP12N11kGgH0BWczDO',
        'https://lh3.googleusercontent.com/d/1gv1GdlcTseCDWNEqQ0iNjJBQXA24FjQt'
      ] },
      { url: 'https://lh3.googleusercontent.com/d/1BYKPNd6084EtuCrp3f04MGsYvHuH2Bkj', title: 'Mango Juice Party', description: 'Fun learning with flavors', photos: [
        'https://lh3.googleusercontent.com/d/1BYKPNd6084EtuCrp3f04MGsYvHuH2Bkj',
        'https://lh3.googleusercontent.com/d/1_BonCYuBYEofGORRNjtGIz85p03TDR4Q',
        'https://lh3.googleusercontent.com/d/1cOoeXn92AJs2O5OzvFVnmEYESGpxc2eS',
        'https://lh3.googleusercontent.com/d/1nfDVtc4VL0vHVJwhqOa9a3kB1fPNOP5E',
        'https://lh3.googleusercontent.com/d/1ZSvHVptNNTUwPqfCY6bH-rStlVNdaufb',
        'https://lh3.googleusercontent.com/d/13vMqMSbn0simVaClS8-IJXgNaVXJwXPy',
        'https://lh3.googleusercontent.com/d/1ldYKGqC5v_44GEkSx6xc3bbKCnM4Mm6Z',
        'https://lh3.googleusercontent.com/d/1HgE6JJUiOBGcZtdf3PQnre0N6rmc5eCz',
        'https://lh3.googleusercontent.com/d/1riozfwaNYGJRE9xLw4fVLyFNwrankp_Q',
        'https://lh3.googleusercontent.com/d/1REKd_CbUI6_TXsjTUGbUOMU820R0XP9w',
        'https://lh3.googleusercontent.com/d/1VtAlh38W5FyBKlLr_tJ1ORc47iAjXUPg',
        'https://lh3.googleusercontent.com/d/1YnEbYJgo1IriQNCdR0jeDAUmbu4FheTo',
        'https://lh3.googleusercontent.com/d/1R_7WP6b6t1gpCHt26ftMl0glhsMScOQM',
        'https://lh3.googleusercontent.com/d/18Ovk3_9SaLNgaToXmDYCRXOEYfjalIJz',
        'https://lh3.googleusercontent.com/d/14rW9EgsoBCkIdypmnbDEnWpVRxZ6jOUT'
      ] },
      { url: 'https://lh3.googleusercontent.com/d/1Nc9ctm0-6dDtaZJw_OH8sFaOckMpfst4', title: 'Fruit Chaat Celebration', description: 'Healthy eating celebration', photos: [
        'https://lh3.googleusercontent.com/d/1Nc9ctm0-6dDtaZJw_OH8sFaOckMpfst4',
        'https://lh3.googleusercontent.com/d/11PqyfYNsrfZ8OuEFdi_Sc129tMan9R_d',
        'https://lh3.googleusercontent.com/d/1rfMICQhBtsS88mHGqVhsPiNuNWd-gDna',
        'https://lh3.googleusercontent.com/d/1B8LbjGrzx3KpGCXXeE9yiMvIPU0vuIqA',
        'https://lh3.googleusercontent.com/d/1AETtsMtcOonffd0YEmw5vly1S92Bi_j2',
        'https://lh3.googleusercontent.com/d/10AvVZsHEAHPL7WnHRISewXtYfjwWKHCA',
        'https://lh3.googleusercontent.com/d/1j4jRjb_OXoSEdRTPyjcIg_a17B_O3xtt',
        'https://lh3.googleusercontent.com/d/1j3zwK6QjkI3R0lHTlx-sru970NSVCop4',
        'https://lh3.googleusercontent.com/d/1Qr6oKdY0U746yFfZR8Wu5DRCm91q7ssP',
        'https://lh3.googleusercontent.com/d/15lPpiU19jN3HmpnOk7CABM-qROSG65RA',
        'https://lh3.googleusercontent.com/d/18IFP5ctaUlhwLBA2B4LgjA3uLwdZ_FjH',
        'https://lh3.googleusercontent.com/d/12FVIBPtTmVEjdZij_XhMCyz_q6dH3QiG',
        'https://lh3.googleusercontent.com/d/10m2HJimB9nGpml9DgzQetCpQVw-H3ovd',
        'https://lh3.googleusercontent.com/d/1rCj8fBkZoq8Tu_BSg4enqY5jmXuLyv0q',
        'https://lh3.googleusercontent.com/d/1nu6chYiwfiOblno7s05xb69weL6JhwnQ',
        'https://lh3.googleusercontent.com/d/1rX-ngrUfGviqTBFu28wR6ARAgOTUolqO'
      ] },
    ],
    celebrations: [
      { month: 'January', color: '#FF9933', festivals: [
        { name: 'Republic Day Celebrated', thumbnail: 'https://lh3.googleusercontent.com/d/1W-R52Q3A2cWRVamhk_uaInsOTUJU_ilo', photos: [
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1W-R52Q3A2cWRVamhk_uaInsOTUJU_ilo' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1WMFX07vSdmcHpRizAUGZzYYBYXNcgF1q' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1YjldDbsVKSbvjHfz98uS7XOjHG8k5jhG' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1rBI7wWex80Lbb2z8sDe6SwiqpB40i34M' }
        ] }
      ]},
      { month: 'February', color: '#FACC15', festivals: [
        { name: 'Basant Panchami Celebrated', thumbnail: 'https://lh3.googleusercontent.com/d/1Ueq8Hc5tNu8ZESSdpZBr16YMSeRPvS81', photos: [
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Ueq8Hc5tNu8ZESSdpZBr16YMSeRPvS81' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1vfi1zgxBGgXvuTgmGbWu5p7WMxdYwJZY' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Uc_OygqW6EL5t412WQVPoW6HavvsJ1UX' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1ziRrdv_Q2HLg3NMrV6Schw4Cub6I9rQw' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Yru7mpNfVyeHgm2cXp6RGyk2wJx_PL10' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1wqiT5047j8FYqa7Dwc5dkVO6rljU29dN' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1vYTvpoydzSMh1zAsbaeFu3vpBmrtBe3J' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1pcsIXwxyMoBbQZF3RUkdRSkhNoX6Fpb4' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1B1mGR28GzK4wJXj_5jg42KcAwkSvbi1x' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Aqi2f4CI0lef_OZ8f8tZFvPX8MoonACU' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1bmkcjpWKJaYg8Pt7w1Ou99ayvnoNvLd8' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1pT7EEwYTXv7tyEa5AgYmAA3uo5vrIRJC' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1yQHpFOh4SU_kDDETP5QMaH5ZH9EMuTyl' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/12Z8hI19OwH2_AD-7grPpFqWiZhM9L4Vu' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1wItgNatNLoyAm4XMWURnaQ8tB-VDZvRO' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1EWLKAvrquPUV_lMrTHPxYPDq2HL781nD' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1vJGOGi8A2nQYRcJUtosIDDO7i-ZIRTXd' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1I5D8c3gqMDHUdeAUyyo-F1Q1SgeFBHFI' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Hy-_QSqcK0Vdp2mWXdDUoAU2epVvJs9J' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1JjE_J-LYBNVCwmHg1_3Zv4R2wnzVAZEe' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/13ysLHG7h91KQgkI5W0EsJSbR3OCjMzUm' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/12J98tdIayZ3QhF_DJlKijyxs33q0FImB' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Sc5PgFOM2RZFGeTuDkwIUjXUKQoLQcUS' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1avWx00luWKMGThWq2Q98YlHvFsN-aBZW' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1D0tXjkQTRaVWvT45KcXrUhFdZxqP4KfM' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/10lXOH7NI2VqiFrrd_AWKBFE9P8Gp7rz5' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/14qdfCQjG-Cr4HNrrJVsW1w1aN_6PcxT1' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1apaanAfeTfhPqo8qHkiwrY8GqjEYMP_V' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1l1epxS_BEOR47oNBfKgqTJC_NBpT3VN0' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1h3w7V_h4GOEQIoWA0wcDLsqhBX2IH707' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1VUJOAcnhjjdMGho5snsCxKsUszv8m5gk' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1X9QGtSEGI5wNT70LjpxlWiIsGmTkYI60' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Kvv0640NwXWfBQZO_Qtft1m3Xs9faj0U' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/16bTLvAmd_FMhNYtLxzw5acTeKJ69KSlg' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1DeXs9DGFDumsgT3HsMqEiULJ04MTbQIv' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1lgoospr3D9Ix8-_r8DxEn0GBmsU-0MiN' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1_-ZJ25XtFCcVP7sm_6zOZwV621Sl3tHr' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1gq6yt6WXVT_0oSV8-3Uwppelnkr0P-QF' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1DKCRslPS1d44dJY65KNLWuZyvSClVUoV' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1ErGVS1PRXxnqXP_wonFnYJg7UsJZXlMu' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1rGHS7z379J0cF1zwNTSVfBxYn2kzDRap' },
          { type: 'video', url: 'https://drive.google.com/file/d/1JPFijC7HyOEs06i5t-R-esiQMUEP3LFz/preview' }
        ] }
      ]},
      { month: 'April', color: '#34D399', festivals: [
        { name: 'Earth Day Celebrated', thumbnail: 'https://customer-assets.emergentagent.com/job_campus-hub-348/artifacts/0log14d8_image.png', photos: [
          { type: 'image', url: 'https://customer-assets.emergentagent.com/job_campus-hub-348/artifacts/0log14d8_image.png' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/15G10FCRzxgsD9MF5YyAVNZVltlWmImhl' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1NfzvC05bLtiJ87FluPIhnoDKbVVHNkE3' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Owa2lOJqvZ5FRNwpZsljdbhGwLv7a7Ti' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1q-I9TyvfgvnSbPo-xl_wm0BAVDghFmD9' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1LstpjFCm0H48RawYXcLS-tvUmxmvhfUr' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Mt7pQoncHKbsbjxWrDu5Hj4v9XxnJpan' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/13xaulHNVNELboTdzzbaNwg0ylEgfqjwT' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1mIgU7Tza0hZz6i7eAS-wrv2iWTQ3FHDZ' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1qc_HnEW-wcXRZISBzm6Ii4LX2tA-RV7f' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1f0mv4RLvTuxItvnj7RmGypQeflXBJcSY' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1iJa7awIB1dc6Rw3W5roAMHDGRFOs0q-T' },
          { type: 'video', url: 'https://drive.google.com/file/d/1d-HLDercwJQos1fD8JGfG5owhI-rHXNg/preview' }
        ] }
      ]},
      { month: 'May', color: '#EC4899', festivals: [
        { name: "Mother's Day Celebrated", thumbnail: 'https://lh3.googleusercontent.com/d/1fCIVM0zJBqiQDuVdIPjY_81XF_vKn8nI', photos: [
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1fCIVM0zJBqiQDuVdIPjY_81XF_vKn8nI' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1uBjr85QfszYOpmople2_7vpiYCH-W5Lv' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/13d6cXW2jYWLS5aQRdo4YMxf0fFk_j5JL' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1i8HmRalZiH17dz3rsLjvWjayzgPh1pyI' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1PVK3htU_ylCjgFdfJU1eRbzP4Tn-klIb' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/12p73qyqhd-xJ6e2z5QsHhd9zwgIMpIZC' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1T743ZzRjZT_g-ZPJ0UGQ5ulkV0qvd9X4' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1-69pDs1TZXg0Hcdu9wo6_KiD8IUldUbe' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1n3oqANabh_IdHGpIp-E0iInvzBYlSYce' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Ap7vAGKV1ujC9MLi0xUmLyRn5VnWRh_w' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1IsSTOEOBmQxkBdsGMivs86KQvyyPX0NY' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1O639MV5ll27nvOJ9qNn6FvXaoXwfEje1' },
          { type: 'video', url: 'https://drive.google.com/file/d/1PVe-FB1jysa4lt61u55aGnZf4MLISwGy/preview' }
        ] }
      ]},
      { month: 'June', color: '#10B981', festivals: [
        { name: 'World Environment Day', thumbnail: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800', photos: [] }
      ]},
      { month: 'August', color: '#38BDF8', festivals: [
        { name: 'Independence Day Celebrated', thumbnail: 'https://lh3.googleusercontent.com/d/1IFML2xNqnY3GMWNPL9nkABkcjBwZhKop', photos: [
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1IFML2xNqnY3GMWNPL9nkABkcjBwZhKop' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1RlQp0nzrnkALWnJpNIA1HchAxRY-DdUq' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1IAjtrsUcNud3Lkm4Jqkd0GeEVrQrB9bd' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1IneWTHffqk-dElpGB-xoVIpmKmFU-Vvk' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1l38VQoizpEHE5IoIVmOmVXzV1Wbv7Mk3' }
        ] },
        { name: 'Janmashtmi', thumbnail: 'https://lh3.googleusercontent.com/d/1A10my_FfbZ7L3ME2FgNOCxrTs8mKV__W', photos: [
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1A10my_FfbZ7L3ME2FgNOCxrTs8mKV__W' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/14wYbxDzGdaXXhoag54hLSQWVAx2gUcHI' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/11tPloM59DDz8owIX_BiwE-aKPAhwm30t' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1OMHVTjKO1PteRFNLkyv1j-EoAoDhesQM' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1BL-RPny5g7o-_AXDthhScSmWpbv_POvQ' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/18Ebl46mUq9lz5tliMI5I3MlRkKVx2WjR' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1XQAGx3c9VhGvFrEYCh2UvYCnxGKTymi1' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1meQD9fcBv3XQ2IgccqaljX-YRY5skJUw' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1KI633rXQWY9n6omWF-4ednZOELZdX-wF' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1sVob9wZr0QhYn9-fHnXV6aLP3LdwMPja' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1q1GMqkfXkOMu6uIeDnkBBjzOIxB_NDWZ' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1IiaxfGcSig4QeVyE1kFFvCowCWSeoVU4' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1_n98O1b2RT4YP93ua1xWcI11lphqXYXu' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Z8YN_qX1gnn1cYLHsGQETHtjI3gzpVCb' }
        ] }
      ]},
      { month: 'September', color: '#F59E0B', festivals: [
        { name: 'Teachers Day', thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800', photos: [] }
      ]},
      { month: 'October', color: '#EF4444', festivals: [
        { name: 'Navratri & Dussehra', thumbnail: 'https://customer-assets.emergentagent.com/job_campus-hub-348/artifacts/ap05a110_WhatsApp%20Image%202026-05-08%20at%209.51.48%20PM.jpeg', photos: [
          { type: 'image', url: 'https://customer-assets.emergentagent.com/job_campus-hub-348/artifacts/ap05a110_WhatsApp%20Image%202026-05-08%20at%209.51.48%20PM.jpeg' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1LZqLu9_sa7XYpgHVV7DtzZIgMsSwO1yG' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/13SAGujXFDy3PcLlwmW0GXiPgQnlMrWv9' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1yXN21aV1PTG67MnZzX_YlRN-INpPpPz9' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/12eazs6V0IwR16mXxJLNqSSxuFlM2zj0l' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/12jWV7O4oQQHCQ8GNH-fEnJB81CFYtqN6' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1t9kZFvKmHW0JtwUxbO5JUOBXXJyFQ1yE' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1ObHTsgR_yEagnvZ_oYmkM8VGYQGVh3qG' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1azuoPISRoxv_HrIzLd1PwnImMGy7hyNk' },
          { type: 'video', url: 'https://customer-assets.emergentagent.com/job_campus-hub-348/artifacts/nm5ku9xq_WhatsApp%20Video%202026-05-08%20at%209.39.13%20PM.mp4' }
        ] }
      ]},
      { month: 'November', color: '#FB7185', festivals: [
        { name: 'Diwali', thumbnail: 'https://lh3.googleusercontent.com/d/1McR3RdfLyyWwyPWaer_UlTPruc2kY85z', photos: [
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1McR3RdfLyyWwyPWaer_UlTPruc2kY85z' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1ONU5LVAMWKvyvueEuLVflth9KYH8PbGG' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1ZFw0tdZ2_BM7fWqgjQA31qrYd42TLTsN' }
        ] },
        { name: "Children's Day", thumbnail: 'https://lh3.googleusercontent.com/d/1KH79bJDsNlXZbdldQw1vYa1JdtUcpVEO', photos: [
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1KH79bJDsNlXZbdldQw1vYa1JdtUcpVEO' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1ERBruyokXy2VG-FsJuVm3J0GdUB0k-NH' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1qX0kdUZ7rje8oCIGAMkJLnMUpl9EJ85G' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1SiK1uVCtMBVesZhaDV7PiLIW7BxJuz26' },
          { type: 'image', url: 'https://lh3.googleusercontent.com/d/1eEdXKgLxrtxXg8FpcjFILi0X55LmFB5q' },
          { type: 'video', url: 'https://drive.google.com/file/d/1ET6tGnOYm8TG9p8Zs3Eje1BM8gO3E3MY/preview' }
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
      { url: 'https://lh3.googleusercontent.com/d/1bdDFsXccUzgx0PEiSL1py6WqgPLWmCR1', title: 'Mindful Activities', description: 'Building focus and creativity', photos: [
        'https://lh3.googleusercontent.com/d/1bdDFsXccUzgx0PEiSL1py6WqgPLWmCR1',
        'https://lh3.googleusercontent.com/d/1YVh4OrVXbq5A4HYCVhpoL9EfrQ9rBmNP',
        'https://lh3.googleusercontent.com/d/1AwFpPCnoMDaA9bI6FwmSGE54GKbcf9Dq',
        'https://lh3.googleusercontent.com/d/1a59IFiHc3lS3rLj6jP-RM3janbkrdQbQ',
        'https://lh3.googleusercontent.com/d/114rg-iE48OL3QzFOEQXWJBE1TqHu7ZX2',
        'https://lh3.googleusercontent.com/d/18eSJ-Q7hyUIw3hvpQqCJjhebHsJcJfFA',
        'https://lh3.googleusercontent.com/d/1xNGACt_ICFjJ122CR2FvrbHlpk7DMdbX',
        'https://lh3.googleusercontent.com/d/1q-yn_2CK9REWxMnh_f9WzUPLAODbBZ7w',
        'https://lh3.googleusercontent.com/d/1SfuBr7YpTJg93RfEtZXPvhn0TkkbB2U7',
        'https://lh3.googleusercontent.com/d/1NUvbEAuMiQwVTXf8zxvWR65ZbN3WyfeG',
        'https://lh3.googleusercontent.com/d/1AgqeEY6ZLtAi2K-OV-4JbTFSCVA-QiVJ',
        'https://lh3.googleusercontent.com/d/1A9hgEwyYEvuPMVqVvw5zNdbfY_Y11PdI'
      ] },
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
    { name: 'Play Group, Nursery', color: '#EF4444', borderCol: '#FCA5A5', lip: '#F87171', bgTint: '#FEF2F2', Icon: Smile, description: 'Foundation of learning through play' },
    { name: 'LKG (Lower Kindergarten)', color: '#EC4899', borderCol: '#F9A8D4', lip: '#F472B6', bgTint: '#FDF2F8', Icon: Heart, description: 'Developing social and motor skills' },
    { name: 'UKG (Upper Kindergarten)', color: '#0EA5E9', borderCol: '#7DD3FC', lip: '#38BDF8', bgTint: '#F0F9FF', Icon: Star, description: 'Preparing for formal education' },
    { name: 'Class 1', color: '#10B981', borderCol: '#6EE7B7', lip: '#34D399', bgTint: '#ECFDF5', Icon: BookOpen, description: 'Beginning formal education' },
    { name: 'Class 2', color: '#EAB308', borderCol: '#FDE047', lip: '#FACC15', bgTint: '#FFFBEB', Icon: Lightbulb, description: 'Building core concepts' },
    { name: 'Class 3', color: '#8B5CF6', borderCol: '#C4B5FD', lip: '#A78BFA', bgTint: '#F5F3FF', Icon: Users, description: 'Enhancing critical thinking' },
    { name: 'Class 4', color: '#F97316', borderCol: '#FDBA74', lip: '#FB923C', bgTint: '#FFF7ED', Icon: Shield, description: 'Advanced learning modules' },
    { name: 'Class 5', color: '#14B8A6', borderCol: '#5EEAD4', lip: '#2DD4BF', bgTint: '#F0FDFA', Icon: GraduationCap, description: 'Preparing for higher education' },
  ];

  return (
    <div className="min-h-screen relative bg-white">
      {/* ── Enrollment Modal ── */}
      <AnimatePresence>
        {isEnrollOpen && (
          <EnrollmentModal onClose={() => setIsEnrollOpen(false)} />
        )}
      </AnimatePresence>

      {/* Enhanced Floating Pill Navigation */}
      <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-[96%] max-w-7xl" data-testid="main-navigation">
        <div
          className="backdrop-blur-xl bg-white/95 rounded-full px-5 md:px-7 py-2 border border-white/80"
          style={{
            boxShadow: '0 8px 32px rgba(15, 23, 42, 0.12), 0 2px 8px rgba(56, 189, 248, 0.14), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 text-left bg-transparent border-0 cursor-pointer p-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 rounded-2xl"
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  background: '#ffffff',
                  borderRadius: '14px',
                  padding: 0,
                  overflow: 'hidden',
                  border: '2px solid #FACC15',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="https://customer-assets.emergentagent.com/job_campus-hub-348/artifacts/4l9235vd_SPRINGERS%20SCHOOL.png"
                  alt="Springers School Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transform: 'scale(1.22)',
                    display: 'block',
                  }}
                />
              </div>
              <div>
                <span className="block text-xl font-bold text-[#1E293B] leading-tight" style={{ fontFamily: 'Fredoka' }}>
                  Springers School
                </span>
                <span className="block text-[10px] font-extrabold tracking-widest uppercase text-[#B91C1C]" style={{ fontFamily: 'Nunito' }}>
                  Unity in Diversity
                </span>
              </div>
            </button>

            <div className="hidden md:flex items-center gap-2">
              {[
                { label: 'Home', id: 'home', testId: 'nav-home-link' },
                { label: 'About', id: 'about-us', testId: 'nav-about-link' },
                { label: 'Learning Journey', id: 'about', testId: 'nav-learning-link' },
                { label: 'Gallery', id: 'gallery', testId: 'nav-gallery-link' },
                { label: 'Feedback', id: 'feedback', testId: 'nav-feedback-link' },
                { label: 'Contact', id: 'contact', testId: 'nav-contact-link' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-pill-btn ${
                    activeSection === item.id ? 'nav-pill-btn-active' : ''
                  }`}
                  data-testid={item.testId}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('location')}
                className="ml-1 inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-b from-[#FDE047] to-[#FACC15] text-[#1E293B] font-extrabold hover:-translate-y-0.5 active:translate-y-0.5 transition-all text-sm border border-[#EAB308]"
                style={{
                  fontFamily: 'Nunito',
                  boxShadow: '0 3px 0 #CA8A04, 0 6px 14px rgba(202, 138, 4, 0.28), inset 0 1px 1px rgba(255,255,255,0.65)',
                }}
                data-testid="nav-location-link"
              >
                <MapPin className="w-4 h-4 text-[#B45309]" />
                <span>Location</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-full bg-[#F8FAFC] text-[#1E293B] border border-slate-200 shadow-sm"
              aria-label="Toggle navigation menu"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile dropdown inside floating pill */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-slate-200/80 flex flex-col space-y-1 pb-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about-us' },
                { label: 'Learning Journey', id: 'about' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Feedback', id: 'feedback' },
                { label: 'Contact', id: 'contact' },
                { label: 'Location', id: 'location' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 rounded-full text-left font-bold text-[#475569] hover:bg-[#38BDF8]/10 hover:text-[#0284C7] text-sm"
                  style={{ fontFamily: 'Nunito' }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Admission Announcement Banner — 3D */}
      <div
        className="fixed left-0 right-0 z-40 overflow-hidden backdrop-blur-md"
        style={{
          top: '94px',
          background: 'linear-gradient(90deg, #BAE6FD 0%, #7DD3FC 50%, #93C5FD 100%)',
          boxShadow: '0 3px 0 #38BDF8, 0 8px 18px rgba(14,165,233,0.18)',
          borderTop: '1px solid rgba(255,255,255,0.75)',
          borderBottom: '1px solid #38BDF8',
          padding: '8px 0',
        }}
        data-testid="admission-banner"
      >
        <div className="admission-scroll">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="admission-text whitespace-nowrap inline-flex items-center shrink-0"
              style={{ fontFamily: 'Nunito' }}
            >
              {/* Item 1 — star */}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', margin: '0 30px', color: '#1E293B', fontSize: '0.84rem', fontWeight: 800, letterSpacing: '0.03em' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.1L12 16.4l-6.2 4.6 2.4-7.1L2 9.4h7.6z"/></svg>
                Admission Open for 2026-27
              </span>
              <span style={{ color: '#F472B6', margin: '0 4px', fontSize: '0.9rem' }}>✦</span>

              {/* Item 2 — book */}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', margin: '0 30px', color: '#1E293B', fontSize: '0.84rem', fontWeight: 800, letterSpacing: '0.03em' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                Affiliated to CBSE Board
              </span>
              <span style={{ color: '#38BDF8', margin: '0 4px', fontSize: '0.9rem' }}>✦</span>

              {/* Item 3 — phone */}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', margin: '0 30px', color: '#1E293B', fontSize: '0.84rem', fontWeight: 800, letterSpacing: '0.03em' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.47 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                Contact School Office for Admission Process
              </span>
              <span style={{ color: '#F59E0B', margin: '0 4px', fontSize: '0.9rem' }}>✦</span>

              {/* Item 4 — classes */}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', margin: '0 30px', color: '#1E293B', fontSize: '0.84rem', fontWeight: 800, letterSpacing: '0.03em' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                Play Group to Class 5
              </span>
              <span style={{ color: '#EC4899', margin: '0 4px', fontSize: '0.9rem' }}>✦</span>

              {/* Item 5 — campus */}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', margin: '0 30px', color: '#1E293B', fontSize: '0.84rem', fontWeight: 800, letterSpacing: '0.03em' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-5.33-6-10a6 6 0 0 1 12 0c0 4.67-6 10-6 10z"/><circle cx="12" cy="11" r="2.5"/></svg>
                199 Awadhpuri Road, Vikas Nagar, Kanpur
              </span>
              <span style={{ color: '#F59E0B', margin: '0 4px', fontSize: '0.9rem' }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      <section id="home" className="group/hero relative min-h-screen overflow-hidden bg-gradient-to-br from-[#E0F2FE] via-[#FCE7F3] to-[#FEF9C3] transition-all duration-700" data-testid="hero-section">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FEF9C3]/40 via-[#E0F2FE]/35 to-[#FCE7F3]/40 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <DecoElements />

        {/* Moving decorative stars & circles matching footer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 18, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-36 left-10"
          >
            <Star className="w-7 h-7 text-[#F59E0B]/55 fill-[#FACC15]/45" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            className="absolute bottom-28 left-[14%] w-6 h-6 rounded-full bg-[#38BDF8]/30 border-2 border-[#0EA5E9]/40"
          />

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, -20, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
            className="absolute top-40 left-[44%]"
          >
            <Star className="w-5 h-5 text-[#A78BFA]/60 fill-[#A78BFA]/40" />
          </motion.div>

          <motion.div
            animate={{ x: [0, 8, 0], y: [0, -9, 0], scale: [1, 1.18, 1] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute top-36 right-[22%] w-5 h-5 rounded-full bg-[#F472B6]/35 border-2 border-[#EC4899]/40"
          />

          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, 22, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            className="absolute bottom-32 right-12"
          >
            <Star className="w-7 h-7 text-[#EC4899]/50 fill-[#F472B6]/35" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0], scale: [1, 1.18, 1] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
            className="hidden md:block absolute top-52 right-10 w-7 h-7 rounded-full bg-[#34D399]/30 border-2 border-[#10B981]/35"
          />

          <motion.div
            animate={{ x: [0, -6, 0], y: [0, 9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="hidden md:block absolute bottom-24 left-[48%] w-4 h-4 rounded-full bg-[#FACC15]/45 border border-[#F59E0B]/40"
          />
        </div>

        {/* ── Floating pastel shapes ── */}
        <div className="hero-shape hero-cloud" style={{ width:150, height:50, top:'9%', left:'3%', animationDuration:'8s', animationDelay:'-2s', opacity:0.75 }} />
        <div className="hero-shape hero-cloud" style={{ width:100, height:36, top:'72%', left:'75%', animationDuration:'10s', animationDelay:'-5s', opacity:0.65 }} />
        <div className="hero-shape hero-star"  style={{ width:34, height:34, background:'#ffd43b', top:'18%', left:'80%', animationDuration:'7s', animationDelay:'-1s', opacity:0.80 }} />
        <div className="hero-shape hero-star"  style={{ width:24, height:24, background:'#b197fc', top:'78%', left:'18%', animationDuration:'9s', animationDelay:'-3s', opacity:0.70 }} />
        <div className="hero-shape hero-block" style={{ width:46, height:46, background:'#ffc9c9', top:'30%', left:'2%', animationDuration:'9s', animationDelay:'-1s', opacity:0.75 }} />
        <div className="hero-shape hero-block" style={{ width:38, height:38, background:'#c0eb75', top:'85%', left:'50%', animationDuration:'11s', animationDelay:'-4s', opacity:0.60 }} />
        <div className="hero-shape hero-block" style={{ width:52, height:52, background:'#a5f3fc', top:'20%', right:'5%', animationDuration:'8s', animationDelay:'-2s', opacity:0.65 }} />

        {/* Layered Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z" fill="#BAE6FD" fillOpacity="0.55" />
            <path d="M0,65 C320,10 640,95 960,40 C1180,5 1340,35 1440,60 L1440,90 L0,90 Z" fill="#ffffff" />
          </svg>
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" style={{ paddingTop: '148px', paddingBottom: '80px' }}>
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 tracking-tighter"
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center lg:justify-start"
              >
                <EnrollButton
                  label="Explore Our School"
                  rightIcon={<ChevronRight size={18} style={{ strokeWidth: 3 }} />}
                  testId="hero-cta-button"
                  onClick={() => scrollToSection('about')}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <div className="relative max-w-md mx-auto">
                {/* Decorative dotted shapes behind image */}
                <div className="absolute -top-6 -right-6 w-[110%] h-[110%] border-2 border-dashed border-[#38BDF8] rounded-3xl opacity-30 rotate-3" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-dashed border-[#FACC15] rounded-full opacity-40" />
                <div className="absolute -top-3 -left-8 w-16 h-16 border-2 border-dashed border-[#FB7185] rounded-lg opacity-30 rotate-12" />
                <div className="rounded-3xl overflow-hidden shadow-[10px_10px_0px_#38BDF8] card-3d img-hover-zoom relative z-10">
                  <img
                    src="https://lh3.googleusercontent.com/d/1qA7c7n46MWb7qG8p7cLViyxpIjqRgyKa"
                    alt="Springers School Building"
                    className="w-full h-auto object-cover rounded-3xl"
                    data-testid="hero-school-image"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold mb-1" style={{ fontFamily: 'Fredoka' }}>
                      Springers School
                    </h3>
                    <p className="text-white/90 text-sm" style={{ fontFamily: 'Nunito' }}>
                      Unity in Diversity
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      {/* About Us Section - Kidzee style */}
      <section id="about-us" className="py-24 px-4 md:px-8 relative bg-white wave-section" data-testid="about-us-section">
        <DecoElements />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Circular Image with colored background */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center relative"
            >
              <div className="relative">
                {/* Purple/blue background blob behind circle */}
                <div className="absolute -inset-8 bg-[#E0F2FE] rounded-full" />
                <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-8 border-white shadow-2xl img-hover-zoom">
                  <img
                    src="https://lh3.googleusercontent.com/d/1qA7c7n46MWb7qG8p7cLViyxpIjqRgyKa"
                    alt="Springers School Campus"
                    className="w-full h-full object-cover"
                    data-testid="about-us-image"
                  />
                </div>
              </div>
            </motion.div>
            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="about-us-title">
                About Us
              </h2>
              <div className="w-24 h-1 bg-[#38BDF8] mb-8 rounded-full" />
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Fredoka' }}>Springers School</h3>
              <p className="text-base md:text-lg text-[#475569] mb-5 leading-relaxed" style={{ fontFamily: 'Nunito' }}>
                <strong>Springers School</strong> is a trusted name in early childhood education in Kanpur, nurturing young minds since the year 2000. Affiliated to the CBSE Board, we offer a joyful and enriching learning experience from Play Group to Class 5.
              </p>
              <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Fredoka' }}>Springers Advantage</h3>
              <p className="text-base md:text-lg text-[#475569] mb-5 leading-relaxed" style={{ fontFamily: 'Nunito' }}>
                Our motto <strong>"Unity in Diversity"</strong> reflects our belief in creating an inclusive, caring environment where every child feels valued. We blend modern teaching methods with traditional values to build a strong academic and moral foundation.
              </p>
              <p className="text-base md:text-lg text-[#475569] leading-relaxed" style={{ fontFamily: 'Nunito' }}>
                With experienced educators, a vibrant campus, and a curriculum focused on holistic development, Springers School is where little learners blossom into confident individuals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Springers School - Kidzee style with tilted photo cards */}
      <section id="why-choose" className="py-24 px-4 md:px-8 relative bg-[#E0F2FE] wave-section" data-testid="why-choose-section">
        <WaveTop color="#ffffff" />
        <DecoElements />
        <WaveBottom color="#ffffff" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-3">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="why-choose-title">
              Why Choose Springers School?
            </h2>
            <p className="text-base md:text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }}>
              Springers School is your experienced trusted partner in providing exceptional early education for your child. Here's why we stand out as the preferred choice for parents seeking the best for their little ones
            </p>
          </div>

          <SectionConnector className="w-full max-w-4xl mx-auto h-10 md:h-12 mb-5 opacity-70" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
            {[
              { img: 'https://images.unsplash.com/photo-1761208663763-c4d30657c910?w=400', title: 'Holistic Learning', desc: 'Fostering all-round development through a balanced blend of academics, play, and life skills.', rotate: '-3deg', borderColor: '#38BDF8', lipColor: '#BAE6FD', bgTint: 'rgba(224, 242, 254, 0.45)', Icon: BookOpen },
              { img: 'https://images.unsplash.com/photo-1777056491418-d4ff81a4ad92?w=400', title: 'Expert Educators', desc: 'Skilled teachers dedicated to nurturing every child\'s unique potential.', rotate: '3deg', borderColor: '#FACC15', lipColor: '#FDE68A', bgTint: 'rgba(254, 249, 195, 0.5)', Icon: GraduationCap },
              { img: 'https://images.unsplash.com/photo-1777056481869-feac70afe522?w=400', title: 'Safe and Secure', desc: 'A protected, child-friendly environment ensuring safety and peace of mind.', rotate: '-2deg', borderColor: '#FB7185', lipColor: '#FECDD3', bgTint: 'rgba(255, 228, 230, 0.5)', Icon: Shield },
              { img: 'https://images.unsplash.com/photo-1771765812031-22653b4c70a6?w=400', title: 'Innovative Learning', desc: 'Engaging, modern teaching methods that make learning fun and impactful.', rotate: '2deg', borderColor: '#34D399', lipColor: '#A7F3D0', bgTint: 'rgba(209, 250, 229, 0.5)', Icon: Lightbulb },
            ].map((item, index) => {
              const IconComponent = item.Icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="group text-center bg-white/95 backdrop-blur-sm rounded-3xl px-5 pt-8 pb-7 border-2 transition-all duration-300 hover:-translate-y-2.5"
                  style={{
                    borderColor: item.lipColor,
                    boxShadow: `0 6px 0 ${item.lipColor}, 0 14px 32px rgba(15, 23, 42, 0.07)`,
                  }}
                  data-testid={`why-choose-card-${index}`}
                >
                  {/* Tilted photo with dashed border + floating icon badge */}
                  <div className="relative mx-auto mb-7 w-[184px] h-[184px]">
                    {/* Soft pastel glow behind photo */}
                    <div
                      className="absolute inset-[-8px] rounded-3xl transition-transform duration-300 group-hover:scale-105"
                      style={{ background: item.bgTint, transform: `rotate(${item.rotate})` }}
                    />
                    {/* Dashed outline behind */}
                    <div
                      className="absolute inset-[-14px] border-2 border-dashed rounded-2xl opacity-75 transition-transform duration-300 group-hover:rotate-0"
                      style={{ borderColor: item.borderColor, transform: `rotate(${item.rotate})` }}
                    />
                    {/* Photo */}
                    <div
                      className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white img-hover-zoom transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105"
                      style={{ transform: `rotate(${item.rotate})` }}
                    >
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    {/* Floating colored icon badge */}
                    <div
                      className="absolute -bottom-3 -right-3 w-11 h-11 rounded-2xl flex items-center justify-center border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ backgroundColor: item.borderColor }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1E293B] mb-2" style={{ fontFamily: 'Fredoka' }}>
                    {item.title}
                  </h3>
                  <div
                    className="w-10 h-1 rounded-full mx-auto mb-3 transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: item.borderColor }}
                  />
                  <p className="text-sm text-[#475569] leading-relaxed font-semibold" style={{ fontFamily: 'Nunito' }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 md:px-8 relative bg-[#E0F2FE] wave-section" data-testid="about-section">
        <WaveTop color="#ffffff" />
        <DecoElements />
        <WaveBottom color="#ffffff" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="about-title">
              Our Learning Journey
            </h2>
            <p className="text-base md:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }} data-testid="about-description">
              From Play Group to Class 5 - watch them grow!
            </p>
          </div>

          <SectionConnector className="w-full max-w-4xl mx-auto h-10 md:h-12 mb-5 opacity-70" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((classInfo, index) => {
              const ClassIcon = classInfo.Icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  onClick={() => setIsEnrollOpen(true)}
                  className="group relative rounded-3xl p-6 border-2 cursor-pointer transition-all duration-300 hover:-translate-y-2.5 overflow-hidden flex flex-col justify-between"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: classInfo.borderCol,
                    boxShadow: `0 7px 0 ${classInfo.lip}, 0 18px 40px rgba(15, 23, 42, 0.08)`,
                  }}
                  data-testid={`class-card-${index}`}
                >
                  {/* Soft pastel corner tint */}
                  <div
                    className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-70 transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: classInfo.bgTint }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center border-2 border-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{
                        backgroundColor: classInfo.color,
                        boxShadow: `0 4px 0 ${classInfo.lip}, 0 8px 16px rgba(15,23,42,0.10), inset 0 1px 1px rgba(255,255,255,0.45)`,
                      }}
                    >
                      <ClassIcon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-[#1E293B] leading-snug mb-1.5" style={{ fontFamily: 'Fredoka' }}>
                      {classInfo.name}
                    </h3>

                    <div
                      className="w-9 h-1 rounded-full my-2.5 transition-all duration-300 group-hover:w-14"
                      style={{ backgroundColor: classInfo.color }}
                    />

                    <p className="text-sm text-[#475569] font-semibold leading-relaxed" style={{ fontFamily: 'Nunito' }}>
                      {classInfo.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4 md:px-8 relative bg-[#E0F2FE] wave-section" data-testid="gallery-section">
        <WaveTop color="#ffffff" />
        <DecoElements />
        {/* Extra gallery decorations */}
        <div className="absolute top-[15%] right-[3%] w-32 h-32 border-2 border-dashed border-[#38BDF8] rounded-full opacity-15" />
        <div className="absolute bottom-[20%] left-[2%] w-24 h-24 border-2 border-dashed border-[#FACC15] rounded-2xl opacity-15 rotate-12" />
        <div className="absolute top-[50%] right-[8%] w-16 h-16 border-2 border-dashed border-[#FB7185] rounded-full opacity-15" />
        <div className="absolute bottom-[35%] left-[12%] w-20 h-20 border-2 border-dashed border-[#34D399] rounded-2xl opacity-15 -rotate-6" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="gallery-title">
              Our Gallery
            </h2>
            <p className="text-base md:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }} data-testid="gallery-description">
              Capturing precious moments of learning, growth, and achievement
            </p>
          </div>

          <SectionConnector className="w-full max-w-3xl mx-auto h-10 md:h-12 mb-5 opacity-70" />

          <div className="flex flex-wrap justify-center gap-3.5 mb-14">
            {[
              { id: 'achievements', label: 'Achievements', bg: 'linear-gradient(180deg, #F43F5E 0%, #DC2626 100%)', lip: '#991B1B', text: '#FFFFFF', hoverBorder: '#F43F5E', Icon: Star, testId: 'gallery-tab-achievements' },
              { id: 'events', label: 'Events', bg: 'linear-gradient(180deg, #FDE047 0%, #FACC15 100%)', lip: '#CA8A04', text: '#1E293B', hoverBorder: '#FACC15', Icon: Smile, testId: 'gallery-tab-events' },
              { id: 'celebrations', label: 'Celebrations', bg: 'linear-gradient(180deg, #FB7185 0%, #F43F5E 100%)', lip: '#BE123C', text: '#FFFFFF', hoverBorder: '#FB7185', Icon: Heart, testId: 'gallery-tab-celebrations', reset: true },
              { id: 'classroom', label: 'Classroom Learning', bg: 'linear-gradient(180deg, #34D399 0%, #10B981 100%)', lip: '#047857', text: '#FFFFFF', hoverBorder: '#34D399', Icon: BookOpen, testId: 'gallery-tab-classroom' },
              { id: 'schoolAlbum', label: 'School Album', bg: 'linear-gradient(180deg, #A78BFA 0%, #8B5CF6 100%)', lip: '#6D28D9', text: '#FFFFFF', hoverBorder: '#A78BFA', Icon: FolderOpen, testId: 'gallery-tab-school-album' },
            ].map((tab) => {
              const isActive = activeGalleryTab === tab.id;
              const TabIcon = tab.Icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveGalleryTab(tab.id);
                    if (tab.reset) {
                      setSelectedMonth(null);
                      setSelectedFestival(null);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-extrabold text-sm transition-all duration-200 hover:-translate-y-1 active:translate-y-0.5 cursor-pointer"
                  style={{
                    fontFamily: 'Nunito',
                    background: isActive ? tab.bg : 'rgba(255,255,255,0.95)',
                    color: isActive ? tab.text : '#334155',
                    border: isActive ? `1.5px solid ${tab.lip}` : '2px solid #E2E8F0',
                    boxShadow: isActive
                      ? `0 4px 0 ${tab.lip}, 0 10px 20px rgba(15,23,42,0.14), inset 0 1px 1px rgba(255,255,255,0.45)`
                      : '0 3px 0 #CBD5E1, 0 6px 14px rgba(15,23,42,0.05)',
                    transform: isActive ? 'translateY(-2px)' : undefined,
                  }}
                  data-testid={tab.testId}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeGalleryTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Achievements Layout - Yellow & Green 3D Polaroid Showcase Cards */}
            {activeGalleryTab === 'achievements' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {galleryCategories.achievements.map((image, index) => {
                  const isYellow = index % 2 === 0;
                  const borderCol = isYellow ? '#FDE047' : '#6EE7B7';
                  const lipCol = isYellow ? '#FACC15' : '#34D399';
                  const accentCol = isYellow ? '#EAB308' : '#10B981';
                  const badgeTextCol = isYellow ? '#B45309' : '#047857';
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="group bg-white/95 rounded-3xl p-5 pb-6 border-2 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3"
                      style={{
                        borderColor: borderCol,
                        boxShadow: `0 7px 0 ${lipCol}, 0 18px 40px rgba(15, 23, 42, 0.10)`,
                      }}
                      data-testid={`gallery-image-achievements-${index}`}
                      onClick={() => {
                        const urls = galleryCategories.achievements.map(e => e.url);
                        setViewingPhotoList(urls);
                        setViewingPhotoIndex(index);
                        setViewingPhoto(image.url);
                      }}
                    >
                      <div className="relative mx-auto mb-5 w-full max-w-[300px] h-[250px]">
                        <div className="absolute inset-[-10px] border-2 border-dashed rounded-2xl opacity-75 transition-transform duration-300 group-hover:rotate-0" style={{ borderColor: accentCol, transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }} />
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white img-hover-zoom transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.03]" style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}>
                          <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 text-xs font-extrabold shadow-md" style={{ fontFamily: 'Nunito', color: badgeTextCol }}>
                            View Photo
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#1E293B] mb-1.5" style={{ fontFamily: 'Fredoka' }}>{image.title}</h3>
                      <div className="w-10 h-1 rounded-full mx-auto mb-2 transition-all duration-300 group-hover:w-16" style={{ backgroundColor: accentCol }} />
                      <p className="text-sm font-semibold text-[#475569]" style={{ fontFamily: 'Nunito' }}>{image.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Events Layout - Multi-Color 3D Polaroid Showcase Cards */}
            {activeGalleryTab === 'events' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {galleryCategories.events.map((image, index) => {
                  const eventThemes = [
                    { border: '#7DD3FC', lip: '#38BDF8', accent: '#0EA5E9', text: '#0369A1' },
                    { border: '#C4B5FD', lip: '#A78BFA', accent: '#8B5CF6', text: '#6D28D9' },
                    { border: '#FDE047', lip: '#FACC15', accent: '#EAB308', text: '#B45309' },
                    { border: '#F9A8D4', lip: '#F472B6', accent: '#EC4899', text: '#BE185D' },
                  ];
                  const theme = eventThemes[index % eventThemes.length];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="group bg-white/95 rounded-3xl p-5 pb-6 border-2 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3"
                      style={{
                        borderColor: theme.border,
                        boxShadow: `0 7px 0 ${theme.lip}, 0 18px 40px rgba(15, 23, 42, 0.10)`,
                      }}
                      data-testid={`gallery-image-events-${index}`}
                      onClick={() => {
                        const photos = image.photos || [image.url];
                        setViewingPhotoList(photos);
                        setViewingPhotoIndex(0);
                        setViewingPhoto(photos[0]);
                      }}
                    >
                      <div className="relative mx-auto mb-5 w-full max-w-[300px] h-[250px]">
                        <div className="absolute inset-[-10px] border-2 border-dashed rounded-2xl opacity-75 transition-transform duration-300 group-hover:rotate-0" style={{ borderColor: theme.accent, transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})` }} />
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white img-hover-zoom transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.03]" style={{ transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})` }}>
                          <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 text-xs font-extrabold shadow-md" style={{ fontFamily: 'Nunito', color: theme.text }}>
                            {(image.photos || [image.url]).length} Photos
                          </span>
                          <div className="absolute bottom-3 left-3 right-3 text-left">
                            <h3 className="text-white text-lg font-bold drop-shadow" style={{ fontFamily: 'Fredoka' }}>{image.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="w-10 h-1 rounded-full mx-auto mb-2 transition-all duration-300 group-hover:w-16" style={{ backgroundColor: theme.accent }} />
                      <p className="text-sm font-semibold text-[#475569]" style={{ fontFamily: 'Nunito' }}>{image.description}</p>
                    </motion.div>
                  );
                })}
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

                {/* Level 1: Months Grid — 3D Polaroid Showcase Cards */}
                {!selectedMonth && !selectedFestival && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {galleryCategories.celebrations.map((monthData, index) => {
                      const coverThumb = monthData.festivals[0]?.thumbnail;
                      const totalPhotos = monthData.festivals.reduce((sum, f) => sum + (f.photos?.length || 0), 0);
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          onClick={() => setSelectedMonth(monthData)}
                          className="group bg-white/95 rounded-3xl p-4 pb-5 border-2 text-center cursor-pointer transition-all duration-300 hover:-translate-y-3"
                          style={{
                            borderColor: `${monthData.color}55`,
                            boxShadow: `0 7px 0 ${monthData.color}44, 0 18px 36px rgba(15, 23, 42, 0.10)`,
                          }}
                          data-testid={`month-${monthData.month.toLowerCase()}`}
                        >
                          <div className="relative mx-auto mb-4 w-full h-[180px]">
                            <div
                              className="absolute inset-[-8px] border-2 border-dashed rounded-2xl opacity-75 transition-transform duration-300 group-hover:rotate-0"
                              style={{ borderColor: monthData.color, transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}
                            />
                            <div
                              className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border-4 border-white img-hover-zoom transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.03]"
                              style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}
                            >
                              {coverThumb ? (
                                <img src={coverThumb} alt={monthData.month} className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: `${monthData.color}20` }}>
                                  <Star className="w-10 h-10" style={{ color: monthData.color }} />
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                              <span
                                className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-white/95 text-xs font-extrabold shadow-md"
                                style={{ fontFamily: 'Nunito', color: monthData.color }}
                              >
                                {totalPhotos > 0 ? `${totalPhotos} Photos` : `${monthData.festivals.length} Event`}
                              </span>
                              <div className="absolute bottom-2.5 left-3 right-3 text-left">
                                <h3 className="text-white text-xl font-bold drop-shadow" style={{ fontFamily: 'Fredoka' }}>
                                  {monthData.month}
                                </h3>
                              </div>
                            </div>
                          </div>

                          <div
                            className="w-9 h-1 rounded-full mx-auto mb-2.5 transition-all duration-300 group-hover:w-14"
                            style={{ backgroundColor: monthData.color }}
                          />
                          <div className="flex flex-wrap justify-center gap-1">
                            {monthData.festivals.map((f, i) => (
                              <span
                                key={i}
                                className="text-xs font-bold px-2.5 py-1 rounded-full inline-block"
                                style={{ backgroundColor: `${monthData.color}18`, color: monthData.color, fontFamily: 'Nunito' }}
                              >
                                {f.name}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                {/* Level 2: Festivals for Selected Month — 3D Polaroid Showcase Cards */}
                {selectedMonth && !selectedFestival && (
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2 flex items-center space-x-3" style={{ fontFamily: 'Fredoka' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: selectedMonth.color }}>
                        <FolderOpen className="w-5 h-5 text-white" />
                      </div>
                      <span>{selectedMonth.month} Celebrations</span>
                    </h3>
                    <p className="text-base text-[#475569] mb-8 ml-[52px]" style={{ fontFamily: 'Nunito' }}>
                      {selectedMonth.festivals.map(f => f.name).join('  •  ')}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {selectedMonth.festivals.map((festival, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          onClick={() => festival.photos.length > 0 ? setSelectedFestival(festival) : null}
                          className={`group bg-white/95 rounded-3xl p-5 pb-6 border-2 text-center transition-all duration-300 hover:-translate-y-3 ${festival.photos.length > 0 ? 'cursor-pointer' : 'cursor-default'}`}
                          style={{
                            borderColor: `${selectedMonth.color}55`,
                            boxShadow: `0 7px 0 ${selectedMonth.color}44, 0 18px 40px rgba(15, 23, 42, 0.10)`,
                          }}
                          data-testid={`festival-${festival.name.toLowerCase().replace(/['\s]/g, '-')}`}
                        >
                          <div className="relative mx-auto mb-5 w-full h-[220px]">
                            <div
                              className="absolute inset-[-10px] border-2 border-dashed rounded-2xl opacity-75 transition-transform duration-300 group-hover:rotate-0"
                              style={{ borderColor: selectedMonth.color, transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})` }}
                            />
                            <div
                              className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white img-hover-zoom transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.03]"
                              style={{ transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})` }}
                            >
                              <img src={festival.thumbnail} alt={festival.name} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                              <span
                                className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 text-xs font-extrabold shadow-md"
                                style={{ fontFamily: 'Nunito', color: selectedMonth.color }}
                              >
                                {festival.photos.length > 0 ? `${festival.photos.length} Photos` : 'Coming Soon'}
                              </span>
                              <div className="absolute bottom-3 left-3 right-3 text-left">
                                <h4 className="text-white text-lg font-bold drop-shadow" style={{ fontFamily: 'Fredoka' }}>
                                  {festival.name}
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div
                            className="w-10 h-1 rounded-full mx-auto mb-2 transition-all duration-300 group-hover:w-16"
                            style={{ backgroundColor: selectedMonth.color }}
                          />
                          <p className="text-sm font-semibold text-[#475569]" style={{ fontFamily: 'Nunito' }}>
                            {festival.photos.length > 0 ? 'Click to view celebration memories' : 'Photos coming soon'}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Level 3: Photos for Selected Festival */}
                {selectedFestival && (
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6 flex items-center space-x-3" style={{ fontFamily: 'Fredoka' }}>
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
                          onClick={(e) => {
                            e.stopPropagation();
                            if (item.type === 'image') {
                              const imageItems = selectedFestival.photos.filter(p => p.type === 'image');
                              const imgIndex = imageItems.findIndex(p => p.url === item.url);
                              setViewingPhotoList(imageItems.map(p => p.url));
                              setViewingPhotoIndex(imgIndex >= 0 ? imgIndex : 0);
                              setViewingPhoto(item.url);
                            }
                          }}
                          data-testid={`festival-photo-${index}`}
                        >
                          {item.type === 'video' ? (
                            item.url.includes('drive.google.com') ? (
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
                              <video
                                src={item.url}
                                controls
                                className="w-full h-full object-cover"
                                title="Festival Video"
                              />
                            )
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

            {/* Classroom Learning Layout — 3D Polaroid Showcase Cards */}
            {activeGalleryTab === 'classroom' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {galleryCategories.classroom.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group bg-white/95 rounded-3xl p-5 pb-6 border-2 border-[#A7F3D0] text-center cursor-pointer transition-all duration-300 hover:-translate-y-3"
                    style={{
                      boxShadow: '0 7px 0 #A7F3D0, 0 18px 40px rgba(16, 185, 129, 0.14)',
                    }}
                    data-testid={`gallery-image-classroom-${index}`}
                    onClick={() => {
                      const photos = image.photos || [image.url];
                      setViewingPhotoList(photos);
                      setViewingPhotoIndex(0);
                      setViewingPhoto(photos[0]);
                    }}
                  >
                    <div className="relative mx-auto mb-5 w-full max-w-[300px] h-[250px]">
                      <div className="absolute inset-[-10px] border-2 border-dashed rounded-2xl opacity-75 transition-transform duration-300 group-hover:rotate-0" style={{ borderColor: '#10B981', transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }} />
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white img-hover-zoom transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.03]" style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}>
                        <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 text-[#047857] text-xs font-extrabold shadow-md" style={{ fontFamily: 'Nunito' }}>
                          {(image.photos || [image.url]).length} Photos
                        </span>
                        <div className="absolute bottom-3 left-3 right-3 text-left">
                          <h3 className="text-white text-lg font-bold drop-shadow" style={{ fontFamily: 'Fredoka' }}>{image.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="w-10 h-1 rounded-full bg-[#34D399] mx-auto mb-2 transition-all duration-300 group-hover:w-16" />
                    <p className="text-sm font-semibold text-[#475569]" style={{ fontFamily: 'Nunito' }}>{image.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* School Album Layout — 3D Polaroid Showcase Cards */}
            {activeGalleryTab === 'schoolAlbum' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {galleryCategories.schoolAlbum.map((album, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    onClick={() => album.images.length > 0 ? openGalleryGrid(album.images) : null}
                    className={`group bg-white/95 rounded-3xl p-5 pb-6 border-2 border-[#DDD6FE] text-center transition-all duration-300 hover:-translate-y-3 ${album.images.length > 0 ? 'cursor-pointer' : 'cursor-default'}`}
                    style={{
                      boxShadow: '0 7px 0 #DDD6FE, 0 18px 40px rgba(139, 92, 246, 0.14)',
                    }}
                    data-testid={`gallery-image-school-album-${index}`}
                  >
                    <div className="relative mx-auto mb-5 w-full max-w-[300px] h-[250px]">
                      <div className="absolute inset-[-10px] border-2 border-dashed rounded-2xl opacity-75 transition-transform duration-300 group-hover:rotate-0" style={{ borderColor: '#8B5CF6', transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})` }} />
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white img-hover-zoom transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.03]" style={{ transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})` }}>
                        <img src={album.url} alt={album.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 text-[#6D28D9] text-xs font-extrabold shadow-md" style={{ fontFamily: 'Nunito' }}>
                          {album.images.length > 0 ? `${album.images.length} Photos` : 'Coming Soon'}
                        </span>
                        <div className="absolute bottom-3 left-3 right-3 text-left">
                          <h3 className="text-white text-lg font-bold drop-shadow" style={{ fontFamily: 'Fredoka' }}>{album.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="w-10 h-1 rounded-full bg-[#A78BFA] mx-auto mb-2 transition-all duration-300 group-hover:w-16" />
                    <p className="text-sm font-semibold text-[#475569]" style={{ fontFamily: 'Nunito' }}>{album.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Our Happy Parents */}
      <section id="feedback" className="py-24 px-4 md:px-8 relative bg-white wave-section" data-testid="happy-parents-section">
        <WaveTop color="#E0F2FE" />
        <DecoElements />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-3">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="happy-parents-title">
              Our Happy Parents
            </h2>
            <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }}>
              Hear what parents say about their child's experience at Springers School
            </p>
          </div>

          <SectionConnector className="w-full max-w-3xl mx-auto h-10 md:h-12 mb-5 opacity-70" />

          {/* Live Auto-Rotating Parent Feedback Spotlight (Every 2 Seconds) */}
          <div
            className="max-w-4xl mx-auto mb-2"
            onMouseEnter={() => setIsFeedbackPaused(true)}
            onMouseLeave={() => setIsFeedbackPaused(false)}
            data-testid="live-feedback-spotlight"
          >
            <div
              className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-[#FFFBEB] via-white to-[#F0F9FF] border-2 border-[#BAE6FD] overflow-hidden"
              style={{
                boxShadow: '0 6px 0 #BAE6FD, 0 18px 40px rgba(14, 165, 233, 0.12)',
              }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-200 shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
                  </span>
                  <span className="text-xs font-extrabold tracking-wide uppercase text-rose-600" style={{ fontFamily: 'Nunito' }}>
                    Live Parent Feedback
                  </span>
                </div>

                <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-[#FACC15] text-[#F59E0B]" />
                  ))}
                </div>
              </div>

              <div className="min-h-[120px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={liveFeedbackIndex}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35 }}
                    className="w-full"
                  >
                    <p
                      className="text-base md:text-lg text-[#1E293B] font-semibold leading-relaxed mb-5 italic"
                      style={{ fontFamily: 'Nunito' }}
                    >
                      "{parentTestimonials[liveFeedbackIndex].text}"
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-white shadow-md"
                          style={{
                            background: parentTestimonials[liveFeedbackIndex].accent,
                            boxShadow: `0 3px 0 ${parentTestimonials[liveFeedbackIndex].lipColor}`,
                          }}
                        >
                          <span className="text-white font-bold text-lg" style={{ fontFamily: 'Fredoka' }}>
                            {parentTestimonials[liveFeedbackIndex].name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-[#1E293B] text-base" style={{ fontFamily: 'Fredoka' }}>
                            {parentTestimonials[liveFeedbackIndex].name}
                          </p>
                          <p className="text-xs font-bold text-[#64748B]" style={{ fontFamily: 'Nunito' }}>
                            {parentTestimonials[liveFeedbackIndex].child}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {parentTestimonials.map((item, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setLiveFeedbackIndex(idx)}
                            aria-label={`View feedback from ${item.name}`}
                            className="h-2.5 rounded-full transition-all duration-300 border-0 cursor-pointer"
                            style={{
                              width: liveFeedbackIndex === idx ? '24px' : '10px',
                              backgroundColor: liveFeedbackIndex === idx ? item.accent : '#CBD5E1',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 md:px-8 relative bg-[#E0F2FE] wave-section" data-testid="contact-section">
        <WaveTop color="#ffffff" />
        <DecoElements />
        <WaveBottom color="#ffffff" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="contact-title">
              Get in Touch
            </h2>
            <p className="text-base md:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }} data-testid="contact-description">
              We'd love to hear from you! Reach out for admissions or any queries
            </p>
          </div>

          <SectionConnector className="w-full max-w-3xl mx-auto h-10 md:h-12 mb-5 opacity-70" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Phone,
                color: '#0EA5E9',
                lipColor: '#BAE6FD',
                badgeShadow: '#0369A1',
                textColor: '#0369A1',
                bgTint: 'rgba(224, 242, 254, 0.55)',
                title: 'Phone',
                value: '+91-835 481183',
                action: 'Call Now',
                href: 'tel:+91835481183',
                rotate: '-3deg',
              },
              {
                icon: Mail,
                color: '#F59E0B',
                lipColor: '#FDE68A',
                badgeShadow: '#B45309',
                textColor: '#B45309',
                bgTint: 'rgba(254, 249, 195, 0.65)',
                title: 'Email',
                value: 'springerschool2000\n@gmail.com',
                action: 'Send Email',
                href: 'mailto:springerschool2000@gmail.com',
                rotate: '3deg',
              },
              {
                icon: Instagram,
                color: '#E1306C',
                lipColor: '#FBCFE8',
                badgeShadow: '#9D174D',
                textColor: '#BE185D',
                bgTint: 'rgba(252, 231, 243, 0.6)',
                title: 'Instagram',
                value: '@springersschoolkanpur',
                action: 'Follow Us',
                href: 'https://www.instagram.com/springersschoolkanpur/',
                external: true,
                rotate: '-2deg',
              },
              {
                icon: MapPin,
                color: '#FB7185',
                lipColor: '#FECDD3',
                badgeShadow: '#BE123C',
                textColor: '#BE123C',
                bgTint: 'rgba(255, 228, 230, 0.6)',
                title: 'Address',
                value: '199 Awadhpuri Road\nLakhanpur Society\nVikas Nagar, Kanpur',
                action: 'Open Map',
                href: 'https://maps.app.goo.gl/j97CUKAJeuKgrqHg9',
                external: true,
                rotate: '2deg',
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group block text-center bg-white/95 backdrop-blur-sm rounded-3xl px-5 pt-7 pb-6 border-2 transition-all duration-300 hover:-translate-y-2.5 no-underline"
                style={{
                  borderColor: item.lipColor,
                  boxShadow: `0 6px 0 ${item.lipColor}, 0 14px 32px rgba(15, 23, 42, 0.08)`,
                }}
                data-testid={`contact-card-${index}`}
              >
                {/* Tilted icon tile with dashed outline */}
                <div className="relative mx-auto mb-5 w-[132px] h-[132px]">
                  <div
                    className="absolute inset-[-10px] border-2 border-dashed rounded-2xl opacity-75 transition-transform duration-300 group-hover:rotate-0"
                    style={{ borderColor: item.color, transform: `rotate(${item.rotate})` }}
                  />
                  <div
                    className="relative w-full h-full rounded-2xl border-4 border-white shadow-md flex flex-col items-center justify-center transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105"
                    style={{
                      background: item.bgTint,
                      transform: `rotate(${item.rotate})`,
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: `0 4px 0 ${item.badgeShadow}, 0 8px 16px rgba(15,23,42,0.12), inset 0 1px 1px rgba(255,255,255,0.45)`,
                      }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1E293B] mb-1.5" style={{ fontFamily: 'Fredoka' }}>
                  {item.title}
                </h3>
                <div
                  className="w-9 h-1 rounded-full mx-auto mb-3 transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: item.color }}
                />
                <p
                  className="text-sm font-bold whitespace-pre-line leading-relaxed mb-4 min-h-[60px] flex items-center justify-center"
                  style={{ fontFamily: 'Nunito', color: item.textColor }}
                >
                  {item.value}
                </p>
                <span
                  className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-extrabold transition-all duration-200 group-hover:scale-105"
                  style={{
                    fontFamily: 'Nunito',
                    backgroundColor: item.bgTint,
                    color: item.textColor,
                    border: `1.5px solid ${item.lipColor}`,
                  }}
                >
                  <span>{item.action}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="pt-20 pb-28 px-4 md:px-8 relative bg-white wave-section" data-testid="location-section">
        <DecoElements />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="location-title">
              Find Us Here
            </h2>
            <p className="text-base md:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }} data-testid="location-description">
              Visit our vibrant campus and experience the Springers School difference
            </p>
          </div>

          <SectionConnector className="w-full max-w-3xl mx-auto h-10 md:h-12 mb-5 opacity-70" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-white rounded-3xl p-4 md:p-5 border-4 border-[#7DD3FC] relative"
            style={{
              boxShadow: '0 8px 0 #7DD3FC, 0 20px 40px rgba(14, 165, 233, 0.14)',
            }}
            data-testid="location-map"
          >
            {/* 3D Campus Info Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 px-2 py-2 rounded-2xl bg-[#F0F9FF] border-2 border-[#BAE6FD]">
              <div className="flex items-center gap-3.5">
                <div
                  className="w-12 h-12 rounded-2xl bg-[#FB7185] flex items-center justify-center shrink-0"
                  style={{
                    boxShadow: '0 4px 0 #BE123C, inset 0 1px 1px rgba(255,255,255,0.45)',
                  }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#1E293B] leading-tight" style={{ fontFamily: 'Fredoka' }}>
                    Springers School Campus
                  </h3>
                  <p className="text-xs md:text-sm font-bold text-[#0369A1]" style={{ fontFamily: 'Nunito' }}>
                    199 Awadhpuri Road, Lakhanpur Society, Vikas Nagar, Kanpur
                  </p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/j97CUKAJeuKgrqHg9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0.5 shrink-0 no-underline"
                style={{
                  fontFamily: 'Fredoka',
                  boxShadow: '0 4px 0 #0369A1, 0 8px 16px rgba(14, 165, 233, 0.25)',
                }}
              >
                <span>Open in Google Maps</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Framed Interactive Map */}
            <div className="rounded-2xl overflow-hidden border-2 border-[#BAE6FD] h-[340px] md:h-[400px] relative">
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
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative bg-gradient-to-br from-[#E0F2FE] via-[#FCE7F3] to-[#FEF9C3] text-[#1E293B] pt-14 pb-10 px-4 md:px-8" data-testid="footer">
        {/* Layered Top Wave */}
        <div className="absolute top-0 left-0 right-0 -translate-y-[98%] pointer-events-none">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z" fill="#BAE6FD" fillOpacity="0.65" />
            <path d="M0,65 C320,10 640,95 960,40 C1180,5 1340,35 1440,60 L1440,90 L0,90 Z" fill="#E0F2FE" />
          </svg>
        </div>

        {/* Moving decorative stars & circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 18, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-8 left-10"
          >
            <Star className="w-6 h-6 text-[#F59E0B]/55 fill-[#FACC15]/40" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-10 left-1/4 w-5 h-5 rounded-full bg-[#38BDF8]/30 border-2 border-[#0EA5E9]/35"
          />

          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, -20, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-12 left-1/3"
          >
            <Star className="w-4 h-4 text-[#A78BFA]/60 fill-[#A78BFA]/35" />
          </motion.div>

          <motion.div
            animate={{ x: [0, 8, 0], y: [0, -8, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute top-10 right-1/3 w-4 h-4 rounded-full bg-[#F472B6]/35 border-2 border-[#EC4899]/40"
          />

          <motion.div
            animate={{ y: [0, 11, 0], rotate: [0, 22, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute bottom-12 right-14"
          >
            <Star className="w-7 h-7 text-[#EC4899]/45 fill-[#F472B6]/30" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -9, 0], scale: [1, 1.18, 1] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            className="hidden md:block absolute top-14 right-16 w-6 h-6 rounded-full bg-[#34D399]/30 border-2 border-[#10B981]/35"
          />

          <motion.div
            animate={{ x: [0, -6, 0], y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="hidden md:block absolute bottom-8 left-14 w-3.5 h-3.5 rounded-full bg-[#FACC15]/45 border border-[#F59E0B]/40"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left pb-10 border-b border-[#BAE6FD]">
            {/* Brand & Tagline */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-14 h-14 rounded-2xl bg-white border-2 border-[#BAE6FD] flex items-center justify-center overflow-hidden"
                  style={{ boxShadow: '0 4px 0 #7DD3FC' }}
                >
                  <img
                    src="https://customer-assets.emergentagent.com/job_campus-hub-348/artifacts/4l9235vd_SPRINGERS%20SCHOOL.png"
                    alt="Springers School Logo"
                    className="w-full h-full object-contain scale-125"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold tracking-tight block leading-none text-[#1E293B]" style={{ fontFamily: 'Fredoka' }}>
                    Springers School
                  </span>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-white/80 border border-[#FDE68A] text-[#B45309] text-[11px] font-extrabold tracking-wide uppercase" style={{ fontFamily: 'Nunito' }}>
                    Est. 2000 • Play Group – Class 5
                  </span>
                </div>
              </div>
              <p className="text-sm md:text-base font-bold text-[#334155] max-w-xs leading-relaxed" style={{ fontFamily: 'Nunito' }}>
                Where little giggles grow into big dreams every day.
              </p>
            </div>

            {/* Quick Explore Links */}
            <div className="flex flex-col items-center">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#0369A1] mb-3.5" style={{ fontFamily: 'Nunito' }}>
                Explore Our School
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {[
                  { label: 'Home', id: 'home', bg: '#0EA5E9', shadow: '#0369A1' },
                  { label: 'Why Us', id: 'why-choose', bg: '#F59E0B', shadow: '#B45309' },
                  { label: 'Classes', id: 'about', bg: '#FB7185', shadow: '#BE123C' },
                  { label: 'Gallery', id: 'gallery', bg: '#10B981', shadow: '#047857' },
                  { label: 'Parents', id: 'feedback', bg: '#8B5CF6', shadow: '#5B21B6' },
                  { label: 'Contact', id: 'contact', bg: '#F97316', shadow: '#C2410C' },
                  { label: 'Map', id: 'location', bg: '#EC4899', shadow: '#9D174D' },
                ].map((link, idx) => (
                  <motion.button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.94, y: 1 }}
                    className={`px-4 py-1.5 rounded-full text-xs font-extrabold text-white cursor-pointer transition-shadow ${
                      activeSection === link.id ? 'ring-2 ring-white ring-offset-2 ring-offset-[#FCE7F3]' : ''
                    }`}
                    style={{
                      fontFamily: 'Fredoka',
                      backgroundColor: link.bg,
                      boxShadow: `0 3px 0 ${link.shadow}, 0 6px 12px rgba(15, 23, 42, 0.14)`,
                    }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Connect With Us */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#BE185D]" style={{ fontFamily: 'Nunito' }}>
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="tel:+91835481183"
                  aria-label="Call Springers School"
                  className="w-11 h-11 rounded-2xl bg-[#0EA5E9] hover:bg-[#0284C7] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 4px 0 #0369A1' }}
                >
                  <Phone className="w-5 h-5 text-white" />
                </a>
                <a
                  href="mailto:springerschool2000@gmail.com"
                  aria-label="Email Springers School"
                  className="w-11 h-11 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 4px 0 #B45309' }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/springersschoolkanpur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-2xl bg-[#E1306C] hover:bg-[#BE185D] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 4px 0 #9D174D' }}
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://maps.app.goo.gl/j97CUKAJeuKgrqHg9"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps Location"
                  className="w-11 h-11 rounded-2xl bg-[#FB7185] hover:bg-[#F43F5E] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 4px 0 #BE123C' }}
                >
                  <MapPin className="w-5 h-5 text-white" />
                </a>
              </div>
              <p className="text-xs font-bold text-[#475569]" style={{ fontFamily: 'Nunito' }}>
                199 Awadhpuri Rd, Vikas Nagar, Kanpur
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#475569] font-bold" style={{ fontFamily: 'Nunito' }}>
            <p>© 2000 Springers School. All rights reserved.</p>
            <p className="inline-flex items-center gap-1.5">
              <span>Built with</span>
              <Heart className="w-3.5 h-3.5 text-[#FB7185] fill-[#FB7185]" />
              <span>for happy little learners</span>
            </p>
          </div>
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