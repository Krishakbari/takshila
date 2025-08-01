import React from 'react'
import logo from '../assets/logo.png';
import rightimage from "../assets/rightimage.jpg"
import 'animate.css';
import TextType from '../hooks/TextType';

const Hero = () => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <div className="flex flex-col md:flex-row flex-1">
                {/* Left Side */}
                <div className="md:w-1/2 bg-[#11332c] text-white flex flex-col justify-center px-4 md:px-8 py-4 md:py-12 space-y-6 relative overflow-hidden">
                    {/* Optional design overlay can go here */}
                    <p className="text-sm flex items-center gap-2">
                        <img src={logo} alt="logo" className="h-4" />
                        {/* <span className=" animate__animated animate__zoomInDown"> */}

                        <span className="text-type-animation">
                            <TextType
                                text={[
                                    "Precision Parts for Reliable Automotive and Aerospace Performance."
                                ]}
                                typingSpeed={60}
                                pauseDuration={2000}
                                showCursor={true}
                                cursorCharacter="|"
                            />
                        </span>

                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-flicker-in-glow">
                        Advanced CNC<br />Machinery Solutions
                    </h1>
                    <p className="text-sm md:text-base max-w-lg leading-relaxed reveal-text">
                        {/* <p className="text-sm md:text-base max-w-lg leading-relaxed typing-line"> */}
                        Precision engineering plays a vital role in the automotive and aerospace industries, ensuring high-performance, safety, and reliability. From engine components to aerodynamic structures, every part is crafted with tight tolerances and advanced technology. This level of accuracy boosts efficiency, reduces failure rates, and meets the rigorous standards required in these demanding sectors.
                    </p>
                    <button className="bg-white text-black px-4 py-2 rounded text-sm w-fit shake-horizontal">
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
    )
}
export default Hero





