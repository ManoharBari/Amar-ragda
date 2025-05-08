import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Utensils, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: ('Home') },
    { path: '/menu', label: ('Menu') },
    { path: '/about', label: ('About') },
    { path: '/contact', label: ('Contact') },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-25">
          <NavLink
            to="/"
            className="flex items-center transform hover:scale-105 transition-transform duration-300"
          >

            <img src='logo.jpg' width={100} className="ml-2" />
          </NavLink>

          <div className="flex items-center space-x-4 md:hidden">

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none transform hover:scale-110 transition-transform duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-orange-600 transform hover:scale-110 transition-all duration-300 ${isActive ? 'text-orange-600' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a href="https://www.google.com/maps?ll=21.015367,75.56469&z=9&t=m&hl=en&gl=US&mapclient=embed&cid=2421700318010699765">
              <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
                Visit
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
          ? 'opacity-100 max-h-96'
          : 'opacity-0 max-h-0'
          } border-t border-gray-200 overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transform hover:scale-105 transition-all duration-300 ${isActive
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-4 px-3 space-y-2">

            <button className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-center transform hover:scale-105 transition-all duration-300">
              {('Visit')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;