export interface Component {
  assetId: string;
  componentName: string;
  groupFacility: string;
  category: string;
  usefulLife: number;
  usefulLifeRange: string;
  effectiveDate: string;
  resource: string;
  quantity: number;
  unit: string;
  unitCost: number;
}

export const mockComponents: Component[] = [
  {
    assetId: '1597',
    componentName: 'Window Coverings',
    groupFacility: '0',
    category: 'Building Components',
    usefulLife: 0,
    usefulLifeRange: '',
    effectiveDate: '01/01/2022',
    resource: 'Google',
    quantity: 0,
    unit: 'Sq. Ft.',
    unitCost: 0
  },
  {
    assetId: '1596',
    componentName: 'Window Grills - Wrought Iron, Decorative',
    groupFacility: '0',
    category: 'Building Components',
    usefulLife: 25,
    usefulLifeRange: '20-25-30-35',
    effectiveDate: '01/01/2022',
    resource: 'Rda 55:7',
    quantity: 0,
    unit: 'Sq. Ft.',
    unitCost: 0
  },
  {
    assetId: '1595',
    componentName: 'Window Grills - Mesh or Iron Bars',
    groupFacility: '0',
    category: 'Building Components',
    usefulLife: 25,
    usefulLifeRange: '20-25-30-35',
    effectiveDate: '01/01/2022',
    resource: 'Rda 55:7',
    quantity: 0,
    unit: 'Sq. Ft.',
    unitCost: 0
  }
];