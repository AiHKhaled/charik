import React from 'react';
import peacock from '../assets/peacock.png';
const Hero: React.FC = () => {
  return (
    <section className="bg-transparent py-16 px-4 md:px-8 lg:px-48">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-5xl  mb-4 font-outfit font-normal text-start">
            Get the <span className="text-green-500 font-bold">Sales Intelligence</span> <br />
            made for <span className="text-orange-500 font-bold">HubSpot</span>
          </h1>
          <p className="text-gray-600 mb-6 text-start">
            Add contacts & companies from anywhere <br />
            to HubSpot CRM... and more for HubSpot users!
          </p>
          <h2 className="text-2xl font-semibold mb-4">Save Time, Sell More.</h2>
          <button className="outline outline-pink-300 text-pink-500 hover:bg-gradient-to-tr hover:from-red-500  hover:to-pink-500 hover:outline-none hover:text-white px-6 py-3 rounded-md transition duration-300 font-outfit capitalize">
            Request our offers
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src={peacock}
            alt="Stylized peacock character"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;