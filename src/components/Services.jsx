import React from 'react'
import card1 from "../assets/card1.jpg"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"
import logo from '../assets/logoblack.png';



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
const Services = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center md:my-14 my-8 md:px-20 px-6'>
                {/* Left side: Icon + Label */}
                <div className='flex items-center gap-2 mb-4 md:mb-0'>
                    <img src={logo} alt="logo" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                    <p className='text-sm md:text-base font-medium text-[#0d2f24]'>Our Services</p>
                </div>

                {/* Right side: Heading */}
                <div className='text-[#0d2f24] text-lg md:text-2xl font-semibold max-w-2xl text-left '>
                    Precision CNC solutions for automotive and aerospace industry performance.
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
        </>
    )
}

export default Services
