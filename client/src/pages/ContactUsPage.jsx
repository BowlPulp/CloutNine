import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row">
        {/* Left Section - Contact Information */}
        <div className="md:w-1/2 p-8 bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-t-lg md:rounded-l-lg md:rounded-t-none">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="font-semibold">Phone Number</p>
                <p>+91 9137612106</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-semibold">Email</p>
                <p>cloutnine.work@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p>+91 9137612106</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section - Calendly Widget */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Book a Meeting</h2>
          <p className="text-gray-600 mb-6">Schedule a meeting with us using the calendar below.</p>
          <div className="calendly-inline-widget" data-url="https://calendly.com/cloutnine-work" style={{ minWidth: '320px', height: '630px' }}></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;