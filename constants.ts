import { Server, Globe, ShieldCheck, RefreshCw } from 'lucide-react';
import { FeatureItem, NavItem, PricingPlan } from './types';

export const APP_NAME = "SiteEase";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    title: "Secure Hosting",
    description: "Enterprise-grade hosting infrastructure ensures your site is always fast, secure, and available to your customers.",
    icon: Server
  },
  {
    title: "Domain Registration",
    description: "We handle the complexity of DNS management and renewals, so you never have to worry about losing your online identity.",
    icon: Globe
  },
  {
    title: "Automated Backups",
    description: "Peace of mind included. We perform daily automated backups, allowing instant restoration if anything ever goes wrong.",
    icon: ShieldCheck
  },
  {
    title: "Monthly Updates",
    description: "Need a change? Just ask. Our Hassle-Free bundle includes monthly content updates and technical maintenance on request.",
    icon: RefreshCw
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Essential",
    price: "$49",
    period: "/mo",
    features: [
      "Secure Cloud Hosting",
      "Domain Management",
      "Daily Backups",
      "Quarterly Content Updates",
      "Standard Support"
    ],
    cta: "Start Essential"
  },
  {
    name: "Hassle-Free Pro",
    price: "$99",
    period: "/mo",
    features: [
      "Everything in Essential",
      "Priority Hosting Tier",
      "Real-time Security Monitoring",
      "Monthly Content Updates",
      "Priority Email & Phone Support"
    ],
    cta: "Go Hassle-Free",
    isPopular: true
  }
];