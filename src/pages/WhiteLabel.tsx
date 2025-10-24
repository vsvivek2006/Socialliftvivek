import React from 'react';
import { Helmet } from 'react-helmet';

const WhiteLabel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12">
      <Helmet>
        <title>White Label Services - Social Lift</title>
        <meta name="description" content="White label digital marketing services for agencies." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">White Label Services</h1>
          <p className="text-xl text-gray-600 mb-8">Partner with us for white label solutions</p>
          <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-700 font-semibold">🤝 Coming Soon - Partnership opportunities loading!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteLabel;