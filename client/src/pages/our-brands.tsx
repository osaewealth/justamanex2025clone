import React from "react";
import { ArrowRight, Star, Search, X, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import StandardHeader from "@/components/StandardHeader";
import ScrollToTop from "@/components/ScrollToTop";

// Import product images
import airfreshersgroup from "@/assets/productimages/airfreshersgroup.jpg";
import airfreshers from "@/assets/productimages/airfreshers.jpg";
import airfreshersviolet from "@/assets/productimages/airfreshersviolet.jpg";
import airfresherspray from "@/assets/productimages/airfresherspray.jpg";
import liquidsoupyellow from "@/assets/productimages/liquidsoupyellow.jpg";
import liquidsoup from "@/assets/productimages/liquidsoup.png";
import showergel from "@/assets/productimages/showergel.jpg";
import showergel2colors from "@/assets/productimages/showergel2colors.jpg";
import showergelyellow from "@/assets/productimages/showergelyellow.jpg";
import insecticide from "@/assets/productimages/insecticide.jpg";
import classcleaner from "@/assets/productimages/classcleaner.jpg";
import fabricsoftener from "@/assets/productimages/fabricsoftener.jpg";
import fabricsoftenergroup from "@/assets/productimages/fabric-softenergroup.png";
import airfresher12 from "@/assets/productimages/airfresher12.jpg";
import allproducts from "@/assets/productimages/allproducts.jpg";
import perfumes from "@/assets/productimages/perfumes.jpg";
import redperf from "@/assets/productimages/redperf.png";
import sanitizer60ml from "@/assets/productimages/sanitizer-60ml.png";
import sanitizer350ml from "@/assets/productimages/sanitizer-350ml.png";

export default function OurBrands() {
  const productCategories = [
    {
      name: "AIR FRESHENER",
      description: "Transform your living spaces with our invigorating air fresheners that create a welcoming atmosphere.",
      image: airfreshers,
      features: ["Long-lasting fragrance", "Natural ingredients", "Multiple scents available"]
    },
    {
      name: "PERFUME & BODY SPLASH",
      description: "Luxurious perfumes and body splashes that define your personal style and leave lasting impressions.",
      image: airfresherspray,
      features: ["Premium fragrances", "Long-lasting scent", "Elegant packaging"]
    },
    {
      name: "LIQUID SOAP",
      description: "Multipurpose liquid soaps that provide effective cleaning while being gentle on your skin.",
      image: liquidsoup,
      features: ["Gentle formula", "Antibacterial protection", "Moisturizing properties"]
    },
    {
      name: "SHOWER GEL",
      description: "Moisturizing shower gels that keep you feeling refreshed and protected all day long.",
      image: showergel2colors,
      features: ["Deep cleansing", "Skin nourishment", "Refreshing scents"]
    },
    {
      name: "INSECTICIDE SPRAY",
      description: "Effective insecticide sprays that ensure your home is always immaculate and safe.",
      image: insecticide,
      features: ["Powerful protection", "Safe for family use", "Long-lasting effect"]
    },
    {
      name: "GLASS CLEANER",
      description: "Professional-grade glass cleaners that deliver streak-free shine and crystal-clear results.",
      image: classcleaner,
      features: ["Streak-free formula", "Quick drying", "Safe for all surfaces"]
    },
    {
      name: "FABRIC SOFTENER",
      description: "Gentle fabric softeners that keep your clothes soft, fresh, and beautifully scented.",
      image: fabricsoftenergroup,
      features: ["Softens fabrics", "Long-lasting freshness", "Color-safe formula"]
    },
    {
      name: "SANITIZER",
      description: "Protective hand sanitizers that keep you feeling refreshed and protected throughout the day.",
      image: sanitizer60ml,
      features: ["99.9% germ protection", "Non-drying formula", "Portable design"]
    }
  ];

  const bestSellers = [
    {
      name: "BR4",
      category: "Air Freshener",
      rating: 4.8,
      price: "₵25.00",
      image: airfreshersviolet
    },
    {
      name: "BR11",
      category: "Perfume",
      rating: 4.9,
      price: "₵45.00",
      image: redperf
    },
    {
      name: "BR7",
      category: "Liquid Soap",
      rating: 4.7,
      price: "₵18.00",
      image: liquidsoupyellow
    },
    {
      name: "BR1",
      category: "Shower Gel",
      rating: 4.8,
      price: "₵22.00",
      image: showergelyellow
    },
    {
      name: "BR2",
      category: "Glass Cleaner",
      rating: 4.6,
      price: "₵15.00",
      image: classcleaner
    },
    {
      name: "BR5",
      category: "Fabric Softener",
      rating: 4.7,
      price: "₵20.00",
      image: fabricsoftener
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
              OUR<br />
              <span className="text-coty-navy">BRANDS</span>
            </h1>
            
            <p className="text-xl text-coty-gray mb-8 max-w-3xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-0">
              Explore our diverse selection of products, meticulously crafted to bring convenience, 
              freshness, and luxury into your home.
            </p>

            <div className="mt-12 text-coty-gray font-medium mobile-center animate-fade-in-up animation-delay-1200">
              <div className="w-8 h-px bg-coty-gray mr-3 animate-pulse"></div>
              <span className="text-sm tracking-wide animate-bounce">DISCOVER OUR PRODUCTS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Scientific Expertise Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">OUR PRODUCT CATEGORIES</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              Discover our specialized product categories that bring freshness, cleanliness, and comfort to your home and personal care needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

            {/* Home Care Card */}
            <div className="group bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer" onClick={() => window.location.href = '/home-care'}>
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={fabricsoftener}
                  alt="Home Care" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-coty-navy mb-6 group-hover:text-coty-gold transition-colors duration-300">HOME CARE</h3>
              <div className="w-10 h-10 rounded-full border-2 border-coty-navy flex items-center justify-center mx-auto group-hover:border-coty-gold group-hover:bg-coty-navy transition-all duration-300">
                <svg className="w-5 h-5 text-coty-navy group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* View All Products Card */}
            <div className="group bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer" onClick={() => window.location.href = '/all-products'}>
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={allproducts}
                  alt="View All Products" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-coty-navy mb-6 group-hover:text-coty-gold transition-colors duration-300">VIEW ALL PRODUCTS</h3>
              <div className="w-10 h-10 rounded-full border-2 border-coty-navy flex items-center justify-center mx-auto group-hover:border-coty-gold group-hover:bg-coty-navy transition-all duration-300">
                <svg className="w-5 h-5 text-coty-navy group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 bg-coty-gray-light">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-4">Our Best Selling Products</h2>
            <p className="text-lg text-coty-gray max-w-3xl mx-auto">
              Discover our most popular products that customers love and trust. These are our top-performing items across all categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product, index) => (
              <Card key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-coty-navy/20 group">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-coty-navy mb-2 group-hover:text-coty-navy/80 transition-colors duration-300">{product.name}</h3>
                  <p className="text-coty-gray text-sm mb-3">{product.category}</p>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-coty-gray ml-2">({product.rating})</span>
                  </div>
                  <div className="text-2xl font-bold text-coty-navy mb-4 group-hover:text-coty-navy/80 transition-colors duration-300">{product.price}</div>
                  <div className="text-sm text-coty-gray bg-coty-gray-light px-3 py-2 rounded-full inline-block">
                    Best Seller
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-coty-navy mb-6">Our Quality Promise</h2>
              <p className="text-lg text-coty-gray mb-6">
                With years of experience, we specialize in creating high-quality products that exceed expectations. 
                Our commitment to excellence drives us to innovate and deliver products that bring joy and comfort 
                to daily routines.
              </p>
              <p className="text-lg text-coty-gray mb-8">
                From invigorating air fresheners that transform your living spaces to luxurious perfumes and 
                body splashes that define your personal style, our products are designed to enrich your everyday experiences.
              </p>
              <Button className="w-fit flex items-center gap-4 px-8 py-4 bg-coty-navy text-white text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300">
                LEARN MORE
                <ArrowRight className="text-2xl" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={allproducts}
                alt="Quality Products" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
} 