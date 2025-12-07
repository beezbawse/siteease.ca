import React from 'react';
import { Hexagon } from 'lucide-react';
import { APP_NAME } from '../../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Hexagon className="h-6 w-6 text-brand-600 fill-brand-100" />
              <span className="text-lg font-bold text-slate-900">{APP_NAME}</span>
            </a>
            <p className="text-slate-500 max-w-sm mb-6">
              Empowering small businesses with managed website solutions. 
              We handle the tech, you handle the business.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Service</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#features" className="hover:text-brand-600">Features</a></li>
              <li><a href="#pricing" className="hover:text-brand-600">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-600">Domain Checker</a></li>
              <li><a href="#" className="hover:text-brand-600">Hosting Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-600">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-600">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} {APP_NAME}. All rights reserved.</p>
          <p>Designed with accessibility in mind.</p>
        </div>
      </div>
    </footer>
  );
};