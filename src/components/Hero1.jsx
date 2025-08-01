import React, { useState, useEffect } from 'react'
import Lightning from '../hooks/Lightning'

const Hero2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Lightning Background Effect */}
      <Lightning
        hue={220}         // blue-ish lightning
        xOffset={0}
        speed={1}
        intensity={1}
        size={1}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content Layer */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 ">
        <div className={`text-center max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Advanced CNC
            </span>
            <br />
            <span className="text-white">
              Machinery Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Precision engineering plays a vital role in the automotive and aerospace industries, ensuring high-performance, safety, and reliability. From engine components to aerodynamic structures, every part is crafted with tight tolerances and advanced technology.
          </div>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-400/30">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
              <span className="text-cyan-100">Boosts Efficiency</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-teal-400/30">
              <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
              <span className="text-cyan-100">Reduces Failure Rates</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/30">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-cyan-100">Rigorous Standards</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 border border-cyan-400/50">
              Explore Solutions
            </button>
            <button className="px-8 py-4 bg-transparent text-cyan-400 font-semibold rounded-lg border-2 border-cyan-400/50 hover:bg-cyan-400/10 hover:border-cyan-400 transform hover:scale-105 transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Floating particles for extra visual appeal */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default Hero2;