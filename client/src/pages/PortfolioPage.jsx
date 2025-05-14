import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle, Coffee, Building, Dumbbell, Rocket } from 'lucide-react';
import { DrawCircleText } from '../components/DrawCircleText';
import { VanishText } from '../components/VanishText';

// Dummy data - replace with actual embeddable video links
const portfolioData = {
  "Cafes / Hotels / Restaurants": {
    description: "Crafting immersive dining experiences that blend aesthetic design with culinary excellence, transforming spaces into memorable destinations.",
    color: "bg-orange-50",
    icon: Coffee,
    videos: [
      { id: 1, title: "Tealogy Cafe #1", videoUrl: "https://drive.google.com/file/d/1FyYu2jwkruA0LJo1rrk9iAing9qtJ8XC/preview" },
      { id: 2, title: "Tealogy Cafe #2", videoUrl: "https://drive.google.com/file/d/1OlTPf_gwn90kSxpSwAj51o-X80-R23Rv/preview" },
      { id: 3, title: "Tealogy Cafe #3", videoUrl: "https://drive.google.com/file/d/1LTnA69CkNRTRMKwK2kMMOHcsK7NloRsd/preview" },
      { id: 4, title: "TBHC #1", videoUrl: "https://drive.google.com/file/d/113Kf9Bs6vPZagoXAwt5OfC1Wv-z4xDgJ/preview" },
      { id: 5, title: "TBHC #2", videoUrl: "https://drive.google.com/file/d/1_C6HEtX42KtLj4o6NbW2a7ECICZZwn0U/preview" },
      { id: 6, title: "TBHC #3", videoUrl: "https://drive.google.com/file/d/1_Iyj7LfB2VFH5tZ6u9h95svtbtMZWcVd/preview" },
      { id: 7, title: "TBHC #4", videoUrl: "https://drive.google.com/file/d/1xzFusIaiswnxOZo3nQH1Ht4zbc7w4Ciq/preview" },
      { id: 8, title: "TBHC #5", videoUrl: "https://drive.google.com/file/d/1cNzkilG-AWvB1fvSA2uBhrCccms2Enyi/preview" },
      { id: 9, title: "BTS #1", videoUrl: "https://drive.google.com/file/d/1PjBJkUfsP7o7ZL4pmVlMNlVCeMORsIaB/preview" },
      { id: 10, title: "BTS #2", videoUrl: "https://drive.google.com/file/d/1Hd-7xJ7e7XIWUf_lZJ5SUQ3jqqzs9_wY/preview" },
      { id: 11, title: "BTS #3", videoUrl: "https://drive.google.com/file/d/1unj14mrHE7Qc14CM77Cb9PFcLVqUYUWA/preview" },
      { id: 12, title: "Mehfil #1", videoUrl: "https://drive.google.com/file/d/1eEfctL9CnMiKTAAkWFrr0VXYbOQtG-OQ/preview" },
      { id: 13, title: "Mehfil #2", videoUrl: "https://drive.google.com/file/d/1-mAUKSB0vYb1CuwcS0vPOLqP2iA_f8m8/preview" },
      { id: 14, title: "Mehfil #3", videoUrl: "https://drive.google.com/file/d/1bxVLmgOar_xz3iJcocNtt39dLzWbnDkV/preview" },
      { id: 15, title: "Mehfil #4", videoUrl: "https://drive.google.com/file/d/1Cq8T77UGCFa_v2dP9brTkD1tzk1w7dSG/preview" },
      { id: 16, title: "Mehfil #5", videoUrl: "https://drive.google.com/file/d/1S-aQw1zl_X1Cs1DL9RgjELz2dQb0sqHt/preview" },
    ]
  },
  "Real Estate": {
    description: "Innovative architectural visualizations and branding strategies that showcase properties in their most compelling and aspirational light.",
    color: "bg-blue-50",
    icon: Building,
    videos: [
      { id: 1, title: "Real Estate #1", videoUrl: "https://drive.google.com/file/d/1RyKCKfSxbVj1OmtkVjg0nuNziZ1mtnKz/preview" },
      { id: 2, title: "Real Estate #2", videoUrl: "https://drive.google.com/file/d/1S0T7prI8_L_GljVUOddmxrmJeyRCWZ-r/preview" },
    ]
  },
  "Gym & Fitness": {
    description: "Dynamic visual narratives that capture the energy, transformation, and personal empowerment of fitness environments and wellness journeys.",
    color: "bg-green-50",
    icon: Dumbbell,
    videos: [
      { id: 1, title: "Evolution Fitness #1", videoUrl: "https://drive.google.com/file/d/1Ph7L7AjP_qkdUuJTXhy02oWoZExmcuJL/preview" },
      { id: 2, title: "Evolution Fitness #2", videoUrl: "https://drive.google.com/file/d/1J-rCT9xIy371nvaV4ecW1nD6emxbab6w/preview" },
      { id: 3, title: "Evolution Fitness #3", videoUrl: "https://drive.google.com/file/d/1JoUXQvfRMprAuLV5d70aTzfaQx767Beu/preview" },
      { id: 4, title: "AJ Fitness #1", videoUrl: "https://drive.google.com/file/d/14uH6Dy67U5FA2ng50Vem7aHRaKzbuASv/preview" },
      { id: 5, title: "AJ Fitness #2", videoUrl: "https://drive.google.com/file/d/1-A9tDcrOIVMEq8HKR0OGAATowv5huDnM/preview" },
      { id: 6, title: "AJ Fitness #3", videoUrl: "https://drive.google.com/file/d/1zPe6QLDsDUXEZSqR2oqggSTkw5eBopLO/preview" },
      { id: 7, title: "AJ Fitness #4", videoUrl: "https://drive.google.com/file/d/1dyqEZGYarInyGhTFdVBIpGcQuA39Y7oN/preview" },
      { id: 8, title: "AJ Fitness #5", videoUrl: "https://drive.google.com/file/d/1X3C3aAD-lKDaFU09NPSuShK18le446XF/preview" },
    ]
  },
  "Spa & Salon": {
    description: "Serene and sophisticated visual storytelling that highlights the art of relaxation, beauty, and personal care experiences.",
    color: "bg-pink-50",
    icon: Rocket,
    videos: [
      { id: 1, title: "Hair Garage #1", videoUrl: "https://drive.google.com/file/d/194fHwzhRVLjudsA4ECb0VbvNzCsCpu4G/preview" },
      { id: 2, title: "Hair Garage #2", videoUrl: "https://drive.google.com/file/d/1-pNnNY_EaYxdOrdX-GllNLZOVihJuC-T/preview" },
      { id: 3, title: "Hair Garage #3", videoUrl: "https://drive.google.com/file/d/1Xj_I1Gc-qcThF18e0sr0MsHKf7di33JQ/preview" },
    ]
  },
  // "Startups / Product-based Brands": {
  //   description: "Creative visual solutions that bring innovative startup concepts and product narratives to life, capturing brand essence and vision.",
  //   color: "bg-purple-50",
  //   icon: Rocket,
  //   videos: [
  //     { id: 1, title: "Tech Startup", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  //     { id: 2, title: "Product Launch", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  //   ]
  // }
};

const VideoPlayer = ({ videoUrl, title, onClose }) => (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
    <div className="relative w-full max-w-4xl aspect-video">
      <button
        onClick={onClose}
        className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
      >
        Close
      </button>
      <iframe
        src={videoUrl}
        title={title}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="w-full h-full rounded-lg"
      />
    </div>
  </div>
);

const PortfolioSection = ({ category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videos, color } = portfolioData[category];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Mobile View */}
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

      {/* Desktop View */}
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

  return (
    <div className="bg-gradient-to-br from-blue-500 to-yellow-100">
      <VanishText/>
      <div className="min-h-screen p-4 md:p-8">
        <div className="container mx-auto">
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
                  <p className="text-sm text-gray-600 max-w-xs">{description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="mb-4 flex items-center text-black hover:text-yellow-800 transition-colors"
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
  );
};

export default PortfolioPage;
