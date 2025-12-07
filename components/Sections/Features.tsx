import React from 'react';
import { CORE_FEATURES } from '../../constants';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50" aria-labelledby="features-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            The Hassle-Free Bundle
          </h2>
          <p className="text-lg text-slate-600">
            We don't just build websites; we keep them alive. Every SiteEase plan includes these four pillars of digital peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group"
              >
                <div className="h-12 w-12 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};