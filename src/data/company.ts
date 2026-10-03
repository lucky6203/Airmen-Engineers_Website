// ============================================
// Airmen Engineers — Company Data
// ============================================

import { ContactInfo, Stat, TimelineEvent, FeatureCard } from '@/types';

export const COMPANY_NAME = 'Airmen Engineers';
export const COMPANY_TAGLINE = 'Industrial Air Compressor & Material Handling Solutions Since 1996';
export const COMPANY_ESTABLISHED = 1996;

export const COMPANY_DESCRIPTION = 
  'Airmen Engineers is a premier industrial engineering partner and precision manufacturer. Alongside Tier-1 OEM alliances for Kaeser compressors, EP forklifts, Greaves power systems, and AIRpipe networks, we operate a dedicated in-house closed-die forging and CNC machining plant in Gajraula (U.P.) producing high-precision automotive components.';

export const COMPANY_SHORT_DESCRIPTION = 
  'Authorized Tier-1 OEM distributor and precision automotive forging & CNC machining manufacturer since 1996.';

export interface BrandContactPerson {
  brand: string;
  brandKey: 'greaves' | 'kaeser' | 'ep' | 'airpipe';
  role: 'Sales' | 'Service' | 'Direct Contact';
  location?: string;
  name: string;
  phone: string;
  displayPhone: string;
}

export const BRAND_CONTACTS: Record<'greaves' | 'kaeser' | 'ep' | 'airpipe', BrandContactPerson[]> = {
  greaves: [
    {
      brand: 'Greaves Cotton',
      brandKey: 'greaves',
      role: 'Service',
      name: 'Mr. Gopal',
      phone: '+917840004702',
      displayPhone: '7840004702',
    },
    {
      brand: 'Greaves Cotton',
      brandKey: 'greaves',
      role: 'Sales',
      name: 'Mr. Arun Saxena',
      phone: '+917840004701',
      displayPhone: '7840004701',
    },
  ],
  kaeser: [
    {
      brand: 'Kaeser Kompressoren',
      brandKey: 'kaeser',
      role: 'Sales',
      location: 'Bhiwadi',
      name: 'Mr. Subhash',
      phone: '+919212303793',
      displayPhone: '9212303793',
    },
    {
      brand: 'Kaeser Kompressoren',
      brandKey: 'kaeser',
      role: 'Sales',
      location: 'Haridwar',
      name: 'Mr. Surendra Upadhyay',
      phone: '+919212303793',
      displayPhone: '9212303793',
    },
    {
      brand: 'Kaeser Kompressoren',
      brandKey: 'kaeser',
      role: 'Service',
      location: 'Bhiwadi',
      name: 'Mr. Vikram Pradhan',
      phone: '+919212303795',
      displayPhone: '9212303795',
    },
    {
      brand: 'Kaeser Kompressoren',
      brandKey: 'kaeser',
      role: 'Service',
      location: 'Bhiwadi',
      name: 'Mr. Sumit Tiwari',
      phone: '+919911978822',
      displayPhone: '9911978822',
    },
  ],
  ep: [
    {
      brand: 'EP Equipment',
      brandKey: 'ep',
      role: 'Sales',
      name: 'Mr. Samar Pratap Singh',
      phone: '+919278977225',
      displayPhone: '9278977225',
    },
  ],
  airpipe: [
    {
      brand: 'AIRpipe',
      brandKey: 'airpipe',
      role: 'Direct Contact',
      name: 'Mrs. Vaishali',
      phone: '+919911931177',
      displayPhone: '9911931177',
    },
  ],
};

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
    phone: ['+91-7840004702', '+91-9212303795', '+91-9911978822'],
    email: ['vikram.pradhan@airmen.in', 'service@airmen.in'],
  },
  branch: {
    label: 'Branch Office',
    address: 'DHARUHERA, Vipul Garden, Haryana',
    phone: ['+91-9212303793', '+91-9212303795'],
    email: ['sales@airmen.in'],
  },
  manufacturingPlant: {
    label: 'Gajraula Manufacturing Plant',
    address: 'Gajraula Industrial Area, Uttar Pradesh, INDIA',
    phone: ['+91-9212303791', '+91-8588855726'],
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
    year: '2018',
    title: 'Gajraula Manufacturing Plant',
    description: 'Commissioned dedicated in-house forging & multi-axis CNC machining facility in Gajraula (U.P.) producing high-precision automotive components.',
  },
  {
    year: '2020',
    title: 'Power Solutions',
    description: 'Added Greaves Cotton power generation solutions to the product portfolio.',
  },
  {
    year: 'Today',
    title: 'Industry Leader',
    description: 'Serving 5000+ customers across multiple industries with comprehensive engineering & manufacturing solutions.',
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
