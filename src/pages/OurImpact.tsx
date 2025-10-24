import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, Play, Star, TrendingUp, Users, Target, Award } from 'lucide-react';

const OurImpact: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 28 },
    { id: 'ecommerce', name: 'E-commerce', count: 8 },
    { id: 'restaurant', name: 'Restaurant', count: 6 },
    { id: 'education', name: 'Education', count: 5 },
    { id: 'healthcare', name: 'Healthcare', count: 4 },
    { id: 'realestate', name: 'Real Estate', count: 3 },
    { id: 'fashion', name: 'Fashion', count: 2 }
  ];

  const successStories = [
    {
      id: 1,
      title: "Fashion E-commerce Store",
      category: 'ecommerce',
      industry: "Fashion Retail",
      duration: "6 Months",
      results: {
        revenue: "+175%",
        traffic: "+220%",
        conversion: "+45%",
        roi: "+24.4%"
      },
      challenge: "Low online visibility and poor social media engagement affecting sales",
      solution: "Complete social media marketing strategy with influencer collaborations",
      image: "🛍️",
      video: "#",
      featured: true
    },
    {
      id: 2,
      title: "Fine Dining Restaurant Chain",
      category: 'restaurant',
      industry: "Food & Beverage",
      duration: "4 Months",
      results: {
        revenue: "+140%",
        orders: "+85%",
        engagement: "+300%",
        followers: "+250%"
      },
      challenge: "Low online orders and poor local search visibility",
      solution: "Google Business Profile optimization + social media content strategy",
      image: "🍽️",
      video: "#",
      featured: true
    },
    {
      id: 3,
      title: "Educational Institute",
      category: 'education',
      industry: "Education",
      duration: "8 Months",
      results: {
        leads: "+150%",
        enrollment: "+65%",
        engagement: "+180%",
        roi: "+17.6%"
      },
      challenge: "Low student enrollment and poor digital presence",
      solution: "Targeted Facebook ads + content marketing strategy",
      image: "🎓",
      video: "#"
    },
    {
      id: 4,
      title: "Healthcare Clinic",
      category: 'healthcare',
      industry: "Healthcare",
      duration: "5 Months",
      results: {
        patients: "+90%",
        visibility: "+200%",
        reviews: "+150%",
        bookings: "+120%"
      },
      challenge: "Limited online presence and patient acquisition",
      solution: "Local SEO + Google Business Profile + reputation management",
      image: "🏥",
      video: "#"
    },
    {
      id: 5,
      title: "Real Estate Agency",
      category: 'realestate',
      industry: "Real Estate",
      duration: "7 Months",
      results: {
        leads: "+110%",
        visibility: "+180%",
        engagement: "+160%",
        conversions: "+35%"
      },
      challenge: "Poor property listing visibility and lead generation",
      solution: "Facebook ads + Instagram marketing + virtual tours",
      image: "🏠",
      video: "#"
    },
    {
      id: 6,
      title: "Beauty & Cosmetics Brand",
      category: 'fashion',
      industry: "Beauty",
      duration: "3 Months",
      results: {
        sales: "+200%",
        followers: "+400%",
        engagement: "+350%",
        reach: "+280%"
      },
      challenge: "New brand with zero social media presence",
      solution: "Complete brand launch strategy + influencer marketing",
      image: "💄",
      video: "#"
    }
  ];

  const stats = [
    { number: "12,000+", label: "Clients Served", icon: <Users className="h-8 w-8" /> },
    { number: "₹4.2Cr+", label: "Revenue Generated", icon: <TrendingUp className="h-8 w-8" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="h-8 w-8" /> },
    { number: "300+", label: "Projects Completed", icon: <Target className="h-8 w-8" /> }
  ];

  const awards = [
    { title: "Best Social Media Agency 2024", icon: "🏆", year: "2024" },
    { title: "Top Meta Ads Partner", icon: "⭐", year: "2024" },
    { title: "Excellence in Digital Marketing", icon: "🎯", year: "2023" },
    { title: "Fastest Growing Agency", icon: "🚀", year: "2023" }
  ];

  const filteredStories = successStories.filter(story => 
    activeCategory === 'all' || story.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Helmet>
        <title>Our Impact - Success Stories & Results | Social Lift</title>
        <meta 
          name="description" 
          content="See how Social Lift transformed businesses with digital marketing. Real results, case studies, and success stories from our clients." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Real results, real businesses, real growth. See how we've helped clients achieve remarkable success.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredStories.map((story) => (
            <div 
              key={story.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                story.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{story.image}</div>
                  {story.featured && (
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
                      {story.industry}
                    </span>
                    <span>•</span>
                    <span>{story.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(story.results).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Video Button */}
                <button className="w-full bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-700 py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                  <Play className="h-4 w-4" />
                  Watch Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence has been recognized by industry leaders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <div className="text-4xl mb-4">{award.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                <div className="text-purple-600 font-medium">{award.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-12 text-white mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-purple-100 text-xl">Don't just take our word for it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-purple-100 mb-4">
                "Social Lift transformed our restaurant's online presence. Our orders increased by 140% in just 4 months!"
              </p>
              <div className="font-semibold">- Restaurant Owner</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-purple-100 mb-4">
                "The growth in our e-commerce sales has been phenomenal. 175% revenue growth in 6 months!"
              </p>
              <div className="font-semibold">- Fashion Store Owner</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-purple-100 mb-4">
                "From zero to hero! Our beauty brand gained 400% more followers and 200% sales growth."
              </p>
              <div className="font-semibold">- Cosmetics Brand CEO</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to achieve remarkable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-call"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/case-studies"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              View All Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;