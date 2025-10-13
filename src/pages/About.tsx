import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Team members with images
  const teamMembers = [
    {
      name: "Saksham Malhotra",
      role: "CEO & Founder",
      description: "Digital marketing expert with 3+ years experience in SEO, social media marketing & performance marketing. Founded Social Lift to make professional digital marketing accessible for all businesses.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      color: "from-purple-600 to-purple-800"
    },
    {
      name: "Praveen Gupta",
      role: "Operations Manager",
      description: "Strategic planner ensuring smooth execution of all digital marketing campaigns and client satisfaction. Manages project timelines and team coordination.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Vikash Singh",
      role: "IT & Social Media Head",
      description: "Handles IT infrastructure & social media marketing strategies to expand digital footprints. Expert in platform management and technical implementations.",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Rahul Kumar",
      role: "Graphics Design Head",
      description: "Leads creative team delivering stunning branding & visual designs that engage audiences. Specializes in brand identity and marketing collateral.",
      image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      color: "from-red-500 to-red-600"
    }
  ];

  // Company stats
  const stats = [
    { number: "100+", label: "Happy Clients", icon: "😊", delay: "0s" },
    { number: "200+", label: "Projects Delivered", icon: "🚀", delay: "0.1s" },
    { number: "3+", label: "Years Experience", icon: "⏳", delay: "0.2s" },
    { number: "24/7", label: "Support Available", icon: "📞", delay: "0.3s" },
  ];

  // Core values
  const values = [
    {
      icon: "🚀",
      title: "Innovation Driven",
      description: "We combine cutting-edge technology with creative strategies to build winning digital campaigns that stand out in the market.",
      delay: "0s"
    },
    {
      icon: "🎯",
      title: "Result-Oriented",
      description: "Focused on delivering measurable ROI through SEO, performance marketing & data-driven strategies that actually work.",
      delay: "0.1s"
    },
    {
      icon: "🤝",
      title: "Client Partnership",
      description: "We act as your extended digital team, building long-term relationships focused on your growth and success.",
      delay: "0.2s"
    },
    {
      icon: "⭐",
      title: "Excellence First",
      description: "Committed to delivering high-quality social media management, Meta ads & marketing solutions that exceed expectations.",
      delay: "0.3s"
    },
  ];

  // Services with updated pricing for Social Lift
  const services = [
    {
      icon: "📱",
      title: "Social Media Management",
      description: "Complete social media management with creative posts and viral videos monthly",
      price: "₹8,000/month",
      originalPrice: "₹15,000",
      features: ["Content Creation", "Platform Management", "Performance Analytics", "Strategy Planning", "Hashtag Research", "Engagement Management"],
      delay: "0s"
    },
    {
      icon: "🎯",
      title: "Meta Ads Management",
      description: "Professional Facebook & Instagram ads management for maximum ROI",
      price: "₹10,000/month",
      originalPrice: "₹18,000",
      features: ["Ad Creation", "Audience Targeting", "Budget Optimization", "Performance Tracking", "A/B Testing", "ROI Analysis"],
      delay: "0.1s"
    },
    {
      icon: "🔍",
      title: "Google Business Profile",
      description: "Complete Google Business Profile setup and optimization for local SEO",
      price: "₹6,000",
      originalPrice: "₹12,000",
      features: ["Profile Setup", "Local SEO", "Review Management", "Google Maps Ranking", "Photo Optimization", "Post Management"],
      delay: "0.2s"
    },
    {
      icon: "📞",
      title: "Lead Generation",
      description: "Professional lead generation campaigns to get quality business leads",
      price: "₹6,000/month",
      originalPrice: "₹12,000",
      features: ["Targeted Campaigns", "Lead Qualification", "CRM Setup", "Follow-up System", "Conversion Tracking", "Performance Reports"],
      delay: "0.3s"
    }
  ];

  // Work process
  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business, competitors & goals to create a customized digital marketing strategy tailored to your needs.",
      icon: "🔍",
      delay: "0s"
    },
    {
      step: "02",
      title: "Planning & Proposal",
      description: "Detailed project plan with timeline, deliverables & pricing tailored to your budget and business objectives.",
      icon: "📋",
      delay: "0.2s"
    },
    {
      step: "03",
      title: "Execution & Implementation",
      description: "Our expert team implements the strategy with regular updates & transparent communication throughout the process.",
      icon: "⚡",
      delay: "0.4s"
    },
    {
      step: "04",
      title: "Results & Optimization",
      description: "Continuous monitoring, performance analysis & optimization for maximum ROI and business growth.",
      icon: "📈",
      delay: "0.6s"
    }
  ];

  // Achievements
  const achievements = [
    { number: "50+", label: "Social Media Clients", icon: "🏆", delay: "0s" },
    { number: "100+", label: "Marketing Campaigns", icon: "💻", delay: "0.1s" },
    { number: "200+", label: "Meta Ads Campaigns", icon: "📱", delay: "0.2s" },
    { number: "₹1Cr+", label: "Revenue Generated for Clients", icon: "💰", delay: "0.3s" }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "Social Lift's social media management increased our engagement by 300% in just 3 months! Our sales have never been better.",
      author: "Rajesh Kumar",
      company: "Fashion Store Owner",
      rating: 5,
      delay: "0s"
    },
    {
      text: "Professional Meta ads management that actually delivers results. Our lead generation increased by 200% with their campaigns.",
      author: "Priya Sharma", 
      company: "Service Business",
      rating: 5,
      delay: "0.1s"
    },
    {
      text: "Google Business Profile optimization brought us more local customers. The team is responsive and results-driven.",
      author: "Amit Patel",
      company: "Restaurant Owner",
      rating: 5,
      delay: "0.2s"
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Get professional digital marketing services starting from just ₹6,000 with no hidden costs.",
      delay: "0s"
    },
    {
      icon: "⚡",
      title: "Quick Results",
      description: "We focus on delivering measurable results within the first 30-60 days of our partnership.",
      delay: "0.1s"
    },
    {
      icon: "🎯",
      title: "Expert Team",
      description: "Work with certified digital marketing professionals with proven track records.",
      delay: "0.2s"
    },
    {
      icon: "📊",
      title: "Transparent Reporting",
      description: "Regular performance reports and analytics to track your ROI and campaign success.",
      delay: "0.3s"
    },
    {
      icon: "🔄",
      title: "Flexible Packages",
      description: "Customizable service packages that grow with your business needs and budget.",
      delay: "0.4s"
    },
    {
      icon: "🏆",
      title: "Proven Results",
      description: "100+ satisfied clients and 200+ successful campaigns delivered across industries.",
      delay: "0.5s"
    }
  ];

  // WhatsApp redirect for consultation
  const handleWhatsAppRedirect = (service: any) => {
    const message = `Hello Social Lift! I'm interested in ${service.title} service. Please provide more details.`;
    window.open(`https://wa.me/917428606849?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Social Lift | Leading Digital Marketing Agency</title>
        <meta
          name="description"
          content="Meet Social Lift: Trusted digital marketing partner. With 100+ clients and 200+ campaigns, we drive growth with expert Social Media Management (from ₹8,000/mo), Meta Ads (₹10,000/mo), and Lead Generation. 3+ years of proven experience."
        />
        <meta
          name="keywords"
          content="about Social Lift, digital marketing agency, social media management, meta ads agency, SEO company, lead generation services, affordable digital marketing"
        />
        <link rel="canonical" href="https://sociallift.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Social Lift Digital Marketing Agency",
            "url": "https://sociallift.com",
            "logo": "https://sociallift.com/logo.png",
            "description": "A leading digital marketing agency specializing in Social Media Management, Meta Ads, and Lead Generation.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "areaServed": "India",
            "founder": {
              "@type": "Person",
              "name": "Saksham Malhotra"
            },
            "employee": teamMembers.map(member => ({
              "@type": "Person",
              "name": member.name,
              "jobTitle": member.role
            })),
            "sameAs": [
              "https://www.instagram.com/sociallift/",
              "https://www.facebook.com/sociallift/",
              "https://www.linkedin.com/company/sociallift/"
            ]
          })}
        </script>
      </Helmet>

      {/* === HERO SECTION === */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-400 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-pink-400 rounded-full blur-xl animate-ping"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-yellow-500 text-purple-900 px-6 py-3 rounded-full text-lg font-bold mb-8 animate-bounce">
            🚀 Professional Digital Marketing Agency
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            About <span className="text-yellow-400">Social Lift</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-purple-100 leading-relaxed animate-fade-in-up delay-300">
            We are a <strong className="text-yellow-400">full-service digital marketing agency</strong>, 
            helping <strong>100+ businesses</strong> grow through professional 
            <strong> Social Media Management, Meta Ads, Lead Generation</strong> and 
            <strong> Google Business Profile</strong> services at affordable prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <Link
              to="/services"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-2xl shadow-yellow-500/25"
            >
              <span>Explore Our Services</span>
            </Link>
            <a
              href="https://wa.me/917428606849?text=Hello%20Social%20Lift,%20I%20want%20to%20know%20more%20about%20your%20digital%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-2xl shadow-green-500/25"
            >
              <span className="text-xl">💚</span>
              <span>WhatsApp for Consultation</span>
            </a>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm transform transition-all duration-500 hover:scale-110"
                style={{animationDelay: stat.delay}}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-yellow-400">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR STORY SECTION === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded by <strong className="text-purple-600">Saksham Malhotra</strong>, <strong>Social Lift</strong> emerged from a simple 
                  yet powerful vision: to make <em className="text-purple-600">professional digital marketing accessible</em> to 
                  every business, regardless of size or budget.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our journey began when our founder recognized that many businesses 
                  were struggling with expensive digital agencies that promised the world but delivered very little. 
                  We set out to change that by offering <strong>transparent, results-driven services</strong> at prices 
                  that actually make sense.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we're proud to have served <strong className="text-purple-600">100+ businesses</strong> across 
                  India, delivering <strong className="text-purple-600">200+ successful campaigns</strong> that have 
                  generated <strong>over ₹1 Crore in revenue</strong> for our clients. From local restaurants to 
                  service businesses, we've helped businesses of all sizes achieve their digital dreams.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  View Our Work
                </Link>
                <a
                  href="https://wa.me/917428606849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  Our Success Stories
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up delay-300">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === MISSION & VISION === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving digital transformation and business growth through innovative strategies and proven methodologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up">
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower businesses of all sizes with <strong className="text-purple-600">affordable, results-driven digital marketing solutions</strong>. 
                We believe every business deserves access to professional 
                <strong> Social Media Management, Meta Ads, and Lead Generation services</strong> that deliver 
                measurable ROI and sustainable growth.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-200">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become India's most trusted <strong className="text-purple-600">digital marketing partner</strong>, 
                recognized for delivering exceptional <strong>social media, advertising & lead generation services</strong> 
                that help businesses thrive in the digital age. We aim to be the first choice for 
                businesses seeking reliable digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === CORE VALUES === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The fundamental principles that guide every decision we make and every service we deliver</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center group animate-fade-in-up"
                style={{animationDelay: value.delay}}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Social Lift?</h2>
            <p className="text-xl text-gray-600">Discover what sets us apart from other digital marketing agencies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((point, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up"
                style={{animationDelay: point.delay}}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{point.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR SERVICES === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions designed to drive your business growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up"
                style={{animationDelay: service.delay}}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-xs">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Pricing Section */}
                <div className="border-t pt-4 space-y-3">
                  <div className="text-center">
                    <div className="text-purple-600 font-bold text-lg">{service.price}</div>
                    <div className="text-gray-500 text-sm line-through">{service.originalPrice}</div>
                  </div>

                  {/* WhatsApp Consultation */}
                  <button
                    onClick={() => handleWhatsAppRedirect(service)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1"
                  >
                    <span>💚</span>
                    <span>Get Quote on WhatsApp</span>
                  </button>

                  {/* Contact Button */}
                  <Link
                    to="/contact"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1"
                  >
                    <span>📞</span>
                    <span>Free Consultation</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in-up">
            <Link
              to="/pricing"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
            >
              <span>View Complete Pricing & Packages</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === OUR TEAM === */}
    
      {/* === OUR PROCESS === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work Process</h2>
            <p className="text-xl text-gray-600">A systematic approach that ensures success for every project</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center group animate-fade-in-up"
                style={{animationDelay: step.delay}}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{step.icon}</div>
                <div className="text-2xl font-bold text-purple-600 mb-2">{step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ACHIEVEMENTS === */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-purple-100">Milestones that showcase our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center transform transition-all duration-500 hover:scale-110 animate-fade-in-up"
                style={{animationDelay: achievement.delay}}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">{achievement.number}</div>
                <div className="text-purple-100 text-sm md:text-base">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real success stories from businesses we've helped transform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: testimonial.delay}}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-purple-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Digital Journey?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join <strong className="text-yellow-400">100+ successful businesses</strong> that trust Social Lift for their 
            digital marketing needs. Let's create something amazing together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
            >
              <span>Start Your Project</span>
            </Link>
            <a
              href="https://wa.me/917428606849?text=Hello%20Social%20Lift,%20I%20want%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
            >
              <span className="text-xl">💚</span>
              <span>WhatsApp Consultation</span>
            </a>
          </div>
          
          <p className="text-purple-200 mt-6 text-sm">
            ✅ Free Strategy Session ✅ 24/7 Support ✅ Money-Back Guarantee
          </p>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917428606849?text=Hello%20Social%20Lift,%20I%20visited%20your%20about%20page%20and%20want%20to%20know%20more"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
      >
        <span className="text-2xl">💚</span>
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
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default About;