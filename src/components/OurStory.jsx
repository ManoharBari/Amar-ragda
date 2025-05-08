import React from 'react';
import { Clock, Award, Users, Heart } from 'lucide-react';

const OurStory = () => {
  const milestones = [
    {
      year: "1957",
      title: "The Beginning",
      description: "Started as a small street food stall in the heart of the city",
      image: "shop.png"
    },
    {
      year: "2010",
      title: "First Restaurant",
      description: "Opened our first brick-and-mortar restaurant",
      image: "shop2.png"
    },
  ];

  const values = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Tradition",
      description: "Preserving authentic recipes passed down through generations"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality",
      description: "Using the finest ingredients for the best taste"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family",
      description: "Treating our customers like family since 1957"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Crafting each dish with love and dedication"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto">
              A journey of passion, tradition, and authentic flavors since 1957
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            A Legacy of Flavor
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            For over six decades, Amar Ragda has been serving authentic street food delicacies 
            that have become a cherished part of our city's culinary heritage. What started as 
            a humble street-side stall has grown into a beloved institution, thanks to our 
            commitment to quality, tradition, and the warmth of family hospitality.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Our Journey Through Time
          </h2>
          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="relative h-[400px] overflow-hidden rounded-lg">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="text-4xl font-bold text-orange-600 mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in celebrating over 60 years of culinary excellence. 
            Visit our restaurant to experience the tradition and taste that 
            has made Amar Ragda a household name.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
              Visit Us Today
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;