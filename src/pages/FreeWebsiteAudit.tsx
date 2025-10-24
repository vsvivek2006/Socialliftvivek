import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle, AlertTriangle, ArrowRight, Download, BarChart3, Search, Globe, Clock, Users } from 'lucide-react';

const FreeWebsiteAudit: React.FC = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const auditFeatures = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Performance",
      description: "Complete analysis of your website's search engine optimization"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Technical SEO",
      description: "Crawlability, indexing, and technical structure review"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Metrics",
      description: "Page speed, loading times, and Core Web Vitals"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Experience",
      description: "Mobile responsiveness and user interaction analysis"
    }
  ];

  const sampleReport = {
    overallScore: 72,
    issues: [
      { category: "SEO", count: 12, severity: "high" },
      { category: "Performance", count: 8, severity: "medium" },
      { category: "Security", count: 3, severity: "low" },
      { category: "Best Practices", count: 5, severity: "medium" }
    ],
    recommendations: [
      "Optimize images for faster loading",
      "Improve meta descriptions for better CTR",
      "Fix broken internal links",
      "Implement schema markup",
      "Reduce server response time"
    ]
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
        <Helmet>
          <title>Website Audit Submitted - Social Lift</title>
          <meta name="description" content="Your free website audit request has been submitted. We'll analyze your website and send detailed report." />
        </Helmet>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Audit Request Received! 🎉</h1>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for requesting a free website audit. We're analyzing your website and will send the detailed report to:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left max-w-md mx-auto">
              <p className="text-center font-semibold text-gray-900">{email}</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6 text-left">
              <h3 className="font-semibold text-blue-900 mb-2">What's Next?</h3>
              <ul className="text-blue-800 space-y-2 text-sm">
                <li>✅ Comprehensive website analysis (24-48 hours)</li>
                <li>✅ Detailed PDF report with actionable insights</li>
                <li>✅ Personalized recommendations</li>
                <li>✅ Follow-up consultation offer</li>
              </ul>
            </div>

            <div className="space-y-3 max-w-sm mx-auto">
              <a
                href="/"
                className="block bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Return to Homepage
              </a>
              <a
                href="https://wa.me/9779707382481"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-2 border-gray-300 text-gray-700 hover:border-purple-300 hover:text-purple-600 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>💬 Quick Questions?</span>
              </a>
            </div>
          </div>

          {/* Sample Report Preview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Your Report Will Include</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Overall Score */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">{sampleReport.overallScore}/100</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Overall Score</h3>
                <p className="text-gray-600 text-sm">Website Health Rating</p>
              </div>

              {/* Issues Breakdown */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Issues Found</h3>
                <div className="space-y-3">
                  {sampleReport.issues.map((issue, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700">{issue.category}</span>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          issue.severity === 'high' ? 'bg-red-100 text-red-700' :
                          issue.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {issue.count} issues
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Helmet>
        <title>Free Website Audit - Comprehensive SEO Analysis | Social Lift</title>
        <meta 
          name="description" 
          content="Get a free comprehensive website audit from Social Lift. Analyze SEO, performance, security, and user experience with detailed actionable insights." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Website Audit</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get a comprehensive analysis of your website's performance, SEO, and user experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <BarChart3 className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold text-sm">SEO Analysis</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <Globe className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Technical Audit</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Performance</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <h3 className="font-semibold text-sm">UX Review</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Audit Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Audit Report</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    required
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Analyzing Website...
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5" />
                      Start Free Audit
                    </>
                  )}
                </button>

                <p className="text-center text-gray-500 text-sm">
                  🔒 We respect your privacy. Your data is secure with us.
                </p>
              </form>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">No Credit Card</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <Download className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">PDF Report</p>
              </div>
            </div>
          </div>

          {/* Audit Features */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included in Your Audit</h2>
              
              <div className="space-y-6">
                {auditFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Report Preview */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Sample Report Preview</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Overall Score</span>
                  <span className="font-bold text-2xl">{sampleReport.overallScore}/100</span>
                </div>
                
                <div className="space-y-2">
                  {sampleReport.recommendations.slice(0, 3).map((rec, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-300" />
                      <span className="text-sm">{rec}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm opacity-90">
                    Your full report will include 50+ metrics and actionable recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Improve Your Website?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get your free comprehensive website audit and discover opportunities to boost your online performance.
          </p>
          <a
            href="#audit-form"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            Start Free Audit
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FreeWebsiteAudit;