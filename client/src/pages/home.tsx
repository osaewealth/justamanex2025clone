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

            {/* Desktop Navigation - Show on xl screens (1280px+) */}
            <nav className="hidden xl:flex items-center space-x-8">
              <a href="#" className="text-coty-navy font-medium hover:text-coty-gold transition-colors duration-200">Our Purpose</a>
              <a href="#" className="text-coty-navy font-medium hover:text-coty-gold transition-colors duration-200">Our Brands</a>
              <a href="#" className="text-coty-navy font-medium hover:text-coty-gold transition-colors duration-200">Sustainability</a>
              <a href="#" className="text-coty-navy font-medium hover:text-coty-gold transition-colors duration-200">Innovation</a>
              <a href="#" className="text-coty-navy font-medium hover:text-coty-gold transition-colors duration-200">Your Career</a>
              <a href="#" className="text-coty-navy font-medium hover:text-coty-gold transition-colors duration-200">News</a>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden xl:flex items-center space-x-4">
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
                <Button 
                  variant="outline" 
                  className="border-coty-navy text-coty-navy hover:bg-coty-navy hover:text-white transition-colors duration-200"
                >
                  OPEN POSITIONS
                </Button>
              </div>

              {/* Search Icon */}
              <Button variant="ghost" size="icon" className="text-coty-navy hover:text-coty-gold">
                <Search className="h-5 w-5" />
              </Button>

              {/* Animated Mobile Menu Button */}
              <button 
                className="xl:hidden flex min-h-[24px] flex-col items-center justify-center gap-y-1 py-2 px-2"
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
        <div className={`xl:hidden bg-white border-t transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-6">
            <nav className="space-y-4">
              <a href="#" className="block text-coty-navy font-medium py-2 hover:text-coty-gold transition-colors duration-200">Our Purpose</a>
              <a href="#" className="block text-coty-navy font-medium py-2 hover:text-coty-gold transition-colors duration-200">Our Brands</a>
              <a href="#" className="block text-coty-navy font-medium py-2 hover:text-coty-gold transition-colors duration-200">Sustainability</a>
              <a href="#" className="block text-coty-navy font-medium py-2 hover:text-coty-gold transition-colors duration-200">Innovation</a>
              <a href="#" className="block text-coty-navy font-medium py-2 hover:text-coty-gold transition-colors duration-200">Your Career</a>
              <a href="#" className="block text-coty-navy font-medium py-2 hover:text-coty-gold transition-colors duration-200">News</a>
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
              <Button 
                variant="outline" 
                className="w-full border-coty-navy text-coty-navy hover:bg-coty-navy hover:text-white transition-colors duration-200"
              >
                OPEN POSITIONS
              </Button>
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
      <footer className="bg-coty-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Side - Brand Message */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
                FEARLESS.<br />
                FORWARD.<br />
                YOU.
              </h2>
            </div>

            {/* Right Side - Footer Links */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Supplier Portal</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Use</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Investors</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Modern Slavery Act & Transparency in Supply Chains Statement</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors duration-200">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Our Policies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Notice</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors duration-200">Ethics & Compliance Hotline</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="mb-6 lg:mb-0">
                <h4 className="font-semibold mb-4">Follow Coty</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.986C24.007 5.369 18.641.001.012.001z.017-.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="text-center lg:text-right">
                {/* Coty circular logo placeholder */}
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <span className="text-white font-bold text-sm">COTY</span>
                </div>
                <div className="text-gray-300 text-sm">
                  <p>© 2025, Coty Inc.</p>
                  <p>All trademarks registered. All rights reserved.</p>
                  <p className="mt-2">NYSE: COTY</p>
                  <p>$5.15 0.03</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
