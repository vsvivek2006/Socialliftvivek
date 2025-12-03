import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, User, Phone, Mail, MessageCircle, CheckCircle, ExternalLink } from 'lucide-react';

const BookCall: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM', 
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const services = [
    'Website Development (₹9,999+)',
    'SEO Package (₹7,779/month)',
    'Social Media Management (₹4,449/month)',
    'Google My Business Setup (₹2,499)',
    'Meta Ads Management (₹9,999/month)',
    'Tour & Travel Website (₹14,999)',
    'Guest House Website (₹12,999)',
    'B2B Business Setup (₹24,999)',
    'Custom Project',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateBookingId = () => {
    return 'GS-' + Date.now().toString().slice(-8);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate booking ID
    const newBookingId = generateBookingId();
    setBookingId(newBookingId);
    
    // Prepare WhatsApp message
    const whatsappMessage = `🎯 *New Booking Confirmation - Growth Service* 🎯

📅 *Date:* ${new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
⏰ *Time:* ${selectedTime}
🆔 *Booking ID:* ${newBookingId}

👤 *Client Details:*
• Name: ${formData.name}
• Phone: ${formData.phone || 'Not provided'}
• Email: ${formData.email}
• Company: ${formData.company || 'Not provided'}

📋 *Service Interested:* ${formData.service}

📝 *Additional Info:* ${formData.message || 'No additional information'}

💼 *Services Discussed:*
• Website Development: ₹9,999 (7-10 days)
• SEO Package: ₹7,779/month (4 reports + 4 blogs)
• Social Media: ₹4,449/month
• GMB Setup: ₹2,499 one-time
• Meta Ads: ₹9,999/month
• Travel Website: ₹14,999
• Guest House: ₹12,999
• B2B Setup: ₹24,999

🚀 *Ready to start?* Please confirm availability for the scheduled time.`;

    // Store booking data
    const bookingDetails = { 
      bookingId: newBookingId, 
      selectedDate, 
      selectedTime, 
      ...formData 
    };
    console.log('Booking details:', bookingDetails);
    
    // Open WhatsApp with pre-filled message
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/97797073824881?text=${encodedMessage}`, '_blank');
    
    // Show success message
    setIsSubmitted(true);
  };

  const getNextWeekdays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (nextDay.getDay() !== 0 && nextDay.getDay() !== 6) {
        days.push(nextDay.toISOString().split('T')[0]);
      }
    }
    
    return days;
  };

  const handleWhatsAppConfirmation = () => {
    const confirmationMessage = `✅ *Booking Confirmation - ${bookingId}*

Hello Growth Service Team,

I confirm my booking for:

📅 Date: ${new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
⏰ Time: ${selectedTime}
👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📧 Email: ${formData.email}

Please send the meeting link to my email: ${formData.email}`;

    const encodedMessage = encodeURIComponent(confirmationMessage);
    window.open(`https://wa.me/97797073824881?text=${encodedMessage}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
        <Helmet>
          <title>Booking Confirmed - Growth Service</title>
        </Helmet>
        
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Request Sent! 🎉</h1>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-yellow-800 font-medium">
                📱 <strong>WhatsApp opened with your booking details!</strong><br/>
                Please send the message to confirm your appointment.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-green-500" />
                Next Steps via WhatsApp
              </h3>
              <div className="space-y-3 text-sm">
                <p>1. ✅ <strong>Check WhatsApp</strong> - We've opened WhatsApp with your booking details</p>
                <p>2. 📤 <strong>Send the message</strong> - Review and send the pre-filled message</p>
                <p>3. ⏳ <strong>Wait for confirmation</strong> - We'll confirm within 1 hour</p>
                <p>4. 📧 <strong>Receive calendar invite</strong> - We'll send meeting link to your email</p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded mb-6 text-left">
              <p className="text-purple-700 font-medium">
                💡 <strong>Booking ID:</strong> {bookingId}<br/>
                Keep this ID for all future communication.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppConfirmation}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Send Confirmation on WhatsApp
              </button>
              
              <a
                href="tel:+919341436937"
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call: +91 93414 36937
              </a>
              
              <a
                href="/"
                className="block w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200"
              >
                Return to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Helmet>
        <title>Book a Call - Free Consultation | Growth Service</title>
        <meta 
          name="description" 
          content="Schedule a free consultation call for website development, SEO, and digital marketing. Get professional services starting from ₹2,499." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Free Strategy Call</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Discuss your website development, SEO, or digital marketing project with our experts
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Clock className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">30-Minute Free Call</h3>
              <p className="text-purple-200 text-sm">Discuss your project requirements</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <User className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Expert Consultation</h3>
              <p className="text-purple-200 text-sm">Get quotes and timeline estimates</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <CheckCircle className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">WhatsApp Confirmation</h3>
              <p className="text-purple-200 text-sm">All details sent via WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Schedule Your Free Consultation</h2>
                <div className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                  🚀 Website in 7-10 days
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Select Date (Mon-Fri)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {getNextWeekdays().map((date) => (
                      <button
                        key={date}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                          selectedDate === date
                            ? 'border-purple-600 bg-purple-50 text-purple-700'
                            : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-25'
                        }`}
                      >
                        {new Date(date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      <Clock className="h-4 w-4 inline mr-2" />
                      Select Time (IST)
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                            selectedTime === time
                              ? 'border-purple-600 bg-purple-50 text-purple-700'
                              : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-25'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                    <p className="text-xs text-gray-500 mt-1">All confirmations will be sent here</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company / Business Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    What service are you interested in? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details / Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Tell us about your project, timeline, budget, and specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.service || !formData.phone}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book Now & Send via WhatsApp
                </button>

                <p className="text-center text-sm text-gray-500">
                  📱 After booking, WhatsApp will open with all details. Please send the message to confirm.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick WhatsApp */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Quick WhatsApp Chat
              </h3>
              <p className="text-green-100 text-sm mb-4">
                Prefer instant chat? Message us directly on WhatsApp for quick quotes.
              </p>
              <a
                href="https://wa.me/97797073824881"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-center hover:scale-105"
              >
                💬 Chat Now on WhatsApp
              </a>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href="tel:+919341436937" className="text-gray-900 font-medium hover:text-purple-600">
                      +91 93414 36937
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:info@growthservice.in" className="text-gray-900 font-medium hover:text-purple-600">
                      info@growthservice.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp</p>
                    <a 
                      href="https://wa.me/97797073824881" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-medium hover:text-green-600"
                    >
                      +977 97073824881
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* What We'll Discuss */}
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What We'll Discuss</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Project Requirements:</strong> Your website/SEO needs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Timeline:</strong> 7-10 days for websites</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Pricing:</strong> Transparent quotes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Technology:</strong> React, TypeScript, Node.js</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Payment Terms:</strong> 50% advance, 50% on delivery</span>
                </li>
              </ul>
            </div>

            {/* Pricing Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Starting Prices</h3>
              <div className="space-y-2">
                {[
                  { service: 'Website Development', price: '₹9,999' },
                  { service: 'SEO Package', price: '₹7,779/month' },
                  { service: 'Social Media', price: '₹4,449/month' },
                  { service: 'GMB Setup', price: '₹2,499' },
                  { service: 'Meta Ads', price: '₹9,999/month' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-600">{item.service}</span>
                    <span className="font-semibold text-purple-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCall;
