import React from 'react'
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, img: c1, title: "Precision CNC Lathe Machine", desc: "High-precision CNC lathe machine designed for industrial manufacturing applications. Features advanced control systems and exceptional accuracy for complex machining operations." },
  { id: 2, img: c2, title: "High-Speed Milling Machine", desc: "Built for speed and precision — delivers outstanding performance for both roughing and finishing tasks." },
  { id: 3, img: c3, title: "Vertical Machining Center", desc: "Multi-axis control for complex parts — engineered for superior rigidity and accuracy." },
  { id: 4, img: c4, title: "CNC Turning Center", desc: "Compact yet powerful design ideal for high-volume, high-precision production runs." },
  { id: 5, img: c5, title: "Horizontal Boring Machine", desc: "Designed for precise boring and milling of heavy-duty industrial components." },
  // Repeated image for 6th product
  { id: 6, img: c3, title: "Advanced Drilling Machine", desc: "Reliable drilling machine engineered for consistent precision and efficiency in industrial settings." },
];

const OurProduct = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white px-6 md:px-10 py-16">
      <div className="max-w-[1300px] mx-auto">
        {/* Title Section - centered */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-2 mb-3">
            <p className="text-[#ff6100] text-2xl">Featured Products</p>
          </div>
          <h2 className="text-3xl font-semibold leading-tight">
            Browse our specialized product lines
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="border border-gray-700 bg-black overflow-hidden flex flex-col hover:border-[#ff6100] transition-all duration-300"
            >
              <img src={item.img} alt="product" className="w-full h-64 object-cover p-4" />
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold mb-1 leading-snug">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
                <button
                  onClick={() => navigate('/inquiry')}
                  className="mt-6 text-sm flex items-center gap-2 group text-[#ff6100]"
                >
                  Inquiry now
                  <span className="transition-transform duration-200 group-hover:translate-x-4">
                    ──&gt;
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
