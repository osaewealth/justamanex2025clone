import { useState, useEffect, useRef } from "react";
import { ArrowRight, Users, Globe, Heart, Award, TrendingUp, Search, X, ArrowUp, Leaf, Building2, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import StandardHeader from "@/components/StandardHeader";
import ScrollToTop from "@/components/ScrollToTop";

export default function OurImpact() {
  const [animatedStats, setAnimatedStats] = useState({
    countries: 0,
    customers: 0,
    suppliers: 0,
    employees: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isSustainabilityVisible, setIsSustainabilityVisible] = useState(false);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  
  const statsRef = useRef<HTMLDivElement>(null);
  const sustainabilityRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            setIsStatsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  // Intersection Observer for general animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sustainabilityRef.current) {
              setIsSustainabilityVisible(true);
            } else if (entry.target === testimonialsRef.current) {
              setIsTestimonialsVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sustainabilityRef.current) observer.observe(sustainabilityRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

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

  const animateStats = () => {
    const targets = {
      countries: 9,
      customers: 5000,
      suppliers: 50,
      employees: 1000
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const animate = () => {
      if (currentStep >= steps) {
        setAnimatedStats(targets);
        return;
      }

      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats({
        countries: Math.floor(targets.countries * easeOutQuart),
        customers: Math.floor(targets.customers * easeOutQuart),
        suppliers: Math.floor(targets.suppliers * easeOutQuart),
        employees: Math.floor(targets.employees * easeOutQuart)
      });

      currentStep++;
      setTimeout(animate, stepDuration);
    };

    animate();
  };

  const impactStats = [
    {
      number: "9+",
      label: "Countries",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
    },
    {
      number: "5000+",
      label: "Customers",
      icon: <Users className="h-8 w-8" />,
      color: "bg-green-100 text-green-600 group-hover:bg-green-200"
    },
    {
      number: "50+",
      label: "Suppliers",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200"
    },
    {
      number: "1000+",
      label: "Employees",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-red-100 text-red-600 group-hover:bg-red-200"
    }
  ];

  const sustainabilityInitiatives = [
    {
      title: "Environmental Responsibility",
      description: "We're committed to reducing our environmental footprint through sustainable packaging and eco-friendly manufacturing processes.",
      icon: <Leaf className="h-6 w-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Community Development",
      description: "Supporting local communities through employment opportunities and educational initiatives in Greater Accra and beyond.",
      icon: <Building2 className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Quality Standards",
      description: "Maintaining the highest quality standards while ensuring our products are safe for families and the environment.",
      icon: <Award className="h-6 w-6" />,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Innovation & Growth",
      description: "Continuously innovating our product range to meet evolving customer needs and market demands.",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Customer",
      content: "Amanex products have transformed my home. The quality and fragrance are unmatched. I trust them completely for my family's needs.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Retail Partner",
      content: "Working with Amanex has been a game-changer for our business. Their commitment to quality and customer service is exceptional.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Amina Osei",
      role: "Local Resident",
      content: "As a resident of Greater Accra, I'm proud to see a local company making such a positive impact in our community.",
      rating: 5,
      avatar: "AO"
    }
  ];

  return (
    <div className="min-h-screen">
      <StandardHeader />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #86efac 100%)'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-coty-navy leading-tight mb-8 animate-fade-in-up animation-delay-800">
              OUR<br />
              <span className="text-coty-navy">IMPACT</span>
            </h1>
            
            <p className="text-xl text-coty-gray mb-8 max-w-3xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-0">
              Making a positive difference in communities, environment, and lives through quality products 
              and sustainable practices.
            </p>

            <div className="mt-12 text-coty-gray font-medium mobile-center animate-fade-in-up animation-delay-1200">
              <div className="w-8 h-px bg-coty-gray mr-3 animate-pulse"></div>
              <span className="text-sm tracking-wide animate-bounce">EXPLORE OUR IMPACT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section id="stats-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">Our Reach</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              From local communities to international markets, our impact continues to grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ease-out ${
                  isStatsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  minHeight: '200px'
                }}
              >
                <Card className="bg-white rounded-xl p-6 text-center h-full hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-coty-navy/20 group">
                  <div className="text-coty-navy mb-4 flex justify-center">
                    <div className={`p-3 rounded-full transition-all duration-300 group-hover:scale-110 transform ${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-coty-navy mb-2 group-hover:text-coty-navy/80 transition-colors duration-300">
                    {animatedStats[stat.label.toLowerCase() as keyof typeof animatedStats]}+
                  </div>
                  <div className="text-coty-gray font-medium">{stat.label}</div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section ref={sustainabilityRef} className="py-20 bg-coty-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">Sustainability & Responsibility</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              We believe in creating value not just for our customers, but for society and the environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityInitiatives.map((initiative, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ease-out ${
                  isSustainabilityVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  minHeight: '280px'
                }}
              >
                <Card className="bg-white rounded-xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-coty-navy/20 group">
                  <div className={`p-3 rounded-full w-fit mb-4 transition-all duration-300 group-hover:scale-110 transform ${initiative.color}`}>
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-bold text-coty-navy mb-3 group-hover:text-coty-navy/80 transition-colors duration-300">{initiative.title}</h3>
                  <p className="text-coty-gray">{initiative.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-coty-navy mb-6">Community Impact</h2>
              <p className="text-lg text-coty-gray mb-6">
                Located in 4TH KINGDOM ROAD, OSHIYIE, ACCRA, 
                we're proud to be part of the local community and contribute to its growth and development.
              </p>
              <p className="text-lg text-coty-gray mb-8">
                Our facility not only provides employment opportunities but also serves as a hub for innovation 
                and quality manufacturing in the region. We're committed to supporting local suppliers and 
                contributing to the economic development of Greater Accra.
              </p>
              <a href="/our-story" className="w-fit flex items-center gap-4 px-8 py-4 bg-coty-navy text-white text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300">
                LEARN MORE
                <ArrowRight className="text-2xl" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Community Impact" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-coty-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">What People Say</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              Hear from our customers, partners, and community members about the impact we've made.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ease-out ${
                  isTestimonialsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  minHeight: '350px'
                }}
              >
                <Card className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-coty-navy/20 group">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-coty-gray mb-6 italic group-hover:text-coty-gray/80 transition-colors duration-300">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm mr-4 group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-coty-navy group-hover:text-coty-navy/80 transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-sm text-coty-gray">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="vision" className="py-20 bg-coty-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Vision for the Future</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We envision a future where quality products, sustainable practices, and community development 
            go hand in hand. Our commitment to excellence and innovation drives us to create lasting positive impact.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Quality</h3>
              <p className="text-gray-300">Maintaining the highest standards in all our products and processes.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">Continuously developing new solutions that meet evolving needs.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Trust</h3>
              <p className="text-gray-300">Building lasting relationships with customers, partners, and communities.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
} 