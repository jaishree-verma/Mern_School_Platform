import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { School, Phone, Mail, MapPin, ChevronRight, BookOpen, Users, Star, Heart, X, ChevronLeft, ChevronRight as ChevronRightIcon, ChevronDown, FolderOpen, ArrowLeft, Shield, Lightbulb, GraduationCap, Smile, Quote, Instagram } from 'lucide-react';
import '@/App.css';

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

// Wave divider SVG
const WaveTop = ({ color = '#ffffff' }) => (
  <div className="wave-top">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,60 C360,0 720,0 1080,30 C1260,45 1380,60 1440,60 L1440,0 L0,0 Z" fill={color}/></svg>
  </div>
);

const WaveBottom = ({ color = '#ffffff' }) => (
  <div className="wave-bottom">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,0 C360,60 720,60 1080,30 C1260,15 1380,0 1440,0 L1440,60 L0,60 Z" fill={color}/></svg>
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
    <div className="min-h-screen relative bg-white">
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[96%] max-w-7xl" data-testid="main-navigation">
        <div className="backdrop-blur-xl bg-white/90 rounded-full shadow-[0_4px_32px_rgba(0,0,0,0.12)] px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="https://customer-assets.emergentagent.com/job_campus-hub-348/artifacts/4l9235vd_SPRINGERS%20SCHOOL.png" alt="Springers School Logo" className="w-12 h-12 object-contain rounded-lg shadow-sm" />
              <span className="text-xl font-bold text-[#1E293B]" style={{ fontFamily: 'Fredoka' }}>Springers School</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => scrollToSection('home')}
                className="px-4 py-2 rounded-full font-bold text-[#475569] hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] transition-colors text-sm"
                data-testid="nav-home-link"
                style={{ fontFamily: 'Nunito' }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about-us')}
                className="px-4 py-2 rounded-full font-bold text-[#475569] hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] transition-colors text-sm"
                data-testid="nav-about-link"
                style={{ fontFamily: 'Nunito' }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 rounded-full font-bold text-[#475569] hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] transition-colors text-sm"
                data-testid="nav-learning-link"
                style={{ fontFamily: 'Nunito' }}
              >
                Learning Journey
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="px-4 py-2 rounded-full font-bold text-[#475569] hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] transition-colors text-sm"
                data-testid="nav-gallery-link"
                style={{ fontFamily: 'Nunito' }}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('feedback')}
                className="px-4 py-2 rounded-full font-bold text-[#475569] hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] transition-colors text-sm"
                data-testid="nav-feedback-link"
                style={{ fontFamily: 'Nunito' }}
              >
                Feedback
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 rounded-full font-bold text-[#475569] hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] transition-colors text-sm"
                data-testid="nav-contact-link"
                style={{ fontFamily: 'Nunito' }}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="px-4 py-2 rounded-full bg-[#FACC15] text-[#1E293B] font-bold hover:-translate-y-1 active:translate-y-0 transition-transform text-sm"
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
      <div className="fixed top-[84px] left-0 right-0 z-40 bg-[#3B82F6] py-1 overflow-hidden shadow-sm" data-testid="admission-banner">
        <div className="admission-scroll">
          <div className="admission-text whitespace-nowrap inline-block" style={{ fontFamily: 'Nunito' }}>
            <span className="text-white text-sm font-semibold mx-8">
              🎓 Admission Open for 2026-27 
            </span>
            <span className="text-white text-sm font-semibold mx-8">
              📚 Affiliated to CBSE Board 
            </span>
            <span className="text-white text-sm font-semibold mx-8">
              📞 Contact School Office Now for Admission Process
            </span>
            <span className="text-white text-sm font-semibold mx-8">
              🎓 Admission Open for 2026-27 
            </span>
            <span className="text-white text-sm font-semibold mx-8">
              📚 Affiliated to CBSE Board 
            </span>
            <span className="text-white text-sm font-semibold mx-8">
              📞 Contact School Office Now for Admission Process
            </span>
          </div>
        </div>
      </div>

      <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FAFAF9] via-[#E0F2FE] to-[#FEF3C7]" data-testid="hero-section">
        <DecoElements />
        <WaveBottom color="#ffffff" />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-32 pb-20">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
      <section className="py-24 px-4 md:px-8 relative bg-[#E0F2FE] wave-section" data-testid="why-choose-section">
        <WaveTop color="#ffffff" />
        <DecoElements />
        <WaveBottom color="#ffffff" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="why-choose-title">
              Why Choose Springers School?
            </h2>
            <p className="text-base md:text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }}>
              Springers School is your experienced trusted partner in providing exceptional early education for your child. Here's why we stand out as the preferred choice for parents seeking the best for their little ones
            </p>
          </div>

          <SectionConnector className="w-full max-w-4xl mx-auto mb-8 opacity-70" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { img: 'https://images.unsplash.com/photo-1761208663763-c4d30657c910?w=400', title: 'Holistic Learning', desc: 'Fostering all-round development through a balanced blend of academics, play, and life skills.', rotate: '-3deg', borderColor: '#38BDF8' },
              { img: 'https://images.unsplash.com/photo-1777056491418-d4ff81a4ad92?w=400', title: 'Expert Educators', desc: 'Skilled teachers dedicated to nurturing every child\'s unique potential.', rotate: '3deg', borderColor: '#FACC15' },
              { img: 'https://images.unsplash.com/photo-1777056481869-feac70afe522?w=400', title: 'Safe and Secure', desc: 'A protected, child-friendly environment ensuring safety and peace of mind.', rotate: '-2deg', borderColor: '#FB7185' },
              { img: 'https://images.unsplash.com/photo-1771765812031-22653b4c70a6?w=400', title: 'Innovative Learning', desc: 'Engaging, modern teaching methods that make learning fun and impactful.', rotate: '2deg', borderColor: '#34D399' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`why-choose-card-${index}`}
              >
                {/* Tilted photo with dashed border */}
                <div className="relative mx-auto mb-6 w-[200px] h-[200px]">
                  {/* Dashed diamond outline behind */}
                  <div className="absolute inset-[-16px] border-2 border-dashed rounded-2xl opacity-40" style={{ borderColor: item.borderColor, transform: `rotate(${item.rotate})` }} />
                  {/* Photo */}
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white img-hover-zoom" style={{ transform: `rotate(${item.rotate})` }}>
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'Fredoka' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed" style={{ fontFamily: 'Nunito' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 md:px-8 relative bg-[#E0F2FE] wave-section" data-testid="about-section">
        <WaveTop color="#ffffff" />
        <DecoElements />
        <WaveBottom color="#ffffff" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="about-title">
              Our Learning Journey
            </h2>
            <p className="text-base md:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }} data-testid="about-description">
              From Play Group to Class 5 - watch them grow!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {classes.map((classInfo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 float-card cursor-pointer border-l-4"
                style={{ borderLeftColor: classInfo.color }}
                data-testid={`class-card-${index}`}
              >
                <div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center" style={{ backgroundColor: classInfo.color }}>
                  <School className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-1" style={{ fontFamily: 'Fredoka' }}>
                  {classInfo.name}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed" style={{ fontFamily: 'Nunito' }}>
                  {classInfo.description}
                </p>
              </motion.div>
            ))}
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
        <SectionConnector className="absolute top-[12%] left-[10%] w-[35%] z-[0] opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="gallery-title">
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
            {/* Achievements Layout - Tilted Cards */}
            {activeGalleryTab === 'achievements' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {galleryCategories.achievements.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="text-center cursor-pointer"
                    data-testid={`gallery-image-achievements-${index}`}
                    onClick={() => {
                      const urls = galleryCategories.achievements.map(e => e.url);
                      setViewingPhotoList(urls);
                      setViewingPhotoIndex(index);
                      setViewingPhoto(image.url);
                    }}
                  >
                    <div className="relative mx-auto mb-4 w-[260px] h-[260px]">
                      <div className="absolute inset-[-14px] border-2 border-dashed rounded-2xl opacity-40" style={{ borderColor: '#38BDF8', transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})` }} />
                      <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white img-hover-zoom cursor-pointer" style={{ transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})` }}>
                        <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-1" style={{ fontFamily: 'Fredoka' }}>{image.title}</h3>
                    <p className="text-sm text-[#475569]" style={{ fontFamily: 'Nunito' }}>{image.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Events Layout - Tilted Cards with Title Overlay */}
            {activeGalleryTab === 'events' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {galleryCategories.events.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="text-center cursor-pointer"
                    data-testid={`gallery-image-events-${index}`}
                    onClick={() => {
                      const photos = image.photos || [image.url];
                      setViewingPhotoList(photos);
                      setViewingPhotoIndex(0);
                      setViewingPhoto(photos[0]);
                    }}
                  >
                    <div className="relative mx-auto mb-4 w-[260px] h-[260px]">
                      <div className="absolute inset-[-14px] border-2 border-dashed rounded-2xl opacity-40" style={{ borderColor: '#FACC15', transform: `rotate(${index % 2 === 0 ? '3deg' : '-3deg'})` }} />
                      <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white img-hover-zoom" style={{ transform: `rotate(${index % 2 === 0 ? '3deg' : '-3deg'})` }}>
                        <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3" style={{ transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})` }}>
                          <h3 className="text-white text-base font-bold" style={{ fontFamily: 'Fredoka' }}>{image.title}</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[#475569]" style={{ fontFamily: 'Nunito' }}>{image.description}</p>
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
                        className="bg-white rounded-2xl p-5 card-3d cursor-pointer text-center border-4 border-white hover:border-current transition-colors"
                        style={{ boxShadow: `6px 6px 0px ${monthData.color}` }}
                        data-testid={`month-${monthData.month.toLowerCase()}`}
                      >
                        <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: monthData.color }}>
                          <Star className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'Fredoka' }}>
                          {monthData.month}
                        </h3>
                        <div className="mt-2 space-y-1">
                          {monthData.festivals.map((f, i) => (
                            <p key={i} className="text-xs font-semibold px-2 py-1 rounded-full inline-block mx-0.5" style={{ backgroundColor: `${monthData.color}20`, color: monthData.color, fontFamily: 'Nunito' }}>
                              {f.name} Celebrated
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Level 2: Festivals for Selected Month */}
                {selectedMonth && !selectedFestival && (
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2 flex items-center space-x-3" style={{ fontFamily: 'Fredoka' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: selectedMonth.color }}>
                        <FolderOpen className="w-5 h-5 text-white" />
                      </div>
                      <span>{selectedMonth.month} Celebrations</span>
                    </h3>
                    <p className="text-base text-[#475569] mb-6 ml-[52px]" style={{ fontFamily: 'Nunito' }}>
                      {selectedMonth.festivals.map(f => f.name).join('  •  ')}
                    </p>
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

            {/* Classroom Learning Layout - Tilted Cards */}
            {activeGalleryTab === 'classroom' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {galleryCategories.classroom.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="text-center cursor-pointer"
                    data-testid={`gallery-image-classroom-${index}`}
                    onClick={() => {
                      const photos = image.photos || [image.url];
                      setViewingPhotoList(photos);
                      setViewingPhotoIndex(0);
                      setViewingPhoto(photos[0]);
                    }}
                  >
                    <div className="relative mx-auto mb-4 w-[260px] h-[260px]">
                      <div className="absolute inset-[-14px] border-2 border-dashed rounded-2xl opacity-40" style={{ borderColor: '#34D399', transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})` }} />
                      <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white img-hover-zoom cursor-pointer" style={{ transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})` }}>
                        <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-1" style={{ fontFamily: 'Fredoka' }}>{image.title}</h3>
                    <p className="text-sm text-[#475569]" style={{ fontFamily: 'Nunito' }}>{image.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* School Album Layout - Tilted Cards */}
            {activeGalleryTab === 'schoolAlbum' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-3xl mx-auto">
                {galleryCategories.schoolAlbum.map((album, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    onClick={() => album.images.length > 0 ? openGalleryGrid(album.images) : null}
                    className={`text-center ${album.images.length > 0 ? 'cursor-pointer' : ''}`}
                    data-testid={`gallery-image-school-album-${index}`}
                  >
                    <div className="relative mx-auto mb-4 w-[260px] h-[260px]">
                      <div className="absolute inset-[-14px] border-2 border-dashed rounded-2xl opacity-40" style={{ borderColor: '#A78BFA', transform: `rotate(${index % 2 === 0 ? '3deg' : '-3deg'})` }} />
                      <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white img-hover-zoom" style={{ transform: `rotate(${index % 2 === 0 ? '3deg' : '-3deg'})` }}>
                        <img src={album.url} alt={album.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-1" style={{ fontFamily: 'Fredoka' }}>{album.title}</h3>
                    <p className="text-sm text-[#475569]" style={{ fontFamily: 'Nunito' }}>{album.description}</p>
                    {album.images.length > 0 && (
                      <p className="text-xs text-[#38BDF8] mt-1 font-semibold" style={{ fontFamily: 'Nunito' }}>Click to view {album.images.length} photos</p>
                    )}
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="happy-parents-title">
              Our Happy Parents
            </h2>
            <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }}>
              Hear what parents say about their child's experience at Springers School
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Priya Sharma', child: 'Mother of Aarav, Class 2', text: 'Springers School has been a wonderful journey for my son. The teachers are so caring and attentive. Aarav loves going to school every day and has grown so much in confidence and academics.' },
              { name: 'Rajesh Gupta', child: 'Father of Ananya, Nursery', text: 'We were looking for a school that feels like a second home for our daughter. Springers School exceeded our expectations with their nurturing environment and excellent teaching approach.' },
              { name: 'Neha Verma', child: 'Mother of Ishaan, Class 4', text: 'The best decision we made was enrolling Ishaan at Springers. The school focuses not just on studies but on overall personality development. The celebrations and activities are amazing!' },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 relative float-card"
                data-testid={`testimonial-card-${index}`}
              >
                <Quote className="w-10 h-10 text-[#FB7185] mb-4 opacity-50" />
                <p className="text-sm text-[#475569] leading-relaxed mb-6 italic" style={{ fontFamily: 'Nunito' }}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FB7185] to-[#FACC15] flex items-center justify-center">
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Fredoka' }}>{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm" style={{ fontFamily: 'Fredoka' }}>{testimonial.name}</p>
                    <p className="text-xs text-[#475569]" style={{ fontFamily: 'Nunito' }}>{testimonial.child}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 md:px-8 relative bg-[#E0F2FE] wave-section" data-testid="contact-section">
        <WaveTop color="#ffffff" />
        <DecoElements />
        <WaveBottom color="#ffffff" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="contact-title">
              Get in Touch
            </h2>
            <p className="text-base md:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Nunito' }} data-testid="contact-description">
              We'd love to hear from you! Reach out for admissions or any queries
            </p>
          </div>

          <SectionConnector className="w-full max-w-3xl mx-auto mb-8 opacity-70" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Phone, color: '#38BDF8', title: 'Phone', value: '+91-835 481183', rotate: '-3deg', borderColor: '#38BDF8' },
              { icon: Mail, color: '#FACC15', title: 'Email', value: 'springerschool2000\n@gmail.com', rotate: '3deg', borderColor: '#FACC15' },
              { icon: Instagram, color: '#E1306C', title: 'Instagram', value: '@springersschoolkanpur', rotate: '-2deg', borderColor: '#E1306C' },
              { icon: MapPin, color: '#FB7185', title: 'Address', value: '199 Awadhpuri Road\nLakhanpur Society\nVikas Nagar, Kanpur', rotate: '2deg', borderColor: '#FB7185' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`contact-card-${index}`}
              >
                {/* Tilted card with dashed border */}
                <div className="relative mx-auto mb-6 w-[200px] h-[200px]">
                  <div className="absolute inset-[-16px] border-2 border-dashed rounded-2xl opacity-40" style={{ borderColor: item.borderColor, transform: `rotate(${item.rotate})` }} />
                  <div className="w-full h-full rounded-2xl bg-white shadow-lg border-4 border-white flex flex-col items-center justify-center float-card" style={{ transform: `rotate(${item.rotate})` }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: item.color }}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'Fredoka' }}>{item.title}</h3>
                  </div>
                </div>
                <p className="text-sm font-semibold whitespace-pre-line leading-relaxed" style={{ fontFamily: 'Nunito', color: item.color }}>
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="py-24 px-4 md:px-8 relative bg-white wave-section" data-testid="location-section">
        <DecoElements />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tighter" style={{ fontFamily: 'Fredoka' }} data-testid="location-title">
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
            style={{ height: '350px' }}
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

      <footer className="relative bg-[#1E3A8A] text-white py-12 px-4 md:px-8" data-testid="footer">
        <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16"><path d="M0,80 C360,0 720,0 1080,40 C1260,60 1380,80 1440,80 L1440,80 L0,80 Z" fill="#1E3A8A"/></svg>
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="https://customer-assets.emergentagent.com/job_campus-hub-348/artifacts/4l9235vd_SPRINGERS%20SCHOOL.png" alt="Logo" className="w-12 h-12 object-contain rounded-lg" />
            <span className="text-2xl font-semibold" style={{ fontFamily: 'Fredoka' }}>Springers School</span>
          </div>
          <p className="text-base font-medium text-white/80 mb-4" style={{ fontFamily: 'Nunito' }}>
            Shaping tomorrow's leaders, one child at a time
          </p>
          <p className="text-sm text-white/60" style={{ fontFamily: 'Nunito' }}>
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