import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import SideNavigation from '../../components/rda/SideNavigation';
import ReportNavigation from '../../components/rda/ReportNavigation';
import ClientDetailsHeader from '../../components/rda/ClientDetailsHeader';
import ComponentsTable from '../../components/rda/ComponentsTable';
import FinalizeComponentModal from '../../components/rda/FinalizeComponentModal';
import type { Component, ReportComponent } from '../../types/components';

const mockAllComponents: Component[] = [
  {
    assetId: '1597',
    componentName: 'Window Coverings',
    usefulLifeRange: '',
    description: '$ 15.55 sq. ft. for @average quality @high quality @'
  },
  {
    assetId: '1596',
    componentName: 'Window Grills - Wrought Iron, Decorative',
    usefulLifeRange: '20-25-30-35',
    description: 'low quality @average quality @high quality @'
  },
  {
    assetId: '1595',
    componentName: 'Window Grills - Mesh or Iron Bars',
    usefulLifeRange: '20-25-30-35',
    description: 'low quality @average quality @high quality @'
  }
];

const generateUniqueId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

const ClientDetailsPage = () => {
  const { accountNumber } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComponent, setSelectedComponent] = useState<ReportComponent | null>(null);
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [reportComponents, setReportComponents] = useState<ReportComponent[]>([]);
  const [selectedReportComponents, setSelectedReportComponents] = useState<string[]>([]);

  const handleComponentSelect = (assetId: string) => {
    setSelectedComponents(prev => {
      if (prev.includes(assetId)) {
        return prev.filter(id => id !== assetId);
      } else {
        return [...prev, assetId];
      }
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedComponents(filteredComponents.map(c => c.assetId));
    } else {
      setSelectedComponents([]);
    }
  };

  const handleReportComponentSelect = (id: string) => {
    setSelectedReportComponents(prev => {
      if (prev.includes(id)) {
        return prev.filter(currentId => currentId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSelectAllReportComponents = (checked: boolean) => {
    if (checked) {
      setSelectedReportComponents(reportComponents.map(c => c.id));
    } else {
      setSelectedReportComponents([]);
    }
  };

  const handleTransferComponents = () => {
    const newComponents = selectedComponents.map(assetId => {
      const sourceComponent = mockAllComponents.find(c => c.assetId === assetId);
      if (!sourceComponent) return null;

      return {
        ...sourceComponent,
        id: generateUniqueId(),
        notes: '',
        placedInService: '',
        usefulLife: 0
      };
    }).filter((c): c is ReportComponent => c !== null);

    setReportComponents(prev => [...prev, ...newComponents]);
    setSelectedComponents([]);
  };

  const handleSaveComponent = (updatedComponent: ReportComponent) => {
    setReportComponents(prev => 
      prev.map(comp => 
        comp.id === updatedComponent.id ? updatedComponent : comp
      )
    );
    setSelectedComponent(null);
  };

  const handleFinalizeComponent = (finalizedComponent: ReportComponent) => {
    console.log('Finalized component:', finalizedComponent);
    setSelectedComponent(null);
  };

  const handleDeleteReportComponents = () => {
    setReportComponents(prev => 
      prev.filter(component => !selectedReportComponents.includes(component.id))
    );
    setSelectedReportComponents([]);
  };

  const filteredComponents = mockAllComponents.filter(component =>
    component.componentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.assetId.includes(searchTerm)
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Navigation */}
      <div className="w-64 bg-blue-600 text-white">
        <div className="p-4">
          <SideNavigation />
          <ReportNavigation />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="p-8">
          <div className="bg-white rounded-lg shadow-sm">
            <ClientDetailsHeader
              reportName="test"
              accountNumber={accountNumber || ''}
              date="11/12/2024"
            />

            {/* All Components Section */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium mb-4">All Components</h2>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Search components..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border rounded-lg w-64"
                  />
                  {selectedComponents.length > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      onClick={handleTransferComponents}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="h-5 w-5" />
                      <span>Add Selected</span>
                    </motion.button>
                  )}
                </div>
              </div>

              <div className="overflow-x-auto">
                <ComponentsTable
                  components={filteredComponents}
                  selectedComponents={selectedComponents}
                  onComponentSelect={handleComponentSelect}
                  onSelectAll={handleSelectAll}
                />
              </div>
            </div>

            {/* Report Components Section */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Report Components</h2>
                {selectedReportComponents.length > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={handleDeleteReportComponents}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <span>Delete Selected</span>
                  </motion.button>
                )}
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="w-10 px-4 py-3 text-left">
                        <input 
                          type="checkbox"
                          className="rounded border-gray-300"
                          checked={selectedReportComponents.length === reportComponents.length}
                          onChange={(e) => handleSelectAllReportComponents(e.target.checked)}
                        />
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Asset ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Component Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notes</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Placed In Service</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Useful Life</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Useful Life Range</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {reportComponents.map((component) => (
                      <tr 
                        key={component.id}
                        onClick={() => setSelectedComponent(component)}
                        className="hover:bg-gray-50 cursor-pointer"
                      >
                        <td className="px-4 py-4">
                          <input 
                            type="checkbox" 
                            className="rounded border-gray-300"
                            checked={selectedReportComponents.includes(component.id)}
                            onChange={() => handleReportComponentSelect(component.id)}
                            onClick={(e) => e.stopPropagation()} 
                          />
                        </td>
                        <td className="px-4 py-4 text-sm">{component.assetId}</td>
                        <td className="px-4 py-4 text-sm">{component.componentName}</td>
                        <td className="px-4 py-4 text-sm">{component.notes}</td>
                        <td className="px-4 py-4 text-sm">{component.placedInService}</td>
                        <td className="px-4 py-4 text-sm">{component.usefulLife}</td>
                        <td className="px-4 py-4 text-sm">{component.usefulLifeRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Finalize Component Modal */}
      {selectedComponent && (
        <FinalizeComponentModal
          isOpen={true}
          onClose={() => setSelectedComponent(null)}
          onSave={handleSaveComponent}
          onFinalize={handleFinalizeComponent}
          initialData={selectedComponent}
        />
      )}
    </div>
  );
};

export default ClientDetailsPage;