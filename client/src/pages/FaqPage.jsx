import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-blue-600 transition-transform" />
        ) : (
          <ChevronDown className="text-gray-500 transition-transform" />
        )}
      </button>
      
      {isOpen && (
        <div 
          className="mt-3 text-gray-600 animate-fade-in-down"
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQPage = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive digital solutions including web development, mobile app design, cloud computing, and AI-powered consulting services tailored to meet your business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project duration varies depending on complexity. On average, our web projects take 4-8 weeks, while mobile app development can range from 6-12 weeks."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! We provide post-project support packages with different tiers of maintenance, updates, and technical assistance to ensure your digital solutions remain optimal."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "Our team is proficient in modern technologies including React, Node.js, Python, AWS, machine learning frameworks, and cutting-edge cloud technologies."
    },
    {
      question: "How do you pricing work?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and customized packages based on your specific requirements and budget."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! We offer code audit, optimization, and rescue services for existing projects that need technical improvements or strategic realignment."
    },
    {
      question: "What's your communication process?",
      answer: "We believe in transparent communication. Clients receive regular updates, have dedicated project managers, and can schedule weekly or bi-weekly check-in calls."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600">Got questions? We've got answers.</p>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-gray-500">
          Didn't find what you were looking for? 
          <a 
            href="#contact" 
            className="ml-2 text-blue-600 hover:underline"
          >
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQPage;
