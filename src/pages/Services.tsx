import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  TrendingUp, 
  Code, 
  Settings,
  Brush,
  CreditCard,
  FileText,
  Search,
  Facebook,
  MousePointer,
  Monitor,
  ShoppingCart,
  Smartphone,
  Video,
  HeadphonesIcon,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  MessageCircle,
  Mail,
  Users,
  Zap,
  ArrowRight,
  Star
} from 'lucide-react';

const Services = () => {
  // ✅ SERVICES ARRAY WITH DETAILED DESCRIPTIONS (WITH PRICING)
  const serviceCategories = [
    {
      title: 'Digital Marketing Services',
      icon: <TrendingUp className="h-12 w-12" />,
      description: 'Complete digital marketing solutions to grow your business online with guaranteed results',
      services: [
        {
          icon: <Facebook className="h-8 w-8" />,
          name: 'Social Media Management',
          description: 'Complete social media management across all platforms with creative posts and viral videos',
          price: '₹8,000/month',
          originalPrice: '₹15,000',
          features: [
            '15 Creative Design Posts Monthly',
            '2 Professional Videos/Reels',
            'Instagram, Meta, Twitter(X), WhatsApp Management',
            'Trending Hashtags & Keyword Research',
            'Content Strategy & Calendar Planning',
            'Performance Analytics & Reporting',
            'Audience Engagement Management',
            'Growth Strategy Implementation'
          ],
          benefits: [
            'Increase brand awareness',
            'Drive website traffic',
            'Generate quality leads',
            'Build community engagement'
          ]
        },
        {
          icon: <Search className="h-8 w-8" />,
          name: 'SEO Services',
          description: 'Complete SEO optimization to rank #1 on Google with comprehensive monthly strategy',
          price: '₹10,000/month',
          originalPrice: '₹18,000',
          features: [
            'Comprehensive Keyword Research (10+ keywords)',
            'On-Page SEO Optimization',
            'Technical SEO Audit & Fixes',
            'Quality Backlink Building Strategy',
            'Monthly Ranking Progress Reports',
            'Google Analytics & Search Console Setup',
            'Local SEO Optimization',
            'Website Speed Optimization'
          ],
          benefits: [
            'Higher Google rankings',
            'Increased organic traffic',
            'Better conversion rates',
            'Long-term business growth'
          ]
        },
        {
          icon: <MousePointer className="h-8 w-8" />,
          name: 'Google Ads Management',
          description: 'Professional Google Ads campaigns for maximum ROI and conversions',
          price: '₹12,000/month',
          originalPrice: '₹20,000',
          features: [
            'Campaign Strategy & Complete Setup',
            'Keyword Research & Analysis',
            'Ad Copy Creation & Optimization',
            'Conversion Tracking Setup',
            'Daily Budget Management',
            'A/B Testing of Ads & Landing Pages',
            'Monthly Performance Reports',
            'ROI Optimization & Monitoring'
          ],
          benefits: [
            'Immediate website traffic',
            'Targeted audience reach',
            'Measurable ROI',
            'Quick lead generation'
          ]
        }
      ]
    },
    {
      title: 'Social Media Account Setup',
      icon: <Users className="h-12 w-12" />,
      description: 'Professional social media account creation and optimization for maximum visibility',
      services: [
        {
          icon: <Instagram className="h-8 w-8" />,
          name: 'Social Account Creation Package',
          description: 'Complete social media profile setup across all major platforms',
          price: '₹4,999',
          originalPrice: '₹9,999',
          features: [
            'Meta Business Account Setup',
            'Instagram Professional Account',
            'Twitter (X) Business Profile',
            'Complete Profile Optimization & Branding',
            'Professional Cover & Profile Picture Design',
            'Strategic Bio & Description Writing',
            'Business Information Integration',
            'Cross-platform Consistency'
          ],
          benefits: [
            'Professional online presence',
            'Increased credibility',
            'Better audience reach',
            'Optimized for engagement'
          ]
        },
        {
          icon: <MapPin className="h-8 w-8" />,
          name: 'Google Business Profile',
          description: 'Get found on Google Maps and local searches with optimized business listing',
          price: '₹6,000',
          originalPrice: '₹12,000',
          features: [
            'Google Business Profile Creation',
            'Category & Description Optimization',
            'Professional Photos Upload & Management',
            'Service/Product Listings Setup',
            'Review Management System Setup',
            'Google Map Integration',
            'Local SEO Optimization',
            'Regular Post Updates'
          ],
          benefits: [
            'Appear in local searches',
            'Increase walk-in customers',
            'Build trust with reviews',
            'Free business listing'
          ]
        },
        {
          icon: <MessageCircle className="h-8 w-8" />,
          name: 'Business WhatsApp Setup',
          description: 'Professional Business WhatsApp with product catalog and automated responses',
          price: '₹2,999',
          originalPrice: '₹5,999',
          features: [
            'Business WhatsApp API Setup',
            'Complete Business Profile Creation',
            'Product Catalog Listings (10 products included)',
            'Quick Reply Messages Setup',
            'Away Message Configuration',
            'Business Hours Setup',
            'Greeting Message Setup',
            'Customer Support System'
          ],
          benefits: [
            'Professional customer communication',
            'Product showcase capability',
            'Automated responses',
            'Enhanced customer service'
          ]
        },
        {
          icon: <Youtube className="h-8 w-8" />,
          name: 'YouTube Channel Creation',
          description: 'Professional YouTube channel setup with branding and optimization',
          price: '₹9,999',
          originalPrice: '₹19,999',
          features: [
            'Complete Channel Branding & Artwork',
            'Strategic Channel Description & SEO',
            'Section Setup & Content Organization',
            'Professional Channel Trailer Creation',
            'Basic Monetization Setup',
            'Video Upload Strategy Planning',
            'Custom URL Setup',
            'Audience Growth Strategy'
          ],
          benefits: [
            'Video content platform',
            'Monetization opportunities',
            'Brand authority building',
            'Engaging content delivery'
          ]
        }
      ]
    },
    {
      title: 'Website & IT Services',
      icon: <Code className="h-12 w-12" />,
      description: 'Professional website development and IT solutions for your business growth',
      services: [
        {
          icon: <Monitor className="h-8 w-8" />,
          name: 'Static Website Development',
          description: 'Professional 5-page responsive website with modern design and SEO optimization',
          price: '₹15,000',
          originalPrice: '₹30,000',
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
          benefits: [
            'Professional online presence',
            'Mobile responsive design',
            'SEO ready',
            'Ongoing support'
          ]
        },
        {
          icon: <Settings className="h-8 w-8" />,
          name: 'Dynamic Website & App',
          description: 'Custom dynamic web applications with admin panel and advanced features',
          price: '₹25,000',
          originalPrice: '₹50,000',
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
          benefits: [
            'Custom functionality',
            'Admin control',
            'Scalable solution',
            'Professional management'
          ]
        },
        {
          icon: <ShoppingCart className="h-8 w-8" />,
          name: 'Shopify Store Development',
          description: 'Complete e-commerce website on Shopify with payment integration',
          price: '₹20,000',
          originalPrice: '₹40,000',
          features: [
            'Custom Shopify Theme Development',
            'Product Listing (Up to 50 products)',
            'Secure Payment Gateway Setup',
            'Inventory Management System',
            'Order Processing System',
            'Mobile App Ready Design',
            'SEO Optimized Structure',
            '1 Year Technical Support'
          ],
          benefits: [
            'Easy to manage',
            'Secure payments',
            'Mobile friendly',
            'Professional store'
          ]
        }
      ]
    },
    {
      title: 'E-Commerce Solutions',
      icon: <ShoppingCart className="h-12 w-12" />,
      description: 'Complete e-commerce store setup and management across multiple platforms',
      services: [
        {
          icon: <ShoppingCart className="h-8 w-8" />,
          name: 'E-commerce Platform Setup',
          description: 'Multi-platform e-commerce store creation with product listing',
          price: '₹8,000',
          originalPrice: '₹15,000',
          features: [
            'Amazon Seller Account Setup',
            'Flipkart Seller Account Setup',
            'Meesho Store Creation & Optimization',
            'Product Category Optimization',
            'Complete Store Branding & Design',
            'Basic Product Listing Setup',
            'Inventory Management System Setup',
            'Sales Analytics Configuration'
          ],
          benefits: [
            'Sell on multiple platforms',
            'Reach millions of customers',
            'Managed inventory',
            'Sales tracking'
          ]
        },
        {
          icon: <Zap className="h-8 w-8" />,
          name: 'Product Listing Service',
          description: 'Professional product listing and optimization for e-commerce platforms',
          price: '₹5,000',
          originalPrice: '₹10,000',
          features: [
            'Professional Product Photography Guidance',
            'Compelling Product Description Writing',
            'SEO Optimized Listings for Better Visibility',
            'Strategic Category Optimization',
            'Competitive Pricing Strategy',
            'Efficient Inventory Management Setup',
            'Sales Analytics & Performance Tracking',
            'Regular Listing Optimization'
          ],
          benefits: [
            'Higher product visibility',
            'Better conversion rates',
            'Professional product presentation',
            'Increased sales'
          ]
        }
      ]
    },
    {
      title: 'Additional Marketing Services',
      icon: <Zap className="h-12 w-12" />,
      description: 'Specialized marketing services to enhance your digital presence',
      services: [
        {
          icon: <Brush className="h-8 w-8" />,
          name: 'Logo Design & Branding',
          description: 'Professional logo design with complete brand identity kit',
          price: '₹4,999',
          originalPrice: '₹9,999',
          features: [
            '3 Initial Logo Concepts',
            'Unlimited Revisions Until Satisfaction',
            'Vector File Delivery',
            'All Source Files',
            'Brand Color Palette',
            'Typography Guide',
            'Brand Style Guide',
            '3-5 Day Delivery'
          ],
          benefits: [
            'Professional brand identity',
            'Memorable logo design',
            'Consistent branding',
            'Multiple concepts'
          ]
        },
        {
          icon: <Users className="h-8 w-8" />,
          name: 'Influencer Marketing',
          description: 'Connect with relevant influencers to boost your brand awareness',
          price: '₹15,000/month',
          originalPrice: '₹25,000',
          features: [
            'Influencer Research & Selection',
            'Campaign Strategy Development',
            'Content Coordination & Management',
            'Performance Tracking & Analytics',
            'ROI Analysis & Reporting',
            'Relationship Management',
            'Campaign Optimization',
            'Result Measurement'
          ],
          benefits: [
            'Increased brand awareness',
            'Targeted audience reach',
            'Authentic promotions',
            'Measurable results'
          ]
        },
        {
          icon: <Video className="h-8 w-8" />,
          name: 'Video Creation & Editing',
          description: 'Professional video content creation for social media and marketing',
          price: '₹8,000',
          originalPrice: '₹15,000',
          features: [
            'Creative Script Writing',
            'Professional Video Editing',
            'Motion Graphics & Animation',
            'Color Correction & Grading',
            'Professional Sound Design',
            'Multiple Format Export',
            'Social Media Optimization',
            'Quick Turnaround'
          ],
          benefits: [
            'Engaging video content',
            'Professional quality',
            'Social media ready',
            'Increased engagement'
          ]
        },
        {
          icon: <Mail className="h-8 w-8" />,
          name: 'Email Marketing',
          description: 'Professional email marketing campaigns for customer engagement',
          price: '₹6,000/month',
          originalPrice: '₹12,000',
          features: [
            'Custom Email Template Design',
            'List Segmentation & Management',
            'Automation Setup & Configuration',
            'Performance Analytics Dashboard',
            'A/B Testing Implementation',
            'Monthly Campaign Management',
            'Newsletter Design',
            'Lead Nurturing Sequences'
          ],
          benefits: [
            'Direct customer communication',
            'High ROI',
            'Automated campaigns',
            'Measurable results'
          ]
        }
      ]
    }
  ];

  const whatsappUrl = 'https://wa.me/917428606849?text=Hello%20Social%20Lift,%20I%20want%20to%20discuss';

  return (
    <div>
      {/* ✅ SEO OPTIMIZED META TAGS */}
      <Helmet>
        <title>Digital Marketing Services | Social Media, SEO, Website Development - Social Lift</title>
        <meta
          name="description"
          content="Professional digital marketing services: Social Media Management ₹8,000/mo, SEO ₹10,000/mo, Website Development ₹15,000, E-commerce Solutions. Grow your business with Social Lift's expert services."
        />
        <meta
          name="keywords"
          content="digital marketing services, social media management, SEO services, website development, e-commerce solutions, Google Ads management, branding services, Social Lift services"
        />
        <link rel="canonical" href="https://sociallift.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Digital Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              Complete digital solutions to accelerate your business growth and online presence
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Star className="h-4 w-4 mr-1" /> 50+ Services
              </span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Star className="h-4 w-4 mr-1" /> Expert Team
              </span>
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Star className="h-4 w-4 mr-1" /> Guaranteed Results
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={categoryIndex % 2 === 0 ? 'py-16 bg-white' : 'py-16 bg-gray-50'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-purple-600 mb-4 flex justify-center">
                {category.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
                  <div className="text-purple-600 mb-4">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </p>

                  {/* Pricing Section */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                    <div className="flex items-baseline justify-between mb-2">
                      <div>
                        <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                        <span className="text-lg text-gray-500 line-through ml-2">{service.originalPrice}</span>
                      </div>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        {Math.round((1 - parseInt(service.price.replace(/[^0-9]/g, '')) / parseInt(service.originalPrice.replace(/[^0-9]/g, ''))) * 100)}% OFF
                      </span>
                    </div>
                    <p className="text-green-600 text-sm font-semibold">
                      ✅ Best Price Guaranteed
                    </p>
                  </div>
                  
                  {/* Features Section */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                      <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-700 flex items-start">
                          <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits Section */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                      <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
                      Key Benefits:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`${whatsappUrl}%20${encodeURIComponent(service.name)}%20service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 text-center"
                    >
                      <span>💬 Get Quote</span>
                    </a>
                    <Link
                      to="/contact"
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 text-center"
                    >
                      <span>Free Consultation</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Choose from our wide range of professional services and start your digital journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>View All Pricing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`${whatsappUrl}%20the%20right%20service%20for%20my%20business`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💬 Get Free Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;