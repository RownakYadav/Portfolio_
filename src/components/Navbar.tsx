
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }, 
  ];

  const themeMode = () => {

  }
  

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 transition duration-300 z-50 px-6 md:px-12 lg:px-24", 
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-primary">
          Portfolio<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke={"currentColor"}
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-[60px] right-0 left-0 bg-white shadow-md transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col py-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="py-3 px-6 hover:bg-gray-50 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className=''>Dark Mode</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
