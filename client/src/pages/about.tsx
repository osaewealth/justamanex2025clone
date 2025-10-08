import { useState, useEffect, useRef } from "react";
import { Search, Menu, ArrowRight, X, Phone, Briefcase, Globe, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import StandardHeader from "@/components/StandardHeader";
import { useYouTubeAutoplay } from "@/hooks/use-youtube-autoplay";
import { useTypewriter } from "@/hooks/use-typewriter";
import directorImage from "@/assets/Director.jpeg";
import davidImage from "@/assets/team/david-reindorf.jpg";
import samImage from "@/assets/team/Sameduafo_Accountant.jpg";
import musahImage from "@/assets/team/musahnantogma_bdm.jpg";
import ScrollToTop from "@/components/ScrollToTop";

// Import hero background image
import aboutusBg from "@/assets/aboutus.png";

export default function About() {
  const purposeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useYouTubeAutoplay({ threshold: 0.6, rootMargin: '0px 0px -100px 0px' });
  
  const heroText = "WHO\nWE ARE";
  const { typewriterIndex } = useTypewriter({ 
    text: heroText, 
    speed: 200, 
    delay: 15000 
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in', 'slide-in-from-bottom-4', 'duration-700');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    purposeRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <StandardHeader />

      {/* About Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          background: 'linear-gradient(135deg, rgba(230, 255, 250, 0.9) 0%, rgba(220, 250, 240, 0.9) 50%, rgba(200, 240, 230, 0.9) 100%), url("' + aboutusBg + '")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-coty-navy leading-tight mb-8 animate-fade-in-up animation-delay-800">
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
                              ? 'typed text-coty-navy opacity-100' 
                              : 'text-coty-navy opacity-20'
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
            <p className="text-xl lg:text-2xl text-coty-gray max-w-3xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-0">
              Fearless. Forward. You. We are one of the world's largest beauty companies with iconic brands across fragrance, color cosmetics, and skin & body care.
            </p>
            <div className="mt-12 text-coty-gray font-medium mobile-center animate-fade-in-up animation-delay-1200">
              <div className="w-8 h-px bg-coty-gray mr-3 animate-pulse"></div>
              <span className="text-sm tracking-wide animate-bounce">DISCOVER OUR STORY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-coty-navy mb-6">Our Story</h2>
              <p className="text-lg text-coty-gray mb-6 leading-relaxed text-justify">
                  Amanex Company Limited, founded in 2015 and incorporated in 2017, is a leading Ghanaian manufacturer of high-quality household, cosmetic, and plastic products, including air fresheners, soaps, and sanitizers. Based in Accra as a Free Zones Enterprise, we serve Ghana and export across Africa. Honored at the Ghana Club 100, we are committed to quality and innovation, aiming to be Africaâs top manufacturer in our field.              </p>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-3xl font-bold text-coty-navy">3</h3>
                  <p className="text-coty-gray">Iconic Brands</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-coty-navy">$1.0M+</h3>
                  <p className="text-coty-gray">Annual Revenue</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl shadow-2xl overflow-hidden h-full">
                <iframe
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/rrsyKhsZN-k?si=_Ntt1XeGpDIn_mOy&enablejsapi=1&origin=https://amanex.com"
                  title="Amanex Company Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full min-h-[400px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-20 bg-coty-gray-light w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto text-center">
          <h2 className="text-4xl font-bold text-coty-navy mb-12">Our Purpose</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div 
              ref={(el) => (purposeRefs.current[0] = el)}
              className="bg-white p-8 rounded-xl shadow-lg opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:scale-105 transform"
            >
              <div className="w-16 h-16 bg-coty-mint rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-coty-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9.5 9h5l-1.5 4.5L16 11l1 3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-coty-navy mb-4">Inspire Confidence</h3>
              <p className="text-coty-gray">We create products that help people express their unique beauty and feel confident in their own skin.</p>
            </div>
            <div 
              ref={(el) => (purposeRefs.current[1] = el)}
              className="bg-white p-8 rounded-xl shadow-lg opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:scale-105 transform"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-16 h-16 bg-coty-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-coty-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7h-3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3" />
                  <path d="M4 19V5l16 7-16 7z" />
                  <circle cx="4" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-coty-navy mb-4">Foster Creativity</h3>
              <p className="text-coty-gray">Beauty is an art form. We empower creativity and self-expression through innovative products and experiences.</p>
            </div>
            <div 
              ref={(el) => (purposeRefs.current[2] = el)}
              className="bg-white p-8 rounded-xl shadow-lg opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:scale-105 transform"
              style={{ transitionDelay: '400ms' }}
            >
              <div className="w-16 h-16 bg-coty-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-coty-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-coty-navy mb-4">Create Connection</h3>
              <p className="text-coty-gray">Beauty brings people together. We build bridges across cultures and communities through shared experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto">
          <h2 className="text-4xl font-bold text-coty-navy text-center mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="mb-6">
                <img 
                  src={davidImage} 
                  alt="David Reindorf - HR Manager" 
                  className="w-full h-64 object-contain mx-auto transition-transform duration-500 group-hover:scale-105 bg-white"
                />
              </div>
              <h3 className="text-xl font-bold text-coty-navy mb-2">David Reindorf</h3>
              <p className="text-coty-gray font-medium">HR Manager</p>
            </div>
            <div className="text-center group">
              <div className="mb-6">
                <img 
                  src={samImage} 
                  alt="Sam Eduafo - Accountant" 
                  className="w-full h-64 object-contain mx-auto transition-transform duration-500 group-hover:scale-105 bg-white"
                />
              </div>
              <h3 className="text-xl font-bold text-coty-navy mb-2">Sam Eduafo</h3>
              <p className="text-coty-gray font-medium">Accountant</p>
            </div>
            <div className="text-center group">
              <div className="mb-6">
                <img 
                  src={musahImage} 
                  alt="Musah Nantogma - Project Manager" 
                  className="w-full h-64 object-contain mx-auto transition-transform duration-500 group-hover:scale-105 bg-white"
                />
              </div>
              <h3 className="text-xl font-bold text-coty-navy mb-2">Musah Nantogma</h3>
              <p className="text-coty-gray font-medium">Project Manager</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}