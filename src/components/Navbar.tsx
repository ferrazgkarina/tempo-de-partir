
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';
import { Link, useLocation } from 'react-router-dom';
import { LogoIcon } from './LogoIcon';

const navLinks: NavLink[] = [
  { label: 'Início', path: '/' },
  { label: 'Editorial', path: '/editorial' },
  { label: 'Manifesto', path: '/manifesto' },
  { label: 'Contato', path: '/contato' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-earth/20">
      {/* Changed container to full width with specific 30px padding */}
      <div className="w-full px-[30px]">
        <div className="relative flex items-center justify-between h-24">
          
          {/* Left: Logo Icon */}
          <div className="flex-shrink-0 z-10 flex items-center">
            <Link to="/" className="group p-2 -ml-2">
              <LogoIcon className="h-12 w-12 text-ink group-hover:text-accent transition-colors duration-500 ease-out" />
            </Link>
          </div>

          {/* Center: Title & Subtitle (Magazine Style) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-center flex flex-col items-center">
            <Link to="/" className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-ink hover:text-accent transition-colors whitespace-nowrap leading-none">
              Tempo de Partir
            </Link>
            {/* Removed opacity/80 to make it solid earth color */}
            <span className="text-[8px] md:text-[9px] tracking-[0.25em] uppercase text-earth font-sans mt-1.5 border-t border-earth/20 pt-1 w-full hidden sm:block">
              Revista Digital de Viagens & Cultura
            </span>
          </div>

          {/* Right: Menu */}
          <div className="flex-shrink-0 z-10 flex items-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-[0.2em] uppercase font-bold transition-colors duration-300 ${
                    isActive(link.path) 
                      ? 'text-accent' 
                      : 'text-earth hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-ink hover:text-earth focus:outline-none transition-colors p-2 -mr-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-paper border-b border-earth/20 shadow-lg animate-fade-in">
          <div className="px-4 pt-4 pb-8 space-y-4 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 font-serif text-2xl ${
                  isActive(link.path) ? 'text-accent' : 'text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
