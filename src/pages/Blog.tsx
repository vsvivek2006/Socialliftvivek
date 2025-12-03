import React from 'react';
import { Helmet } from 'react-helmet';
import { Calendar, User, Clock, ArrowRight, Search, Tag, Code, Globe, TrendingUp, Smartphone, Mail, DollarSign } from 'lucide-react';

const Blog: React.FC = () => {
  // Sample blog posts data - Updated for Growth Service
  const blogPosts = [
    {
      id: 1,
      title: "Website Development Cost in 2024: Complete Guide",
      excerpt: "How much does a professional website cost? We break down pricing for React, Node.js, and custom development projects.",
      category: "Web Development",
      readTime: "6 min read",
      date: "2024-01-20",
      author: "Growth Service Team",
      image: "💻",
      highlight: true
    },
    {
      id: 2,
      title: "SEO Pricing Guide: What You Get for ₹7,779/month",
      excerpt: "Complete breakdown of our SEO services including 4 monthly reports, 4 blogs, and 5-10 keyword optimization.",
      category: "SEO",
      readTime: "7 min read",
      date: "2024-01-18",
      author: "SEO Experts",
      image: "🔍"
    },
    {
      id: 3,
      title: "Social Media Management on a Budget: ₹4,449/month",
      excerpt: "Learn how small businesses can afford professional social media management with content calendars and strategy.",
      category: "Social Media",
      readTime: "5 min read",
      date: "2024-01-16",
      author: "Social Media Team",
      image: "📱"
    },
    {
      id: 4,
      title: "Why Choose React + TypeScript for Your Website?",
      excerpt: "Benefits of modern web development with React, TypeScript, Node.js, and MongoDB over traditional WordPress sites.",
      category: "Technology",
      readTime: "8 min read",
      date: "2024-01-14",
      author: "Tech Team",
      image: "⚛️"
    },
    {
      id: 5,
      title: "Google My Business Setup Guide for ₹2,499",
      excerpt: "Step-by-step guide to setting up and optimizing your GMB profile for maximum local visibility.",
      category: "Local SEO",
      readTime: "4 min read",
      date: "2024-01-12",
      author: "Local SEO Team",
      image: "🏢"
    },
    {
      id: 6,
      title: "Tour & Travel Website Development in 10 Days",
      excerpt: "Case study: How we built a complete travel booking website for ₹14,999 with React and Node.js.",
      category: "Case Study",
      readTime: "9 min read",
      date: "2024-01-10",
      author: "Development Team",
      image: "✈️"
    },
    {
      id: 7,
      title: "Meta Ads Management: Is ₹9,999/month Worth It?",
      excerpt: "Analyzing ROI from professional Facebook and Instagram ads management for small businesses.",
      category: "Paid Ads",
      readTime: "6 min read",
      date: "2024-01-08",
      author: "Ads Team",
      image: "🎯"
    },
    {
      id: 8,
      title: "Guest House Website with Payment Gateway: ₹12,999",
      excerpt: "Complete solution for hotel and guest house websites including booking system and online payments.",
      category: "Web Development",
      readTime: "7 min read",
      date: "2024-01-06",
      author: "Development Team",
      image: "🏨"
    }
  ];

  const categories = [
    "All Posts",
    "Web Development",
    "SEO",
    "Social Media",
    "Technology",
    "Local SEO",
    "Case Study",
    "Paid Ads",
    "Business Growth",
    "Digital Marketing"
  ];

  const popularPosts = [
    {
      title: "Website in 7 Days: Our Process",
      views: "3.2K"
    },
    {
      title: "SEO vs Social Media: Which First?",
      views: "2.8K"
    },
    {
      title: "React vs WordPress 2024",
      views: "4.1K"
    }
  ];

  const serviceHighlights = [
    {
      icon: "💻",
      title: "Website Development",
      price: "₹9,999",
      description: "React + TypeScript websites"
    },
    {
      icon: "🔍",
      title: "SEO Package",
      price: "₹7,779/month",
      description: "4 reports + 4 blogs monthly"
    },
    {
      icon: "📱",
      title: "Social Media",
      price: "₹4,449/month",
      description: "Complete management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Blog - Web Development & Digital Marketing Insights | Growth Service</title>
        <meta 
          name="description" 
          content="Expert insights on web development, SEO, social media, and digital marketing strategies. Learn about React, TypeScript, Node.js development and growth strategies." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Growth Insights</h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Expert articles on web development, SEO, and digital marketing strategies for business growth
          </p>
          
          {/* Service Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {serviceHighlights.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl mb-2">{service.icon}</div>
                <div className="font-bold text-lg">{service.title}</div>
                <div className="text-yellow-300 font-bold">{service.price}</div>
                <div className="text-purple-200 text-sm">{service.description}</div>
              </div>
            ))}
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search web development, SEO, or digital marketing topics..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-300"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    index === 0 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                    post.highlight ? 'md:col-span-2 border-2 border-purple-500' : ''
                  }`}
                >
                  <div className="p-6">
                    {/* Category Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </span>
                      <span className="text-4xl">{post.image}</span>
                    </div>

                    {/* Post Content */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Read More Button */}
                    <a
                      href={`/blog/${post.id}`}
                      className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group-hover:scale-105"
                    >
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Pricing Callout */}
            <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Transparent Pricing</h3>
              <p className="mb-4">All our services come with clear, upfront pricing. No hidden fees!</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <div className="font-bold">Website Dev</div>
                  <div className="text-xl font-bold">₹9,999</div>
                  <div className="text-sm">Starting</div>
                </div>
                <div className="bg-white/20 p-3 rounded-lg">
                  <div className="font-bold">SEO</div>
                  <div className="text-xl font-bold">₹7,779</div>
                  <div className="text-sm">/month</div>
                </div>
                <div className="bg-white/20 p-3 rounded-lg">
                  <div className="font-bold">Social Media</div>
                  <div className="text-xl font-bold">₹4,449</div>
                  <div className="text-sm">/month</div>
                </div>
                <div className="bg-white/20 p-3 rounded-lg">
                  <div className="font-bold">GMB Setup</div>
                  <div className="text-xl font-bold">₹2,499</div>
                  <div className="text-sm">One-time</div>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* About Blog */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">About Growth Service Blog</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Welcome to the Growth Service blog! We share practical insights on web development, 
                SEO, and digital marketing to help your business grow affordably.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                <p className="text-purple-700 text-sm font-medium">
                  💡 Special: Get website in 7-10 days for ₹9,999
                </p>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Most Popular</h3>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="flex items-start space-x-3 group cursor-pointer hover:bg-purple-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">{post.views} reads</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Tech Stack</h3>
              <div className="space-y-3">
                {[
                  { icon: "⚛️", name: "React", desc: "Frontend" },
                  { icon: "📘", name: "TypeScript", desc: "Type Safety" },
                  { icon: "🟢", name: "Node.js", desc: "Backend" },
                  { icon: "🍃", name: "MongoDB", desc: "Database" }
                ].map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="text-xl">{tech.icon}</div>
                    <div>
                      <div className="font-medium text-sm">{tech.name}</div>
                      <div className="text-xs text-gray-500">{tech.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Need a Website?</h3>
              <p className="text-purple-100 text-sm mb-4">
                Get a professional website in 7-10 days starting from ₹9,999
              </p>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/97797073824881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-all duration-200 text-center"
                >
                  💬 WhatsApp Now
                </a>
                <a 
                  href="tel:+919341436937"
                  className="block w-full bg-white text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  📞 Call: +91 93414 36937
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Digital Growth?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get website development, SEO, and digital marketing services at unbeatable prices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-xl">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-bold">Website in 7-10 Days</div>
              <div className="text-sm text-gray-300">React + TypeScript</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <div className="text-2xl mb-2">💰</div>
              <div className="font-bold">Starting ₹2,499</div>
              <div className="text-sm text-gray-300">Transparent Pricing</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              <div className="text-2xl mb-2">🏆</div>
              <div className="font-bold">100+ Projects</div>
              <div className="text-sm text-gray-300">Proven Results</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/97797073824881?text=Hello%20Growth%20Service,%20I%20want%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              💬 Get Free Consultation
            </a>
            <a
              href="tel:+919341436937"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
