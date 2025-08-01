import React, { useState } from 'react'
import logoblack from '../assets/logoblack.png';
import logo from '../assets/logo.png';
import layer from "../assets/Layer.png";
import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.png";
import rightcloud from "../assets/rightcloud.png"
import leftcloud from "../assets/leftcloud.png"
import arrowup from "../assets/uparrow.png"
import { MapPin } from "lucide-react";

const perks = [
    "Competitive salary and performance bonuses",
    "401(k) retirement plan with company matching",
    "Flexible work schedules and remote opportunities",
    "Competitive salary and performance bonuses",
    "401(k) retirement plan with company matching",
    "Flexible work schedules and remote opportunities",
];
const jobData = [
    {
        title: "Senior CNC Machining Engineer",
        description:
            "Lead CNC machining operations and optimize manufacturing processes for automotive components.",
        location: "Detroit, USA",
        salary: "$85,000 - $110,000",
        skills: ["CNC Programming", "CAD/CAM", "Quality Control", "Lean Manufacturing"],
    },
    {
        title: "Senior CNC Machining Engineer",
        description:
            "Lead CNC machining operations and optimize manufacturing processes for automotive components.",
        location: "Detroit, USA",
        salary: "$85,000 - $110,000",
        skills: ["CNC Programming", "CAD/CAM", "Quality Control", "Lean Manufacturing"],
    },
    {
        title: "Senior CNC Machining Engineer",
        description:
            "Lead CNC machining operations and optimize manufacturing processes for automotive components.",
        location: "Detroit, USA",
        salary: "$85,000 - $110,000",
        skills: ["CNC Programming", "CAD/CAM", "Quality Control", "Lean Manufacturing"],
    },
    {
        title: "Senior CNC Machining Engineer",
        description:
            "Lead CNC machining operations and optimize manufacturing processes for automotive components.",
        location: "Detroit, USA",
        salary: "$85,000 - $110,000",
        skills: ["CNC Programming", "CAD/CAM", "Quality Control", "Lean Manufacturing"],
    },
    {
        title: "Senior CNC Machining Engineer",
        description:
            "Lead CNC machining operations and optimize manufacturing processes for automotive components.",
        location: "Detroit, USA",
        salary: "$85,000 - $110,000",
        skills: ["CNC Programming", "CAD/CAM", "Quality Control", "Lean Manufacturing"],
    },
];
const Careers = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        location: "",
        message: "",
        resume: null,
        portfolio: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here (e.g., FormData upload to server)
        console.log(formData);
    };
    const data = [
        {
            icon: d1,
            title: "Expert Team",
            desc: "Work alongside 200+ certified engineers and industry experts",
        },
        {
            icon: d2,
            title: "Cutting-Edge Tech",
            desc: "Access to the latest industrial technology and equipment",
        },
        {
            icon: d3,
            title: "Global Opportunities",
            desc: "International assignments and career advancement opportunities",
        },
        {
            icon: d4,
            title: "Competitive Benefits",
            desc: "Comprehensive compensation and benefits package",
        },
    ];
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
                    <p className="text-lg font-medium text-white/50">Careers</p>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl ml-10 font-semibold text-white/50 mb-2">
                    Build your future with us.
                </h2>
            </div>


            <section className="py-16 bg-white text-[#133029] px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <img src={logoblack} alt="Why work with us" className="w-5 h-5" />
                        <span className="text-sm">Why Work With Us?</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                        Join a team that values innovation, excellence, <br className="hidden sm:block" />
                        and professional growth
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#f5f9f7] p-6 rounded-md text-center shadow-sm hover:shadow-md transition"
                        >
                            <img src={item.icon} alt={item.title} className="w-14 h-14 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>



            <section className="py-16 px-4 bg-white text-[#133029]">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-2 text-sm text-[#133029]">
                        <span className="font-medium">🧾</span>
                        <span className="font-medium">Current Openings</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold mt-2">
                        Engineering & Tech Roles
                    </h2>
                </div>

                {/* Job Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {jobData.map((job, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white"
                        >
                            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                            <p className="text-sm text-gray-700 mb-4">{job.description}</p>

                            <div className="flex flex-wrap text-sm gap-4 mb-3">
                                <span className="text-[#2F7060] font-medium">Engineering & Tech</span>
                                <span className="text-[#2F7060] font-medium">Full-time</span>
                            </div>

                            <div className="flex items-center text-sm text-gray-600 mb-4">
                                <MapPin size={16} className="mr-2 text-blue-800" />
                                <span className='text-blue-600'>{job.location}</span>
                                <span className="mx-2">•</span>
                                <span>{job.salary}</span>
                            </div>

                            <div className="mb-3">
                                <h4 className="font-medium mb-1">Required Skills:</h4>
                                <ul className="list-disc list-inside text-sm text-gray-700">
                                    {job.skills.map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                            </div>

                            <button className="mt-4 bg-[#133029] text-white px-5 py-2 rounded hover:bg-[#1a4035] transition">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>



            <section className="py-16 px-4 bg-white text-[#133029]">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-2 text-sm text-[#133029]">
                        <span className="font-medium">📝</span>
                        <span className="font-medium">Upload Resume with Portfolio</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold mt-2">
                        Don’t see the perfect role? Send us your resume and portfolio
                    </h2>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div>
                        <label className="block mb-1 font-medium">Full Name</label>
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full border rounded px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email Address</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full border rounded px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Phone Number</label>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full border rounded px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Current Position</label>
                        <input
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            placeholder="Current Position"
                            className="w-full border rounded px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Years of Experience</label>
                        <input
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            placeholder="Years of Experience"
                            className="w-full border rounded px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Preferred Location</label>
                        <input
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Preferred Location"
                            className="w-full border rounded px-4 py-2"
                        />
                    </div>

                    {/* Resume Upload */}
                    <div className="col-span-2">
                        <label className="block mb-1 font-medium">Upload Resume</label>
                        <div className="border border-dashed rounded p-6 flex justify-center items-center cursor-pointer">
                            <label className="cursor-pointer w-full text-center">
                                <input
                                    type="file"
                                    name="resume"
                                    className="hidden"
                                    onChange={handleChange}
                                />
                                <img src={arrowup} alt="Upload" className="mx-auto h-10 opacity-60" />
                                {formData.resume && (
                                    <p className="mt-2 text-sm text-[#2f7060] font-medium">
                                        {formData.resume.name}
                                    </p>
                                )}
                            </label>
                        </div>
                    </div>

                    {/* Portfolio Upload */}
                    <div className="col-span-2">
                        <label className="block mb-1 font-medium">Upload Portfolio (Optional)</label>
                        <div className="border border-dashed rounded p-6 flex justify-center items-center cursor-pointer">
                            <label className="cursor-pointer w-full text-center">
                                <input
                                    type="file"
                                    name="portfolio"
                                    className="hidden"
                                    onChange={handleChange}
                                />
                                <img src={arrowup} alt="Upload" className="mx-auto h-10 opacity-60" />
                                {formData.portfolio && (
                                    <p className="mt-2 text-sm text-[#2f7060] font-medium">
                                        {formData.portfolio.name}
                                    </p>
                                )}
                            </label>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="col-span-2">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Please describe your requirement in details"
                            rows={5}
                            className="w-full border rounded px-4 py-3"
                        />
                    </div>

                    <div className="col-span-2 flex justify-start">
                        <button
                            type="submit"
                            className="bg-[#133029] text-white px-6 py-2 rounded hover:bg-[#1a4035] transition"
                        >
                            Send message
                        </button>
                    </div>
                </form>
            </section>




            <div className="relative bg-[#f9f9f9] py-12 overflow-hidden rounded-xl">
                {/* Clouds */}
                <img
                    src={leftcloud}
                    alt="left cloud"
                    className="absolute left-0 sm:-bottom-1 bottom-3     transform -translate-y-1/2 z-10 w-32 md:w-48"
                />
                <img
                    src={rightcloud}
                    alt="right cloud"
                    className="absolute right-0 sm:-bottom-1 bottom-3 transform -translate-y-1/2 z-10 w-32 md:w-48"
                />

                {/* Heading */}
                <div className="text-center relative z-20 mb-8">
                    <img src={logoblack} alt="logo" className="mx-auto mb-2 w-5" />
                    <h2 className="text-[#102B26] font-semibold text-sm">Benefits & Perks</h2>
                    <p className="text-[#102B26] text-lg font-semibold leading-snug">
                        We invest in our people's success and well-being
                    </p>
                </div>

                {/* Slider */}
                <div className="overflow-hidden">
                    <div className="animate-slide flex gap-6 w-max">
                        {[...Array(3)].map((_, loopIndex) => (
                            <React.Fragment key={loopIndex}>
                                {perks.map((perk, index) => (
                                    <div
                                        key={`${loopIndex}-${index}`}
                                        className="flex-shrink-0 bg-white px-6 md:py-4 py-2 border border-gray-300 rounded-xl text-[#102B26] font-medium text-base min-w-[280px] shadow-sm"
                                    >
                                        <span className="text-lg mr-2 text-[#102B26]">•</span> {perk}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Animation styles */}
                <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-slide {
          animation: slide 25s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-slide {
            animation-duration: 40s;
          }
        }
      `}</style>
            </div>
        </>
    )
}

export default Careers
