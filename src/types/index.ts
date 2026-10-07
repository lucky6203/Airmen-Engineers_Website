// ============================================
// Airmen Engineers — Type Definitions
// ============================================

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  category: ProductCategory;
  slug: string;
  description: string;
  shortDescription: string;
  images: string[];
  specifications: Specification[];
  applications: string[];
  brochureUrl?: string;
  features: string[];
  relatedProducts: string[];
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  description: string;
  country?: string;
  website?: string;
}

export type ProductCategory =
  | 'air-compressors'
  | 'material-handling'
  | 'compressed-air-piping'
  | 'smart-monitoring'
  | 'power-solutions';

export interface ProductCategoryInfo {
  id: ProductCategory;
  name: string;
  slug: string;
  description: string;
  icon: string;
  brands: Brand[];
}

export interface Specification {
  label: string;
  value: string;
  unit?: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  products: string[];
  services: string[];
}

export interface Customer {
  id: string;
  name: string;
  industry: string;
  logo?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author?: string;
  date: string;
  image?: string;
  tags: string[];
  relatedPosts: string[];
  readTime?: string;
  isUserCreated?: boolean;
}

export interface ContactInfo {
  registeredOffice: OfficeInfo;
  headOffice: OfficeInfo;
  serviceEnquiry: ContactDetails;
  branch?: OfficeInfo;
  manufacturingPlant?: OfficeInfo;
}

export interface OfficeInfo {
  label: string;
  address: string;
  phone: string[];
  email: string[];
}

export interface ContactDetails {
  label: string;
  phone: string[];
  email: string[];
}

export interface EnquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirementType: RequirementType;
  message: string;
  honeypot?: string;
}

export interface RentalFormData extends EnquiryFormData {
  requiredHP: string;
  rentalDuration: string;
}

export type RequirementType =
  | 'air-compressor'
  | 'forklift'
  | 'piping'
  | 'service'
  | 'spare-parts'
  | 'rental'
  | 'energy-audit'
  | 'other';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  sectionTitle?: string;
  children?: NavItem[];
  megaMenu?: MegaMenuCategory[];
}

export interface MegaMenuCategory {
  title: string;
  icon?: string;
  items: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}
