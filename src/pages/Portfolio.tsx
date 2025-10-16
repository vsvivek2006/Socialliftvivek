import React, { useState, useMemo } from 'react';
import { ExternalLink, Filter, Star, TrendingUp, Users, Clock, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const filters = ['All', 'Branding', 'Digital Marketing', 'Websites', 'E-commerce'];

  const projects = [
    {
      id: 1,
      title: 'TechStart Solutions',
      category: 'Websites',
      description: 'Complete website redesign for a technology startup focusing on user experience and conversion optimization',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['WordPress', 'Responsive', 'SEO'],
      results: '300% increase in conversions',
      duration: '4 Weeks',
      client: 'Tech Startup',
      rating: 5
    },
    {
      id: 2,
      title: 'Fashion Hub Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity design for fashion retailer including logo, packaging, and brand guidelines',
      image: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Logo Design', 'Brand Guidelines', 'Packaging'],
      results: 'Brand recognition increased by 250%',
      duration: '6 Weeks',
      client: 'Fashion Retail',
      rating: 5
    },
    {
      id: 3,
      title: 'FoodieDelight E-commerce',
      category: 'E-commerce',
      description: 'Custom Shopify store for food delivery service with integrated payment and mobile app',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Shopify', 'Payment Gateway', 'Mobile App'],
      results: '500% increase in online orders',
      duration: '8 Weeks',
      client: 'Food Delivery',
      rating: 5
    },
    {
      id: 4,
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Comprehensive social media and PPC campaign strategy for local business expansion',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Facebook Ads', 'Google Ads', 'SEO'],
      results: '400% ROI on ad spend',
      duration: '12 Weeks',
      client: 'Local Business',
      rating: 5
    }
  ];

  const filteredProjects = useMemo(() => 
    activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeFilter),
    [activeFilter]
  );

  const stats = [
    { icon: TrendingUp, value: '100+', label: 'Projects Completed' },
    { icon: Users, value: '95%', label: 'Client Satisfaction' },
    { icon: Star, value: '300%', label: 'Average ROI Increase' },
    { icon: Clock, value: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "TechStart Solutions",
      text: "The team transformed our online presence completely. The website redesign resulted in 300% more conversions!",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Priya Patel",
      company: "Fashion Hub",
      text: "Their branding expertise helped us stand out in a crowded market. Brand recognition skyrocketed!",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Amit Kumar",
      company: "FoodieDelight",
      text: "The e-commerce store they built increased our orders by 500%. Exceptional work and support!",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const TestimonialCarousel = () => (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear what our partners have to say
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-pink-600 font-medium">{testimonials[currentTestimonial].company}</p>
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
  );

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Portfolio | Digital Marketing Agency</title>
        <meta
          name="description"
          content="Explore our portfolio showcasing branding, web development, e-commerce, and digital marketing projects. See how we help businesses grow."
        />
        <meta
          name="keywords"
          content="digital marketing portfolio, SEO projects, web design, branding projects, e-commerce development, website redesign, Shopify store, social media campaigns"
        />
      </Helmet>

      {/* Enhanced Hero Section with Pink Color Scheme */}
      <section className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-white">Creative Work</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-pink-100 leading-relaxed">
              Discover how we've helped businesses achieve remarkable growth through innovative digital solutions and strategic marketing campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#portfolio"
                className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <span>Explore Our Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="https://wa.me/919521281509"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filter Section */}
      <section id="portfolio" className="py-6 bg-white sticky top-0 z-50 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-pink-600" />
              <span className="text-base font-semibold text-gray-700">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-pink-600">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {activeFilter === 'All' 
                ? 'Showcasing our diverse range of successful projects across all categories'
                : `Specialized ${activeFilter} projects delivering exceptional results`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      👤 {project.client}
                    </span>
                    <span>⏱️ {project.duration}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-xl mb-4 border border-green-200">
                    <p className="text-green-700 font-semibold text-sm flex items-center">
                      📈 {project.results}
                    </p>
                  </div>
                  
                  <a
                    href={`https://wa.me/919521281509?text=Hello,%20I%20want%20to%20discuss%20a%20project%20similar%20to%20${encodeURIComponent(project.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Discuss Similar Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Real results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-pink-600" />
                </div>
                <div className="text-3xl font-bold text-pink-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialCarousel />

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-pink-100 leading-relaxed">
            Let's discuss how we can help you achieve outstanding results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919521281509"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Your Project Today</span>
            </a>
            <a
              href="tel:+919521281509"
              className="border-2 border-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-lg font-bold transition-all duration-300"
            >
              📞 Call Us Now
            </a>
          </div>
          <p className="mt-6 text-pink-200">
            Get free consultation within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;