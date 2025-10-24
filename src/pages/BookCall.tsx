import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, User, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';

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

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM', 
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const services = [
    'Digital Marketing Strategy',
    'SEO Services',
    'Social Media Marketing',
    'PPC Advertising',
    'Website Development',
    'Brand Strategy',
    'Content Marketing',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Booking details:', { selectedDate, selectedTime, ...formData });
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
        <Helmet>
          <title>Booking Confirmed - Social Lift</title>
        </Helmet>
        
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed! 🎉</h1>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for scheduling a consultation with us. We're excited to help grow your business!
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Booking Details:</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Date:</span> {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p><span className="font-medium">Time:</span> {selectedTime}</p>
                <p><span className="font-medium">Service:</span> {formData.service}</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
              <p className="text-blue-700 font-medium">
                💡 We've sent a calendar invitation to your email. Please check your inbox and confirm the meeting.
              </p>
            </div>

            <div className="space-y-3">
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
                className="block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Message on WhatsApp
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
        <title>Book a Call - Free Consultation | Social Lift</title>
        <meta 
          name="description" 
          content="Schedule a free consultation call with our digital marketing experts. Discuss your project and get personalized strategies for growth." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Free Strategy Call</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your business goals and create a customized digital marketing strategy together
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Clock className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">30-Minute Session</h3>
              <p className="text-purple-200 text-sm">Deep dive into your business needs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <User className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Expert Consultation</h3>
              <p className="text-purple-200 text-sm">Get advice from industry experts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <CheckCircle className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">No Obligation</h3>
              <p className="text-purple-200 text-sm">Free consultation with no strings attached</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Consultation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Select Date
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
                      Select Time
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
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="Your company name"
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
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="Tell us about your project, goals, or any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.service}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  Schedule Free Call
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href="tel:+9779707382481" className="text-gray-900 font-medium hover:text-purple-600">
                      +977 970-7382481
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:sociallift91@gmail.com" className="text-gray-900 font-medium hover:text-purple-600">
                      sociallift91@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp</p>
                    <a 
                      href="https://wa.me/9779707382481" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-medium hover:text-purple-600"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Detailed analysis of your current digital presence</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Customized strategy recommendations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Pricing and package options</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Q&A session with our experts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCall;