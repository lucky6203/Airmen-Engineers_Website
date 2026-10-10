// ============================================
// Airmen Engineers — Company Data
// ============================================

import { ContactInfo, Stat, TimelineEvent, FeatureCard } from '@/types';

export const COMPANY_NAME = 'Airmen Engineers';
export const COMPANY_TAGLINE = 'Industrial Air Compressor & Material Handling Solutions Since 1996';
export const COMPANY_ESTABLISHED = 1996;

export const COMPANY_DESCRIPTION = 
  'Airmen Engineers is a premier industrial engineering partner and precision manufacturer. Alongside OEM alliances for Kaeser compressors, EP forklifts, Greaves power systems, and AIRpipe networks, we operate a dedicated in-house closed-die forging and CNC machining plant in Gajraula (U.P.) producing high-precision automotive components.';

export const COMPANY_SHORT_DESCRIPTION = 
  'Authorized OEM distributor and precision automotive forging & CNC machining manufacturer since 1996.';

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
    label: 'Plant (Works)',
    address: 'I-44/45, Gajraula (Amroha), Uttar Pradesh, INDIA',
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
    title: 'Founded Airmen Engineers',
    subtitle: 'Pneumatics & Industrial Distribution',
    category: 'Foundational Milestone',
    description: 'Airmen Engineers established in Delhi with a core commitment to supplying high-quality industrial air compressors, pneumatic equipment, and engineering services to emerging manufacturing clusters.',
    logo: '/images/factory_ppt/image1.png',
    logoAlt: 'Airmen Engineers AE Logo',
    badges: ['Delhi Origin', 'Pneumatics & Air Systems', 'Engineering Core'],
    dotColor: '#2563EB',
  },
  {
    year: '2002',
    title: 'Started Association with Kaeser Compressors',
    subtitle: 'German Engineering Excellence',
    category: 'Authorized Dealership',
    description: 'Forged authorized dealership and service alliance with KAESER KOMPRESSOREN (Germany), bringing world-renowned rotary screw compressors, SIGMA PROFILE air ends, and 1:1 direct drive efficiency to India.',
    logo: '/images/factory_ppt/image12.png',
    logoAlt: 'KAESER COMPRESSORS',
    badges: ['German Engineering', 'SIGMA PROFILE', 'IE4 Efficiency'],
    dotColor: '#EAB308',
  },
  {
    year: '2014 & 2018',
    title: 'Association with Legris Pipings & HYUNDAI Forklifts',
    subtitle: 'Piping Networks & Material Handling (South Korea)',
    category: 'Logistics & Distribution Expansion',
    description: 'Expanded industrial infrastructure scope by introducing Legris quick-fit compressed air aluminium piping systems (2014) and Hyundai Material Handling heavy forklift solutions (2018, South Korea).',
    badges: ['Legris Modular Piping', 'Hyundai Forklifts (South Korea)', 'Turnkey Utility Integration'],
    dotColor: '#1D4ED8',
  },
  {
    year: '2020',
    title: 'Association with Greaves Power for Gensets',
    subtitle: 'Industrial Power Generation Solutions',
    category: 'Power Systems',
    description: 'Partnered with Greaves Power (New Generation Power Solutions) to deliver heavy-duty diesel generator sets, acoustic canopy installations, and emergency continuous power systems with telematics.',
    logo: '/images/factory_ppt/image14.png',
    logoAlt: 'GREAVES POWER',
    badges: ['Industrial Diesel Gensets', 'Continuous Power Backup', 'Smart Telematics'],
    dotColor: '#10B981',
  },
  {
    year: '2023-24',
    title: 'Airmen Engineers Head Office (Delhi)',
    subtitle: 'State-of-the-Art Corporate Headquarters',
    category: 'Corporate Infrastructure',
    description: 'Commissioned a multi-story corporate headquarters in Delhi, housing centralized customer service operations, an engineering training academy, project design desks, and regional spare parts logistics hub.',
    image: '/images/factory_ppt/image26.jpg',
    imageCaption: 'Airmen Engineers Corporate Head Office — Delhi',
    badges: ['Delhi Headquarters', 'Centralized Spares Hub', 'Technical Training Center'],
    dotColor: '#F59E0B',
  },
  {
    year: '2025',
    title: 'Association with EP Material Handling Equipment',
    subtitle: 'Next-Gen Lithium-Ion Material Handling',
    category: 'Authorized Dealership',
    description: 'Commenced strategic partnership with EP Equipment ("Let\'s grow together"), spearheading the green revolution in industrial warehouses with advanced lithium-ion electric forklifts, reach trucks, and pallet movers.',
    logo: '/images/logos/logo-ep.png',
    logoAlt: 'EP Material Handling Equipment',
    badges: ['Li-Ion Technology', 'Zero Emission Logistics', 'Electric Forklifts'],
    dotColor: '#EF4444',
  },
  {
    year: '2025: Commissioned',
    title: 'Commissioned Airmen Engineers Factory',
    subtitle: 'Precision Forging & CNC Machining Plant (Gajraula Works)',
    category: 'Precision Manufacturing Works',
    description: 'Officially commissioned a dedicated 20,000+ sq. ft. precision manufacturing plant in Gajraula (U.P.), equipped with closed-die forging hammers, high-precision CNC turning centers, and metrology testing for automotive & OEM applications.',
    image: '/images/factory_ppt/image15.png',
    imageCaption: 'Commissioned Airmen Engineers Factory — Gajraula Works (U.P.)',
    badges: ['Closed-Die Forging Plant', 'Multi-Axis CNC Lathes', 'Metrology Testing'],
    dotColor: '#DC2626',
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
