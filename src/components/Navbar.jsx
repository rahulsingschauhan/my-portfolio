import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-transparent'} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Parul Sharma</div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#core-skills" className="hover:text-gray-400">Skills</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#testimonials" className="hover:text-gray-400">Testimonials</a>
          <a href="#achievements" className="hover:text-gray-400">Achievements</a>
        </div>
        <div className="md:hidden flex items-center">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                Contact Me
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
        </div>
        <div className="hidden md:block">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Contact Me
            </a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
          <a href="#core-skills" className="block py-2 px-4 text-sm hover:bg-gray-700">Skills</a>
          <a href="#projects" className="block py-2 px-4 text-sm hover:bg-gray-700">Projects</a>
          <a href="#testimonials" className="block py-2 px-4 text-sm hover:bg-gray-700">Testimonials</a>
          <a href="#achievements" className="block py-2 px-4 text-sm hover:bg-gray-700">Achievements</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
