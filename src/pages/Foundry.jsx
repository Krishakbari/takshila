import React from 'react'
import bgImage from "../assets/background.png"
import f1 from "../assets/f1.jpg"
import f2 from "../assets/f2.jpg"
import f3 from "../assets/f3.jpg"
import f4 from "../assets/f4.jpg"
import f5 from "../assets/f5.jpg"
import f6 from "../assets/f6.jpg"
import f7 from "../assets/f7.jpg"
import f8 from "../assets/f8.jpg"
import f9 from "../assets/f9.jpg"

const Foundry = () => {
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
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-full md:w-1/2 order-2 md:order-1">
                                <h2 className="text-2xl font-bold text-orange-600 mb-2">Furnace</h2>
                                <p className="text-gray-600 mb-4">A prominent industry leader, we operate internationally acclaimed production processes and efficiency. The use of medium frequency induction furnaces with high standards has continually upgraded our infrastructure by advanced systems. Every step in our process is driven by a clear vision of precision and control. Furthermore, our commitment to environmental sustainability is unwavering.</p>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <img src={f1} alt="Furnace" className="w-full h-94 object-cover rounded-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                            <div className="w-full md:w-1/2 order-2 md:order-1">
                                <h2 className="text-2xl font-bold text-orange-600 mb-2">Moulding Process – No Bake</h2>
                                <p className="text-gray-600 mb-4">A highly precise casting method begins with superior molding technology. Our commitment to continuous improvement of advanced molding techniques contributes to surface finish excellence. The no-bake process accounts for our excellent dimensional accuracy, ensuring consistent quality across production runs. Furthermore, it minimizes waste and supports sustainability by reducing traditional sand casting methods in both quality and consistency.</p>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <img src={f2} alt="Moulding Process" className="w-fullh-94 object-cover rounded-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-full md:w-1/2 order-2 md:order-1">
                                <h2 className="text-2xl font-bold text-orange-600 mb-2">Moulding Line (Omega Sinto, U.K)</h2>
                                <p className="text-gray-600 mb-4">This line is an off-line system featuring a high-speed loop system automation, including automated track pattern changes, robotic arms, and horizontal flask transport. The system features an integrated mold transport conveyor system with a range of components, from frame size to 350 x 350 mm and green sand treatment.</p>
                                <ul className="text-gray-600 list-disc list-inside mb-4">
                                    <li>Size of Flask Box (mm): 1200 x 1200 x 450/450</li>
                                    <li>Capacity: 50 molds per hour</li>
                                    <li>Casting Weight: Maximum 800kg</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <img src={f3} alt="Moulding Line" className="w-full h-94 object-cover rounded-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                            <div className="w-full md:w-1/2 order-2 md:order-1">
                                <h2 className="text-2xl font-bold text-orange-600 mb-2">Hand Moulding</h2>
                                <p className="text-gray-600 mb-4">Our Hand Moulding department is producing single castings ranging from 30 kg to 3000 kg. This process is ideal for customized complex foundation plates, machine tool castings with a focus on precision and durability, ensuring each casting meets the highest standards of quality.</p>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <img src={f4} alt="Hand Moulding" className="w-full h-94 object-cover rounded-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-full md:w-1/2 order-2 md:order-1">
                                <h2 className="text-2xl font-bold text-orange-600 mb-2">Green Sand Moulding Process</h2>
                                <p className="text-gray-600 mb-4">The Green Sand Moulding process accounts for our total casting capacity. It utilizes advanced molding techniques, including automated molding lines, leading to high dimensional accuracy and superior surface finish. This process minimizes waste and supports sustainability by reducing traditional sand casting methods in both quality and consistency.</p>
                                <ul className="text-gray-600 list-disc list-inside mb-4">
                                    <li>Size of Flask (mm): 700 x 700 x 300</li>
                                    <li>Capacity: 100 molds per hour</li>
                                    <li>Casting Weight: Maximum 150kg</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <img src={f5} alt="Green Sand Moulding Process" className="w-full h-94 object-cover rounded-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                            <div className="w-full md:w-1/2 order-2 md:order-1">
                                <h2 className="text-2xl font-bold text-orange-600 mb-2">Core Shop</h2>
                                <p className="text-gray-600 mb-4">Our Core Shop is driven by a blend of technical expertise and precision engineering. It employs a variety of advanced core-making processes, including shell molding and cold-box processes, to create complex cores with a wide range of shapes, sizes, and tolerances to derive product requirements.</p>
                                <ul className="text-gray-600 list-disc list-inside mb-4">
                                    <li>Cold-Box Core Makers</li>
                                    <li>Shell Core Machines</li>
                                    <li>No-Bake Core Making Facilities</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <img src={f6} alt="Core Shop" className="w-full h-94 object-cover rounded-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-full md:w-1/2 order-2 md:order-1">
                                <h2 className="text-2xl font-bold text-orange-600 mb-2">Shot Blasting & Fettling</h2>
                                <p className="text-gray-600 mb-4">Fettling is the process of removing excess material from castings, typically achieving the desired shape and surface finish of the final product. Our advanced shot blasting and fettling techniques include high-pressure blasting with steel shots and grinding technology.</p>
                                <ul className="text-gray-600 list-disc list-inside mb-4">
                                    <li>Type: Tumblast</li>
                                    <li>Machine Size: 1200 x 1200 x 1200 mm</li>
                                    <li>Capacity: 1000kg</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <img src={f7} alt="Shot Blasting & Fettling" className="w-full h-94 object-cover rounded-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
                            <div className="w-full md:w-1/2 order-2 md:order-1">
                                <h2 className="text-2xl font-bold text-orange-600 mb-2">Painting & Finishing</h2>
                                <p className="text-gray-600 mb-4">To meet client requirements, our coatings are applied with a variety of special painting techniques and CS casting standards for corrosion protection and all paint coatings undergo thorough quality inspection to ensure superior finish.</p>
                                <ul className="text-gray-600 list-disc list-inside mb-4">
                                    <li>EPOXY Thin Film Measurement using Paint Thickness Gauge</li>
                                    <li>Cross-Cut Adhesion Test to ensure coating adhesion</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <img src={f8} alt="Painting & Finishing" className="w-full h-94 object-cover rounded-lg" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-full md:w-1/2 order-2 md:order-1">
                                <h2 className="text-2xl font-bold text-orange-600 mb-2">Pattern Shop</h2>
                                <p className="text-gray-600 mb-4">The Pattern Shop is dedicated to the storage and maintenance of patterns used in high-quality pattern production when required. It ensures the availability of casting tools while adhering to strict quality standards.</p>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <img src={f9} alt="Pattern Shop" className="w-full h-94 object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Foundry
