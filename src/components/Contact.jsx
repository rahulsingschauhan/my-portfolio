import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="flex flex-col md:flex-row md:space-x-12">

          {/* Contact Information */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-lg leading-relaxed mb-8">
              I'm currently available for new projects and opportunities. Feel free to reach out to me.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope fa-2x text-blue-500"></i>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:Eritikvani16@gmail.com" className="text-gray-400 hover:text-white">Eritikvani16@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone fa-2x text-blue-500"></i>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-400">+91-96854 34928</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt fa-2x text-blue-500"></i>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-400">Indore, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
             <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-400 mb-2 font-semibold">Name</label>
                            <input type="text" id="name" className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-400 mb-2 font-semibold">Email</label>
                            <input type="email" id="email" className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-400 mb-2 font-semibold">Message</label>
                        <textarea id="message" rows="6" className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition-colors"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg">Send Message</button>
                    </div>
                </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
