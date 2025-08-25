import { useState, useEffect, useRef } from "react";
import { Search, Menu, ArrowRight, X, Phone, Briefcase, Globe, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import StandardHeader from "@/components/StandardHeader";
import directorImage from "@/assets/Director.jpeg";
import ScrollToTop from "@/components/ScrollToTop";

export default function About() {
  const purposeRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-coty-mint-light to-coty-gray-light pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-coty-navy leading-tight mb-8 animate-fade-in-up animation-delay-800">
              WHO<br />
              <span className="text-coty-navy">WE ARE</span>
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
                Since 1904, Coty has been a pioneer in the beauty industry. We believe beauty is a force for transformation – inspiring confidence, creativity, and connection.
              </p>
              <p className="text-lg text-coty-gray mb-6 leading-relaxed text-justify">
                Today, we're one of the world's largest beauty companies with a portfolio of iconic brands that span across prestige and consumer beauty.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-3xl font-bold text-coty-navy">40+</h3>
                  <p className="text-coty-gray">Iconic Brands</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-coty-navy">$3.5M+</h3>
                  <p className="text-coty-gray">Annual Revenue</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl shadow-2xl overflow-hidden h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/rrsyKhsZN-k?si=_Ntt1XeGpDIn_mOy"
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
                <span className="text-2xl animate-pulse">🌟</span>
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
                <span className="text-2xl animate-pulse">🎨</span>
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
                <span className="text-2xl animate-pulse">🤝</span>
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
          <h2 className="text-4xl font-bold text-coty-navy text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <img 
                src={directorImage} 
                alt="CEO Portrait" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-coty-navy">Sue Nabi</h3>
              <p className="text-coty-gray">Chief Executive Officer</p>
            </div>
            <div className="text-center">
              <img 
                src={directorImage} 
                alt="CEO Portrait" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-coty-navy">ERIC AMANQUANOR</h3>
              <p className="text-coty-gray">C.E.O</p>
            </div>
            <div className="text-center">
              <img 
                src={directorImage} 
                alt="COO Portrait" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-coty-navy">Sergio Pedreiro</h3>
              <p className="text-coty-gray">Chief Operating Officer</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}