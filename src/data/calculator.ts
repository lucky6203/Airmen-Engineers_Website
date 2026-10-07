// ============================================
// Airmen Engineers — Generator Sizing Calculator Data & Logic
// Engineering estimates for standard industrial DG sets (5 kVA to 2500 kVA)
// ============================================

export type StartingMethod = 'DOL' | 'Star-Delta' | 'Soft-Starter' | 'VFD' | 'Direct';

export interface StartingMethodConfig {
  label: string;
  shortLabel: string;
  surgeMultiplier: number; // multiplier of rated kW / PF
  description: string;
}

export const STARTING_METHODS: Record<StartingMethod, StartingMethodConfig> = {
  DOL: {
    label: 'Direct On Line (DOL)',
    shortLabel: 'DOL (6.0x)',
    surgeMultiplier: 6.0,
    description: 'Direct start. High inrush current (~600% rated). Typical for small motors < 7.5 kW.',
  },
  'Star-Delta': {
    label: 'Star-Delta Starter',
    shortLabel: 'Star-Delta (3.0x)',
    surgeMultiplier: 3.0,
    description: 'Reduced voltage start. Moderate inrush (~300% rated). Typical for 7.5 - 37 kW motors.',
  },
  'Soft-Starter': {
    label: 'Electronic Soft Starter',
    shortLabel: 'Soft Starter (2.5x)',
    surgeMultiplier: 2.5,
    description: 'Controlled ramped start. Low starting inrush (~250% rated). Protects gen-set from surge.',
  },
  VFD: {
    label: 'Variable Frequency Drive (VFD)',
    shortLabel: 'VFD (1.25x)',
    surgeMultiplier: 1.25,
    description: 'Minimal surge (~125% rated). Smooth controlled ramp with optimal generator sizing.',
  },
  Direct: {
    label: 'Static / Resistive / Direct',
    shortLabel: 'Direct / Static (1.0x)',
    surgeMultiplier: 1.0,
    description: 'Non-motor resistive / rectifier load (Lighting, IT, UPS, heaters, ovens). No motor starting surge.',
  },
};

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  defaultKw: number;
  defaultStartingMethod: StartingMethod;
  description: string;
}

export const EQUIPMENT_LIBRARY: EquipmentItem[] = [
  // Motors & Heavy Machinery
  {
    id: 'vmc-cnc-lathe',
    name: 'CNC Machine / VMC Center',
    category: 'Machinery & Tools',
    defaultKw: 15,
    defaultStartingMethod: 'VFD',
    description: 'Multi-axis CNC lathe or machining center with servo spindles',
  },
  {
    id: 'milling-drilling',
    name: 'Milling & Drilling Machine',
    category: 'Machinery & Tools',
    defaultKw: 7.5,
    defaultStartingMethod: 'Star-Delta',
    description: 'Conventional machine tool induction motor',
  },
  {
    id: 'heavy-extruder-press',
    name: 'Hydraulic Press / Extruder',
    category: 'Machinery & Tools',
    defaultKw: 37,
    defaultStartingMethod: 'Soft-Starter',
    description: 'Heavy hydraulic power pack or plastic/rubber extruder',
  },
  {
    id: 'welding-stations',
    name: 'Multi-Operator Welding Stations',
    category: 'Machinery & Tools',
    defaultKw: 22,
    defaultStartingMethod: 'Direct',
    description: 'Bank of MIG/TIG/Arc welding transformers and inverters',
  },
  {
    id: 'industrial-conveyor',
    name: 'Industrial Conveyor / Feeder',
    category: 'Machinery & Tools',
    defaultKw: 5.5,
    defaultStartingMethod: 'DOL',
    description: 'Material conveyor belt drive motor',
  },

  // Compressed Air & Piping
  {
    id: 'kaeser-screw-compressor',
    name: 'Kaeser Rotary Screw Compressor',
    category: 'Compressed Air',
    defaultKw: 22,
    defaultStartingMethod: 'Star-Delta',
    description: 'Industrial rotary screw air compressor (e.g. Kaeser SK / ASK / ASD series)',
  },
  {
    id: 'large-screw-compressor',
    name: 'Heavy Screw Compressor (37+ kW)',
    category: 'Compressed Air',
    defaultKw: 37,
    defaultStartingMethod: 'Soft-Starter',
    description: 'Continuous duty plant air compressor (Kaeser DSD / CSD series)',
  },
  {
    id: 'piston-compressor',
    name: 'Piston / Reciprocating Compressor',
    category: 'Compressed Air',
    defaultKw: 7.5,
    defaultStartingMethod: 'DOL',
    description: 'Shop-air reciprocating compressor unit',
  },
  {
    id: 'vacuum-pump',
    name: 'Industrial Vacuum Pump',
    category: 'Compressed Air',
    defaultKw: 7.5,
    defaultStartingMethod: 'DOL',
    description: 'Process vacuum blower or ring pump',
  },

  // HVAC & Cooling
  {
    id: 'central-chiller',
    name: 'Central Water Chiller Plant',
    category: 'HVAC & Cooling',
    defaultKw: 45,
    defaultStartingMethod: 'Soft-Starter',
    description: 'Centrifugal / screw water chiller unit',
  },
  {
    id: 'air-handling-unit',
    name: 'Air Handling Unit (AHU / Cleanroom)',
    category: 'HVAC & Cooling',
    defaultKw: 15,
    defaultStartingMethod: 'VFD',
    description: 'High static air handling blower motor',
  },
  {
    id: 'split-package-ac',
    name: 'Packaged / Cassette Air Conditioners',
    category: 'HVAC & Cooling',
    defaultKw: 7.5,
    defaultStartingMethod: 'DOL',
    description: 'Commercial comfort cooling split units',
  },
  {
    id: 'cold-room-refrigeration',
    name: 'Cold Storage Refrigeration Rack',
    category: 'HVAC & Cooling',
    defaultKw: 30,
    defaultStartingMethod: 'Soft-Starter',
    description: 'Sub-zero condensing unit and evaporator coils',
  },
  {
    id: 'cooling-tower-pump',
    name: 'Cooling Tower Fan & Pump',
    category: 'HVAC & Cooling',
    defaultKw: 11,
    defaultStartingMethod: 'Star-Delta',
    description: 'Induced draft cooling tower and circulation pump',
  },

  // Material Handling & Pumps
  {
    id: 'ep-forklift-charger',
    name: 'EP Li-Ion Forklift Fast Charger',
    category: 'Material Handling',
    defaultKw: 10,
    defaultStartingMethod: 'Direct',
    description: 'Three-phase fast charger for EP lithium-ion material handling forklifts',
  },
  {
    id: 'passenger-freight-elevator',
    name: 'Passenger / Freight Elevator (Lift)',
    category: 'Material Handling',
    defaultKw: 15,
    defaultStartingMethod: 'VFD',
    description: 'Traction or hydraulic commercial building elevator',
  },
  {
    id: 'eot-overhead-crane',
    name: 'Overhead EOT Crane / Hoist',
    category: 'Material Handling',
    defaultKw: 11,
    defaultStartingMethod: 'Soft-Starter',
    description: 'Bridge hoist and gantry drive motors',
  },
  {
    id: 'water-booster-pump',
    name: 'Hydro-Pneumatic Water Booster Pump',
    category: 'Material Handling',
    defaultKw: 7.5,
    defaultStartingMethod: 'DOL',
    description: 'High-pressure domestic or industrial water transfer pump',
  },
  {
    id: 'fire-fighting-jockey-pump',
    name: 'Fire Fighting Jockey Pump',
    category: 'Material Handling',
    defaultKw: 11,
    defaultStartingMethod: 'DOL',
    description: 'Emergency pressure maintenance pump',
  },

  // Lighting & Electrical Facilities
  {
    id: 'high-bay-led-lighting',
    name: 'Industrial High-Bay LED Lighting',
    category: 'Electrical & Facilities',
    defaultKw: 6,
    defaultStartingMethod: 'Direct',
    description: 'Energy-efficient factory/warehouse LED fixture array',
  },
  {
    id: 'office-workstations-server',
    name: 'Office Computers, IT & Server UPS',
    category: 'Electrical & Facilities',
    defaultKw: 15,
    defaultStartingMethod: 'Direct',
    description: 'Workstations, networking racks and uninterrupted power supply',
  },
  {
    id: 'commercial-kitchen',
    name: 'Commercial Kitchen / Canteen Equip.',
    category: 'Electrical & Facilities',
    defaultKw: 18,
    defaultStartingMethod: 'Direct',
    description: 'Induction cookers, ovens, dishwashers, and food warmers',
  },
];

export interface LoadItem {
  id: string;
  name: string;
  kw: number;
  qty: number;
  startingMethod: StartingMethod;
}

export interface SitePreset {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  iconName: string;
  defaultLoads: LoadItem[];
}

export const SITE_PRESETS: SitePreset[] = [
  {
    id: 'office',
    number: '01',
    title: 'Office building',
    subtitle: 'Workstations, server room, AC, lighting',
    iconName: 'Building2',
    defaultLoads: [
      { id: 'off-1', name: 'Office Computers, IT & Server UPS', kw: 15, qty: 1, startingMethod: 'Direct' },
      { id: 'off-2', name: 'Packaged / Cassette Air Conditioners', kw: 25, qty: 1, startingMethod: 'DOL' },
      { id: 'off-3', name: 'Passenger / Freight Elevator (Lift)', kw: 15, qty: 1, startingMethod: 'VFD' },
      { id: 'off-4', name: 'Industrial High-Bay LED Lighting', kw: 5, qty: 1, startingMethod: 'Direct' },
      { id: 'off-5', name: 'Hydro-Pneumatic Water Booster Pump', kw: 5.5, qty: 1, startingMethod: 'DOL' },
    ],
  },
  {
    id: 'workshop',
    number: '02',
    title: 'CNC / machine shop',
    subtitle: 'CNC machines, milling, compressed air',
    iconName: 'Cpu',
    defaultLoads: [
      { id: 'ws-1', name: 'CNC Machine / VMC Center', kw: 15, qty: 2, startingMethod: 'VFD' },
      { id: 'ws-2', name: 'Milling & Drilling Machine', kw: 7.5, qty: 2, startingMethod: 'Star-Delta' },
      { id: 'ws-3', name: 'Kaeser Rotary Screw Compressor', kw: 22, qty: 1, startingMethod: 'Star-Delta' },
      { id: 'ws-4', name: 'Overhead EOT Crane / Hoist', kw: 7.5, qty: 1, startingMethod: 'Soft-Starter' },
      { id: 'ws-5', name: 'Industrial High-Bay LED Lighting', kw: 4, qty: 1, startingMethod: 'Direct' },
    ],
  },
  {
    id: 'pharma',
    number: '03',
    title: 'Pharma plant',
    subtitle: 'Process equipment, HVAC, ventilation',
    iconName: 'FlaskConical',
    defaultLoads: [
      { id: 'ph-1', name: 'Air Handling Unit (AHU / Cleanroom)', kw: 18.5, qty: 2, startingMethod: 'VFD' },
      { id: 'ph-2', name: 'Central Water Chiller Plant', kw: 30, qty: 1, startingMethod: 'Soft-Starter' },
      { id: 'ph-3', name: 'Kaeser Rotary Screw Compressor', kw: 15, qty: 1, startingMethod: 'VFD' },
      { id: 'ph-4', name: 'Industrial Vacuum Pump', kw: 7.5, qty: 1, startingMethod: 'DOL' },
      { id: 'ph-5', name: 'Industrial High-Bay LED Lighting', kw: 6, qty: 1, startingMethod: 'Direct' },
    ],
  },
  {
    id: 'cold-storage',
    number: '04',
    title: 'Cold storage / food',
    subtitle: 'Refrigeration, cold-room fans, pumps',
    iconName: 'Snowflake',
    defaultLoads: [
      { id: 'cs-1', name: 'Cold Storage Refrigeration Rack', kw: 37, qty: 2, startingMethod: 'Soft-Starter' },
      { id: 'cs-2', name: 'Cooling Tower Fan & Pump', kw: 11, qty: 2, startingMethod: 'Star-Delta' },
      { id: 'cs-3', name: 'EP Li-Ion Forklift Fast Charger', kw: 10, qty: 2, startingMethod: 'Direct' },
      { id: 'cs-4', name: 'Industrial High-Bay LED Lighting', kw: 4, qty: 1, startingMethod: 'Direct' },
    ],
  },
  {
    id: 'hotel',
    number: '05',
    title: 'Hotel / banquet hall',
    subtitle: 'Air conditioning, lifts, lighting',
    iconName: 'Hotel',
    defaultLoads: [
      { id: 'ht-1', name: 'Central Water Chiller Plant', kw: 45, qty: 1, startingMethod: 'Soft-Starter' },
      { id: 'ht-2', name: 'Passenger / Freight Elevator (Lift)', kw: 15, qty: 2, startingMethod: 'VFD' },
      { id: 'ht-3', name: 'Commercial Kitchen / Canteen Equip.', kw: 20, qty: 1, startingMethod: 'Direct' },
      { id: 'ht-4', name: 'Hydro-Pneumatic Water Booster Pump', kw: 7.5, qty: 2, startingMethod: 'DOL' },
      { id: 'ht-5', name: 'Industrial High-Bay LED Lighting', kw: 12, qty: 1, startingMethod: 'Direct' },
    ],
  },
  {
    id: 'textile',
    number: '06',
    title: 'Textile mill',
    subtitle: 'Fans, compressors, conveyors',
    iconName: 'Factory',
    defaultLoads: [
      { id: 'tx-1', name: 'Heavy Extruder / Press', kw: 30, qty: 2, startingMethod: 'Soft-Starter' },
      { id: 'tx-2', name: 'Air Handling Unit (AHU / Cleanroom)', kw: 22, qty: 1, startingMethod: 'VFD' },
      { id: 'tx-3', name: 'Heavy Screw Compressor (37+ kW)', kw: 37, qty: 1, startingMethod: 'Soft-Starter' },
      { id: 'tx-4', name: 'Industrial Conveyor / Feeder', kw: 7.5, qty: 2, startingMethod: 'DOL' },
      { id: 'tx-5', name: 'Industrial High-Bay LED Lighting', kw: 8, qty: 1, startingMethod: 'Direct' },
    ],
  },
  {
    id: 'fabrication',
    number: '07',
    title: 'Fabrication / welding',
    subtitle: 'Welders, compressed air, handling',
    iconName: 'Flame',
    defaultLoads: [
      { id: 'fb-1', name: 'Multi-Operator Welding Stations', kw: 25, qty: 1, startingMethod: 'Direct' },
      { id: 'fb-2', name: 'Kaeser Rotary Screw Compressor', kw: 18.5, qty: 1, startingMethod: 'Star-Delta' },
      { id: 'fb-3', name: 'Overhead EOT Crane / Hoist', kw: 11, qty: 1, startingMethod: 'Soft-Starter' },
      { id: 'fb-4', name: 'Milling & Drilling Machine', kw: 15, qty: 1, startingMethod: 'Star-Delta' },
      { id: 'fb-5', name: 'Industrial High-Bay LED Lighting', kw: 5, qty: 1, startingMethod: 'Direct' },
    ],
  },
  {
    id: 'hospital',
    number: '08',
    title: 'Hospital / diagnostic',
    subtitle: 'HVAC, lifts, pumps, critical loads',
    iconName: 'Activity',
    defaultLoads: [
      { id: 'hs-1', name: 'Office Computers, IT & Server UPS', kw: 35, qty: 1, startingMethod: 'Direct' },
      { id: 'hs-2', name: 'Central Water Chiller Plant', kw: 40, qty: 1, startingMethod: 'Soft-Starter' },
      { id: 'hs-3', name: 'Passenger / Freight Elevator (Lift)', kw: 15, qty: 2, startingMethod: 'VFD' },
      { id: 'hs-4', name: 'Industrial Vacuum Pump', kw: 7.5, qty: 2, startingMethod: 'DOL' },
      { id: 'hs-5', name: 'Industrial High-Bay LED Lighting', kw: 10, qty: 1, startingMethod: 'Direct' },
    ],
  },
  {
    id: 'warehouse',
    number: '09',
    title: 'Warehouse / logistics',
    subtitle: 'Forklift charging, lifts, lighting',
    iconName: 'PackageCheck',
    defaultLoads: [
      { id: 'wh-1', name: 'EP Li-Ion Forklift Fast Charger', kw: 10, qty: 4, startingMethod: 'Direct' },
      { id: 'wh-2', name: 'Passenger / Freight Elevator (Lift)', kw: 11, qty: 1, startingMethod: 'VFD' },
      { id: 'wh-3', name: 'Industrial High-Bay LED Lighting', kw: 6, qty: 1, startingMethod: 'Direct' },
      { id: 'wh-4', name: 'Industrial Conveyor / Feeder', kw: 5.5, qty: 2, startingMethod: 'DOL' },
      { id: 'wh-5', name: 'Hydro-Pneumatic Water Booster Pump', kw: 5.5, qty: 1, startingMethod: 'DOL' },
    ],
  },
  {
    id: 'custom',
    number: '10',
    title: 'Custom / from scratch',
    subtitle: 'Build a load list one item at a time',
    iconName: 'SlidersHorizontal',
    defaultLoads: [],
  },
];

export interface SiteConditions {
  diversityFactor: number; // e.g. 0.65
  powerFactor: number; // e.g. 0.8
  altitude: number; // in metres, e.g. 200
  temperature: number; // in Celsius, e.g. 40
  growthReserve: number; // e.g. 0.20
}

export const DEFAULT_CONDITIONS: SiteConditions = {
  diversityFactor: 0.65,
  powerFactor: 0.8,
  altitude: 200,
  temperature: 40,
  growthReserve: 0.2,
};

// Standard DG set kVA ratings manufactured & supported in India (including Greaves Cotton lineup)
export const STANDARD_DG_RATINGS = [
  15, 20, 25, 30, 40, 50, 62.5, 75, 82.5, 100, 125, 160, 200, 250, 320, 380, 400, 500, 625, 750, 1000, 1250, 1500, 2000, 2500,
];

export interface CalculationResult {
  connectedLoadKw: number;
  runningDemandKw: number;
  runningDemandKva: number;
  startingDemandKva: number;
  deratingPercent: number;
  recommendedKva: number;
  minCalculatedKva: number;
  largestMotorKw: number;
  largestMotorMethod: StartingMethod;
  deratingNotes: string[];
}

export function calculateGeneratorSize(
  loads: LoadItem[],
  conditions: SiteConditions
): CalculationResult {
  // 1. Connected Load in kW
  let connectedLoadKw = 0;
  let largestMotorKw = 0;
  let largestMotorMethod: StartingMethod = 'DOL';
  let largestMotorSurgeKva = 0;

  loads.forEach((load) => {
    const totalItemKw = (load.kw || 0) * (load.qty || 1);
    connectedLoadKw += totalItemKw;

    // Check if this single motor creates the largest starting surge
    const methodCfg = STARTING_METHODS[load.startingMethod] || STARTING_METHODS.DOL;
    const singleMotorKw = load.kw || 0;
    const startingKva = (singleMotorKw * methodCfg.surgeMultiplier) / (conditions.powerFactor || 0.8);

    if (startingKva > largestMotorSurgeKva && load.startingMethod !== 'Direct') {
      largestMotorSurgeKva = startingKva;
      largestMotorKw = singleMotorKw;
      largestMotorMethod = load.startingMethod;
    }
  });

  // If no motor found with starting surge, fallback
  if (largestMotorSurgeKva === 0 && loads.length > 0) {
    const firstNonEmpty = loads[0];
    largestMotorKw = firstNonEmpty.kw || 0;
    largestMotorMethod = firstNonEmpty.startingMethod;
  }

  // 2. Running Demand in kW with diversity and growth reserve
  const runningDemandKw =
    connectedLoadKw * (conditions.diversityFactor || 0.65) * (1 + (conditions.growthReserve || 0.2));
  
  // Running Demand in kVA
  const runningDemandKva = runningDemandKw / (conditions.powerFactor || 0.8);

  // 3. Starting Demand kVA:
  // Standard generator sizing rule: Surge of largest single motor + running kVA of remaining diverse load
  const remainingRunningKw = Math.max(0, runningDemandKw - largestMotorKw);
  const remainingRunningKva = remainingRunningKw / (conditions.powerFactor || 0.8);
  const startingDemandKva = largestMotorSurgeKva + remainingRunningKva;

  // 4. Site Derating Calculation
  // Standard rating test is 40°C and 1000m altitude
  let deratingPercent = 0;
  const deratingNotes: string[] = [];

  if (conditions.temperature > 40) {
    const excessTemp = conditions.temperature - 40;
    const tempDerate = Math.min(15, excessTemp * 0.7); // ~0.7% per deg C above 40
    deratingPercent += tempDerate;
    deratingNotes.push(`Ambient ${conditions.temperature}°C: ~${tempDerate.toFixed(1)}% thermal derate`);
  }

  if (conditions.altitude > 1000) {
    const excessAlt = conditions.altitude - 1000;
    const altDerate = Math.min(20, (excessAlt / 100) * 1.0); // ~1% per 100m above 1000m
    deratingPercent += altDerate;
    deratingNotes.push(`Altitude ${conditions.altitude}m: ~${altDerate.toFixed(1)}% elevation derate`);
  }

  if (deratingPercent === 0) {
    deratingNotes.push('Standard sea-level & 40°C baseline conditions');
  }

  const deratingFactor = Math.max(0.65, 1 - deratingPercent / 100);

  // 5. Minimum raw required generator kVA:
  // A generator set typically absorbs starting surges up to 1.5x - 1.8x continuous rating without dropping below 15-20% voltage dip.
  // Therefore, generator capability requirement is max(Continuous kVA, Starting kVA / 1.6) divided by derating factor.
  const surgeAbsorbFactor = 1.6;
  const rawContinuousKva = runningDemandKva / deratingFactor;
  const rawSurgeKva = startingDemandKva / (surgeAbsorbFactor * deratingFactor);

  const minCalculatedKva = Math.max(rawContinuousKva, rawSurgeKva);

  // 6. Match with standard DG set rating
  let recommendedKva = STANDARD_DG_RATINGS[STANDARD_DG_RATINGS.length - 1];
  for (const rating of STANDARD_DG_RATINGS) {
    if (rating >= minCalculatedKva) {
      recommendedKva = rating;
      break;
    }
  }

  return {
    connectedLoadKw: Math.round(connectedLoadKw * 10) / 10,
    runningDemandKw: Math.round(runningDemandKw * 10) / 10,
    runningDemandKva: Math.round(runningDemandKva * 10) / 10,
    startingDemandKva: Math.round(startingDemandKva * 10) / 10,
    deratingPercent: Math.round(deratingPercent * 10) / 10,
    recommendedKva,
    minCalculatedKva: Math.round(minCalculatedKva * 10) / 10,
    largestMotorKw,
    largestMotorMethod,
    deratingNotes,
  };
}
