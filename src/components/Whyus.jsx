import React from "react";
import first from "../assets/g1.png";
import second from "../assets/g2.png";
import third from "../assets/g3.png";

const Whyus = () => {
  const reasons = [
    {
      img: first,
      title: "ISO Certified",
      desc: "ISO 9001:2015 certified quality management system ensuring consistent excellence.",
    },
    {
      img: second,
      title: "36,000 sq.ft. Facility",
      desc: "State-of-the-art manufacturing facility with advanced equipment and technology.",
    },
    {
      img: third,
      title: "Precision Machining",
      desc: "Advanced machining capabilities with tight tolerances and superior finish.",
    },
  ];

  return (
    <section className="w-full bg-white text-black py-16 px-6 md:px-10 lg:px-20">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-600">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#ff6600] mb-3">
          Why Choose Takshila Industries
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Triloki Industries combines traditional foundry expertise with
          advanced technology to deliver premium-quality iron castings with
          precision and reliability.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-8 flex flex-col items-start text-left hover:shadow-lg transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 mb-5 object-contain"
            />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whyus;
