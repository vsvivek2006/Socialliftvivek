import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  MessageCircle, 
  Phone, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  Wrench,
  Globe,
  TrendingUp,
  Palette,
  Briefcase,
  Code,
  Database,
  Paintbrush,
  ShoppingCart,
  Mail,
  Users,
  Shield,
  Clock,
  Award
} from "lucide-react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hero Slides
  const heroSlides = [
    {
      title: "Transform Your Digital Presence",
      subtitle: "Professional Web & Marketing Solutions",
      description: "Custom websites, SEO optimization, and social media strategies to grow your business online.",
      cta: "Start Your Project",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Boost Your Online Visibility",
      subtitle: "Results-Driven Digital Marketing",
      description: "Comprehensive SEO and social media management to increase your reach and engagement.",
      cta: "Get Free Audit",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Modern Web Solutions",
      subtitle: "Built with Latest Technologies",
      description: "Fast, responsive websites using React, Node.js, and cutting-edge development practices.",
      cta: "View Services",
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  // Services Categories
  const serviceCategories = [
    {
      title: "Web Development",
      icon: <Globe className="h-8 w-8" />,
      services: [
        "Custom Website Design",
        "E-commerce Solutions",
        "Responsive Development",
        "Website Maintenance"
      ],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="h-8 w-8" />,
      services: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Strategy",
        "PPC Campaigns"
      ],
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Branding",
      icon: <Palette className="h-8 w-8" />,
      services: [
        "Logo & Identity",
        "Brand Strategy",
        "Graphic Design",
        "Marketing Materials"
      ],
      color: "from-orange-500 to-yellow-400"
    },
    {
      title: "Business Solutions",
      icon: <Briefcase className="h-8 w-8" />,
      services: [
        "Lead Generation",
        "CRM Setup",
        "Analytics & Reporting",
        "Consultation"
      ],
      color: "from-green-500 to-emerald-400"
    }
  ];

  // Our Services
  const ourServices = [
    {
      title: "Website Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: ["Mobile-First Design", "Fast Loading", "SEO Optimized", "Easy CMS"],
      icon: <Code className="h-10 w-10" />
    },
    {
      title: "SEO Services",
      description: "Improve search rankings with comprehensive on-page and off-page optimization strategies.",
      features: ["Keyword Research", "Technical SEO", "Content Creation", "Performance Tracking"],
      icon: <Target className="h-10 w-10" />
    },
    {
      title: "Social Media Management",
      description: "Complete social media strategy and management to build your brand presence.",
      features: ["Content Planning", "Community Management", "Campaign Analysis", "Growth Strategy"],
      icon: <Users className="h-10 w-10" />
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store setup with payment integration and inventory management.",
      features: ["Secure Payments", "Product Management", "Order Processing", "Analytics Dashboard"],
      icon: <ShoppingCart className="h-10 w-10" />
    },
    {
      title: "Content Marketing",
      description: "Strategic content creation to engage your audience and drive conversions.",
      features: ["Blog Writing", "Video Content", "Infographics", "Content Strategy"],
      icon: <Paintbrush className="h-10 w-10" />
    },
    {
      title: "Email Marketing",
      description: "Targeted email campaigns to nurture leads and retain customers.",
      features: ["Automation", "Segmentation", "Analytics", "Template Design"],
      icon: <Mail className="h-10 w-10" />
    }
  ];

  // Our Process
  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We understand your business goals and target audience.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Create a customized plan with clear objectives and timeline.",
      icon: "📋"
    },
    {
      step: "03",
      title: "Execution",
      description: "Our expert team implements the approved strategy.",
      icon: "🚀"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and improvement for best results.",
      icon: "📊"
    }
  ];

  // Our Clients
  const clients = [
    { name: "TechCorp Solutions", industry: "Technology", logo: "💻" },
    { name: "HealthPlus Clinic", industry: "Healthcare", logo: "🏥" },
    { name: "EduSmart Academy", industry: "Education", logo: "🎓" },
    { name: "Foodie's Delight", industry: "Restaurant", logo: "🍽️" },
    { name: "StyleHub Fashion", industry: "Retail", logo: "👗" },
    { name: "AutoCare Services", industry: "Automotive", logo: "🚗" },
    { name: "GreenLife Organic", industry: "Wellness", logo: "🌿" },
    { name: "BuildRight Constructions", industry: "Construction", logo: "🏗️" }
  ];

  // Technology Stack
  const technologies = [
    { name: "React.js", type: "Frontend", icon: "⚛️" },
    { name: "Node.js", type: "Backend", icon: "🟢" },
    { name: "MongoDB", type: "Database", icon: "🍃" },
    { name: "Next.js", type: "Framework", icon: "▲" },
    { name: "Tailwind CSS", type: "Styling", icon: "🎨" },
    { name: "TypeScript", type: "Language", icon: "📘" },
    { name: "Express.js", type: "Backend", icon: "🚂" },
    { name: "GraphQL", type: "API", icon: "📊" }
  ];

  // Testimonials - Enhanced with larger text
  const testimonials = [
    {
      text: "Their team delivered exactly what we needed on time. Professional and highly skilled! Our website traffic increased by 300% in just 3 months.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Solutions",
      rating: 5
    },
    {
      text: "The social media strategy they implemented helped us double our online engagement and generate 50% more leads than before. Highly recommended!",
      author: "Rajesh Kumar",
      role: "Business Owner",
      company: "HealthPlus Clinic",
      rating: 5
    },
    {
      text: "Excellent SEO work! Our organic traffic grew exponentially and we're now ranking #1 for our main keywords. The team is responsive and knowledgeable.",
      author: "Priya Sharma",
      role: "Brand Manager",
      company: "StyleHub Fashion",
      rating: 5
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Expert Team",
      description: "Certified professionals with years of industry experience",
      icon: <Shield className="h-10 w-10" />
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround without compromising on quality",
      icon: <Zap className="h-10 w-10" />
    },
    {
      title: "Custom Solutions",
      description: "Tailored strategies for your unique business needs",
      icon: <Target className="h-10 w-10" />
    },
    {
      title: "Ongoing Support",
      description: "Continuous support and maintenance services",
      icon: <Wrench className="h-10 w-10" />
    }
  ];

  // Fixed WhatsApp Numbers
  const whatsappNumber = "9779707382481";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Growth%20Service,%20I%20want%20to%20discuss%20my%20project.`;
  const phoneNumber = "+919341436937";

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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Growth Service | Professional Digital Solutions Agency</title>
        <meta 
          name="description" 
          content="Professional web development and digital marketing agency. Custom websites, SEO, social media management, and complete digital solutions for business growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#4F46E5" />
      </Helmet>

      {/* === HERO SECTION === */}
      <section className="relative min-h-[90vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0 block' 
                    : 'absolute inset-0 opacity-0 translate-y-4 hidden'
                }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight tracking-tight">
                  {slide.title}
                </h1>
                <div className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-blue-300">
                  {slide.subtitle}
                </div>
                <p className="text-lg sm:text-xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className={`inline-flex items-center justify-center bg-gradient-to-r ${slide.gradient} hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-h-[56px]`}
                  >
                    {slide.cta}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                  
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 min-h-[56px]"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Free Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Navigation */}
          <div className="mt-12 md:mt-16 flex items-center justify-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* === SERVICE CATEGORIES === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {serviceCategories.map((category, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">{category.title}</h3>
                <ul className="space-y-3 md:space-y-4">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm md:text-base">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR PROCESS === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 text-center h-full hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl md:text-4xl mb-4">{item.icon}</div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">{item.step}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && !isMobile && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-blue-200 transform translate-x-4">
                    <div className="absolute right-0 top-1/2 transform translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TECHNOLOGY STACK === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Technology</span> Stack
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tools and technologies for cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl p-4 md:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="font-bold text-gray-900 text-base md:text-lg mb-1">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR CLIENTS === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Clients</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-4 md:p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  {client.logo}
                </div>
                <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === DETAILED SERVICES === */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We <span className="text-orange-600">Offer</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital services for your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ourServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 pt-1">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BENEFITS === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-blue-300">Us</span>
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto">
              We combine expertise with dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-white/20 rounded-full mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS - Enhanced Size === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client <span className="text-purple-600">Testimonials</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients say about working with us
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-6 md:p-12 shadow-2xl">
              <div className="text-center">
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 md:h-10 md:w-10 text-yellow-400 fill-current mx-1" />
                  ))}
                </div>
                
                {/* Testimonial Text - Larger */}
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 mb-8 md:mb-12 italic leading-relaxed font-medium px-4">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                {/* Author Info */}
                <div className="space-y-2">
                  <p className="font-bold text-gray-900 text-lg md:text-xl">{testimonials[currentTestimonial].author}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                  <p className="text-purple-600 font-semibold text-lg">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex items-center justify-center mt-8 space-x-4">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-2 rounded-full bg-white hover:bg-gray-100 shadow-md transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>
                
                <div className="flex space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-purple-600 w-8' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="p-2 rounded-full bg-white hover:bg-gray-100 shadow-md transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 md:mb-12 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your digital goals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-h-[60px]"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Chat on WhatsApp
            </a>
            
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-h-[60px]"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call Us Now
            </a>
          </div>
          
          <div className="pt-8 md:pt-12 border-t border-white/20">
            <p className="text-blue-200 mb-6 md:mb-8 text-lg">We serve clients across India and globally</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-base md:text-lg text-blue-300">
              <div className="flex items-center gap-2">
                <span className="text-xl">📍</span>
                <span>Pan India Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === MOBILE OPTIMIZATION STYLES === */}
      <style jsx>{`
        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          /* Improve touch targets */
          button, a {
            min-height: 48px;
            min-width: 48px;
          }
          
          /* Prevent text overflow */
          h1, h2, h3, p {
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
          
          /* Better spacing for mobile */
          section {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Remove tap highlight on iOS */
          * {
            -webkit-tap-highlight-color: transparent;
          }
          
          /* Improve button readability */
          .text-3xl {
            font-size: 2rem;
            line-height: 2.5rem;
          }
          
          /* Better testimonial text size */
          .text-3xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Prevent horizontal overflow */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Home;
