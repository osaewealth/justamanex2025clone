import { useState, useEffect } from "react";
import { Search, Menu, ArrowRight, ChevronDown, X, Phone, Briefcase, Globe, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import ScrollToTop from "@/components/ScrollToTop";
import jdImage from "@/assets/jd.png";
import banner1Image from "@/assets/Banner1.jpg";
import banner2Image from "@/assets/Banner2.jpg";
import banner3Image from "@/assets/Banner3.jpg";
import banner4Image from "@/assets/productimages/Banner4.jpg";

// Import product images
import airfreshers from "@/assets/productimages/airfreshers.png";
import airfreshersgroup from "@/assets/productimages/airfreshersgroup.jpg";
import perfumes from "@/assets/productimages/perfumes.jpg";
import classcleaner from "@/assets/productimages/classcleaner.jpg";
import showergel2colors from "@/assets/productimages/showergel2colors.jpg";
import redperf from "@/assets/productimages/redperf.png";
import liquidsoup from "@/assets/productimages/liquidsoup.png";
import donation1 from "@/assets/productimages/donation-1.jpg";

// Import Instagram images
import instagram1 from '@/assets/instagram/1754494212936.jpeg';
import instagram2 from '@/assets/instagram/1754494208261.jpeg';
import instagram3 from '@/assets/instagram/1754494191808.jpeg';
import instagram4 from '@/assets/instagram/1754493975858.jpeg';
import instagram5 from '@/assets/instagram/1754493968553.jpeg';
import instagram6 from '@/assets/instagram/1754493901235 (1).jpeg';
import instagram7 from '@/assets/instagram/1754493879750.webp';
import instagram8 from '@/assets/instagram/1754493749820.jpeg';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const heroText = "WE ARE\nAMANEX";
  const typewriterSpeed = 200; // Slower, smoother typing speed
  const typewriterDelay = 15000; // 15 seconds between cycles
  


  const heroImages = [
  
    banner1Image,
    banner2Image,
    banner3Image,
    jdImage
  ];

  useEffect(() => {
    console.log("Home component mounted");
  }, []);

  // Auto-slide effect for hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Typewriter effect for hero text
  useEffect(() => {
    if (!isTyping) return;

    const typeInterval = setInterval(() => {
      setTypewriterIndex((prevIndex) => {
        if (prevIndex < heroText.length) {
          // Add pause between "WE ARE" and "AMANEX"
          if (prevIndex === 5) { // After "WE ARE"
            setTimeout(() => {
              setTypewriterIndex(prevIndex + 1);
            }, 800); // Wait 800ms before starting "AMANEX"
            return prevIndex;
          }
          return prevIndex + 1;
        } else {
          // Finished typing, wait then reset
          setTimeout(() => {
            setTypewriterIndex(0);
          }, 1500); // Wait 1.5 seconds before restarting
          return prevIndex;
        }
      });
    }, typewriterSpeed);

    return () => clearInterval(typeInterval);
  }, [isTyping, heroText, typewriterSpeed]);

  // Reset typewriter every 15 seconds with smoother transition
  useEffect(() => {
    const resetInterval = setInterval(() => {
      // Smooth transition: reset typewriter index
      setIsTyping(false);
      setTimeout(() => {
        setTypewriterIndex(0);
        setIsTyping(true);
      }, 200); // Reduced delay to 200ms for smoother transition
    }, typewriterDelay);

    return () => clearInterval(resetInterval);
  }, [typewriterDelay]);



  const instagramPosts = [
    {
      id: 1,
      image: instagram1,
      caption: "Behind the scenes at our manufacturing facility! Quality control in action 🏭✨ #AmanexQuality #ManufacturingExcellence",
      likes: 234,
      comments: 18,
      type: "image",
      url: "https://www.instagram.com/amanexcompanyltd"
    },
    {
      id: 2,
      image: instagram2,
      caption: "Fresh new air freshener collection launching soon! 🌸 Breathe in the difference #FreshAir #NewLaunch",
      likes: 189,
      comments: 12,
      type: "image",
      url: "https://www.instagram.com/amanexcompanyltd"
    },
    {
      id: 3,
      image: instagram3,
      caption: "Our team working hard to bring you the best products! 💪 #TeamAmanex #HardWork",
      likes: 156,
      comments: 8,
      type: "image",
      url: "https://www.instagram.com/amanexcompanyltd"
    },
    {
      id: 4,
      image: instagram4,
      caption: "Innovation meets tradition in our latest product line 🚀 #Innovation #QualityProducts",
      likes: 298,
      comments: 24,
      type: "video",
      url: "https://www.instagram.com/amanexcompanyltd"
    },
    {
      id: 5,
      image: instagram5,
      caption: "Sustainability is at the heart of everything we do 🌱 #Sustainability #EcoFriendly",
      likes: 267,
      comments: 15,
      type: "image",
      url: "https://www.instagram.com/amanexcompanyltd"
    },
    {
      id: 6,
      image: instagram6,
      caption: "Customer satisfaction is our priority! Thank you for choosing Amanex 🙏 #CustomerFirst #ThankYou",
      likes: 145,
      comments: 9,
      type: "image",
      url: "https://www.instagram.com/amanexcompanyltd"
    },
    {
      id: 7,
      image: instagram7,
      caption: "New product development in progress! Can't wait to share this with you 🔥 #NewProduct #ComingSoon",
      likes: 312,
      comments: 31,
      type: "image",
      url: "https://www.instagram.com/amanexcompanyltd"
    },
    {
      id: 8,
      image: instagram8,
      caption: "Quality control testing in action! Every product meets our high standards ✅ #QualityControl #Testing",
      likes: 178,
      comments: 11,
      type: "image",
      url: "https://www.instagram.com/amanexcompanyltd"
    }
  ];

  return (
    <div className="min-h-screen">
      <HomeHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden animate-fade-in">
        {/* Background Images with Auto-Slide */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="text-center lg:text-left w-full">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 animate-fade-in-up animation-delay-800">
              <div className="typewriter-text min-h-[1.2em]">
                {heroText.split('\n').map((line, lineIndex) => (
                  <div key={lineIndex} className="typewriter-line mb-2">
                    {line.split('').map((char, charIndex) => {
                      const totalCharIndex = lineIndex === 0 ? charIndex : lineIndex * line.length + charIndex;
                      const isTyped = totalCharIndex < typewriterIndex;
                      return (
                        <span 
                          key={charIndex} 
                          className={`typewriter-char ${
                            isTyped 
                              ? 'typed text-white opacity-100' 
                              : 'text-white opacity-20'
                          }`}
                        >
                          {char}
                        </span>
                      );
                    })}

                  </div>
                ))}
              </div>
            </h1>
            
            <p className="text-xl text-white mb-8 opacity-90 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-0">
              Discover our diverse selection of products, meticulously crafted to bring convenience, 
              freshness, and luxury into your home.
            </p>
            
            <a 
              href="/about-us" 
              className="bg-transparent text-white px-10 py-6 font-medium hover:bg-white hover:text-coty-navy border-2 border-white transition-all duration-300 flex items-center group w-fit mx-auto lg:mx-0 rounded-br-3xl animate-fade-in-up animation-delay-1200 hover:scale-105"
            >
              WHO WE ARE
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <div className="mt-12 text-white font-medium flex items-center justify-center animate-fade-in-up animation-delay-1600">
              <div className="w-8 h-px bg-white mr-3 animate-pulse"></div>
              <span className="text-sm tracking-wide animate-bounce">SCROLL UP</span>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 animate-fade-in-up animation-delay-1200">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">OUR TOP PRODUCTS</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              Discover our specialized product categories that bring freshness, cleanliness, and comfort to your home and personal care needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Air Fresheners Card */}
            <div className="group bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer" onClick={() => window.location.href = '/air-fresheners'}>
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={airfreshersgroup}
                  alt="Air Fresheners" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-coty-navy mb-6 group-hover:text-coty-gold transition-colors duration-300">AIR FRESHENERS</h3>
              <div className="w-10 h-10 rounded-full border-2 border-coty-navy flex items-center justify-center mx-auto group-hover:border-coty-gold group-hover:bg-coty-navy transition-all duration-300">
                <svg className="w-5 h-5 text-coty-navy group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Perfumes & Body Care Card */}
            <div className="group bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer" onClick={() => window.location.href = '/perfumes-body-care'}>
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={perfumes}
                  alt="Perfumes & Body Care" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-coty-navy mb-6 group-hover:text-coty-gold transition-colors duration-300">PERFUMES & BODY CARE</h3>
              <div className="w-10 h-10 rounded-full border-2 border-coty-navy flex items-center justify-center mx-auto group-hover:border-coty-gold group-hover:bg-coty-navy transition-all duration-300">
                <svg className="w-5 h-5 text-coty-navy group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Cleaning Products Card */}
            <div className="group bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer" onClick={() => window.location.href = '/cleaning-products'}>
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={classcleaner}
                  alt="Cleaning Products" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-coty-navy mb-6 group-hover:text-coty-gold transition-colors duration-300">CLEANING PRODUCTS</h3>
              <div className="w-10 h-10 rounded-full border-2 border-coty-navy flex items-center justify-center mx-auto group-hover:border-coty-gold group-hover:bg-coty-navy transition-all duration-300">
                <svg className="w-5 h-5 text-coty-navy group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Personal Care Card */}
            <div className="group bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer" onClick={() => window.location.href = '/personal-care'}>
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={showergel2colors}
                  alt="Personal Care" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-coty-navy mb-6 group-hover:text-coty-gold transition-colors duration-300">PERSONAL CARE</h3>
              <div className="w-10 h-10 rounded-full border-2 border-coty-navy flex items-center justify-center mx-auto group-hover:border-coty-gold group-hover:bg-coty-navy transition-all duration-300">
                <svg className="w-5 h-5 text-coty-navy group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-right">
            <a href="/our-brands" className="inline-flex items-center gap-2 text-coty-navy hover:text-coty-gold font-medium transition-colors duration-300 group">
              VIEW ALL PRODUCTS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-pink-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <h2 className="text-4xl font-bold text-coty-navy">@amanexcompanyltd</h2>
            </div>
            <p className="text-lg text-coty-gray max-w-2xl mx-auto">
              Follow our journey and discover the latest updates, behind-the-scenes moments, and product highlights
            </p>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {instagramPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => window.open(post.url, '_blank')}
              >
                {/* Post Image */}
                <img 
                  src={post.image} 
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Instagram Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  {/* Instagram Icons */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-4 text-white">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="text-sm font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                      </svg>
                      <span className="text-sm font-medium">{post.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Post Type Indicator */}
                {post.type === 'video' && (
                  <div className="absolute top-3 right-3">
                    <svg className="w-6 h-6 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                )}

                {/* Caption Preview (on hover) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm line-clamp-2">{post.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Follow Button */}
          <div className="text-center">
            <Button 
              className="w-fit flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-md font-medium rounded-br-3xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 mx-auto shadow-lg hover:shadow-xl"
              onClick={() => window.open('https://www.instagram.com/amanexcompanyltd', '_blank')}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              FOLLOW US ON INSTAGRAM
            </Button>
          </div>
        </div>
      </section>



      {/* Our Mission Section - Inspired by Homedede */}
      <section className="bg-red-50 py-16 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <img 
              src={banner4Image} 
              alt="Our Mission" 
              className="w-full h-[300px] md:h-[400px] rounded-xl shadow-lg object-cover" 
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
            <h2 className="text-4xl font-bold text-coty-navy mb-6">Our Mission</h2>
            <p className="text-lg text-gray-800">
              Continuous quality improvement, employment creation,<br />
              and sustainable growth in the manufacturing sector.
            </p>
            <a href="/our-story#mission" className="w-fit flex items-center gap-4 mt-8 px-8 py-4 bg-coty-navy text-white text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300">
              Learn More
              <ArrowRight className="text-2xl" />
            </a>
          </div>
        </div>
      </section>

      {/* Our Vision Section - Inspired by Homedede */}
      <section className="bg-red-50 py-16 px-4">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
            <h2 className="text-4xl font-bold text-coty-navy mb-6">Our Vision</h2>
            <p className="text-lg text-gray-800">
              To become one of Africa's leading household,<br />
              cosmetics, and plastic manufacturers.
            </p>
            <a href="/our-impact#vision" className="w-fit flex items-center gap-4 mt-8 px-8 py-4 bg-coty-navy text-white text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300">
              Learn More
              <ArrowRight className="text-2xl" />
            </a>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <img 
              src={donation1} 
              alt="Our Vision" 
              className="w-full h-[300px] md:h-[400px] rounded-xl shadow-lg object-cover" 
            />
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
