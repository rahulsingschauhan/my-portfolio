import React, { useState, useEffect, useCallback } from 'react';
import useInView from '../hooks/useInView';

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Solutions',
    image: '/images/author1.jpg',
    testimonial: 'Ritik is a highly skilled developer who is passionate about his work. He is a great team player and always goes the extra mile to get the job done.'
  },
  {
    name: 'Jane Smith',
    company: 'Innovate Inc.',
    image: '/images/author2.jpg',
    testimonial: 'Working with Ritik was a pleasure. He is a very talented developer and I was very impressed with his work. I would highly recommend him to anyone.'
  },
  {
    name: 'Sam Wilson',
    company: 'Creative Minds',
    image: '/images/author1.jpg',
    testimonial: 'Ritik is a very creative and talented developer. He is always coming up with new and innovative ideas. I am very happy with the work he has done for us.'
  }
];

const Testimonials = () => {
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section 
      ref={testimonialsRef}
      id="testimonials" 
      className={`section bg-primary transition-all duration-1000 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Testimonials</h2>
          <p className="text-lg text-text-secondary mt-2">What others say about me.</p>
        </div>

        <div className="relative max-w-3xl mx-auto overflow-hidden">
          {/* Slides container */}
          <div 
            className="flex transition-transform duration-700 ease-in-out-quart" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="w-full flex-shrink-0">
                <div className="bg-secondary p-10 rounded-2xl shadow-card text-center mx-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-primary shadow-lg" />
                  <p className="text-text-secondary text-lg italic leading-relaxed mb-6">\"{testimonial.testimonial}\"</p>
                  <h3 className="text-xl font-bold text-text-primary">{testimonial.name}</h3>
                  <p className="text-text-secondary">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-accent/50 hover:bg-accent text-white p-3 rounded-full focus:outline-none transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-accent/50 hover:bg-accent text-white p-3 rounded-full focus:outline-none transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-accent' : 'bg-secondary'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
