import React from 'react'
import bgImage from "../assets/background.png"
import grey from "../assets/o1.jpg"
import ductile from "../assets/o2.jpg"
import precision from "../assets/o4.jpg"
import custom from "../assets/o3.jpg"
import p1 from "../assets/p1.svg"
import p2 from "../assets/p2.svg"
import p3 from "../assets/p3.svg"
const Service = () => {
    const services = [
        {
            title: 'Grey Iron Casting',
            description: 'High-quality grey iron castings with excellent machinability and wear resistance for various industries.',
            keyFeatures: ['Excellent machinability', 'Good wear resistance', 'Cost-effective solution'],
            applications: ['Machine bases', 'Machine tools', 'Pipe fittings', 'Pump housings'],
            image: grey,
        },
        {
            title: 'Ductile Iron Casting',
            description: 'Ductile iron castings offering superior strength and impact resistance for demanding applications.',
            keyFeatures: ['High tensile strength', 'Good ductility', 'Corrosion resistance'],
            applications: ['Valve bodies', 'Pipe fittings', 'Agricultural parts'],
            image: ductile,
        },
        {
            title: 'Machined Cast Components',
            description: 'Precision CNC machining services with tight tolerances and superior surface finish.',
            keyFeatures: ['Tight tolerances (±0.05mm)', 'Superior surface finish', 'Quality inspection'],
            applications: ['Precision components', 'Custom parts', 'Production runs'],
            image: precision,
        },
        {
            title: 'Custom Engineering',
            description: 'Tailored engineering solutions designed to meet your specific requirements and applications.',
            keyFeatures: ['Design consultation', 'Material selection', 'Technical support'],
            applications: ['Custom designs', 'Material optimization', 'Testing solutions'],
            image: custom,
        },
    ];
    const values = [
        {
            img: p1,
            title: "Technological Excellence",
            desc: "Embracing cutting-edge technology and continuous improvement in our processes.",
        },
        {
            img: p2,
            title: "Sustainability",
            desc: "Committed to environmentally responsible manufacturing practices and green innovation.",
        },
        {
            img: p3,
            title: "Reliability",
            desc: "Consistent quality and on-time delivery you can depend on every time.",
        },
    ]
    return (
        <>
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
                        Our Services
                    </p>
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3">
                        Which Services Takshila Provides
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Comprehensive casting and machining solutions for diverse industrial applications

                    </p>
                </div>
            </section>

            <section className="bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* <h2 className="text-3xl font-bold text-orange-700 text-center mb-8">Our Services</h2> */}
                    <div className="space-y-8">
                        {services.map((service, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6`}>
                                <div className="w-full md:w-1/2">
                                    <img src={service.image} alt={service.title} className="w-full h-94  object-cover rounded-lg" />
                                </div>
                                <div className=" w-full md:w-1/2 bg-white rounded-lg">
                                    <h3 className="text-xl font-bold text-[#C66739] mb-2">{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <div className="flex lg:space-x-20 space-x-3">
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-800">Key Features</h4>
                                            <ul className="list-disc text-sm ml-4 text-gray-600">
                                                {service.keyFeatures.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold ml-2 text-gray-800">Applications</h4>
                                            <ul className="list-disc text-sm ml-6 text-gray-600">
                                                {service.applications.map((app, i) => (
                                                    <li key={i}>{app}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-10 bg-white text-center px-2">
                {/* Section Header */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-3">
                    Manufacturing Processes
                </h2>
                <p className="text-sm sm:text-base text-gray-700 sm:mb-10 mb-4 max-w-2xl mx-auto">
                    Advanced casting technologies optimized for different applications
                    and requirements.                </p>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10 max-w-7xl mx-auto">
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
        </>
    )
}

export default Service
