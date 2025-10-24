import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Enhanced Hero Slides with Images
  const heroSlides = [
    {
      title: "Digital Marketing Agency",
      subtitle: "Driving Results and Growth",
      description: "EZ Rankings, the best digital marketing agency in India committed to delivering measurable results for our clients.",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      cta: "Start Your Project"
    },
    {
      title: "AI-Driven Marketing",
      subtitle: "Turn Traffic Into Revenue",
      description: "Turn holiday traffic into revenue with AI-driven marketing strategies that deliver real results.",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      cta: "Get Marketing Plan"
    },
    {
      title: "Performance Marketing",
      subtitle: "Proven Track Record",
      description: "Discover how we helped businesses achieve their digital marketing goals through our case studies.",
      bgImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      cta: "View Case Studies"
    }
  ];

  // Performance Metrics
  const performanceMetrics = [
    {
      value: "2X to 6X",
      label: "Bootstrap Revenue",
      icon: "📈"
    },
    {
      value: "4X to 8X",
      label: "Social Media Engagement",
      icon: "💬"
    },
    {
      value: "100 to 1000%",
      label: "Brand Exposure",
      icon: "👁️"
    },
    {
      value: "Ready",
      label: "All Experience",
      icon: "⚡"
    }
  ];

  // Digital Marketing Services
  const services = [
    {
      icon: "🔍",
      title: "Search Engine Optimization",
      description: "Improve Rankings & Traffic with proven SEO strategies",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Optimization"]
    },
    {
      icon: "🎯",
      title: "Pay Per Click",
      description: "Need Quick Sales with targeted PPC campaigns",
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "Conversion Tracking"]
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description: "Enhance Engagement across all platforms",
      features: ["Content Strategy", "Community Management", "Paid Social", "Analytics"]
    },
    {
      icon: "🛡️",
      title: "Reputation Management",
      description: "Build Reputation and brand trust",
      features: ["Review Management", "Brand Monitoring", "Crisis Management", "PR Strategy"]
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      industry: "Ecommerce",
      services: ["Digital", "SEO", "SMO"],
      metrics: [
        { value: "+175%", label: "Sales Growth" },
        { value: "+24.4%", label: "ROI" }
      ]
    },
    {
      industry: "Education",
      services: ["PPC", "Website"],
      metrics: [
        { value: "+150%", label: "Lead Growth" },
        { value: "+17.6%", label: "ROI Growth" }
      ]
    },
    {
      industry: "Healthcare",
      services: ["SEO", "Content Marketing"],
      metrics: [
        { value: "+200%", label: "Online Visibility" },
        { value: "+35%", label: "Patient Acquisition" }
      ]
    }
  ];

  // Why Choose Digital Marketing
  const benefits = [
    {
      point: "Wider reach and engagement",
      checked: true
    },
    {
      point: "Data-driven strategies",
      checked: true
    },
    {
      point: "Enhanced competitiveness",
      checked: true
    },
    {
      point: "Progress evaluation",
      checked: true
    },
    {
      point: "Improved customer interactions",
      checked: true
    }
  ];

  // What You're Missing Without Digital Marketing
  const missingOpportunities = [
    "Loss of potential customers",
    "Limited reach and engagement",
    "Competitors continued business progress",
    "Lack of an actionable plan"
  ];

  // Work Process
  const workProcess = [
    {
      step: "1",
      title: "Understanding Project Requirements",
      description: "We sit with our client and discuss project goals, market conditions, competitors, and current situation."
    },
    {
      step: "2",
      title: "Setting Up a Tailored Plan",
      description: "After discussion, we prepare a customized plan suitable for client requirements."
    },
    {
      step: "3",
      title: "Starting the Process",
      description: "We start optimizing and implementing strategies while keeping clients informed about progress."
    },
    {
      step: "4",
      title: "Delivering Results",
      description: "We execute every measure required to help you reach your desired outcome."
    }
  ];

  // Trusted Clients
  const trustedClients = [
    "Kajaria", "Baidyanath", "CASIO", "Yaha", "Pristyn Care",
    "Coverfox.com", "Honeywell", "Aster", "Institutions"
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Ecommerce Business",
      text: "EZ Rankings helped us achieve 175% sales growth through their digital marketing strategies. Highly recommended!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Education Institute",
      text: "Their PPC campaigns brought us 150% more leads. The team is professional and results-driven.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Healthcare Provider",
      text: "Our online visibility increased by 200% after working with EZ Rankings. Great service!",
      rating: 5
    }
  ];

  // Stats
  const stats = [
    { number: "12,000+", label: "Clients Served" },
    { number: "71%", label: "Positive Experience Rate" },
    { number: "61%", label: "SEO Success Rate" },
    { number: "100%", label: "Client Satisfaction" }
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
        <title>Best Digital Marketing Agency in India - EZ Rankings</title>
        <meta 
          name="description" 
          content="EZ Rankings - Best digital marketing agency in India offering SEO, PPC, Social Media Marketing, and performance marketing services. Driving measurable results and growth."
        />
      </Helmet>

      {/* === HERO SECTION WITH IMAGES === */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 transform ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="relative h-full flex items-center justify-center text-white">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transform transition-all duration-700 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  {slide.title}
                  <span className="block text-pink-300 mt-4 text-3xl md:text-4xl">
                    {slide.subtitle}
                  </span>
                </h1>
                
                <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed transform transition-all duration-700 delay-300 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  {slide.description}
                </p>
                
                <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-700 delay-500 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  <Link
                    to="/contact"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-5 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl"
                  >
                    {slide.cta}
                  </Link>
                  <a
                    href="tel:+18557630320"
                    className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-10 py-5 rounded-lg text-xl font-bold transition-all flex items-center gap-2"
                  >
                    <span>📞 +1-855-763-0320</span>
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

      {/* === PERFORMANCE METRICS === */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-white/90 text-lg">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ABOUT AGENCY === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Digital Marketing Agency in India</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              EZ Rankings, the best digital marketing agency in India committed to delivering measurable results for our clients. 
              Our digital experts use the latest digital marketing tools & technologies ensuring that we deliver nothing short of excellence.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-yellow-500 text-xl">⚠️</span>
              </div>
              <div className="ml-4">
                <p className="text-yellow-800 font-semibold">
                  Attention: EZ Rankings does not offer part-time job offers or channel subscription tasks via WhatsApp, 
                  Telegram, or any other chat platforms. Beware of fraudulent solicitations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICES SECTION === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Digital Marketing Services We Provide</h2>
            <p className="text-xl text-gray-600">
              Our digital marketing services increase brand visibility, drive more qualified leads, and deliver measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <div className="text-4xl mb-4 text-pink-600">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CASE STUDIES === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Track Record</h2>
            <p className="text-xl text-gray-600">
              Discover how we helped businesses achieve their digital marketing goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.industry}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-3">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-gray-600">{metric.label}</span>
                      <span className="text-green-600 font-bold text-xl">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY DIGITAL MARKETING === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Do Your Businesses Need Digital Marketing Services?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Businesses benefit from digital marketing services for wider reach, data-driven strategies, 
                enhanced competitiveness, progress evaluation, and improved customer interactions.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-500 text-xl mr-4">✓</span>
                    <span className="text-gray-700 text-lg">{benefit.point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Missing Opportunities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-red-600">What You're Missing Without Digital Marketing</h3>
              <p className="text-lg text-gray-600 mb-8">
                If you haven't hired the best performance marketing agency, you might be missing out on significant growth opportunities.
              </p>
              
              <div className="space-y-4">
                {missingOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-red-500 text-xl mr-4">✗</span>
                    <span className="text-gray-700 text-lg">{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WORK PROCESS === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Grow With Our Easy Work Process</h2>
            <p className="text-xl text-gray-600">
              As a leading digital marketing company in India, we prefer to keep things straightforward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((step, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-pink-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TRUSTED CLIENTS === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Corporate Partners</h2>
            <p className="text-xl text-gray-600">
              We take pride in having served 12,000+ clients across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {trustedClients.map((client, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-semibold text-gray-800">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about working with us</p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <p className="font-bold text-gray-900 text-2xl">{testimonials[currentTestimonial].name}</p>
                  <p className="text-pink-600 font-medium text-lg">{testimonials[currentTestimonial].company}</p>
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
          </div>
        </div>
      </section>

      {/* === FREE PROPOSAL CTA === */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">GET YOUR FREE PERFORMANCE MARKETING PLAN NOW!</h2>
          <p className="text-xl mb-8 text-purple-100">
            Fill In Your Details Below and Unlock Your Personalized Performance Marketing Strategy!
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Enter your Website" 
                className="w-full px-6 py-4 border border-gray-300 rounded-lg text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 px-6 rounded-lg font-bold text-xl transition-all duration-300">
                SEND ME A PROPOSAL
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+18557630320"
              className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>📞 +1-855-763-0320</span>
            </a>
            <a
              href="https://wa.me/919521281509"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 flex items-center gap-2"
            >
              <span>💬 WhatsApp Chat</span>
            </a>
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