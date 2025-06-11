
import React, { useState } from "react";

const FileUploader = () => {
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = () => {
    setUploaded(true);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto mb-8">
      <h2 className="text-xl font-bold text-gray-700 mb-2">Upload Payroll Data</h2>
      <input type="file" onChange={handleUpload} className="mb-2" />
      {uploaded && <p className="text-green-600">✅ File uploaded successfully!</p>}
    </div>
  );
};

export default FileUploader;
