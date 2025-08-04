import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUp, Calendar, User, Tag, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import StandardHeader from '@/components/StandardHeader';

export default function Blog() {
  // Sample blog articles data
  const blogArticles = [
    {
      id: 1,
      title: "Amanex Ghana Expands Manufacturing Capabilities with New Production Line",
      excerpt: "We are excited to announce the launch of our new state-of-the-art production line, marking a significant milestone in our commitment to manufacturing excellence and sustainable growth in Ghana.",
      content: `
        <p>Amanex Ghana is proud to announce a major expansion of our manufacturing capabilities with the introduction of a new, state-of-the-art production line. This significant investment represents our commitment to manufacturing excellence and sustainable growth in Ghana's industrial sector.</p>
        
        <h3>Investment in Innovation</h3>
        <p>The new production line incorporates cutting-edge technology and automation systems that will enhance our manufacturing efficiency while maintaining the highest quality standards. This expansion allows us to increase our production capacity by 40% while reducing energy consumption and waste.</p>
        
        <h3>Job Creation and Economic Impact</h3>
        <p>This expansion will create over 150 new direct jobs and an additional 300 indirect jobs in the local community. We are committed to providing comprehensive training programs to ensure our workforce is equipped with the latest manufacturing skills and techniques.</p>
        
        <h3>Sustainability Focus</h3>
        <p>The new facility incorporates sustainable manufacturing practices, including energy-efficient machinery, waste reduction systems, and eco-friendly materials. This aligns with our commitment to environmental responsibility and sustainable business practices.</p>
        
        <h3>Future Outlook</h3>
        <p>This expansion positions Amanex Ghana as a leading manufacturer in the region, capable of serving both local and international markets with high-quality products. We look forward to continuing our growth journey and contributing to Ghana's economic development.</p>
      `,
      category: "Company News",
      date: "March 15, 2024",
      author: "Amanex Team",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 2,
      title: "Sustainable Manufacturing Practices: Our Commitment to Environmental Responsibility",
      excerpt: "Discover how Amanex Ghana is leading the way in sustainable manufacturing practices, implementing eco-friendly processes and reducing our environmental footprint across all operations.",
      content: `
        <p>At Amanex Ghana, we believe that sustainable manufacturing is not just a responsibility but an opportunity to create a better future for our communities and the planet. Our commitment to environmental responsibility drives every decision we make in our manufacturing processes.</p>
        
        <h3>Green Manufacturing Initiatives</h3>
        <p>We have implemented comprehensive green manufacturing initiatives across all our facilities. This includes the use of renewable energy sources, water conservation systems, and waste reduction programs that have resulted in a 35% reduction in our carbon footprint over the past three years.</p>
        
        <h3>Eco-Friendly Materials</h3>
        <p>Our product development team works closely with suppliers to source eco-friendly materials and packaging solutions. We prioritize materials that are recyclable, biodegradable, or made from renewable resources, ensuring that our products are not only high-quality but also environmentally responsible.</p>
        
        <h3>Energy Efficiency</h3>
        <p>Our manufacturing facilities are equipped with energy-efficient machinery and lighting systems. We have also implemented smart building management systems that optimize energy usage based on production schedules and environmental conditions.</p>
        
        <h3>Waste Management</h3>
        <p>We have established a comprehensive waste management program that includes recycling, composting, and waste-to-energy initiatives. Our goal is to achieve zero waste to landfill by 2025, and we are currently at 85% of this target.</p>
        
        <h3>Community Impact</h3>
        <p>Our sustainability efforts extend beyond our facilities to the communities we serve. We partner with local environmental organizations and educational institutions to promote environmental awareness and sustainable practices.</p>
      `,
      category: "Sustainability",
      date: "March 10, 2024",
      author: "Environmental Team",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 3,
      title: "Empowering Local Communities: Our Social Impact Initiatives",
      excerpt: "Learn about Amanex Ghana's comprehensive social impact programs, from education and healthcare initiatives to skills development and community infrastructure projects.",
      content: `
        <p>Amanex Ghana's commitment to social responsibility goes beyond manufacturing excellence. We believe in creating lasting positive impact in the communities where we operate, focusing on education, healthcare, skills development, and infrastructure improvement.</p>
        
        <h3>Education Initiatives</h3>
        <p>We have established scholarship programs for students from local communities, providing financial support for primary, secondary, and tertiary education. Our education initiatives also include school infrastructure development, teacher training programs, and the provision of educational materials and technology.</p>
        
        <h3>Healthcare Programs</h3>
        <p>Our healthcare initiatives focus on improving access to quality healthcare services in local communities. We have partnered with healthcare providers to offer free medical screenings, health education programs, and support for local healthcare facilities.</p>
        
        <h3>Skills Development</h3>
        <p>We invest in skills development programs that equip community members with marketable skills. Our vocational training centers offer courses in manufacturing, technology, and business skills, helping individuals secure employment or start their own businesses.</p>
        
        <h3>Infrastructure Development</h3>
        <p>We support community infrastructure projects including road construction, water supply systems, and community centers. These projects are designed to improve the quality of life for community members and create sustainable development.</p>
        
        <h3>Youth Empowerment</h3>
        <p>Our youth empowerment programs focus on leadership development, entrepreneurship training, and mentorship opportunities. We believe in investing in the next generation of leaders and innovators.</p>
        
        <h3>Measuring Impact</h3>
        <p>We regularly assess the impact of our social initiatives through community feedback, impact assessments, and partnership with local organizations. This helps us continuously improve our programs and ensure they meet the real needs of our communities.</p>
      `,
      category: "Community Impact",
      date: "March 5, 2024",
      author: "Community Relations",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const missionContent = {
    title: "Our Mission: Driving Manufacturing Excellence",
    content: `
      <p>At Amanex Ghana, our mission is centered around three core pillars: continuous quality improvement, employment creation, and sustainable growth in the manufacturing sector. These principles guide every decision we make and every action we take.</p>
      
      <h3>Continuous Quality Improvement</h3>
      <p>We are committed to maintaining the highest standards of quality in all our manufacturing processes. Our quality management system is built on international best practices, ensuring that every product we manufacture meets or exceeds customer expectations. We invest in advanced technology and training to continuously improve our processes and maintain our competitive edge.</p>
      
      <h3>Employment Creation</h3>
      <p>As a leading manufacturer in Ghana, we recognize our responsibility to create meaningful employment opportunities for our communities. We are committed to providing stable, well-paying jobs with opportunities for growth and advancement. Our workforce development programs ensure that our employees have the skills and knowledge needed to succeed in the modern manufacturing environment.</p>
      
      <h3>Sustainable Growth</h3>
      <p>We believe in sustainable growth that benefits all stakeholders - our employees, customers, shareholders, and communities. Our growth strategy focuses on long-term value creation while maintaining our commitment to environmental responsibility and social impact. We invest in innovation and technology to ensure our continued success in an evolving market.</p>
      
      <h3>Innovation and Technology</h3>
      <p>We embrace innovation and technology as key drivers of our mission. Our research and development initiatives focus on creating new products and improving existing ones to meet the changing needs of our customers. We collaborate with academic institutions and research organizations to stay at the forefront of manufacturing technology.</p>
      
      <h3>Customer Focus</h3>
      <p>Our customers are at the heart of everything we do. We work closely with them to understand their needs and develop solutions that exceed their expectations. Our customer service team is dedicated to providing exceptional support and ensuring customer satisfaction.</p>
    `
  };

  const visionContent = {
    title: "Our Vision: Leading Africa's Manufacturing Future",
    content: `
      <p>Amanex Ghana's vision is to become one of Africa's leading household, cosmetics, and plastic manufacturers. This ambitious vision drives our strategic planning and guides our long-term growth initiatives.</p>
      
      <h3>Market Leadership</h3>
      <p>We aspire to be the market leader in our core product categories across Africa. This means not only being the largest manufacturer but also the most innovative, efficient, and customer-focused. We are building the capabilities and infrastructure needed to achieve this leadership position.</p>
      
      <h3>Product Excellence</h3>
      <p>Our vision includes being recognized for product excellence across all our categories. We are investing in research and development to create innovative products that meet the evolving needs of African consumers. Our product portfolio will continue to expand as we identify new opportunities in the market.</p>
      
      <h3>Geographic Expansion</h3>
      <p>While we are proud of our strong position in Ghana, our vision extends across the African continent. We are developing strategies to expand our presence in key African markets, bringing our high-quality products and manufacturing expertise to more consumers and businesses.</p>
      
      <h3>Technology Leadership</h3>
      <p>We envision being at the forefront of manufacturing technology in Africa. This includes adopting Industry 4.0 technologies, implementing advanced automation systems, and developing digital capabilities that enhance our operational efficiency and customer service.</p>
      
      <h3>Sustainability Leadership</h3>
      <p>Our vision includes being recognized as a leader in sustainable manufacturing practices in Africa. We are committed to developing and implementing innovative solutions that reduce our environmental impact while maintaining our high standards of quality and efficiency.</p>
      
      <h3>Community Impact</h3>
      <p>As we grow, we will continue to expand our positive impact on the communities where we operate. Our vision includes creating thousands of jobs, supporting local economic development, and contributing to the overall prosperity of African nations.</p>
    `
  };

  return (
    <div className="min-h-screen bg-white">
      <StandardHeader />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-red-800 mb-8">
            OUR BLOG
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover the latest insights, company updates, and stories from Amanex Ghana. 
            Stay connected with our journey of innovation and growth.
          </p>
          <p className="text-lg text-gray-500">SCROLL TO EXPLORE</p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <article key={article.id} id={`article-${article.id}`} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
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
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <User className="w-3 h-3" />
                      {article.author}
                    </div>
                    <a 
                      href={`#article-${article.id}`} 
                      className="text-coty-navy hover:text-coty-gray text-sm font-medium transition-colors duration-200"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-6">Featured Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deeper into our most impactful stories and company updates
            </p>
          </div>
          
          <div className="grid gap-12">
            {blogArticles.map((article) => (
              <article key={article.id} id={`article-${article.id}`} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-coty-navy text-white text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Tag className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-coty-navy mb-4">{article.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{article.excerpt}</p>
                
                <div 
                  className="prose prose-lg max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-4xl font-bold text-coty-navy mb-8">{missionContent.title}</h2>
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: missionContent.content }}
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-4xl font-bold text-coty-navy mb-8">{visionContent.title}</h2>
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: visionContent.content }}
            />
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