import React from 'react'
import bgImage from "../assets/background.png"
import MaterialSpecification from '../components/MaterialSpecification'
import CastIronSpecification from '../components/CastIronSpecification'
const MaterialGrades = () => {
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
                        Material & Grades
                    </p>
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3">
                        Which Services Takshila Provides
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Comprehensive casting and machining solutions for diverse industrial applications

                    </p>
                </div>
            </section>

            <MaterialSpecification />
            <CastIronSpecification />
        </>
    )
}

export default MaterialGrades
