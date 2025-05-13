import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  FileText, 
  Lightbulb, 
  Calendar, 
  Send, 
  Megaphone, 
  BarChart2, 
  Code
} from 'lucide-react';

// Define service data
const servicesData = [
  {
    id: 1,
    title: "Account Setup",
    description: "Professional setup and optimization of your social media profiles to maximize visibility and engagement.",
    icon: Settings,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Content Creation",
    description: "High-quality, engaging content tailored to your brand voice and target audience needs.",
    icon: FileText,
    color: "bg-purple-500"
  },
  {
    id: 3,
    title: "Content Strategy",
    description: "Strategic planning to align content with business goals and audience interests for maximum impact.",
    icon: Lightbulb,
    color: "bg-yellow-500"
  },
  {
    id: 4,
    title: "Content Scheduling",
    description: "Optimal timing of posts to reach your audience when they're most active and receptive.",
    icon: Calendar,
    color: "bg-green-500"
  },
  {
    id: 5,
    title: "Content Posting",
    description: "Reliable and consistent publishing across multiple platforms to maintain audience engagement.",
    icon: Send,
    color: "bg-red-500"
  },
  {
    id: 6,
    title: "Content Marketing",
    description: "Strategic promotion to expand reach and drive meaningful engagement with your target audience.",
    icon: Megaphone,
    color: "bg-indigo-500"
  },
  {
    id: 7,
    title: "Analytics & Reporting",
    description: "Comprehensive data analysis and insights to measure performance and inform future strategies.",
    icon: BarChart2,
    color: "bg-teal-500"
  },
  {
    id: 8,
    title: "Website Development",
    description: "Professional website creation tailored to your brand and business objectives.",
    icon: Code,
    color: "bg-pink-500"
  }
];

const ServiceCard = ({ service, isVisible }) => {
  return (
    <div 
      className={`transform transition-all duration-700 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-16"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
        <div className={`${service.color} p-6 flex justify-center items-center`}>
          <service.icon size={48} className="text-white" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesShowcase = () => {
  const [visibleServices, setVisibleServices] = useState([]);
  
  useEffect(() => {
    // Stagger the appearance of services
    const timer = setTimeout(() => {
      const showServices = () => {
        servicesData.forEach((service, index) => {
          setTimeout(() => {
            setVisibleServices(prev => [...prev, service.id]);
          }, index * 200);
        });
      };
      
      showServices();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              isVisible={visibleServices.includes(service.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;