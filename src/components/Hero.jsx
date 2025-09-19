import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="section h-screen flex items-center justify-center text-center bg-background">
      <div className="container mx-auto animate-fadeIn">
        <h1 className="heading-primary text-text-primary mb-2">
          Ritik Vani,
        </h1>
        <h2 className="heading-primary text-text-secondary mb-6">
          Flutter Mobile Application Developer.
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-text-secondary mb-10">
          Innovative Flutter Developer with over 2 years of professional experience in designing, developing, and deploying mobile applications for Android and iOS.
        </p>
        <div className="flex justify-center space-x-4 mb-10">
          <a href="#projects" className="button button-primary min-w-max">View My Work</a>
          <a href="/resume.pdf" download className="button button-primary min-w-max">Download Resume</a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/" className="text-text-secondary hover:text-accent transition-colors duration-300 transform hover:scale-110">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://linkedin.com/in/ritik-vani-858639198" className="text-text-secondary hover:text-accent transition-colors duration-300 transform hover:scale-110">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="mailto:ritikvaniofficial@gmail.com" className="text-text-secondary hover:text-accent transition-colors duration-300 transform hover:scale-110">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
