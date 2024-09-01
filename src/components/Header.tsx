import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [charikDropdown, setCharikDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileCharikDropdown, setMobileCharikDropdown] = useState(false);
  const [mobileResourcesDropdown, setMobileResourcesDropdown] = useState(false);
  const charikTimeoutRef = useRef(null);
  const resourcesTimeoutRef = useRef(null);

  const handleMouseEnter = (
    setDropdown: React.Dispatch<React.SetStateAction<boolean>>,
    timeoutRef: any,
  ) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdown(true);
  };

  const handleMouseLeave = (
    setDropdown: React.Dispatch<React.SetStateAction<boolean>>,
    timeoutRef: any,
  ) => {
    timeoutRef.current = setTimeout(() => setDropdown(false), 300);
  };

  useEffect(() => {
    return () => {
      if (charikTimeoutRef.current) clearTimeout(charikTimeoutRef.current);
      if (resourcesTimeoutRef.current)
        clearTimeout(resourcesTimeoutRef.current);
    };
  }, []);

  const NavItems = ({ isMobile = false }) => (
    <ul className="space-y-4 md:space-y-0 md:flex md:space-x-6">
      <li className="relative group">
        <div
          className="cursor-pointer"
          onClick={() =>
            isMobile && setMobileCharikDropdown(!mobileCharikDropdown)
          }
          onMouseEnter={() =>
            !isMobile && handleMouseEnter(setCharikDropdown, charikTimeoutRef)
          }
          onMouseLeave={() =>
            !isMobile && handleMouseLeave(setCharikDropdown, charikTimeoutRef)
          }
        >
          <span className="text-gray-700 hover:text-gray-900">
            Charik
          </span>
          <ul
            className={`md:absolute left-0 mt-2 bg-white transition-all duration-300 ${
              (isMobile ? mobileCharikDropdown : charikDropdown)
                ? 'block'
                : 'hidden'
            } ${isMobile ? '!w-full' : 'w-48'}`}
          >
            <li>
              <a
                href="#software"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Software
              </a>
            </li>
            <li>
              <a
                href="#email-finder"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Email Finder
              </a>
            </li>
            <li>
              <a
                href="#company-search"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Company Search
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#pricing" className="text-gray-700 hover:text-gray-900">
          Pricing
        </a>
      </li>
      <li>
        <a href="#about" className="text-gray-700 hover:text-gray-900">
          About
        </a>
      </li>
      <li className="relative group">
        <div
          className="cursor-pointer"
          onClick={() =>
            isMobile && setMobileResourcesDropdown(!mobileResourcesDropdown)
          }
          onMouseEnter={() =>
            !isMobile &&
            handleMouseEnter(setResourcesDropdown, resourcesTimeoutRef)
          }
          onMouseLeave={() =>
            !isMobile &&
            handleMouseLeave(setResourcesDropdown, resourcesTimeoutRef)
          }
        >
          <a href="#resources" className="text-gray-700 hover:text-gray-900">
            Resources
          </a>
          <ul
            className={`md:absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300 ${
              (isMobile ? mobileResourcesDropdown : resourcesDropdown)
                ? 'block'
                : 'hidden'
            } ${isMobile ? 'w-full' : 'w-48'}`}
          >
            <li>
              <a
                href="#insights"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Insights
              </a>
            </li>
            <li>
              <a
                href="#knowledge-base"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Knowledge Base
              </a>
            </li>
            <li>
              <a
                href="#spf-tester"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                SPF Tester
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );

  return (
    <header className="flex justify-between items-center lg:px-48 md:px-12 py-4 bg-white sticky top-0 z-50 shadow-lg">
      <div className="logo">
        <img src={logo} alt="Charik Logo" className="h-10" />
      </div>
      <nav className="hidden md:block font-outfit text-sm md:text-md lg:text-lg">
        <NavItems />
      </nav>
      <div className="md:hidden">
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-20 md:hidden`}
      >
        <div className="p-6">
          <button
            onClick={() => setDrawerOpen(false)}
            className="absolute  top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
            </svg>
          </button>
          <div className="mt-12">
            <NavItems isMobile={true} />
          </div>
        </div>
      </div>
      <div className="cta hidden md:block">
        <button className="bg-orange-500 text-white px-5 py-1 rounded hover:bg-orange-600 transition duration-300 font-outfit text-lg hover:scale-105">
          Request a demo
        </button>
      </div>
    </header>
  );
};

export default Header;
