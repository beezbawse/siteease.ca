import React from 'react';
import { Button } from './Button';

interface CookieBannerProps {
  onAccept: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept }) => {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-4 shadow-lg transform transition-transform duration-300 ease-out"
      role="alertdialog"
      aria-labelledby="cookie-heading"
      aria-describedby="cookie-desc"
    >
      <div className="container mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 id="cookie-heading" className="text-sm font-semibold text-slate-900 mb-1">
            We value your privacy
          </h3>
          <p id="cookie-desc" className="text-sm text-slate-600">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            <a href="#" className="underline ml-1 hover:text-brand-600">Read our Privacy Policy</a>.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="outline" size="sm" onClick={onAccept}>
            Necessary Only
          </Button>
          <Button variant="primary" size="sm" onClick={onAccept}>
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};