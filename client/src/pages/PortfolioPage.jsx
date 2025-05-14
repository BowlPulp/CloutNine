import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle, Coffee, Building, Dumbbell, Rocket } from 'lucide-react';
import { DrawCircleText } from '../components/DrawCircleText';
import { VanishText } from '../components/VanishText';

// Dummy data - replace with actual video links
const portfolioData = {
  "Cafes / Hotels / Restaurants": {
    description: "Crafting immersive dining experiences that blend aesthetic design with culinary excellence, transforming spaces into memorable destinations.",
    color: "bg-orange-50",
    icon: Coffee,
    videos: [
      { id: 1, title: "Tealogy Cafe", videoUrl: "https://drive.google.com/uc?export=download&id=1FyYu2jwkruA0LJo1rrk9iAing9qtJ8XC" },
      { id: 2, title: "Mehfil Cafe", videoUrl: "https://drive.google.com/uc?export=download&id=1Cq8T77UGCFa_v2dP9brTkD1tzk1w7dSG" },
    ]
  },
  "Real Estate": {
    description: "Innovative architectural visualizations and branding strategies that showcase properties in their most compelling and aspirational light.",
    color: "bg-blue-50",
    icon: Building,
    videos: [
      { id: 1, title: "Luxury Apartment", videoUrl: "https://example.com/video3.mp4" },
      { id: 2, title: "Commercial Space", videoUrl: "https://example.com/video4.mp4" },
    ]
  },
  "Gym & Fitness": {
    description: "Dynamic visual narratives that capture the energy, transformation, and personal empowerment of fitness environments and wellness journeys.",
    color: "bg-green-50",
    icon: Dumbbell,
    videos: [
      { id: 1, title: "Fitness Center", videoUrl: "https://example.com/video5.mp4" },
      { id: 2, title: "Personal Training", videoUrl: "https://example.com/video6.mp4" },
    ]
  },
  "Spa & Salon": {
    description: "Serene and sophisticated visual storytelling that highlights the art of relaxation, beauty, and personal care experiences.",
    color: "bg-pink-50",
    icon: Rocket,
    videos: [
      { id: 1, title: "Spa Interior", videoUrl: "https://example.com/video7.mp4" },
      { id: 2, title: "Salon Makeover", videoUrl: "https://example.com/video8.mp4" },
    ]
  },
  "Startups / Product-based Brands": {
    description: "Creative visual solutions that bring innovative startup concepts and product narratives to life, capturing brand essence and vision.",
    color: "bg-purple-50",
    icon: Rocket,
    videos: [
      { id: 1, title: "Tech Startup", videoUrl: "https://example.com/video9.mp4" },
      { id: 2, title: "Product Launch", videoUrl: "https://example.com/video10.mp4" },
    ]
  }
};

const VideoPlayer = ({ videoUrl, title, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="relative w-full max-w-4xl aspect-video">
        <button 
          onClick={onClose} 
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
        >
          Close
        </button>
        <video 
          controls 
          autoPlay 
          className="w-full h-full"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const PortfolioSection = ({ category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videos, color } = portfolioData[category];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Mobile View (Vertical Scroll) */}
      <div className={`block md:hidden w-full overflow-y-auto max-h-[600px] p-4 space-y-4 ${color}`}>
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <PlayCircle className="text-blue-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View (Horizontal Swipe) */}
      <div className="hidden md:flex items-center justify-center w-full max-w-4xl">
        <button 
          onClick={handlePrev} 
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <ChevronLeft size={32} />
        </button>

        <div 
          className="relative w-full max-w-3xl mx-4 group"
          onClick={() => setSelectedVideo(videos[currentIndex])}
        >
          <div className={`aspect-video ${color} rounded-lg overflow-hidden relative`}>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
              <PlayCircle className="text-white w-16 h-16" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              <h3 className="text-lg font-semibold">{videos[currentIndex].title}</h3>
            </div>
          </div>
        </div>

        <button 
          onClick={handleNext} 
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Fullscreen Video Player */}
      {selectedVideo && (
        <VideoPlayer 
          videoUrl={selectedVideo.videoUrl} 
          title={selectedVideo.title}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "Cafes / Hotels / Restaurants",
    "Real Estate",
    "Gym & Fitness",
    "Spa & Salon",
    "Startups / Product-based Brands"
  ];

  return (
    <>
    <div className='bg-gradient-to-br from-blue-500 to-yellow-100'>
      {/* <DrawCircleText/> */}
    <VanishText/>
    <div className="min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        {/* Landing View - Category Selection */}
        {!selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(portfolioData).map(([category, { description, color, icon: Icon }]) => (
              <div 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${color} shadow-md rounded-lg p-6 cursor-pointer 
                           transform transition-all duration-300 
                           hover:scale-105 hover:shadow-xl 
                           flex flex-col items-center justify-center text-center space-y-4`}
              >
                <Icon className="w-16 h-16 text-gray-700 mb-4" />
                <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                  {category}
                </h2>
                <p className="text-sm text-gray-600 max-w-xs">
                  {description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button 
              onClick={() => setSelectedCategory(null)}
              className="mb-4 flex items-center text-black hover:text-blue-800 transition-colors"
            >
              <ChevronLeft /> Back to Categories
            </button>
            <h1 className="text-2xl font-bold mb-6 text-center">{selectedCategory}</h1>
            <PortfolioSection category={selectedCategory} />
          </div>
        )}
      </div>
    </div>
     </div>
      </>
  );
};

export default PortfolioPage;