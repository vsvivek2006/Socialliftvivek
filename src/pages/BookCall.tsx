import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, User, Phone, Mail, MessageCircle, CheckCircle, ExternalLink, CreditCard } from 'lucide-react';

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
  const [step, setStep] = useState('form'); // form, payment, confirmation

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM', 
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const services = [
    'Website Development',
    'SEO Services',
    'Social Media Management',
    'Google My Business Setup',
    'Meta Ads Management',
    'Tour & Travel Website',
    'Guest House Website',
    'B2B Business Setup',
    'Custom Project',
    'Other Service'
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
    
    if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.service || !formData.phone) {
      alert('Please fill all required fields');
      return;
    }
    
    // Generate booking ID
    const newBookingId = generateBookingId();
    setBookingId(newBookingId);
    
    // Move to payment step
    setStep('payment');
  };

  const handlePayment = () => {
    // In production, integrate with payment gateway here
    // For now, simulate payment success
    
    // Store booking data
    const bookingDetails = { 
      bookingId, 
      selectedDate, 
      selectedTime, 
      ...formData,
      paymentStatus: 'paid'
    };
    console.log('Booking details:', bookingDetails);
    
    // Move to confirmation step
    setStep('confirmation');
  };

  const handleWhatsAppConfirmation = () => {
    const confirmationMessage = `*Booking Confirmation - Growth Service*

Booking ID: ${bookingId}
Date: ${new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
Time: ${selectedTime}

Client Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}

Service: ${formData.service}
Message: ${formData.message || 'No additional information'}

Payment: ₹499 Received`;

    const encodedMessage = encodeURIComponent(confirmationMessage);
    window.open(`https://wa.me/97797073824881?text=${encodedMessage}`, '_blank');
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

  // Payment Step Component
  if (step === 'payment') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <Helmet>
          <title>Payment Required - Growth Service</title>
        </Helmet>
        
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Booking</h1>
              <p className="text-gray-600">Secure your consultation slot with ₹499 payment</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                Booking Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-semibold">{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold">
                    {new Date(selectedDate).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold">{selectedTime} IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-semibold">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-semibold">{formData.service}</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-6">
              <p className="text-yellow-700">
                <strong>Note:</strong> The ₹499 payment is a token amount to secure your slot. 
                This amount will be adjusted in your final project cost.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handlePayment}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <CreditCard className="h-5 w-5" />
                Proceed to Pay ₹499
              </button>
              
              <button
                onClick={() => setStep('form')}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg font-semibold transition-all duration-200"
              >
                Back to Edit Details
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Payment Methods</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <div className="text-sm font-medium">UPI</div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <div className="text-sm font-medium">Credit/Debit Card</div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <div className="text-sm font-medium">Net Banking</div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <div className="text-sm font-medium">Wallet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Confirmation Step Component
  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
        <Helmet>
          <title>Booking Confirmed - Growth Service</title>
        </Helmet>
        
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed</h1>
              <p className="text-gray-600">Your consultation slot has been secured</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700 mb-2">₹499 Payment Successful</div>
                <div className="text-sm text-green-600">This amount will be adjusted in your project cost</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Booking ID</div>
                    <div className="font-semibold">{bookingId}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Date & Time</div>
                    <div className="font-semibold">
                      {new Date(selectedDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })} at {selectedTime}
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-500 mb-1">Client Details</div>
                  <div className="space-y-1">
                    <div><strong>Name:</strong> {formData.name}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    <div><strong>Phone:</strong> {formData.phone}</div>
                    {formData.company && <div><strong>Company:</strong> {formData.company}</div>}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm text-gray-500 mb-1">Service</div>
                  <div className="font-semibold">{formData.service}</div>
                  {formData.message && (
                    <div className="mt-2 text-sm text-gray-600">
                      <div className="text-gray-500 mb-1">Requirements:</div>
                      {formData.message}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
              <h4 className="font-semibold text-blue-700 mb-2">Next Steps</h4>
              <div className="space-y-2 text-sm text-blue-600">
                <div className="flex items-start">
                  <div className="mr-2 font-bold">1.</div>
                  <div>Our team will contact you within 24 hours to confirm details</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 font-bold">2.</div>
                  <div>Meeting link will be sent to your email: {formData.email}</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 font-bold">3.</div>
                  <div>Prepare your project requirements for the consultation</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppConfirmation}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Send Confirmation on WhatsApp
              </button>
              
              <a
                href="tel:+919341436937"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Support: +91 93414 36937
              </a>
              
              <a
                href="/"
                className="block w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Book Consultation - Professional Services | Growth Service</title>
        <meta 
          name="description" 
          content="Schedule a professional consultation for website development, SEO, and digital marketing services. Secure your slot with token payment." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Professional Consultation</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a strategy session with our digital experts
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Clock className="h-8 w-8 mx-auto mb-3 text-white" />
              <h3 className="font-semibold mb-2">30-Minute Consultation</h3>
              <p className="text-blue-200 text-sm">Detailed project discussion</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <User className="h-8 w-8 mx-auto mb-3 text-white" />
              <h3 className="font-semibold mb-2">Expert Strategy Session</h3>
              <p className="text-blue-200 text-sm">Custom solutions for your business</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 text-white" />
              <h3 className="font-semibold mb-2">Secure Your Slot</h3>
              <p className="text-blue-200 text-sm">Token payment required</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Consultation</h2>
                <p className="text-gray-600">Fill in your details to book a professional strategy session</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Select Date (Monday to Friday)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {getNextWeekdays().map((date) => (
                      <button
                        key={date}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`p-4 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                          selectedDate === date
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-25'
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
                    <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Select Time (IST - Indian Standard Time)
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                            selectedTime === time
                              ? 'border-blue-600 bg-blue-50 text-blue-700'
                              : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-25'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                    <p className="text-xs text-gray-500 mt-1">For booking confirmation</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                    Project Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Briefly describe your project requirements, timeline, and specific needs..."
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="h-4 w-4 text-blue-600 mt-1 mr-3"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I understand that a token payment of ₹499 is required to secure my consultation slot. 
                      This amount will be adjusted in my final project cost. I agree to the terms and 
                      conditions of Growth Service.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.service || !formData.phone}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Proceed to Payment (₹499)
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Important Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Important Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CreditCard className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Token Payment</p>
                    <p className="text-xs text-gray-600">₹499 required to secure your slot</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Consultation Duration</p>
                    <p className="text-xs text-gray-600">30-minute professional session</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Payment Adjustment</p>
                    <p className="text-xs text-gray-600">Token amount adjusted in project cost</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Phone Support</p>
                    <a href="tel:+919341436937" className="text-gray-900 font-medium hover:text-blue-600">
                      +91 93414 36937
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:info@growthservice.in" className="text-gray-900 font-medium hover:text-blue-600">
                      info@growthservice.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp Business</p>
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

            {/* What to Expect */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Detailed project requirement analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technology stack recommendations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Timeline and cost estimation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implementation strategy discussion</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Next steps and action plan</span>
                </li>
              </ul>
            </div>

            {/* Services Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Services</h3>
              <div className="space-y-2">
                {[
                  { service: 'Website Development', duration: '7-10 days' },
                  { service: 'SEO Services', duration: '3+ months' },
                  { service: 'Social Media Management', duration: 'Monthly' },
                  { service: 'Google My Business', duration: 'One-time' },
                  { service: 'Meta Ads Management', duration: 'Monthly' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-600">{item.service}</span>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {item.duration}
                    </span>
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
