import React from 'react';
import { Helmet } from 'react-helmet';

const DesignDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <Helmet>
        <title>Design & Development - Social Lift</title>
        <meta name="description" content="Professional website design and development services." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Design & Development</h1>
          <p className="text-xl text-gray-600 mb-8">Creative design and robust development solutions</p>
          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-700 font-semibold">🎨 Coming Soon - Amazing designs in progress!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignDevelopment;