import React, { useState } from "react";

const Privacy: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Privacy Policy & Services</h1>
          <p className="text-purple-100 text-lg md:text-xl">
            How Social Lift collects, uses, protects, and shares your information.
          </p>
          <p className="text-sm text-purple-200 mt-2">Last updated: {lastUpdated}</p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "privacy" 
                ? "bg-white text-purple-600 shadow-lg" 
                : "bg-purple-700 text-white hover:bg-purple-600"
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "services" 
                ? "bg-white text-purple-600 shadow-lg" 
                : "bg-purple-700 text-white hover:bg-purple-600"
              }`}
            >
              Our Services
            </button>
            <button
              onClick={() => setActiveTab("packages")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "packages" 
                ? "bg-white text-purple-600 shadow-lg" 
                : "bg-purple-700 text-white hover:bg-purple-600"
              }`}
            >
              Package Deals
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      {activeTab === "privacy" && (
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-10">
            {/* Intro */}
            <div>
              <p>
                This Privacy Policy explains how <strong>Social Lift Digital Marketing Agency</strong> ("we", "us", "our") collects,
                uses, discloses, and safeguards personal information when you visit our website, engage
                with our digital marketing campaigns, or use our services. By using our website/services,
                you agree to this Policy. If you do not agree, please discontinue use.
              </p>
              <div className="mt-4 bg-purple-50 border border-purple-100 rounded-xl p-4 text-sm text-purple-900">
                <strong>Regulatory note:</strong> We strive to comply with applicable laws, including
                India's Digital Personal Data Protection (DPDP) Act and, where relevant, GDPR. References
                below to "lawful basis" and "data principal rights" reflect these standards.
              </div>
            </div>

            {/* What we collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1) Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Identity & Contact:</strong> name, email, phone, company, role.</li>
                <li><strong>Business & Content:</strong> project brief, brand assets you share.</li>
                <li><strong>Technical:</strong> IP address, device/browser info, pages viewed, referrer URLs, session data.</li>
                <li><strong>Usage & Analytics:</strong> interactions with pages, forms, CTAs; events/pixels (GA4, Meta, etc.).</li>
                <li><strong>Marketing:</strong> preferences, consent, campaign engagement (opens, clicks, conversions).</li>
                <li><strong>Payment/Commercial:</strong> invoices, transaction metadata (processed via third-party gateways; we do not store card data).</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                Sensitive personal data is not intentionally collected. Please avoid sharing it.
              </p>
            </div>

            {/* Sources */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2) Sources of Data</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Direct:</strong> forms, emails, WhatsApp, calls, meetings.</li>
                <li><strong>Automated:</strong> cookies, tags, analytics, pixels.</li>
                <li><strong>Third-Party:</strong> ad platforms, CRM or lead gen tools you connect/provide.</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3) Cookies & Similar Technologies</h2>
              <p className="mb-2">
                We use cookies, pixels, and tags to enable site functionality, remember preferences,
                analyze performance, and measure/optimize campaigns.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Essential:</strong> required for core functionality.</li>
                <li><strong>Analytics:</strong> GA4/GTM events, traffic sources, on-site behavior.</li>
                <li><strong>Marketing:</strong> remarketing/conversion pixels (e.g., Google Ads, Meta).</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                You can manage cookies via your browser settings. Some features may not work without certain cookies.
              </p>
            </div>

            {/* How we use */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4) How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, operate, and improve our website and services.</li>
                <li>Respond to inquiries, proposals, and support requests.</li>
                <li>Plan, execute, and optimize campaigns; measure performance/ROI.</li>
                <li>Personalize experiences and recommend relevant services.</li>
                <li>Security, fraud prevention, troubleshooting, and diagnostics.</li>
                <li>Legal compliance and enforcement of our Terms/Agreement.</li>
              </ul>
            </div>

            {/* Lawful basis */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5) Legal Bases / Consent</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Consent:</strong> marketing communications, non-essential cookies.</li>
                <li><strong>Contract:</strong> to deliver services requested/paid for.</li>
                <li><strong>Legitimate Interest:</strong> analytics, security, product improvement.</li>
                <li><strong>Legal Obligation:</strong> taxation, accounting, compliance.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                You may withdraw consent at any time (see "Your Rights" below).
              </p>
            </div>

            {/* Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6) How We Share Information</h2>
              <p className="mb-2">
                We do not sell personal data. We may share limited information with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Processors/Vendors:</strong> hosting, CDN, analytics (GA4/GTM), ad platforms (Google, Meta), CRM/email tools, payment gateways, project tools.</li>
                <li><strong>Partners/Sub-contractors:</strong> only as needed for agreed work, under confidentiality and DP terms.</li>
                <li><strong>Legal/Compliance:</strong> when required by law or to protect rights/safety.</li>
              </ul>
            </div>

            {/* International transfer */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">7) International Transfers</h2>
              <p>
                Vendors may process data in other countries. We take reasonable steps to ensure appropriate
                safeguards (e.g., contractual protections) consistent with applicable law.
              </p>
            </div>

            {/* Retention */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">8) Data Retention</h2>
              <p>
                We retain data only for as long as necessary for the purposes above or as required by law.
                Typical retention: marketing contacts up to 24 months of last interaction; project records
                aligned with statutory/accounting obligations.
              </p>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">9) Security</h2>
              <p>
                We use reasonable technical and organizational measures to protect data (access controls,
                encryption in transit, least-privilege practices). No system is 100% secure; please share
                credentials via secure methods (password managers).
              </p>
            </div>

            {/* Children */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">10) Children's Privacy</h2>
              <p>
                Our services are intended for business users. We do not knowingly collect data from
                children under applicable age thresholds.
              </p>
            </div>

            {/* Your rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">11) Your Rights</h2>
              <p className="mb-2">
                Subject to law, you may have the right to: access, correct, update, delete, restrict or
                object to processing, withdraw consent, and request data portability.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Access/Correction:</strong> get a copy of your data or ask us to fix inaccuracies.</li>
                <li><strong>Deletion ("Right to be Forgotten"):</strong> request erasure where legally permitted.</li>
                <li><strong>Consent Management:</strong> opt-out of marketing or withdraw cookie consent.</li>
                <li><strong>Objection/Restriction:</strong> where we rely on legitimate interests.</li>
                <li><strong>Portability:</strong> receive data in a commonly used format where feasible.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                We may verify your identity before actioning requests and may retain limited data as required by law.
              </p>
            </div>

            {/* How to exercise */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">12) How to Contact / Exercise Rights</h2>
              <p>
                Email <a className="text-purple-700 underline" href="mailto:Sociallift91@Gmail.com">Sociallift91@Gmail.com</a> or call{" "}
                <a className="text-purple-700 underline" href="tel:+917428606849">+91 7428606849</a>. We aim to respond within 7 business days.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Address: Social Lift Digital Marketing Agency, Professional Services Across India
              </p>
            </div>

            {/* Marketing choices */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">13) Marketing Preferences</h2>
              <p>
                You can unsubscribe from emails using the footer link or by contacting us. For ads
                preferences, adjust settings in Google/Meta or your device's ad settings.
              </p>
            </div>

            {/* Third-party links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">14) Third-Party Websites</h2>
              <p>
                Our site may link to external sites we do not control. Their privacy practices apply to
                their content and services.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">15) Changes to This Policy</h2>
              <p>
                We may update this Policy from time to time. Material changes will be posted here with an
                updated "Last updated" date. Continued use signifies acceptance.
              </p>
            </div>

            {/* Summary card */}
            <div className="border rounded-xl p-5 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Summary</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>We collect contact, usage/analytics, and project data to deliver & improve services.</li>
                <li>We use cookies/pixels (GA4, Google/Meta) with consent and provide opt-outs.</li>
                <li>We don't sell personal data; we share with vetted processors/vendors as needed.</li>
                <li>You have rights to access, correct, delete, object/restrict, and withdraw consent.</li>
              </ul>
            </div>

            <p className="text-xs text-gray-500">
              Disclaimer: This template is for general guidance and not legal advice. Please review with legal counsel.
            </p>
          </div>
        </section>
      )}

      {/* Services Tab */}
      {activeTab === "services" && (
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Digital Marketing Services</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Social Media Management */}
              <div className="bg-white border border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 text-purple-800 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold">Social Media Management</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">₹8,000/-</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹15,000/-</span>
                    <span className="text-sm bg-red-500 text-white px-2 py-1 rounded ml-2">47% OFF</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ 15 Creative Design Posts</li>
                  <li>✓ 2 Videos/Reels Upload</li>
                  <li>✓ Trending Hashtags & Keywords</li>
                  <li>✓ Platform Coverage: Instagram, Meta, Twitter(X), WhatsApp</li>
                </ul>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm font-semibold text-yellow-800">Add-On Services:</p>
                  <p className="text-xs text-yellow-700">Extra Post: ₹100/- | Extra Video: ₹200/- (Max 2 min)</p>
                </div>
              </div>

              {/* Meta Ads Management */}
              <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 text-blue-800 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold">Meta Ads Management</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">₹10,000/-</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹18,000/-</span>
                    <span className="text-sm bg-red-500 text-white px-2 py-1 rounded ml-2">44% OFF</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Facebook & Instagram Ads</li>
                  <li>✓ Targeted Audience Campaigns</li>
                  <li>✓ Ad Creative Creation</li>
                  <li>✓ Performance Analytics & Optimization</li>
                </ul>
              </div>

              {/* SEO Services */}
              <div className="bg-white border border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 text-green-800 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold">SEO Services</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">₹10,000/-</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹18,000/-</span>
                    <span className="text-sm bg-red-500 text-white px-2 py-1 rounded ml-2">44% OFF</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Comprehensive Keyword Research</li>
                  <li>✓ On-Page SEO Optimization</li>
                  <li>✓ Technical SEO Audit</li>
                  <li>✓ Monthly Ranking Reports</li>
                </ul>
              </div>

              {/* Website Development */}
              <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-orange-100 text-orange-800 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold">Website Development</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">₹15,000/-</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹30,000/-</span>
                    <span className="text-sm bg-red-500 text-white px-2 py-1 rounded ml-2">50% OFF</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ 5 Page Responsive Website</li>
                  <li>✓ Mobile-Friendly Design</li>
                  <li>✓ Contact Form Integration</li>
                  <li>✓ Basic SEO Setup</li>
                  <li>✓ 1 Year Hosting Included</li>
                </ul>
              </div>

              {/* Google Business Profile */}
              <div className="bg-white border border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 text-red-800 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold">Google Business Profile</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">₹6,000/-</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹12,000/-</span>
                    <span className="text-sm bg-red-500 text-white px-2 py-1 rounded ml-2">50% OFF</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Complete Profile Setup</li>
                  <li>✓ Category & Description Optimization</li>
                  <li>✓ Professional Photos Upload</li>
                  <li>✓ Review Management Setup</li>
                  <li>✓ Local SEO Optimization</li>
                </ul>
              </div>

              {/* Lead Generation */}
              <div className="bg-white border border-indigo-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-indigo-100 text-indigo-800 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-bold">Lead Generation</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold">₹6,000/-</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹12,000/-</span>
                    <span className="text-sm bg-red-500 text-white px-2 py-1 rounded ml-2">50% OFF</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Targeted Lead Generation</li>
                  <li>✓ Multi-channel Campaign Setup</li>
                  <li>✓ Lead Qualification System</li>
                  <li>✓ Performance Tracking</li>
                  <li>✓ Monthly Lead Reports</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Packages Tab */}
      {activeTab === "packages" && (
        <section className="py-14 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Exclusive Package Deals</h2>
            <p className="text-center text-gray-600 mb-12">Save big with our carefully curated packages</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Starter Package */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-purple-300 transform hover:scale-105 transition-transform">
                <div className="bg-purple-500 text-white rounded-t-xl p-6 text-center">
                  <h3 className="text-2xl font-bold">Starter Package</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₹15,497</span>
                    <span className="block text-purple-100 text-sm">SAVE ₹7,500</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Social Media Management - ₹8,000
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Social Account Creation - ₹2,499
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Google Business Profile - ₹6,000
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Business WhatsApp Setup - ₹1,499
                    </li>
                  </ul>
                  <div className="mt-6 p-3 bg-purple-50 rounded-lg">
                    <p className="text-purple-800 font-semibold text-center">Individual: ₹22,997</p>
                  </div>
                  <a 
                    href="https://wa.me/917428606849?text=Hi%20Social%20Lift,%20I'm%20interested%20in%20the%20Starter%20Package"
                    className="w-full mt-4 bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Business Package */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-blue-400 transform hover:scale-105 transition-transform relative">
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-xl">
                  MOST POPULAR
                </div>
                <div className="bg-blue-500 text-white rounded-t-xl p-6 text-center">
                  <h3 className="text-2xl font-bold">Business Package</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₹29,497</span>
                    <span className="block text-blue-100 text-sm">SAVE ₹15,500</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Social Media Management - ₹8,000
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Meta Ads Management - ₹10,000
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Website Development - ₹15,000
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Google Business Profile - ₹6,000
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      All Account Creations Included
                    </li>
                  </ul>
                  <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 font-semibold text-center">Individual: ₹44,997</p>
                  </div>
                  <a 
                    href="https://wa.me/917428606849?text=Hi%20Social%20Lift,%20I'm%20interested%20in%20the%20Business%20Package"
                    className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Enterprise Package */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-purple-500 transform hover:scale-105 transition-transform">
                <div className="bg-purple-500 text-white rounded-t-xl p-6 text-center">
                  <h3 className="text-2xl font-bold">Enterprise Package</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₹44,997</span>
                    <span className="block text-purple-100 text-sm">SAVE ₹25,000</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Complete Digital Marketing Suite
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      3 Months Social Media Management
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      3 Months Meta Ads Management
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Professional Website Development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Lead Generation Setup
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      All Platform Account Creations
                    </li>
                  </ul>
                  <div className="mt-6 p-3 bg-purple-50 rounded-lg">
                    <p className="text-purple-800 font-semibold text-center">Individual: ₹69,997</p>
                  </div>
                  <a 
                    href="https://wa.me/917428606849?text=Hi%20Social%20Lift,%20I'm%20interested%20in%20the%20Enterprise%20Package"
                    className="w-full mt-4 bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            {/* Custom Package */}
            <div className="mt-12 bg-white rounded-xl shadow-lg border-2 border-orange-400 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Package</h3>
              <p className="text-gray-600 mb-6">Can't find what you're looking for? Build your own package!</p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm">Mix & Match Services</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm">Flexible Pricing</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm">Personalized Solutions</span>
              </div>
              <a 
                href="https://wa.me/917428606849?text=Hi%20Social%20Lift,%20I%20want%20a%20custom%20package%20quote"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
              >
                Contact for Custom Quote
              </a>
            </div>

            {/* WhatsApp Contact */}
            <div className="mt-12 text-center">
              <div className="bg-[#25D366] text-white rounded-xl p-6 inline-block">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418"/>
                  </svg>
                  <div>
                    <p className="font-semibold text-lg">Get Instant Quote on WhatsApp</p>
                    <p className="text-green-100">Quick response within 15 minutes</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/917428606849?text=Hi%20Social%20Lift,%20I'm%20interested%20in%20your%20services"
                  className="inline-block mt-4 bg-white text-[#25D366] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Message Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Privacy;