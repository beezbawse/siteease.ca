import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../../constants';
import { Button } from '../UI/Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600">
            Choose the level of service that fits your business. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-3xl border ${plan.isPopular ? 'border-brand-600 shadow-xl' : 'border-slate-200 shadow-sm'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 -mt-3 mr-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-600 text-white uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900 tracking-tight">{plan.price}</span>
                  <span className="ml-1 text-xl font-medium text-slate-500">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1" aria-label={`Features included in ${plan.name} plan`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-600 shrink-0 mr-3" aria-hidden="true" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.isPopular ? 'primary' : 'outline'} 
                className="w-full"
                onClick={() => window.location.href = '#contact'}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};