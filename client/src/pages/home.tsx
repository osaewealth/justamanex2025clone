import { useState, useEffect } from "react";
import { Search, Menu, ArrowRight, ChevronDown, X, Phone, Briefcase, Globe, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import ScrollToTop from "@/components/ScrollToTop";
import jdImage from "@/assets/jd.png";
import herobgImage from "@/assets/herobg.jpg";

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
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      caption: "Behind the scenes at our manufacturing facility! Quality control in action 🏭✨ #AmanexQuality #ManufacturingExcellence",
      likes: 234,
      comments: 18,
      type: "image",
      url: "https://www.instagram.com/p/sample1/"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      caption: "Fresh new air freshener collection launching soon! 🌸 Breathe in the difference #FreshAir #NewLaunch",
      likes: 189,
      comments: 12,
      type: "image",
      url: "https://www.instagram.com/p/sample2/"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      caption: "Our team working hard to bring you the best products! 💪 #TeamAmanex #HardWork",
      likes: 156,
      comments: 8,
      type: "image",
      url: "https://www.instagram.com/p/sample3/"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      caption: "Innovation meets tradition in our latest product line 🚀 #Innovation #QualityProducts",
      likes: 298,
      comments: 24,
      type: "video",
      url: "https://www.instagram.com/p/sample4/"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      caption: "Sustainability is at the heart of everything we do 🌱 #Sustainability #EcoFriendly",
      likes: 267,
      comments: 15,
      type: "image",
      url: "https://www.instagram.com/p/sample5/"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      caption: "Customer satisfaction is our priority! Thank you for choosing Amanex 🙏 #CustomerFirst #ThankYou",
      likes: 145,
      comments: 9,
      type: "image",
      url: "https://www.instagram.com/p/sample6/"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      caption: "New product development in progress! Can't wait to share this with you 🔥 #NewProduct #ComingSoon",
      likes: 312,
      comments: 31,
      type: "image",
      url: "https://www.instagram.com/p/sample7/"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      caption: "Quality control testing in action! Every product meets our high standards ✅ #QualityControl #Testing",
      likes: 178,
      comments: 11,
      type: "image",
      url: "https://www.instagram.com/p/sample8/"
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
              className="bg-white text-coty-navy px-10 py-6 font-medium hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 flex items-center group w-fit rounded-br-3xl"
            >
              WHO WE ARE
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <div className="mt-12 text-white font-medium flex items-center">
              <div className="w-8 h-px bg-white mr-3"></div>
              <span className="text-sm tracking-wide">SCROLL DOWN</span>
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
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-pink-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987s11.987-5.369 11.987-11.987C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.197-2.25-1.197-3.429 0-1.178.449-2.48 1.197-3.428.749-.949 1.9-1.56 3.197-1.56s2.449.611 3.198 1.56c.748.948 1.197 2.25 1.197 3.428 0 1.179-.449 2.481-1.197 3.429-.749.948-1.901 1.559-3.198 1.559zm7.718-6.988c-.297 0-.54-.242-.54-.54s.243-.54.54-.54.54.242.54.54-.243.54-.54.54zM15.55 12c0 1.961-1.589 3.55-3.55 3.55S8.45 13.961 8.45 12s1.589-3.55 3.55-3.55 3.55 1.589 3.55 3.55z"/>
              </svg>
              <h2 className="text-4xl font-bold text-coty-navy">@amanex_ghana</h2>
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
              onClick={() => window.open('https://www.instagram.com/amanex_ghana', '_blank')}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987s11.987-5.369 11.987-11.987C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.197-2.25-1.197-3.429 0-1.178.449-2.48 1.197-3.428.749-.949 1.9-1.56 3.197-1.56s2.449.611 3.198 1.56c.748.948 1.197 2.25 1.197 3.428 0 1.179-.449 2.481-1.197 3.429-.749.948-1.901 1.559-3.198 1.559zm7.718-6.988c-.297 0-.54-.242-.54-.54s.243-.54.54-.54.54.242.54.54-.243.54-.54.54zM15.55 12c0 1.961-1.589 3.55-3.55 3.55S8.45 13.961 8.45 12s1.589-3.55 3.55-3.55 3.55 1.589 3.55 3.55z"/>
              </svg>
              FOLLOW US ON INSTAGRAM
            </Button>
          </div>
        </div>
      </section>



      {/* Our Mission Section - Inspired by Homedede */}
      <section className="bg-yellow-100 py-16 px-4">
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
            <a href="/blog#mission" className="w-fit flex items-center gap-4 mt-8 px-8 py-4 bg-coty-navy text-white text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300">
              Learn More
              <ArrowRight className="text-2xl" />
            </a>
          </div>
        </div>
      </section>

      {/* Our Vision Section - Inspired by Homedede */}
      <section className="bg-yellow-100 py-16 px-4">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
            <h2 className="text-4xl font-bold text-coty-navy mb-6">Our Vision</h2>
            <p className="text-lg text-gray-800">
              To become one of Africa's leading household,<br />
              cosmetics, and plastic manufacturers.
            </p>
            <a href="/blog#vision" className="w-fit flex items-center gap-4 mt-8 px-8 py-4 bg-coty-navy text-white text-md font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300">
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
