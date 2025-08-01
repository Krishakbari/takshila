import React from 'react';
import logoblack from '../assets/logoblack.png';

const About = () => {
  return (
    <div className="px-4 md:px-20 md:my-20 my-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="flex gap-4 items-center mb-4">
            <img src={logoblack} alt="logo" className="w-6 h-6" />
            <p className="font-semibold text-base">About Us</p>
          </div>
          <div className="text-xl">
            Precision CNC solutions for automotive and aerospace industry performance.
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <p className="text-sm text-justify">
            Precision engineering plays a vital role in the automotive and aerospace industries, ensuring high-performance, safety, and reliability. From engine components to aerodynamic structures, every part is crafted with tight tolerances and advanced technology. This level of accuracy boosts efficiency, reduces failure rates, and meets the rigorous standards required in these demanding sectors.
          </p>
          <button className="bg-[#11332c] text-white px-6 py-2 rounded-md w-fit">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
