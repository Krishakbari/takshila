import React from 'react'
import logo from '../assets/logo.png';
import layer from "../assets/Layer.png";
import logoblack from '../assets/logoblack.png';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import { ArrowRight } from "lucide-react";
import OurProduct from '../components/OurProduct';
import img2 from '../assets/img2.jpg';
import ContactSupport from '../components/ContactSupport';


const categories = [
    {
        title: "Automotive Parts",
        desc: "Precision automotive components and assembly parts",
        img: cat1,
    },
    {
        title: "Industrial Tools",
        desc: "Professional-grade industrial tools and equipment",
        img: cat2,
    },
    {
        title: "CNC Components",
        desc: "High-precision CNC machined components",
        img: cat3,
    },
];

const Product = () => {
    return (
        <>
            <div className="relative bg-[#0F2D28] text-white h-[30vh] flex flex-col justify-center items-center overflow-hidden">
                {/* Watermark BG Image */}
                <img
                    src={layer}
                    alt="Background Layer"
                    className="absolute left-10    top-0 h-full opacity-40 z-0"
                />

                {/* Content */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <img src={logo} alt="Contact Icon" className="w-6 h-6 object-contain opacity-50" />
                    <p className="text-lg font-medium text-white/50">Our Products</p>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl ml-10 font-semibold text-white/50 mb-2">
                    Browse our specialized product lines
                </h2>
            </div>



            <div className="bg-white py-16 px-4 md:px-0">
                <div className="flex flex-col items-center mb-10 text-center">
                    <img src={logoblack} alt="Product Icon" className="h-5 mb-2" />
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#11332c]">
                        Browse our specialized product lines
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="relative h-[400px] group overflow-hidden  shadow-md"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 text-white">
                                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                <p className="text-sm text-white/80 mb-4">{item.desc}</p>
                                <div className="flex items-center gap-1 text-sm hover:underline cursor-pointer">
                                    Browse Category <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <OurProduct />
            <ContactSupport />

            <div className="max-w-[100%] mx-auto  mt-10  overflow-hidden h-auto md:h-[600px] flex flex-col md:flex-row">
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

        </>
    )
}

export default Product
