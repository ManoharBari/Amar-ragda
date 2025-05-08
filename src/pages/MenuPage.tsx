import React from 'react';

const MenuPage = () => {
  const menuCategories = [
    {
      name: 'Street Food Favorites',
      items: [
        {
          name: 'Amar Ragda',
          description: 'Spiced ragda served with crispy kachori and chutneys',
          price: '₹70',
          image: 'ragda.png'
        },
        {
          name: 'Kachori',
          description: 'Spicy lentil-filled pastry served with chutney',
          price: '₹18',
          image: 'kachori.png'
        },
        {
          name: 'Samosa',
          description: 'Crispy pastry filled with spiced potatoes and peas',
          price: '₹18',
          image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80'
        }
      ]
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Menu</h1>
        
        {menuCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                      <span className="text-orange-600 font-semibold">{item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                    <button className="mt-4 w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                      Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;