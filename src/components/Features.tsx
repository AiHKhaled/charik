import React from 'react';

const featureData = [
  {
    icon: '🎯',
    title: 'Made for HubSpot',
    description: 'The best companion for HubSpot users',
  },
  {
    icon: '🔍',
    title: 'Search Companies',
    description: 'Find new companies to prospect',
  },
  {
    icon: '➕',
    title: 'Add companies',
    description: 'Add companies to your HubSpot CRM',
  },
  {
    icon: '📊',
    title: 'Segment your CRM',
    description: 'Segment your database with our filters',
  },
  {
    icon: '🌐',
    title: 'Domain Finder',
    description: 'Find the domain name of any company',
  },
  {
    icon: '👤',
    title: 'Search Contacts',
    description: 'Find new contacts to prospect',
  },
  {
    icon: '📇',
    title: 'Add Contacts',
    description: 'Add contacts to your HubSpot CRM',
  },
  {
    icon: '📧',
    title: 'Email Finder',
    description: 'Find email addresses of your prospects',
  },
  {
    icon: '📱',
    title: 'Phone Finder',
    description: 'Find phone numbers of your prospects',
  },
  {
    icon: '🔗',
    title: 'LinkedIn contact',
    description: 'Add a contact from LinkedIn',
  },
  {
    icon: '🚫',
    title: 'No duplicates',
    description: 'Avoid creating duplicate records',
  },
  {
    icon: '👥',
    title: 'Gender Reveal',
    description: 'Reveal the gender of your contacts',
  },
  {
    icon: '💰',
    title: 'Get financial data',
    description: 'Get financial data of companies',
  },
  {
    icon: '📈',
    title: 'Balance Sheets',
    description: 'Access balance sheets of companies',
  },
  {
    icon: '🧮',
    title: 'Finance Filters',
    description: 'Filter companies by financial data',
  },
];

const FeatureCard: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="p-4 rounded-lg border-2 border-gray-300">
    <div className="text-2xl mb-2">{icon}</div>
    <h3 className="font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="px-4 md:px-8 lg:px-32 md:mb-12 mb-4 lg:mb-0 relative lg:h-screen h-full bg-transparent">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-12">
          Discover our key features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1725114600 hidden xl:block ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-auto sm:w-1/2 sm:h-auto"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Features;
