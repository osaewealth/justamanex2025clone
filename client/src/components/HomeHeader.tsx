import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, ArrowRight, ChevronDown, X, Phone, Briefcase, Globe, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import { useLocation } from 'wouter';

export default function HomeHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  // Helper function to check if current route matches
  const isActiveRoute = (path: string) => {
    if (path === '/') {
      return location === '/' || location === '';
    }
    return location.startsWith(path);
  };

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    return () => window.removeEventListener('scroll', requestTick);
  }, []);

  // Click outside handler for search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
              <div className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img
                src={logo}
                alt="Amanex Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation - Show on desktop (1080px+) */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className={`relative font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:scale-105 ${
              isScrolled ? 'text-coty-navy after:bg-coty-navy' : 'text-white after:bg-white'
            } ${isActiveRoute('/') ? 'after:w-full' : ''} hover:after:w-full`}>Home</a>
            <a href="/about-us" className={`relative font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:scale-105 ${
              isScrolled ? 'text-coty-navy after:bg-coty-navy' : 'text-white after:bg-white'
            } ${isActiveRoute('/about-us') ? 'after:w-full' : ''} hover:after:w-full`}>About Us</a>
            <a href="/our-story" className={`relative font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:scale-105 ${
              isScrolled ? 'text-coty-navy after:bg-coty-navy' : 'text-white after:bg-white'
            } ${isActiveRoute('/our-story') ? 'after:w-full' : ''} hover:after:w-full`}>Our Story</a>
            <a href="/our-brands" className={`relative font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:scale-105 ${
              isScrolled ? 'text-coty-navy after:bg-coty-navy' : 'text-white after:bg-white'
            } ${isActiveRoute('/our-brands') ? 'after:w-full' : ''} hover:after:w-full`}>Our Brands</a>
            <a href="/our-impact" className={`relative font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:scale-105 ${
              isScrolled ? 'text-coty-navy after:bg-coty-navy' : 'text-white after:bg-white'
            } ${isActiveRoute('/our-impact') ? 'after:w-full' : ''} hover:after:w-full`}>Our Impact</a>
            <a href="/contact-us" className={`relative font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:scale-105 ${
              isScrolled ? 'text-coty-navy after:bg-coty-navy' : 'text-white after:bg-white'
            } ${isActiveRoute('/contact-us') ? 'after:w-full' : ''} hover:after:w-full`}>Contact Us</a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              {/* Open Positions Button */}
              <a href="/careers" className={`w-fit flex items-center gap-4 px-6 py-3 text-sm font-medium rounded-br-3xl border transition-colors duration-300 ${
                isScrolled
                  ? 'bg-transparent text-coty-navy hover:bg-coty-navy hover:text-white border-coty-navy'
                  : 'bg-transparent text-white hover:bg-white hover:text-coty-navy border-white'
              }`}>
                OPEN POSITIONS
              </a>
            </div>

            {/* Animated Search Field - Desktop Only */}
            <div className="relative hidden lg:block" ref={searchRef}>
              <Button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`w-fit flex items-center gap-4 px-6 py-3 text-sm font-medium rounded-br-3xl border transition-colors duration-300 ${
                  isScrolled
                    ? 'bg-coty-navy text-white hover:bg-transparent hover:text-coty-navy border-coty-navy'
                    : 'bg-white text-coty-navy hover:bg-transparent hover:text-white border-white'
                }`}
              >
                <Search className="h-5 w-5" />
              </Button>
              
              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-coty-navy rounded-lg shadow-lg animate-in slide-in-from-top-2 duration-300 z-50 min-w-[300px]">
                  <form onSubmit={handleSearchSubmit} className="p-4">
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="What can we help you find?"
                        className="flex-1 bg-transparent border-none outline-none text-coty-navy placeholder-coty-gray text-sm"
                        autoFocus
                      />
                      <Button
                        type="button"
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="ml-2 p-1 text-white bg-coty-navy hover:bg-coty-gray rounded-full transition-colors duration-200"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Animated Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? 'text-coty-navy' : 'text-white'
              }`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-b-lg mt-2 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <a href="/" className={`font-medium transition-all duration-200 hover:translate-x-2 ${
                isActiveRoute('/') ? 'text-coty-navy font-semibold' : 'text-coty-navy hover:text-coty-gray'
              }`}>Home</a>
              <a href="/about-us" className={`font-medium transition-all duration-200 hover:translate-x-2 ${
                isActiveRoute('/about-us') ? 'text-coty-navy font-semibold' : 'text-coty-navy hover:text-coty-gray'
              }`}>About Us</a>
              <a href="/our-story" className={`font-medium transition-all duration-200 hover:translate-x-2 ${
                isActiveRoute('/our-story') ? 'text-coty-navy font-semibold' : 'text-coty-navy hover:text-coty-gray'
              }`}>Our Story</a>
              <a href="/our-brands" className={`font-medium transition-all duration-200 hover:translate-x-2 ${
                isActiveRoute('/our-brands') ? 'text-coty-navy font-semibold' : 'text-coty-navy hover:text-coty-gray'
              }`}>Our Brands</a>
              <a href="/our-impact" className={`font-medium transition-all duration-200 hover:translate-x-2 ${
                isActiveRoute('/our-impact') ? 'text-coty-navy font-semibold' : 'text-coty-navy hover:text-coty-gray'
              }`}>Our Impact</a>
              <a href="/contact-us" className={`font-medium transition-all duration-200 hover:translate-x-2 ${
                isActiveRoute('/contact-us') ? 'text-coty-navy font-semibold' : 'text-coty-navy hover:text-coty-gray'
              }`}>Contact Us</a>
              <div className="pt-4 border-t border-gray-200">
                <a href="/careers" className="block w-full text-center px-6 py-3 bg-transparent text-coty-navy text-sm font-medium rounded-br-3xl hover:bg-coty-navy hover:text-white border border-coty-navy transition-colors duration-300">
                  OPEN POSITIONS
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 