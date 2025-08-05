import { useState, useEffect } from "react";
import { Search, Menu, ArrowRight, X, Phone, Mail, MapPin, Clock, Users, Globe, ArrowUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import StandardHeader from "@/components/StandardHeader";
import ScrollToTop from "@/components/ScrollToTop";

export default function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Sales Representative",
      department: "Sales & Marketing",
      location: "Accra, Ghana",
      type: "Full-time",
      experience: "2-3 years",
      description: "We're looking for a dynamic Sales Representative to join our team and help drive growth in the Ghanaian market.",
      requirements: [
        "Bachelor's degree in Business, Marketing, or related field",
        "2-3 years of sales experience in FMCG industry",
        "Strong communication and negotiation skills",
        "Proven track record of meeting sales targets",
        "Knowledge of the local market and consumer behavior"
      ],
      responsibilities: [
        "Develop and maintain relationships with key clients",
        "Achieve monthly and quarterly sales targets",
        "Conduct market research and competitor analysis",
        "Present product demonstrations and training sessions",
        "Prepare sales reports and forecasts"
      ]
    },
    {
      id: 2,
      title: "Marketing Coordinator",
      department: "Marketing",
      location: "Accra, Ghana",
      type: "Full-time",
      experience: "1-2 years",
      description: "Join our marketing team to help create compelling campaigns that connect with our customers.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "1-2 years of marketing experience",
        "Proficiency in digital marketing tools and platforms",
        "Creative thinking and problem-solving skills",
        "Experience with social media management"
      ],
      responsibilities: [
        "Assist in developing marketing campaigns and strategies",
        "Manage social media accounts and content creation",
        "Coordinate with external agencies and vendors",
        "Track and analyze campaign performance metrics",
        "Support event planning and execution"
      ]
    },
    {
      id: 3,
      title: "Supply Chain Specialist",
      department: "Operations",
      location: "Accra, Ghana",
      type: "Full-time",
      experience: "3-5 years",
      description: "Help optimize our supply chain operations to ensure efficient product distribution across Ghana.",
      requirements: [
        "Bachelor's degree in Supply Chain Management, Logistics, or related field",
        "3-5 years of supply chain experience",
        "Knowledge of inventory management systems",
        "Strong analytical and problem-solving skills",
        "Experience with ERP systems"
      ],
      responsibilities: [
        "Manage inventory levels and forecasting",
        "Coordinate with suppliers and logistics partners",
        "Optimize warehouse operations and distribution",
        "Monitor and improve supply chain performance",
        "Ensure compliance with quality standards"
      ]
    },
    {
      id: 4,
      title: "Customer Service Representative",
      department: "Customer Service",
      location: "Accra, Ghana",
      type: "Full-time",
      experience: "1-2 years",
      description: "Be the voice of our company and help deliver exceptional customer experiences.",
      requirements: [
        "High school diploma or equivalent",
        "1-2 years of customer service experience",
        "Excellent communication skills in English and local languages",
        "Patient and empathetic approach to customer issues",
        "Ability to work in shifts"
      ],
      responsibilities: [
        "Handle customer inquiries and complaints",
        "Process orders and track shipments",
        "Provide product information and support",
        "Maintain customer records and update databases",
        "Escalate complex issues to appropriate departments"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Professional Growth",
      description: "Continuous learning opportunities and career development programs"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Exposure",
      description: "Work with international brands and gain valuable experience"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Competitive Benefits",
      description: "Health insurance, paid time off, and performance bonuses"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and supportive work environment"
    }
  ];

  return (
    <div className="min-h-screen">
      <StandardHeader />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl md:text-8xl font-bold text-coty-navy mb-8">
              CAREERS
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              Join our dynamic team and be part of a company that's shaping the future of manufacturing in Ghana. 
              Discover opportunities that match your skills and passion.
            </p>
            <div className="mt-12 text-gray-500 font-medium flex items-center justify-center lg:justify-start">
              <div className="w-8 h-px bg-gray-500 mr-3"></div>
              <span className="text-sm tracking-wide">EXPLORE OPPORTUNITIES</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our employees can thrive, grow, and make a meaningful impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-coty-navy text-white rounded-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-coty-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coty-navy mb-6">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job opportunities and find the perfect role for your career growth.
            </p>
          </div>
          
          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-coty-navy mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.experience} experience
                        </span>
                      </div>
                    </div>
                    <Button className="w-fit flex items-center gap-4 px-6 py-3 bg-coty-navy text-white text-sm font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300 mt-4 lg:mt-0">
                      APPLY NOW
                      <ArrowRight className="text-xl" />
                    </Button>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{job.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-coty-navy mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <span className="text-coty-navy mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-coty-navy mb-3">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <span className="text-coty-navy mt-1">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coty-navy mb-6">Apply Now</h2>
            <p className="text-xl text-gray-600">
              Ready to join our team? Submit your application and we'll get back to you soon.
            </p>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <Input type="text" required className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <Input type="text" required className="w-full" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input type="email" required className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <Input type="tel" required className="w-full" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position Applied For *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coty-navy focus:border-transparent">
                    <option value="">Select a position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.id}>{job.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter *</label>
                  <Textarea 
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
                  <Input type="file" accept=".pdf,.doc,.docx" required className="w-full" />
                  <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
                
                <Button type="submit" className="w-full flex items-center justify-center gap-4 px-8 py-4 bg-coty-navy text-white text-lg font-medium rounded-br-3xl hover:bg-transparent hover:text-coty-navy border border-coty-navy transition-colors duration-300">
                  SUBMIT APPLICATION
                  <ArrowRight className="text-2xl" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
} 