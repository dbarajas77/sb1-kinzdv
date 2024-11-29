import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import type { Comment } from '../../data/mockComments';

interface CommentsTableProps {
  comments: Comment[];
  onEdit: (comment: Comment) => void;
  onDelete: (comment: Comment) => void;
}

const CommentsTable = ({ comments, onEdit, onDelete }: CommentsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-10 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Preset
            </th>
            <th className="w-20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Id
            </th>
            <th className="w-64 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Comment
            </th>
            <th className="w-24 px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {comments.map((comment) => (
            <tr key={comment.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked={comment.preset}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  readOnly
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {comment.id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {comment.description}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {comment.comment}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end space-x-2">
                  <button
                    onClick={() => onEdit(comment)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDelete(comment)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentsTable;