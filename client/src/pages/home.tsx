import { useState, useEffect } from "react";
import { Search, Menu, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const newsArticles = [
    {
      id: 1,
      category: "PRESS RELEASE",
      date: "JULY 16, 2025",
      title: "INTRODUCING ORIGEN: A fragrance collection where scent meets adventure",
      excerpt: "Coty, Inc. unveils Origen, a new Consumer Beauty fragrance brand inspired by the spirit of discovery and scent stories from around the world.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 2,
      category: "PRESS RELEASE",
      date: "JUNE 10, 2025",
      title: "INTRODUCING ADIDAS VIBES FRAGRANCE HAIR & BODY MISTS",
      excerpt: "Building on the success of the 'Vibes' Eau de Parfum collection, Coty launches new mood-boosting sportswear scents.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 3,
      category: "PRESS RELEASE",
      date: "JUNE 3, 2025",
      title: "Marc Jacobs celebrates anniversary at Maison Orveda",
      excerpt: "Maison Orveda hosted an intimate fireside conversation between Marc Jacobs and Bridget Foley in New York.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ];

  const linkedinPosts = [
    {
      id: 1,
      date: "July 24, 2025",
      content: "Soft. Strong. Unstoppable. Introducing LeGer Signature Wildflower—a bold new fragrance inspired by flowers that bloom fiercely in the desert sun. 🌸🌵"
    },
    {
      id: 2,
      date: "July 23, 2025",
      content: "Exciting news from Coty! Congratulating Jerome Auvinet on his promotion to Chief Information, Digital Innovation & Business Services Officer."
    },
    {
      id: 3,
      date: "July 14, 2025",
      content: "Award-winning vibes only. 🏆 Coty claimed FIVE wins at the inaugural Marie Claire UK Fragrance Awards, celebrating scent legends and bold innovations."
    },
    {
      id: 4,
      date: "July 8, 2025",
      content: "Miley Cyrus returns as the face of Gucci Flora Gorgeous Gardenia Eau de Parfum Intense. Shot by Tyler Mitchell against the L.A. skyline."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-coty-navy font-bold text-2xl tracking-tight">
                COTY
                <div className="text-xs font-normal text-coty-gray -mt-1">SINCE 1904</div>
              </div>
            </div>

            {/* Desktop Navigation - Show on desktop (1080px+) */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="relative text-coty-navy font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-coty-navy after:left-0 after:-bottom-1 after:transition-all after:duration-300">Our Purpose</a>
              <a href="#" className="relative text-coty-navy font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-coty-navy after:left-0 after:-bottom-1 after:transition-all after:duration-300">Our Brands</a>
              <a href="#" className="relative text-coty-navy font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-coty-navy after:left-0 after:-bottom-1 after:transition-all after:duration-300">Sustainability</a>
              <a href="#" className="relative text-coty-navy font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-coty-navy after:left-0 after:-bottom-1 after:transition-all after:duration-300">Innovation</a>
              <a href="#" className="relative text-coty-navy font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-coty-navy after:left-0 after:-bottom-1 after:transition-all after:duration-300">Your Career</a>
              <a href="#" className="relative text-coty-navy font-medium transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-coty-navy after:left-0 after:-bottom-1 after:transition-all after:duration-300">News</a>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4">
                {/* Language Selector */}
                <div className="relative">
                  <select className="bg-transparent border border-coty-navy text-coty-navy px-3 py-1 rounded text-sm font-medium cursor-pointer hover:bg-coty-navy hover:text-white transition-colors duration-200">
                    <option>EN</option>
                    <option>FR</option>
                    <option>DE</option>
                    <option>ES</option>
                  </select>
                </div>
                
                {/* Open Positions Button */}
                <button className="border border-coty-navy text-coty-navy text-sm font-medium px-4 py-2 rounded hover:bg-coty-navy hover:text-white transition-all duration-300">
                  OPEN POSITIONS
                </button>
              </div>

              {/* Search Icon */}
              <Button variant="ghost" size="icon" className="text-coty-navy hover:text-coty-navy transition-colors duration-200">
                <Search className="h-5 w-5" />
              </Button>

              {/* Animated Mobile Menu Button */}
              <button 
                className="lg:hidden flex min-h-[24px] flex-col items-center justify-center gap-y-1 py-2 px-2"
                aria-label="Open menu" 
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span 
                  className={`h-0.5 w-6 bg-coty-navy transition duration-700 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                  }`}
                />
                <span 
                  className={`h-0.5 w-6 bg-coty-navy transition duration-700 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-6">
            <nav className="space-y-4">
              <a href="#" className="block relative text-coty-navy font-medium py-2 transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-coty-navy after:left-0 after:-bottom-0 after:transition-all after:duration-300">Our Purpose</a>
              <a href="#" className="block relative text-coty-navy font-medium py-2 transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-coty-navy after:left-0 after:-bottom-0 after:transition-all after:duration-300">Our Brands</a>
              <a href="#" className="block relative text-coty-navy font-medium py-2 transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-coty-navy after:left-0 after:-bottom-0 after:transition-all after:duration-300">Sustainability</a>
              <a href="#" className="block relative text-coty-navy font-medium py-2 transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-coty-navy after:left-0 after:-bottom-0 after:transition-all after:duration-300">Innovation</a>
              <a href="#" className="block relative text-coty-navy font-medium py-2 transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-coty-navy after:left-0 after:-bottom-0 after:transition-all after:duration-300">Your Career</a>
              <a href="#" className="block relative text-coty-navy font-medium py-2 transition-all duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-coty-navy after:left-0 after:-bottom-0 after:transition-all after:duration-300">News</a>
            </nav>
            
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
              <div>
                <select className="w-full bg-transparent border border-coty-navy text-coty-navy px-3 py-2 rounded text-sm font-medium">
                  <option>EN</option>
                  <option>FR</option>
                  <option>DE</option>
                  <option>ES</option>
                </select>
              </div>
              <button className="w-full border border-coty-navy text-coty-navy text-sm font-medium px-4 py-2 rounded hover:bg-coty-navy hover:text-white transition-all duration-300">
                OPEN POSITIONS
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 50%, #80cbc4 100%)'
        }}
      >
        {/* Artistic Cracked Background Texture */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-coty-navy leading-tight mb-8">
              WE<br />
              ARE<br />
              <span className="text-coty-navy">COTY</span>
            </h1>
            
            <Button className="bg-coty-navy text-white px-8 py-4 font-semibold hover:bg-coty-blue transition-colors duration-300 flex items-center group">
              WHO WE ARE
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>

            <div className="mt-12 text-coty-gray font-medium">
              <div className="flex items-center">
                <div className="w-8 h-px bg-coty-gray mr-3"></div>
                <span className="text-sm tracking-wide">SCROLL DOWN</span>
              </div>
            </div>
          </div>

          {/* Right Content - Single Hero Image */}
          <div className="relative">
            <div className="relative z-20">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
                alt="Diverse models representing Coty's inclusive beauty vision" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">IN THE NEWS</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {newsArticles.map((article) => (
              <Card key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-coty-gray text-sm font-medium">{article.category}</span>
                    <span className="text-coty-gray text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-coty-navy mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-coty-gray mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button className="bg-coty-navy text-white px-6 py-2 font-medium hover:bg-coty-blue transition-colors duration-300 flex items-center group">
                    READ MORE
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              className="border-2 border-coty-navy text-coty-navy px-8 py-3 font-semibold hover:bg-coty-navy hover:text-white transition-colors duration-300"
            >
              READ ALL NEWS
            </Button>
          </div>
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="py-20 bg-coty-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">FROM OUR LINKEDIN</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {linkedinPosts.map((post) => (
              <Card key={post.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-sm text-coty-gray mb-3">{post.date}</div>
                <p className="text-coty-navy font-medium mb-4 line-clamp-4">
                  {post.content}
                </p>
                <Button 
                  variant="link" 
                  className="text-coty-gold font-medium hover:text-coty-navy transition-colors duration-200 p-0"
                >
                  READ MORE
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              className="border-2 border-coty-navy text-coty-navy px-8 py-3 font-semibold hover:bg-coty-navy hover:text-white transition-colors duration-300 flex items-center mx-auto"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              FOLLOW US ON LINKEDIN
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coty-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Left Side - Brand Message */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
                FEARLESS.<br />
                FORWARD.<br />
                YOU.
              </h2>
            </div>

            {/* Right Side - Footer Links */}
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Supplier Portal</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Use</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Investors</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Modern Slavery Act &<br />Transparency in Supply Chains<br />Statement</a></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors duration-200">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Our Policies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Notice</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Ethics & Compliance Hotline</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mb-16">
            <h4 className="font-medium text-white mb-4">Follow Coty</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Facebook">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Twitter">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Instagram">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987s11.987-5.369 11.987-11.987C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.197-2.25-1.197-3.429 0-1.178.449-2.48 1.197-3.428.749-.949 1.9-1.56 3.197-1.56s2.449.611 3.198 1.56c.748.948 1.197 2.25 1.197 3.428 0 1.179-.449 2.481-1.197 3.429-.749.948-1.901 1.559-3.198 1.559zm7.718-6.988c-.297 0-.54-.242-.54-.54s.243-.54.54-.54.54.242.54.54-.243.54-.54.54zM15.55 12c0 1.961-1.589 3.55-3.55 3.55S8.45 13.961 8.45 12s1.589-3.55 3.55-3.55 3.55 1.589 3.55 3.55z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="LinkedIn">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Section with Logo and Copyright */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="text-gray-300 text-sm mb-6 lg:mb-0">
                <p>© 2025, Coty Inc.</p>
                <p>All trademarks registered. All rights reserved.</p>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Coty circular logo */}
                <div className="w-16 h-16 border border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="text-gray-300 text-sm text-center lg:text-right">
                  <p>NYSE</p>
                  <p className="font-bold">$4.99 -0.1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
