import React, { useState, useEffect } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { Features } from './components/Sections/Features';
import { Pricing } from './components/Sections/Pricing';
import { CookieBanner } from './components/UI/CookieBanner';
import { ContactConfig } from './components/Sections/ContactConfig';

export default function App() {
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('siteease_consent');
    if (!consent) {
      setIsCookieBannerVisible(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('siteease_consent', 'true');
    setIsCookieBannerVisible(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-brand-600 text-white px-4 py-2 rounded shadow-lg">
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <ContactConfig />
      </main>

      <Footer />
      
      {isCookieBannerVisible && (
        <CookieBanner onAccept={handleAcceptCookies} />
      )}
    </div>
  );
}