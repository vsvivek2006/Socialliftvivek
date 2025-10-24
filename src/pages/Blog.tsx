import React from 'react';
import { Helmet } from 'react-helmet';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "10 Digital Marketing Trends That Will Dominate 2024",
      excerpt: "Discover the latest digital marketing trends that will shape the industry and help your business stay ahead of the competition.",
      category: "Digital Marketing",
      readTime: "5 min read",
      date: "2024-01-15",
      author: "Social Lift Team",
      image: "📈"
    },
    {
      id: 2,
      title: "How to Improve Your SEO Ranking in 30 Days",
      excerpt: "Proven strategies and techniques to boost your website's search engine ranking quickly and effectively.",
      category: "SEO",
      readTime: "7 min read",
      date: "2024-01-12",
      author: "SEO Experts",
      image: "🔍"
    },
    {
      id: 3,
      title: "Social Media Marketing: Complete Guide for 2024",
      excerpt: "Learn how to create effective social media campaigns that drive engagement and conversions for your business.",
      category: "Social Media",
      readTime: "6 min read",
      date: "2024-01-10",
      author: "Social Media Team",
      image: "📱"
    },
    {
      id: 4,
      title: "Why Content Marketing is Essential for Business Growth",
      excerpt: "Understand the power of content marketing and how it can transform your business growth strategy.",
      category: "Content Marketing",
      readTime: "4 min read",
      date: "2024-01-08",
      author: "Content Team",
      image: "✍️"
    },
    {
      id: 5,
      title: "PPC Advertising: Maximize Your ROI with These Tips",
      excerpt: "Expert tips to optimize your PPC campaigns and get the maximum return on your advertising investment.",
      category: "PPC",
      readTime: "8 min read",
      date: "2024-01-05",
      author: "PPC Specialists",
      image: "🎯"
    },
    {
      id: 6,
      title: "The Power of Local SEO for Small Businesses",
      excerpt: "Learn how local SEO can help small businesses attract more customers and increase visibility in their area.",
      category: "Local SEO",
      readTime: "5 min read",
      date: "2024-01-03",
      author: "Local SEO Team",
      image: "🏪"
    }
  ];

  const categories = [
    "All Posts",
    "Digital Marketing",
    "SEO",
    "Social Media",
    "Content Marketing",
    "PPC",
    "Local SEO",
    "Email Marketing"
  ];

  const popularPosts = [
    {
      title: "Instagram Algorithm Changes 2024",
      views: "2.5K"
    },
    {
      title: "Google Core Update Analysis",
      views: "3.1K"
    },
    {
      title: "Facebook Ads Best Practices",
      views: "1.8K"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Blog - Digital Marketing Insights & Tips | Social Lift</title>
        <meta 
          name="description" 
          content="Stay updated with the latest digital marketing trends, SEO tips, social media strategies, and growth insights from Social Lift experts." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Latest insights, tips, and strategies from our digital marketing experts
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles, topics, and guides..."
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
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
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
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group-hover:scale-105">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </article>
              ))}
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
              <h3 className="text-lg font-bold text-gray-900 mb-4">About Our Blog</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Welcome to the Social Lift blog! We share expert insights, latest trends, 
                and practical tips to help you succeed in digital marketing.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                <p className="text-purple-700 text-sm font-medium">
                  💡 New articles every week!
                </p>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">{post.views} views</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
              <p className="text-purple-100 text-sm mb-4">
                Get the latest digital marketing tips delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-300"
                />
                <button className="w-full bg-white text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our digital marketing strategies can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-call"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Book Free Consultation
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;