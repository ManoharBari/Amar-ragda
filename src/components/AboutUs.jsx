import React from 'react';
import { ChefHat, Coffee, Clock, MapPin } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Head Chef",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80",
      description: "With over 30 years of experience in traditional Indian cuisine"
    },
    {
      name: "Priya Shah",
      role: "Restaurant Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      description: "Ensuring exceptional service and customer satisfaction since 2010"
    },
    {
      name: "Amit Patel",
      role: "Quality Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      description: "Maintaining our high standards of food quality and hygiene"
    }
  ];

  const features = [
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: "Expert Chefs",
      description: "Our skilled chefs bring decades of experience in authentic Indian street food"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Fresh Ingredients",
      description: "We source the finest ingredients daily for the perfect taste"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Service",
      description: "Fast and efficient service without compromising on quality"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Prime Location",
      description: "Conveniently located in the heart of the city"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Amar Ragda
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              A legacy of authentic flavors and warm hospitality since 1957
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At Amar Ragda, our mission is to preserve and share the authentic flavors of 
              traditional Indian street food while creating memorable dining experiences for 
              our guests. We believe in the power of good food to bring people together and 
              create lasting memories.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              The passionate people behind our delicious food
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="px-6 py-24 sm:px-12 lg:px-16">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Want to Know More?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  We'd love to hear from you. Reach out to us for any questions about our 
                  food, services, or catering options.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-8 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
                    Contact Us
                  </button>
                  <button className="px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-colors">
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;