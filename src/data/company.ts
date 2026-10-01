// ============================================
// Airmen Engineers — Company Data
// ============================================

import { ContactInfo, Stat, TimelineEvent, FeatureCard } from '@/types';

export const COMPANY_NAME = 'Airmen Engineers';
export const COMPANY_TAGLINE = 'Industrial Air Compressor & Material Handling Solutions Since 1996';
export const COMPANY_ESTABLISHED = 1996;

export const COMPANY_DESCRIPTION = 
  'Airmen Engineers is a leading supplier, distributor, and service provider of industrial air compressors, material handling equipment, compressed air piping systems, smart monitoring solutions, and power generation equipment. Established in 1996, we have built a reputation for engineering excellence and reliable after-sales support across India.';

export const COMPANY_SHORT_DESCRIPTION = 
  'Leading supplier of industrial air compressors, forklifts, compressed air piping, smart monitoring and power solutions since 1996.';

export const CONTACT_INFO: ContactInfo = {
  registeredOffice: {
    label: 'Registered Office',
    address: '310-311 Vardhman Seven Eleven Plaza, LSC 11 M2K Naharpur Road, Delhi-110085, INDIA',
    phone: ['+91-9212303791', '+91-8588855726'],
    email: ['sales@airmen.in', 'karan@airmen.in'],
  },
  headOffice: {
    label: 'Head Office',
    address: 'Plot No. C-53, Road no. 1, Prahalad Vihar, Near Sector-25, Rohini, Delhi 110085, INDIA',
    phone: ['+91-9212303791', '+91-8588855726'],
    email: ['sales@airmen.in'],
  },
  serviceEnquiry: {
    label: 'Service Enquiry',
    phone: ['+91-9212303792', '+91-9212303795'],
    email: ['ajay.mishra@airmen.in', 'vikram.pradhan@airmen.in'],
  },
  branch: {
    label: 'Branch Office',
    address: 'DHARUHERA, Vipul Garden, Haryana',
    phone: ['+91-9212303791'],
    email: ['sales@airmen.in'],
  },
};

export const WHATSAPP_NUMBER = '919212303791';

export const COMPANY_STATS: Stat[] = [
  { value: '1996', label: 'Established' },
  { value: '29', label: 'Years Experience', suffix: '+' },
  { value: '5000', label: 'Customers Served', suffix: '+' },
  { value: '24/7', label: 'Service Support' },
];

export const COMPANY_TIMELINE: TimelineEvent[] = [
  {
    year: '1996',
    title: 'Company Founded',
    description: 'Airmen Engineers established in Delhi as a pneumatic equipment supplier and distributor.',
  },
  {
    year: '2000',
    title: 'Kaeser Partnership',
    description: 'Became authorized dealer and service franchise for Kaeser Kompressoren, Germany.',
  },
  {
    year: '2008',
    title: 'Material Handling Division',
    description: 'Expanded into material handling solutions with EP Forklifts partnership.',
  },
  {
    year: '2015',
    title: 'Smart Solutions',
    description: 'Introduced AIRpipe compressed air piping solutions for efficient distribution systems.',
  },
  {
    year: '2020',
    title: 'Power Solutions',
    description: 'Added Greaves Cotton power generation solutions to the product portfolio.',
  },
  {
    year: 'Today',
    title: 'Industry Leader',
    description: 'Serving 5000+ customers across multiple industries with comprehensive engineering solutions.',
  },
];

export const WHY_AIRMEN: FeatureCard[] = [
  {
    icon: 'Award',
    title: 'Proven Experience',
    description: 'Over 29 years of expertise in industrial air compressor and material handling solutions.',
  },
  {
    icon: 'Handshake',
    title: 'Trusted Partnerships',
    description: 'Authorized dealer for world-class brands including Kaeser, EP Equipment, and AIM.',
  },
  {
    icon: 'Wrench',
    title: 'Technical Expertise',
    description: 'Specialized engineering team with deep knowledge of compressed air systems.',
  },
  {
    icon: 'HeadsetIcon',
    title: 'After-Sales Support',
    description: 'Comprehensive service and maintenance support with 24/7 availability.',
  },
  {
    icon: 'Zap',
    title: 'Energy Efficiency',
    description: 'Energy audit services and efficient solutions to reduce operational costs.',
  },
  {
    icon: 'Clock',
    title: 'Fast Response',
    description: 'Quick turnaround on service calls, spare parts, and emergency rental compressors.',
  },
];

export const MISSION = [
  'Provide reliable, energy-efficient industrial solutions',
  'Deliver exceptional technical expertise',
  'Ensure comprehensive after-sales support',
  'Help customers optimize operations and achieve business goals',
];

export const VISION = [
  'Be the most trusted industrial partner in India',
  'Lead in air compressors and material handling solutions',
  'Innovate with smart monitoring systems',
  'Set the benchmark for engineering excellence and customer service',
];
