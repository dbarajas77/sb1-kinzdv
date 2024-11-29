import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SideNavigation from '../../components/rda/SideNavigation';
import ReportNavigation from '../../components/rda/ReportNavigation';
import UserTable from '../../components/rda/UserTable';
import SearchBar from '../../components/rda/SearchBar';
import CreateUserModal from '../../components/rda/CreateUserModal';
import { mockUsers, User } from '../../data/mockUsers';

const UserManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users] = useState(mockUsers);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleCreateUser = () => {
    setShowCreateModal(true);
  };

  const handleSaveUser = (userData: any) => {
    console.log('Saving user:', userData);
    setShowCreateModal(false);
  };

  const handleEdit = (user: User) => {
    console.log('Editing user:', user);
  };

  const handleDelete = (user: User) => {
    console.log('Deleting user:', user);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
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
                <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                <button
                  onClick={handleCreateUser}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                  <span>Create New User</span>
                </button>
              </div>
              <SearchBar
                value={searchTerm}
                onChange={handleSearch}
                onClear={handleClearSearch}
              />
            </div>
            <div className="p-6">
              <UserTable
                users={filteredUsers}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>

      <CreateUserModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleSaveUser}
      />
    </div>
  );
};

export default UserManagementPage;