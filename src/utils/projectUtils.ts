export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completed':
      return 'bg-green-100 text-green-800';
    case 'in progress':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getProgressColor = (progress: number) => {
  if (progress >= 75) return 'bg-green-500';
  if (progress >= 25) return 'bg-blue-500';
  return 'bg-gray-500';
};

export const getTaskStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'text-green-500';
    case 'in-progress':
      return 'text-blue-500';
    default:
      return 'text-gray-400';
  }
};

export const handleDownload = async (document: { fileName: string; fileUrl: string }) => {
  try {
    const response = await fetch(document.fileUrl);
    if (!response.ok) throw new Error('Download failed');
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = document.fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.error('Download error:', error);
    throw error;
  }
};

export const handleDelete = async (documentId: string) => {
  try {
    // Here you would typically make an API call to delete the document
    console.log('Deleting document:', documentId);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return true;
  } catch (error) {
    console.error('Delete error:', error);
    throw error;
  }
};

export const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    if (file.type === 'application/pdf') {
      // Here you would typically handle the file upload
      console.log('Uploading file:', file);
      return file;
    } else {
      throw new Error('Please select a PDF file');
    }
  }
  return null;
};