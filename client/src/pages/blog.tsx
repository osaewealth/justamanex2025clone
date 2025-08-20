import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUp, Calendar, User, Tag, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import StandardHeader from '@/components/StandardHeader';
import ScrollToTop from '@/components/ScrollToTop';

// Import blog images
import yesperfumesblog from "@/assets/productimages/yesperfumesblog.jpg";
import airfreshers from "@/assets/productimages/airfreshers.png";
import liquidsoup from "@/assets/productimages/liquidsoup.png";
import fabricsoftenergroup from "@/assets/productimages/fabric-softenergroup.png";

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
      title: "Amanex Ghana: Pioneering Personal Care Excellence in West Africa",
      excerpt: "Discover how Amanex Ghana has become a leading force in personal care and home care products, bringing premium quality and innovative solutions to homes across West Africa.",
      content: `
        <p>In the heart of West Africa, Amanex Ghana has emerged as a beacon of excellence in personal care and home care products. Since our establishment, we've been committed to transforming everyday routines into luxurious experiences, one product at a time. Our journey from a local startup to a trusted household name reflects our unwavering dedication to quality, innovation, and customer satisfaction.</p>
        
        <h3>The Amanex Story: From Vision to Reality</h3>
        <p>Founded with a simple yet powerful vision – to make premium personal care and home care products accessible to every Ghanaian household – Amanex Ghana has grown into a comprehensive lifestyle brand. We recognized that quality shouldn't be a luxury, and that every family deserves products that not only clean and care but also enhance their daily living experience.</p>
        
        <p>Our product development philosophy centers around understanding the unique needs of West African consumers. From the humid coastal regions to the dry savannah areas, we've crafted solutions that work effectively in diverse environmental conditions while maintaining the highest standards of quality and safety.</p>
        
        <h3>Our Product Portfolio: A Symphony of Care</h3>
        <p>At Amanex, we've curated a comprehensive range of products that cater to every aspect of personal and home care:</p>
        
        <h4>Personal Care Excellence</h4>
        <p>Our personal care line represents the pinnacle of self-care innovation. The BREEZE shower gel collection, available in multiple sizes including our popular 500ml and 1000ml variants, offers a luxurious bathing experience with fragrances as beautiful as international brands. Each variant – from refreshing Coconut to invigorating Blue Sky – is formulated to nourish skin while providing an unforgettable sensory experience.</p>
        
        <p>Our hand sanitizer range, featuring both 60ml and 350ml options, ensures protection meets portability. Formulated to kill 99.9% of germs without drying out your skin, these products have become essential companions for health-conscious individuals across Ghana.</p>
        
        <h4>Fragrance & Style</h4>
        <p>The YES perfume collection embodies sophistication and elegance, with fragrances like Pure Passion, Seduction, and Golden Island. Our body splash range, including the beloved Garden of Rose and Berry Mellow variants, offers a light, refreshing touch perfect for Ghana's warm climate.</p>
        
        <h4>Home Care Innovation</h4>
        <p>Our home care solutions address the unique challenges of West African households. The BREEZE fabric softener range, available in 500ml and 1000ml sizes, transforms laundry from a chore into a pleasure, leaving clothes soft, fresh, and beautifully scented. Our multipurpose liquid soap collection, ranging from 200ml to 5-liter options, provides versatile cleaning solutions for every surface in your home.</p>
        
        <h4>Air Care Mastery</h4>
        <p>Understanding the importance of fresh, inviting spaces, we've developed an extensive air freshener collection. From our signature BREEZE air fresheners in Oceanic, Vanilla, and Strawberry scents to our gel air fresheners perfect for cars and small spaces, we ensure every environment feels welcoming and refreshing.</p>
        
        <h3>Quality That Speaks for Itself</h3>
        <p>Every Amanex product undergoes rigorous quality control processes, from ingredient selection to final packaging. We partner with leading suppliers to source the finest raw materials, ensuring our formulations meet international standards while remaining accessible to local consumers.</p>
        
        <p>Our commitment to quality extends beyond product formulation. We've invested in state-of-the-art manufacturing facilities and implemented comprehensive quality assurance protocols that guarantee consistency in every batch. This dedication has earned us the trust of millions of Ghanaian families and positioned us as a quality benchmark in the industry.</p>
        
        <h3>Innovation at the Core</h3>
        <p>Innovation isn't just a buzzword at Amanex – it's our driving force. We continuously research and develop new formulations that address emerging consumer needs while maintaining our commitment to safety and effectiveness. Our R&D team works tirelessly to create products that not only meet current standards but anticipate future trends.</p>
        
        <p>From eco-friendly formulations to advanced fragrance technology, we're constantly pushing boundaries to deliver products that exceed expectations. This forward-thinking approach has resulted in several industry-first innovations that have set new standards in personal and home care.</p>
        
        <h3>Community Impact and Sustainability</h3>
        <p>Beyond business success, Amanex Ghana is deeply committed to making a positive impact in our communities. We actively support local initiatives, create employment opportunities, and contribute to Ghana's economic development. Our sustainability efforts focus on reducing environmental impact through responsible packaging, eco-friendly formulations, and waste reduction programs.</p>
        
        <p>We believe that true success comes from creating value not just for our customers, but for society as a whole. This philosophy guides every decision we make, from product development to business operations.</p>
        
        <h3>Looking Forward: The Future of Care</h3>
        <p>As we look to the future, Amanex Ghana remains committed to our founding principles while embracing new opportunities for growth and innovation. We're expanding our product portfolio, exploring new markets, and developing cutting-edge solutions that will continue to enhance the lives of our customers.</p>
        
        <p>Our vision extends beyond Ghana's borders, as we work to establish Amanex as a leading personal care brand across West Africa. We're building partnerships, expanding distribution networks, and creating products that resonate with diverse African consumers.</p>
        
        <h3>Join the Amanex Family</h3>
        <p>Whether you're discovering Amanex for the first time or have been part of our journey from the beginning, we invite you to experience the difference that quality, innovation, and care can make in your daily life. Our products are more than just cleaning solutions – they're tools for creating the life you deserve.</p>
        
        <p>From our family to yours, thank you for choosing Amanex Ghana. Together, we're building a future where every home is a haven of comfort, every routine is a moment of luxury, and every day brings the promise of something better.</p>
        
        <h3>Conclusion</h3>
        <p>Amanex Ghana's journey from a local startup to a trusted household name is a testament to the power of vision, quality, and community. As we continue to grow and innovate, our commitment to excellence remains unwavering. We're not just selling products – we're creating experiences, building relationships, and contributing to a better future for all Ghanaians.</p>
      `,
      category: "Company News",
      date: "January 15, 2025",
      author: "Amanex Team",
      readTime: "8 min read",
      image: yesperfumesblog
    },
    {
      id: 2,
      title: "Transform Your Home with Amanex: The Complete Guide to Fresh Living",
      excerpt: "Learn how to create a fresh, inviting home environment using Amanex's comprehensive range of air fresheners, cleaning products, and fabric care solutions.",
      content: `
        <p>Your home is your sanctuary – a place where you should feel comfortable, relaxed, and refreshed. At Amanex Ghana, we understand that creating this perfect environment requires more than just basic cleaning. It's about crafting an experience that engages all your senses and makes every moment at home truly special.</p>
        
        <h3>The Art of Fresh Living</h3>
        <p>Creating a fresh, inviting home isn't about masking odors – it's about establishing an environment that naturally feels clean, comfortable, and welcoming. This requires a strategic approach that combines effective cleaning with thoughtful fragrance placement and fabric care.</p>
        
        <h3>Air Fresheners: Your Home's Signature Scent</h3>
        <p>Our BREEZE air freshener collection is designed to transform any space into a fragrant haven. Each variant serves a specific purpose:</p>
        
        <ul>
          <li><strong>Oceanic:</strong> Perfect for living rooms and bedrooms, this fresh, aquatic scent creates a calming atmosphere that promotes relaxation and mental clarity.</li>
          <li><strong>Vanilla:</strong> Ideal for kitchens and dining areas, this warm, comforting fragrance makes your home feel cozy and inviting, especially during family gatherings.</li>
          <li><strong>Strawberry:</strong> Perfect for bathrooms and entryways, this sweet, uplifting scent creates a positive, energizing environment that welcomes guests and family members alike.</li>
        </ul>
        
        <p>For smaller spaces like cars, bathrooms, or closets, our gel air fresheners provide long-lasting fragrance in a convenient, mess-free format. Available in scents like Blue Berry, Summer, and Lavender, these products ensure every corner of your home smells delightful.</p>
        
        <h3>Cleaning Excellence: Beyond Basic Clean</h3>
        <p>True freshness starts with effective cleaning. Our multipurpose liquid soap collection, available in sizes from 200ml to 5 liters, provides versatile cleaning solutions for every surface in your home:</p>
        
        <ul>
          <li><strong>Kitchen Excellence:</strong> From greasy stovetops to dirty dishes, our lemon-scented formula cuts through grime while leaving a fresh, citrus fragrance.</li>
          <li><strong>Bathroom Brilliance:</strong> Transform your bathroom into a spa-like retreat with our rose-scented variant, perfect for tiles, sinks, and shower areas.</li>
          <li><strong>General Household:</strong> Our ocean-scented formula works wonders on floors, walls, and general surfaces, creating a clean, fresh environment throughout your home.</li>
        </ul>
        
        <p>For specialized cleaning needs, our Glass Shine cleaner delivers streak-free results on windows, mirrors, and glass surfaces, ensuring your home sparkles with cleanliness.</p>
        
        <h3>Fabric Care: The Foundation of Fresh Living</h3>
        <p>Fabrics are the unsung heroes of home freshness. Curtains, upholstery, and clothing can trap odors and affect your home's overall atmosphere. Our BREEZE fabric softener range transforms laundry from a basic necessity into a luxurious experience:</p>
        
        <ul>
          <li><strong>Long-lasting Freshness:</strong> Our advanced formula ensures that the fresh scent lingers on your fabrics for days, not just hours.</li>
          <li><strong>Fabric Protection:</strong> Beyond fragrance, our softeners protect fabric fibers, reducing wear and tear while maintaining the quality of your favorite items.</li>
          <li><strong>Static Control:</strong> Eliminate static cling for a more comfortable wearing experience, especially important in Ghana's varied climate.</li>
        </ul>
        
        <h3>Creating Your Fresh Living Routine</h3>
        <p>To maximize the effectiveness of your Amanex products, consider this daily routine:</p>
        
        <h4>Morning Refresh (6:00 AM - 8:00 AM)</h4>
        <ul>
          <li>Open windows for natural ventilation</li>
          <li>Apply air freshener in high-traffic areas</li>
          <li>Use multipurpose soap for quick kitchen cleanup</li>
        </ul>
        
        <h4>Midday Maintenance (12:00 PM - 2:00 PM)</h4>
        <ul>
          <li>Refresh bathroom air with gel air freshener</li>
          <li>Wipe down frequently touched surfaces</li>
          <li>Check and refresh fabric softener in laundry</li>
        </ul>
        
        <h4>Evening Wind-down (6:00 PM - 8:00 PM)</h4>
        <ul>
          <li>Apply calming scents in bedrooms</li>
          <li>Complete thorough cleaning tasks</li>
          <li>Prepare fresh linens with fabric softener</li>
        </ul>
        
        <h3>Seasonal Fresh Living Tips</h3>
        <p>Adapt your fresh living approach to Ghana's seasons:</p>
        
        <h4>Harmattan Season (November - March)</h4>
        <p>During this dry, dusty period, focus on air purification and fabric protection. Use our air fresheners more frequently and ensure proper fabric care to combat the dry conditions.</p>
        
        <h4>Rainy Season (April - October)</h4>
        <p>Humidity can lead to musty odors. Our deodorizing air fresheners and antibacterial cleaning products help maintain freshness despite the challenging weather conditions.</p>
        
        <h3>Beyond Products: The Amanex Experience</h3>
        <p>At Amanex, we believe that fresh living is about more than just products – it's about creating a lifestyle. Our commitment to quality ensures that every product not only performs effectively but also enhances your daily experience.</p>
        
        <p>We're constantly researching and developing new formulations that address the unique challenges of West African living while maintaining international quality standards. From eco-friendly options to advanced fragrance technology, we're committed to providing solutions that make your home the best it can be.</p>
        
        <h3>Join the Fresh Living Movement</h3>
        <p>Transform your home from a basic living space into a fragrant, inviting sanctuary. With Amanex Ghana's comprehensive range of products, you have everything you need to create the fresh, comfortable environment your family deserves.</p>
        
        <p>Start your fresh living journey today. Visit our product pages to explore our complete range, and discover how small changes can make a big difference in your home's atmosphere and your family's quality of life.</p>
        
        <h3>Conclusion</h3>
        <p>Fresh living isn't a luxury – it's a choice. With Amanex Ghana's innovative products and your commitment to creating a better home environment, you can transform your living space into a haven of comfort, cleanliness, and delightful fragrance. Your home deserves the best, and so do you.</p>
      `,
      category: "Home Care Tips",
      date: "January 10, 2025",
      author: "Amanex Team",
      readTime: "7 min read",
      image: airfreshers
    },
    {
      id: 3,
      title: "The Science of Clean: How Amanex Products Keep Your Home Healthier",
      excerpt: "Discover the scientific approach behind Amanex's cleaning and personal care products, and learn how they contribute to a healthier, safer home environment.",
      content: `
        <p>In today's world, cleanliness isn't just about appearance – it's about health, safety, and well-being. At Amanex Ghana, we understand that effective cleaning requires more than just removing visible dirt. It's about creating an environment that actively promotes health and prevents the spread of harmful microorganisms.</p>
        
        <h3>The Hidden Dangers in Your Home</h3>
        <p>Your home, despite being your sanctuary, can harbor numerous health risks that aren't visible to the naked eye. From kitchen surfaces that come into contact with raw food to bathroom areas that can harbor bacteria, every surface in your home requires proper cleaning and disinfection.</p>
        
        <p>Common household bacteria include:</p>
        <ul>
          <li><strong>E. coli:</strong> Often found in kitchens, especially on cutting boards and countertops</li>
          <li><strong>Staphylococcus aureus:</strong> Common on frequently touched surfaces like doorknobs and light switches</li>
          <li><strong>Salmonella:</strong> Can be present in kitchen areas where raw food is prepared</li>
          <li><strong>Mold spores:</strong> Thrive in humid environments like bathrooms and basements</li>
        </ul>
        
        <h3>How Amanex Products Combat These Threats</h3>
        <p>Our product formulations are developed with scientific precision to address these health concerns effectively:</p>
        
        <h4>Multipurpose Liquid Soap: The First Line of Defense</h4>
        <p>Our multipurpose liquid soap isn't just about removing visible dirt – it's formulated to break down the molecular bonds that allow bacteria to adhere to surfaces. The key ingredients work together to:</p>
        
        <ul>
          <li><strong>Emulsify oils and fats:</strong> Breaking down grease and food residues that can harbor bacteria</li>
          <li><strong>Penetrate surface pores:</strong> Reaching bacteria that may be embedded in microscopic surface irregularities</li>
          <li><strong>Create a protective barrier:</strong> Preventing immediate recontamination after cleaning</li>
        </ul>
        
        <p>Available in sizes from 200ml for daily use to 5-liter containers for commercial applications, our multipurpose soap provides consistent cleaning power for every need.</p>
        
        <h4>Hand Sanitizers: Personal Protection Technology</h4>
        <p>Our hand sanitizer formulations represent the cutting edge of personal hygiene technology. Formulated to kill 99.9% of germs, our products work through multiple mechanisms:</p>
        
        <ul>
          <li><strong>Alcohol-based formulation:</strong> Effectively denatures proteins in bacterial cell walls</li>
          <li><strong>Moisturizing agents:</strong> Prevent the drying effects common in many sanitizers</li>
          <li><strong>Fast-acting formula:</strong> Provides protection in seconds, not minutes</li>
        </ul>
        
        <p>Available in convenient 60ml and 350ml sizes, our hand sanitizers ensure protection is always within reach, whether you're at home, at work, or on the go.</p>
        
        <h4>Air Fresheners: Beyond Fragrance</h4>
        <p>Our air freshener technology goes beyond simply masking odors. We've developed formulations that actively neutralize odor molecules while providing long-lasting fragrance:</p>
        
        <ul>
          <li><strong>Molecular neutralization:</strong> Our products don't just cover odors – they break down the molecules that cause them</li>
          <li><strong>Long-lasting effectiveness:</strong> Unlike many air fresheners that fade quickly, our formulations provide consistent freshness</li>
          <li><strong>Environmentally conscious:</strong> Formulated to be safe for use around children and pets</li>
        </ul>
        
        <h3>The Science of Fabric Care</h3>
        <p>Our fabric softener technology addresses more than just softness – it's about fabric health and longevity:</p>
        
        <h4>Fiber Protection Technology</h4>
        <p>Our BREEZE fabric softeners use advanced polymer technology to:</p>
        <ul>
          <li><strong>Reduce fiber friction:</strong> Minimizing wear and tear during washing and wearing</li>
          <li><strong>Maintain fabric integrity:</strong> Preserving the original texture and appearance of your clothes</li>
          <li><strong>Provide long-lasting freshness:</strong> Ensuring your fabrics smell clean and fresh for days</li>
        </ul>
        
        <h4>Static Control Technology</h4>
        <p>Static electricity isn't just annoying – it can damage delicate fabrics and cause discomfort. Our formulations include:</p>
        <ul>
          <li><strong>Anti-static agents:</strong> Preventing the build-up of static electricity</li>
          <li><strong>Fabric-friendly ingredients:</strong> Safe for all types of fabrics, including delicate materials</li>
        </ul>
        
        <h3>Quality Assurance: Our Commitment to Safety</h3>
        <p>Every Amanex product undergoes rigorous testing to ensure it meets the highest safety standards:</p>
        
        <h4>Ingredient Selection</h4>
        <p>We carefully select every ingredient based on:</p>
        <ul>
          <li><strong>Safety profile:</strong> All ingredients are tested for human and environmental safety</li>
          <li><strong>Effectiveness:</strong> Each ingredient must contribute to the product's cleaning or care performance</li>
          <li><strong>Sustainability:</strong> We prioritize ingredients that are environmentally responsible</li>
        </ul>
        
        <h4>Formulation Testing</h4>
        <p>Our products undergo extensive testing including:</p>
        <ul>
          <li><strong>Efficacy testing:</strong> Ensuring products perform as intended</li>
          <li><strong>Safety testing:</strong> Verifying products are safe for intended use</li>
          <li><strong>Stability testing:</strong> Confirming products maintain quality over time</li>
        </ul>
        
        <h3>Creating a Healthier Home Environment</h3>
        <p>To maximize the health benefits of our products, consider this comprehensive cleaning approach:</p>
        
        <h4>Daily Cleaning Routine</h4>
        <ul>
          <li><strong>Kitchen surfaces:</strong> Clean with multipurpose soap after each meal preparation</li>
          <li><strong>Bathroom fixtures:</strong> Regular cleaning prevents bacterial build-up</li>
          <li><strong>Frequently touched surfaces:</strong> Regular disinfection reduces germ transmission</li>
        </ul>
        
        <h4>Weekly Deep Cleaning</h4>
        <ul>
          <li><strong>Floor cleaning:</strong> Remove accumulated dirt and bacteria</li>
          <li><strong>Fabric care:</strong> Launder linens and curtains with fabric softener</li>
          <li><strong>Air quality:</strong> Refresh air fresheners and ensure proper ventilation</li>
        </ul>
        
        <h3>The Future of Clean Technology</h3>
        <p>At Amanex, we're constantly researching and developing new technologies that will make your home even healthier:</p>
        
        <ul>
          <li><strong>Eco-friendly formulations:</strong> Developing products that are effective yet environmentally responsible</li>
          <li><strong>Advanced disinfection:</strong> Researching new methods to eliminate harmful microorganisms</li>
          <li><strong>Smart cleaning solutions:</strong> Exploring technology that makes cleaning more efficient and effective</li>
        </ul>
        
        <h3>Your Health, Our Priority</h3>
        <p>When you choose Amanex products, you're choosing more than just cleaning solutions – you're choosing products that actively contribute to your family's health and well-being. Our commitment to scientific excellence ensures that every product not only meets your cleaning needs but exceeds your health expectations.</p>
        
        <p>Join the thousands of Ghanaian families who trust Amanex for their health and cleaning needs. Experience the difference that science-based cleaning can make in your home.</p>
        
        <h3>Conclusion</h3>
        <p>Cleanliness is health, and health is wealth. With Amanex Ghana's scientifically formulated products, you can create a home environment that actively promotes your family's well-being. Our commitment to scientific excellence ensures that every product contributes to a healthier, safer home.</p>
      `,
      category: "Health & Wellness",
      date: "January 5, 2025",
      author: "Amanex Team",
      readTime: "6 min read",
      image: liquidsoup
    }
  ];





  return (
    <div className="min-h-screen w-full">
      <StandardHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center" style={{ paddingTop: '4rem', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-coty-mint-light to-coty-gray-light"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-coty-navy mb-8 animate-fade-in-up animation-delay-800">
            AMANEX INSIGHTS
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-0">
            Discover expert tips, company updates, and insights from Amanex Ghana. 
            Learn how our products transform everyday routines into luxurious experiences.
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