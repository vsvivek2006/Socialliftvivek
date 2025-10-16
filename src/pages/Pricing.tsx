import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Clock, Users, TrendingUp, ShoppingCart, Video, Mail, MessageCircle, CreditCard, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Pricing = () => {
  const [selectedService, setSelectedService] = useState("");

  // Monthly Services - Minimum 3 Months
  const monthlyServices = [
    { 
      name: 'Social Media Management', 
      price: '₹8,000/month', 
      originalPrice: '₹15,000',
      currentPrice: 8000,
      duration: 'Minimum 3 months commitment',
      description: 'Complete social media management across all platforms',
      popular: true,
      features: [
        '15 Creative Design Posts Monthly',
        '2 Professional Videos/Reels',
        'Platform Management: Instagram, Meta, Twitter(X), WhatsApp',
        'Trending Hashtags & Keyword Research',
        'Content Calendar & Strategy',
        'Audience Engagement Management',
        'Performance Analytics Report',
        'Monthly Growth Strategy'
      ],
      badge: 'MOST POPULAR',
      color: 'pink'
    },
    { 
      name: 'SEO Service', 
      price: '₹10,000/month', 
      originalPrice: '₹18,000',
      currentPrice: 10000,
      duration: 'Minimum 3 months commitment',
      description: 'Complete SEO optimization for better Google rankings',
      popular: false,
      features: [
        'Comprehensive Keyword Research (50+ keywords)',
        'On-Page SEO Optimization',
        'Technical SEO Audit & Fixes',
        'Content Optimization & Strategy',
        'Quality Backlink Building',
        'Monthly Ranking Reports',
        'Google Analytics & Search Console Setup',
        'Local SEO Optimization',
        'Website Speed Optimization',
        'Monthly Strategy Calls'
      ],
      badge: 'BEST FOR GROWTH',
      color: 'blue'
    },
    { 
      name: 'Meta Ads Management', 
      price: '₹10,000/month', 
      originalPrice: '₹18,000',
      currentPrice: 10000,
      duration: 'Minimum 3 months commitment',
      description: 'Professional Meta Ads campaign management',
      popular: false,
      features: [
        'Campaign Strategy & Setup',
        'Audience Research & Targeting',
        'Ad Creative Creation & Optimization',
        'Daily Budget & Bid Management',
        'A/B Testing of Ads & Landing Pages',
        'Conversion Tracking Setup',
        'Monthly Performance Reports',
        'ROI Optimization',
        '24/7 Campaign Monitoring'
      ],
      badge: 'HIGH ROI',
      color: 'purple'
    }
  ];

  // One-time Digital Marketing Services
  const digitalMarketingServices = [
    { 
      name: 'Social Media Account Creation', 
      price: '₹2,499', 
      originalPrice: '₹4,999',
      currentPrice: 2499,
      description: 'Professional social media account setup',
      features: [
        'META Business Account Setup',
        'Instagram Professional Account',
        'Twitter (X) Business Profile',
        'Profile Optimization',
        'Cover & Profile Picture Design',
        'Bio & Description Writing'
      ],
      color: 'pink'
    },
    { 
      name: 'Google Business Profile', 
      price: '₹6,000', 
      originalPrice: '₹12,000',
      currentPrice: 6000,
      description: 'Google My Business listing setup & optimization',
      features: [
        'Google Business Profile Creation',
        'Category & Description Optimization',
        'Photos & Logo Upload',
        'Service/Product Listings',
        'Review Management Setup',
        'Google Map Integration'
      ],
      color: 'blue'
    },
    { 
      name: 'Business WhatsApp Setup', 
      price: '₹1,499', 
      originalPrice: '₹2,999',
      currentPrice: 1499,
      description: 'Business WhatsApp API setup with catalog',
      features: [
        'Business WhatsApp API Setup',
        'Business Profile Creation',
        '10 Product Catalog Listings',
        'Quick Reply Setup',
        'Away Message Configuration',
        'Business Hours Setup'
      ],
      color: 'green'
    }
  ];

  // IT & Website Services
  const itServices = [
    { 
      name: 'Website Development (5 Pages)', 
      price: '₹15,000', 
      originalPrice: '₹30,000',
      currentPrice: 15000,
      description: 'Professional 5-page responsive website',
      popular: true,
      features: [
        '5 Page Fully Responsive Website',
        'Mobile-Friendly Design',
        'Contact Form Integration',
        'Basic SEO Setup',
        '1 Year Hosting Included',
        'SSL Certificate Security',
        'Social Media Integration',
        '6 Months Technical Support'
      ],
      color: 'blue'
    },
    { 
      name: 'Dynamic Website & App', 
      price: '₹25,000', 
      originalPrice: '₹50,000',
      currentPrice: 25000,
      description: 'Custom dynamic web applications',
      popular: false,
      features: [
        'Custom Web Application Development',
        'Admin Dashboard & Control Panel',
        'User Management System',
        'Database Integration & Management',
        'API Development & Integration',
        'Advanced Security Features',
        'Performance Optimization',
        '1 Year Support & Maintenance'
      ],
      color: 'purple'
    }
  ];

  // Marketing Services
  const marketingServices = [
    { 
      name: 'Logo Design Service', 
      price: '₹1,299', 
      originalPrice: '₹2,599',
      currentPrice: 1299,
      description: 'Professional logo design with multiple concepts',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'pink'
    },
    { 
      name: 'Email Marketing', 
      price: '₹3,999/month', 
      originalPrice: '₹7,999',
      currentPrice: 3999,
      description: 'Email campaign setup & management',
      icon: <Mail className="h-6 w-6" />,
      color: 'blue'
    },
    { 
      name: 'Video Creation & Editing', 
      price: '₹1,999', 
      originalPrice: '₹3,999',
      currentPrice: 1999,
      description: 'Professional video editing service',
      icon: <Video className="h-6 w-6" />,
      color: 'purple'
    }
  ];

  // Combo Packages - High Value Bundles
  const comboPackages = [
    {
      name: 'Website + Social Media Combo',
      price: '₹44,999',
      originalPrice: '₹90,000',
      currentPrice: 44999,
      popular: true,
      type: 'one-time + 3 months',
      description: 'Complete website with 3 months social media management',
      features: [
        'Professional Website (5 pages)',
        '3 Months Social Media Management',
        'Google Business Profile Setup',
        'Social Media Account Creation',
        'Mobile Responsive Design',
        '45 Creative Posts Included',
        '6 Professional Videos/Reels',
        '12 Months Technical Support',
        'Website Hosting & SSL',
        'Performance Analytics'
      ],
      savings: '₹45,001',
      whatsappText: 'Hello Social Lift, I want the Website + Social Media Combo Package for my business',
      color: 'pink'
    },
    {
      name: 'Complete Digital Marketing Package',
      price: '₹64,999',
      originalPrice: '₹1,20,000',
      currentPrice: 64999,
      popular: false,
      type: '3 months service',
      description: 'Complete digital marketing solution for 3 months',
      features: [
        '3 Months Social Media Management',
        '3 Months SEO Service',
        '3 Months Meta Ads Management',
        'Google Business Profile Setup',
        'Website Development (5 pages)',
        'Lead Generation Setup',
        'Performance Analytics Dashboard',
        'Monthly Strategy Reports',
        '24/7 Support',
        'Dedicated Account Manager'
      ],
      savings: '₹55,001',
      whatsappText: 'Hello Social Lift, I want the Complete Digital Marketing Package for my business',
      color: 'blue'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      pink: {
        gradient: 'from-pink-500 to-rose-500',
        light: 'bg-pink-50 border-pink-200',
        medium: 'bg-pink-500',
        dark: 'bg-pink-600',
        text: 'text-pink-600',
        border: 'border-pink-300'
      },
      blue: {
        gradient: 'from-blue-500 to-cyan-500',
        light: 'bg-blue-50 border-blue-200',
        medium: 'bg-blue-500',
        dark: 'bg-blue-600',
        text: 'text-blue-600',
        border: 'border-blue-300'
      },
      purple: {
        gradient: 'from-purple-500 to-indigo-500',
        light: 'bg-purple-50 border-purple-200',
        medium: 'bg-purple-500',
        dark: 'bg-purple-600',
        text: 'text-purple-600',
        border: 'border-purple-300'
      },
      green: {
        gradient: 'from-green-500 to-emerald-500',
        light: 'bg-green-50 border-green-200',
        medium: 'bg-green-500',
        dark: 'bg-green-600',
        text: 'text-green-600',
        border: 'border-green-300'
      }
    };
    return colors[color] || colors.pink;
  };

  const calculateDiscount = (currentPrice, originalPrice) => {
    return Math.round((1 - currentPrice / originalPrice) * 100);
  };

  const handleWhatsAppClick = (serviceName, serviceType = 'service') => {
    const message = `Hello Social Lift! 💫\n\nI'm interested in your "${serviceName}" ${serviceType}.\nPlease share more details and next steps.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917428606849?text=${encodedMessage}`, '_blank');
  };

  const scheduleConsultation = () => {
    const consultationMessage = `🎯 I want to schedule a Free Digital Marketing Consultation!\n\nPlease share available time slots for a 30-minute video call.`;
    const encodedMessage = encodeURIComponent(consultationMessage);
    window.open(`https://wa.me/917428606849?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <Helmet>
        <title>Digital Marketing Pricing | Social Media ₹8,000, SEO ₹10,000, Website ₹15,000 - Social Lift</title>
        <meta
          name="description"
          content="Affordable digital marketing packages: Social Media Management ₹8,000/month, SEO ₹10,000/month, Website Development ₹15,000. 40-50% OFF + Special Discounts."
        />
        <meta 
          name="keywords" 
          content="digital marketing pricing, social media management cost, SEO services price, website development cost, affordable digital marketing India"
        />
        <link rel="canonical" href="https://sociallift.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Heart className="h-12 w-12 text-pink-200 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing <span className="text-pink-200">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Professional Digital Marketing Services at 40-50% OFF + Special Discounts
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-300" />
                <span>40-50% Discount on All Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-300" />
                <span>Special Payment Plans Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-300" />
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Monthly Marketing Services
            </h2>
            <p className="text-xl text-gray-600">
              Minimum 3 Months Commitment Required for Optimal Results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monthlyServices.map((service, index) => {
              const color = getColorClasses(service.color);
              return (
                <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                  service.popular ? `${color.border} transform hover:scale-105` : 'border-gray-200'
                } transition-all duration-300 hover:shadow-2xl`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className={`bg-gradient-to-r ${color.gradient} text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1`}>
                        <Star className="h-4 w-4 fill-current" />
                        <span>{service.badge}</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-6 text-center">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                        <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{service.duration}</p>
                      <div className="mt-2">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          SAVE {calculateDiscount(service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}%
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleWhatsAppClick(service.name, 'monthly service')}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                        service.popular
                          ? `bg-gradient-to-r ${color.gradient} hover:scale-105 text-white`
                          : 'bg-gray-900 hover:bg-gray-800 text-white'
                      }`}
                    >
                      💬 Get This Package
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Marketing Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600">
              One-time Setup Services for Immediate Digital Presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalMarketingServices.map((service, index) => {
              const color = getColorClasses(service.color);
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow hover:border-pink-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                    {service.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      SAVE {calculateDiscount(service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}%
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleWhatsAppClick(service.name)}
                    className={`w-full bg-gradient-to-r ${color.gradient} hover:scale-105 text-white py-3 px-4 rounded-lg font-medium transition-all`}
                  >
                    💬 Get This Service
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Website & IT Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional Website Development & IT Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => {
              const color = getColorClasses(service.color);
              return (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
                  service.popular ? color.border : 'border-gray-200'
                } hover:shadow-xl transition-shadow`}>
                  {service.popular && (
                    <div className={`inline-block ${color.medium} text-white px-4 py-1 rounded-full text-sm font-bold mb-4`}>
                      RECOMMENDED
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    <div className="ml-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      SAVE {calculateDiscount(service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}%
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleWhatsAppClick(service.name)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all bg-gradient-to-r ${color.gradient} hover:scale-105 text-white`}
                  >
                    💬 Start My Project
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marketing Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Marketing Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive Digital Marketing Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingServices.map((service, index) => {
              const color = getColorClasses(service.color);
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`${color.light} p-3 rounded-lg`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                        <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold inline-block mb-4">
                    SAVE {calculateDiscount(service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}%
                  </div>
                  <button
                    onClick={() => handleWhatsAppClick(service.name)}
                    className={`w-full bg-gradient-to-r ${color.gradient} hover:scale-105 text-white py-3 px-4 rounded-lg font-medium transition-all`}
                  >
                    💬 Get This Service
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Combo Packages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Value Combo Packages
            </h2>
            <p className="text-xl text-gray-600">
              Save Big with Our Carefully Curated Service Bundles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comboPackages.map((pkg, index) => {
              const color = getColorClasses(pkg.color);
              return (
                <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                  pkg.popular ? `${color.border} transform hover:scale-105` : 'border-gray-200'
                } transition-all duration-300`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className={`bg-gradient-to-r ${color.gradient} text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1`}>
                        <Star className="h-4 w-4 fill-current" />
                        <span>MOST POPULAR</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                        Save {pkg.savings}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                        <span className="text-lg text-gray-400 line-through ml-2">{pkg.originalPrice}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{pkg.type}</p>
                      <div className="mt-2">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          SAVE {calculateDiscount(pkg.currentPrice, parseInt(pkg.originalPrice.replace(/[^0-9]/g, '')))}%
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleWhatsAppClick(pkg.name, 'combo package')}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all bg-gradient-to-r ${color.gradient} hover:scale-105 text-white`}
                    >
                      💬 Get This Combo Package
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl p-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎯 Free Consultation
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              Get a FREE 30-minute digital marketing consultation with our experts
            </p>
            <button
              onClick={scheduleConsultation}
              className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              📅 Schedule Free Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Get Professional Digital Marketing Services at 40-50% OFF + Special Discounts!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsAppClick('Digital Marketing Services')}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💬 WhatsApp for 50% OFF</span>
            </button>
            <a
              href="tel:+917428606849"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>📞 Call: +91 7428606849</span>
            </a>
          </div>
          <p className="text-pink-200 mt-4">
            Limited Time Offer - Prices increasing soon!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;