// ============================================
// Airmen Engineers — Blog Data
// ============================================

import { BlogPost } from '@/types';

export const BLOG_CATEGORIES = [
  'Air Compressors',
  'Energy Efficiency',
  'Maintenance',
  'Industrial Technology',
  'Material Handling',
  'Compressed Air',
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'understanding-screw-compressors',
    title: 'Understanding Rotary Screw Air Compressors: A Complete Guide',
    slug: 'understanding-screw-compressors',
    excerpt: 'Learn about the working principles, advantages, and applications of rotary screw air compressors in modern industry.',
    content: `Rotary screw air compressors are the workhorses of modern industrial compressed air systems. Unlike reciprocating compressors that use pistons, screw compressors use two helical rotors to compress air continuously, providing a steady and reliable supply of compressed air.

## How Screw Compressors Work

The compression process involves two meshing helical rotors — a male and female rotor — enclosed in a housing. As the rotors turn, air is drawn in at one end, trapped between the rotors and the housing, and progressively compressed as it moves toward the discharge end.

## Key Advantages

- **Continuous Operation**: Unlike reciprocating compressors, screw compressors provide continuous, pulsation-free air supply.
- **Energy Efficiency**: Modern screw compressors with features like KAESER's SIGMA PROFILE technology are up to 15% more efficient than conventional designs.
- **Lower Maintenance**: Fewer moving parts mean less wear and lower maintenance costs.
- **Quiet Operation**: Significantly quieter than reciprocating alternatives.

## Choosing the Right Compressor

When selecting a screw compressor, consider your required FAD (Free Air Delivery), operating pressure, duty cycle, and energy efficiency. Variable speed (frequency controlled) compressors like KAESER SFC models offer additional savings when air demand fluctuates.`,
    category: 'Air Compressors',
    date: '2024-12-15',
    image: '/images/banner-1.jpg',
    tags: ['screw compressors', 'air compressors', 'industrial equipment'],
    relatedPosts: ['energy-efficiency-compressed-air', 'preventive-maintenance-tips'],
  },
  {
    id: 'energy-efficiency-compressed-air',
    title: 'How to Reduce Energy Costs in Your Compressed Air System',
    slug: 'energy-efficiency-compressed-air',
    excerpt: 'Compressed air can account for up to 30% of industrial energy costs. Discover practical strategies to optimize your system.',
    content: `Compressed air is often called the "fourth utility" in manufacturing, but it's also one of the most expensive. Energy costs typically account for 70-80% of the total cost of ownership of a compressed air system.

## Key Strategies for Energy Reduction

### 1. Fix Air Leaks
A single 3mm hole in a compressed air line can waste thousands of rupees annually. Regular leak detection and repair should be part of your maintenance program.

### 2. Optimize Pressure
Running your compressor at higher pressure than needed wastes energy. A 1 bar reduction in system pressure can save 6-8% in energy costs.

### 3. Use Variable Speed Drives
Frequency-controlled compressors adjust motor speed to match actual air demand, eliminating the energy waste of constant-speed operation during partial loads.

### 4. Smart Monitoring
IoT-based smart monitoring solutions can provide real-time visibility into your compressed air system's performance, helping identify inefficiencies before they become costly problems.

### 5. Regular Maintenance
Well-maintained compressors operate more efficiently. Follow manufacturer-recommended maintenance schedules.`,
    category: 'Energy Efficiency',
    date: '2024-11-20',
    image: '/images/banner-2.jpg',
    tags: ['energy efficiency', 'compressed air', 'cost reduction'],
    relatedPosts: ['understanding-screw-compressors', 'preventive-maintenance-tips'],
  },
  {
    id: 'preventive-maintenance-tips',
    title: 'Essential Preventive Maintenance Tips for Air Compressors',
    slug: 'preventive-maintenance-tips',
    excerpt: 'Regular maintenance extends equipment life and prevents costly downtime. Here are the essential maintenance practices.',
    content: `Preventive maintenance is the key to lower operating costs and maximum equipment uptime. A well-maintained air compressor operates more efficiently, lasts longer, and is less likely to fail unexpectedly.

## Daily Checks
- Check oil level and quality
- Drain condensate from tanks and dryers
- Monitor operating temperature and pressure
- Listen for unusual noises or vibrations

## Weekly Maintenance
- Inspect air filters and clean/replace as needed
- Check belts for wear and proper tension
- Inspect hoses and connections for leaks
- Review controller logs for any warnings

## Monthly & Quarterly
- Change oil and oil filters according to schedule
- Replace air filters
- Inspect and clean coolers
- Check safety valves
- Test automatic drain valves

## Annual Service
- Complete system inspection
- Motor bearing lubrication
- Electrical connection checks
- Full performance test

With specialized service experience of over 29 years, Airmen Engineers provides comprehensive Annual Service Contracts (ASC) to help you maintain your equipment in peak condition.`,
    category: 'Maintenance',
    date: '2024-10-10',
    image: '/images/banner-3.jpg',
    tags: ['maintenance', 'air compressors', 'preventive maintenance'],
    relatedPosts: ['understanding-screw-compressors', 'energy-efficiency-compressed-air'],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}
