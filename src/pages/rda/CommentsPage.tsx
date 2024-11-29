import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SideNavigation from '../../components/rda/SideNavigation';
import ReportNavigation from '../../components/rda/ReportNavigation';
import CommentsTable from '../../components/rda/CommentsTable';
import SearchBar from '../../components/rda/SearchBar';
import CreateCommentModal from '../../components/rda/CreateCommentModal';
import { mockComments, Comment } from '../../data/mockComments';

const CommentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [comments] = useState(mockComments);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleCreateComment = () => {
    setShowCreateModal(true);
  };

  const handleSaveComment = (commentData: any) => {
    console.log('Saving comment:', commentData);
    setShowCreateModal(false);
  };

  const handleEdit = (comment: Comment) => {
    console.log('Editing comment:', comment);
  };

  const handleDelete = (comment: Comment) => {
    console.log('Deleting comment:', comment);
  };

  const filteredComments = comments.filter(comment =>
    comment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comment.id.toLowerCase().includes(searchTerm.toLowerCase())
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
                <h1 className="text-2xl font-bold text-gray-900">Comments</h1>
                <button
                  onClick={handleCreateComment}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                  <span>Create New Comment</span>
                </button>
              </div>
              <SearchBar
                value={searchTerm}
                onChange={handleSearch}
                onClear={handleClearSearch}
              />
            </div>
            <div className="p-6">
              <CommentsTable
                comments={filteredComments}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>

      <CreateCommentModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleSaveComment}
      />
    </div>
  );
};

export default CommentsPage;