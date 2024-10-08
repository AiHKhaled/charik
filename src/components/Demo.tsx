import React from 'react';
import Testimonials from './Testimonials';

const Demo: React.FC = () => {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 h-screen bg-gray-900">
      <div className="custom-shape-divider-top-1725120027 z-10 hidden md:block w-full h-auto">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className=" lg:mx-32 md:mx-12 pt-12 mx-4 flex flex-col md:flex-row justify-around items-center  relative z-10 gap-8">
        <h2 className="text-3xl md:text-4xl font-semibold  text-white">
          Need a demo?
        </h2>
        <div className="max-w-md bg-white rounded-lg p-4 shadow-lg flex items-center justify-between gap-8 hover:cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:scale-105">
          <div className="flex  items-center justify-between gap-8">
            <img
              src="https://robohash.org/5fcecc1662ff585ebc38f7b5051cbe39?set=set4&bgset=&size=400x400"
              alt="Jimmy"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-md font-outfit text-black flex flex-col items-start">
              Have you met Jimmy?
              <span className="text-gray-600">See his agenda ...</span>
            </h2>
          </div>

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
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Demo;
