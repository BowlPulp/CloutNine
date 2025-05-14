import { useState, useEffect } from 'react';
import { CheckCircle, X, ChevronDown, ChevronUp, Facebook, Instagram, Twitter, Globe, Code, Layers, Database, Zap, Award, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Main component
export default function ServicePackages() {
  // State for toggle between service types
  const [activeService, setActiveService] = useState('social');
  
  // Accordion state for FAQ section
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Function to toggle FAQ items
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  // Social Media package data
  const socialPackages = [
    {
      title: "Essential Package",
      description: "Perfect for brands starting their social media journey",
      features: [
        "12 high-quality static posts",
        "4 engaging reels",
        "Creative captions",
        "Profile optimization",
        "Daily story updates",
        "Hashtag research",
        "Monthly performance report"
      ],
      notIncluded: [
        "Active community management",
        "Press releases",
        "Collaboration coordination"
      ],
      popular: false,
      color: "bg-blue-100",
      icon: <Zap className="text-blue-500" />
    },
    {
      title: "Growth Package",
      description: "Elevate your social media presence",
      features: [
        "20 professionally designed posts",
        "8 engaging reels/videos",
        "Monthly performance report",
        "Growth strategy suggestions",
        "Enhanced profile optimization",
        "Hashtag research",
        "Daily story updates"
      ],
      notIncluded: [
        "Active community management",
        "Press releases",
        "Collaboration coordination"
      ],
      popular: true,
      color: "bg-purple-100",
      icon: <Award className="text-purple-500" />
    },
    {
      title: "Premium Package",
      description: "Comprehensive social media management",
      features: [
        "30 high-quality posts",
        "12 professional reels/videos",
        "Active community management",
        "Press releases & collaborations",
        "Monthly content review & planning",
        "Comprehensive performance insights",
        "Strategic growth recommendations",
        "Advanced profile optimization"
      ],
      notIncluded: [
        "Fully custom content strategy",
        "Dedicated account manager"
      ],
      popular: false,
      color: "bg-sky-100",
      icon: <Rocket className="text-sky-500" />
    }
  ];
  
  // Web Development package data
  const webPackages = [
    {
      title: "Basic Website",
      description: "Perfect for small businesses getting started online",
      features: [
        "5-page responsive website",
        "Mobile-friendly design",
        "Contact form integration",
        "Basic SEO setup",
        "Social media integration",
        "Google Analytics setup",
        "1 round of revisions"
      ],
      notIncluded: [
        "Content creation",
        "E-commerce functionality",
        "Custom animations"
      ],
      popular: false,
      color: "bg-green-100",
      icon: <Globe className="text-green-500" />
    },
    {
      title: "Business Website",
      description: "Professional website for established businesses",
      features: [
        "10-page responsive website",
        "Advanced design elements",
        "Content Management System",
        "Blog setup & integration",
        "Advanced contact forms",
        "Comprehensive SEO optimization",
        "Google Business profile setup",
        "2 rounds of revisions"
      ],
      notIncluded: [
        "E-commerce functionality",
        "Custom web applications",
        "Ongoing maintenance"
      ],
      popular: true,
      color: "bg-amber-100",
      icon: <Code className="text-amber-500" />
    },
    {
      title: "E-commerce Website",
      description: "Complete online store solution",
      features: [
        "Full e-commerce functionality",
        "Product catalog setup (up to 50 products)",
        "Secure payment gateway integration",
        "Inventory management system",
        "Order processing & tracking",
        "Customer account creation",
        "Product search & filtering",
        "Mobile-optimized shopping experience",
        "3 rounds of revisions"
      ],
      notIncluded: [
        "Product photography",
        "Custom product descriptions",
        "Marketplace integrations"
      ],
      popular: false,
      color: "bg-red-100",
      icon: <Database className="text-red-500" />
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "How long does it take to see results from social media marketing?",
      answer: "Results from social media marketing typically start to show within 2-3 months of consistent posting and engagement. However, significant growth and ROI may take 6-12 months depending on your industry, competition, and marketing objectives."
    },
    {
      question: "Do I own the website after it's built?",
      answer: "Yes, you retain full ownership of your website after our development work is complete. We provide you with all necessary access credentials and can assist with domain and hosting setup if needed."
    },
    {
      question: "Can I upgrade or downgrade my package later?",
      answer: "Absolutely! We understand that your business needs may change over time. You can upgrade or downgrade your package with 30 days' notice before the next billing cycle for social media services, or discuss upgrade options for web development at any time."
    },
    {
      question: "What platforms do you manage for social media marketing?",
      answer: "We manage all major platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, Pinterest, and YouTube. The specific platforms included depend on your selected package and your business needs."
    },
    {
      question: "Do you offer website maintenance after launch?",
      answer: "Yes, we offer website maintenance plans starting at $99/month which include security updates, performance optimization, content updates, and technical support to keep your site running smoothly."
    }
  ];

  // Animation variants for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-yellow-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our <span className="text-[var(--primary)]">Services</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Choose the perfect plan to elevate your online presence
          </p>
        </motion.div>
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveService('social')}
              className={`${
                activeService === 'social'
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-transparent text-gray-500 hover:text-gray-700'
              } px-4 py-2 rounded-full transition-all duration-300 font-medium flex items-center space-x-2`}
            >
              <Instagram size={18} />
              <span>Social Media</span>
            </button>
            <button
              onClick={() => setActiveService('web')}
              className={`${
                activeService === 'web'
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-transparent text-gray-500 hover:text-gray-700'
              } px-4 py-2 rounded-full transition-all duration-300 font-medium flex items-center space-x-2`}
            >
              <Globe size={18} />
              <span>Web Development</span>
            </button>
          </div>
        </div>
        
        {/* Package Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeService}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {(activeService === 'social' ? socialPackages : webPackages).map((pkg, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative rounded-2xl shadow-lg overflow-hidden ${pkg.popular ? 'ring-4 ring-indigo-500' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[var(--primary)] text-white py-1 px-4 rounded-bl-lg font-medium z-10">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${pkg.color} h-full flex flex-col`}>
                  <div className="flex items-center mb-4">
                    {pkg.icon}
                    <h3 className="ml-2 text-2xl font-bold text-gray-900">{pkg.title}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    
                    {pkg.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start text-gray-500">
                        <X size={18} className="text-red-400 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 px-4 rounded-lg font-medium ${
                        pkg.popular
                          ? 'bg-[var(--primary)] hover:bg-indigo-700 text-white'
                          : 'bg-white bg-opacity-50 hover:bg-opacity-80 text-[var(--primary)] border border-indigo-300'
                      } transition-all duration-300`}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronUp size={20} className="text-indigo-500" />
                  ) : (
                    <ChevronDown size={20} className="text-indigo-500" />
                  )}
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
          <p className="text-gray-600 mb-6">Still have questions? Contact our team for a free consultation.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}