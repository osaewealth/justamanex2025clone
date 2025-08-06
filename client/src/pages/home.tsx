import { useState, useEffect } from "react";
import { Search, Menu, ArrowRight, ChevronDown, X, Phone, Briefcase, Globe, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import ScrollToTop from "@/components/ScrollToTop";
import jdImage from "@/assets/jd.png";
import herobgImage from "@/assets/herobg.jpg";

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

  const heroImages = [
    jdImage,
    herobgImage,
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

  const newsArticles = [
    {
      id: 1,
      category: "PRESS RELEASE",
      date: "JULY 16, 2025",
      title: "INTRODUCING YES SKINCARE, we have a new variety of skincare products for everyone",
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
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

        <div className="relative z-10 flex items-center h-full pl-16">
          <div className="text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              WE ARE<br />
              <span className="text-white">AMANEX</span>
            </h1>
            
            <p className="text-xl text-white mb-8 opacity-90 max-w-2xl">
              Discover our diverse selection of products, meticulously crafted to bring convenience, 
              freshness, and luxury into your home.
            </p>
            
            <a 
              href="/about-us" 
              className="bg-transparent text-white px-10 py-6 font-medium hover:bg-white hover:text-coty-navy border-2 border-white transition-all duration-300 flex items-center group w-fit rounded-br-3xl"
            >
              WHO WE ARE
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <div className="mt-12 text-white font-medium flex items-center justify-center lg:justify-start">
              <div className="w-8 h-px bg-white mr-3 animate-pulse"></div>
              <span className="text-sm tracking-wide animate-bounce">SCROLL DOWN</span>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
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

      {/* News Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto">
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
                  <a href={`/blog#article-${article.id}`} className="w-fit flex items-center gap-4 px-6 py-3 bg-coty-navy text-white text-sm font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300">
                    READ MORE
                    <ArrowRight className="text-xl" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <a href="/blog" className="w-fit flex items-center gap-4 px-8 py-4 bg-transparent text-coty-navy text-md font-medium rounded-br-3xl hover:bg-coty-navy hover:text-white border border-coty-navy transition-colors duration-300">
              READ ALL NEWS
              <ArrowRight className="text-2xl" />
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
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
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
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
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
