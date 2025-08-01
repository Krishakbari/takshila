import React from 'react'
import logo1 from "../assets/l1.png"
import logo2 from "../assets/l2.png"
import logo3 from "../assets/l3.png"
import logo4 from "../assets/l4.png"
const LogoSection = () => {
    return (
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

    )
}

export default LogoSection
