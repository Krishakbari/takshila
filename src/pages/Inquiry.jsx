import React from 'react'
import logo from '../assets/logo.png';
import logoblack from '../assets/logoblack.png';
import layer from "../assets/Layer.png";
import uparrow from "../assets/uparrow.png";
const Inquiry = () => {
    return (
        <>
            <div className="relative bg-[#0F2D28] text-white h-[30vh] flex flex-col justify-center items-center overflow-hidden">
                {/* Watermark BG Image */}
                <img
                    src={layer}
                    alt="Background Layer"
                    className="absolute left-10    top-0 h-full opacity-40 z-0"
                />

                {/* Content */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <img src={logo} alt="Contact Icon" className="w-6 h-6 object-contain opacity-50" />
                    <p className="text-lg font-medium text-white/50">Inquiry</p>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl ml-10 font-semibold text-white/50 mb-2">
                    Submit your inquiry for assistance.
                </h2>
            </div>


            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Icon & Heading */}
                <div className="flex items-center gap-2 mb-4">
                    <img src={logoblack} alt="icon" className="w-5 h-5" />
                    <span className="text-sm text-gray-700">Submit Your Inquiry</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 leading-tight">
                    Get a personalized quote for your trade <br /> requirements
                </h2>

                {/* Form */}
                <form className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border rounded px-4 py-2 w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="border rounded px-4 py-2 w-full"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="border rounded px-4 py-2 w-full"
                        />
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="border rounded px-4 py-2 w-full"
                        />
                    </div>

                    <select className="border rounded px-4 py-2 w-full">
                        <option>Select Product Type</option>
                        <option>Electronics</option>
                        <option>Apparel</option>
                        <option>Furniture</option>
                    </select>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select className="border rounded px-4 py-2 w-full">
                            <option>Select Priority</option>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                        <select className="border rounded px-4 py-2 w-full">
                            <option>Select Budget Range</option>
                            <option>$100 - $500</option>
                            <option>$500 - $1000</option>
                            <option>$1000+</option>
                        </select>
                    </div>

                    <div>
                        <textarea
                            rows="4"
                            className="w-full border rounded px-4 py-2"
                            placeholder="Please describe your requirement in details"
                        />
                    </div>

                    {/* File Upload */}

                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">
                            Upload Portfolio (Optional)
                        </label>

                        <label
                            htmlFor="portfolio-upload"
                            className="cursor-pointer border border-dashed border-gray-400 rounded flex flex-col items-center justify-center h-36 text-gray-500 hover:border-gray-600 transition"
                        >
                            <img src={uparrow} alt="upload icon" className="w-10 h-10 opacity-60 mb-2" />
                            <span className="text-sm">Click to upload or drag file here</span>
                        </label>

                        <input
                            type="file"
                            id="portfolio-upload"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    console.log("Selected file:", file.name);
                                }
                            }}
                        />

                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-[#14352B] text-white px-6 py-2 rounded hover:bg-[#0f2d25]"
                        >
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Inquiry
