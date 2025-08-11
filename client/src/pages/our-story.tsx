import { useState, useEffect, useRef } from "react";
import { ArrowRight, Users, Award, Globe, Heart, Search, X, ArrowUp, Star, Zap, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import StandardHeader from "@/components/StandardHeader";
import ScrollToTop from "@/components/ScrollToTop";

export default function OurStory() {
  // Custom CSS for 3D effects
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .rotate-y-90 {
        transform: rotateY(90deg);
      }
      .rotate-y-2 {
        transform: rotateY(2deg);
      }
      .preserve-3d {
        transform-style: preserve-3d;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Refs for Our Values section animations
  const valuesRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer for Values Section Animation
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

    valuesRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Handle hash navigation for direct section access
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashNavigation();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, []);



  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Amanex Company Limited was established with a vision to create high-quality personal care and household products."
    },
    {
      year: "2015",
      title: "Product Expansion",
      description: "Launched our first line of air fresheners and perfumes, marking the beginning of our fragrance journey."
    },
    {
      year: "2018",
      title: "Market Growth",
      description: "Expanded our product range to include liquid soaps, shower gels, and cleaning solutions."
    },
    {
      year: "2020",
      title: "Quality Certification",
      description: "Achieved international quality standards and expanded our distribution network across Ghana."
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Established our state-of-the-art facility in Oshiyie, Greater Accra, Ghana."
    }
  ];

  // Intersection Observer for Timeline Section Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTimelineVisible(true);
            // Start the milestone animation sequence
            const interval = setInterval(() => {
              setActiveMilestone(prev => {
                if (prev < milestones.length - 1) {
                  return prev + 1;
                } else {
                  clearInterval(interval);
                  return prev;
                }
              });
            }, 800);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineSection = document.getElementById('timeline-section');
    if (timelineSection) {
      observer.observe(timelineSection);
    }

    return () => {
      if (timelineSection) {
        observer.unobserve(timelineSection);
      }
    };
  }, [milestones.length]);

  const values = [
    {
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      title: "Quality First",
      description: "We never compromise on quality, ensuring every product meets the highest standards."
    },
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do, driving our innovation and growth."
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-500" />,
      title: "Sustainability",
      description: "We're committed to environmentally responsible practices and sustainable product development."
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      title: "Innovation",
      description: "We continuously innovate to bring cutting-edge solutions and exceptional products to our customers."
    }
  ];

  return (
    <div className="min-h-screen">
      <StandardHeader />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-coty-navy leading-tight mb-8 animate-fade-in-up animation-delay-800">
              OUR<br />
              <span className="text-coty-navy">STORY</span>
            </h1>
            
            <p className="text-xl text-coty-gray mb-8 max-w-3xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-0">
              From humble beginnings to becoming a trusted name in personal care and household products, 
              our journey is one of passion, innovation, and unwavering commitment to quality.
            </p>

            <div className="mt-12 text-coty-gray font-medium mobile-center animate-fade-in-up animation-delay-1200">
              <div className="w-8 h-px bg-coty-gray mr-3 animate-pulse"></div>
              <span className="text-sm tracking-wide animate-bounce">SCROLL TO EXPLORE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-coty-navy mb-6">Our Mission</h2>
              <p className="text-lg text-coty-gray mb-6">
                With years of experience, we specialize in creating high-quality air fresheners, perfumes, 
                body splashes, multipurpose liquid soaps, insecticide sprays, shower gels, and glass cleaners. 
                Our commitment to excellence drives us to innovate and deliver products that exceed expectations.
              </p>
              <p className="text-lg text-coty-gray mb-8">
                We believe that every home deserves products that not only clean and refresh but also bring 
                joy and comfort to daily routines. This belief drives our continuous innovation and quality improvement.
              </p>
              <a href="/our-impact" className="w-fit flex items-center gap-4 px-8 py-4 bg-coty-navy text-white text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300">
                LEARN MORE
                <ArrowRight className="text-2xl" />
              </a>
            </div>
            <div className="relative">
              <div className="rounded-lg shadow-xl overflow-hidden h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ZhAm4mARwE0?si=76vyI8PRc7WRMWjO"
                  title="Amanex Company Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full min-h-[500px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">Our Values</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              These core values guide everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                ref={el => valuesRefs.current[index] = el}
                className="bg-white rounded-xl p-8 text-center opacity-0 translate-y-8 transition-all duration-700 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transform"
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-gray-50 to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-coty-navy mb-4">{value.title}</h3>
                <p className="text-coty-gray leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline-section" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-coty-navy rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-coty-gold rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-500 rounded-full animate-spin"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isTimelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold text-coty-navy mb-4">Our Journey</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              From our founding to today, here are the key milestones that shaped our company.
            </p>
          </div>

          <div className="relative">
            {/* Animated Timeline Line - Hidden on mobile, visible on desktop */}
            <div className={`hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-coty-navy via-coty-gold to-coty-navy transition-all duration-2000 ease-out ${
              isTimelineVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`} style={{ transformOrigin: 'top' }}></div>
            
            {/* Mobile Timeline Line - Vertical line on mobile */}
            <div className={`lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coty-navy via-coty-gold to-coty-navy transition-all duration-2000 ease-out ${
              isTimelineVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`} style={{ transformOrigin: 'top' }}></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } transition-all duration-1000 ease-out ${
                    isTimelineVisible && index <= activeMilestone 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: `${index * 300}ms`
                  }}
                >
                  {/* Animated Timeline Dot - Desktop */}
                  <div className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 ease-out ${
                    isTimelineVisible && index <= activeMilestone
                      ? 'scale-100 bg-coty-gold' 
                      : 'scale-0 bg-coty-navy'
                  }`} style={{
                    transitionDelay: `${index * 300 + 200}ms`
                  }}>
                    <div className="absolute inset-0 bg-coty-gold rounded-full animate-ping opacity-75"></div>
                  </div>
                  
                  {/* Animated Timeline Dot - Mobile */}
                  <div className={`lg:hidden absolute left-8 transform -translate-x-1/2 w-4 h-4 rounded-full border-3 border-white shadow-lg transition-all duration-500 ease-out ${
                    isTimelineVisible && index <= activeMilestone
                      ? 'scale-100 bg-coty-gold' 
                      : 'scale-0 bg-coty-navy'
                  }`} style={{
                    transitionDelay: `${index * 300 + 200}ms`
                  }}>
                    <div className="absolute inset-0 bg-coty-gold rounded-full animate-ping opacity-75"></div>
                  </div>
                  
                  {/* Content Card with Hover-triggered 3D Rotation Effect */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} mt-8 lg:mt-0 ml-16 lg:ml-0`}>
                    <div 
                      className={`transform transition-all duration-700 ease-out ${
                        isTimelineVisible && index <= activeMilestone
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-12'
                      } ${
                        hoveredCard === index ? 'rotate-y-12 scale-105' : 'rotate-y-0 scale-100'
                      }`} 
                      style={{
                        transitionDelay: `${index * 300 + 400}ms`,
                        transformStyle: 'preserve-3d'
                      }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onTouchStart={() => setHoveredCard(index)}
                      onTouchEnd={() => setHoveredCard(null)}
                    >
                      <Card className="bg-white rounded-xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border-l-4 border-coty-gold cursor-pointer active:scale-95 lg:active:scale-100">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-coty-gold font-bold text-xl lg:text-2xl">{milestone.year}</div>
                          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-coty-gold to-yellow-400 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <h3 className="text-lg lg:text-xl font-bold text-coty-navy mb-3 lg:mb-4">{milestone.title}</h3>
                        <p className="text-sm lg:text-base text-coty-gray leading-relaxed">{milestone.description}</p>
                        
                        {/* Animated Progress Bar */}
                        <div className="mt-4 lg:mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r from-coty-gold to-yellow-400 transition-all duration-1000 ease-out ${
                            isTimelineVisible && index <= activeMilestone ? 'w-full' : 'w-0'
                          }`} style={{
                            transitionDelay: `${index * 300 + 600}ms`
                          }}></div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coty-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Story</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover our products and experience the quality that has made us a trusted name in personal care and household products.
          </p>
          <a href="/our-brands" className="w-fit flex items-center gap-4 px-8 py-4 bg-white text-coty-navy text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-white border border-white transition-colors duration-300 mx-auto">
            EXPLORE OUR PRODUCTS
            <ArrowRight className="text-2xl" />
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
} 