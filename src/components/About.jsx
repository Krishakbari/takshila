import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate=useNavigate()
  return (
    <div className="px-4 md:px-20 md:my-20 my-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="flex gap-4 items-center mb-4">
            <p className="font-semibold text-base">About Us</p>
          </div>
          <div className="sm:text-5xl text-xl text-[#ff6100]">
            About Takshila Industries

          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <p className="text-sm text-justify">
            Founded in 2023 at Shapar (Veraval), Rajkot, we are a modern steel casting foundry delivering high-performance castings and machined components for global industries. With advanced CO₂ molding technology, a 13,500 sq. ft. facility, and a capacity of 500 MT per year, we produce castings in carbon steel, stainless steel, duplex, super duplex, and special alloy castings — built to perform under the toughest conditions. 
          </p>
          <button className="bg-[#ff6100] text-white px-6 py-2 rounded-md w-fit" onClick={()=>navigate("/about")}>
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
