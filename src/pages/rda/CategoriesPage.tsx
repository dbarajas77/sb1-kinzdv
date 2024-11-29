import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SideNavigation from '../../components/rda/SideNavigation';
import ReportNavigation from '../../components/rda/ReportNavigation';
import CategoriesTable from '../../components/rda/CategoriesTable';
import SearchBar from '../../components/rda/SearchBar';
import CreateCategoryModal from '../../components/rda/CreateCategoryModal';
import { mockCategories, Category } from '../../data/mockCategories';

const CategoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories] = useState(mockCategories);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleCreateCategory = () => {
    setShowCreateModal(true);
  };

  const handleSaveCategory = (categoryData: any) => {
    console.log('Saving category:', categoryData);
    setShowCreateModal(false);
  };

  const handleEdit = (category: Category) => {
    console.log('Editing category:', category);
  };

  const handleDelete = (category: Category) => {
    console.log('Deleting category:', category);
  };

  const filteredCategories = categories.filter(category =>
    category.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.shortName.toLowerCase().includes(searchTerm.toLowerCase())
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
                <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
                <button
                  onClick={handleCreateCategory}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                  <span>Create New Category</span>
                </button>
              </div>
              <SearchBar
                value={searchTerm}
                onChange={handleSearch}
                onClear={handleClearSearch}
              />
            </div>
            <div className="p-6">
              <CategoriesTable
                categories={filteredCategories}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>

      <CreateCategoryModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleSaveCategory}
      />
    </div>
  );
};

export default CategoriesPage;