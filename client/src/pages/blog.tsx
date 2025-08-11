import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUp, Calendar, User, Tag, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import StandardHeader from '@/components/StandardHeader';
import ScrollToTop from '@/components/ScrollToTop';

export default function Blog() {
  const [expandedArticles, setExpandedArticles] = useState<Set<number>>(new Set());

  const toggleArticle = (articleId: number) => {
    const newExpanded = new Set(expandedArticles);
    if (newExpanded.has(articleId)) {
      newExpanded.delete(articleId);
    } else {
      newExpanded.add(articleId);
    }
    setExpandedArticles(newExpanded);
  };

  
  const blogArticles = [
    {
      id: 1,
      title: "5 Simple Tips to Keep Your Home Smelling Fresh All Day Long",
      excerpt: "A fresh-smelling home is not only inviting but also uplifting. Discover five simple tips to maintain a pleasant environment that feels inviting and clean throughout your home.",
      content: `
        <p>A fresh-smelling home is not only inviting but also uplifting. Whether you're expecting guests or just want to enjoy a pleasant environment, maintaining a fresh scent throughout your home can make all the difference. Here are five simple tips to keep your home smelling fresh all day long.</p>
        
        <h3>1. Choose the Right Air Fresheners</h3>
        <p>The first step to a consistently fresh home is selecting the right air fresheners. Opt for high-quality products that offer long-lasting scents and are suitable for the different areas of your home. For living rooms and bedrooms, go for subtle and calming scents like lavender or vanilla. For kitchens and bathrooms, citrus or fresh linen scents can neutralize odors effectively. Make sure to place air fresheners in key areas like entryways, hallways, and near garbage bins.</p>
        
        <h3>2. Regularly Clean Your Air Filters and Vents</h3>
        <p>Your HVAC system circulates air throughout your home, and if the filters are dirty, they can spread unpleasant odors. Regularly cleaning or replacing air filters ensures that only clean, fresh air is circulated. Additionally, don't forget to clean your vents and ducts, as dust and debris can accumulate there, leading to stale or musty smells.</p>
        
        <h3>3. Use Natural Deodorizers</h3>
        <p>Sometimes, natural options can be just as effective as commercial products. Baking soda is a fantastic natural deodorizer that can be placed in various areas like closets, refrigerators, and shoe racks to absorb odors. Activated charcoal bags are another great option, especially for neutralizing odors in larger spaces like basements or garages.</p>
        
        <h3>4. Keep Fabrics Fresh</h3>
        <p>Fabrics in your home, such as curtains, cushions, and carpets, can trap odors over time. To keep them fresh, make it a habit to wash or vacuum these items regularly. For a quick refresh, you can spritz them with a fabric refresher spray. Consider adding a few drops of essential oil to your laundry for an extra burst of fragrance that lingers on your fabrics.</p>
        
        <h3>5. Ventilate Your Home</h3>
        <p>Fresh air is one of the simplest and most effective ways to keep your home smelling great. Open windows regularly to allow fresh air to circulate and push out stale, odor-laden air. Even in cooler months, a few minutes of ventilation can make a significant difference in your home's overall freshness.</p>
        
        <h3>Conclusion</h3>
        <p>Maintaining a fresh-smelling home doesn't have to be a challenge. By incorporating these simple tips into your routine, you can enjoy a consistently pleasant environment that feels inviting and clean. Whether you choose the perfect air freshener or rely on natural deodorizers, your home will always be ready to welcome you with a refreshing scent.</p>
      `,
      category: "Home Care Tips",
      date: "March 15, 2024",
      author: "Amanex Team",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 2,
      title: "How to Choose the Perfect Perfume for Any Occasion",
      excerpt: "Selecting the right perfume can be a daunting task. Discover how to choose the perfect fragrance for any occasion, ensuring you always leave a lasting impression.",
      content: `
        <p>Selecting the right perfume can be a daunting task, especially with the myriad of fragrances available. Whether you're getting ready for a formal event, a casual day out, or a romantic evening, the perfume you choose can significantly enhance your overall presence. Here's a guide to help you choose the perfect perfume for any occasion, ensuring you always leave a lasting impression.</p>
        
        <h3>1. Understand Fragrance Families</h3>
        <p>Perfumes are generally categorized into different fragrance families, each evoking a specific mood or vibe. Understanding these categories can help you narrow down your choices:</p>
        <ul>
          <li><strong>Floral:</strong> Romantic and feminine, ideal for weddings, dates, or any event where you want to feel elegant.</li>
          <li><strong>Citrus:</strong> Fresh and invigorating, perfect for daytime wear, work environments, or casual outings.</li>
          <li><strong>Woody:</strong> Warm and earthy, suitable for evening events, formal occasions, or when you want to exude sophistication.</li>
          <li><strong>Oriental:</strong> Exotic and sensual, best for nights out, parties, or intimate settings.</li>
          <li><strong>Fresh:</strong> Light and clean, great for everyday wear, especially in warmer weather or informal gatherings.</li>
        </ul>
        
        <h3>2. Match the Occasion</h3>
        <p>The occasion plays a crucial role in determining the type of perfume you should wear. Here are some suggestions based on different events:</p>
        <ul>
          <li><strong>Work/Business Meetings:</strong> Opt for subtle, professional scents like fresh or citrus fragrances. These are not overpowering and create a clean, approachable impression.</li>
          <li><strong>Casual Outings:</strong> For a relaxed day with friends or running errands, go for light and refreshing scents like floral or fresh fragrances. They're easygoing and pleasant.</li>
          <li><strong>Evening Events:</strong> For dinners, parties, or formal events, choose something bold and memorable like woody or oriental perfumes. These richer scents add depth and sophistication to your presence.</li>
          <li><strong>Romantic Dates:</strong> A romantic occasion calls for something intimate and alluring. Floral and oriental fragrances work well here, as they are both captivating and elegant.</li>
        </ul>
        
        <h3>3. Consider the Season</h3>
        <p>The time of year can influence how a perfume smells on your skin. Here's how to choose based on the season:</p>
        <ul>
          <li><strong>Spring:</strong> Embrace the bloom of the season with floral fragrances. Light, airy scents work best during this time.</li>
          <li><strong>Summer:</strong> Go for citrus or fresh scents that are refreshing and energizing, perfect for hot weather.</li>
          <li><strong>Fall:</strong> As the weather cools down, opt for woody or spicy fragrances that complement the crisp air.</li>
          <li><strong>Winter:</strong> In colder months, oriental and woody perfumes with warm, deep notes are ideal, providing a comforting presence.</li>
        </ul>
        
        <h3>4. Test Before You Invest</h3>
        <p>Before committing to a perfume, it's essential to test it on your skin. A fragrance can smell different on you than it does in the bottle or on a test strip. Apply a small amount on your wrist and wait a few hours to see how it develops. Pay attention to how it interacts with your skin's natural oils and how the scent evolves over time. If it feels like a good fit, then it's likely the right choice for you.</p>
        
        <h3>5. Create a Signature Scent</h3>
        <p>While it's great to have a variety of perfumes for different occasions, consider finding one signature scent that truly represents you. This scent should make you feel confident and comfortable, no matter the occasion. Once you find your signature scent, you can build a collection around it, adding complementary fragrances for specific events.</p>
        
        <h3>Conclusion</h3>
        <p>Choosing the perfect perfume for any occasion is all about understanding the different fragrance families, considering the event and season, and testing the scent on your skin. With these tips in mind, you'll be able to find the right perfume that not only suits the occasion but also enhances your unique style and personality. Whether it's a light, refreshing scent for a sunny day or a deep, alluring fragrance for an evening out, the perfect perfume is out there waiting for you.</p>
      `,
      category: "Fragrance Guide",
      date: "March 10, 2024",
      author: "Amanex Team",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 3,
      title: "The Benefits of Using Multipurpose Liquid Soap",
      excerpt: "In a world filled with specialized cleaning products, multipurpose liquid soap stands out as a versatile and efficient solution for all your cleaning needs. Discover why it's a must-have in any household.",
      content: `
        <p>In a world filled with specialized cleaning products, multipurpose liquid soap stands out as a versatile and efficient solution for all your cleaning needs. Whether you're tackling dirty dishes, wiping down surfaces, or even doing laundry, multipurpose liquid soap offers a range of benefits that make it a must-have in any household. Here's why you should consider incorporating this all-in-one cleaner into your daily routine.</p>
        
        <h3>1. Cost-Effective and Convenient</h3>
        <p>One of the biggest advantages of using multipurpose liquid soap is its cost-effectiveness. Instead of purchasing multiple products for different cleaning tasks, a single bottle of multipurpose soap can handle it all. This not only saves you money but also reduces clutter in your cleaning supply cabinet. With just one product, you can tackle various cleaning challenges, making your shopping trips more convenient and your budget more manageable.</p>
        
        <h3>2. Gentle Yet Effective Cleaning</h3>
        <p>Multipurpose liquid soap is formulated to be tough on dirt and grime while being gentle on surfaces. Whether you're cleaning countertops, floors, or delicate items like glass and stainless steel, this versatile soap provides effective cleaning without causing damage. It's also safe to use on various materials, making it ideal for households with diverse cleaning needs.</p>
        
        <h3>3. Environmentally Friendly</h3>
        <p>Many multipurpose liquid soaps are designed with eco-friendliness in mind. They often contain biodegradable ingredients that break down naturally, reducing their impact on the environment. By choosing an environmentally friendly multipurpose soap, you're not only keeping your home clean but also doing your part to protect the planet. Plus, using a single product reduces packaging waste, as you're not buying multiple bottles of different cleaners.</p>
        
        <h3>4. Easy to Use</h3>
        <p>Simplicity is key when it comes to cleaning, and multipurpose liquid soap delivers just that. With clear instructions and no need for complicated mixing or diluting, it's easy to use for anyone. Just apply the soap to a sponge, cloth, or directly onto the surface you want to clean, and wipe away the dirt. Its versatility means you can seamlessly move from one cleaning task to another without switching products, saving you time and effort.</p>
        
        <h3>5. Versatile Applications</h3>
        <p>The name says it all—multipurpose liquid soap is incredibly versatile. Use it in the kitchen to wash dishes and clean countertops, in the bathroom to scrub tiles and sinks, or even in the laundry room to pre-treat stains on clothes. Some formulations are also safe for handwashing, making them a great option for busy households. No matter the cleaning task, this soap has you covered.</p>
        
        <h3>Conclusion</h3>
        <p>Multipurpose liquid soap is a game-changer for anyone looking to simplify their cleaning routine without compromising on effectiveness. Its cost-saving, environmentally friendly, and versatile nature makes it an essential product for every household. By incorporating multipurpose liquid soap into your cleaning arsenal, you can enjoy a cleaner home with less effort and fewer products. Make the switch today and experience the benefits for yourself!</p>
      `,
      category: "Cleaning Tips",
      date: "March 5, 2024",
      author: "Amanex Team",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];





  return (
    <div className="min-h-screen w-full">
      <StandardHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center" style={{ paddingTop: '4rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-red-800 mb-8 animate-fade-in-up animation-delay-800">
            OUR BLOG
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-0">
            Discover the latest insights, company updates, and stories from Amanex Ghana. 
            Stay connected with our journey of innovation and growth.
          </p>
          <p className="text-lg text-gray-500 animate-fade-in-up animation-delay-1200">SCROLL TO EXPLORE</p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20 bg-gray-50" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => {
              const isExpanded = expandedArticles.has(article.id);
              return (
                <article key={article.id} id={`article-${article.id}`} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Small Circular Image */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="px-3 py-1 bg-coty-navy text-white text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-coty-navy mb-3 line-clamp-2">{article.title}</h2>
                    <p className={`text-gray-600 text-sm mb-4 ${!isExpanded ? 'line-clamp-3' : ''}`}>
                      {article.excerpt}
                    </p>
                    
                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-gray-200 article-content article-expanded">
                        <div 
                          className="prose prose-sm max-w-none text-gray-700"
                          dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                      <button 
                        onClick={() => toggleArticle(article.id)}
                        className="text-coty-navy hover:text-coty-gray text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                      >
                        {isExpanded ? (
                          <>
                            <ArrowUp className="w-3 h-3" />
                            Collapse
                          </>
                        ) : (
                          <>
                            Read More
                            <ArrowRight className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>







      <Footer />
      <ScrollToTop />
    </div>
  );
} 