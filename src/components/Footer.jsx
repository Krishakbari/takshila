import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowUp } from "lucide-react";
import fimg from "../assets/foot.png";
import logo from '../assets/logo.svg';

const Footer = () => {
  const navigate = useNavigate();
  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Product", path: "/product" },
    { name: "Foundry", path: "/foundry" },
    { name: "Industry", path: "/industry" },
    { name: "Material & Grades", path: "/material" },
    { name: "Contact", path: "/inquiry" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#6d2a00] text-white px-6 py-10">
      <div className="max-w-[1300px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: Logo + Navigation */}
          <div className="flex flex-col items-start w-full md:w-[50%]">

            {/* 🔳 White background only behind logo */}
            <div className="bg-white rounded-xl p-3 pr-4 mb-4 shadow-md">
              <img src={logo} alt="Takshila Industries Logo" className="w-52" />
            </div>

            {/* Navigation Links */}
            {/* Navigation Links */}
            <div className="text-sm flex flex-col gap-2">
              {/* First line */}
              <div className="flex flex-wrap gap-2">
                {navigationItems.slice(0, 4).map((item, i, arr) => (
                  <span key={i} className="opacity-90 flex items-center">
                    <Link
                      to={item.path}
                      className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {item.name}
                    </Link>
                    {i !== arr.length - 1 && <span className="mx-2">/</span>}
                  </span>
                ))}
              </div>

              {/* Second line */}
              <div className="flex flex-wrap gap-2">
                {navigationItems.slice(4).map((item, i, arr) => (
                  <span key={i} className="opacity-90 flex items-center">
                    <Link
                      to={item.path}
                      className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {item.name}
                    </Link>
                    {i !== arr.length - 1 && <span className="mx-2">/</span>}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Contact Info */}
          <div className="space-y-4 text-sm md:text-right flex-1">
            <div>
              <p className="text-xs font-light opacity-80">Contact us</p>
              <p className="text-lg font-semibold">( +91 87654 87654 )</p>
            </div>

            <div>
              <p className="text-xs font-light opacity-80">Location</p>
              <p className="text-sm">Address: 123 Industrial Blvd, Tech City</p>
            </div>

            <div>
              <p className="text-xs font-light opacity-80">Email</p>
              <p className="text-sm">info@mechtrade.com</p>
            </div>
          </div>
        </div>

        {/* Scroll To Top + Bottom Text */}
        <div className="mt-12 flex justify-between items-center">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 border rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#6d2a00] transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
          <p className="text-xs opacity-80 sm:ml-0 ml-4">
            Design by Godhani Technology
          </p>
        </div>

        {/* Bottom Image Card */}
        <div
          className="mt-6 rounded-2xl overflow-hidden relative h-[200px] cursor-pointer hover:scale-[1.02] transition-transform duration-300"
          style={{
            backgroundImage: `url(${fimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => navigate("/services")}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="relative h-full p-6 flex items-center justify-between">
            <div>
              <p className="text-white text-sm mb-1 font-medium">Explore</p>
              <p className="text-white text-sm font-light">Documentation</p>
            </div>
            <ArrowUpRight
              size={22}
              className="text-white h-10 w-10 hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
