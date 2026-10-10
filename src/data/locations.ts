// ============================================================
// Airmen Engineers — 7 Official Facilities & Office Locations
// Complete coordinates, verified addresses, and Google Maps queries
// ============================================================

export interface FacilityLocation {
  id: string;
  number: string;
  badge: string;
  category: 'Head Office' | 'Registered Office' | 'Stock Depot' | 'Branch' | 'Manufacturing Plant';
  title: string;
  shortTitle: string;
  subtitle: string;
  state: 'Delhi' | 'Haryana' | 'Uttar Pradesh' | 'Uttarakhand' | 'Rajasthan';
  stateCode: string;
  city: string;
  address: string;
  rawAddressDetails?: {
    building?: string;
    street?: string;
    locality?: string;
    city?: string;
    district?: string;
    state?: string;
    pincode?: string;
  };
  phones: string[];
  emails: string[];
  hours: string;
  directionUrl: string;
  mapEmbedUrl: string;
  highlights: string[];
  accentColor: string;
  // Position on India Overview Map (viewBox 0 0 900 1000)
  indiaMapCoord: { x: number; y: number };
  // Position on Regional Corridor Map (viewBox 0 0 900 650)
  corridorCoord: { x: number; y: number };
  leaderLine: {
    side: 'left' | 'right';
    dx: number;
    dy: number;
  };
}

export const AIRMEN_LOCATIONS: FacilityLocation[] = [
  {
    id: 'delhi-headoffice',
    number: '01',
    badge: 'Central Engineering & Ops HQ',
    category: 'Head Office',
    title: 'Delhi Head Office (Sector 25, Rohini)',
    shortTitle: 'Delhi Head Office',
    subtitle: 'Prahalad Vihar, Near Sector-25 Rohini',
    state: 'Delhi',
    stateCode: 'DL',
    city: 'Rohini, Delhi',
    address: 'Plot No. C-53, Road No. 1, Prahalad Vihar, Near Sector-25, Rohini, Delhi 110085',
    rawAddressDetails: {
      building: 'Plot No. C-53',
      street: 'Road No. 1',
      locality: 'Prahalad Vihar, Near Sector-25',
      city: 'Rohini, Delhi',
      state: 'Delhi',
      pincode: '110085',
    },
    phones: ['+91-9212303791', '+91-8588855726'],
    emails: ['sales@airmen.in', 'support@airmen.in'],
    hours: '24/7 Operations & Emergency Dispatch',
    directionUrl: 'https://www.google.com/maps/search/?api=1&query=Plot+C-53+Road+No+1+Prahalad+Vihar+Rohini+Delhi+110085',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Plot+C-53+Road+No+1+Prahalad+Vihar+Rohini+Delhi+110085&t=&z=15&ie=UTF8&iwloc=&output=embed',
    highlights: [
      'Central Kaeser Genuine Spare Parts & Lubricant Depots',
      'Rotary Screw Overhaul & Certified Performance Test Bays',
      'Emergency Standby Rental Fleet Mobilization Base',
    ],
    accentColor: '#D97706', // Amber gold
    indiaMapCoord: { x: 375, y: 350 },
    corridorCoord: { x: 450, y: 260 },
    leaderLine: { side: 'left', dx: -120, dy: -30 },
  },
  {
    id: 'delhi-naharpur',
    number: '02',
    badge: 'Dealership & Commercial HQ',
    category: 'Registered Office',
    title: 'Naharpur Registered Office',
    shortTitle: 'Naharpur Reg. Office',
    subtitle: '310-311, Vardhman Seven Eleven Plaza, M2K',
    state: 'Delhi',
    stateCode: 'DL',
    city: 'Rohini / Pitampura, Delhi',
    address: '310-311, Vardhman Seven Eleven Plaza, LSC 11, M2K, Naharpur Road, Delhi 110085',
    rawAddressDetails: {
      building: '310-311, Vardhman Seven Eleven Plaza',
      street: 'LSC 11, M2K, Naharpur Road',
      locality: 'Rohini Sector-8 / Naharpur',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110085',
    },
    phones: ['+91-9212303791', '+91-8588855726'],
    emails: ['sales@airmen.in', 'karan@airmen.in'],
    hours: 'Mon – Sat: 9:00 AM – 7:00 PM',
    directionUrl: 'https://www.google.com/maps/search/?api=1&query=Vardhman+Seven+Eleven+Plaza+Naharpur+Road+Rohini+Delhi+110085',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Vardhman+Seven+Eleven+Plaza+Naharpur+Road+Rohini+Delhi+110085&t=&z=15&ie=UTF8&iwloc=&output=embed',
    highlights: [
      'Authorized Kaeser Kompressoren Franchise Commercial Desk',
      'Corporate Billing, Contract Management & RFQ Consulting',
      'Executive Client Presentation & Engineering Suite',
    ],
    accentColor: '#2563EB', // Blue
    indiaMapCoord: { x: 382, y: 358 },
    corridorCoord: { x: 470, y: 290 },
    leaderLine: { side: 'left', dx: -120, dy: 30 },
  },
  {
    id: 'gurgaon-stock',
    number: '03',
    badge: 'Central Spares & Logistics Hub',
    category: 'Stock Depot',
    title: 'Gurgaon Office (Stock)',
    shortTitle: 'Gurgaon Stock Hub',
    subtitle: 'Beriwala Bagh Marg, Sector 11, Gurugram',
    state: 'Haryana',
    stateCode: 'HR',
    city: 'Gurugram',
    address: 'House No. 2168/242/2, Beriwala Bagh Marg, Sector 11, Gurugram, Haryana 122001',
    rawAddressDetails: {
      building: 'HOUSE NO. 2168/242/2',
      street: 'BERIWALA BAGH MARG',
      locality: 'Sector 11',
      city: 'Gurugram',
      district: 'Gurugram',
      state: 'Haryana',
      pincode: '122001',
    },
    phones: ['+91-9212303793', '+91-7840004701'],
    emails: ['stock@airmen.in', 'sales@airmen.in'],
    hours: 'Mon – Sat: 8:30 AM – 7:30 PM (Emergency Dispatch 24/7)',
    directionUrl: 'https://www.google.com/maps/search/?api=1&query=House+No+2168%2F242%2F2+Beriwala+Bagh+Marg+Sector+11+Gurugram+Haryana+122001',
    mapEmbedUrl: 'https://maps.google.com/maps?q=House+No+2168%2F242%2F2+Beriwala+Bagh+Marg+Sector+11+Gurugram+Haryana+122001&t=&z=15&ie=UTF8&iwloc=&output=embed',
    highlights: [
      'Comprehensive inventory of Kaeser air filters, separators & oils',
      'EP Lithium-ion forklift batteries, chargers & chassis spares',
      'Express sameday delivery to Manesar, Udyog Vihar & Gurugram plants',
    ],
    accentColor: '#059669', // Emerald
    indiaMapCoord: { x: 370, y: 375 },
    corridorCoord: { x: 430, y: 350 },
    leaderLine: { side: 'left', dx: -130, dy: 80 },
  },
  {
    id: 'dharuhera-office',
    number: '04',
    badge: 'NH-48 Industrial Corridor Unit',
    category: 'Branch',
    title: 'Dharuhera Office',
    shortTitle: 'Dharuhera Corridor Hub',
    subtitle: 'Vipul Gardens, Dharuhera NH-48 Corridor',
    state: 'Haryana',
    stateCode: 'HR',
    city: 'Dharuhera',
    address: 'Vipul Gardens, Dharuhera, Haryana',
    rawAddressDetails: {
      building: 'Vipul Gardens',
      street: 'NH-48 Corridor',
      locality: 'Dharuhera Industrial Area',
      city: 'Dharuhera',
      state: 'Haryana',
    },
    phones: ['+91-9212303793', '+91-9212303795'],
    emails: ['sales@airmen.in', 'service@airmen.in'],
    hours: 'Rapid Field Engineering Van Base (24/7 On-Call)',
    directionUrl: 'https://www.google.com/maps/search/?api=1&query=Vipul+Gardens+Dharuhera+Haryana',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Vipul+Gardens+Dharuhera+Haryana&t=&z=15&ie=UTF8&iwloc=&output=embed',
    highlights: [
      'Dedicated field engineering teams for Dharuhera, Manesar, Bawal & Neemrana',
      'Sub-90 minute emergency on-site technician mobilization',
      'Stock of critical Sigma lubricants & fast-replacement service kits',
    ],
    accentColor: '#0D9488', // Teal
    indiaMapCoord: { x: 358, y: 395 },
    corridorCoord: { x: 360, y: 410 },
    leaderLine: { side: 'left', dx: -130, dy: 130 },
  },
  {
    id: 'gajraula-plant',
    number: '05',
    badge: 'Closed-Die Forging & CNC Works',
    category: 'Manufacturing Plant',
    title: 'Gajraula Plant',
    shortTitle: 'Gajraula Works (Plant)',
    subtitle: 'Plot I-44/45, Industrial Area Gajraula-II, Amroha',
    state: 'Uttar Pradesh',
    stateCode: 'UP',
    city: 'Gajraula (Distt. Amroha)',
    address: 'Plot No. I-44/45, Industrial Area, Gajraula-II, Distt. Amroha, Uttar Pradesh 244235',
    rawAddressDetails: {
      building: 'Plot No. I-44/45',
      street: 'Industrial Area, Gajraula-II',
      locality: 'Gajraula Industrial Estate',
      city: 'Amroha / Gajraula',
      district: 'Amroha',
      state: 'Uttar Pradesh',
      pincode: '244235',
    },
    phones: ['+91-9212303791', '+91-8588855726'],
    emails: ['manufacturing@airmen.in', 'sales@airmen.in'],
    hours: '24-Hour Active Industrial Manufacturing Facility',
    directionUrl: 'https://www.google.com/maps/search/?api=1&query=Plot+I-44%2F45+Industrial+Area+Gajraula-II+Amroha+Uttar+Pradesh+244235',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Plot+I-44%2F45+Industrial+Area+Gajraula-II+Amroha+Uttar+Pradesh+244235&t=&z=15&ie=UTF8&iwloc=&output=embed',
    highlights: [
      'High-tonnage closed-die drop forging hammers & induction billet heaters',
      'Precision CNC turning centers, VMCs & broaching line for automotive parts',
      'In-house metallurgical lab, Magnaflux crack detection & Zeiss CMM quality',
    ],
    accentColor: '#10B981', // Mint Emerald
    indiaMapCoord: { x: 440, y: 350 },
    corridorCoord: { x: 670, y: 270 },
    leaderLine: { side: 'right', dx: 120, dy: -20 },
  },
  {
    id: 'haridwar-office',
    number: '06',
    badge: 'SIDCUL Regional Service Desk',
    category: 'Branch',
    title: 'Haridwar Office',
    shortTitle: 'Haridwar Desk',
    subtitle: 'SIDCUL, Sector 8A, BHEL Township, Haridwar',
    state: 'Uttarakhand',
    stateCode: 'UK',
    city: 'Haridwar',
    address: 'SIDCUL, Sector 8A, BHEL Township, Haridwar, Uttarakhand 249403',
    rawAddressDetails: {
      building: 'Sector 8A',
      street: 'BHEL Township Road',
      locality: 'SIDCUL Industrial Cluster',
      city: 'Haridwar',
      district: 'Haridwar',
      state: 'Uttarakhand',
      pincode: '249403',
    },
    phones: ['+91-9212303793', '+91-7840004702'],
    emails: ['haridwar@airmen.in', 'service@airmen.in'],
    hours: 'Mon – Sat: 9:00 AM – 6:30 PM (24/7 Breakdown Cell)',
    directionUrl: 'https://www.google.com/maps/search/?api=1&query=29.9670237,78.0595873',
    mapEmbedUrl: 'https://maps.google.com/maps?q=29.9670237,78.0595873&t=&z=15&ie=UTF8&iwloc=&output=embed',
    highlights: [
      'Serving automotive, FMCG & pharma manufacturing in SIDCUL & BHEL',
      'Rotary screw compressor routine servicing & diagnostic audits',
      'AIRpipe fast-connect modular aluminium piping project engineers',
    ],
    accentColor: '#0284C7', // Sky Blue
    indiaMapCoord: { x: 425, y: 290 },
    corridorCoord: { x: 620, y: 120 },
    leaderLine: { side: 'right', dx: 120, dy: -70 },
  },
  {
    id: 'bhiwadi-plant',
    number: '07',
    badge: 'Industrial Works & Service Bay',
    category: 'Manufacturing Plant',
    title: 'Bhiwadi Plant',
    shortTitle: 'Bhiwadi Plant (Unit I)',
    subtitle: 'Plot No. H1-842, Ghatal Samtal, Bhiwadi Unit I',
    state: 'Rajasthan',
    stateCode: 'RJ',
    city: 'Bhiwadi',
    address: 'Plot No. H1-842, Ghatal Samtal, Bhiwadi (Unit I), Rajasthan 301019',
    rawAddressDetails: {
      building: 'Plot No. H1-842',
      street: 'Ghatal Samtal, Unit I',
      locality: 'RIICO Industrial Area',
      city: 'Bhiwadi',
      district: 'Alwar',
      state: 'Rajasthan',
      pincode: '301019',
    },
    phones: ['+91-9212303793', '+91-9212303795'],
    emails: ['bhiwadi@airmen.in', 'service@airmen.in'],
    hours: 'Mon – Sat: 8:00 AM – 8:00 PM (Emergency 24/7 Support)',
    directionUrl: 'https://www.google.com/maps/search/?api=1&query=Plot+H1-842+Ghatal+Samtal+Bhiwadi+Rajasthan+301019',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Plot+H1-842+Ghatal+Samtal+Bhiwadi+Rajasthan+301019&t=&z=15&ie=UTF8&iwloc=&output=embed',
    highlights: [
      'Precision compressor refurbishment bay & air-end overhaul workshop',
      'Serving Bhiwadi, Khushkhera, Tapukara & Alwar industrial belt',
      'Stock of critical filters, oil coolers & EP forklift components',
    ],
    accentColor: '#EA580C', // Orange
    indiaMapCoord: { x: 350, y: 405 },
    corridorCoord: { x: 330, y: 450 },
    leaderLine: { side: 'left', dx: -130, dy: 160 },
  },
];
