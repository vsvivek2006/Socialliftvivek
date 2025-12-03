import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  CheckCircle, Search, Globe, Clock, Shield, 
  Zap, Smartphone, FileText, BarChart, Target, 
  Monitor, Lock, Users, Mail, Download, 
  ArrowRight, Award, TrendingUp, Layers
} from 'lucide-react';

const WebsiteAudit: React.FC = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [auditType, setAuditType] = useState('basic');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showProfessional, setShowProfessional] = useState(false);

  // Free audit types
  const freeAuditTypes = [
    {
      id: 'basic',
      name: 'Basic SEO Audit',
      icon: <Search className="h-6 w-6 text-blue-600" />,
      description: 'Essential SEO analysis for your website',
      features: [
        'Basic SEO score',
        'Mobile optimization check',
        'Page speed analysis',
        'Meta tags review',
        'Free summary report via email'
      ]
    }
  ];

  // Professional audit types
  const professionalAuditTypes = [
    {
      id: 'pro',
      name: 'Professional Audit',
      icon: <BarChart className="h-6 w-6 text-purple-600" />,
      description: 'Complete website analysis',
      price: '₹499',
      features: [
        'Complete SEO audit (50+ metrics)',
        'Competitor analysis (3 competitors)',
        'Technical audit report',
        'Security vulnerabilities check',
        'Detailed PDF report (15+ pages)',
        '30-minute consultation call',
        'Priority email support'
      ],
      color: 'from-purple-50 to-purple-100'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Pro',
      icon: <ShoppingBag className="h-6 w-6 text-green-600" />,
      description: 'Online store optimization',
      price: '₹899',
      features: [
        'E-commerce specific audit',
        'Conversion rate analysis',
        'Checkout process optimization',
        'Product SEO review',
        'Mobile commerce analysis',
        'Detailed competitor analysis',
        '60-minute strategy session'
      ],
      color: 'from-green-50 to-green-100'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Audit',
      icon: <Building className="h-6 w-6 text-orange-600" />,
      description: 'Business website comprehensive',
      price: '₹1,499',
      features: [
        'Complete website audit',
        'Advanced competitor analysis (5+)',
        'UX/UI analysis',
        'Performance optimization',
        'Security penetration testing',
        'Detailed action plan',
        '90-minute strategy session',
        'Priority phone support'
      ],
      color: 'from-orange-50 to-orange-100'
    }
  ];

  // Mock Building icon component
  const Building = (props: any) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  // Mock ShoppingBag icon component
  const ShoppingBag = (props: any) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );

  const handleFreeAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this to your backend
    console.log('Free audit requested:', {
      websiteUrl,
      email,
      businessType,
      auditType
    });
    
    // Show success message
    setIsSubmitted(true);
  };

  const handleProfessionalAudit = (auditId: string) => {
    const audit = professionalAuditTypes.find(a => a.id === auditId);
    if (!audit) return;

    // In production, this would open payment gateway
    // For now, show a message
    alert(`Redirecting to payment for ${audit.name} - ${audit.price}`);
    
    // In real implementation, integrate with Razorpay/Stripe
    // window.location.href = `/payment?audit=${auditId}&amount=${audit.price.replace('₹', '')}`;
  };

  const handleDownloadSample = () => {
    // Create sample report content
    const reportContent = `
GROWTH SERVICE - SAMPLE WEBSITE AUDIT REPORT
===========================================

OVERVIEW
Website: example.com
Audit Date: ${new Date().toLocaleDateString()}
Overall Score: 78/100

SEO SCORE: 72/100
✓ Meta titles optimized (85%)
✓ Header structure good (90%)
✗ Meta descriptions missing (40%)
✗ Image alt tags missing (60%)

PERFORMANCE: 65/100
✓ First Contentful Paint: 2.1s
✗ Largest Contentful Paint: 4.8s (Needs improvement)
✓ Cumulative Layout Shift: 0.15
✗ Total Blocking Time: 280ms

MOBILE: 45/100
✗ Mobile viewport issues detected
✗ Touch targets too small on some buttons
✓ Text size readable
✗ Mobile speed: 32/100

SECURITY: 85/100
✓ SSL certificate valid
✓ HTTPS properly configured
✓ Security headers present
✓ No mixed content warnings

RECOMMENDATIONS
1. Optimize images for faster loading
2. Add missing meta descriptions
3. Fix mobile responsive issues
4. Implement lazy loading
5. Minify CSS and JavaScript

This is a sample report. Your actual report will be more detailed.

Contact us for professional audit:
Email: info@growthservice.in
Phone: +91 93414 36937
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'GrowthService-Sample-Audit.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
        <Helmet>
          <title>Free Audit Requested - Growth Service</title>
        </Helmet>
        
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Free Audit Requested</h1>
              <p className="text-gray-600">
                We'll send your basic SEO audit report to:
              </p>
              <p className="font-medium text-gray-900 mt-1">{email}</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3">
                    <span className="text-blue-600 text-xs font-bold">1</span>
                  </div>
                  <span>We analyze your website: {websiteUrl}</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3">
                    <span className="text-blue-600 text-xs font-bold">2</span>
                  </div>
                  <span>Generate basic SEO report</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3">
                    <span className="text-blue-600 text-xs font-bold">3</span>
                  </div>
                  <span>Send report to your email within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setShowProfessional(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200"
              >
                Upgrade to Professional Audit
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-semibold transition-all duration-200"
              >
                Request Another Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showProfessional) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
        <Helmet>
          <title>Professional Website Audits - Growth Service</title>
        </Helmet>
        
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <button
              onClick={() => setShowProfessional(false)}
              className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowRight className="h-4 w-4 rotate-180 mr-2" />
              Back to Free Audit
            </button>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Professional Website Audits</h1>
            <p className="text-gray-600">Detailed analysis with actionable insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {professionalAuditTypes.map((audit) => (
              <div key={audit.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className={`bg-gradient-to-r ${audit.color} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-white rounded-lg">
                      {audit.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{audit.price}</div>
                      <div className="text-sm text-gray-600">One-time payment</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{audit.name}</h3>
                  <p className="text-gray-600 text-sm">{audit.description}</p>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {audit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handleProfessionalAudit(audit.id)}
                    className="w-full bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    Get {audit.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What's included in professional audits?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Detailed PDF Report</h4>
                    <p className="text-sm text-gray-600">15+ pages with screenshots and data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Competitor Analysis</h4>
                    <p className="text-sm text-gray-600">Compare with 3-5 competitors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Target className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Action Plan</h4>
                    <p className="text-sm text-gray-600">Step-by-step implementation guide</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Consultation Call</h4>
                    <p className="text-sm text-gray-600">30-90 minutes with expert</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Security Audit</h4>
                    <p className="text-sm text-gray-600">Vulnerability assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Layers className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Priority Support</h4>
                    <p className="text-sm text-gray-600">Email and phone support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Free Website Audit - Growth Service</title>
        <meta 
          name="description" 
          content="Get a free basic SEO audit for your website. Professional audits starting at ₹499. Improve performance, security, and user experience." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Website Audit Service</h1>
            <p className="text-lg text-blue-100 mb-6">
              Free basic audit or professional analysis starting at ₹499
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-white text-lg font-bold mb-1">Free</div>
              <div className="text-blue-100 text-sm">Basic Audit</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-white text-lg font-bold mb-1">₹499</div>
              <div className="text-blue-100 text-sm">Professional</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-white text-lg font-bold mb-1">₹899</div>
              <div className="text-blue-100 text-sm">E-commerce</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-white text-lg font-bold mb-1">₹1,499</div>
              <div className="text-blue-100 text-sm">Enterprise</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Free Audit Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Free Basic Audit</h2>
                  <p className="text-gray-600 text-sm">No payment required</p>
                </div>
                <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                  FREE
                </span>
              </div>
              
              <form onSubmit={handleFreeAuditSubmit} className="space-y-6">
                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL
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
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
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
                    Business Type (Optional)
                  </label>
                  <input
                    type="text"
                    id="businessType"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="E-commerce, Service, Blog, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200"
                >
                  Get Free Audit
                </button>

                <p className="text-center text-gray-500 text-sm">
                  Report will be sent to your email within 24 hours
                </p>
              </form>
            </div>

            {/* Download Sample */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">View Sample Report</h3>
                  <p className="text-gray-600 text-sm">See what professional audit includes</p>
                </div>
                <button
                  onClick={handleDownloadSample}
                  className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Sample
                </button>
              </div>
            </div>
          </div>

          {/* Audit Details */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Free Audit Includes</h2>
              
              <div className="space-y-4">
                {[
                  {
                    icon: <Search className="h-5 w-5 text-blue-600" />,
                    title: 'Basic SEO Analysis',
                    description: 'Check essential SEO elements and meta tags'
                  },
                  {
                    icon: <Smartphone className="h-5 w-5 text-green-600" />,
                    title: 'Mobile Optimization',
                    description: 'Review mobile responsiveness and user experience'
                  },
                  {
                    icon: <Zap className="h-5 w-5 text-yellow-600" />,
                    title: 'Speed Check',
                    description: 'Analyze page load times and performance'
                  },
                  {
                    icon: <Globe className="h-5 w-5 text-purple-600" />,
                    title: 'Technical Review',
                    description: 'Check basic technical setup and configuration'
                  },
                  {
                    icon: <FileText className="h-5 w-5 text-gray-600" />,
                    title: 'Summary Report',
                    description: 'Receive basic findings via email'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upgrade CTA */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Need More Details?</h3>
                  <p className="text-gray-600 text-sm">
                    Upgrade to Professional Audit for complete analysis
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setShowProfessional(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200"
              >
                View Professional Options
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Free vs Professional Audit</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 border-b border-gray-200">
              <div className="p-4 font-semibold text-gray-900">Feature</div>
              <div className="p-4 font-semibold text-gray-900 text-center">Free</div>
              <div className="p-4 font-semibold text-gray-900 text-center">Professional</div>
            </div>
            
            {[
              ['SEO Score', '✓', '✓'],
              ['50+ Metrics', '✗', '✓'],
              ['Competitor Analysis', '✗', '✓'],
              ['PDF Report', 'Basic', 'Detailed'],
              ['Consultation Call', '✗', '30-90 min'],
              ['Security Audit', '✗', '✓'],
              ['Performance Analysis', 'Basic', 'Advanced'],
              ['Action Plan', '✗', 'Step-by-step'],
              ['Priority Support', '✗', '✓']
            ].map(([feature, free, pro], index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="p-4 text-gray-700">{feature}</div>
                <div className="p-4 text-center text-gray-700">{free}</div>
                <div className="p-4 text-center text-gray-700">{pro}</div>
              </div>
            ))}
            
            <div className="grid grid-cols-3 border-t border-gray-200 bg-gray-50">
              <div className="p-4 font-semibold text-gray-900">Price</div>
              <div className="p-4 font-semibold text-gray-900 text-center">₹0 FREE</div>
              <div className="p-4 font-semibold text-gray-900 text-center">Starting ₹499</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Improve Your Website?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get detailed insights and actionable recommendations to boost your online performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Get Free Audit
            </button>
            <button
              onClick={() => setShowProfessional(true)}
              className="bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              View Professional Audits
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-sm text-gray-500">Report Delivery</div>
              <div className="font-semibold text-gray-900">24 Hours</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-sm text-gray-500">Support</div>
              <div className="font-semibold text-gray-900">Email</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-sm text-gray-500">Format</div>
              <div className="font-semibold text-gray-900">PDF/Email</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-sm text-gray-500">Analysis</div>
              <div className="font-semibold text-gray-900">50+ Metrics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteAudit;
