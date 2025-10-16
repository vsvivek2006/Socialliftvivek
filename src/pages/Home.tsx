import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Enhanced Hero Slides with Pink Color Scheme
  const heroSlides = [
    {
      title: "Social Media Marketing",
      subtitle: "Complete Management ₹8,000/month",
      description: "Professional Social Media Management - Creative Posts + Viral Videos. Boost Engagement, Increase Followers & Drive Sales.",
      bgGradient: "from-pink-600 via-pink-500 to-purple-600",
      cta: "Start Social Media Marketing"
    },
    {
      title: "Meta Ads Agency",
      subtitle: "₹10,000/month - Maximum ROI",
      description: "Professional Facebook & Instagram Ads Management. Targeted Advertising, Lead Generation & Sales Conversion.",
      bgGradient: "from-purple-600 via-pink-500 to-pink-600",
      cta: "Get Ads Quote"
    },
    {
      title: "Google Business Profile",
      subtitle: "Complete Setup ₹6,000",
      description: "Professional Google Business Profile Optimization for Local SEO. Get More Customers & Increase Visibility.",
      bgGradient: "from-pink-700 via-purple-600 to-pink-600",
      cta: "Get Google Business Setup"
    }
  ];

  // Digital Marketing Services - Updated with Pink Theme
  const services = [
    {
      icon: "📱",
      title: "Social Media Management",
      description: "Complete Social Media Management with Creative Posts, Viral Videos/Reels and content strategy",
      price: "₹8,000/month",
      features: ["Instagram Marketing", "Facebook Management", "Content Creation", "Engagement Growth"],
      link: "/services",
      popular: true
    },
    {
      icon: "🎯", 
      title: "Meta Ads Management",
      description: "Professional Facebook & Instagram Ads - Targeted Advertising, Lead Generation & Sales Conversion",
      price: "₹10,000/month",
      features: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Ad Optimization"],
      link: "/services",
      popular: true
    },
    {
      icon: "🔍",
      title: "Google Business Profile",
      description: "Complete Google Business Profile Setup & Optimization - Get More Local Customers & Increase Visibility",
      price: "₹6,000",
      features: ["Profile Setup", "Local SEO", "Review Management", "Google Maps Ranking"],
      link: "/services",
      popular: false
    },
    {
      icon: "📞",
      title: "Lead Generation Service",
      description: "Professional Lead Generation Campaigns - Get Quality Leads for Your Business through Digital Marketing",
      price: "₹6,000/month",
      features: ["Targeted Leads", "Quality Prospects", "Conversion Optimization", "Lead Nurturing"],
      link: "/services",
      popular: false
    }
  ];

  // Why Choose Us - Updated with Pink Theme
  const features = [
    {
      icon: "💰",
      title: "Affordable Marketing",
      description: "Competitive pricing with exceptional value for all digital marketing services"
    },
    {
      icon: "⚡", 
      title: "Fast Results",
      description: "Quick campaign setup & fast results without compromising quality"
    },
    {
      icon: "🔄",
      title: "Unlimited Revisions", 
      description: "We work until you're 100% satisfied with your marketing results"
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Always available for your marketing queries & strategy discussions"
    }
  ];

  // Success Stories - 4 Parts
  const successStories = [
    {
      title: "Restaurant Marketing",
      category: "Social Media + Google Business",
      result: "40% More Online Orders",
      image: "🍽️"
    },
    {
      title: "Fashion Brand Growth", 
      category: "Social Media Marketing",
      result: "300% Engagement Growth",
      image: "👗"
    },
    {
      title: "Service Business",
      category: "Meta Ads + Lead Generation",
      result: "50+ Quality Leads/Month", 
      image: "💼"
    },
    {
      title: "E-commerce Store", 
      category: "Meta Ads + Social Media",
      result: "200% Sales Increase",
      image: "🛒"
    }
  ];

  // Testimonials Carousel Data
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Fashion Store Owner", 
      text: "Their social media management increased my sales by 300% in just 3 months! Amazing content strategy.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Priya Sharma",
      company: "Restaurant Business",
      text: "Google Business Profile optimization brought us more local customers. Online orders increased significantly!",
      rating: 5,
      image: "👩‍🍳"
    },
    {
      name: "Amit Patel", 
      company: "Service Business",
      text: "Meta Ads campaigns done perfectly. Got 50+ quality leads every month. Best digital marketing agency!",
      rating: 5,
      image: "👨‍💻"
    },
    {
      name: "Neha Gupta",
      company: "E-commerce Store",
      text: "Complete digital marketing solution helped us achieve 200% sales growth. Highly recommended!",
      rating: 5,
      image: "👩‍💼"
    }
  ];

  // Awards & Recognition - 4 Parts
  const awardsRecognition = [
    { 
      title: "Best Social Media Agency 2024", 
      icon: "🏆",
      description: "Recognized for excellence in social media marketing"
    },
    { 
      title: "Top Meta Ads Partner", 
      icon: "⭐",
      description: "Certified Meta Business Partner"
    },
    { 
      title: "Excellence in Lead Generation", 
      icon: "📈",
      description: "Awarded for outstanding lead generation results"
    },
    { 
      title: "Best Customer Service", 
      icon: "💫",
      description: "Recognized for exceptional client support"
    }
  ];

  // Stats Section
  const stats = [
    { number: "100+", label: "Happy Clients", icon: "😊" },
    { number: "200+", label: "Marketing Campaigns", icon: "🚀" }, 
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "📞" }
  ];

  // Expert Team - Same Size
  const teamMembers = [
    { 
      name: "Social Media Experts", 
      role: "Content Strategy Specialists", 
      icon: "👩‍💻" 
    },
    { 
      name: "Ads Specialists", 
      role: "Meta & Google Certified", 
      icon: "🎯" 
    },
    { 
      name: "SEO Professionals", 
      role: "Google Ranking Experts", 
      icon: "🔍" 
    },
    { 
      name: "Creative Team", 
      role: "Content Creation & Design", 
      icon: "🎨" 
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto slide change for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto slide change for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Digital Marketing Agency | Social Media, Meta Ads, SEO Services</title>
        <meta 
          name="description" 
          content="Professional Digital Marketing Agency offering Social Media Management, Meta Ads, SEO Services, Lead Generation & Google Business Profile Setup."
        />
      </Helmet>

      {/* === ENHANCED HERO SECTION === */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
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
              <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight transform transition-all duration-700 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  {slide.title}
                  <span className="block text-pink-200 mt-4 text-2xl md:text-3xl">
                    {slide.subtitle}
                  </span>
                </h1>
                
                <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed transform transition-all duration-700 delay-300 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  {slide.description}
                </p>
                
                <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-700 delay-500 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  <Link
                    to="/pricing"
                    className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 shadow-2xl"
                  >
                    {slide.cta}
                  </Link>
                  <a
                    href="https://wa.me/919521281509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-lg text-lg font-bold transition-all flex items-center gap-2"
                  >
                    <span>💬 Free Consultation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* === ENHANCED STATS SECTION === */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-pink-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === POPULAR SERVICES === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
            <p className="text-xl text-gray-600">Professional services to grow your business online</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-2 ${
                  service.popular ? 'border-pink-500' : 'border-gray-100'
                } overflow-hidden group`}
              >
                {service.popular && (
                  <div className="bg-pink-500 text-white py-3 px-4 text-center font-bold text-sm">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="text-3xl font-bold text-pink-600">{service.price}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <Link
                      to={service.link}
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 block text-center text-lg"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/919521281509?text=Hello,%20I%20want%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 px-6 rounded-lg font-semibold transition-all duration-300 block text-center text-lg flex items-center justify-center space-x-2"
                    >
                      <span>💬</span>
                      <span>Get Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Agency?</h2>
            <p className="text-xl text-gray-600">We provide exceptional value and results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === AWARDS & RECOGNITION - 4 PARTS === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Recognized for excellence in digital marketing</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awardsRecognition.map((award, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg border border-pink-100">
                  <div className="text-4xl mb-4">{award.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-3">{award.title}</h3>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SUCCESS STORIES - 4 PARTS === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Marketing Success Stories</h2>
            <p className="text-xl text-gray-600">Real projects delivering real results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-pink-600 font-medium text-sm mb-3">{project.category}</p>
                <p className="text-green-600 text-lg font-semibold">{project.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === EXPERT TEAM - SAME SIZE === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Marketing Team</h2>
            <p className="text-xl text-gray-600">Certified professionals dedicated to your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{member.icon}</div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{member.name}</h3>
                <p className="text-pink-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS CAROUSEL === */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="text-6xl">{testimonials[currentTestimonial].image}</div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-900 text-2xl">{testimonials[currentTestimonial].name}</p>
                    <p className="text-pink-600 font-medium text-lg">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-pink-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-pink-100">Get professional digital marketing services that deliver real results</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919521281509"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💬 Start Your Project</span>
            </a>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919521281509"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
      >
        <span className="text-2xl">💬</span>
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
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Home;