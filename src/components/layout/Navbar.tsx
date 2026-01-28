"use client"
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/services', label: 'Services' },
    { path: '/therapy', label: 'Therapy' },
    { path: '/about', label: 'About Us' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto  lg:px-2">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group cursor-pointer w-[187px]">
              <img 
                src={logo} 
                alt="Logo" 
                
                className="w-[187px] h-[74px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`transition-colors duration-200 text-sm font-medium ${
                    isActive(link.path) ? 'text-teal-700' : 'text-gray-700 '
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-block">
                Book An Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 focus:outline-none bg-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <RxHamburgerMenu className="w-6 h-6   text-black transition-transform duration-300"/>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
            <div className="bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`block transition-colors duration-200 text-base font-medium ${
                    isActive(link.path) ? 'text-teal-700' : 'text-gray-700 hover:text-teal-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="w-full bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 shadow-md inline-block text-center">
                  Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;

