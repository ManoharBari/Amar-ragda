import React from 'react';

const testimonials = [
  {
    text: "The best food available in the entire area. The food is really tasty and mouth watering. The service is very good.",
    author: "Girish Mahajan",
    position: "MLA",
    rating: 5
  },
  {
    text: "Best street food in the city! The flavors are perfectly balanced and the service is excellent.",
    author: "Suresh Bhole",
    position: "MLA",
    rating: 5
  },
  {
    text: "A heritage place that has maintained its quality for decades. Must visit for food lovers!",
    author: "Vishnu Bhangale",
    position: "Politician",
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Customer testimonials</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear what our valued customers have to say about their experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 text-gray-600">{testimonial.text}</p>
              <div className="mt-6 flex items-center">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;