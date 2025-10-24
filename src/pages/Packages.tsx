import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Check, Star, ArrowRight, Zap, Crown, Users, Clock, MessageCircle } from 'lucide-react';

const Packages: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const packages = [
    {
      id: 1,
      name: "Starter Pack",
      description: "Perfect for small businesses starting their digital journey",
      price: {
        monthly: 8000,
        yearly: 80000
      },
      popular: false,
      icon: <Zap className="h-8 w-8" />,
      features: [
        "Social Media Management (2 platforms)",
        "15 Creative Posts per month",
        "Basic Content Strategy",
        "Monthly Performance Report",
        "Community Management",
        "1 Platform Analytics"
      ],
      cta: "Start Starter Plan",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Growth Pack",
      description: "Ideal for growing businesses wanting faster results",
      price: {
        monthly: 15000,
        yearly: 150000
      },
      popular: true,
      icon: <Users className="h-8 w-8" />,
      features: [
        "Social Media Management (4 platforms)",
        "30 Creative Posts per month",
        "Advanced Content Strategy",
        "Weekly Performance Reports",
        "Paid Ads Management (₹5k ad spend)",
        "3 Platform Analytics",
        "Competitor Analysis",
        "Monthly Strategy Call"
      ],
      cta: "Start Growth Plan",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Pro Pack",
      description: "Complete digital marketing solution for established businesses",
      price: {
        monthly: 25000,
        yearly: 250000
      },
      popular: false,
      icon: <Crown className="h-8 w-8" />,
      features: [
        "Social Media Management (6 platforms)",
        "60 Creative Posts per month",
        "Comprehensive Content Strategy",
        "Daily Performance Monitoring",
        "Paid Ads Management (₹15k ad spend)",
        "6 Platform Analytics",
        "Advanced Competitor Analysis",
        "Weekly Strategy Calls",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Custom Reporting Dashboard"
      ],
      cta: "Start Pro Plan",
      color: "from-orange-500 to-red-500"
    }
  ];

  const addons = [
    {
      name: "Meta Ads Management",
      price: 5000,
      description: "Professional Facebook & Instagram ads management"
    },
    {
      name: "Google Business Profile",
      price: 6000,
      description: "Complete setup and optimization"
    },
    {
      name: "Website SEO Audit",
      price: 4000,
      description: "Comprehensive technical SEO analysis"
    },
    {
      name: "Content Writing",
      price: 2000,
      description: "Professional content creation per piece"
    }
  ];

  const savings = {
    monthly: 0,
    yearly: 16000
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Helmet>
        <title>Digital Marketing Packages - Affordable Plans | Social Lift</title>
        <meta 
          name="description" 
          content="Choose from our affordable digital marketing packages. Social media management, Meta ads, SEO services starting at ₹8,000/month." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Marketing Packages</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Affordable, results-driven marketing packages designed to grow your business
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-2xl p-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'text-purple-100 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'text-purple-100 hover:text-white'
              }`}
            >
              Yearly (Save 16%)
            </button>
          </div>

          {billingCycle === 'yearly' && (
            <div className="mt-4 bg-green-500/20 backdrop-blur-sm rounded-lg p-3 inline-flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-300" />
              <span className="text-green-100 font-semibold">
                Save ₹{savings.yearly.toLocaleString()} with yearly billing!
              </span>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      ₹{pkg.price[billingCycle].toLocaleString()}
                    </span>
                    <span className="text-gray-500">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-green-600 font-semibold text-sm mt-1">
                      Save ₹{(pkg.price.monthly * 12 - pkg.price.yearly).toLocaleString()}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${pkg.color} hover:shadow-lg text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2`}>
                  {pkg.cta}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Addons Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-on Services</h2>
            <p className="text-xl text-gray-600">Enhance your package with these additional services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <div key={index} className="border-2 border-gray-200 hover:border-purple-300 rounded-2xl p-6 text-center transition-all duration-200 hover:shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-purple-600 mb-3">
                  ₹{addon.price.toLocaleString()}
                </div>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <button className="w-full bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-700 py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                  Add to Package
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Package Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 font-semibold text-gray-900">Features</th>
                  {packages.map((pkg) => (
                    <th key={pkg.id} className="text-center py-4 font-semibold text-gray-900">
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 font-medium text-gray-700">Social Media Platforms</td>
                  <td className="text-center py-4">2</td>
                  <td className="text-center py-4">4</td>
                  <td className="text-center py-4">6</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 font-medium text-gray-700">Monthly Posts</td>
                  <td className="text-center py-4">15</td>
                  <td className="text-center py-4">30</td>
                  <td className="text-center py-4">60</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 font-medium text-gray-700">Performance Reports</td>
                  <td className="text-center py-4">Monthly</td>
                  <td className="text-center py-4">Weekly</td>
                  <td className="text-center py-4">Daily</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 font-medium text-gray-700">Strategy Calls</td>
                  <td className="text-center py-4">-</td>
                  <td className="text-center py-4">Monthly</td>
                  <td className="text-center py-4">Weekly</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-gray-700">Dedicated Manager</td>
                  <td className="text-center py-4">-</td>
                  <td className="text-center py-4">-</td>
                  <td className="text-center py-4">
                    <Check className="h-5 w-5 text-green-500 inline" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and recommend the perfect package for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-call"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Book Free Consultation
              </a>
              <a
                href="https://wa.me/9779707382481"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>💬</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;