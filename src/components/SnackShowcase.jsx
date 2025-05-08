import React from 'react';

const SnackShowcase = () => {
  const snacks = [
    {
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80",
      title: "Ragda Pattice"
    },
    {
      image: "kachori.png",
      title: "Samosa"
    },
    {
      image: "ragda.png",
      title: "Pani Puri"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Snack Showcase</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our delicious snacks and vibrant restaurant atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {snacks.map((snack, index) => (
            <div key={index} className="relative h-[300px] overflow-hidden rounded-lg">
              <img
                src={snack.image}
                alt={snack.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Taste the Tradition Today!
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us at Amar Ragda for a delightful culinary experience that has been cherished since 1957. 
            Whether you dine in or order online, your taste buds are in for a treat!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
              Order
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
              Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnackShowcase;