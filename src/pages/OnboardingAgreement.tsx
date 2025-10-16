import React from "react";

const OnboardingAgreement: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Onboarding Agreement
          </h1>
          <p className="text-pink-100 text-lg md:text-xl">
            A clear process to kickstart your Digital Marketing, Social Media Management & Web Development engagement.
          </p>
          <p className="text-sm text-pink-200 mt-4">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-6">
          <p>
            This Onboarding Agreement ("Agreement") outlines how our Digital Marketing Agency ("we", "us", "our") will
            initiate and deliver services to the Client ("you", "your"). It defines scope, access,
            approvals, timelines, deliverables, and responsibilities so your project can launch smoothly
            and achieve measurable outcomes.
          </p>

          <div className="bg-pink-50 border border-pink-100 rounded-xl p-4">
            <p className="text-sm text-pink-900">
              <strong>Note:</strong> This Agreement is an operational guide for onboarding. It is used
              together with any Proposal/Quotation/SOW and our Terms of Service. If there's a conflict,
              the Proposal/SOW prevails for scope & pricing; Terms of Service prevail for legal terms.
            </p>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1) Scope of Services</h2>
            <p className="mb-3">
              Your Proposal/SOW specifies exactly what's included. Typical service categories:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Social Media Management:</strong> Content creation, posting, engagement, performance tracking</li>
              <li><strong>Meta Ads Management:</strong> Facebook & Instagram advertising campaigns</li>
              <li><strong>SEO Services:</strong> Search engine optimization, keyword research, ranking improvement</li>
              <li><strong>Website Development:</strong> Professional website creation, responsive design</li>
              <li><strong>Google Business Profile:</strong> Local business optimization and management</li>
              <li><strong>Lead Generation:</strong> Targeted campaigns to generate quality business leads</li>
              <li><strong>Video Production:</strong> Professional video shooting and editing services</li>
            </ul>
            <p className="mt-2 text-sm text-gray-600">
              Exclusions: hosting fees, premium plugins/apps, paid stock assets, 3rd-party SaaS costs,
              editorial/legal reviews—unless explicitly included.
            </p>
          </div>

          {/* Access & Assets */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2) Access & Assets (Client To Provide)</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Brand assets: logo (vector), color palette, fonts, brand guidelines</li>
              <li>Copy & content: product/service descriptions, policies, legal text (e.g., Privacy, Terms)</li>
              <li>Accounts/permissions (as applicable): domain/hosting, CMS, Google Analytics/Tag Manager/Search Console, Google Ads, Meta Business Manager, email marketing, payment gateways, CRM</li>
              <li>Point of contact for timely feedback & approvals</li>
              <li>Business information for account setups and campaign targeting</li>
            </ul>
          </div>

          {/* Deliverables & Timelines */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3) Deliverables, Milestones & Timelines</h2>
            <p className="mb-2">
              We share a kickoff timeline with milestones (design, content creation, campaign setup, QA, launch). Timelines
              are estimates and depend on asset delivery, approvals, and third-party policies.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Content Creation:</strong> Up to <strong>2 revision rounds</strong> per content piece</li>
              <li><strong>Approvals:</strong> Please review and respond within 2–3 business days to maintain schedule</li>
              <li><strong>Social Media:</strong> Content calendar shared in advance for approval</li>
              <li><strong>Delays:</strong> Missing inputs or late approvals may shift target dates</li>
            </ul>
          </div>

          {/* Change Requests */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4) Change Requests</h2>
            <p>
              Any request outside the approved scope will be quoted separately. We'll confirm effort,
              cost, and new timelines before proceeding.
            </p>
          </div>

          {/* Payments */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5) Payments & Ad Spend</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Projects:</strong> Typically 50% advance to start, balance before handover/deployment</li>
              <li><strong>Monthly Services:</strong> Pre-paid monthly and auto-renew unless cancelled (7-day prior notice)</li>
              <li><strong>Ad Spend:</strong> Paid directly by client platform-side; our management fee is separate</li>
              <li><strong>Payment Methods:</strong> Bank transfer, UPI, credit/debit cards accepted</li>
            </ul>
          </div>

          {/* KPI & Reporting */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6) KPIs, Tracking & Reporting</h2>
            <p className="mb-2">
              We align KPIs during kickoff (e.g., engagement rate, leads generated, ROAS, CTR, conversions). We'll set up tracking
              (GA4/GTM, pixels, events) where access permits and provide periodic performance reports.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Monthly performance reports for all active services</li>
              <li>Real-time dashboard access for social media performance</li>
              <li>Attribution depends on platform policies, user consent, and technical constraints</li>
              <li>Data integrity relies on correct implementation and third-party systems</li>
            </ul>
          </div>

          {/* Communication & SLA */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7) Communication & SLA</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Primary channels: WhatsApp, email and project management tools</li>
              <li>Response times: within 1–2 business days (Mon–Fri IST), urgent queries within hours</li>
              <li>Weekly/bi-weekly syncs for active retainers or complex campaigns</li>
              <li>24/7 support available for critical issues</li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8) Compliance & Platform Policies</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>All campaigns and content must comply with Google, Meta, and other platform policies</li>
              <li>Client is responsible for legal and regulatory compliance of business claims and content</li>
              <li>We do not control platform decisions such as disapprovals, bans, or outages</li>
              <li>Content follows community guidelines and advertising policies</li>
            </ul>
          </div>

          {/* IP & Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9) Intellectual Property & Licensing</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Upon full payment, final deliverables (designs/content/code excluding paid components) are licensed or assigned to you as per Proposal/SOW</li>
              <li>Our pre-existing frameworks, templates, and strategies remain our IP; you receive a license to use them within the deliverables</li>
              <li>Paid fonts, stock media, and plugins follow their vendor licenses</li>
              <li>Client retains ownership of their brand assets and business information</li>
            </ul>
          </div>

          {/* Data Protection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10) Confidentiality & Data Protection</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We treat your business data as confidential and use it only for agreed services</li>
              <li>We follow reasonable security practices. Personal data handling will align with applicable laws (e.g., India DPDP)</li>
              <li>Use a password manager or secure method for sharing credentials</li>
              <li>Data is stored securely and accessed only by authorized team members</li>
            </ul>
          </div>

          {/* Acceptance & Handover */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11) Acceptance, Launch & Handover</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We share content previews and campaign strategies for review before execution</li>
              <li>After approval & final payment, we proceed to launch/activation</li>
              <li>Handover items may include: social media credentials, analytics access, campaign documentation, performance reports</li>
              <li>Post-launch support (minor adjustments) up to 14 calendar days unless otherwise stated</li>
            </ul>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">12) Pause, Cancellation & Termination</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Monthly services can be cancelled for the next cycle with 7-day prior notice</li>
              <li>Projects can be cancelled with written notice; completed milestones/work to-date remain billable</li>
              <li>Non-payment or policy breach may lead to suspension/termination</li>
              <li>Refunds processed as per our refund policy outlined in Terms of Service</li>
            </ul>
          </div>

          {/* Force Majeure & Disputes */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">13) Force Majeure & Dispute Resolution</h2>
            <p className="mb-2">
              We are not liable for delays caused by events beyond reasonable control (e.g., platform outages,
              regulatory actions, disasters, technical issues).
            </p>
            <p>
              Disputes will be addressed in good faith discussions first. Failing settlement, competent
              courts will have exclusive jurisdiction as per our Terms of Service.
            </p>
          </div>

          {/* Service Specific Terms */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">14) Service Specific Terms</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Social Media Management</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>15 creative posts and 2 videos/reels included monthly</li>
                  <li>Content calendar shared in advance for approval</li>
                  <li>Performance reports delivered monthly</li>
                  <li>Additional posts/videos available as add-ons</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Website Development</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>5-page responsive website standard package</li>
                  <li>1 year hosting and SSL certificate included</li>
                  <li>6 months technical support post-launch</li>
                  <li>Additional pages available as add-ons</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">SEO Services</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Minimum 3-month commitment recommended</li>
                  <li>Monthly ranking reports and optimization</li>
                  <li>Keyword research and on-page optimization included</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kickoff Checklist */}
          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Kickoff Checklist</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Approved Proposal/SOW & initial invoice paid</li>
              <li>Primary contact details & communication channel confirmed</li>
              <li>Brand assets + business information provided</li>
              <li>Access shared: Social media accounts, Analytics, CMS/Hosting as needed</li>
              <li>KPIs & reporting cadence agreed</li>
              <li>Content strategy and target audience defined</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="border rounded-xl p-5 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Questions?</h3>
            <p className="text-gray-700">
              Email <a className="text-pink-700 underline" href="mailto:contact@digitalagency.com">contact@digitalagency.com</a> or call{" "}
              <a className="text-pink-700 underline" href="tel:+919521281509">+91 9521281509</a>. We're happy to clarify any part of this Agreement.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              WhatsApp: <a className="text-pink-700 underline" href="https://wa.me/919521281509">+91 9521281509</a>
            </p>
          </div>

          <p className="text-xs text-gray-500">
            Disclaimer: This template is for general guidance and not legal advice. Please review with your legal counsel if needed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OnboardingAgreement;