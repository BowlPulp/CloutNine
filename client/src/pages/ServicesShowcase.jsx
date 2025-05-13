import React from "react";
import { motion } from "framer-motion";
import {
  Settings,
  FileText,
  Lightbulb,
  Calendar,
  Send,
  Megaphone,
  BarChart2,
  Code,
} from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Account Setup",
    description:
      "Professional setup and optimization of your social media profiles to maximize visibility and engagement.",
    icon: Settings,
    color: "bg-blue-500",
    image: "logoblue.png",
  },
  {
    id: 2,
    title: "Content Creation",
    description:
      "High-quality, engaging content tailored to your brand voice and target audience needs.",
    icon: FileText,
    color: "bg-purple-500",
    image: "logogreen.png",
  },
  {
    id: 3,
    title: "Content Strategy",
    description:
      "Strategic planning to align content with business goals and audience interests for maximum impact.",
    icon: Lightbulb,
    color: "bg-yellow-500",
    image: "logoblue.png",
  },
  {
    id: 4,
    title: "Content Scheduling",
    description:
      "Optimal timing of posts to reach your audience when they're most active and receptive.",
    icon: Calendar,
    color: "bg-green-500",
    image: "logogreen.png",
  },
  {
    id: 5,
    title: "Content Posting",
    description:
      "Reliable and consistent publishing across multiple platforms to maintain audience engagement.",
    icon: Send,
    color: "bg-red-500",
    image: "logoblue.png",
  },
  {
    id: 6,
    title: "Content Marketing",
    description:
      "Strategic promotion to expand reach and drive meaningful engagement with your target audience.",
    icon: Megaphone,
    color: "bg-indigo-500",
    image: "logogreen.png",
  },
  {
    id: 7,
    title: "Analytics & Reporting",
    description:
      "Comprehensive data analysis and insights to measure performance and inform future strategies.",
    icon: BarChart2,
    color: "bg-teal-500",
    image: "logoblue.png",
  },
  {
    id: 8,
    title: "Website Development",
    description:
      "Professional website creation tailored to your brand and business objectives.",
    icon: Code,
    color: "bg-pink-500",
    image: "logogreen.png",
  },
];

const fadeInVariant = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const ServiceShowcase = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 space-y-24">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={service.id}
              className={`flex flex-col md:flex-row items-center ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant(isEven ? "left" : "right")}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 rounded-lg shadow-lg"
                loading="lazy"
              />

              {/* Text Content */}
              <div className="mt-6 md:mt-0 md:w-1/2 md:px-10">
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-full text-white ${service.color} mr-3`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                </div>
                <p className="text-lg text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceShowcase;
