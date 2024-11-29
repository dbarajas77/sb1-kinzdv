import React from 'react';
import type { YearlyData } from '../../types/calculations';

interface Props {
  yearlyData: YearlyData[];
  columnValues: { [key: string]: { [year: number]: string } };
  onColumnValueChange: (column: string, year: number, value: string) => void;
}

const CalculationTable = ({ yearlyData, columnValues, onColumnValueChange }: Props) => {
  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-sm font-medium text-gray-700">
              <th className="px-4 py-3 text-left">YEAR</th>
              <th className="px-4 py-3 text-left">CURRENT REPLACEMENT COST</th>
              <th className="px-4 py-3 text-left">ANNUAL CONTRIBUTION</th>
              <th className="px-4 py-3 text-left">ANNUAL INTEREST CONTRIBUTION</th>
              <th className="px-4 py-3 text-left">ANNUAL EXPENDITURES</th>
              <th className="px-4 py-3 text-left">PROJECTED ENDING RESERVES</th>
              <th className="px-4 py-3 text-left">FULLY FUNDED RESERVES</th>
              <th className="px-4 py-3 text-left">PERCENT FULLY FUNDED</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {yearlyData.map((data) => (
              <tr key={data.year}>
                <td className="px-4 py-3">{data.year}</td>
                {Object.keys(columnValues).map((column) => (
                  <td key={column} className="px-4 py-3">
                    <input
                      type="text"
                      value={columnValues[column][data.year] || ''}
                      onChange={(e) => onColumnValueChange(column, data.year, e.target.value)}
                      className="w-full p-2 border rounded-lg"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalculationTable;