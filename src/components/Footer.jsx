import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 text-text-secondary">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Ritik Vani. All rights reserved.</p>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://github.com/" className="text-text-secondary hover:text-accent transition-colors duration-300 transform hover:scale-110">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://linkedin.com/in/ritik-vani-858639198" className="text-text-secondary hover:text-accent transition-colors duration-300 transform hover:scale-110">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
