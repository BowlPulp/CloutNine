import React from 'react';
import { ArrowUp, Target, BarChart2, Rocket } from 'lucide-react';

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Who We Are Section */}
                <section className="mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 transform transition-all duration-700 hover:scale-105">
                        About CloutNine
                    </h1>
                    <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
                            <ArrowUp className="mr-3 text-blue-500" /> Who We Are
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            CloutNine is a dynamic digital marketing powerhouse dedicated to transforming how businesses connect, communicate, and conquer in the digital landscape. We're more than just a marketing agency – we're strategic partners who breathe life into brands through cutting-edge digital solutions and creative expertise.
                        </p>
                    </div>
                </section>

                {/* What We Do Section */}
                <section className="mb-16 animate-slide-in-right">
                    <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold text-green-600 mb-6 flex items-center">
                            <Target className="mr-3 text-green-500" /> What We Do
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-5 rounded-lg transform transition-transform hover:scale-105">
                                <h3 className="font-bold text-lg text-green-700 mb-3">Creative Storytelling</h3>
                                <p className="text-gray-600">Crafting compelling narratives that resonate with your target audience</p>
                            </div>
                            <div className="bg-blue-50 p-5 rounded-lg transform transition-transform hover:scale-105">
                                <h3 className="font-bold text-lg text-blue-700 mb-3">Strategic Campaigns</h3>
                                <p className="text-gray-600">Designing data-driven marketing approaches that drive real results</p>
                            </div>
                            <div className="bg-purple-50 p-5 rounded-lg transform transition-transform hover:scale-105">
                                <h3 className="font-bold text-lg text-purple-700 mb-3">Platform Optimization</h3>
                                <p className="text-gray-600">Maximizing your brand's potential across social media channels</p>
                            </div>
                            <div className="bg-orange-50 p-5 rounded-lg transform transition-transform hover:scale-105">
                                <h3 className="font-bold text-lg text-orange-700 mb-3">Performance Analysis</h3>
                                <p className="text-gray-600">Providing deep insights that continually refine your digital strategy</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How We Do It Section */}
                <section className="mb-16 animate-fade-in-up">
                    <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold text-[var(--primary)] mb-6 flex items-center">
                            <BarChart2 className="mr-3 text-indigo-500" /> How We Do It
                        </h2>
                        <ol className="border-l-4 border-indigo-300">
                            {[
                                { step: 'Discovery Call', description: 'Deep dive into your brand and marketing goals' },
                                { step: 'Personalized Setup', description: 'Tailored strategy development' },
                                { step: 'Content Creation', description: 'Crafting engaging, platform-specific content' },
                                { step: 'Campaign Execution', description: 'Implementing strategic marketing initiatives' },
                                { step: 'Continuous Optimization', description: 'Analyzing and refining performance' }
                            ].map((item, index) => (
                                <li key={item.step} className="mb-6 ml-6 pb-4">
                                    <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -ml-[2.15rem] mt-1.5 animate-pulse"></div>
                                    <h3 className="font-bold text-lg text-indigo-700 mb-2">
                                        Step {index + 1}: {item.step}
                                    </h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center animate-bounce-in">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-10 shadow-2xl">
                        <h2 className="text-3xl font-bold mb-4 flex justify-center items-center">
                            <Rocket className="mr-4 text-yellow-300" /> Ready to Elevate Your Brand?
                        </h2>
                        <p className="text-xl mb-6 text-gray-100">
                            Let's transform your digital presence together
                        </p>
                        <a href='/contact' className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block text-center">
                            Get Started
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

// Custom animations for Tailwind
const styles = `
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-right {
  from { 
    opacity: 0;
    transform: translateX(-20px);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-up {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce-in {
  0% { 
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.animate-fade-in { animation: fade-in 1s ease-out; }
.animate-slide-in-right { animation: slide-in-right 1s ease-out; }
.animate-fade-in-up { animation: fade-in-up 1s ease-out; }
.animate-bounce-in { animation: bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
`;