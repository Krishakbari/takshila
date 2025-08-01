import React from 'react';
import logoblack from '../assets/logoblack.png';

const ContactSupport = () => {
  return (
    <div className="text-center px-6 md:px-0 py-12">
      {/* Icon and Label */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <img src={logoblack} alt="Contact Icon" className="w-6 h-6 object-contain" />
        <p className="text-lg font-medium text-[#0d2f24]">Contact</p>
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#0c1d2c] mb-2">
        Need Engineering Support?
      </h2>

      {/* Subtext */}
      <p className="text-sm md:text-base text-[#3d4c5c] mb-6">
        Our technical experts are available 24/7 to assist you
      </p>

      {/* Button */}
      <button className="bg-[#11332c] text-white px-5 py-2 rounded-md text-sm hover:bg-[#0c261f] transition">
        Contact Now
      </button>
    </div>
  );
};

export default ContactSupport;
