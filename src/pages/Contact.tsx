import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! 

*New Contact Form Submission*

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Interested:* ${formData.service}
*Message:* ${formData.message}

I would like to discuss my project with you.`;

    const whatsappUrl = `https://wa.me/919521281509?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    'Social Media Management',
    'Meta Ads Management',
    'SEO Services',
    'Website Development',
    'Google Business Profile',
    'Lead Generation',
    'Video Shoot Service',
    'Logo Design',
    'Email Marketing',
    'Custom Package',
    'Other'
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+91 95212 81509',
      link: 'tel:+919521281509'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'contact@digitalagency.com',
      link: 'mailto:contact@digitalagency.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      content: 'Professional Digital Marketing Services Across India',
      link: '#'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Working Hours',
      content: '24/7 Available',
      link: '#'
    }
  ];

  return (
    <div>
      {/* ✅ SEO Component */}
      <Helmet>
        <title>Contact Us | Digital Marketing Agency</title>
        <meta
          name="description"
          content="Contact our Digital Marketing Agency. Reach us for Social Media Management, Meta Ads, SEO, Website Development & Lead Generation services."
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Get In <span className="text-white">Touch</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-pink-100">
              Ready to grow your business? Let's discuss your project and create amazing digital marketing results together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/919521281509"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24 hours. Or message us directly on WhatsApp for instant response!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Tell us about your business, goals, and how we can help with digital marketing..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message via WhatsApp</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By clicking "Send Message", your message will be sent via WhatsApp for instant response.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-6">
                Reach out to us through any of these channels. We're always here to help you grow your business with professional digital marketing!
              </p>

              <div className="space-y-4 mb-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-pink-100 text-pink-600 p-2 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.link !== '#' ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-pink-600 transition-colors text-sm"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
                <div className="flex space-x-3">
                  <a
                    href="https://wa.me/919521281509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="mt-6 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center text-sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Quick Response Guarantee
                </h3>
                <p className="text-green-700 text-xs">
                  ⚡ WhatsApp: Instant response
                  <br />
                  📧 Email: Within 2-4 hours
                  <br />
                  📞 Phone: 24/7 for urgent queries
                </p>
              </div>

              {/* Free Consultation Offer */}
              <div className="mt-4 bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl border border-pink-200">
                <h3 className="font-semibold text-pink-800 mb-2 flex items-center text-sm">
                  💼 Free Consultation
                </h3>
                <p className="text-pink-700 text-xs">
                  🎯 30-minute digital marketing consultation
                  <br />
                  📊 Business analysis
                  <br />
                  🚀 Custom growth strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our digital marketing services
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">How quickly can you start my digital marketing campaign?</h3>
              <p className="text-gray-600 text-sm">We can typically start your campaign within 24-48 hours of confirmation. For social media management, we can begin content creation immediately.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Do you offer unlimited revisions for social media content?</h3>
              <p className="text-gray-600 text-sm">Yes! We provide unlimited revisions until you're 100% satisfied with the content. Your brand satisfaction is our top priority.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">What payment methods do you accept?</h3>
              <p className="text-gray-600 text-sm">We accept bank transfers, UPI, credit/debit cards, and digital wallets. We also offer flexible payment plans for long-term projects.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Do you provide performance reports for marketing campaigns?</h3>
              <p className="text-gray-600 text-sm">Absolutely! We provide detailed monthly performance reports with analytics, insights, and recommendations for all our digital marketing services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg mb-6 text-pink-100">
            Don't wait! The sooner we start, the sooner you'll see digital marketing results. Get in touch today for a FREE consultation!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919521281509"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-pink-600 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start Your Project Now</span>
            </a>
            <a
              href="tel:+919521281509"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
          </div>
          <p className="text-pink-200 mt-3 text-sm">
            🎯 Free Consultation • 📊 Custom Strategy • 🚀 Quick Results
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;