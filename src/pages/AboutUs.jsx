import React, { useState } from "react";
import logo from '../assets/logo.png';
import logoblack from '../assets/logoblack.png';
import fimg from "../assets/fimg.jpg";
import card2 from "../assets/card2.jpg"
import img2 from '../assets/img2.jpg';
import person from '../assets/person.jpg';
import cer1 from '../assets/cer1.jpg';
import cer2 from '../assets/cer2.jpg';
import cer3 from '../assets/cer3.jpg';
import img1 from '../assets/img1.png';
import usa from '../assets/usa.png';
import ger from '../assets/grr.png';
import layer from "../assets/Layer.png"; // Watermark background logo
import ContactSupport from "../components/ContactSupport";

const values = ["Innovation", "Precision", "Integrity"];
const units = [
    {
        flag: usa,
        location: "Detroit, USA",
        established: "Established 2015",
        specialization: "CNC Machining & Automotive Parts",
        capacity: "5,000 units/month",
    },
    {
        flag: ger,
        location: "Stuttgart, Germany",
        established: "Established 2018",
        specialization: "Precision Engineering & Tools",
        capacity: "3,500 units/month",
    },
    {
        flag: usa,
        location: "Detroit, USA",
        established: "Established 2015",
        specialization: "CNC Machining & Automotive Parts",
        capacity: "5,000 units/month",
    },
];
const certificates = [
    {
        image: cer1,
        title: "ISO 9001:2015",
        subtitle: "Quality Management",
        validity: "Valid 2023",
    },
    {
        image: cer2,
        title: "CE Marking",
        subtitle: "European Conformity",
        validity: "Valid 2023",
    },
    {
        image: cer3,
        title: "ASME Certification",
        subtitle: "Mechanical Engineering",
        validity: "Valid 2026",
    },
];

const teamData = [
    {
        name: 'Krushant Vamja',
        title: 'Founder & CEO',
    },
    {
        name: 'Sahil Godhani',
        title: 'CEO of Campony',
    },
    {
        name: 'Shrutik Sojitra',
        title: 'Manager of Campony',
    },
];
const historyData = [
    {
        year: "2016",
        title: "Establishing the Foundation",
        desc: "Nomad Partners was founded with the vision of providing dynamic legal advocacy tailored to clients’ needs.",
    },
    {
        year: "2018",
        title: "Expansion into New Markets",
        desc: "Expanded operations across multiple cities, strengthening service capabilities.",
    },
    {
        year: "2020",
        title: "Tech Integration",
        desc: "Implemented advanced technology platforms to enhance service delivery.",
    },
    {
        year: "2023",
        title: "Sustainable Solutions",
        desc: "Launched sustainability-focused initiatives across product lines.",
    },
    {
        year: "2020",
        title: "Tech Integration",
        desc: "Implemented advanced technology platforms to enhance service delivery.",
    },
    {
        year: "2023",
        title: "Sustainable Solutions",
        desc: "Launched sustainability-focused initiatives across product lines.",
    },
];


const AboutUs = () => {
    const [active, setActive] = useState("Innovation");

    return (
        <>

            {/* Hero Section */}
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
                    <p className="text-lg font-medium text-white/50">About Us</p>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl ml-10 font-semibold text-white/50 mb-2">
                    About MechTrade International
                </h2>
            </div>

            {/* Engineering Excellence Section */}
            <section className="px-6 py-16 md:px-40 bg-white text-[#0F2D28]">
                <div className="grid md:grid-cols-[auto,1fr] gap-10 items-center">

                    {/* Left side - Fixed width like a card */}
                    <div className="flex flex-col gap-6 w-full">
                        <img
                            src={fimg}
                            alt="Engineering Visual 1"
                            className="rounded-2xl w-full h-[200px] object-cover"
                        />
                        <img
                            src={card2}
                            alt="Engineering Visual 2"
                            className="rounded-2xl w-full h-[300px] object-cover"
                        />
                    </div>

                    {/* Right side - Flexible text block */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <img src={logoblack} alt="Logo" className="h-4 w-4" />
                            <p className="text-sm">About Us</p>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
                            Engineering Excellence Since <br />
                            <span className="text-black">2010</span>
                        </h2>

                        <p className="text-gray-700 mb-4">
                            Founded by a team of mechanical engineers with over 50 years of combined experience,
                            MechTrade International has grown from a small precision machining shop to a global leader
                            in industrial machinery and custom fabrication.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Our engineering-first approach ensures that every product we manufacture meets the highest
                            standards of precision, durability, and performance. We combine traditional craftsmanship
                            with cutting-edge technology to deliver solutions that exceed expectations.
                        </p>

                        <div className="flex gap-10">
                            <div>
                                <p className="text-2xl font-bold">50+</p>
                                <p className="text-sm text-gray-600">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">200+</p>
                                <p className="text-sm text-gray-600">Engineers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-white bg-[#0F2D28] min-h-60 mb-10 md:px-20 flex gap-10 items-center sm:flex-row flex-col p-5'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4 items-center'>
                        <img src={logo} alt="" className='h-6 w-6' />
                        <p className='text-lg'>Our Vision</p>
                    </div>
                    <div>
                        <p className='text-white/70'>Our engineering-first approach ensures that every product we manufacture meets the highest standards of precision, durability, and performance. We combine traditional craftsmanship with cutting-edge technology to deliver solutions that exceed expectations.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4 items-center'>
                        <img src={logo} alt="" className='h-6 w-6' />
                        <p className='text-lg'>Our Mission</p>
                    </div>
                    <div>
                        <p className='text-white/70'>Our engineering-first approach ensures that every product we manufacture meets the highest standards of precision, durability, and performance. We combine traditional craftsmanship with cutting-edge technology to deliver solutions that exceed expectations.</p>
                    </div>
                </div>
            </div>


            <div className="px-4 md:px-20 py-10">
                {/* Header */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-2">
                        <img src={logoblack} alt="logo" className="h-5 w-5" />
                        <p className="text-lg font-semibold text-[#102B26] ">Company History</p>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#102B26] max-w-xl">
                        Innovating precision engineering since inception.
                    </h2>
                </div>

                {/* Timeline */}
                <div className="overflow-x-auto mt-8">
                    <div className="flex gap-0 min-w-[700px]">
                        {historyData.map((item, index) => (
                            <div key={index} className="flex flex-col min-w-[350px]">
                                <div className="flex items-center gap-0 mb-4 ">

                                    <img src={logoblack} alt="logo" className="h-4 w-4" />
                                    <div className="w-full h-px bg-black flex-1"></div>
                                </div>
                                <h3 className="text-lg font-semibold text-[#102B26] ">
                                    {item.year}: {item.title}
                                </h3>
                                <p className="text-sm text-[#102B26]/80 mt-1 mr-16">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            <div className="px-4 md:px-20 py-16 bg-white">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 sm:mx-10">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <img src={logoblack} alt="logo" className="h-5 w-5" />
                        <p className="text-[#102B26] font-medium">Our Teams</p>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-[#102B26]">
                        Meet our expert leadership & innovators
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {teamData.map((member, index) => (
                        <div key={index} className="relative">
                            <img
                                src={person}
                                alt={member.name}
                                className="w-full h-[400px] object-center "
                            />
                            <div className="absolute top-4 left-4 text-white">
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-sm">{member.title}</p>
                            </div>
                        </div>
                    ))}
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

            {/* Our Values  */}
            <section className="pt-10 px-4 text-center bg-white">
                {/* Header */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center gap-2">
                        <img src={logoblack} alt="logo" className="h-5 w-5" />
                        <span className="text-[#102B26] font-medium">Our values</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-[#102B26]">
                        Core values built on precision excellence.
                    </h2>
                </div>

                {/* Tab Selector */}
                <div className="mt-8 flex justify-center space-x-10">
                    {values.map((val) => (
                        <button
                            key={val}
                            onClick={() => setActive(val)}
                            className={`text-sm md:text-base font-medium ${active === val
                                ? "text-[#102B26] underline underline-offset-4"
                                : "text-gray-400"
                                }`}
                        >
                            {val}
                        </button>
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


            <section className="py-20 px-4 bg-white text-center">
                {/* Section Header */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center gap-2">
                        <img src={logoblack} alt="logo" className="h-5 w-5" />
                        <span className="text-[#102B26] font-medium">Certifications & Safety Standards</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-[#102B26]">
                        Committed to the highest quality and safety standards
                    </h2>
                </div>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="border rounded-lg shadow-sm hover:shadow-md transition p-6 bg-white"
                        >
                            <div className=" mb-4">
                                <img src={cert.image} alt={cert.title} className="mx-auto h-40 object-contain" />
                            </div>
                            <h3 className="text-lg font-semibold text-left text-black sm:ml-10 ml-0">{cert.title}</h3>
                            <p className="text-sm text-left text-gray-600 sm:ml-10 ml-0">{cert.subtitle}</p>
                            <p className="text-sm text-left text-green-600 mt-1 sm:ml-10 ml-0">{cert.validity}</p>
                        </div>
                    ))}
                </div>
            </section>



            <section className="py-10 px-4 bg-white text-center">
                {/* Header */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center gap-2">
                        <img src={logoblack} alt="logo" className="h-5 w-5" />
                        <span className="text-[#102B26] font-medium">Our Manufacturing Units</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-[#102B26]">
                        Global presence with local expertise
                    </h2>
                </div>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {units.map((unit, index) => (
                        <div
                            key={index}
                            className="border rounded-lg bg-white p-6 text-left shadow-sm hover:shadow-md transition"
                        >
                            <img src={unit.flag} alt={unit.location} className="h-16 w-16 rounded-full mb-4" />
                            <h3 className="text-lg font-semibold text-[#102B26]">{unit.location}</h3>
                            <p className="text-sm text-gray-600 mb-3">{unit.established}</p>

                            <p className="text-sm font-semibold text-[#102B26] mb-1">Specialization</p>
                            <p className="text-sm text-gray-700 mb-3">{unit.specialization}</p>

                            <p className="text-sm font-semibold text-[#102B26] mb-1">Capacity</p>
                            <p className="text-sm text-gray-700">{unit.capacity}</p>
                        </div>
                    ))}
                </div>
            </section>

            <ContactSupport/>
        </>
    );
};

export default AboutUs;
