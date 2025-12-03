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
      description: "Committed to delivering high-quality web development, SEO & marketing solutions that exceed expectations.",
      delay: "0.3s"
    },
  ];

  // Services with updated pricing
  const services = [
    {
      icon: "💻",
      title: "Website Development",
      description: "Professional website development with HTML, CSS, React, TypeScript, Node.js, MongoDB",
      price: "₹9,999",
      originalPrice: "₹29,999",
      features: [
        "Home Page",
        "About Page", 
        "Services Page",
        "Contact Form",
        "WhatsApp Integration",
        "Mobile Responsive"
      ],
      details: "Time: 7-10 days (depending on requirements)",
      delay: "0s"
    },
    {
      icon: "🔍",
      title: "SEO Package",
      description: "Complete SEO package with on-page, off-page & technical optimization",
      price: "₹7,779/month",
      originalPrice: "₹24,999/month",
      features: [
        "4 Reports Monthly",
        "4 Blogs Monthly",
        "5-10 Keywords Work",
        "On-Page Optimization",
        "Off-Page Optimization",
        "Competitor Analysis"
      ],
      details: "Time Period: 3-6 months for results",
      delay: "0.1s"
    },
    {
      icon: "🏢",
      title: "Google My Business",
      description: "Complete GMB setup and optimization for local SEO dominance",
      price: "₹2,499",
      originalPrice: "₹12,499",
      features: [
        "Profile Setup",
        "Weekly Posts",
        "Review Management",
        "Local SEO",
        "Photo/Video Posts",
        "Performance Tracking"
      ],
      details: "One-time setup with monthly management available",
      delay: "0.2s"
    },
    {
      icon: "📱",
      title: "Social Media Management",
      description: "Complete social media management with content calendar & strategy",
      price: "₹4,449/month",
      originalPrice: "₹24,999/month",
      features: [
        "Content Calendar",
        "Social Media Strategy",
        "Platform Management",
        "Engagement Management",
        "Performance Analytics",
        "Monthly Reports"
      ],
      details: "Includes 5 platforms: FB, IG, LinkedIn, Twitter, Pinterest",
      delay: "0.3s"
    },
    {
      icon: "🎯",
      title: "Meta Ads Management",
      description: "Professional Facebook & Instagram ads management",
      price: "₹9,999/month",
      originalPrice: "₹24,999/month",
      features: [
        "Ad Account Setup",
        "Campaign Strategy",
        "Audience Targeting",
        "Ad Creative Design",
        "Performance Tracking",
        "ROI Optimization",
        "A/B Testing"
      ],
      details: "Minimum 3 campaigns included",
      delay: "0.4s"
    },
    {
      icon: "✈️",
      title: "Tour & Travel Website",
      description: "Custom travel website with booking functionality",
      price: "₹14,999",
      originalPrice: "₹35,000",
      features: [
        "Home Page Design",
        "Upcoming Tours Section",
        "About Page",
        "Contact Page",
        "Booking System",
        "Gallery Section",
        "Admin Panel"
      ],
      details: "Tech Stack: React, TypeScript, Node.js, MongoDB",
      delay: "0.5s"
    },
    {
      icon: "🏨",
      title: "Guest House Website",
      description: "Hotel/guest house website with payment gateway",
      price: "₹12,999",
      originalPrice: "₹28,000",
      features: [
        "Room Booking System",
        "Online Payment Gateway",
        "Room Gallery",
        "Amenities Section",
        "Contact & Location",
        "Reviews Section",
        "Admin Dashboard"
      ],
      details: "Integrated with Razorpay/Stripe",
      delay: "0.6s"
    },
    {
      icon: "🏢",
      title: "B2B Business Setup",
      description: "Complete business setup package for B2B companies",
      price: "₹24,999",
      originalPrice: "₹50,000",
      features: [
        "Professional Website",
        "Social Media Setup",
        "Market Guidance",
        "Field Area Assignment",
        "Lead Generation Strategy",
        "Branding Package",
        "3 Months Support"
      ],
      details: "Includes 1 website + complete digital presence",
      delay: "0.7s"
    }
  ];

  // Work process
  const process = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "We analyze your business needs, goals & target audience to create customized solutions.",
      icon: "🔍",
      delay: "0s"
    },
    {
      step: "02",
      title: "Planning & Proposal",
      description: "Detailed project plan with timeline, deliverables & pricing tailored to your budget.",
      icon: "📋",
      delay: "0.2s"
    },
    {
      step: "03",
      title: "Development & Design",
      description: "Our expert team develops your project with modern technologies and best practices.",
      icon: "⚡",
      delay: "0.4s"
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Thorough testing and smooth deployment with ongoing support and maintenance.",
      icon: "🚀",
      delay: "0.6s"
    }
  ];

  // Achievements
  const achievements = [
    { number: "50+", label: "Websites Developed", icon: "💻", delay: "0s" },
    { number: "100+", label: "SEO Clients", icon: "🔍", delay: "0.1s" },
    { number: "200+", label: "Social Media Campaigns", icon: "📱", delay: "0.2s" },
    { number: "₹2Cr+", label: "Revenue Generated for Clients", icon: "💰", delay: "0.3s" }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "Their website development team delivered our travel website in just 10 days! The quality is exceptional and the price was unbeatable.",
      author: "Rajesh Kumar",
      company: "Travel Agency Owner",
      rating: 5,
      delay: "0s"
    },
    {
      text: "SEO package at ₹7,779 brought us 300% more organic traffic in 4 months. Best investment we made for our business!",
      author: "Priya Sharma", 
      company: "E-commerce Store",
      rating: 5,
      delay: "0.1s"
    },
    {
      text: "Guest house website with payment gateway was set up perfectly. Our bookings increased by 150% within first month.",
      author: "Amit Patel",
      company: "Hotel Owner",
      rating: 5,
      delay: "0.2s"
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      icon: "💰",
      title: "Unbeatable Pricing",
      description: "Professional services starting from just ₹2,499 with transparent pricing & no hidden costs.",
      delay: "0s"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Website development in 7-10 days. Quick turnaround without compromising quality.",
      delay: "0.1s"
    },
    {
      icon: "👨‍💻",
      title: "Expert Developers",
      description: "Team of certified developers skilled in React, TypeScript, Node.js & modern technologies.",
      delay: "0.2s"
    },
    {
      icon: "📊",
      title: "Proven Results",
      description: "100+ successful projects delivered with measurable ROI and client satisfaction.",
      delay: "0.3s"
    },
    {
      icon: "🔄",
      title: "Custom Solutions",
      description: "Tailored packages that fit your specific business needs and budget requirements.",
      delay: "0.4s"
    },
    {
      icon: "🏆",
      title: "Full Stack Services",
      description: "From website development to SEO, social media & ads - we handle everything.",
      delay: "0.5s"
    }
  ];

  // Technology Stack
  const techStack = [
    { icon: "⚛️", name: "React", description: "Frontend development" },
    { icon: "📘", name: "TypeScript", description: "Type-safe JavaScript" },
    { icon: "🟢", name: "Node.js", description: "Backend runtime" },
    { icon: "🍃", name: "MongoDB", description: "Database management" },
    { icon: "🎨", name: "Tailwind CSS", description: "Modern styling" },
    { icon: "🚀", name: "Next.js", description: "React framework" },
  ];

  // WhatsApp redirect for consultation
  const handleWhatsAppRedirect = (service: any) => {
    const message = `Hello! I'm interested in ${service.title} service (${service.price}). Please provide more details.`;
    window.open(`https://wa.me/97797073824881?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | Growth Service - Web Development & Digital Marketing</title>
        <meta
          name="description"
          content="Growth Service: Professional web development & digital marketing agency. Website development from ₹9,999, SEO from ₹7,779, Social Media from ₹4,449. 100+ clients served."
        />
      </Helmet>

      {/* === HERO SECTION === */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 text-white py-16 md:py-20 overflow-hidden">
        {/* Background Vectors */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-white rotate-45 blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-white rounded-lg blur-2xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Professional Web Development & Digital Marketing Agency
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-purple-100 leading-relaxed">
            We build stunning websites with React, TypeScript, Node.js & MongoDB. 
            Complete digital solutions starting from just ₹2,499.
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

      {/* === TECHNOLOGY STACK === */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Our Technology Stack</h2>
            <p className="text-gray-600 text-sm">Modern technologies we work with</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
                <div className="text-gray-500 text-xs mt-1">{tech.description}</div>
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
                  Founded with a mission to make professional web development and digital marketing 
                  accessible to every business, we've grown to become a trusted technology partner 
                  for companies across India.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our journey began by recognizing that small businesses needed enterprise-level 
                  technology solutions at affordable prices. We specialize in React, TypeScript, 
                  Node.js, and MongoDB development.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to have delivered 100+ websites and 200+ digital campaigns, 
                  helping businesses establish a strong online presence with measurable results.
                </p>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/portfolio"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-semibold transition-all duration-300 text-center text-sm"
                >
                  View Our Portfolio
                </Link>
                <a
                  href="https://wa.me/97797073824881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-5 py-3 rounded-lg font-semibold transition-all duration-300 text-center text-sm"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up delay-300">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-100 p-4 rounded-xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">{stat.number}</div>
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
              Empowering businesses with technology-driven solutions for digital success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide affordable, high-quality web development and digital marketing services 
                that help businesses establish a strong online presence and achieve sustainable growth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up delay-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become India's most trusted technology partner, known for delivering exceptional 
                web solutions and digital strategies that drive business success in the digital age.
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

      {/* === OUR SERVICES - UPDATED === */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Services & Pricing</h2>
            <p className="text-gray-600">Professional digital solutions at unbeatable prices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group animate-fade-in-up"
                style={{animationDelay: service.delay}}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">{service.description}</p>
                
                <div className="space-y-1 mb-3">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-xs">
                      <span className="text-green-500 mr-1">✓</span>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-xs text-gray-500 mb-3 italic">{service.details}</div>
                
                <div className="border-t pt-3 space-y-2">
                  <div className="text-center">
                    <div className="text-purple-600 font-bold text-base">{service.price}</div>
                    <div className="text-gray-500 text-xs line-through">{service.originalPrice}</div>
                  </div>

                  <button
                    onClick={() => handleWhatsAppRedirect(service)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1"
                  >
                    <span>💬</span>
                    <span>Get Quote on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 text-sm mb-4">
              * All prices are starting prices. Final pricing depends on specific requirements.
            </p>
            <a
              href="https://wa.me/97797073824881"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <span className="mr-2">💬</span>
              Get Custom Quote for Your Project
            </a>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600">What makes us the right choice for your digital needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((point, index) => (
              <div 
                key={index}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 group animate-fade-in-up"
                style={{animationDelay: point.delay}}
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl group-hover:scale-110 transition-transform">{point.icon}</div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR PROCESS === */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our 4-Step Process</h2>
            <p className="text-gray-600">Systematic approach ensuring success for every project</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-center group animate-fade-in-up"
                style={{animationDelay: step.delay}}
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{step.icon}</div>
                <div className="text-lg font-bold text-purple-600 mb-1">{step.step}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ACHIEVEMENTS === */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-purple-100">Milestones showcasing our commitment to excellence</p>
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
                <div className="text-purple-100 text-xs">{achievement.label}</div>
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
            <p className="text-gray-600">Success stories from businesses we've helped grow</p>
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
                  <p className="text-purple-600 text-xs">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA SECTION === */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Get professional web development and digital marketing services at unbeatable prices. 
            Start from just ₹2,499!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/97797073824881"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>💬</span>
              <span>Chat on WhatsApp</span>
            </a>
            
            <a
              href="tel:+919341436937"
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>📞</span>
              <span>Call: +91 93414 36937</span>
            </a>
          </div>
          
          <p className="mt-6 text-purple-200 text-sm">
            🚀 Website in 7-10 days • SEO from ₹7,779 • Social Media from ₹4,449
          </p>
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
