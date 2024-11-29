import { format } from 'date-fns';

export interface Task {
  name: string;
  status: 'completed' | 'in-progress' | 'pending';
}

export interface Document {
  id: string;
  fileName: string;
  type: 'contract' | 'invoice';
  date: string;
  amount?: number;
  vendor?: string;
  fileUrl: string;
}

export interface Project {
  id: string;
  name: string;
  status: 'pending' | 'in progress' | 'completed';
  progress: number;
  dueDate: string;
  estimatedCost: number;
  category: string;
  timeframe: string;
  description: string;
  riskLevel: 'High' | 'Low';
  tasks: Task[];
  documents: Document[];
  imageUrl?: string;
}

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Roofing System Replacement',
    status: 'pending',
    progress: 0,
    dueDate: '2024-08-14',
    estimatedCost: 125000,
    category: 'Structural',
    timeframe: '4-6 weeks',
    description: 'Complete replacement of the main building roofing system including underlayment and flashing.',
    riskLevel: 'High',
    imageUrl: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=2070',
    tasks: [
      { name: 'Initial Assessment', status: 'pending' },
      { name: 'Material Procurement', status: 'pending' },
      { name: 'Old Roof Removal', status: 'pending' },
      { name: 'New Installation', status: 'pending' },
      { name: 'Final Inspection', status: 'pending' }
    ],
    documents: []
  },
  {
    id: '2',
    name: 'Pool Equipment Upgrade',
    status: 'pending',
    progress: 0,
    dueDate: '2024-06-29',
    estimatedCost: 45000,
    category: 'Amenities',
    timeframe: '2-3 weeks',
    description: 'Upgrade of pool pumps, filters, and chemical control systems.',
    riskLevel: 'Low',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070',
    tasks: [
      { name: 'Equipment Assessment', status: 'pending' },
      { name: 'Vendor Selection', status: 'pending' },
      { name: 'Equipment Order', status: 'pending' },
      { name: 'Installation', status: 'pending' },
      { name: 'Testing', status: 'pending' }
    ],
    documents: []
  },
  {
    id: '3',
    name: 'Exterior Painting',
    status: 'pending',
    progress: 0,
    dueDate: '2024-07-15',
    estimatedCost: 75000,
    category: 'Building Exterior',
    timeframe: '3-4 weeks',
    description: 'Complete exterior painting of all buildings including surface preparation and repairs.',
    riskLevel: 'Low',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070',
    tasks: [
      { name: 'Surface Preparation', status: 'pending' },
      { name: 'Color Selection', status: 'pending' },
      { name: 'Pressure Washing', status: 'pending' },
      { name: 'Painting', status: 'pending' },
      { name: 'Final Inspection', status: 'pending' }
    ],
    documents: []
  },
  {
    id: '4',
    name: 'Parking Lot Resurfacing',
    status: 'pending',
    progress: 0,
    dueDate: '2024-09-01',
    estimatedCost: 95000,
    category: 'Infrastructure',
    timeframe: '2-3 weeks',
    description: 'Complete resurfacing of main parking areas including striping and signage.',
    riskLevel: 'Low',
    imageUrl: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2070',
    tasks: [
      { name: 'Surface Assessment', status: 'pending' },
      { name: 'Crack Repair', status: 'pending' },
      { name: 'Resurfacing', status: 'pending' },
      { name: 'Striping', status: 'pending' },
      { name: 'Final Inspection', status: 'pending' }
    ],
    documents: []
  }
];