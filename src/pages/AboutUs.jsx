import React from "react";
import fimg from "../assets/fimg.png";
import card2 from "../assets/card2.jpg"
import v1 from "../assets/v1.svg"
import v2 from "../assets/v2.svg"
import v3 from "../assets/v3.svg"
import v4 from "../assets/v4.svg"
import v5 from "../assets/v5.svg"
import v6 from "../assets/v6.svg"
import bgImage from "../assets/background.png"
import Whyus from "../components/Whyus";
import LogoSection from "../components/LogoSection";


const AboutUs = () => {

    const values = [
        {
            img: v1,
            title: "Technological Excellence",
            desc: "Embracing cutting-edge technology and continuous improvement in our processes.",
        },
        {
            img: v2,
            title: "Sustainability",
            desc: "Committed to environmentally responsible manufacturing practices and green innovation.",
        },
        {
            img: v3,
            title: "Reliability",
            desc: "Consistent quality and on-time delivery you can depend on every time.",
        },
        {
            img: v4,
            title: "Innovation",
            desc: "Constantly evolving to meet changing industry demands and challenges with creativity.",
        },
        {
            img: v5,
            title: "Integrity",
            desc: "Operating with transparency, honesty, and fairness in all our relationships.",
        },
        {
            img: v6,
            title: "Customer Focus",
            desc: "Building long-term trust through quality service and responsive communication.",
        },
    ];
    return (
        <>

            {/* Hero Section */}
            <section
                className="relative w-full h-[40vh] sm:h-[30vh] md:h-[40vh] flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay (darken background) */}
                <div className="absolute inset-0 bg-black/50 z-0"></div>

                {/* Text Content */}
                <div className="relative z-10 px-4 sm:px-6">
                    <p className="text-sm sm:text-base md:text-lg font-light mb-2">
                        About Us
                    </p>
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3">
                        About Takshila Industries
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Leading the future of cast iron manufacturing with precision, quality,
                        and innovation.
                    </p>
                </div>
            </section>

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
                            <p className="text-2xl font-semibold text-[#ff6100]">Our Story</p>
                        </div>

                        <h2 className="text-2xl md:text-2xl font-semibold leading-snug mb-4">
                            A journey of innovation which began in
                            <span className="text-black/50"> 2023</span>
                        </h2>

                        <p className="text-gray-700 mb-4">
                            Founded in 2023 at Shapar (Veraval), Rajkot, we are a modern steel casting foundry delivering high-performance castings and machined components for global industries.

                            With advanced CO₂ molding technology, a 13,500 sq. ft. facility, and a capacity of 500 MT per year, we produce castings in carbon steel, stainless steel, duplex, super duplex, and special alloy castings — built to perform under the toughest conditions.

                        </p>
                        <p className="text-gray-700 mb-6">
                            Driven by innovation and guided by quality, we ensure every casting reflects accuracy, strength, and durability. Our team of skilled professionals, combined with state-of-the-art infrastructure, ensures that every casting meets the highest standards of dimensional accuracy, mechanical strength, and metallurgical consistency.

                        </p>
                        <p className="text-gray-700 mb-6">
                            Certified with ISO 9001:2015, Takshila Industries stands for engineering excellence, reliable performance, and long-term partnerships.

                        </p>
                        <p className="text-gray-700 mb-6">
                            We employ modern inspection techniques including spectrometer analysis, mechanical testing, dimensional inspection, and non-destructive testing (DPT / MPI / RT / UT) to ensure complete customer confidence in every product.
                        </p>


                    </div>
                </div>
            </section>

            <div className='text-white bg-[#6d2900] min-h-60 mb-10 md:px-20 flex gap-10 items-center sm:flex-row flex-col p-5'>
                <div className='flex flex-col gap-4 pl-4'>
                    <div className='flex gap-4 items-center'>
                        <p className='text-lg'>Our Vision</p>
                    </div>
                    <div>
                        <p className='text-white/70'>

                            Our vision is to establish Takshila Industries as a globally trusted name in precision steel casting and machining, recognized for innovation, quality excellence, and customer-centric solutions.

                            We aim to build long-term partnerships by becoming the preferred casting partner for industries across pumps, valves, oil & gas, agriculture and engineering sectors, while contributing to a sustainable and progressive manufacturing ecosystem. </p>
                        <p className='text-white/70 mt-4'>Our vision is to make Takshila Industries a recognized and respected global foundry, known for precision, performance, and partnership.

                            We aspire to be the preferred supplier of engineered castings for the pump, valve, oil & gas, and general engineering industries, delivering solutions that drive progress and reliability worldwide.

                            Through continuous innovation, integrity, and excellence, we envision a future where Takshila Industries stands as a symbol of trust, technology, and transformation in the casting industry. </p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4 items-center'>
                        <p className='text-lg'>Our Mission</p>
                    </div>
                    <div>
                        <p className='text-white/70'>At Takshila Industries, our mission is to deliver high-quality, precision-engineered steel castings that exceed customer expectations in performance, reliability, and value. We are committed to continuous improvement, technological advancement, and sustainable manufacturing practices — ensuring every casting reflects our dedication to durability, accuracy, and trust.
                        </p>
                        <p className='text-white/70 mt-4'>At Takshila Industries, our mission is to craft excellence in every casting.

                            We strive to deliver superior-quality steel castings and machined components through innovation, precision, and commitment.

                            By combining advanced CO₂ molding technology, skilled craftsmanship, and a strong focus on customer satisfaction, we aim to build castings that embody strength, reliability, and performance that lasts.

                            Our goal is simple — to create value for our customers, empower our people, and contribute to a sustainable industrial future.
                        </p>
                    </div>
                </div>
            </div>


            <section className="py-8 bg-white text-center px-2">
                {/* Section Header */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-3">
                    Our Core Values
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-10 max-w-2xl mx-auto">
                    The principles that guide our operations and define our commitment to excellence.
                </p>

                {/* Values Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 max-w-7xl mx-auto">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                        >
                            <div className="bg-[#6B2E00] w-20 h-20 flex items-center justify-center rounded-full mb-4 mt-4">
                                <img src={item.img} alt={item.title} className="w-12 h-12" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#c66739] mb-2">{item.title}</h3>
                            <p className="text-sm text-[#c66739] max-w-xs">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            <LogoSection />
            <Whyus />

        </>
    );
};

export default AboutUs;
