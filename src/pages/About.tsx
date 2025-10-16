import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  // Services with updated pricing
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
      text: "Their social media management increased our engagement by 300% in just 3 months! Our sales have never been better.",
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
    const message = `Hello! I'm interested in ${service.title} service. Please provide more details.`;
    window.open(`https://wa.me/919521281509?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | Digital Marketing Agency</title>
        <meta
          name="description"
          content="Meet our Digital Marketing Agency: Trusted partner with 100+ clients and 200+ campaigns. We drive growth with expert Social Media Management, Meta Ads, and Lead Generation."
        />
      </Helmet>

      {/* === SIMPLIFIED HERO SECTION === */}
      <section className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white py-16 md:py-20 overflow-hidden">
        {/* Background Vectors */}
        <div className="absolute inset-0 opacity-10">
          {/* Abstract Shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-white rotate-45 blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-white rounded-lg blur-2xl"></div>
          <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-white rotate-12 blur-2xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            About Our Digital Marketing Agency
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-pink-100 leading-relaxed">
            We help businesses grow with professional digital marketing services including social media management, Meta ads, and lead generation solutions.
          </p>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm transform transition-all duration-500 hover:scale-105"
                style={{animationDelay: stat.delay}}
              >
                <div className="text-xl mb-2">{stat.icon}</div>
                <div className="text-xl font-bold text-white">{stat.number}</div>
                <div className="text-white/80 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR STORY SECTION === */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Founded with a vision to make professional digital marketing accessible to every business, 
                  we've grown to become a trusted partner for companies across India.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our journey began by recognizing the gap between expensive agency services and the actual 
                  needs of growing businesses. We built our agency around transparency, results, and 
                  affordable pricing.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to have served 100+ businesses with 200+ successful campaigns, 
                  helping them achieve remarkable growth through strategic digital marketing.
                </p>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/portfolio"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-lg font-semibold transition-all duration-300 text-center text-sm"
                >
                  View Our Work
                </Link>
                <a
                  href="https://wa.me/919521281509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-5 py-3 rounded-lg font-semibold transition-all duration-300 text-center text-sm"
                >
                  Get Consultation
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up delay-300">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-purple-100 p-4 rounded-xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-2xl font-bold text-pink-600 mb-1">{stat.number}</div>
                  <div className="text-gray-700 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === MISSION & VISION === */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driving business growth through innovative digital strategies and proven methodologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with affordable, results-driven digital marketing solutions that 
                deliver measurable ROI and sustainable growth through professional services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up delay-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be India's most trusted digital marketing partner, recognized for delivering exceptional 
                social media, advertising, and lead generation services that help businesses thrive online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === CORE VALUES === */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600">Principles that guide our work and client relationships</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-5 rounded-xl hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 text-center group animate-fade-in-up"
                style={{animationDelay: value.delay}}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose Our Agency?</h2>
            <p className="text-gray-600">What makes us different from other digital marketing agencies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((point, index) => (
              <div 
                key={index}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 group animate-fade-in-up"
                style={{animationDelay: point.delay}}
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{point.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR SERVICES === */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive digital marketing solutions for your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 group animate-fade-in-up"
                style={{animationDelay: service.delay}}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">{service.description}</p>
                
                <div className="space-y-1 mb-3">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-xs">
                      <span className="text-green-500 mr-1">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-3 space-y-2">
                  <div className="text-center">
                    <div className="text-pink-600 font-bold text-base">{service.price}</div>
                    <div className="text-gray-500 text-xs line-through">{service.originalPrice}</div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppRedirect(service)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1"
                  >
                    <span>💚</span>
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR PROCESS === */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600">Systematic approach ensuring success for every project</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 text-center group animate-fade-in-up"
                style={{animationDelay: step.delay}}
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{step.icon}</div>
                <div className="text-lg font-bold text-pink-600 mb-1">{step.step}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ACHIEVEMENTS === */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-pink-100">Milestones showcasing our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center transform transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{animationDelay: achievement.delay}}
              >
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <div className="text-xl font-bold text-white mb-1">{achievement.number}</div>
                <div className="text-pink-100 text-xs">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-gray-600">Success stories from businesses we've helped</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-5 rounded-xl hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
                style={{animationDelay: testimonial.delay}}
              >
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic text-sm leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                  <p className="text-pink-600 text-xs">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default About;