import React from 'react';
import { Helmet } from 'react-helmet';

const DigitalMarketing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <Helmet>
        <title>Digital Marketing Services - Social Lift</title>
        <meta name="description" content="Professional digital marketing services including SEO, social media, PPC, and content marketing." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Digital Marketing</h1>
          <p className="text-xl text-gray-600 mb-8">Comprehensive digital marketing solutions to grow your business online</p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-700 font-semibold">🚀 Coming Soon - We're building something amazing for you!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;