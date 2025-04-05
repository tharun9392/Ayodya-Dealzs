import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl" style={{ backgroundColor: 'black' }}>
      <div className="flex flex-col items-center">
        {/* Heading Section */}
        <br></br> <br></br> <br></br> <br></br>
        <div className="text-center mb-8 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We would love to hear from you! Feel free to reach out to us using the following information.
          </p>
        </div>
        
        <div className="w-full flex flex-col lg:flex-row gap-8">
          {/* Contact Information Section */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-800 p-6 rounded-lg h-full">
              <h5 className="text-xl font-semibold mb-6 text-white">Contact Information</h5>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="mr-3 text-primary">📍</span>
                  <p className="text-gray-400">Hyderabad, Telangana, India</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-primary">📞</span>
                  <p className="text-gray-400">+91 9876543210</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-primary">⏰</span>
                  <p className="text-gray-400">Mon - Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
              <h5 className="text-xl font-semibold mb-6 text-white">Get In Touch</h5>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    rows={4}
                    placeholder="Your Message"
                    required
                  />
                </div>
                <div className="text-right">
                  <button 
                    type="submit" 
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;