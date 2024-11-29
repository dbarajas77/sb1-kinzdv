import React, { useState } from 'react';
import { Plus, Download, Upload } from 'lucide-react';
import SideNavigation from '../../components/rda/SideNavigation';
import ReportNavigation from '../../components/rda/ReportNavigation';
import ComponentsTable from '../../components/rda/ComponentsTable';
import SearchBar from '../../components/rda/SearchBar';
import CreateComponentModal from '../../components/rda/CreateComponentModal';
import { mockComponents, Component } from '../../data/mockComponents';

const ComponentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [components] = useState<Component[]>(mockComponents);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleCreateComponent = () => {
    setShowCreateModal(true);
  };

  const handleSaveComponent = (componentData: any) => {
    console.log('Saving component:', componentData);
    setShowCreateModal(false);
  };

  const handleEdit = (component: Component) => {
    console.log('Editing component:', component);
  };

  const handleDelete = (component: Component) => {
    console.log('Deleting component:', component);
  };

  const handleExport = () => {
    console.log('Exporting components');
  };

  const handleImport = () => {
    console.log('Importing components');
  };

  const filteredComponents = components.filter(component =>
    component.componentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.assetId.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Side Navigation */}
        <div className="w-64 bg-blue-600 min-h-screen">
          <div className="p-4">
            <SideNavigation />
            <ReportNavigation />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Components</h1>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleExport}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Download className="h-5 w-5 text-gray-600" />
                    <span>Export</span>
                  </button>
                  <button
                    onClick={handleImport}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Upload className="h-5 w-5 text-gray-600" />
                    <span>Import</span>
                  </button>
                  <button
                    onClick={handleCreateComponent}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                    <span>Create New Component</span>
                  </button>
                </div>
              </div>
              <SearchBar
                value={searchTerm}
                onChange={handleSearch}
                onClear={handleClearSearch}
              />
            </div>
            <div className="p-6 overflow-x-auto">
              <ComponentsTable
                components={filteredComponents}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>

      <CreateComponentModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleSaveComponent}
      />
    </div>
  );
};

export default ComponentsPage;