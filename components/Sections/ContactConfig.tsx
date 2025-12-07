import React, { useState } from 'react';
import { Button } from '../UI/Button';

export const ContactConfig: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="contact-heading" className="text-3xl font-bold tracking-tight mb-6">
              Ready to simplify your web presence?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Get started with SiteEase today. Fill out the form, and our onboarding specialist will contact you within 24 hours to begin your hassle-free journey.
            </p>
            <div className="space-y-4 text-slate-300">
               <p><strong>Email:</strong> support@siteease.ca</p>
               <p><strong>Hours:</strong> Mon-Fri, 9am - 5pm EST</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 text-slate-900 shadow-xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-900">Message Sent!</h3>
                <p className="mt-2 text-sm text-slate-500">We'll be in touch shortly.</p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm p-3 border"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm p-3 border"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm p-3 border"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Request Consultation'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};