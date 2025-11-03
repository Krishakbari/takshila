import React from "react";
import rightimage from "../assets/rightimage.png";
import leftimage from "../assets/leftside.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full flex flex-col md:flex-row min-h-screen">
      {/* LEFT SIDE */}
      <div className="md:w-1/2 bg-[#c5c5c5] relative flex flex-col  px-6 md:px-12 sm:py-24 py-6 overflow-hidden">
        <img
          src={leftimage}
          alt="Decorative background"
          className="absolute  inset-0  w-full h-full object-cover opacity-100 pointer-events-none"
        />

        {/* TEXT CONTENT */}
        <div className="relative z-10 space-y-5">
          <p className="text-xs md:text-sm font-semibold text-gray-800">
            ISO 9001:2015 Certified
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold text-[#6d2a00] leading-snug">
            CI & SG Iron  Castings
          </h1>

          <h2 className="text-base md:text-lg font-semibold text-gray-800">
            Precision Machining & Engineering Excellence
          </h2>

          <p className="text-sm md:text-base text-gray-700 max-w-md leading-relaxed">
            Precision engineering plays a vital role in the automotive and
            aerospace industries, ensuring high-performance, safety, and
            reliability. From engine components to aerodynamic structures, every
            part is crafted with tight tolerances and advanced technology. This
            level of accuracy boosts efficiency, reduces failure rates, and
            meets the rigorous standards required in these demanding sectors.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="bg-[#6d2a00] text-white px-4 py-2 rounded text-sm hover:bg-[#5a2200] transition" onClick={()=>navigate("/inquiry")}>
              Get in Touch
            </button>
            <button className="border border-gray-400 px-4 py-2 rounded text-sm hover:bg-gray-100 transition" onClick={()=>navigate("/about")}>
              Learn More About Us
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 relative">
        <img
          src={rightimage}
          alt="Iron Casting"
          className="w-full h-80 sm:h-[760px] object-cover"
        />

        {/* Floating Labels */}
        <div className="absolute sm:bottom-40 bottom-4 left-6 flex flex-col gap-2">
          {[
            "Durable Components",
            "Advanced Engineering",
            "Precision Manufacturing",
          ].map((label, index) => (
            <span
              key={index}
              className="bg-gray-900 text-white text-xs md:text-sm px-3 py-1 rounded"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
