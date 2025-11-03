import React from 'react'
import bgImage from "../assets/background.png"
import product1 from "../assets/product1.png"
import Whyus from '../components/Whyus';


const Product = () => {
    const products = [
        { id: 1, image: product1 },
        { id: 2, image: product1 },
        { id: 3, image: product1 },
        { id: 4, image: product1 },
        { id: 5, image: product1 },
        { id: 6, image: product1 },
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
                        Over Products
                    </p>
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3">
                        Products That Takshila Offers
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Leading the future of cast iron manufacturing with precision, quality,
                        and innovation.
                    </p>
                </div>
            </section>



            <section className="pt-12 bg-white px-4 sm:px-6 lg:px-10">
                <div className="max-w-7xl mx-auto">
                    {/* Product Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {products.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white border rounded-lg border-gray-200  overflow-hidden "
                            >
                                <img
                                    src={item.image}
                                    alt={`Product ${item.id}`}
                                    className="w-full h-50 sm:h-96 object-cover "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Whyus/>


        </>
    )
}

export default Product
