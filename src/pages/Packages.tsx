import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Check, Star, ArrowRight, Zap, Crown, Users, Globe, Briefcase, Target, Settings, Headphones, BarChart, Clock, Shield } from 'lucide-react';

const Packages: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [selectedPackage, setSelectedPackage] = useState<number>(2);

  const packages = [
    {
      id: 1,
      name: "Business Starter",
      description: "Perfect for startups and small businesses beginning digital transformation",
      price: {
        monthly: 25000,
        yearly: 240000
      },
      popular: false,
      icon: <Zap className="h-8 w-8" />,
      features: [
        "Digital Presence Audit",
        "Social Media Management (2 platforms)",
        "20 Creative Posts per month",
        "Basic Content Strategy",
        "Monthly Performance Analytics",
        "Email Campaign Setup",
        "Google Business Profile Setup",
        "Quarterly Strategy Review"
      ],
      recommendedFor: ["Startups", "Small Retail", "Local Services"],
      cta: "Start Business Starter",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Growth Accelerator",
      description: "Comprehensive solutions for growing businesses wanting faster results",
      price: {
        monthly: 45000,
        yearly: 432000
      },
      popular: true,
      icon: <Target className="h-8 w-8" />,
      features: [
        "Complete Digital Audit & Strategy",
        "Social Media Management (4 platforms)",
        "40 Creative Posts per month",
        "Advanced Content Marketing",
        "Weekly Performance Reports",
        "Google & Meta Ads (₹10k ad spend)",
        "Basic SEO Optimization",
        "CRM Setup & Integration",
        "Monthly Strategy Workshops",
        "Competitor Analysis",
        "Lead Generation Funnels",
        "Brand Voice Development"
      ],
      recommendedFor: ["Growing Businesses", "E-commerce", "Service Providers"],
      cta: "Start Growth Accelerator",
      color: "from-purple-600 to-indigo-600"
    },
    {
      id: 3,
      name: "Enterprise Pro",
      description: "End-to-end business transformation for established companies",
      price: {
        monthly: 75000,
        yearly: 720000
      },
      popular: false,
      icon: <Crown className="h-8 w-8" />,
      features: [
        "Digital Transformation Roadmap",
        "Omni-channel Social Management",
        "80+ Creative Posts per month",
        "Strategic Content Marketing",
        "Daily Performance Dashboard",
        "Multi-platform Ad Campaigns (₹25k ad spend)",
        "Advanced SEO & Technical Audit",
        "Custom CRM Development",
        "Weekly Executive Meetings",
        "Market Intelligence Reports",
        "Automated Workflow Systems",
        "Brand Strategy & Positioning",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Custom Analytics Dashboard",
        "Team Training & Workshops"
      ],
      recommendedFor: ["Enterprises", "Manufacturing", "Corporate Businesses"],
      cta: "Schedule Enterprise Demo",
      color: "from-orange-500 to-red-500"
    }
  ];

  const addons = [
    {
      name: "Business Process Automation",
      price: 20000,
      description: "Custom workflow automation solutions",
      icon: <Settings className="h-5 w-5" />
    },
    {
      name: "Custom Web Development",
      price: 30000,
      description: "Professional website or web application",
      icon: <Globe className="h-5 w-5" />
    },
    {
      name: "Advanced Analytics Setup",
      price: 15000,
      description: "Custom BI dashboard and reporting",
      icon: <BarChart className="h-5 w-5" />
    },
    {
      name: "Team Training Program",
      price: 25000,
      description: "Digital skills training for your team",
      icon: <Users className="h-5 w-5" />
    }
  ];

  const enterpriseSolutions = [
    {
      title: "Digital Transformation",
      description: "Complete business digitization strategy",
      startingAt: "₹1,50,000"
    },
    {
      title: "Brand Strategy & Identity",
      description: "Comprehensive brand development",
      startingAt: "₹75,000"
    },
    {
      title: "Business Intelligence",
      description: "Advanced analytics and reporting",
      startingAt: "₹50,000"
    },
    {
      title: "CRM Implementation",
      description: "Custom CRM setup and integration",
      startingAt: "₹60,000"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Guanteed Results",
      description: "Performance-based approach with measurable outcomes"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Efficiency",
      description: "Save 40+ hours monthly on marketing operations"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Dedicated Support",
      description: "Direct access to your account team"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business Focus",
      description: "Focus on core business while we handle digital"
    }
  ];

  const savings = {
    monthly: 0,
    yearly: 180000
  };

  const calculateSavings = (pkg: typeof packages[0]) => {
    return pkg.price.monthly * 12 - pkg.price.yearly;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Business Solutions Packages | Grworth Services</title>
        <meta 
          name="description" 
          content="Comprehensive business solutions packages for digital transformation, marketing automation, and growth. Starting at ₹25,000/month." 
        />
        <meta 
          name="keywords" 
          content="business solutions packages, digital transformation, marketing automation, business growth, corporate packages" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Business Solutions</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive digital solutions packages designed for growth and efficiency
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-2xl p-2 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>

          {billingCycle === 'yearly' && (
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 inline-flex items-center gap-3 shadow-lg">
              <Star className="h-6 w-6 text-yellow-300 fill-current" />
              <div>
                <p className="text-white font-bold text-lg">
                  Save up to ₹{savings.yearly.toLocaleString()} annually!
                </p>
                <p className="text-green-100 text-sm">
                  Plus get 2 months free with annual commitment
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer ${
                selectedPackage === pkg.id ? 'ring-4 ring-blue-500 ring-opacity-50 transform scale-102' : ''
              } ${pkg.popular ? 'ring-2 ring-purple-500' : ''}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                    <Star className="h-4 w-4 fill-current" />
                    MOST POPULAR CHOICE
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${pkg.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>

                {/* Recommended For */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 mb-2">RECOMMENDED FOR</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.recommendedFor.map((item, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-gray-900">
                      ₹{pkg.price[billingCycle].toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-lg">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="mt-2">
                      <p className="text-green-600 font-bold">
                        Save ₹{calculateSavings(pkg).toLocaleString()}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Equivalent to ₹{(pkg.price.yearly / 12).toLocaleString()}/month
                      </p>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${pkg.color} hover:shadow-xl text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-102 flex items-center justify-center gap-3 shadow-lg`}>
                  {pkg.cta}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Addons Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Add-ons</h2>
            <p className="text-xl text-gray-600">Enhance your package with these specialized services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addons.map((addon, index) => (
              <div key={index} className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl rounded-2xl p-6 transition-all duration-300 hover:transform hover:translate-y-[-4px]">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {addon.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-3">
                  ₹{addon.price.toLocaleString()}
                </div>
                <p className="text-gray-600 text-sm mb-6 h-12">{addon.description}</p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200">
                  Add Service
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Solutions */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-12 text-white mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Enterprise Solutions</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Need something more comprehensive? We build custom solutions for large-scale business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-blue-100 text-sm mb-4">{solution.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">Starting at</span>
                  <span className="text-3xl font-bold">{solution.startingAt}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/enterprise-contact"
              className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Briefcase className="h-5 w-5" />
              Request Enterprise Proposal
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Package Comparison</h2>
          
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <th className="text-left p-6 font-bold text-gray-900 text-lg">Features & Services</th>
                  {packages.map((pkg) => (
                    <th key={pkg.id} className="text-center p-6 font-bold text-gray-900 text-lg">
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold text-gray-700">Strategy & Planning</td>
                  <td className="text-center p-4">Basic</td>
                  <td className="text-center p-4">Advanced</td>
                  <td className="text-center p-4">Comprehensive</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-semibold text-gray-700">Monthly Content Output</td>
                  <td className="text-center p-4">20 Posts</td>
                  <td className="text-center p-4">40 Posts</td>
                  <td className="text-center p-4">80+ Posts</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold text-gray-700">Ad Management Budget</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">₹10,000</td>
                  <td className="text-center p-4">₹25,000</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-semibold text-gray-700">Analytics & Reporting</td>
                  <td className="text-center p-4">Monthly</td>
                  <td className="text-center p-4">Weekly</td>
                  <td className="text-center p-4">Real-time Dashboard</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold text-gray-700">Strategy Meetings</td>
                  <td className="text-center p-4">Quarterly</td>
                  <td className="text-center p-4">Monthly</td>
                  <td className="text-center p-4">Weekly</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-semibold text-gray-700">Dedicated Account Manager</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <Check className="h-5 w-5 text-green-500 inline" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold text-gray-700">CRM Integration</td>
                  <td className="text-center p-4">Basic</td>
                  <td className="text-center p-4">Standard</td>
                  <td className="text-center p-4">Custom</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold text-gray-700">Support Level</td>
                  <td className="text-center p-4">Email</td>
                  <td className="text-center p-4">Priority Email & Chat</td>
                  <td className="text-center p-4">24/7 Priority Support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business Today</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join 500+ businesses that have accelerated growth with our strategic solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="/book-strategy-call"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center gap-3 min-w-[250px]"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Book Strategy Call
                </a>
                
                <a
                  href="mailto:solutions@grworth.com"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-3 min-w-[250px]"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Our Team
                </a>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-blue-200">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-200">Businesses Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">₹25Cr+</div>
                  <div className="text-blue-200">Revenue Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
