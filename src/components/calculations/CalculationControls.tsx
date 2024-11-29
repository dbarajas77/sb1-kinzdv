import React from 'react';
import type { CalculationParams } from '../../types/calculations';

interface Props {
  params: CalculationParams;
  onParamChange: (field: keyof CalculationParams, value: number) => void;
  onReset: () => void;
  onRunCalculations: () => void;
}

const CalculationControls = ({ params, onParamChange, onReset, onRunCalculations }: Props) => {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={onRunCalculations}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          RUN CALCULATIONS
        </button>
        <button
          onClick={onReset}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          RESET
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">FUNDING DURATION</span>
          <input
            type="number"
            value={params.fundingDuration}
            onChange={(e) => onParamChange('fundingDuration', parseInt(e.target.value))}
            className="w-20 p-2 border rounded-lg text-center"
          />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">MONTHLY CONTRIBUTION</span>
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2">$</span>
            <input
              type="number"
              value={params.monthlyContribution}
              onChange={(e) => onParamChange('monthlyContribution', parseInt(e.target.value))}
              className="w-24 p-2 pl-6 border rounded-lg text-center"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">BALANCE FOR FISCAL YR</label>
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2">$</span>
            <input
              type="number"
              value={params.balanceFiscalYear}
              onChange={(e) => onParamChange('balanceFiscalYear', parseInt(e.target.value))}
              className="w-full p-2 pl-6 border rounded-lg text-center bg-blue-100"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">INVESTMENT YIELD</label>
          <div className="relative">
            <input
              type="number"
              value={params.investmentYield}
              onChange={(e) => onParamChange('investmentYield', parseInt(e.target.value))}
              className="w-full p-2 pr-8 border rounded-lg text-center bg-blue-100"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2">%</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">YEARLY INCREASE</label>
          <div className="relative">
            <input
              type="number"
              value={params.yearlyIncrease}
              onChange={(e) => onParamChange('yearlyIncrease', parseInt(e.target.value))}
              className="w-full p-2 pr-8 border rounded-lg text-center bg-blue-100"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2">%</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">CONTINGENCY FACTOR</label>
          <div className="relative">
            <input
              type="number"
              value={params.contingencyFactor}
              onChange={(e) => onParamChange('contingencyFactor', parseInt(e.target.value))}
              className="w-full p-2 pr-8 border rounded-lg text-center bg-blue-100"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationControls;