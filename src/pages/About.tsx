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

  // Our Services (without prices)
  const services = [
    {
      icon: "💻",
      title: "Website Development",
      description: "Custom website development with modern technologies like React, TypeScript, Node.js, and MongoDB.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Mobile First"
      ],
      delay: "0s"
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      description: "Comprehensive search engine optimization to improve your online visibility and rankings.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Content Strategy"
      ],
      delay: "0.1s"
    },
    {
      icon: "📱",
      title: "Social Media Management",
      description: "Complete social media strategy and management to build your brand presence.",
      features: [
        "Content Planning",
        "Community Management",
        "Performance Analytics",
        "Growth Strategy"
      ],
      delay: "0.2s"
    },
    {
      icon: "🎯",
      title: "Digital Marketing",
      description: "Targeted digital campaigns to reach your audience and drive conversions.",
      features: [
        "PPC Campaigns",
        "Social Media Ads",
        "Email Marketing",
        "Lead Generation"
      ],
      delay: "0.3s"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience.",
      features: [
        "Wireframing",
        "Prototyping",
        "User Testing",
        "Visual Design"
      ],
      delay: "0.4s"
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      description: "Data-driven insights and performance tracking for continuous improvement.",
      features: [
        "Performance Analytics",
        "ROI Tracking",
        "Custom Reports",
        "Strategy Optimization"
      ],
      delay: "0.5s"
    }
  ];

  // Our Team
  const team = [
    {
      name: "Arjun Patel",
      role: "Lead Developer",
      expertise: "React, Node.js, TypeScript",
      description: "Specializes in building scalable web applications with modern frameworks.",
      icon: "👨‍💻"
    },
    {
      name: "Priya Sharma",
      role: "SEO Specialist",
      expertise: "SEO Strategy, Content Marketing",
      description: "Expert in improving search rankings and driving organic traffic.",
      icon: "🔍"
    },
    {
      name: "Rohan Kumar",
      role: "UI/UX Designer",
      expertise: "Figma, Adobe Suite, Prototyping",
      description: "Creates intuitive and visually appealing user interfaces.",
      icon: "🎨"
    },
    {
      name: "Meera Singh",
      role: "Digital Marketing Manager",
      expertise: "Social Media, PPC, Analytics",
      description: "Develops effective digital strategies for business growth.",
      icon: "📈"
    }
  ];

  // Work process
  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We understand your business goals, target audience, and requirements.",
      icon: "🔍",
      delay: "0s"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Create a customized plan with clear objectives and timeline.",
      icon: "📋",
      delay: "0.2s"
    },
    {
      step: "03",
      title: "Development & Execution",
      description: "Our expert team implements the approved strategy using best practices.",
      icon: "⚡",
      delay: "0.4s"
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "Deployment followed by continuous monitoring and improvement.",
      icon: "🚀",
      delay: "0.6s"
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      icon: "👨‍💻",
      title: "Expert Team",
      description: "Certified professionals with years of industry experience.",
      delay: "0s"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality.",
      delay: "0.1s"
    },
    {
      icon: "🎯",
      title: "Custom Solutions",
      description: "Tailored strategies for your unique business needs.",
      delay: "0.2s"
    },
    {
      icon: "🔄",
      title: "Continuous Support",
      description: "Ongoing maintenance and support for long-term success.",
      delay: "0.3s"
    },
    {
      icon: "📊",
      title: "Data-Driven Approach",
      description: "Decisions based on analytics and performance metrics.",
      delay: "0.4s"
    },
    {
      icon: "🏆",
      title: "Proven Track Record",
      description: "100+ successful projects with measurable results.",
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
    { icon: "▲", name: "Next.js", description: "React framework" },
    { icon: "🚂", name: "Express.js", description: "Backend framework" },
    { icon: "📊", name: "GraphQL", description: "API query language" }
  ];

  // Client Industries
  const industries = [
    { name: "E-commerce", icon: "🛒", count: "30+" },
    { name: "Healthcare", icon: "🏥", count: "25+" },
    { name: "Education", icon: "🎓", count: "20+" },
    { name: "Technology", icon: "💻", count: "35+" },
    { name: "Hospitality", icon: "🏨", count: "15+" },
    { name: "Retail", icon: "🏪", count: "25+" }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "The team delivered an exceptional website that perfectly represents our brand. Their attention to detail and technical expertise is impressive.",
      author: "Rajesh Kumar",
      role: "CEO, TechCorp Solutions",
      delay: "0s"
    },
    {
      text: "Our organic traffic increased significantly after implementing their SEO strategy. Highly recommended for digital marketing.",
      author: "Priya Sharma",
      role: "Marketing Director, HealthPlus",
      delay: "0.1s"
    },
    {
      text: "Professional, reliable, and truly committed to our success. They've been our digital partner for over 2 years.",
      author: "Amit Patel",
      role: "Owner, StyleHub Fashion",
      delay: "0.2s"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | Growth Service - Digital Solutions Agency</title>
        <meta
          name="description"
          content="Learn about Growth Service - a professional web development and digital marketing agency. Our story, values, team, and approach to digital success."
        />
      </Helmet>

      {/* === HERO SECTION === */}
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-20 md:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-white rounded-lg blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Building Digital <span className="text-blue-300">Success</span> Stories
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            We are a passionate team of developers, designers, and digital strategists 
            committed to helping businesses thrive in the digital world.
          </p>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:bg-white/10"
                style={{animationDelay: stat.delay}}
              >
                <div className="text-2xl mb-3">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR STORY === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Our Story</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Founded with a vision to bridge the gap between businesses and technology, 
                  Growth Service began as a small team of passionate developers and digital 
                  marketers. We recognized that many businesses struggled to establish a 
                  strong online presence due to complex technology and high costs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we've grown into a full-service digital agency, serving clients 
                  across various industries. Our journey has been fueled by our commitment 
                  to excellence, innovation, and building lasting relationships with our clients.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe in the power of technology to transform businesses. Our approach 
                  combines technical expertise with creative thinking to deliver solutions 
                  that not only meet but exceed expectations.
                </p>
              </div>
              
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">💬</span>
                  Start Your Project
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 4).map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-white p-4 rounded-xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-xl font-bold text-blue-600 mb-1">{stat.number}</div>
                      <div className="text-gray-700 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-white rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Serving Across India</h3>
                  <p className="text-gray-600 text-sm">
                    We work with businesses pan-India, delivering consistent quality 
                    and exceptional service regardless of location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === MISSION & VISION === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape our work and client relationships
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance online presence, and deliver measurable results. We combine technical 
                expertise with creative strategy to help our clients succeed in the digital landscape.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted digital partner for businesses seeking to transform 
                their online presence. We aim to lead the industry in innovation, quality, 
                and client satisfaction while making advanced digital solutions accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === OUR TEAM === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to your digital success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{member.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-2">{member.role}</div>
                <div className="text-sm text-gray-500 mb-3">{member.expertise}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CORE VALUES === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 text-center group"
                style={{animationDelay: value.delay}}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR SERVICES === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions for your business growth
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern tools and frameworks for cutting-edge solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group hover:bg-blue-50"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
                <div className="text-gray-500 text-xs mt-1">{tech.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === OUR PROCESS === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring success for every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center group h-full">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">{step.icon}</div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">{step.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-4 h-0.5 bg-blue-200 transform translate-x-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CLIENT INDUSTRIES === */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have experience working with diverse sectors across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center group hover:bg-purple-50"
              >
                <div className="text-2xl mb-2">{industry.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{industry.name}</div>
                <div className="text-gray-500 text-xs mt-1">{industry.count} Clients</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Growth Service?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets us apart as your digital partner
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
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Success stories from businesses we've helped grow
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
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA SECTION === */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Digital Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business online
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/97797073824881"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-lg"
            >
              <span>💬</span>
              <span>Schedule Free Consultation</span>
            </a>
            
            <Link
              to="/portfolio"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-lg"
            >
              <span>📁</span>
              <span>View Our Work</span>
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 mb-6">Trusted by businesses across India</p>
            <div className="flex flex-wrap justify-center gap-6 text-blue-300">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Pan India Service</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⏰</span>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💼</span>
                <span>Expert Team</span>
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
