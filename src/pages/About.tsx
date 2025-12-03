import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Slides
  const heroSlides = [
    {
      title: "Web Development & Digital Marketing Experts",
      subtitle: "Serving Vrindavan & Mathura Businesses",
      description: "Professional digital solutions for local businesses in the spiritual heartland of India. We understand the unique needs of Vrindavan and Mathura enterprises.",
      cta: "Start Your Project"
    },
    {
      title: "Digital Growth for Spiritual Businesses",
      subtitle: "Enhancing Online Presence",
      description: "Helping temples, hotels, tour operators, and local businesses in Vrindavan-Mathura establish strong digital footprints.",
      cta: "Get Free Audit"
    },
    {
      title: "Local Expertise, Global Standards",
      subtitle: "Vrindavan-Based Digital Agency",
      description: "Deep understanding of local market combined with world-class web development and digital marketing expertise.",
      cta: "View Our Work"
    }
  ];

  // Company stats
  const stats = [
    { number: "100+", label: "Happy Clients", icon: "😊", delay: "0s" },
    { number: "200+", label: "Projects Delivered", icon: "🚀", delay: "0.1s" },
    { number: "3+", label: "Years Experience", icon: "⏳", delay: "0.2s" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐", delay: "0.3s" },
  ];

  // Core values
  const values = [
    {
      icon: "🚀",
      title: "Local Understanding",
      description: "Deep knowledge of Vrindavan-Mathura market dynamics and business needs.",
      delay: "0s"
    },
    {
      icon: "🎯",
      title: "Result-Driven",
      description: "Focused on delivering measurable growth and online visibility for local businesses.",
      delay: "0.1s"
    },
    {
      icon: "🤝",
      title: "Trust & Reliability",
      description: "Building long-term relationships based on trust, integrity, and consistent delivery.",
      delay: "0.2s"
    },
    {
      icon: "⭐",
      title: "Excellence",
      description: "Committed to delivering high-quality digital solutions that exceed expectations.",
      delay: "0.3s"
    },
  ];

  // Our Services (without prices)
  const services = [
    {
      icon: "🕉️",
      title: "Temple Websites",
      description: "Spiritual website development for temples, ashrams, and religious organizations in Vrindavan-Mathura.",
      features: [
        "Donation Integration",
        "Event Management",
        "Seva Booking",
        "Spiritual Content"
      ],
      delay: "0s"
    },
    {
      icon: "🏨",
      title: "Hotel & Guest House Websites",
      description: "Custom websites for hotels, guest houses, and dharamshalas in the holy cities.",
      features: [
        "Online Booking",
        "Room Management",
        "Payment Gateway",
        "Local SEO"
      ],
      delay: "0.1s"
    },
    {
      icon: "🛍️",
      title: "Local Business Websites",
      description: "Professional websites for shops, restaurants, and service providers in Mathura-Vrindavan.",
      features: [
        "Local Listings",
        "Product Display",
        "Service Booking",
        "Contact Management"
      ],
      delay: "0.2s"
    },
    {
      icon: "📱",
      title: "Tour & Travel Websites",
      description: "Complete solutions for tour operators, travel agencies, and pilgrimage services.",
      features: [
        "Tour Packages",
        "Booking System",
        "Itinerary Planning",
        "Multi-language"
      ],
      delay: "0.3s"
    },
    {
      icon: "🔍",
      title: "Local SEO",
      description: "Location-based SEO optimization for businesses targeting Vrindavan-Mathura audience.",
      features: [
        "Local Keywords",
        "Google My Business",
        "Local Citations",
        "Map Optimization"
      ],
      delay: "0.4s"
    },
    {
      icon: "📢",
      title: "Social Media for Local Business",
      description: "Targeted social media strategies for businesses in the spiritual tourism sector.",
      features: [
        "Local Content",
        "Community Engagement",
        "Event Promotion",
        "Local Reviews"
      ],
      delay: "0.5s"
    }
  ];

  // Certificates & Registrations
  const certificates = [
    {
      id: 1,
      title: "GST Registration",
      description: "Registered under Goods and Services Tax Act",
      number: "GSTIN: 09AAXPTXXXXX1Z5",
      validity: "Valid Till: Permanent",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      title: "MSME Registered",
      description: "Registered under Ministry of Micro, Small & Medium Enterprises",
      number: "UDYAM-UP-09-XXXX-XXXX",
      validity: "Valid Till: Permanent",
      bgColor: "from-green-50 to-green-100"
    },
    {
      id: 3,
      title: "Startup India Recognition",
      description: "Recognized by Department for Promotion of Industry and Internal Trade",
      number: "DIPP: XXXX-XX-XXXX",
      validity: "Valid Till: 2027",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      id: 4,
      title: "Professional Tax Registration",
      description: "Registered under Uttar Pradesh Professional Tax Act",
      number: "PTEC: XXXXXXX",
      validity: "Valid Till: Renewal Required",
      bgColor: "from-orange-50 to-orange-100"
    }
  ];

  // Work process
  const process = [
    {
      step: "01",
      title: "Local Requirement Analysis",
      description: "Understanding your business needs in the Vrindavan-Mathura context.",
      icon: "🔍",
      delay: "0s"
    },
    {
      step: "02",
      title: "Custom Strategy Planning",
      description: "Creating digital strategies tailored for local audience and market.",
      icon: "📋",
      delay: "0.2s"
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Building your digital solution with local cultural considerations.",
      icon: "⚡",
      delay: "0.4s"
    },
    {
      step: "04",
      title: "Launch & Local Support",
      description: "Deployment with ongoing local support and maintenance.",
      icon: "🚀",
      delay: "0.6s"
    }
  ];

  // Technology Stack
  const techStack = [
    { icon: "⚛️", name: "React", description: "Modern frontend framework" },
    { icon: "📘", name: "TypeScript", description: "Type-safe development" },
    { icon: "🟢", name: "Node.js", description: "Backend development" },
    { icon: "🍃", name: "MongoDB", description: "Database management" },
    { icon: "▲", name: "Next.js", description: "React framework" },
    { icon: "🎨", name: "Tailwind CSS", description: "Styling framework" },
  ];

  // Client Types in Vrindavan-Mathura
  const clientTypes = [
    { name: "Temples & Ashrams", icon: "🕉️", count: "25+" },
    { name: "Hotels & Guest Houses", icon: "🏨", count: "40+" },
    { name: "Tour Operators", icon: "✈️", count: "20+" },
    { name: "Local Shops", icon: "🛍️", count: "35+" },
    { name: "Restaurants", icon: "🍽️", count: "15+" },
    { name: "Service Providers", icon: "🔧", count: "25+" }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "Our temple website with online donation system helped us connect with devotees globally. Excellent work for Vrindavan temples!",
      author: "Shri Krishna Temple",
      location: "Vrindavan",
      delay: "0s"
    },
    {
      text: "Guest house website with booking system increased our occupancy by 60%. Perfect solution for Mathura hospitality businesses.",
      author: "Radhe Krishna Guest House",
      location: "Mathura",
      delay: "0.1s"
    },
    {
      text: "Local SEO services helped our tour company rank #1 in Mathura tour searches. Great understanding of local market.",
      author: "Braj Darshan Tours",
      location: "Vrindavan",
      delay: "0.2s"
    }
  ];

  // Why choose us
  const whyChooseUs = [
    {
      icon: "📍",
      title: "Local Presence",
      description: "Based in Vrindavan-Mathura region with deep understanding of local business needs.",
      delay: "0s"
    },
    {
      icon: "👨‍💻",
      title: "Expert Team",
      description: "Certified developers and marketers specializing in digital solutions for spiritual tourism.",
      delay: "0.1s"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Quick turnaround times understanding the seasonal nature of pilgrimage business.",
      delay: "0.2s"
    },
    {
      icon: "💼",
      title: "Registered Company",
      description: "Fully registered and compliant with all government regulations and certifications.",
      delay: "0.3s"
    },
    {
      icon: "🔄",
      title: "Ongoing Support",
      description: "Continuous support and maintenance with local availability for immediate assistance.",
      delay: "0.4s"
    },
    {
      icon: "🎯",
      title: "Local SEO Expertise",
      description: "Specialized in optimizing websites for Vrindavan-Mathura specific searches and keywords.",
      delay: "0.5s"
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | Growth Service - Vrindavan Mathura Web Development Agency</title>
        <meta
          name="description"
          content="Growth Service: Professional web development & digital marketing agency based in Vrindavan-Mathura. Serving temples, hotels, tour operators with custom digital solutions."
        />
        <meta 
          name="keywords" 
          content="Vrindavan web development, Mathura digital marketing, temple website, hotel website Vrindavan, tour operator website Mathura, local SEO Vrindavan, web design Mathura"
        />
      </Helmet>

      {/* === HERO SECTION WITH SLIDER === */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-orange-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rotate-45 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-lg blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : 'absolute inset-0 opacity-0 translate-x-full'
                }`}
              >
                <div className="p-8 md:p-12 lg:p-16">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <div className="text-lg sm:text-xl md:text-2xl text-yellow-300 font-semibold mb-4">
                      {slide.subtitle}
                    </div>
                    <p className="text-base sm:text-lg text-purple-100 mb-6 md:mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-lg text-center"
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
                        <span>WhatsApp Consultation</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
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

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* === COMPANY STATS === */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
                style={{animationDelay: stat.delay}}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">{stat.number}</div>
                <div className="text-gray-700 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR STORY === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Serving the <span className="text-orange-600">Holy Cities</span>
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Founded in the spiritual heartland of India, Growth Service began with a simple mission: 
                  to help local businesses in Vrindavan and Mathura thrive in the digital age. We saw that 
                  many temples, hotels, tour operators, and local shops lacked proper online presence.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our journey started by creating websites for local temples, enabling them to accept 
                  online donations and share spiritual content globally. Today, we've expanded to serve 
                  all types of businesses in the Vrindavan-Mathura region.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What sets us apart is our deep understanding of the local market, cultural nuances, 
                  and specific needs of businesses in these holy cities. We combine this local knowledge 
                  with world-class technical expertise.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/97797073824881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  💬 Chat on WhatsApp
                </a>
                <Link
                  to="/portfolio"
                  className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  View Our Local Projects
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {clientTypes.slice(0, 4).map((type, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="text-3xl mb-3">{type.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{type.name}</h3>
                  <div className="text-purple-600 text-xs">{type.count} Projects</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === CERTIFICATES & REGISTRATIONS SECTION === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Certifications</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We operate as a fully registered and compliant digital agency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                className={`bg-gradient-to-br ${cert.bgColor} border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-2xl">📜</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                    <div className="space-y-2">
                      <div className="bg-white/50 p-2 rounded">
                        <div className="text-xs text-gray-500">Certificate Number</div>
                        <div className="font-mono text-sm font-semibold text-gray-800">{cert.number}</div>
                      </div>
                      <div className="bg-white/50 p-2 rounded">
                        <div className="text-xs text-gray-500">Validity</div>
                        <div className="text-sm font-semibold text-green-600">{cert.validity}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Registered Office in Vrindavan</h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Our physical office is located in Vrindavan, ensuring we stay connected with local businesses 
              and understand ground realities of the market we serve.
            </p>
            <div className="text-sm text-gray-500">
              📍 Registered Address: Vrindavan, Mathura District, Uttar Pradesh
            </div>
          </div>
        </div>
      </section>

      {/* === OUR SERVICES FOR LOCAL BUSINESS === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services for <span className="text-orange-600">Vrindavan-Mathura</span> Businesses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized digital solutions tailored for the unique needs of local businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group"
                style={{animationDelay: service.delay}}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TECHNOLOGY STACK === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern <span className="text-purple-600">Technology</span> Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies for building fast, scalable, and modern websites
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 text-center group hover:bg-purple-50"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
                <div className="text-gray-500 text-xs mt-1">{tech.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CORE VALUES === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 to-pink-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Principles that guide our work with local businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 text-center group"
                style={{animationDelay: value.delay}}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-purple-100 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === LOCAL CLIENT TYPES === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Businesses We Serve in <span className="text-orange-600">Holy Cities</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diverse range of local businesses we've helped establish online presence
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {clientTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group hover:bg-orange-50"
              >
                <div className="text-2xl mb-2">{type.icon}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{type.name}</div>
                <div className="text-orange-600 text-xs">{type.count} Clients</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-purple-600">Growth Service?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What makes us the preferred digital partner for Vrindavan-Mathura businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((point, index) => (
              <div 
                key={index}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 group"
                style={{animationDelay: point.delay}}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl group-hover:scale-110 transition-transform">{point.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Local Businesses <span className="text-orange-600">Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Success stories from businesses in Vrindavan and Mathura
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                style={{animationDelay: testimonial.delay}}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <div className="flex items-center text-orange-600 text-sm">
                    <span className="mr-1">📍</span>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your <span className="text-yellow-300">Vrindavan-Mathura</span> Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's build your digital presence and reach more devotees, tourists, and customers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/97797073824881"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-lg"
            >
              <span>💬</span>
              <span>Chat on WhatsApp</span>
            </a>
            
            <a
              href="tel:+919341436937"
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-lg"
            >
              <span>📞</span>
              <span>Call: +91 93414 36937</span>
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-purple-200 mb-6">Serving Vrindavan & Mathura Region</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-purple-300">
              <div className="flex items-center gap-2">
                <span>🕉️</span>
                <span>Temple Websites</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🏨</span>
                <span>Hotel & Guest House</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✈️</span>
                <span>Tour Operators</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🛍️</span>
                <span>Local Businesses</span>
              </div>
            </div>
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
      `}</style>
    </div>
  );
};

export default About;
