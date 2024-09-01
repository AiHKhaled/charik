import React from 'react';
import '../styles/wave.css';
import prospect from '../assets/prospect.png';
import SSI from '../assets/SSI.jpg';
import Do from '../assets/Do.png';
const blogPosts = [
  {
    title: 'Comprendre le Social Selling Index (SSI) de LinkedIn',
    image: prospect,
    category: 'Prospection',
    date: '2024-01-01',
    duration: '10 min',
  },
  {
    title: 'Optimisation de la Prospection de Leads',
    image: Do,
    category: 'Sales',
    date: '2024-01-01',
    duration: '10 min',
  },
  {
    title: 'Trust journey: construire la confiance avec ses prospects',
    image: SSI,
    category: 'LinkedIn',
    date: '2024-01-01',
    duration: '10 min',
  },
];

const BlogPost: React.FC<{
  title: string;
  image: string;
  category: string;
  date: string;
  duration: string;
}> = ({ title, image, category, date, duration }) => (
  <div className="rounded-lg bg-white border-gray-300 transition-transform duration-300 hover:scale-105">
    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
    <div className="text-left pr-8 pl-4 py-4 m-0">
      <span className="text-sm text-white font-semibold bg-pink-400 rounded-lg px-3 py-1">
        {category}
      </span>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 text-sm mt-2 ">
        {date} | {duration}
      </p>
    </div>
  </div>
);

const Blogs: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-48">
      <div className="container mx-auto">
        <p className="text-center text-gray-600 mb-8">
          The Art of Smart Selling
        </p>
        <h2 className="text-3xl font-bold text-center mb-2">
          Sales Intelligence Blog
        </h2>
        <h3 className="text-md text-center text-gray-600 w-1/3 mx-auto mb-2">
          Dive into the future of selling with our blog on Sales Intelligence –
          where data meets strategy.
        </h3>
        <hr className="w-1/12 mx-auto mb-8 border-2 border-pink-300 my-4" />
        <div className="grid grid-cols-3 gap-8 ">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
