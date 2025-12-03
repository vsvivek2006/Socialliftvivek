import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Hero Slides
  const heroSlides = [
    {
      title: "Professional Web Development & Digital Marketing",
      subtitle: "Starting from ₹9,999",
      description: "Get custom websites with React, TypeScript, Node.js & MongoDB. Complete digital solutions for your business growth.",
      cta: "Start Your Project"
    },
    {
      title: "SEO Services Starting ₹7,779/month",
      subtitle: "Get 4 Reports + 4 Blogs Monthly",
      description: "Improve your search rankings with our comprehensive SEO packages. 5-10 keywords optimization included.",
      cta: "Get SEO Audit"
    },
    {
      title: "Social Media Management from ₹4,449/month",
      subtitle: "Complete Social Media Strategy",
      description: "Boost engagement and grow your audience with professional social media management.",
      cta: "View Social Plans"
    }
  ];

  // Services
  const services = [
    {
      icon: "💻",
      title: "Website Development",
      price: "₹9,999+",
      description: "Professional websites with React, TypeScript, Node.js & MongoDB",
      features: ["7-10 Days Delivery", "Mobile Responsive", "WhatsApp Integration", "Free 1 Month Support"]
    },
    {
      icon: "🔍",
      title: "SEO Package",
      price: "₹7,779/month",
      description: "Complete SEO with monthly reports and content",
      features: ["4 Monthly Reports", "4 Blogs Monthly", "5-10 Keywords", "Ranking Improvement"]
    },
    {
      icon: "📱",
      title: "Social Media Management",
      price: "₹4,449/month",
      description: "Complete social media strategy and management",
      features: ["Content Calendar", "Daily Posts", "Engagement Management", "Analytics Reports"]
    },
    {
      icon: "🎯",
      title: "Meta Ads Management",
      price: "₹9,999/month",
      description: "Professional Facebook & Instagram ads",
      features: ["Campaign Strategy", "Ad Creative Design", "Audience Targeting", "ROI Tracking"]
    },
    {
      icon: "🏢",
      title: "Google My Business",
      price: "₹2,499",
      description: "Complete GMB setup and optimization",
      features: ["Profile Setup", "Review Management", "Local SEO", "Photo Optimization"]
    },
    {
      icon: "🚀",
      title: "Lead Generation",
      price: "₹6,000/month",
      description: "Targeted campaigns for quality leads",
      features: ["Lead Strategy", "Campaign Setup", "CRM Integration", "Conversion Tracking"]
    }
  ];

  // Stats
  const stats = [
    { number: "100+", label: "Happy Clients" },
    { number: "200+", label: "Projects Delivered" },
    { number: "24/7", label: "Support Available" },
    { number: "₹1Cr+", label: "Revenue Generated" }
  ];

  // Why Choose Us
  const benefits = [
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Websites in 7-10 days. Quick turnaround without quality compromise."
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Professional services starting from just ₹2,499. No hidden costs."
    },
    {
      icon: "🎯",
      title: "Expert Team",
      description: "Certified developers & marketers with proven track records."
    },
    {
      icon: "🔄",
      title: "Flexible Packages",
      description: "Customizable services that grow with your business needs."
    }
  ];

  // Process
  const process = [
    {
      step: "1",
      title: "Requirement Analysis",
      description: "We understand your business needs and goals"
    },
    {
      step: "2",
      title: "Strategy & Planning",
      description: "Create customized plan with timeline and pricing"
    },
    {
      step: "3",
      title: "Development & Implementation",
      description: "Our expert team builds your solution"
    },
    {
      step: "4",
      title: "Results & Optimization",
      description: "Continuous improvement for maximum ROI"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "Website delivered in 10 days! The quality exceeded our expectations. Highly recommended!",
      author: "Rajesh Kumar",
      company: "Travel Agency Owner",
      rating: 5
    },
    {
      text: "SEO package brought 300% more organic traffic in 4 months. Best investment!",
      author: "Priya Sharma",
      company: "E-commerce Store",
      rating: 5
    },
    {
      text: "Social media management increased our engagement by 250% in 3 months.",
      author: "Amit Patel",
      company: "Restaurant Owner",
      rating: 5
    }
  ];

  // Project Types
  const projects = [
    {
      type: "Tour & Travel Website",
      price: "₹14,999",
      pages: ["Home Page", "Tour Packages", "Booking System", "About & Contact"]
    },
    {
      type: "Guest House Website",
      price: "₹12,999",
      pages: ["Room Booking", "Payment Gateway", "Gallery", "Amenities"]
    },
    {
      type: "Business Website",
      price: "₹9,999",
      pages: ["Home Page", "Services", "About", "Contact"]
    },
    {
      type: "B2B Setup",
      price: "₹24,999",
      pages: ["Website + Social Media", "Market Guidance", "Lead Strategy", "Branding"]
    }
  ];

  // Technology Stack
  const technologies = [
    "React.js", "TypeScript", "Node.js", "MongoDB", "Next.js", "Tailwind CSS"
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto testimonial change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Growth Service - Web Development & Digital Marketing Agency</title>
        <meta 
          name="description" 
          content="Professional web development & digital marketing services. Websites from ₹9,999, SEO from ₹7,779, Social Media from ₹4,449. Get custom solutions for your business."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>

      {/* === HERO SECTION (Mobile Optimized) === */}
      <section className="relative bg-gradient-to-r from-purple-900 via-pink-800 to-blue-900 text-white py-12 md:py-20 overflow-hidden">
        {/* Mobile-friendly slides */}
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : 'absolute inset-0 opacity-0 translate-x-full'
                }`}
              >
                <div className="p-6 md:p-12 lg:p-16">
                  <div className="max-w-2xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <div className="text-lg sm:text-xl md:text-2xl text-pink-300 font-semibold mb-4">
                      {slide.subtitle}
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-purple-100 mb-6 md:mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to="/book-call"
                        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-lg text-center"
                      >
                        {slide.cta}
                      </Link>
                      <a
                        href="https://wa.me/97797073824881"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-white hover:bg-white hover:text-purple-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
                      >
                        <span className="text-lg">💬</span>
                        <span>WhatsApp Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators (Mobile-friendly) */}
          <div className="flex justify-center mt-6 space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows (Hidden on very small screens) */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* === QUICK STATS === */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICES SECTION === */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Professional digital solutions tailored for your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 sm:p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-2xl sm:text-3xl">{service.icon}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                    <div className="text-base sm:text-lg font-bold text-purple-600">{service.price}</div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-center py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all hover:scale-105"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Choose <span className="text-purple-600">Growth Service?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              What makes us different from other digital agencies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 sm:p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROJECT TYPES === */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Popular <span className="text-purple-600">Projects</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Custom solutions for different business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{project.type}</h3>
                  <div className="text-lg sm:text-xl font-bold text-purple-600">{project.price}</div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Includes Pages:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.pages.map((page, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                        {page}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={`https://wa.me/97797073824881?text=Hello! I'm interested in ${project.type} (${project.price}). Please provide details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all hover:scale-105"
                >
                  💬 Get Quote on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TECHNOLOGY STACK === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-purple-600">Technology</span> Stack
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Modern technologies for better performance and scalability
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROCESS === */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-purple-600">Process</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process for successful projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {process.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-5 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Client <span className="text-purple-600">Testimonials</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="relative bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="text-center">
              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg sm:text-xl">⭐</span>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              {/* Author */}
              <div>
                <p className="font-bold text-gray-900 text-base sm:text-lg">{testimonials[currentTestimonial].author}</p>
                <p className="text-purple-600 font-medium text-sm sm:text-base">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-white hover:bg-gray-100 text-gray-700 p-2 rounded-full shadow-md"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="bg-white hover:bg-gray-100 text-gray-700 p-2 rounded-full shadow-md"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-900 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Get professional web development and digital marketing services at unbeatable prices
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/97797073824881"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              <span className="text-lg">💬</span>
              <span>Chat on WhatsApp</span>
            </a>
            
            <a
              href="tel:+919341436937"
              className="bg-white hover:bg-gray-100 text-purple-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              <span className="text-lg">📞</span>
              <span>Call: +91 93414 36937</span>
            </a>
          </div>
          
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-purple-200">
            <div className="flex items-center justify-center gap-1">
              <span>⚡</span>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <span>💰</span>
              <span>Affordable</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <span>🎯</span>
              <span>Expert Team</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <span>🔄</span>
              <span>Flexible</span>
            </div>
          </div>
        </div>
      </section>

      {/* === FLOATING WHATSAPP BUTTON === */}
      <a
        href="https://wa.me/97797073824881"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <span className="text-xl sm:text-2xl">💬</span>
      </a>

      {/* Mobile touch-friendly styles */}
      <style jsx>{`
        /* Improve touch targets */
        button, a {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Prevent text size adjustment on orientation change */
        html {
          -webkit-text-size-adjust: 100%;
        }
        
        /* Smooth scrolling for mobile */
        @media (max-width: 640px) {
          html {
            scroll-behavior: smooth;
          }
        }
        
        /* Better touch feedback */
        .hover\:scale-105:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};

export default Home;
