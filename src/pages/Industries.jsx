import React,{useState} from 'react'
import bgImage from "../assets/background.png"
import i1 from "../assets/i1.png"
import i2 from "../assets/i2.jpg"
import i3 from "../assets/i3.jpg"
import i4 from "../assets/i4.jpg"
import i5 from "../assets/i5.jpg"
import i6 from "../assets/i6.jpg"
import i7 from "../assets/i7.jpg"
import i8 from "../assets/i8.jpg"
import i9 from "../assets/i9.jpg"
import i10 from "../assets/i10.jpg"
import i11 from "../assets/i11.jpg"
import i12 from "../assets/i12.jpg"
const Industries = () => {
    const industries = [
        { title: 'Automobile Industry', image: i1 },
        { title: 'Oil & Gas Industry', image: i2 },
        { title: 'Machine Tools', image: i3 },
        { title: 'Agriculture Industry', image: i4 },
        { title: 'Chemical Industry', image: i5 },
        { title: 'Power Transmission', image: i6 },
        { title: 'Smart Factory', image: i7 },
        { title: 'Overhead Cranes', image: i8 },
        { title: 'Railway Industry', image: i9 },
        { title: 'Textile Industry', image: i10 },
        { title: 'Defense Industry', image: i11 },
        { title: 'Shipping Industry', image: i12 },
    ];
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
                        Industries
                    </p>
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3">
                        Industries That Takshila Serves
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Comprehensive casting and machining solutions for diverse industrial applications
                    </p>
                </div>
            </section>


            <section className="bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                        {industries.map((industry, index) => {
                            const [isOverlayVisible, setIsOverlayVisible] = useState(false);

                            // Toggle overlay visibility on click for mobile
                            const handleClick = () => {
                                setIsOverlayVisible((prev) => !prev);
                            };

                            return (
                                <div
                                    key={index}
                                    className="relative rounded-lg overflow-hidden group"
                                    onClick={handleClick} // Add click handler for mobile
                                >
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="w-full h-64 object-cover transition-opacity duration-300"
                                    />
                                    <div
                                        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 
                    ${isOverlayVisible ? 'bg-black/30 scale-80 rounded-lg' : 'bg-black/0 md:group-hover:bg-black/50 md:group-hover:scale-80 md:group-hover:rounded-lg'}`}
                                    >
                                        <h3
                                            className={`text-white text-lg font-bold transition-opacity duration-300 
                      ${isOverlayVisible ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}
                                        >
                                            {industry.title}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Industries
