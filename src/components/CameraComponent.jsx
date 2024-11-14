import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

const CameraComponent = () => {
  const [result, setResult] = useState('No result');
  const [delay] = useState(100); // Set delay to 100ms

  const handleScan = (data) => {
    if (data) {
      setResult(data.text); // Update the result with the scanned QR code data
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">QR Code Scanner</h1>
        
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />

        <div className="mt-4 text-center">
          <p className="text-lg">{result}</p>
        </div>

        <div className="mt-4 text-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition"
            onClick={() => alert('QR Code Captured')}
          >
            Capture QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraComponent;
