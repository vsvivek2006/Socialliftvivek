import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // High Quality Hero Slides without images - using pure gradients
  const heroSlides = [
    {
      title: "Social Media Marketing",
      subtitle: "Complete Management ₹8,000/month",
      originalPrice: "₹15,000",
      description: "Professional Social Media Management - Creative Posts + Viral Videos. Boost Engagement, Increase Followers & Drive Sales on Instagram, Facebook & WhatsApp.",
      badge: "🔥 47% OFF Social Media Marketing",
      bgGradient: "from-blue-900 via-blue-800 to-purple-700",
      cta: "Start Social Media Marketing"
    },
    {
      title: "Meta Ads Agency",
      subtitle: "₹10,000/month - Maximum ROI",
      originalPrice: "₹18,000",
      description: "Professional Facebook & Instagram Ads Management. Targeted Advertising, Lead Generation & Sales Conversion for Your Business Growth.",
      badge: "📈 44% OFF Meta Ads",
      bgGradient: "from-green-900 via-green-800 to-blue-700",
      cta: "Get Ads Quote"
    },
    {
      title: "Google Business Profile",
      subtitle: "Complete Setup ₹6,000",
      originalPrice: "₹12,000",
      description: "Professional Google Business Profile Optimization for Local SEO. Get More Customers, Increase Visibility & Dominate Local Search Results.",
      badge: "💫 50% OFF Google Business",
      bgGradient: "from-orange-900 via-orange-800 to-red-700",
      cta: "Get Google Business Setup"
    },
    {
      title: "Lead Generation Service",
      subtitle: "Professional Leads ₹6,000/month",
      originalPrice: "₹12,000",
      description: "Targeted Lead Generation Campaigns - Get Quality Leads for Your Business through Digital Marketing & Advertising Strategies.",
      badge: "🚀 50% OFF Lead Generation",
      bgGradient: "from-purple-900 via-purple-800 to-purple-600",
      cta: "Generate More Leads"
    }
  ];

  // Digital Marketing Services with Updated Pricing
  const services = [
    {
      icon: "📱",
      title: "Social Media Management",
      description: "Complete Social Media Management - Creative Posts + Viral Videos/Reels with trending hashtags & content strategy",
      price: "₹8,000/month",
      originalPrice: "₹15,000",
      platforms: ["Instagram Marketing", "Facebook Management", "Content Creation", "Engagement Growth"],
      link: "/services",
      popular: true,
      badge: "47% OFF",
      keywords: ["social media marketing", "instagram management", "facebook management"]
    },
    {
      icon: "🎯", 
      title: "Meta Ads Management",
      description: "Professional Facebook & Instagram Ads - Targeted Advertising, Lead Generation & Sales Conversion Campaigns",
      price: "₹10,000/month",
      originalPrice: "₹18,000",
      platforms: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Ad Optimization"],
      link: "/services",
      popular: true,
      badge: "44% OFF",
      keywords: ["meta ads", "facebook ads", "instagram ads"]
    },
    {
      icon: "🔍",
      title: "Google Business Profile",
      description: "Complete Google Business Profile Setup & Optimization - Get More Local Customers & Increase Visibility",
      price: "₹6,000",
      originalPrice: "₹12,000",
      platforms: ["Profile Setup", "Local SEO", "Review Management", "Google Maps Ranking"],
      link: "/services",
      popular: false,
      badge: "50% OFF",
      keywords: ["google business", "local seo", "google maps"]
    },
    {
      icon: "📞",
      title: "Lead Generation Service",
      description: "Professional Lead Generation Campaigns - Get Quality Leads for Your Business through Digital Marketing",
      price: "₹6,000/month",
      originalPrice: "₹12,000",
      platforms: ["Targeted Leads", "Quality Prospects", "Conversion Optimization", "Lead Nurturing"],
      link: "/services",
      popular: false,
      badge: "50% OFF",
      keywords: ["lead generation", "business leads", "customer acquisition"]
    },
    {
      icon: "🎥",
      title: "Video Shoot Service",
      description: "Professional Video Production - High Quality Product Videos, Promotional Content & Social Media Videos",
      price: "₹8,000",
      originalPrice: "₹15,000",
      platforms: ["Product Videos", "Promotional Content", "Social Media Videos", "Editing"],
      link: "/services",
      popular: false,
      badge: "47% OFF",
      keywords: ["video shoot", "video production", "promotional videos"]
    },
    {
      icon: "🛒",
      title: "E-commerce Marketing",
      description: "Complete E-commerce Solutions - Amazon, Flipkart, Meesho marketing with product listing optimization",
      price: "₹8,000/month",
      originalPrice: "₹15,000",
      platforms: ["Amazon Marketing", "Flipkart SEO", "Meesho Store", "Product Listing"],
      link: "/services",
      popular: false,
      badge: "47% OFF",
      keywords: ["e-commerce marketing", "amazon seller", "flipkart seo"]
    },
    {
      icon: "⚡",
      title: "SEO Services",
      description: "Professional Search Engine Optimization - Rank Higher on Google with comprehensive SEO strategy",
      price: "₹10,000/month",
      originalPrice: "₹18,000",
      platforms: ["Google Ranking", "Keyword Research", "On-Page SEO", "Local SEO"],
      link: "/services",
      popular: true,
      badge: "44% OFF",
      keywords: ["seo services", "google ranking", "search engine optimization"]
    }
  ];

  // Digital Marketing Quick Services
  const quickServices = [
    {
      icon: "📝",
      title: "Social Media Setup",
      price: "₹2,499",
      originalPrice: "₹4,999",
      description: "Professional Social Media Account Creation",
      keywords: ["social media setup", "profile creation"]
    },
    {
      icon: "🗺️",
      title: "Google Business Profile",
      price: "₹1,999", 
      originalPrice: "₹3,999",
      description: "Google My Business Optimization",
      keywords: ["google business", "local seo"]
    },
    {
      icon: "💬",
      title: "WhatsApp Business API",
      price: "₹1,499",
      originalPrice: "₹2,999",
      description: "Business WhatsApp Marketing Setup",
      keywords: ["whatsapp business", "chat marketing"]
    },
    {
      icon: "🎥",
      title: "YouTube Channel SEO",
      price: "₹4,999",
      originalPrice: "₹9,999",
      description: "YouTube SEO & Channel Optimization",
      keywords: ["youtube seo", "video marketing"]
    },
    {
      icon: "🎨",
      title: "Logo Design Service",
      price: "₹1,299",
      originalPrice: "₹2,599",
      description: "Professional Logo & Brand Identity",
      keywords: ["logo design", "brand identity"]
    },
    {
      icon: "📧",
      title: "Email Marketing",
      price: "₹3,999", 
      originalPrice: "₹7,999",
      description: "Email Campaign Setup & Management",
      keywords: ["email marketing", "campaign management"]
    }
  ];

  // Why Choose Our Digital Marketing Agency
  const features = [
    {
      icon: "💰",
      title: "Affordable Digital Marketing",
      description: "Competitive prices with 40-50% discounts on all digital marketing services",
      keywords: ["affordable digital marketing", "best price"]
    },
    {
      icon: "⚡", 
      title: "Fast Results Delivery",
      description: "Quick campaign setup & fast results without compromising quality",
      keywords: ["fast results", "quick delivery"]
    },
    {
      icon: "🔄",
      title: "Unlimited Revisions", 
      description: "We work until you're 100% satisfied with your marketing results",
      keywords: ["unlimited revisions", "satisfaction guarantee"]
    },
    {
      icon: "📞",
      title: "24/7 Marketing Support",
      description: "Always available for your digital marketing queries & strategy discussions",
      keywords: ["24/7 support", "marketing support"]
    },
    {
      icon: "🎯",
      title: "Expert Marketing Team", 
      description: "Certified digital marketing professionals with proven track record",
      keywords: ["expert team", "certified professionals"]
    },
    {
      icon: "📈",
      title: "Data-Driven Results",
      description: "Focus on delivering measurable ROI & business growth through analytics",
      keywords: ["data driven", "measurable results"]
    }
  ];

  // Digital Marketing Portfolio
  const portfolioProjects = [
    {
      title: "Restaurant Digital Marketing",
      category: "Social Media + Google Business",
      result: "40% More Online Orders",
      keywords: ["restaurant marketing", "local business marketing"]
    },
    {
      title: "Fashion Brand Social Media", 
      category: "Social Media Marketing Campaign",
      result: "300% Engagement Growth",
      keywords: ["fashion marketing", "social media campaign"]
    },
    {
      title: "Service Business Lead Gen",
      category: "Meta Ads + Lead Generation",
      result: "50+ Quality Leads/Month", 
      keywords: ["lead generation", "service business marketing"]
    },
    {
      title: "E-commerce Store Marketing", 
      category: "Meta Ads + Social Media",
      result: "200% Sales Increase",
      keywords: ["e-commerce marketing", "online sales"]
    }
  ];

  // Digital Marketing Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Fashion Store Owner", 
      text: "Social Lift's social media management increased my sales by 300% in just 3 months! Their content strategy is amazing.",
      rating: 5,
      service: "Social Media Management",
      keywords: ["social media success", "sales growth"]
    },
    {
      name: "Priya Sharma",
      company: "Restaurant Business",
      text: "Google Business Profile optimization brought us more local customers. Our online orders increased significantly. Great service!",
      rating: 5,
      service: "Google Business Profile",
      keywords: ["google business success", "local customers"]
    },
    {
      name: "Amit Patel", 
      company: "Service Business Owner",
      text: "Meta Ads campaigns done perfectly. Got 50+ quality leads every month. Best digital marketing agency!",
      rating: 5,
      service: "Meta Ads Management",
      keywords: ["meta ads success", "lead generation"]
    }
  ];

  // Digital Marketing Pricing Plans
  const pricingPlans = [
    {
      name: "Starter Marketing Package",
      price: "₹24,999",
      originalPrice: "₹45,000",
      description: "Perfect for small businesses beginning their digital marketing journey",
      features: ["Basic Social Media", "Google Business Setup", "Monthly Reporting", "3 Months Support"],
      popular: false,
      badge: "Save ₹20,001",
      keywords: ["starter marketing", "basic package"]
    },
    {
      name: "Growth Marketing Package",
      price: "₹44,999",
      originalPrice: "₹85,000",
      description: "Ideal for growing businesses ready to scale with digital marketing",
      features: ["Complete Digital Marketing", "Meta Ads Management", "Lead Generation", "6 Months Support"],
      popular: true,
      badge: "Save ₹40,001",
      keywords: ["growth marketing", "complete package"]
    },
    {
      name: "Pro Marketing Package",
      price: "₹64,999",
      originalPrice: "₹1,20,000",
      description: "Complete digital marketing transformation for established businesses",
      features: ["Premium Digital Marketing", "Custom Strategy", "Multi-platform Management", "12 Months Support"],
      popular: false,
      badge: "Save ₹55,001",
      keywords: ["pro marketing", "premium package"]
    }
  ];

  // Digital Marketing Stats
  const stats = [
    { number: "100+", label: "Happy Clients", icon: "😊", keywords: ["clients", "satisfied customers"] },
    { number: "200+", label: "Marketing Campaigns", icon: "🚀", keywords: ["campaigns", "projects"] }, 
    { number: "40-50%", label: "Cost Savings", icon: "💰", keywords: ["savings", "discounts"] },
    { number: "24/7", label: "Marketing Support", icon: "📞", keywords: ["support", "availability"] }
  ];

  // Digital Marketing Process
  const processSteps = [
    {
      step: "01",
      title: "Strategy Consultation",
      description: "Free digital marketing audit & strategy session",
      icon: "💬",
      keywords: ["consultation", "strategy"]
    },
    {
      step: "02",
      title: "Custom Marketing Plan",
      description: "Personalized digital marketing plan with timeline",
      icon: "📋",
      keywords: ["planning", "custom strategy"]
    },
    {
      step: "03", 
      title: "Campaign Execution",
      description: "Professional implementation of marketing campaigns",
      icon: "⚡",
      keywords: ["execution", "campaign management"]
    },
    {
      step: "04",
      title: "Results & Optimization",
      description: "Continuous monitoring & performance optimization",
      icon: "🔧",
      keywords: ["optimization", "results"]
    }
  ];

  // Digital Marketing Platforms
  const platforms = [
    { name: "Instagram", icon: "📷", color: "bg-gradient-to-r from-pink-500 to-purple-600", keywords: ["instagram marketing"] },
    { name: "Facebook", icon: "👥", color: "bg-gradient-to-r from-blue-500 to-blue-700", keywords: ["facebook ads"] },
    { name: "WhatsApp", icon: "💚", color: "bg-gradient-to-r from-green-400 to-green-600", keywords: ["whatsapp marketing"] },
    { name: "Google", icon: "🔍", color: "bg-gradient-to-r from-green-500 to-green-700", keywords: ["google ads", "seo"] },
    { name: "YouTube", icon: "🎥", color: "bg-gradient-to-r from-red-500 to-red-700", keywords: ["youtube marketing"] },
    { name: "Amazon", icon: "🛒", color: "bg-gradient-to-r from-orange-400 to-orange-600", keywords: ["amazon marketing"] }
  ];

  // Industries We Serve
  const industriesWeServe = [
    { name: "E-commerce", icon: "🛒", description: "Boost online sales with our e-commerce marketing strategies" },
    { name: "Restaurants", icon: "🍽️", description: "Increase reservations & online orders with local SEO" },
    { name: "Healthcare", icon: "🏥", description: "Medical practice marketing & patient acquisition" },
    { name: "Real Estate", icon: "🏠", description: "Property marketing & lead generation" },
    { name: "Education", icon: "🎓", description: "Student enrollment & institute branding" },
    { name: "Fashion", icon: "👗", description: "Fashion brand marketing & social media growth" }
  ];

  // Marketing Tools
  const marketingTools = [
    { name: "Meta Business Suite", icon: "📊", description: "Facebook & Instagram management tools" },
    { name: "Google Analytics", icon: "🔍", description: "Advanced analytics & performance tracking" },
    { name: "Social Media Scheduler", icon: "⏰", description: "Automated posting & content calendar" },
    { name: "Ads Manager", icon: "🎯", description: "Facebook & Instagram ads optimization" },
    { name: "Canva Pro", icon: "🎨", description: "Professional design tools for creatives" },
    { name: "Lead Management", icon: "📈", description: "Lead tracking & conversion tools" }
  ];

  // Team Members
  const teamMembers = [
    { name: "Social Media Managers", role: "Content Strategy Specialists", icon: "👩‍💻" },
    { name: "Ads Specialists", role: "Meta & Google Certified", icon: "🎯" },
    { name: "SEO Experts", role: "Google Ranking Professionals", icon: "👨‍💼" },
    { name: "Content Creators", role: "Creative Design Team", icon: "🎨" }
  ];

  // Awards & Recognition
  const awardsRecognition = [
    { title: "Best Social Media Agency 2024", icon: "🏆" },
    { title: "Top Meta Ads Partner", icon: "⭐" },
    { title: "Excellence in Lead Generation", icon: "📱" },
    { title: "Best Customer Service Award", icon: "💫" }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Social Lift - Best Digital Marketing Agency | Social Media, Meta Ads, SEO Services</title>
        <meta 
          name="description" 
          content="Social Lift Digital Marketing Agency offering Professional Social Media Management, Meta Ads, SEO Services, Lead Generation & Google Business Profile Setup. Get 40-50% OFF. WhatsApp +91 7428606849"
        />
        <meta 
          name="keywords" 
          content="digital marketing agency, social media management, meta ads, seo services, lead generation, google business profile, affordable digital marketing, social lift"
        />
        <link rel="canonical" href="https://sociallift.com" />
        <meta property="og:title" content="Social Lift - Best Digital Marketing Agency | Social Media & Meta Ads" />
        <meta property="og:description" content="Professional Digital Marketing Agency offering Social Media Management, Meta Ads, SEO, Lead Generation & Google Business Setup. 40-50% OFF." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sociallift.com" />
      </Helmet>

      {/* === HERO SECTION === */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 transform ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full'
            } bg-gradient-to-br ${slide.bgGradient}`}
          >
            <div className="relative h-full flex items-center justify-center text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className={`inline-flex items-center bg-yellow-500 text-purple-900 px-4 py-2 rounded-full text-sm md:text-lg font-bold mb-6 md:mb-8 transform transition-all duration-500 ${
                  index === currentSlide ? 'animate-bounce' : ''
                }`}>
                  {slide.badge}
                </div>

                <h1 className={`text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight transform transition-all duration-700 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  {slide.title}
                  <span className="block text-yellow-400 mt-2 md:mt-4 text-2xl md:text-4xl lg:text-5xl">
                    {slide.subtitle}
                  </span>
                  <span className="block text-white/70 text-xl md:text-2xl mt-2 line-through">
                    {slide.originalPrice}
                  </span>
                </h1>
                
                <p className={`text-base md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed transform transition-all duration-700 delay-300 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  {slide.description}
                </p>
                
                <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center transform transition-all duration-700 delay-500 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  <Link
                    to="/pricing"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-2xl shadow-yellow-500/30"
                  >
                    <span>💰 {slide.cta}</span>
                  </Link>
                  <a
                    href="https://wa.me/917428606849?text=Hello%20Social%20Lift%20Digital%20Marketing%20Agency,%20I%20want%20to%20discuss%20digital%20marketing%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-2xl shadow-green-500/30"
                  >
                    <span className="text-xl">💚</span>
                    <span>WhatsApp for 50% OFF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* === STATS SECTION === */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 md:p-6 bg-white/10 rounded-lg backdrop-blur-sm transform transition-all duration-500 hover:scale-105"
              >
                <div className="text-2xl md:text-4xl mb-2">{stat.icon}</div>
                <div className="text-xl md:text-3xl font-bold text-yellow-400 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-white/80 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === POPULAR SERVICES === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Our Digital Marketing Services</h2>
            <p className="text-base md:text-xl text-gray-600">Professional Digital Marketing Agency Services with 40-50% Discounts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-2 ${
                  service.popular ? 'border-yellow-400' : 'border-gray-100'
                } overflow-hidden group hover:transform hover:-translate-y-1 md:hover:-translate-y-2`}
              >
                {service.popular && (
                  <div className="bg-yellow-500 text-purple-900 py-2 px-3 md:px-4 text-center font-bold text-xs md:text-sm">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className="p-4 md:p-6">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-baseline justify-between mb-3 md:mb-4">
                    <div>
                      <span className="text-xl md:text-2xl font-bold text-purple-600">{service.price}</span>
                      <span className="text-xs md:text-sm text-gray-400 line-through block">{service.originalPrice}</span>
                    </div>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      {service.badge}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <Link
                      to={service.link}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 md:py-3 md:px-4 rounded-lg font-semibold transition-all duration-300 block text-center text-xs md:text-sm"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/917428606849?text=Hello%20Social%20Lift,%20I%20want%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-3 md:py-3 md:px-4 rounded-lg font-semibold transition-all duration-300 block text-center text-xs md:text-sm flex items-center justify-center space-x-2"
                    >
                      <span>💚</span>
                      <span>WhatsApp Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === QUICK SERVICES === */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Quick Digital Marketing Services</h2>
            <p className="text-base md:text-xl text-gray-600">Get these services done quickly at amazing prices</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
            {quickServices.map((service, index) => (
              <div key={index} className="bg-white p-3 md:p-4 rounded-lg shadow-md hover:shadow-lg transition-all text-center group hover:transform hover:-translate-y-1">
                <div className="text-xl md:text-2xl mb-1 md:mb-2 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">{service.title}</h3>
                <div className="text-purple-600 font-bold text-base md:text-lg mb-1">{service.price}</div>
                <div className="text-gray-400 text-xs line-through mb-1">{service.originalPrice}</div>
                <p className="text-gray-600 text-xs">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Why Choose Social Lift Digital Marketing?</h2>
            <p className="text-base md:text-xl text-gray-600">We provide the best value for your marketing investment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group p-4 md:p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center text-xl md:text-2xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === INDUSTRIES WE SERVE === */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Industries We Serve</h2>
            <p className="text-base md:text-xl text-gray-600">We provide specialized digital marketing solutions for various industries</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {industriesWeServe.map((industry, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center group hover:transform hover:-translate-y-1">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1 md:mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WORK PROCESS === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Our Digital Marketing Process</h2>
            <p className="text-base md:text-xl text-gray-600">Simple 4-step process to get your marketing campaigns running</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{step.icon}</div>
                  <div className="text-xl md:text-2xl font-bold text-purple-600 mb-2">{step.step}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === MARKETING TOOLS === */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Advanced Marketing Tools</h2>
            <p className="text-base md:text-xl text-gray-600">We use industry-leading tools to deliver exceptional results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {marketingTools.map((tool, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center group hover:transform hover:-translate-y-1">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3 group-hover:scale-110 transition-transform">{tool.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1 md:mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === EXPERT TEAM === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Our Expert Marketing Team</h2>
            <p className="text-base md:text-xl text-gray-600">Certified professionals dedicated to your success</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{member.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-1 md:mb-2">{member.name}</h3>
                  <p className="text-purple-600 text-sm md:text-base">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PLATFORMS WE COVER === */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Digital Platforms We Master</h2>
            <p className="text-base md:text-xl text-gray-600">We manage your presence across all major digital platforms</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center">
                <div className={`${platform.color} text-white p-3 md:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <div className="text-xl md:text-2xl mb-1 md:mb-2">{platform.icon}</div>
                  <div className="text-xs md:text-sm font-semibold">{platform.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === AWARDS & RECOGNITION === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Awards & Recognition</h2>
            <p className="text-base md:text-xl text-gray-600">Recognized for excellence in digital marketing services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {awardsRecognition.map((award, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 md:p-6 rounded-2xl shadow-lg border-2 border-yellow-200">
                  <div className="text-2xl md:text-3xl mb-2 md:mb-3">{award.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">{award.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PORTFOLIO === */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Our Digital Marketing Success Stories</h2>
            <p className="text-base md:text-xl text-gray-600">Real projects delivering real results for businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-purple-600 font-medium text-sm md:text-base mb-2">{project.category}</p>
                <p className="text-green-600 text-sm md:text-base font-semibold">{project.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PRICING PLANS === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Affordable Digital Marketing Packages</h2>
            <p className="text-base md:text-xl text-gray-600">Choose the perfect package for your business growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                plan.popular ? 'border-yellow-400 transform hover:-translate-y-2' : 'border-gray-200'
              } p-4 md:p-8`}>
                {plan.popular && (
                  <div className="bg-yellow-500 text-purple-900 py-2 px-3 md:px-4 rounded-full text-center font-bold text-xs md:text-sm mb-4 -mt-6">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-3 md:mb-4">
                  <span className="text-2xl md:text-4xl font-bold text-purple-600">{plan.price}</span>
                  <span className="text-lg text-gray-400 line-through ml-2">{plan.originalPrice}</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{plan.description}</p>
                <div className="space-y-2 mb-4 md:mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm md:text-base">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <Link to="/pricing" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 md:py-3 px-4 rounded-lg font-semibold transition-all duration-300 block text-center text-sm md:text-base">
                    Choose Plan
                  </Link>
                  <a href={`https://wa.me/917428606849?text=Hello%20Social%20Lift,%20I'm%20interested%20in%20${encodeURIComponent(plan.name)}`} target="_blank" rel="noopener noreferrer" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 md:py-3 px-4 rounded-lg font-semibold transition-all duration-300 block text-center text-sm md:text-base flex items-center justify-center space-x-2">
                    <span>💚</span>
                    <span>WhatsApp Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">What Our Clients Say</h2>
            <p className="text-base md:text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300">
                <div className="flex items-center mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-base md:text-lg">{testimonial.name}</p>
                  <p className="text-purple-600 text-sm md:text-base">{testimonial.company}</p>
                  <p className="text-gray-500 text-xs md:text-sm mt-1">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Ready to Grow Your Business?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-purple-100">Get professional digital marketing services at <span className="text-yellow-400 font-semibold">40-50% OFF</span>. Limited time offer!</p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://wa.me/917428606849?text=Hello%20Social%20Lift%20Digital%20Marketing%20Agency,%20I%20want%20to%20discuss%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💚 WhatsApp for 50% OFF</span>
            </a>
            <Link
              to="/pricing"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💰 View All Pricing</span>
            </Link>
          </div>
          
          <p className="text-purple-200 mt-4 md:mt-6 text-xs md:text-sm">
            ✅ Free Consultation ✅ 24/7 Support ✅ Money-Back Guarantee
          </p>
          <p className="text-purple-200 mt-2 text-xs md:text-sm">
            📞 Call Us: +91 7428606849 | 📧 Email: Sociallift91@Gmail.com
          </p>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917428606849?text=Hello%20Social%20Lift%20Digital%20Marketing%20Agency,%20I%20want%20to%20discuss%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
      >
        <span className="text-xl md:text-2xl">💚</span>
      </a>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%, 100% { 
            transform: translateY(0); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;