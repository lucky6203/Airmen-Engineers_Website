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

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Products',
    href: '/products',
    megaMenu: MEGA_MENU_CATEGORIES,
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

