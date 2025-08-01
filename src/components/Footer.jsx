import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fimg from "../assets/fimg.jpg";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const Footer = () => {
    const navigate = useNavigate();

    // Navigation items with their routes
    const navigationItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Product", path: "/product" },
        { name: "Contact", path: "/contact" },
        { name: "Careers", path: "/careers" },
        { name: "Gallery", path: "/gallery" },
    ];

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-[#132E29] text-white px-6 py-4 mt-0">
            <div className="max-w-[1400px] mx-auto">
                {/* Top Section */}
                <div className="md:flex md:items-center md:justify-between">
                    {/* Left: Catalog + Navigation */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4 md:mb-0">Catalog</h1>
                        <div className="flex flex-wrap gap-2 text-sm items-center">
                            {navigationItems.map((item, i, arr) => (
                                <span key={i} className="opacity-90 flex items-center">
                                    <Link 
                                        to={item.path}
                                        className="hover:text-gray-300 transition-colors duration-200 cursor-pointer hover:underline"
                                        onClick={() => window.scrollTo(0, 0)} // Scroll to top on navigation
                                    >
                                        {item.name}
                                    </Link>
                                    {i !== arr.length - 1 && <span className="mx-2">/</span>}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="mt-8 md:mt-0 text-sm space-y-4">
                        <div>
                            <p className="font-semibold">Contact us</p>
                            <a 
                                href="tel:+918765487654" 
                                className="hover:text-gray-300 transition-colors duration-200"
                            >
                                ( +91 87654 87654 )
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold">Location</p>
                            <a 
                                // href="https://maps.google.com/?q=123+Industrial+Blvd,+Tech+City" 
                                // target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-gray-300 transition-colors duration-200"
                            >
                                Address: 123 Industrial Blvd, Tech City
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold">Email</p>
                            <a 
                                href="mailto:info@mechtrade.com"
                                className="hover:text-gray-300 transition-colors duration-200"
                            >
                                info@mechtrade.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Arrow Up Button */}
                <div className="mt-24 flex justify-between items-center">
                    <button 
                        onClick={scrollToTop}
                        className="w-10 h-10 border rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-all duration-300 group"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={18} className="group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                    <div className="text-center text-xs text-white opacity-70">
                        © 2025 Krushant Info. Design by Godhani Technology
                    </div>
                </div>

                {/* Image Bottom Card */}
                <div
                    className="mt-6 rounded-2xl overflow-hidden relative h-[200px] cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                    style={{
                        backgroundImage: `url(${fimg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    onClick={() => {
                        // You can navigate to a documentation page or external link
                        // navigate('/documentation'); // For internal route
                        // window.open('https://your-documentation-url.com', '_blank'); // For external link
                        console.log('Navigate to documentation');
                    }}
                >
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    
                    <div className="relative h-full p-6 flex items-center justify-between">
                        <div>
                            <p className="text-white text-sm mb-1 font-medium">Explore</p>
                            <p className="text-white text-sm font-light">Documentation</p>
                        </div>
                        <ArrowUpRight 
                            size={20} 
                            className="text-white h-10 w-10 hover:transform hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300" 
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;