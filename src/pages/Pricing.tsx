import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Clock, Users, TrendingUp, ShoppingCart, Video, Mail, MessageCircle, CreditCard } from 'lucide-react';
import { Helmet } from 'react-helmet';

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Pricing = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentService, setPaymentService] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [originalAmount, setOriginalAmount] = useState(0);

  const RAZORPAY_KEY_ID = 'rzp_live_ROjWHHKbSiP7Al';
  
  // Payment Handler
  const handlePayment = async (amount: number, serviceName: string) => {
    try {
      const amountInPaise = Math.round(amount * 100);
      
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: amountInPaise,
        currency: 'INR',
        name: 'Social Lift Digital Marketing',
        description: `${serviceName} - Advance Payment`,
        handler: function(response: any) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          window.location.href = `https://wa.me/917428606849?text=Payment Successful for ${serviceName}. Payment ID: ${response.razorpay_payment_id}`;
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '+919999999999'
        },
        notes: {
          service: serviceName
        },
        theme: {
          color: '#8B5CF6'
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Payment failed. Please try again or contact support.');
    }
  };

  const openPaymentModal = (serviceName: string, currentPrice: number, originalPrice: number) => {
    const discountedPrice = Math.floor(currentPrice * 0.95); // 5% extra discount
    setPaymentAmount(discountedPrice);
    setOriginalAmount(currentPrice);
    setPaymentService(serviceName);
    setIsPaymentOpen(true);
  };

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
      badge: 'MOST POPULAR'
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
      badge: 'BEST FOR GROWTH'
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
      badge: 'HIGH ROI'
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
      ]
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
      ]
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
      ]
    },
    { 
      name: 'YouTube Channel SEO', 
      price: '₹4,999', 
      originalPrice: '₹9,999',
      currentPrice: 4999,
      description: 'Professional YouTube Channel Optimization',
      features: [
        'Complete Channel SEO Optimization',
        'Custom Branding (Logo & Banner)',
        'Video SEO & Metadata Optimization',
        'Optimized Channel Bio & Keywords',
        'Playlist / Section Arrangement',
        'Monetization Ready Guidance'
      ]
    },
    { 
      name: 'Lead Generation Service', 
      price: '₹6,000/month', 
      originalPrice: '₹12,000',
      currentPrice: 6000,
      description: 'Professional lead generation campaigns',
      features: [
        'Targeted Lead Generation Strategy',
        'Multi-channel Campaign Setup',
        'Lead Qualification System',
        'CRM Integration',
        'Performance Tracking & Analytics',
        'Monthly Lead Reports'
      ]
    },
    { 
      name: 'Video Shoot Service', 
      price: '₹8,000', 
      originalPrice: '₹15,000',
      currentPrice: 8000,
      description: 'Professional video production service',
      features: [
        'Professional Video Shooting',
        'Creative Script Writing',
        'Video Editing & Post-production',
        'Color Correction & Grading',
        'Sound Design & Music',
        'Multiple Format Delivery'
      ]
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
      ]
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
      ]
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
      icon: <TrendingUp className="h-6 w-6" />
    },
    { 
      name: 'Email Marketing', 
      price: '₹3,999/month', 
      originalPrice: '₹7,999',
      currentPrice: 3999,
      description: 'Email campaign setup & management',
      icon: <Mail className="h-6 w-6" />
    },
    { 
      name: 'Video Creation & Editing', 
      price: '₹1,999', 
      originalPrice: '₹3,999',
      currentPrice: 1999,
      description: 'Professional video editing service',
      icon: <Video className="h-6 w-6" />
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
      whatsappText: 'Hello Social Lift, I want the Website + Social Media Combo Package for my business'
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
      whatsappText: 'Hello Social Lift, I want the Complete Digital Marketing Package for my business'
    }
  ];

  // Add-ons & Extra Services
  const addOns = [
    { 
      name: 'Extra Social Media Post', 
      price: '₹100/post', 
      currentPrice: 100,
      description: 'Additional creative posts for social media',
      category: 'social'
    },
    { 
      name: 'Extra Video/Reel Creation', 
      price: '₹200/video', 
      currentPrice: 200,
      description: 'Additional video content (Max 2 minutes)',
      category: 'content'
    },
    { 
      name: 'Product Listing', 
      price: '₹50/product', 
      currentPrice: 50,
      description: 'Additional product listings for e-commerce',
      category: 'ecommerce'
    },
    { 
      name: 'Free Consultation', 
      price: '₹999', 
      currentPrice: 10,
      description: '30-min Professional Digital Marketing Consultation',
      category: 'consultation',
    }
  ];

  const calculateDiscount = (currentPrice: number, originalPrice: number) => {
    return Math.round((1 - currentPrice / originalPrice) * 100);
  };

  // Add this function for consultation scheduling
  const scheduleConsultation = () => {
    const consultationMessage = `🎯 I want to schedule a Free Digital Marketing Consultation!\n\nPlease share available time slots for a 30-minute video call.`;
    const encodedMessage = encodeURIComponent(consultationMessage);
    window.open(`https://wa.me/917428606849?text=${encodedMessage}`, '_blank');
  };

  return (
    <div>
      <Helmet>
        <title>Digital Marketing Pricing | Social Media ₹8,000, SEO ₹10,000, Website ₹15,000 - Social Lift</title>
        <meta
          name="description"
          content="Affordable digital marketing packages: Social Media Management ₹8,000/month, SEO ₹10,000/month, Website Development ₹15,000. 40-50% OFF + 5% Extra on Advance Payment."
        />
        <meta 
          name="keywords" 
          content="digital marketing pricing, social media management cost, SEO services price, website development cost, e-commerce setup, Meta Ads management, affordable digital marketing India"
        />
        <link rel="canonical" href="https://sociallift.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing <span className="text-yellow-400">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              Professional Digital Marketing Services at 40-50% OFF + 5% Extra on Advance Payment
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-purple-100">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>40-50% Discount on All Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>5% Extra OFF on Advance Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-400" />
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Services Section */}
      <section className="py-16 bg-gray-50">
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
            {monthlyServices.map((service, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                service.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-gray-200'
              } transition-all duration-300`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
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
                      <span className="text-4xl font-bold text-purple-600">{service.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{service.duration}</p>
                    <div className="mt-2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SAVE {calculateDiscount(service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}%
                      </span>
                    </div>
                    <div className="mt-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Advance: ₹{Math.floor(service.currentPrice * 0.95).toLocaleString()} (5% OFF)
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

                  <div className="space-y-3">
                    <button
                      onClick={() => openPaymentModal(service.name, service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all block text-center ${
                        service.popular
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-purple-900'
                          : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}
                    >
                      💳 Pay Advance - Save 5%
                    </button>
                    <a
                      href={`https://wa.me/917428606849?text=Hello Social Lift, I want to get ${service.name} monthly service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-medium transition-colors block text-center"
                    >
                      💬 WhatsApp for Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
            {digitalMarketingServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
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
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                  <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    SAVE {calculateDiscount(service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}%
                  </div>
                </div>
                
                <div className="space-y-2">
                  <button
                    onClick={() => openPaymentModal(service.name, service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center"
                  >
                    💳 Pay Advance - Save 5%
                  </button>
                  <a
                    href={`https://wa.me/917428606849?text=Hello Social Lift, I want to get ${service.name} service`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center"
                  >
                    💬 WhatsApp Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16 bg-gray-50">
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
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
                service.popular ? 'border-yellow-400' : 'border-gray-200'
              } hover:shadow-xl transition-shadow`}>
                {service.popular && (
                  <div className="inline-block bg-yellow-500 text-purple-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    RECOMMENDED
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-purple-600">{service.price}</span>
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

                <div className="space-y-3">
                  <button
                    onClick={() => openPaymentModal(service.name, service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all block text-center ${
                      service.popular
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-purple-900'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    💳 Pay Advance - Save 5%
                  </button>
                  <a
                    href={`https://wa.me/917428606849?text=Hello Social Lift, I want to get ${service.name} service`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-medium transition-colors block text-center"
                  >
                    💬 WhatsApp for Details
                  </a>
                </div>
              </div>
            ))}
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
            {marketingServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold inline-block mb-4">
                  SAVE {calculateDiscount(service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}%
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => openPaymentModal(service.name, service.currentPrice, parseInt(service.originalPrice.replace(/[^0-9]/g, '')))}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center"
                  >
                    💳 Pay Advance
                  </button>
                  <a
                    href={`https://wa.me/917428606849?text=Hello Social Lift, I want to get ${service.name} service`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center"
                  >
                    💬 Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Packages Section */}
      <section className="py-16 bg-gray-50">
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
            {comboPackages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                pkg.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-gray-200'
              } transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
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
                      <span className="text-4xl font-bold text-purple-600">{pkg.price}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{pkg.type}</p>
                    <div className="mt-2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SAVE {calculateDiscount(pkg.currentPrice, parseInt(pkg.originalPrice.replace(/[^0-9]/g, '')))}%
                      </span>
                    </div>
                    <div className="mt-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Advance: ₹{Math.floor(pkg.currentPrice * 0.95).toLocaleString()} (5% OFF)
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

                  <div className="space-y-3">
                    <button
                      onClick={() => openPaymentModal(pkg.name, pkg.currentPrice, parseInt(pkg.originalPrice.replace(/[^0-9]/g, '')))}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all block text-center ${
                        pkg.popular
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-purple-900'
                          : 'bg-purple-600 hover:bg-purple-700 text-white'
                      }`}
                    >
                      💳 Pay Advance - Save 5%
                    </button>
                    <a
                      href={`https://wa.me/917428606849?text=${encodeURIComponent(pkg.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-medium transition-colors block text-center"
                    >
                      💬 WhatsApp for Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Add-on Services
            </h2>
            <p className="text-xl text-gray-600">
              Enhance Your Package with These Additional Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className={`bg-gray-50 p-6 rounded-xl border-2 ${
                addon.name === 'Free Consultation' ? 'border-green-300 bg-green-50' : 'border-gray-200'
              } hover:border-purple-300 transition-colors`}>
                {addon.name === 'Free Consultation' && (
                  <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                    🎯 FREE CONSULTATION
                  </div>
                )}
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                
                {addon.features && (
                  <ul className="space-y-2 mb-4">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-700">
                        <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-purple-600">{addon.price}</span>
                  {addon.name !== 'Free Consultation' && (
                    <a
                      href={`https://wa.me/917428606849?text=Hello Social Lift, I want to add ${addon.name} to my package`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded font-medium text-sm transition-colors"
                    >
                      Add Service
                    </a>
                  )}
                </div>

                <div className="space-y-2">
                  {addon.name === 'Free Consultation' ? (
                    <>
                      <button
                        onClick={() => openPaymentModal(addon.name, addon.currentPrice, 999)}
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center text-sm"
                      >
                        💳 Pay ₹10 & Schedule
                      </button>
                      <button
                        onClick={scheduleConsultation}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center text-sm"
                      >
                        📅 Schedule Free Call
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => openPaymentModal(addon.name, addon.currentPrice, addon.currentPrice * 2)}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors block text-center text-sm"
                    >
                      💳 Pay Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Get Professional Digital Marketing Services at 40-50% OFF + 5% Extra on Advance Payment!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917428606849?text=Hello Social Lift, I want to discuss digital marketing services for my business"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💬 WhatsApp for 50% OFF</span>
            </a>
            <a
              href="tel:+917428606849"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>📞 Call: +91 7428606849</span>
            </a>
          </div>
          <p className="text-purple-200 mt-4">
            Limited Time Offer - Prices increasing soon!
          </p>
        </div>
      </section>

      {/* Payment Modal */}
      {isPaymentOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border-2 border-purple-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />
                  Advance Payment - 5% OFF
                </h3>
                <p className="text-purple-600 font-semibold text-sm mt-1">{paymentService}</p>
              </div>
              <button onClick={() => setIsPaymentOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <span className="text-2xl">×</span>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl border-2 bg-green-50 border-green-200">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                    ₹{paymentAmount.toLocaleString()}
                  </div>
                  <div className="font-semibold text-green-700 text-sm md:text-base">
                    After 5% Advance Discount
                  </div>
                  <div className="text-gray-500 text-sm line-through mt-1">
                    Original: ₹{originalAmount.toLocaleString()}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => handlePayment(paymentAmount, paymentService)}
                className="w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-2 border-green-300"
              >
                <CreditCard className="h-4 w-4 md:h-5 md:w-5" />
                Pay ₹{paymentAmount.toLocaleString()} Now
              </button>

              <button 
                onClick={() => {setIsPaymentOpen(false);}}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 md:py-3 rounded-xl font-bold transition-all hover:scale-105 text-center block border-2 border-purple-300 text-sm md:text-base"
              >
                💬 Contact First Instead
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Razorpay Script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
  );
};

export default Pricing;