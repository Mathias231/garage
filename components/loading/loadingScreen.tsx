import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Loading...</h1>
        <div className="mt-4">
          <div className="animate-pulse h-4 bg-gray-300 rounded"></div>
          <div className="animate-pulse mt-2 h-4 bg-gray-300 rounded"></div>
          <div className="animate-pulse mt-2 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
