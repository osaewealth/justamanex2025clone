import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import StandardHeader from "@/components/StandardHeader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import NewsletterService from "@/services/newsletterService";

interface NewsletterEntry {
  id: string;
  email: string;
  timestamp: string;
}

export default function NewsletterSubscribers() {
  const [subscribers, setSubscribers] = useState<NewsletterEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load subscribers
    const loadedSubscribers = NewsletterService.getAllSubscribers();
    setSubscribers(loadedSubscribers);
    setLoading(false);
  }, []);

  const handleExportCSV = () => {
    const csvContent = NewsletterService.exportToCSV(subscribers);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'newsletter_subscribers.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      <StandardHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-coty-gray-light">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen w-full">
          <div className="w-full">
            <h1 className="text-4xl lg:text-5xl font-bold text-coty-navy text-center mb-12">
              Newsletter Subscribers
            </h1>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-lg text-coty-gray">Loading subscribers...</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-coty-navy">
                    Subscribers ({subscribers.length})
                  </h2>
                  <button
                    onClick={handleExportCSV}
                    disabled={subscribers.length === 0}
                    className={`flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 group shadow-md ${
                      subscribers.length === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-coty-navy text-white hover:bg-coty-gold hover:text-coty-navy'
                    }`}
                  >
                    Export to CSV
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {subscribers.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-lg text-coty-gray">No subscribers yet.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Subscription Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {subscribers.map((subscriber) => (
                          <tr key={subscriber.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {subscriber.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {subscriber.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(subscriber.timestamp).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}