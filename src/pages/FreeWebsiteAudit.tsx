import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  CheckCircle, AlertTriangle, ArrowRight, Download, 
  BarChart3, Search, Globe, Clock, Users, Shield,
  Zap, Smartphone, ShoppingBag, Mail, MessageCircle,
  FileText, ExternalLink, TrendingUp, Target, Monitor
} from 'lucide-react';

const FreeWebsiteAudit: React.FC = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [auditType, setAuditType] = useState('basic');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const auditTypes = [
    {
      id: 'basic',
      name: 'Basic SEO Audit',
      icon: '🔍',
      description: 'Essential SEO analysis',
      features: ['On-page SEO', 'Technical issues', 'Mobile optimization', 'Speed analysis']
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive Audit',
      icon: '📊',
      description: 'Complete website analysis',
      features: ['Full SEO audit', 'Performance metrics', 'Security check', 'UX analysis', 'Competitor comparison']
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Audit',
      icon: '🛒',
      description: 'Online store specific',
      features: ['Conversion rate', 'Shopping experience', 'Product SEO', 'Checkout optimization', 'Mobile commerce']
    },
    {
      id: 'local',
      name: 'Local Business Audit',
      icon: '📍',
      description: 'Local SEO focused',
      features: ['Google My Business', 'Local citations', 'Map rankings', 'Review management', 'Local keywords']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare WhatsApp message with all details
    const whatsappMessage = `🎯 *New Website Audit Request - Growth Service* 🎯

📋 *Audit Type:* ${auditTypes.find(a => a.id === auditType)?.name}
🌐 *Website URL:* ${websiteUrl}
📧 *Email:* ${email}
🏢 *Business Type:* ${businessType || 'Not specified'}

*Requested Audit Includes:*
${auditTypes.find(a => a.id === auditType)?.features?.map(feature => `• ${feature}`).join('\n')}

*Please send:*
1. Complete website audit report
2. Actionable recommendations
3. Priority issues list
4. Implementation timeline

*Contact Information for Report Delivery:*
📧 Email: ${email}
📱 WhatsApp: Please use this number

Looking forward to receiving the audit report!`;

    // Open WhatsApp with the message
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/97797073824881?text=${encodedMessage}`, '_blank');
    
    // Show success message
    setIsSubmitted(true);
  };

  const handleDownloadSample = () => {
    // Create a sample PDF content
    const pdfContent = `
      GROWTH SERVICE - SAMPLE WEBSITE AUDIT REPORT
      ===========================================
      
      Overall Score: 78/100
      
      SUMMARY:
      - SEO Score: 72/100
      - Performance: 65/100  
      - Security: 85/100
      - User Experience: 82/100
      
      TOP PRIORITY ISSUES:
      1. Image Optimization Required
      2. Meta Descriptions Missing
      3. Mobile Responsiveness Issues
      4. Page Speed Below 50/100
      
      RECOMMENDATIONS:
      1. Compress images to reduce load time
      2. Add unique meta descriptions to all pages
      3. Fix mobile viewport issues
      4. Implement lazy loading
      
      This is a sample report. Your actual report will be more detailed.
      
      Contact Growth Service for complete audit:
      📱 WhatsApp: +977 97073824881
      📧 Email: info@growthservice.in
    `;

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Growth-Service-Sample-Audit-Report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleQuickAudit = (type: string) => {
    const messages = {
      seo: `Hello! I want a free SEO audit for my website. Please provide details.`,
      speed: `Hello! I want a free website speed test and optimization suggestions.`,
      mobile: `Hello! I want a free mobile responsiveness audit for my website.`,
      security: `Hello! I want a free website security audit and recommendations.`
    };
    
    window.open(`https://wa.me/97797073824881?text=${encodeURIComponent(messages[type as keyof typeof messages])}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
        <Helmet>
          <title>Audit Request Sent - Growth Service</title>
          <meta name="description" content="Your free website audit request has been sent via WhatsApp. We'll analyze your website and send detailed report." />
        </Helmet>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">WhatsApp Opened! 📱</h1>
            <p className="text-xl text-gray-600 mb-6">
              We've opened WhatsApp with your audit request details. Please send the message to confirm.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-6 text-left">
              <h3 className="font-semibold text-yellow-900 mb-2">📋 Next Steps:</h3>
              <ol className="text-yellow-800 space-y-2 text-sm list-decimal list-inside">
                <li>Check WhatsApp on your phone</li>
                <li>Review the pre-filled message</li>
                <li>Send the message to confirm your request</li>
                <li>We'll analyze your website within 24 hours</li>
                <li>Receive detailed audit report via email/WhatsApp</li>
              </ol>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">📊 What You'll Receive:</h3>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>✅ Complete PDF audit report</li>
                <li>✅ Priority issues list</li>
                <li>✅ Actionable recommendations</li>
                <li>✅ Implementation timeline</li>
                <li>✅ Free consultation call</li>
              </ul>
            </div>

            <div className="space-y-3 max-w-sm mx-auto">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Request Another Audit
              </button>
              
              <button
                onClick={handleDownloadSample}
                className="w-full border-2 border-gray-300 text-gray-700 hover:border-purple-300 hover:text-purple-600 py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Sample Audit Report
              </button>
              
              <a
                href="/"
                className="block text-gray-600 hover:text-purple-600 py-2 text-sm transition-colors"
              >
                ← Return to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Helmet>
        <title>Free Website Audit - Comprehensive Analysis | Growth Service</title>
        <meta 
          name="description" 
          content="Get a free comprehensive website audit covering SEO, performance, security, and user experience. Receive detailed PDF report with actionable recommendations." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Free Website Audit</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get a professional website analysis and discover opportunities to improve performance, SEO, and user experience
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-semibold text-sm">SEO Analysis</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-sm">Speed Test</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl mb-2">📱</div>
              <h3 className="font-semibold text-sm">Mobile Check</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-semibold text-sm">Security Scan</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Audit Buttons */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Audit Requests</h3>
            <p className="text-gray-600 text-sm">Get instant help via WhatsApp</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => handleQuickAudit('seo')}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border border-blue-200 rounded-lg p-3 text-center transition-all duration-200 hover:scale-105 group"
            >
              <div className="text-2xl mb-1">🔍</div>
              <div className="font-medium text-blue-700 text-sm">SEO Audit</div>
              <div className="text-xs text-gray-500 mt-1">Via WhatsApp</div>
            </button>
            
            <button
              onClick={() => handleQuickAudit('speed')}
              className="bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border border-purple-200 rounded-lg p-3 text-center transition-all duration-200 hover:scale-105"
            >
              <div className="text-2xl mb-1">⚡</div>
              <div className="font-medium text-purple-700 text-sm">Speed Test</div>
              <div className="text-xs text-gray-500 mt-1">Via WhatsApp</div>
            </button>
            
            <button
              onClick={() => handleQuickAudit('mobile')}
              className="bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border border-green-200 rounded-lg p-3 text-center transition-all duration-200 hover:scale-105"
            >
              <div className="text-2xl mb-1">📱</div>
              <div className="font-medium text-green-700 text-sm">Mobile Check</div>
              <div className="text-xs text-gray-500 mt-1">Via WhatsApp</div>
            </button>
            
            <button
              onClick={() => handleQuickAudit('security')}
              className="bg-gradient-to-r from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 border border-red-200 rounded-lg p-3 text-center transition-all duration-200 hover:scale-105"
            >
              <div className="text-2xl mb-1">🛡️</div>
              <div className="font-medium text-red-700 text-sm">Security Scan</div>
              <div className="text-xs text-gray-500 mt-1">Via WhatsApp</div>
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Audit Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Detailed Audit</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Audit Type *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {auditTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setAuditType(type.id)}
                        className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                          auditType === type.id
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-25'
                        }`}
                      >
                        <div className="text-lg mb-1">{type.icon}</div>
                        <div className="font-semibold">{type.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{type.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type
                    </label>
                    <input
                      type="text"
                      id="businessType"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      placeholder="E-commerce, Service, etc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <h4 className="font-semibold text-blue-900 mb-2">Selected Audit Includes:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    {auditTypes.find(a => a.id === auditType)?.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Request Audit via WhatsApp
                </button>

                <p className="text-center text-gray-500 text-sm">
                  📱 All communication via WhatsApp for instant response
                  <br />
                  📊 Detailed PDF report delivered within 24 hours
                </p>
              </form>
            </div>

            {/* Download Sample */}
            <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Download Sample Report</h3>
                  <p className="text-gray-600 text-sm">See what you'll receive</p>
                </div>
                <button
                  onClick={handleDownloadSample}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105 flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>

          {/* Audit Details */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: '📋',
                    title: 'Detailed PDF Report',
                    description: 'Comprehensive analysis with screenshots and data'
                  },
                  {
                    icon: '🎯',
                    title: 'Priority Issues List',
                    description: 'Sorted by impact on SEO and performance'
                  },
                  {
                    icon: '⚡',
                    title: 'Actionable Recommendations',
                    description: 'Step-by-step fixes with implementation guide'
                  },
                  {
                    icon: '📈',
                    title: 'Competitor Analysis',
                    description: 'Compare with top competitors in your niche'
                  },
                  {
                    icon: '💬',
                    title: 'Free Consultation',
                    description: '30-minute strategy call to discuss findings'
                  },
                  {
                    icon: '🔄',
                    title: 'Follow-up Support',
                    description: '2 weeks of email support after audit'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Checks */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Technical Checks Included</h3>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  'SEO Meta Tags',
                  'Page Speed Score',
                  'Mobile Responsiveness',
                  'SSL Certificate',
                  'XML Sitemap',
                  'Robots.txt',
                  'Structured Data',
                  'Core Web Vitals'
                ].map((check, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span className="text-sm">{check}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 mt-4 border-t border-white/20">
                <p className="text-sm opacity-90">
                  📊 50+ metrics analyzed • ⏱️ 24-hour turnaround • 📱 WhatsApp support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Help?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Chat directly with our experts on WhatsApp for quick audit requests and instant answers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/97797073824881"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            
            <a
              href="tel:+919341436937"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <span>📞</span>
              <span>Call: +91 93414 36937</span>
            </a>
          </div>
          
          <p className="mt-6 text-gray-500 text-sm">
            🔍 SEO Audit • ⚡ Speed Test • 📱 Mobile Check • 🛡️ Security Scan
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeWebsiteAudit;
