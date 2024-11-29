export interface ReportDetails {
  name: string;
  clientName: string;
  accountNumber: string;
  date: string;
}

export interface CalculationParams {
  fundingDuration: number;
  monthlyContribution: number;
  balanceFiscalYear: number;
  investmentYield: number;
  yearlyIncrease: number;
  contingencyFactor: number;
}

export interface YearlyData {
  year: number;
  currentReplacementCost: number;
  annualContribution: number;
  annualInterestContribution: number;
  annualExpenditures: number;
  projectedEndingReserves: number;
  fullyFundedReserves: number;
  percentFullyFunded: number;
}