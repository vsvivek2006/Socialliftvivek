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
  ShoppingCart,
  Users,
  Mail
} from "lucide-react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
      description: "Fast, responsive websites using modern technologies for optimal performance.",
      cta: "View Services",
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  // Services Categories
  const serviceCategories = [
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
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
      icon: <TrendingUp className="h-6 w-6" />,
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
      icon: <Palette className="h-6 w-6" />,
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
      icon: <Briefcase className="h-6 w-6" />,
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
      description: "Custom websites built with modern technologies for optimal performance.",
      features: ["Mobile-First Design", "Fast Loading", "SEO Optimized", "Easy CMS"],
      icon: <Code className="h-8 w-8" />
    },
    {
      title: "SEO Services",
      description: "Improve search rankings with comprehensive optimization strategies.",
      features: ["Keyword Research", "Technical SEO", "Content Creation", "Tracking"],
      icon: <Target className="h-8 w-8" />
    },
    {
      title: "Social Media Management",
      description: "Complete social media strategy to build your brand presence.",
      features: ["Content Planning", "Community Management", "Analysis", "Growth"],
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "E-commerce Solutions",
      description: "Online store setup with payment integration and management.",
      features: ["Secure Payments", "Product Management", "Order Processing", "Dashboard"],
      icon: <ShoppingCart className="h-8 w-8" />
    },
    {
      title: "Content Marketing",
      description: "Strategic content creation to engage audience and drive conversions.",
      features: ["Blog Writing", "Video Content", "Infographics", "Strategy"],
      icon: <Palette className="h-8 w-8" />
    },
    {
      title: "Email Marketing",
      description: "Targeted email campaigns to nurture leads and retain customers.",
      features: ["Automation", "Segmentation", "Analytics", "Templates"],
      icon: <Mail className="h-8 w-8" />
    }
  ];

  // Our Process
  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understand your business goals and audience.",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Create customized plan with objectives.",
      icon: "📋"
    },
    {
      step: "03",
      title: "Execution",
      description: "Implement approved strategy.",
      icon: "🚀"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and improvement.",
      icon: "📊"
    }
  ];

  // TRUSTED CLIENTS - Updated with your provided names
  const trustedClients = [
    "Fragsook",
    "Digimarcy", 
    "pujahelp.in",
    "Radhikasadan Guest House",
    "360Egaleweb",
    "Dizigrow",
    "ceclift",
    "TechCorp Solutions",
    "HealthPlus Clinic",
    "EduSmart Academy",
    "Foodie's Delight",
    "StyleHub Fashion",
    "AutoCare Services",
    "GreenLife Organic",
    "BuildRight Constructions"
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

  // Testimonials - Optimized for mobile
  const testimonials = [
    {
      text: "Their team delivered exactly what we needed on time. Professional and highly skilled!",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Solutions"
    },
    {
      text: "Our website traffic increased by 300% in just 3 months. Excellent SEO work!",
      author: "Rajesh Kumar",
      role: "Business Owner",
      company: "HealthPlus Clinic"
    },
    {
      text: "The social media strategy helped us double our online engagement.",
      author: "Priya Sharma",
      role: "Brand Manager",
      company: "StyleHub Fashion"
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Expert Team",
      description: "Certified professionals with industry experience",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Custom Solutions",
      description: "Tailored strategies for your business needs",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Ongoing Support",
      description: "Continuous support and maintenance",
      icon: <Wrench className="h-6 w-6" />
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
    }, 4000);
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
          content="Professional web development and digital marketing agency. Custom websites, SEO, social media management, and complete digital solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>

      {/* === HERO SECTION === */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'absolute inset-0 opacity-0 translate-y-4'
                }`}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                  {slide.title}
                </h1>
                <div className="text-lg sm:text-xl md:text-2xl text-blue-300 font-medium mb-4 md:mb-6">
                  {slide.subtitle}
                </div>
                <p className="text-sm sm:text-base text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/contact"
                    className={`bg-gradient-to-r ${slide.gradient} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all hover:scale-105`}
                  >
                    {slide.cta}
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all"
                  >
                    Free Consultation
                  </a>
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
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white w-6' 
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICE CATEGORIES === */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our <span className="text-purple-600">Services</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-4 md:p-6 hover:shadow-md transition-all">
                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TRUSTED CLIENTS SECTION === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Trusted By <span className="text-purple-600">Clients</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              We've helped these businesses grow their digital presence
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {trustedClients.map((client, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 md:p-4 text-center hover:bg-white hover:shadow-sm transition-all">
                <div className="text-sm md:text-base font-semibold text-gray-800">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR PROCESS === */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 md:p-6 text-center h-full">
                  <div className="text-2xl md:text-3xl mb-3">{item.icon}</div>
                  <div className="text-xs font-semibold text-blue-600 mb-1">{item.step}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === DETAILED SERVICES === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              What We <span className="text-orange-600">Offer</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital services for your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {ourServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-4 md:p-6 hover:shadow-md transition-all">
                <div className="flex items-start mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BENEFITS === */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Why Choose <span className="text-blue-300">Us</span>
            </h2>
            <p className="text-sm sm:text-base text-blue-200 max-w-2xl mx-auto">
              We combine expertise with dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center">
                <div className="inline-flex p-2 bg-white/20 rounded-full mb-3">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1">{benefit.title}</h3>
                <p className="text-blue-100 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Client <span className="text-purple-600">Testimonials</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Hear what our clients say about working with us
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 md:p-8 shadow-lg">
            <div className="text-center">
              <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
              <p className="text-base md:text-lg text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonials[currentTestimonial].author}</p>
                <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].role}</p>
                <p className="text-purple-600 font-medium">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base md:text-lg text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 md:mb-12">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              Chat on WhatsApp
            </a>
            
            <a
              href={`tel:${phoneNumber}`}
              className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              Call Us Now
            </a>
          </div>
          
          <div className="pt-6 md:pt-8 border-t border-white/20">
            <p className="text-blue-200 mb-4 text-sm md:text-base">We serve clients across India and globally</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-blue-300">
              <div className="flex items-center gap-1">
                <span>📍</span>
                <span>Pan India Service</span>
              </div>
              <div className="flex items-center gap-1">
                <span>⏰</span>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-1">
                <span>💼</span>
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Optimization */}
      <style jsx>{`
        @media (max-width: 640px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
          
          button, a {
            min-height: 44px;
          }
          
          h1 {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          
          h2 {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
          
          p {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
