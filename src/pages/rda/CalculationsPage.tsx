import React, { useState, useEffect } from 'react';
import SideNavigation from '../../components/rda/SideNavigation';
import ReportNavigation from '../../components/rda/ReportNavigation';
import ReportDetailsSection from '../../components/calculations/ReportDetailsSection';
import CalculationControls from '../../components/calculations/CalculationControls';
import CalculationTable from '../../components/calculations/CalculationTable';
import type { ReportDetails, CalculationParams, YearlyData } from '../../types/calculations';

const CalculationsPage = () => {
  const [reportDetails] = useState<ReportDetails>({
    name: 'Calculations',
    clientName: 'Mike Torello',
    accountNumber: '0324654654',
    date: '07/25/2024'
  });

  const [params, setParams] = useState<CalculationParams>({
    fundingDuration: 30,
    monthlyContribution: 160,
    balanceFiscalYear: 100000,
    investmentYield: 3,
    yearlyIncrease: 3,
    contingencyFactor: 3
  });

  const [yearlyData, setYearlyData] = useState<YearlyData[]>([]);
  const [columnValues, setColumnValues] = useState<{ [key: string]: { [year: number]: string } }>({
    currentReplacementCost: {},
    annualContribution: {},
    annualInterestContribution: {},
    annualExpenditures: {},
    projectedEndingReserves: {},
    fullyFundedReserves: {},
    percentFullyFunded: {}
  });

  useEffect(() => {
    generateYearlyData();
  }, [params.fundingDuration]);

  const generateYearlyData = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: params.fundingDuration }, (_, i) => ({
      year: currentYear + i,
      currentReplacementCost: 0,
      annualContribution: 0,
      annualInterestContribution: 0,
      annualExpenditures: 0,
      projectedEndingReserves: 0,
      fullyFundedReserves: 0,
      percentFullyFunded: 0
    }));
    setYearlyData(years);
  };

  const handleParamChange = (field: keyof CalculationParams, value: number) => {
    setParams(prev => ({ ...prev, [field]: value }));
  };

  const handleColumnValueChange = (column: string, year: number, value: string) => {
    setColumnValues(prev => ({
      ...prev,
      [column]: { ...prev[column], [year]: value }
    }));
  };

  const handleReset = () => {
    setParams({
      fundingDuration: 30,
      monthlyContribution: 160,
      balanceFiscalYear: 100000,
      investmentYield: 3,
      yearlyIncrease: 3,
      contingencyFactor: 3
    });
    setColumnValues({
      currentReplacementCost: {},
      annualContribution: {},
      annualInterestContribution: {},
      annualExpenditures: {},
      projectedEndingReserves: {},
      fullyFundedReserves: {},
      percentFullyFunded: {}
    });
  };

  const handleRunCalculations = () => {
    // Implement calculation logic here
    console.log('Running calculations with params:', params);
    console.log('Column values:', columnValues);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-64 bg-blue-600 text-white">
        <div className="p-4">
          <SideNavigation />
          <ReportNavigation />
        </div>
      </div>
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow">
          <ReportDetailsSection details={reportDetails} />
          <CalculationControls
            params={params}
            onParamChange={handleParamChange}
            onReset={handleReset}
            onRunCalculations={handleRunCalculations}
          />
          <CalculationTable
            yearlyData={yearlyData}
            columnValues={columnValues}
            onColumnValueChange={handleColumnValueChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CalculationsPage;