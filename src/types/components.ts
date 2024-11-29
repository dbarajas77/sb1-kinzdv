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

export interface ReportComponent extends Component {
  id: string;
  notes: string;
  placedInService: string;
}