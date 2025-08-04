import { useState, useEffect } from "react";
import { ArrowRight, Users, Globe, Heart, Award, TrendingUp, Search, X, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import StandardHeader from "@/components/StandardHeader";

export default function OurImpact() {
  const [animatedStats, setAnimatedStats] = useState({
    countries: 0,
    customers: 0,
    suppliers: 0,
    employees: 0
  });

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
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
      icon: <Globe className="h-8 w-8" />
    },
    {
      number: "5000+",
      label: "Customers",
      icon: <Users className="h-8 w-8" />
    },
    {
      number: "50+",
      label: "Suppliers",
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      number: "1000+",
      label: "Employees",
      icon: <Heart className="h-8 w-8" />
    }
  ];

  const sustainabilityInitiatives = [
    {
      title: "Environmental Responsibility",
      description: "We're committed to reducing our environmental footprint through sustainable packaging and eco-friendly manufacturing processes.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Community Development",
      description: "Supporting local communities through employment opportunities and educational initiatives in Greater Accra and beyond.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Quality Standards",
      description: "Maintaining the highest quality standards while ensuring our products are safe for families and the environment.",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Innovation & Growth",
      description: "Continuously innovating our product range to meet evolving customer needs and market demands.",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Customer",
      content: "Amanex products have transformed my home. The quality and fragrance are unmatched. I trust them completely for my family's needs.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Retail Partner",
      content: "Working with Amanex has been a game-changer for our business. Their commitment to quality and customer service is exceptional.",
      rating: 5
    },
    {
      name: "Amina Osei",
      role: "Local Resident",
      content: "As a resident of Greater Accra, I'm proud to see a local company making such a positive impact in our community.",
      rating: 5
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
            <h1 className="text-5xl lg:text-7xl font-bold text-coty-navy leading-tight mb-8">
              OUR<br />
              <span className="text-coty-navy">IMPACT</span>
            </h1>
            
            <p className="text-xl text-coty-gray mb-8 max-w-3xl mx-auto lg:mx-0">
              Making a positive difference in communities, environment, and lives through quality products 
              and sustainable practices.
            </p>

            <div className="mt-12 text-coty-gray font-medium flex items-center justify-center lg:justify-start">
              <div className="w-8 h-px bg-coty-gray mr-3"></div>
              <span className="text-sm tracking-wide">EXPLORE OUR IMPACT</span>
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
            <Card className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-coty-navy mb-4 flex justify-center">
                <Globe className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-coty-navy mb-2">{animatedStats.countries}+</div>
              <div className="text-coty-gray font-medium">Countries</div>
            </Card>
            
            <Card className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-coty-navy mb-4 flex justify-center">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-coty-navy mb-2">{animatedStats.customers}+</div>
              <div className="text-coty-gray font-medium">Customers</div>
            </Card>
            
            <Card className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-coty-navy mb-4 flex justify-center">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-coty-navy mb-2">{animatedStats.suppliers}+</div>
              <div className="text-coty-gray font-medium">Suppliers</div>
            </Card>
            
            <Card className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-coty-navy mb-4 flex justify-center">
                <Heart className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-coty-navy mb-2">{animatedStats.employees}+</div>
              <div className="text-coty-gray font-medium">Employees</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-coty-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">Sustainability & Responsibility</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              We believe in creating value not just for our customers, but for society and the environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityInitiatives.map((initiative, index) => (
              <Card key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-coty-navy mb-4">
                  {initiative.icon}
                </div>
                <h3 className="text-xl font-bold text-coty-navy mb-3">{initiative.title}</h3>
                <p className="text-coty-gray">{initiative.description}</p>
              </Card>
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
      <section className="py-20 bg-coty-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">What People Say</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              Hear from our customers, partners, and community members about the impact we've made.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                <p className="text-coty-gray mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-coty-navy">{testimonial.name}</div>
                  <div className="text-sm text-coty-gray">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-coty-navy text-white">
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

      {/* Back to Top Button */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-fit flex items-center gap-4 px-8 py-4 bg-coty-navy text-white text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300"
          >
            BACK TO TOP
            <ArrowUp className="text-2xl" />
          </Button>
        </div>
      </section>



      <Footer />
    </div>
  );
} 