import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../UI/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40" aria-label="Introduction">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Your Professional Website, <span className="text-brand-600">Hassle-Free.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
              We build, host, and manage your online presence so you can focus on running your business. No technical skills required.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
                View Plans <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})}>
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-600" />
                <span>Fully Managed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-600" />
                <span>WCAG Accessible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-600" />
                <span>Mobile Optimized</span>
              </div>
            </div>
          </div>

          {/* Visual / Image */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none">
            <div className="relative rounded-2xl bg-gradient-to-tr from-brand-100 to-slate-100 p-8 shadow-2xl border border-slate-200">
               {/* Abstract representation of a dashboard/website builder */}
               <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                  <div className="h-8 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex gap-4">
                      <div className="h-32 w-1/3 bg-slate-100 rounded animate-pulse"></div>
                      <div className="flex-1 space-y-3">
                        <div className="h-4 bg-slate-100 rounded w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-slate-100 rounded w-1/2 animate-pulse"></div>
                        <div className="h-4 bg-slate-100 rounded w-5/6 animate-pulse"></div>
                        <div className="h-10 bg-brand-50 rounded w-1/3 mt-4"></div>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                     <CheckCircle2 className="h-5 w-5" />
                   </div>
                   <div>
                     <p className="font-semibold text-slate-900 text-sm">Update Complete</p>
                     <p className="text-xs text-slate-500">Your monthly changes are live.</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};