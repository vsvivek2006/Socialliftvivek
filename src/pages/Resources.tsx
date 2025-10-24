import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Download, Search, Filter, BookOpen, Video, FileText, Tool, ArrowRight, ExternalLink } from 'lucide-react';

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', count: 28 },
    { id: 'guides', name: 'Guides & Ebooks', count: 12 },
    { id: 'tools', name: 'Free Tools', count: 8 },
    { id: 'templates', name: 'Templates', count: 5 },
    { id: 'webinars', name: 'Webinars', count: 3 }
  ];

  const resources = [
    {
      id: 1,
      title: "Complete Digital Marketing Strategy Guide 2024",
      description: "Step-by-step guide to creating a winning digital marketing strategy for your business in 2024.",
      category: 'guides',
      type: 'ebook',
      icon: '📚',
      downloadCount: '2.4K',
      format: 'PDF',
      size: '2.1 MB',
      link: '#'
    },
    {
      id: 2,
      title: "SEO Audit Checklist Template",
      description: "Comprehensive checklist to perform complete SEO audit for your website.",
      category: 'templates',
      type: 'template',
      icon: '📋',
      downloadCount: '1.8K',
      format: 'Excel',
      size: '0.8 MB',
      link: '#'
    },
    {
      id: 3,
      title: "Social Media Content Calendar 2024",
      description: "Ready-to-use content calendar template for planning your social media posts.",
      category: 'templates',
      type: 'template',
      icon: '📅',
      downloadCount: '3.2K',
      format: 'Google Sheets',
      size: '1.2 MB',
      link: '#'
    },
    {
      id: 4,
      title: "Keyword Research Masterclass",
      description: "Video masterclass on advanced keyword research techniques for SEO.",
      category: 'webinars',
      type: 'video',
      icon: '🎬',
      downloadCount: '1.1K',
      format: 'MP4',
      size: '450 MB',
      link: '#'
    },
    {
      id: 5,
      title: "ROI Calculator Tool",
      description: "Calculate your marketing ROI and campaign performance with this free tool.",
      category: 'tools',
      type: 'tool',
      icon: '🧮',
      downloadCount: '4.5K',
      format: 'Web Tool',
      size: 'Online',
      link: '#'
    },
    {
      id: 6,
      title: "Google Ads Optimization Guide",
      description: "Advanced strategies to optimize your Google Ads campaigns for maximum ROI.",
      category: 'guides',
      type: 'ebook',
      icon: '🎯',
      downloadCount: '1.9K',
      format: 'PDF',
      size: '3.4 MB',
      link: '#'
    },
    {
      id: 7,
      title: "Website Speed Analyzer",
      description: "Free tool to analyze and improve your website loading speed.",
      category: 'tools',
      type: 'tool',
      icon: '⚡',
      downloadCount: '3.8K',
      format: 'Web Tool',
      size: 'Online',
      link: '#'
    },
    {
      id: 8,
      title: "Content Marketing Playbook",
      description: "Complete framework for creating and executing content marketing strategies.",
      category: 'guides',
      type: 'ebook',
      icon: '✍️',
      downloadCount: '2.1K',
      format: 'PDF',
      size: '4.2 MB',
      link: '#'
    }
  ];

  const featuredResources = [
    {
      title: "Digital Marketing Metrics Dashboard",
      description: "Track all your marketing KPIs in one place with this free dashboard template.",
      icon: '📊',
      category: 'templates'
    },
    {
      title: "AI Marketing Tools Directory",
      description: "Curated list of 50+ AI tools for digital marketing with reviews and pricing.",
      icon: '🤖',
      category: 'guides'
    },
    {
      title: "Competitor Analysis Framework",
      description: "Systematic approach to analyze and outperform your competitors.",
      icon: '🔍',
      category: 'templates'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'guides': return <BookOpen className="h-5 w-5" />;
      case 'tools': return <Tool className="h-5 w-5" />;
      case 'templates': return <FileText className="h-5 w-5" />;
      case 'webinars': return <Video className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Resources - Free Digital Marketing Tools & Guides | Social Lift</title>
        <meta 
          name="description" 
          content="Access free digital marketing resources, tools, templates, and guides from Social Lift. Download ebooks, templates, and tools to grow your business." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Marketing Resources</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Free tools, templates, and guides to help you succeed in digital marketing
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search resources, tools, guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-300"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Resources</h2>
            <div className="flex items-center space-x-2 text-purple-600 font-semibold">
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-transparent hover:border-purple-200"
              >
                <div className="text-3xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2">
                  Download Now
                  <Download className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-bold text-gray-900">Categories</h3>
              </div>
              
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {getCategoryIcon(category.id)}
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      activeCategory === category.id
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Resource Library</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Resources</span>
                    <span className="font-semibold">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Downloads</span>
                    <span className="font-semibold">18.5K+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Updated</span>
                    <span className="font-semibold">Jan 15, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Resources Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeCategory === 'all' ? 'All Resources' : 
                 categories.find(c => c.id === activeCategory)?.name}
                <span className="text-gray-500 text-lg font-normal ml-2">
                  ({filteredResources.length} items)
                </span>
              </h2>
              
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                  <option>Most Popular</option>
                  <option>Newest First</option>
                  <option>Alphabetical</option>
                </select>
              </div>
            </div>

            {filteredResources.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No resources found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => (
                  <div 
                    key={resource.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{resource.icon}</div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          resource.type === 'ebook' ? 'bg-blue-100 text-blue-700' :
                          resource.type === 'tool' ? 'bg-green-100 text-green-700' :
                          resource.type === 'template' ? 'bg-orange-100 text-orange-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {resource.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {resource.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {resource.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <span>{resource.format}</span>
                          <span>•</span>
                          <span>{resource.size}</span>
                        </div>
                        <div className="flex items-center">
                          <Download className="h-3 w-3 mr-1" />
                          {resource.downloadCount}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={resource.link}
                          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-105"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </a>
                        <button className="p-3 border border-gray-300 text-gray-600 hover:border-purple-300 hover:text-purple-600 rounded-lg transition-colors duration-200">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-white mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get New Resources Weekly</h3>
                  <p className="text-purple-100 mb-4">
                    Subscribe to our newsletter and receive the latest marketing resources, 
                    tools, and industry insights directly in your inbox.
                  </p>
                  <ul className="space-y-2 text-purple-100 text-sm">
                    <li>✓ Weekly resource updates</li>
                    <li>✓ Exclusive tools and templates</li>
                    <li>✓ Industry insights and trends</li>
                    <li>✓ No spam, unsubscribe anytime</li>
                  </ul>
                </div>
                
                <div>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-300"
                    />
                    <button className="w-full bg-white text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                      Subscribe Now
                    </button>
                  </div>
                  <p className="text-purple-200 text-xs mt-3 text-center">
                    By subscribing, you agree to our Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;