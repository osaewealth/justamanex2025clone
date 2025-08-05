import React, { useState, useEffect } from 'react';
import { Search, Menu, ArrowRight, ChevronDown, X, Phone, Briefcase, Globe, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

export default function HomeHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <a href="/" className={`relative font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300 ${
              isScrolled ? 'text-coty-navy after:bg-coty-navy' : 'text-white after:bg-white'
            }`}>Home</a>
            <a href="/about-us" className={`relative font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300 ${
              isScrolled ? 'text-coty-navy after:bg-coty-navy' : 'text-white after:bg-white'
            }`}>About Us</a>
            <a href="/our-story" className={`relative font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300 ${
              isScrolled ? 'text-coty-navy after:bg-coty-navy' : 'text-white after:bg-white'
            }`}>Our Story</a>
            <a href="/our-brands" className={`relative font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300 ${
              isScrolled ? 'text-coty-navy after:bg-coty-navy' : 'text-white after:bg-white'
            }`}>Our Brands</a>
            <a href="/our-impact" className={`relative font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300 ${
              isScrolled ? 'text-coty-navy after:bg-coty-navy' : 'text-white after:bg-white'
            }`}>Our Impact</a>
            <a href="/contact-us" className={`relative font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:-bottom-1 after:transition-all after:duration-300 ${
              isScrolled ? 'text-coty-navy after:bg-coty-navy' : 'text-white after:bg-white'
            }`}>Contact Us</a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              {/* Open Positions Button */}
              <a href="/careers" className={`w-fit flex items-center gap-4 px-6 py-3 text-sm font-medium rounded-br-3xl border transition-colors duration-300 ${
                isScrolled
                  ? 'bg-coty-navy text-white hover:bg-transparent hover:text-coty-navy border-coty-navy'
                  : 'bg-white text-coty-navy hover:bg-transparent hover:text-white border-white'
              }`}>
                OPEN POSITIONS
              </a>
            </div>

            {/* Animated Search Field - Desktop Only */}
            <div className="relative hidden lg:block">
              {!isSearchOpen ? (
                <Button
                  onClick={() => setIsSearchOpen(true)}
                  className={`w-fit flex items-center gap-4 px-6 py-3 text-sm font-medium rounded-br-3xl border transition-colors duration-300 ${
                    isScrolled
                      ? 'bg-coty-navy text-white hover:bg-transparent hover:text-coty-navy border-coty-navy'
                      : 'bg-white text-coty-navy hover:bg-transparent hover:text-white border-white'
                  }`}
                >
                  <Search className="h-5 w-5" />
                </Button>
              ) : (
                <form onSubmit={handleSearchSubmit} className="flex items-center bg-white border border-coty-navy rounded-full px-4 py-2 shadow-lg animate-in slide-in-from-right-2 duration-300">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="What can we help you find?"
                    className="w-64 px-3 py-1 bg-transparent border-none outline-none text-coty-navy placeholder-coty-gray text-sm"
                    autoFocus
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="ml-2 p-1 text-coty-navy hover:text-coty-gray transition-colors duration-200"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </form>
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
              <a href="/" className="text-coty-navy font-medium hover:text-coty-gray transition-colors duration-200">Home</a>
              <a href="/about-us" className="text-coty-navy font-medium hover:text-coty-gray transition-colors duration-200">About Us</a>
              <a href="/our-story" className="text-coty-navy font-medium hover:text-coty-gray transition-colors duration-200">Our Story</a>
              <a href="/our-brands" className="text-coty-navy font-medium hover:text-coty-gray transition-colors duration-200">Our Brands</a>
              <a href="/our-impact" className="text-coty-navy font-medium hover:text-coty-gray transition-colors duration-200">Our Impact</a>
              <a href="/contact-us" className="text-coty-navy font-medium hover:text-coty-gray transition-colors duration-200">Contact Us</a>
              <div className="pt-4 border-t border-gray-200">
                <a href="/careers" className="block w-full text-center px-6 py-3 bg-coty-navy text-white text-sm font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300">
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