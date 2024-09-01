import React, { useState } from 'react';

const testimonials = [
  {
    quote:
      'Charik is an essential tool for any company looking to leverage HubSpot to its full potential.',
    author: 'Chevalier',
    role: 'CEO & Founder',
    avatar:
      'https://robohash.org/5fcecc1662ff585ebc38f7b5051cbe39?set=set4&bgset=&size=400x400',
    rating: 5,
  },
  {
    quote:
      'Charik  any company looking to leverage HubSpot to its full potential.',
    author: 'Antoine Cheval',
    role: 'CEO & Founder',
    avatar:
      'https://gravatar.com/avatar/5fcecc1662ff585ebc38f7b5051cbe39?s=400&d=robohash&r=x',
    rating: 4,
  },
  {
    quote:
      'Charik is an essential tool for any company looking to leverage HubSpot to its full potential.',
    author: 'Antoine Chevalier',
    role: 'CEO & Founder',
    avatar:
      'https://gravatar.com/avatar/5fcecc1662ff585ebc38f7b5051cbe39?s=400&d=robohash&r=x',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <>
      <div className="absolute text-white left-1/2 top-1/2 transform -translate-x-1/2 z-30 w-3/4 max-w-3xl">
        <div className="text-center flex flex-col justify-center items-center px-10">
          <div className="flex items-center justify-center mb-8">
            {testimonials[currentTestimonial].rating
              ? Array.from({
                  length: testimonials[currentTestimonial].rating,
                }).map((_, index) => (
                  <span key={index} className="text-yellow-400 text-4xl">
                    ★
                  </span>
                ))
              : null}
          </div>
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
            "{testimonials[currentTestimonial].quote}"
          </blockquote>
          <div className="flex items-center justify-center mb-8">
            <img
              src={testimonials[currentTestimonial].avatar}
              alt={testimonials[currentTestimonial].author}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="text-left">
              <p className="font-semibold">
                {testimonials[currentTestimonial].author}
              </p>
              <p className="text-gray-400">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentTestimonial ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
