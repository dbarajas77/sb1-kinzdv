import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Download, Trash2, Search, Upload, Image, Plus } from 'lucide-react';

interface Photo {
  id: string;
  fileName: string;
  date: string;
  category: string;
  url: string;
  description: string;
}

interface CommunityPhotosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockPhotos: Photo[] = [
  {
    id: '1',
    fileName: 'roofing_inspection.jpg',
    date: '2/14/2024',
    category: 'Roofing',
    url: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=2070',
    description: 'Roof inspection photos showing current condition'
  },
  {
    id: '2',
    fileName: 'pool_equipment.jpg',
    date: '2/9/2024',
    category: 'Pool',
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070',
    description: 'Pool equipment and mechanical room'
  },
  {
    id: '3',
    fileName: 'exterior_paint.jpg',
    date: '2/1/2024',
    category: 'Exterior',
    url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070',
    description: 'Building exterior paint condition assessment'
  }
];

const CommunityPhotosModal = ({ isOpen, onClose }: CommunityPhotosModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  const handleDownload = async (photo: Photo, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const response = await fetch(photo.url);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = photo.fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      alert('Photo downloaded successfully!');
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download photo. Please try again.');
    }
  };

  const handleDelete = async (photoId: string) => {
    try {
      // Here you would typically make an API call to delete the photo
      alert('Photo deleted successfully!');
      setShowDeleteConfirm(null);
      if (selectedPhoto?.id === photoId) {
        setSelectedPhoto(null);
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete photo. Please try again.');
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
          // Here you would typically handle the file upload to your backend
          alert(`Photo "${file.name}" selected for upload`);
        } else {
          alert('Please select only image files.');
        }
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">Community Photos</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex h-[calc(90vh-4rem)]">
          {/* Left side - Photo grid */}
          <div className="w-2/3 border-r p-4 overflow-y-auto">
            {/* Search and Upload */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search photos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Upload className="h-5 w-5" />
                  <span>Upload</span>
                </div>
              </label>
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Upload tile */}
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="h-8 w-8 text-gray-400" />
                  <span className="text-sm text-gray-500 mt-2">Add Photos</span>
                </motion.div>
              </label>

              {/* Photo tiles */}
              {mockPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  whileHover={{ scale: 1.02 }}
                  className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer group ${
                    selectedPhoto?.id === photo.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <img
                    src={photo.url}
                    alt={photo.description}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity">
                    <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => handleDownload(photo, e)}
                        className="p-1 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Download className="h-4 w-4 text-gray-700" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDeleteConfirm(photo.id);
                        }}
                        className="p-1 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </button>
                    </div>
                  </div>

                  {/* Delete confirmation */}
                  {showDeleteConfirm === photo.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
                      <div className="bg-white rounded-lg p-4 max-w-xs">
                        <p className="text-sm text-gray-700 mb-3">Are you sure you want to delete this photo?</p>
                        <div className="flex space-x-2 justify-end">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(photo.id);
                            }}
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                          >
                            Delete
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowDeleteConfirm(null);
                            }}
                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Photo details */}
          <div className="w-1/3 p-4 bg-gray-50">
            {selectedPhoto ? (
              <div className="space-y-4">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.description}
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">{selectedPhoto.category}</h3>
                  <p className="text-sm text-gray-600">{selectedPhoto.description}</p>
                  <div className="text-sm text-gray-500">
                    <p>Date: {selectedPhoto.date}</p>
                    <p>File: {selectedPhoto.fileName}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => handleDownload(selectedPhoto, e)}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(selectedPhoto.id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-500">
                <Image className="h-12 w-12 mb-2" />
                <p>Select a photo to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPhotosModal;