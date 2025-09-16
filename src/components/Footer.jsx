import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/" className="text-gray-400 hover:text-white"><i className="fab fa-github fa-2x"></i></a>
          <a href="https://linkedin.com/in/ritik-vani-858639198" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin fa-2x"></i></a>
        </div>
        <p>&copy; 2024 Ritik Vani. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
