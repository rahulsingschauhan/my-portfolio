import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = document.querySelectorAll('section[id]');
      let currentSectionId = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 80) { // Offset for navbar
          currentSectionId = section.getAttribute('id');
        }
      });

      // Map section ID to the correct nav link href
      if (currentSectionId === 'hero') {
        setActiveLink('#about');
      } else if (currentSectionId) {
        setActiveLink(`#${currentSectionId}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active link

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#core-skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#achievements', label: 'Achievements' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-primary/80 backdrop-blur-lg border-b border-secondary' : 'bg-transparent'} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-text-primary">Ritik Vani</div>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              className={`transition-colors duration-300 ${activeLink === link.href ? 'text-accent' : 'text-text-secondary hover:text-accent'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 bg-secondary rounded-lg shadow-lg p-2">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-4 text-sm rounded-md transition-colors duration-200 ${activeLink === link.href ? 'text-accent bg-primary' : 'text-text-secondary hover:bg-primary hover:text-accent'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
