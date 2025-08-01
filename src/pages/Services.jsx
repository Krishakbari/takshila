import React from 'react'
import logo from '../assets/logo.png';
import logoblack from '../assets/logoblack.png';
import layer from "../assets/Layer.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import crop from "../assets/crop.png";
import c1 from "../assets/c1.jpg";
import { MessageCircleQuestion } from "lucide-react";
import ContactSupport from '../components/ContactSupport';



const industries = [
    "Food & Beverages",
    "Textiles",
    "Agriculture",
    "Machinery",
    "Electronics",
    "Chemicals",
    "Healthcare",
];
const services = [
    {
        icon: s1,
        title: "Machinery Export Services",
        description: "Complete end-to-end machinery export solutions with global logistics support",
        features: [
            "Custom packaging & shipping",
            "International compliance",
            "Documentation support",
            "Installation assistance",
        ],
        pricing: "Starting from $5,000",
    },
    {
        icon: s2,
        title: "Custom Part Fabrication",
        description: "Precision manufacturing of custom parts to your exact specifications",
        features: [
            "CNC machining",
            "3D printing capabilities",
            "Material selection guidance",
            "Quality assurance testing",
        ],
        pricing: "Quote on request",
    },
    {
        icon: s3,
        title: "CAD Drawing Support",
        description: "Professional CAD design and technical drawing services",
        features: [
            "2D & 3D modeling",
            "Technical documentation",
            "Design optimization",
            "File format conversion",
        ],
        pricing: "Starting from $150/hour",
    },
    {
        icon: s4,
        title: "CAD Drawing Support",
        description: "Professional CAD design and technical drawing services",
        features: [
            "2D & 3D modeling",
            "Technical documentation",
            "Design optimization",
            "File format conversion",
        ],
        pricing: "Starting from $150/hour",
    },
    {
        icon: s5,
        title: "CAD Drawing Support",
        description: "Professional CAD design and technical drawing services",
        features: [
            "2D & 3D modeling",
            "Technical documentation",
            "Design optimization",
            "File format conversion",
        ],
        pricing: "Starting from $150/hour",
    },
];

const steps = [
    {
        title: "Initial Consultation",
        description: "We discuss your requirements and assess your needs",
    },
    {
        title: "Technical Analysis",
        description: "Our engineers analyze specifications and create solutions",
    },
    {
        title: "Proposal & Quote",
        description: "Detailed proposal with timeline and pricing",
    },
    {
        title: "Implementation",
        description: "Professional execution with quality control",
    },
    {
        title: "Delivery & Support",
        description: "Timely delivery and post-project assistance",
    },
    {
        title: "Implementation",
        description: "Professional execution with quality control",
    },
    {
        title: "Delivery & Support",
        description: "Timely delivery and post-project assistance",
    },
    {
        title: "Implementation",
        description: "Professional execution with quality control",
    },
    {
        title: "Delivery & Support",
        description: "Timely delivery and post-project assistance",
    },
];
const Services = () => {
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
                    <p className="text-lg font-medium text-white/50">Our Services</p>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl ml-10 font-semibold text-white/50 mb-2">
                    Reliable Precision Engineering Services.
                </h2>
            </div>



            <section className="bg-white py-20 px-4 text-center">
                {/* Header */}
                <div className="flex flex-col items-center space-y-2 mb-12">
                    <div className="flex items-center gap-2">
                        <img src={logoblack} alt="logo" className="h-5 w-5" />
                        <span className="text-[#102B26] font-medium">Services</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-[#102B26]">
                        High-performance precision engineering solutions delivered.
                    </h2>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white border  p-6 text-left shadow-sm hover:shadow-md transition">
                            <img src={service.icon} alt={service.title} className="h-16 w-16 mb-4" />
                            <h3 className="text-lg font-semibold text-[#102B26]">{service.title}</h3>
                            <p className="text-sm text-gray-700 mb-4">{service.description}</p>
                            <p className="font-semibold text-sm text-[#102B26] mb-1">Key Features:</p>
                            <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                                {service.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <p className="text-sm font-medium text-[#102B26]">{service.pricing}</p>
                        </div>
                    ))}
                </div>
            </section>


            <div className="px-4 md:px-20 py-16 bg-white">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-2">
                        <img src={logoblack} alt="logo" className="h-5 w-5" />
                        <p className="text-[#102B26] font-medium">Our Process</p>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#102B26]">
                        How we deliver exceptional results
                    </h2>
                </div>

                {/* Timeline */}
                <div className="overflow-x-auto">
                    <div className="flex gap-0 min-w-[800px] pb-2">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col min-w-[250px] relative">
                                {/* Horizontal line */}
                                <div className="absolute top-2 left-0 right-0 h-px bg-[#102B26]" />

                                {/* Icon and line */}
                                <div className="flex items-center  mb-4 relative z-10">
                                    <img src={logoblack} alt="logo" className="h-4 w-4" />
                                </div>

                                {/* Step content */}
                                <h3 className="text-[#102B26] text-base font-semibold">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-[#102B26]/80 mt-1 mr-10">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            <div className="px-6 py-10 bg-white overflow-hidden">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <img src={logoblack} alt="logo" className="w-5 h-5" />
                        <p className="text-sm text-[#102B26] font-medium">Our Process</p>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-[#102B26]">
                        How we deliver exceptional results
                    </h2>
                </div>

                {/* Auto-scrolling section */}
                <div className="bg-[#f9f9f9] py-8 px-2 md:px-6 rounded-xl overflow-hidden">
                    <div className="animate-slide flex gap-6 w-max">
                        {[...Array(3)].map((_, loopIndex) => (
                            <React.Fragment key={loopIndex}>
                                {industries.map((item, index) => (
                                    <div
                                        key={`${loopIndex}-${index}`}
                                        className="flex-shrink-0 flex items-center gap-4 w-[280px] md:w-[320px] bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                                    >
                                        <img src={crop} alt="icon" className="w-10 h-10 flex-shrink-0" />
                                        <div className="text-left">
                                            <p className="text-[#102B26] font-semibold text-base">{item}</p>
                                            <p className="text-xs text-gray-500">Short description goes here...</p>
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Auto-scroll animation */}
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


            <div className="bg-black text-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Side */}
                <div className="flex-1 max-w-2xl">
                    <div className="flex items-center gap-2 mb-4">
                        <MessageCircleQuestion className="text-white w-6 h-6" />
                        <h3 className="text-lg font-semibold">Why Choose Our Services?</h3>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-200">
                        At MechTrade International, we offer more than just engineering — we
                        deliver excellence backed by a team of over 200 certified experts
                        with deep industry knowledge. Our services adhere strictly to
                        international quality and safety standards, ensuring reliable and
                        compliant solutions across every project. With 24/7 technical support
                        and emergency assistance, we’re always available when you need us
                        most. Plus, our transparent, competitive pricing and flexible payment
                        options make high-quality engineering accessible without compromising
                        on value. Choose us for trusted expertise, global compliance, and
                        unwavering support.
                    </p>

                    {/* Placeholder Profile */}
                    <div className="flex items-center gap-4 mt-20">
                        <div className="w-12 h-12 bg-white rounded-full" />
                        <div>
                            <p className="font-semibold text-white">Markus Spencer</p>
                            <p className="text-sm text-gray-400">CEO &amp; Founder</p>
                        </div>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="flex-1">
                    <img
                        src={c1}
                        alt="Engineering concept"
                        className="w-full max-w-md mx-auto object-contain"
                    />
                </div>
            </div>

            <ContactSupport/>
        </>
    )
}

export default Services
