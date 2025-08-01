import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbarr = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Original Desktop Navbar (unchanged) */}
      <div className="w-full h-14 items-center border-b border-white-50 text-white text-sm hidden md:flex">
        {/* Left half */}
        <div className="flex items-center gap-10 px-6 w-1/2 bg-[#11332c] h-full justify-between">
          <div className="flex items-center gap-2 pl-4">
            <img src={logo} alt="Logo" className="h-6" />
            <span className="font-bold text-white">K R U S H A N T</span>
          </div>
          <nav className="flex gap-6">
            <Link to="/" className="hover:text-white font-medium text-white/80">Home</Link>
            <Link to="/about" className="hover:text-white text-white/60">About Us</Link>
            <Link to="/services" className="hover:text-white text-white/60">Services</Link>
            <Link to="/inquiry" className="hover:text-white text-white/60">Inquiry</Link>
          </nav>
        </div>

        {/* Right half */}
        <div
          className={`flex justify-between items-center w-1/2 px-6 h-full ${
            isHome ? 'bg-black' : 'bg-[#11332c]'
          }`}
        >
          <nav className="flex gap-6">
            <Link to="/product" className="hover:text-white text-white/60">Product</Link>
            <Link to="/contact" className="hover:text-white text-white/60">Contact</Link>
            <Link to="/careers" className="hover:text-white text-white/60">Careers</Link>
            <Link to="/documentation" className="hover:text-white text-white/60">Documentation</Link>
          </nav>
          <button className="bg-white text-black px-4 py-1 rounded text-sm">
            Live Chat
          </button>
        </div>
      </div>

      {/* Mobile Navbar (only on small screens) */}
      <div className="w-full md:hidden bg-[#11332c] text-white border-b border-white/20">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-6" />
            <span className="font-bold">K R U S H A N T</span>
          </div>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="px-4 pb-4 flex flex-col gap-3 bg-[#0d2924]">
            <Link to="/" onClick={toggleMenu} className="text-white/80">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="text-white/60">About Us</Link>
            <Link to="/services" onClick={toggleMenu} className="text-white/60">Services</Link>
            <Link to="/inquiry" onClick={toggleMenu} className="text-white/60">Inquiry</Link>
            <Link to="/product" onClick={toggleMenu} className="text-white/60">Product</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-white/60">Contact</Link>
            <Link to="/careers" onClick={toggleMenu} className="text-white/60">Careers</Link>
            <Link to="/documentation" onClick={toggleMenu} className="text-white/60">Documentation</Link>
            <button className="bg-white text-black px-4 py-2 rounded text-sm w-fit">Live Chat</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbarr;
