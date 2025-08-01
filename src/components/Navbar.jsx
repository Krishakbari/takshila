import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import logo from '../assets/logo.png';
import logoblack from '../assets/logoblack.png';
import logo1 from "../assets/l1.png"
import logo2 from "../assets/l2.png"
import logo3 from "../assets/l3.png"
import logo4 from "../assets/l4.png"
import card1 from "../assets/card1.jpg"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"
import rightimage from "../assets/rightimage.jpg"
import { ArrowUpRight, ArrowUp } from "lucide-react";
import fimg from "../assets/fimg.jpg";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";

const services = [
    {
        id: 1,
        title: "Machinery Export Services",
        desc: "Complete end-to-end machinery export solutions with global logistics support",
        img: card1,
    },
    {
        id: 2,
        title: "Custom Part Fabrication",
        desc: "Precision manufacturing of custom parts to your exact specifications",
        img: card2,
    },
    {
        id: 3,
        title: "CAD Drawing Support",
        desc: "Professional CAD design and technical drawing services",
        img: card3,
    },
];

const products = [
    {
        id: 1,
        img: c1,
        title: "Browse our specialized product lines",
        desc: "Precision automotive components and assembly parts",
    },
    {
        id: 2,
        img: c2,
        title: "Browse our specialized product lines",
        desc: "Precision automotive components and assembly parts",
    },
    {
        id: 3,
        img: c3,
        title: "Browse our specialized product lines",
        desc: "Precision automotive components and assembly parts",
    },
    {
        id: 4,
        img: c4,
        title: "Browse our specialized product lines",
        desc: "Precision automotive components and assembly parts",
    },
    {
        id: 5,
        img: c5,
        title: "Browse our specialized product lines",
        desc: "Precision automotive components and assembly parts",
    },
];

const Navbar = () => {
    return (
        <>
            <div className="w-full min-h-screen flex flex-col">
                {/* Navbar - split background */}
                <div className="w-full h-14 flex items-center border-b border-white-50  text-white text-sm">
                    {/* Left half (green background) */}
                    <div className="flex items-center gap-10 px-6 w-1/2 bg-[#11332c] h-full justify-between">
                        <div className="flex items-center gap-2 pl-4">
                            <img src={logo} alt="Logo" className="h-6" />
                            <span className="font-bold text-white">K R U S H A N T</span>
                        </div>
                        <nav className="hidden md:flex gap-6">
                            <a href="#" className="hover:text-white font-medium text-white/80">Home</a>
                            <a href="#" className="hover:text-white text-white/60">About Us</a>
                            <a href="#" className="hover:text-white text-white/60">Services</a>
                        </nav>
                    </div>

                    {/* Right half (black background) */}
                    <div className="flex justify-between items-center w-1/2 px-6 bg-black h-full">
                        <nav className="hidden md:flex gap-6">
                            <a href="#" className="hover:text-white text-white/60">Product</a>
                            <a href="#" className="hover:text-white text-white/60">Contact</a>
                            <a href="#" className="hover:text-white text-white/60">Careers</a>
                        </nav>
                        <button className="bg-white text-black px-4 py-1 rounded text-sm">
                            Live Chat
                        </button>
                    </div>
                </div>
                {/* Hero content */}
                <div className="flex flex-col md:flex-row flex-1">
                    {/* Left Side */}
                    <div className="md:w-1/2 bg-[#11332c] text-white flex flex-col justify-center  px-8 py-12 space-y-6 relative overflow-hidden">
                        {/* Optional design overlay can go here */}
                        <p className="text-sm flex items-center gap-2">
                            <img src={logo} alt="logo" className="h-4" />
                            Precision Parts for Reliable Automotive and Aerospace Performance.
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Advanced CNC<br />Machinery Solutions
                        </h1>
                        <p className="text-sm md:text-base max-w-lg leading-relaxed">
                            Precision engineering plays a vital role in the automotive and aerospace industries, ensuring high-performance, safety, and reliability. From engine components to aerodynamic structures, every part is crafted with tight tolerances and advanced technology. This level of accuracy boosts efficiency, reduces failure rates, and meets the rigorous standards required in these demanding sectors.
                        </p>
                        <button className="bg-white text-black px-4 py-2 rounded text-sm w-fit">
                            Schedule Live chat
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="md:w-1/2 relative h-[400px] md:h-auto">
                        <img
                            src={rightimage}
                            alt="CNC Machine"
                            className="w-full h-full object-cover"
                        />
                        {/* Floating Labels */}
                        <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                            {["Durable Components", "Advanced Engineering", "Precision Manufacturing"].map((label, i) => (
                                <span
                                    key={i}
                                    className="bg-white/10 text-white text-xs px-3 py-1 rounded-sm w-fit"
                                >
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-full mx-20 flex md:flex-row flex-col my-20 gap-10'>
                <div className='w-1/2'>
                    <div className='flex gap-4 items-center mb-4'>
                        <img src={logoblack} alt="" className='w-6 h-6' />
                        <p className=''> About Us</p>
                    </div>
                    <div className='text-xl'>
                        Precision CNC solutions for automotive and aerospace industry performance.
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-4'>
                        <p className='text-sm'>Precision engineering plays a vital role in the automotive and aerospace industries, ensuring high-performance, safety, and reliability. From engine components to aerodynamic structures, every part is crafted with tight tolerances and advanced technology. This level of accuracy boosts efficiency, reduces failure rates, and meets the rigorous standards required in these demanding sectors.</p>
                        <button className='bg-[#11332c] px-4 w-fit text-white'>
                            About Us
                        </button>
                 </div>
            </div>


            <section className="bg-black text-white px-10 py-16">
                <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Left Section */}
                    <div className="flex flex-col justify-start mt-8">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={logo} alt="logo" className="w-6 h-6" />
                            <p className="text-white text-sm">Our Product</p>
                        </div>
                        <h2 className="text-3xl font-semibold leading-tight">
                            Browse our specialized <br /> product lines
                        </h2>
                    </div>

                    {/* Product Cards */}
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-700  overflow-hidden flex flex-col"
                        >
                            <img src={item.img} alt="product" className="w-full h-64 object-cover p-4" />
                            <div className="p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="text-lg font-semibold mb-1 leading-snug">{item.title}</h3>
                                    <p className="text-sm text-white/70">{item.desc}</p>
                                </div>
                                <button className="mt-6 text-sm flex items-center gap-2 group">
                                    View Details
                                    <span className="transition-transform duration-200 group-hover:translate-x-4">
                                        ──&gt;
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>





            <div className="max-w-[95%] h-[500px] md:h-[600px] rounded-xl m-4 md:m-10 overflow-hidden relative">
                {/* Background image */}
                <div
                    className="absolute inset-0 h-full w-full  bg-center"
                    style={{ backgroundImage: `url(${img1})` }}
                ></div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content overlay */}
                <div className="relative h-full flex items-end px-4 md:px-10 pb-6 md:pb-10 text-white">
                    <div className="max-w-full md:max-w-2xl">
                        <h2 className="text-2xl md:text-4xl font-bold mb-2 leading-snug">
                            Driving Innovation for Industrial Excellence
                        </h2>
                        <p className="text-sm md:text-base mb-4 leading-relaxed">
                            We continuously push the boundaries of engineering with advanced technology and bold ideas. Our commitment to innovation fuels smarter, faster, and more sustainable solutions.
                        </p>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            <span className="bg-[#1e3c34] px-4 py-2 rounded-md text-sm md:text-base">Creativity</span>
                            <span className="bg-[#1e3c34] px-4 py-2 rounded-md text-sm md:text-base">Technology</span>
                            <span className="bg-[#1e3c34] px-4 py-2 rounded-md text-sm md:text-base">Progress</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[100%] mx-auto  my-10  overflow-hidden h-auto md:h-[600px] flex flex-col md:flex-row">
                {/* Left image */}
                <div className="w-full md:w-1/2 h-[300px] md:h-full">
                    <img src={img2} alt="Industrial Scene" className="w-full h-full object-center" />
                </div>

                {/* Right content - smaller and vertically centered */}
                <div className="w-full md:w-1/2 bg-black text-white px-10 flex items-center h-full">
                    <div className="max-w-full">
                        {/* Icon and Heading */}
                        <div className="flex items-center gap-3 mb-4">
                            <img src={logo} alt="icon" className="w-6 h-6" />
                            <h2 className="text-xl md:text-2xl font-semibold">Why choose us</h2>
                        </div>

                        {/* Quoted Text */}
                        <p className="text-sm md:text-base leading-relaxed mb-6">
                            “ MechTrade International stands out as a global leader in industrial engineering, driven by over 50 years of combined mechanical expertise and a steadfast commitment to quality...
                            “ MechTrade International stands out as a global leader in industrial engineering, driven by over 50 years of combined mechanical expertise and a steadfast commitment to quality...
                            “ MechTrade International stands out as a global leader in industrial engineering, driven by over 50 years of combined mechanical expertise and a steadfast commitment to quality...
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                            <div>
                                <h4 className="font-semibold">Markus Spencer</h4>
                                <p className="text-sm text-gray-400">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center'>
                Success Stories
            </div>
            <div className='text-center text-xl font-semibold mt-4'>
                Real results from our engineering solutions
            </div>

            <div className='max-w-[95%] h-[500px] md:h-[600px] rounded-xl m-4 md:m-10 overflow-hidden relative'>
                <div
                    className="absolute inset-0 h-full w-full bg-cover  bg-center"
                    style={{ backgroundImage: `url(${img3})` }}
                ></div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="relative h-full flex items-end px-4 md:px-10 pb-6 md:pb-10 text-white">
                    <div className="max-w-full md:max-w-2xl">
                        <div className='text-xl sm:text-2xl font-bold mb-2'>
                            Automotive Assembly Line Upgrade
                        </div>
                        <div className='text-sm'>
                            Major Auto Manufacturer
                        </div>
                        <div className=' mt-6 bg-[#1e3c34] inline-block px-4 py-1 rounded-md'>
                            View Case Study
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#e0f5ed] py-16 my-20">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
                    {/* 1st Item */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="h-20 w-20 md:h-28 md:w-28 bg-[#11332c] rounded-full flex items-center justify-center">
                            <img src={logo1} alt="" className="h-8 w-8 md:h-12 md:w-12 object-contain" />
                        </div>
                        <div className="text-center">
                            <p className="text-base md:text-xl font-semibold">50,000+</p>
                            <p className="text-xs md:text-sm">Tons Exported</p>
                        </div>
                    </div>

                    {/* 2nd Item */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="h-20 w-20 md:h-28 md:w-28 bg-[#11332c] rounded-full flex items-center justify-center">
                            <img src={logo2} alt="" className="h-8 w-8 md:h-12 md:w-12 object-contain" />
                        </div>
                        <div className="text-center">
                            <p className="text-base md:text-xl font-semibold">50+</p>
                            <p className="text-xs md:text-sm">Countries Served</p>
                        </div>
                    </div>

                    {/* 3rd Item */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="h-20 w-20 md:h-28 md:w-28 bg-[#11332c] rounded-full flex items-center justify-center">
                            <img src={logo3} alt="" className="h-8 w-8 md:h-12 md:w-12 object-contain" />
                        </div>
                        <div className="text-center">
                            <p className="text-base md:text-xl font-semibold">1,200+</p>
                            <p className="text-xs md:text-sm">Happy Clients</p>
                        </div>
                    </div>

                    {/* 4th Item */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="h-20 w-20 md:h-28 md:w-28 bg-[#11332c] rounded-full flex items-center justify-center">
                            <img src={logo4} alt="" className="h-8 w-8 md:h-12 md:w-12 object-contain" />
                        </div>
                        <div className="text-center">
                            <p className="text-base md:text-xl font-semibold">25+</p>
                            <p className="text-xs md:text-sm">Certifications</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="relative h-[500px] group overflow-hidden"
                        style={{
                            backgroundImage: `url(${item.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-200" />
                        <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white/80">
                            <div>
                                <p className="text-sm mb-1">{item.id}</p>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                            <button className="bg-[#0d2f24] hover:bg-[#0b261e] text-white text-sm px-4 py-2 rounded w-fit">
                                Learn more
                            </button>
                        </div>
                    </div>
                ))}
            </div>



            <footer className="bg-[#132E29] text-white px-6 py-4 mt-60">
                <div className="max-w-[1400px] mx-auto">
                    {/* Top Section */}
                    <div className="md:flex md:items-center md:justify-between">
                        {/* Left: Catalog + Navigation */}
                        <div>
                            <h1 className="text-4xl font-bold mb-4 md:mb-0">Catalog</h1>
                            <div className="flex flex-wrap gap-2 text-sm items-center">
                                {[
                                    "Home",
                                    "About",
                                    "Services",
                                    "Product",
                                    "Contact",
                                    "Careers",
                                    "Gallery",
                                ].map((item, i, arr) => (
                                    <span key={i} className="opacity-90 flex items-center">
                                        {item}
                                        {i !== arr.length - 1 && <span className="mx-2">/</span>}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right: Contact Info */}
                        <div className="mt-8 md:mt-0 text-sm space-y-4">
                            <div>
                                <p className="font-semibold">Contact us</p>
                                <p>( +91 87654 87654 )</p>
                            </div>
                            <div>
                                <p className="font-semibold">Location</p>
                                <p>Address: 123 Industrial Blvd, Tech City</p>
                            </div>
                            <div>
                                <p className="font-semibold">Email</p>
                                <p>info@mechtrade.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Arrow Up Button */}
                    <div className="mt-24 flex justify-between items-center ">
                        <button className="w-10 h-10 border rounded-full flex items-center justify-center text-white">
                            <ArrowUp size={18} />
                        </button>
                        <div className="text-center text-xs text-white  opacity-70">
                            © 2025 Krushant Info. Design by Godhani Technology
                        </div>
                    </div>

                    {/* Image Bottom Card */}
                    <div
                        className="mt-6 rounded-2xl overflow-hidden relative h-[200px]"
                        style={{
                            backgroundImage: `url(${fimg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="h-full p-6 flex items-center justify-between">
                            <div>
                                <p className="text-white text-sm mb-1">Explore</p>
                                <p className="text-white text-sm font-light">Documentation</p>
                            </div>
                            <ArrowUpRight size={20} className="text-white h-10 w-10" />
                        </div>
                    </div>



                </div>
            </footer>
        </>
    );
};

export default Navbar;
