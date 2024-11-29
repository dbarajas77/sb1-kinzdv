import React, { useState, useCallback } from 'react';
import MetricCard from './MetricCard';
import EditableMetric from './EditableMetric';

const FinancialMetrics = () => {
  const [reserveBalance, setReserveBalance] = useState(585171);
  const [percentFunded, setPercentFunded] = useState(63);
  const [unitsCount, setUnitsCount] = useState(505);
  const [monthlyPerUnit, setMonthlyPerUnit] = useState(96.59);
  const [rates, setRates] = useState({
    inflation: 3.0,
    investment: 3.0,
    contingency: 3.0
  });

  const updateDerivedValues = useCallback((balance: number, units: number) => {
    const monthly = (balance / units / 12);
    setMonthlyPerUnit(parseFloat(monthly.toFixed(2)));
  }, []);

  const handleReserveBalanceChange = (newValue: number) => {
    setReserveBalance(newValue);
    updateDerivedValues(newValue, unitsCount);
  };

  const handleUnitsCountChange = (newValue: number) => {
    setUnitsCount(newValue);
    updateDerivedValues(reserveBalance, newValue);
  };

  const handleMonthlyPerUnitChange = (newValue: number) => {
    setMonthlyPerUnit(newValue);
    const newBalance = newValue * unitsCount * 12;
    setReserveBalance(Math.round(newBalance));
  };

  const handlePercentFundedChange = (newValue: number) => {
    setPercentFunded(Math.min(100, Math.max(0, newValue)));
  };

  const handleRateChange = (rate: keyof typeof rates) => (newValue: number) => {
    setRates(prev => ({
      ...prev,
      [rate]: Math.min(100, Math.max(0, newValue))
    }));
  };

  const getFundingLevel = (percent: number) => {
    if (percent >= 70) return 'Strong Level';
    if (percent >= 30) return 'Fair Level';
    return 'Critical Level';
  };

  const getFundingColor = (percent: number) => {
    if (percent >= 70) return 'text-emerald-500';
    if (percent >= 30) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="space-y-4">
      {/* Reserve Balance */}
      <MetricCard title="Current Reserve Balance" accentColor="bg-blue-50">
        <div className="space-y-3">
          <EditableMetric
            value={reserveBalance.toLocaleString()}
            onValueChange={handleReserveBalanceChange}
            prefix="$"
            className="text-3xl font-bold text-blue-600"
            iconColor="text-blue-500"
          />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Monthly Per Unit</span>
              <EditableMetric
                value={monthlyPerUnit}
                onValueChange={handleMonthlyPerUnitChange}
                prefix="$"
                className="text-xl font-bold text-blue-600"
                iconColor="text-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Total Units</span>
              <EditableMetric
                value={unitsCount}
                onValueChange={handleUnitsCountChange}
                className="text-xl font-bold text-blue-600"
                iconColor="text-blue-500"
              />
            </div>
          </div>
        </div>
      </MetricCard>

      {/* Percent Funded */}
      <MetricCard title="Percent Funded" accentColor="bg-emerald-50">
        <div className="space-y-2">
          <div className="flex items-end space-x-2">
            <EditableMetric
              value={percentFunded}
              onValueChange={handlePercentFundedChange}
              suffix="%"
              className={`text-3xl font-bold ${getFundingColor(percentFunded)}`}
              iconColor="text-emerald-500"
            />
            <span className="text-sm text-gray-500 mb-1">{getFundingLevel(percentFunded)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`${getFundingColor(percentFunded)} h-2 rounded-full transition-all duration-300`} 
              style={{ width: `${percentFunded}%` }} 
            />
          </div>
        </div>
      </MetricCard>

      {/* Rates */}
      <MetricCard title="Financial Rates" accentColor="bg-violet-50">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <EditableMetric
              value={rates.inflation}
              onValueChange={handleRateChange('inflation')}
              suffix="%"
              className="text-xl font-bold text-violet-600"
              iconColor="text-violet-500"
            />
            <div className="text-xs text-gray-500 mt-1">Inflation</div>
          </div>
          <div className="text-center">
            <EditableMetric
              value={rates.investment}
              onValueChange={handleRateChange('investment')}
              suffix="%"
              className="text-xl font-bold text-violet-600"
              iconColor="text-violet-500"
            />
            <div className="text-xs text-gray-500 mt-1">Investment</div>
          </div>
          <div className="text-center">
            <EditableMetric
              value={rates.contingency}
              onValueChange={handleRateChange('contingency')}
              suffix="%"
              className="text-xl font-bold text-violet-600"
              iconColor="text-violet-500"
            />
            <div className="text-xs text-gray-500 mt-1">Contingency</div>
          </div>
        </div>
      </MetricCard>

      {/* Major Components */}
      <MetricCard title="Major Components Due" accentColor="bg-red-50">
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Roofing System (2035)</span>
              <span className="text-sm font-medium text-red-500">65%</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex-grow bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '65%' }} />
              </div>
              <span className="text-sm font-medium text-gray-900">$1.2M</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Brick Pointing (2025)</span>
              <span className="text-sm font-medium text-orange-500">9%</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex-grow bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '9%' }} />
              </div>
              <span className="text-sm font-medium text-gray-900">$166K</span>
            </div>
          </div>
        </div>
      </MetricCard>
    </div>
  );
};

export default FinancialMetrics;