import React from 'react';
import img3 from '../assets/img3.jpg';
import logoblack from '../assets/logoblack.png';
import { useInView } from '../hooks/useInView'; // Or inline if you added it inside this file

const CaseStudy = () => {
  const [textRef, isVisible] = useInView(0.5); // Adjust threshold as needed

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-row gap-4 items-center">
          <img
            src={logoblack}
            alt="logo"
            className="w-5 h-5 md:w-6 md:h-6 object-contain  "
          />
          <p className="text-sm md:text-xl font-medium text-[#0d2f24]">
            Success Stories
          </p>
        </div>

        {/* Animate only when in view */}
        <div
          ref={textRef}
          className={`text-lg sm:text-2xl transition-all duration-1000 ${
            isVisible ? 'tracking-in-contract-bck' : 'opacity-0'
          }`}
        >
          Real results from our <br /> engineering solutions
        </div>
      </div>

      {/* Background section */}
      <div className="max-w-[95%] h-[500px] md:h-[600px] rounded-xl m-4 md:m-10 overflow-hidden relative">
        <div
          className={`absolute inset-0 h-full w-full bg-cover bg-center ${isVisible ? 'flicker-in-1' : "opacity-0"}`}
          style={{ backgroundImage: `url(${img3})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative h-full flex items-end px-4 md:px-10 pb-6 md:pb-10 text-white">
          <div className="max-w-full md:max-w-2xl">
            <div className="text-xl sm:text-2xl font-bold mb-2">
              Automotive Assembly Line Upgrade
            </div>
            <div className="text-sm">Major Auto Manufacturer</div>
            <div className="mt-6 bg-[#1e3c34] inline-block px-4 py-1 rounded-md">
              View Case Study
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
