import { useState, useEffect, useRef } from "react";
import { ArrowRight, Phone, Mail, MapPin, Clock, Search, X, Briefcase, Globe, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import StandardHeader from "@/components/StandardHeader";
import ScrollToTop from "@/components/ScrollToTop";

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);
  const contactCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactCardsRef.current.length > 0) {
      contactCardsRef.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      content: "4TH KINGDOM RD, OSHIYIE, ACCRA\nP.O.BOX ML 980, MALLAM",
      link: "https://maps.google.com",
      color: "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "TEL: +233 303 943 842\nMobile: +233 550 434 576\nWhatsApp: 0 303 943 842",
      link: "tel:+233303943842",
      color: "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "amanexcomltd@gmail.com",
      link: "mailto:amanexcomltd@gmail.com",
      color: "bg-red-100 text-red-600 group-hover:bg-red-200"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Mon - Fri: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 3:00 PM\nSunday: Closed",
      color: "bg-blue-50 text-blue-500 group-hover:bg-blue-100"
    }
  ];

  const departments = [
    {
      name: "Sales & Marketing",
      email: "amanexcomltd@gmail.com",
      phone: "+233 303 943 842"
    },
    {
      name: "Customer Service",
      email: "amanexcomltd@gmail.com",
      phone: "+233 303 943 842"
    },
    
    {
      name: "General Inquiries",
      email: "amanexcomltd@gmail.com",
      phone: "0303 943 842"
    }
  ];

  return (
    <div className="min-h-screen">
      <StandardHeader />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #f59e0b 100%)'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-coty-navy leading-tight mb-8 animate-fade-in-up animation-delay-800">
              CONTACT<br />
              <span className="text-coty-navy">US</span>
            </h1>
            
            <p className="text-xl text-coty-gray mb-8 max-w-3xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-0">
              Get in touch with us. We're here to help with any questions about our products, 
              services, or business opportunities.
            </p>

            <div className="mt-12 text-coty-gray font-medium flex items-center justify-center lg:justify-start animate-fade-in-up animation-delay-1200">
              <div className="w-8 h-px bg-coty-gray mr-3 animate-pulse"></div>
              <span className="text-sm tracking-wide animate-bounce">GET IN TOUCH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">Get In Touch</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to us through any of the following channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                ref={(el) => (contactCardsRef.current[index] = el)}
                className={`transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  minHeight: '200px'
                }}
              >
                <Card className="bg-white rounded-xl p-6 text-center h-full hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-coty-navy/20 group">
                  <div className="text-coty-navy mb-4 flex justify-center">
                    <div className={`p-3 rounded-full transition-all duration-300 group-hover:scale-110 transform ${info.color}`}>
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-coty-navy mb-3 group-hover:text-coty-navy/80 transition-colors duration-300">{info.title}</h3>
                  <div className="text-coty-gray whitespace-pre-line">
                    {info.link ? (
                      <a href={info.link} className="hover:text-coty-navy transition-colors duration-200 hover:underline">
                        {info.content}
                      </a>
                    ) : (
                      info.content
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-coty-gray-light">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-coty-navy mb-6">Send Us a Message</h2>
              <p className="text-lg text-coty-gray mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-coty-navy mb-2">First Name</label>
                    <Input 
                      type="text" 
                      placeholder="Enter your first name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coty-navy focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-coty-navy mb-2">Last Name</label>
                    <Input 
                      type="text" 
                      placeholder="Enter your last name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coty-navy focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coty-navy mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coty-navy focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coty-navy mb-2">Phone</label>
                  <Input 
                    type="tel" 
                    placeholder="Enter your phone number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coty-navy focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coty-navy mb-2">Subject</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coty-navy focus:border-transparent">
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Product Information</option>
                    <option>Business Partnership</option>
                    <option>Customer Support</option>
                    <option>Career Opportunities</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coty-navy mb-2">Message</label>
                  <Textarea 
                    placeholder="Enter your message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coty-navy focus:border-transparent min-h-[120px]"
                  />
                </div>

                <Button className="w-fit flex items-center gap-4 px-8 py-4 bg-coty-navy text-white text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300">
                  SEND MESSAGE
                  <ArrowRight className="text-2xl" />
                </Button>
              </form>
            </div>

            {/* Department Contacts */}
            <div>
              <h2 className="text-4xl font-bold text-coty-navy mb-6">Department Contacts</h2>
              <p className="text-lg text-coty-gray mb-8">
                Need to reach a specific department? Here are our direct contact details.
              </p>

              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <Card 
                    key={index} 
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border-2 border-transparent hover:border-coty-navy/20 group"
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      minHeight: '120px'
                    }}
                  >
                    <h3 className="text-lg font-bold text-coty-navy mb-3 group-hover:text-coty-navy/80 transition-colors duration-300">{dept.name}</h3>
                    <div className="space-y-2 text-coty-gray">
                      <div className="flex items-center group/item">
                        <div className="p-1.5 rounded-full bg-blue-100 text-blue-600 mr-2 group-hover/item:scale-110 transition-transform duration-200">
                          <Mail className="h-4 w-4" />
                        </div>
                        <a href={`mailto:${dept.email}`} className="hover:text-coty-navy transition-colors duration-200 hover:underline">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center group/item">
                        <div className="p-1.5 rounded-full bg-yellow-100 text-yellow-600 mr-2 group-hover/item:scale-110 transition-transform duration-200">
                          <Phone className="h-4 w-4" />
                        </div>
                        <a href={`tel:${dept.phone}`} className="hover:text-coty-navy transition-colors duration-200 hover:underline">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">Visit Our Facility</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              Located in the heart of Greater Accra, our state-of-the-art facility is where quality meets innovation.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8726508989075!2d-0.3585482256147705!3d5.504856034163131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbda6b69c130d%3A0x270fcef4d3415dc0!2sAmanex%20company%20limited!5e1!3m2!1sen!2sgh!4v1754059740018!5m2!1sen!2sgh" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Amanex Company Limited Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coty-navy text-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking for our products, interested in partnerships, or have questions, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/our-brands" className="w-fit flex items-center gap-4 px-8 py-4 bg-white text-coty-navy text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-white border border-white transition-colors duration-300">
              EXPLORE PRODUCTS
              <ArrowRight className="text-2xl" />
            </a>
            <a href="/our-story" className="w-fit flex items-center gap-4 px-8 py-4 bg-transparent text-white text-md font-medium rounded-br-3xl hover:bg-white hover:text-coty-navy border border-white transition-colors duration-300">
              LEARN MORE
              <ArrowRight className="text-2xl" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
} 