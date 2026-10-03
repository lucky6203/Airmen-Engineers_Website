// ============================================
// Airmen Engineers — Navigation Data
// ============================================

import { NavItem, MegaMenuCategory } from '@/types';

export const MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  {
    title: 'Air Compressors',
    icon: 'Wind',
    items: [
      { label: 'Kaeser Compressors', href: '/kaeser', description: 'German engineered screw air compressors' },
      { label: 'AIM Compressors', href: '/aim', description: 'Reciprocating & scroll compressors' },
    ],
  },
  {
    title: 'Material Handling',
    icon: 'Truck',
    items: [
      { label: 'EP Forklifts', href: '/ep-forklifts', description: 'Electric, diesel & warehouse equipment' },
    ],
  },
  {
    title: 'Compressed Air',
    icon: 'GitBranch',
    items: [
      { label: 'AIRpipe', href: '/airpipe', description: 'Aluminium & stainless steel piping' },
    ],
  },

  {
    title: 'Power Solutions',
    icon: 'BatteryCharging',
    items: [
      { label: 'Greaves', href: '/greaves', description: 'Generator sets & smart monitoring' },
    ],
  },
];

export const MANUFACTURING_MENU_CATEGORIES: MegaMenuCategory[] = [
  {
    title: 'Flanges & Hubs',
    icon: 'Factory',
    items: [
      { label: 'Forged Wheel Hubs', href: '/manufacturing-products#forged-wheel-hub', description: 'Critical bore & profile CNC machined forged hub' },
      { label: 'Structural Flanged Bosses', href: '/manufacturing-products#structural-stepped-flange', description: 'Controlled machining of critical dimensions' },
      { label: 'Heavy-Duty Flanges', href: '/manufacturing-products#heavy-duty-machined-flange', description: 'CNC turned & inspected automotive flange' },
    ],
  },
  {
    title: 'Bushings & Spacers',
    icon: 'Layers',
    items: [
      { label: 'Micro-Tolerance Spacers', href: '/manufacturing-products#micro-tolerance-spacer', description: 'Specified 2.7 ± 0.05 mm precision depth feature' },
      { label: 'Precision Spacer Bushings', href: '/manufacturing-products#precision-spacer-bushing', description: 'High-precision CNC lathe turned bushings' },
      { label: 'Forged Automotive Collars', href: '/manufacturing-products#cylindrical-bushing-collar', description: 'Forged material CNC machined bushing' },
    ],
  },
  {
    title: 'Rings & Retainers',
    icon: 'Filter',
    items: [
      { label: 'Profiled Bearing Rings', href: '/manufacturing-products#surface-profile-ring', description: 'Controlled surface profile & dimensions' },
      { label: 'High-Tolerance Retainers', href: '/manufacturing-products#high-tolerance-retainer', description: 'High-tolerance CNC turned forged part' },
      { label: 'Forged Retaining Rings', href: '/manufacturing-products#retaining-ring-flange', description: 'Controlled machining per approved drawing' },
    ],
  },
  {
    title: 'Critical Profiles',
    icon: 'ShieldCheck',
    items: [
      { label: 'Forged Heavy-Duty Parts', href: '/manufacturing-products#heavy-duty-forged-part', description: 'Controlled forging & multi-axis CNC machining' },
      { label: 'Positional Machined Parts', href: '/manufacturing-products#positional-machined-part', description: 'Critical positional & dimensional features' },
      { label: 'Stepped Collar Components', href: '/manufacturing-products#stepped-collar-component', description: 'CNC machined per approved client drawing' },
    ],
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Industrial Products',
    href: '/products',
    megaMenu: MEGA_MENU_CATEGORIES,
  },
  {
    label: 'Manufacturing Products',
    href: '/manufacturing-products',
    megaMenu: MANUFACTURING_MENU_CATEGORIES,
  },
  { label: 'Services', href: '/service' },
  { label: 'Industries', href: '/industries' },
  { label: 'Customers', href: '/customer' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  products: [
    { label: 'Kaeser', href: '/kaeser' },
    { label: 'AIM', href: '/aim' },
    { label: 'EP Forklifts', href: '/ep-forklifts' },
    { label: 'AIRpipe', href: '/airpipe' },
    { label: 'Greaves', href: '/greaves' },
    { label: 'Manufacturing Products', href: '/manufacturing-products' },
  ],
  services: [
    { label: 'After Sales Support', href: '/service' },
    { label: 'Preventive Maintenance', href: '/service' },
    { label: 'AMC', href: '/service' },
    { label: 'Spare Parts', href: '/service' },
    { label: 'Energy Audit', href: '/service' },
    { label: 'Compressor Rental', href: '/a-rental-compressor' },
  ],
  company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Industries', href: '/industries' },
    { label: 'Customers', href: '/customer' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

