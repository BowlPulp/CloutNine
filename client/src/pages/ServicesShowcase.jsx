import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

const CARD_HEIGHT = 500;

const servicesData = [
  {
    id: 1,
    title: "Account Setup",
    description:
      "Professional setup and optimization of your social media profiles to maximize visibility and engagement.",
    icon: Settings,
    color: "bg-blue-500",
    image: "AccountCreation.png", // No image provided
  },
  {
    id: 2,
    title: "Content Creation",
    description:
      "High-quality, engaging content tailored to your brand voice and target audience needs.",
    icon: FileText,
    color: "bg-purple-500",
    image: "ContentCreation.png", // No image provided
  },
  {
    id: 3,
    title: "Content Strategy",
    description:
      "Strategic planning to align content with business goals and audience interests for maximum impact.",
    icon: Lightbulb,
    color: "bg-yellow-500",
    image: "ContentStrategy.png", // No image provided
  },
  {
    id: 4,
    title: "Content Scheduling",
    description:
      "Optimal timing of posts to reach your audience when they're most active and receptive.",
    icon: Calendar,
    color: "bg-green-500",
  image: "ContentScheduling.png", // No image provided
  },
  {
    id: 5,
    title: "Content Posting",
    description:
      "Reliable and consistent publishing across multiple platforms to maintain audience engagement.",
    icon: Send,
    color: "bg-red-500",
    image: "ContentPosting.png", // No image provided
  },
  {
    id: 6,
    title: "Content Marketing",
    description:
      "Strategic promotion to expand reach and drive meaningful engagement with your target audience.",
    icon: Megaphone,
    color: "bg-indigo-500",
  image: "ContentMarketing.png", // No image provided
  },
  {
    id: 7,
    title: "Analytics & Reporting",
    description:
      "Comprehensive data analysis and insights to measure performance and inform future strategies.",
    icon: BarChart2,
    color: "bg-teal-500",
    image: "Analytics.png", // No image provided
  },
  {
    id: 8,
    title: "Website Development",
    description:
      "Professional website creation tailored to your brand and business objectives.",
    icon: Code,
    color: "bg-pink-500",
    image: "WebDevelopment.png", // No image provided
  },
];

const StickyCard = ({ service, position, scrollYProgress }) => {
  const scaleFromPct = (position - 1) / servicesData.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);
  const isOdd = position % 2;

  const Icon = service.icon;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === servicesData.length ? undefined : y,
        background: isOdd ? "#111827" : "white",
        color: isOdd ? "white" : "black",
      }}
      className="sticky top-0 flex w-full origin-top flex-col md:flex-row items-center justify-center px-4 py-8"
    >
      <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8 overflow-hidden rounded-lg shadow-lg">
        {service.image ? (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[300px] object-cover rounded-lg" // Fixed height and object-cover
            style={{ maxWidth: "100%", maxHeight: "100%" }} // Ensure no overflow
          />
        ) : (
          <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>
      <div className="md:w-1/2">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-full text-white ${service.color} mr-3`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold">{service.title}</h3>
        </div>
        <p className="text-lg">{service.description}</p>
      </div>
    </motion.div>
  );
};

const ServiceShowcase = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <section ref={ref} className="relative">
        {servicesData.map((service, idx) => (
          <StickyCard
            key={service.id}
            service={service}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </section>
     
    </>
  );
};

export default ServiceShowcase;