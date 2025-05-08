import React from 'react';

const Hero = () => {

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Savor Tradition, Perfected Since 1957 – Amar Ragda
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Welcome to Amar Ragda, where every bite is a celebration of flavor and heritage.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
                Explore
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transform hover:scale-105 transition-all duration-300">
                Contact
              </button>
            </div>
          </div>
          <div className="relative h-[400px] animate-slide-in">
            <img
              src="ragda.png"
              alt="Traditional Indian Street Food"
              className="w-full h-full object-cover rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;