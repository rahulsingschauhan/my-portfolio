import React from 'react';
import useInView from '../hooks/useInView';

const Contact = () => {
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={contactRef}
      id="contact" 
      className={`section bg-primary transition-all duration-1000 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Contact Me</h2>
          <p className="text-lg text-text-secondary mt-2">I'm available for freelance work and exciting new projects.</p>
        </div>
        <div className="max-w-lg mx-auto">
          <form className="bg-secondary p-8 rounded-2xl shadow-card">
            <div className="mb-6">
              <label htmlFor="name" className="block text-text-secondary text-sm font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-primary text-text-primary rounded-lg py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-text-secondary text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-primary text-text-primary rounded-lg py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-text-secondary text-sm font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full bg-primary text-text-primary rounded-lg py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="button button-primary w-full">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
