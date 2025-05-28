import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setState] = useState({
    name: "",
    email: "",
    message: "",
    files: []
  });

  const handleChange = (e) => {
    setState({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setState({
      ...formData,
      files: Array.from(e.target.files)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
  };

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 md:p-8 gap-8 bg-gray-50 ">
      {/* Contact Form Section */}
      <div className="flex-1 bg-white rounded-xl p-6 md:p-8 shadow-lg">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-2">Get in Touch</h2>
          <p className="text-gray-600">We'd love to hear from you. Fill out the form below.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="How can we help you?"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Attachments
            </label>
            <div className="flex items-center">
              <label className="flex items-center gap-2 cursor-pointer text-indigo-600 hover:text-indigo-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <span>Attach Files</span>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  multiple
                  className="hidden"
                />
              </label>
              <span className="ml-2 text-sm text-gray-500">
                {formData.files.length > 0 ? `${formData.files.length} file(s) selected` : "(0)"}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 w-full md:w-auto"
          >
            Send Message
          </button>
          
          <p className="mt-4 text-xs text-gray-500">
            This site is protected by reCAPTCHA and the Google Privacy Policy and
            Terms of Service apply.
          </p>
        </form>
      </div>

      {/* Visit In Person Section */}
      {/* <div className="flex flex-col justify-between md:w-96 bg-gradient-to-br from-indigo-700 to-purple-700 text-white rounded-xl p-6 md:p-8 shadow-lg">
        <div>
          <h3 className="text-xl font-bold mb-4">Visit Our Office</h3>
          
          <p className="mb-6 opacity-90">
            We love our customers and welcome you to visit during normal business hours.
          </p>
          
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm mb-6">
            <h4 className="font-semibold mb-2">Office Based Jobs</h4>
            <p className="text-sm opacity-80 mb-1">Hours</p>
            <p className="font-medium">
              Open today 09:00 a.m. - 05:00 p.m.
            </p>
          </div>
          
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-semibold mb-2">Contact Information</h4>
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@example.com</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <button className="bg-white text-indigo-700 hover:bg-white/90 p-3 rounded-full shadow-lg transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ContactUs;