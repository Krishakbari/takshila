import React from 'react'
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const products = [
    {
        id: 1,
        img: c1,
        title: "Precision CNC Lathe Machine",
        desc: "High-precision CNC lathe machine designed for industrial manufacturing applications. Features advanced control systems and exceptional accuracy for complex machining operations.",
        specs: [
            { label: "Grain Length", value: "6.5–7.0 mm" },
            { label: "Broken Grains", value: "2% max" },
            { label: "Chalky Grains", value: "3% max" },
            { label: "Paddy Grains", value: "Nil" },
            { label: "Color", value: "White" },
        ],
        description: `
      Sourced directly from the fertile plains of Punjab, our premium long-grain Basmati rice is known for its exceptional quality. Each grain is carefully selected to ensure purity and uniformity. Aged naturally to enhance its flavor, this rice delivers a rich aroma and smooth texture that elevates any dish.

      Renowned for its fluffy, non-sticky nature and superior cooking performance, our Basmati rice is a favorite in homes and professional kitchens alike. It absorbs flavors beautifully while retaining its shape, making it ideal for pilafs, gourmet dishes, and festive meals. Every batch is processed under strict quality standards to maintain its premium status.
    `,
    },
    {
        id: 2,
        img: c2,
        title: "Precision CNC Lathe Machine",
        desc: "High-precision CNC lathe machine designed for industrial manufacturing applications. Features advanced control systems and exceptional accuracy for complex machining operations.",
        specs: [
            { label: "Grain Length", value: "6.5–7.0 mm" },
            { label: "Broken Grains", value: "2% max" },
            { label: "Chalky Grains", value: "3% max" },
            { label: "Paddy Grains", value: "Nil" },
            { label: "Color", value: "White" },
        ],
        description: `
      Sourced directly from the fertile plains of Punjab, our premium long-grain Basmati rice is known for its exceptional quality. Each grain is carefully selected to ensure purity and uniformity. Aged naturally to enhance its flavor, this rice delivers a rich aroma and smooth texture that elevates any dish.

      Renowned for its fluffy, non-sticky nature and superior cooking performance, our Basmati rice is a favorite in homes and professional kitchens alike. It absorbs flavors beautifully while retaining its shape, making it ideal for pilafs, gourmet dishes, and festive meals. Every batch is processed under strict quality standards to maintain its premium status.
    `,
    },
    {
        id: 3,
        img: c3,
        title: "Precision CNC Lathe Machine",
        desc: "High-precision CNC lathe machine designed for industrial manufacturing applications. Features advanced control systems and exceptional accuracy for complex machining operations.",
        specs: [
            { label: "Grain Length", value: "6.5–7.0 mm" },
            { label: "Broken Grains", value: "2% max" },
            { label: "Chalky Grains", value: "3% max" },
            { label: "Paddy Grains", value: "Nil" },
            { label: "Color", value: "White" },
        ],
        description: `
      Sourced directly from the fertile plains of Punjab, our premium long-grain Basmati rice is known for its exceptional quality. Each grain is carefully selected to ensure purity and uniformity. Aged naturally to enhance its flavor, this rice delivers a rich aroma and smooth texture that elevates any dish.

      Renowned for its fluffy, non-sticky nature and superior cooking performance, our Basmati rice is a favorite in homes and professional kitchens alike. It absorbs flavors beautifully while retaining its shape, making it ideal for pilafs, gourmet dishes, and festive meals. Every batch is processed under strict quality standards to maintain its premium status.
    `,
    },
    {
        id: 4,
        img: c4,
        title: "Precision CNC Lathe Machine",
        desc: "High-precision CNC lathe machine designed for industrial manufacturing applications. Features advanced control systems and exceptional accuracy for complex machining operations.",
        specs: [
            { label: "Grain Length", value: "6.5–7.0 mm" },
            { label: "Broken Grains", value: "2% max" },
            { label: "Chalky Grains", value: "3% max" },
            { label: "Paddy Grains", value: "Nil" },
            { label: "Color", value: "White" },
        ],
        description: `
      Sourced directly from the fertile plains of Punjab, our premium long-grain Basmati rice is known for its exceptional quality. Each grain is carefully selected to ensure purity and uniformity. Aged naturally to enhance its flavor, this rice delivers a rich aroma and smooth texture that elevates any dish.

      Renowned for its fluffy, non-sticky nature and superior cooking performance, our Basmati rice is a favorite in homes and professional kitchens alike. It absorbs flavors beautifully while retaining its shape, making it ideal for pilafs, gourmet dishes, and festive meals. Every batch is processed under strict quality standards to maintain its premium status.
    `,
    },
    {
        id: 5,
        img: c5,
        title: "Precision CNC Lathe Machine",
        desc: "High-precision CNC lathe machine designed for industrial manufacturing applications. Features advanced control systems and exceptional accuracy for complex machining operations.",
        specs: [
            { label: "Grain Length", value: "6.5–7.0 mm" },
            { label: "Broken Grains", value: "2% max" },
            { label: "Chalky Grains", value: "3% max" },
            { label: "Paddy Grains", value: "Nil" },
            { label: "Color", value: "White" },
        ],
        description: `
      Sourced directly from the fertile plains of Punjab, our premium long-grain Basmati rice is known for its exceptional quality. Each grain is carefully selected to ensure purity and uniformity. Aged naturally to enhance its flavor, this rice delivers a rich aroma and smooth texture that elevates any dish.

      Renowned for its fluffy, non-sticky nature and superior cooking performance, our Basmati rice is a favorite in homes and professional kitchens alike. It absorbs flavors beautifully while retaining its shape, making it ideal for pilafs, gourmet dishes, and festive meals. Every batch is processed under strict quality standards to maintain its premium status.
    `,
    },
];

const OurProduct = () => {
    const navigate = useNavigate()
    return (
        <section className="bg-black text-white px-10 py-16">
            <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Left Section */}
                <div className="flex flex-col justify-start mt-8">
                    <div className="flex items-center gap-2 mb-4">
                        <img src={logo} alt="logo" className="w-6 h-6" />
                        <p className="text-white text-sm">Our Product</p>
                    </div>
                    <h2 className="text-3xl font-semibold leading-tight">
                        Browse our specialized <br /> product lines
                    </h2>
                </div>

                {/* Product Cards */}
                {products.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-700  overflow-hidden flex flex-col"
                    >
                        <img src={item.img} alt="product" className="w-full h-64 object-cover p-4" />
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-lg font-semibold mb-1 leading-snug">{item.title}</h3>
                                <p className="text-sm text-white/70">{item.desc}</p>
                            </div>
                            <button
                                onClick={() => navigate(`/product/${item.id}`, { state: { product: item } })}
                                className="mt-6 text-sm flex items-center gap-2 group"
                            >
                                View Details
                                <span className="transition-transform duration-200 group-hover:translate-x-4">
                                    ──&gt;
                                </span>
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurProduct
