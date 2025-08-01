import React from 'react'
import logoblack from '../assets/logoblack.png';
import logo from '../assets/logo.png';
import layer from "../assets/Layer.png";
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";
import mapIcon from "../assets/map.png";
const ContactUs = () => {
    const contactItems = [
        {
            icon: mapIcon,
            title: "Address",
            value: "123 Trade Center Business District City 12345, Country",
        },
        {
            icon: phoneIcon,
            title: "Phone",
            value: "+1-234-567-8900",
        },
        {
            icon: emailIcon,
            title: "Email",
            value: "sales@globalagro.com",
        },
    ];

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
                    <p className="text-lg font-medium text-white/50">Contact</p>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl ml-10 font-semibold text-white/50 mb-2">
                    Connect with us for support.
                </h2>
            </div>


            <div className="max-w-[1200px] mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {contactItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-[#f4f9f7] text-center p-6 rounded-md shadow-sm hover:shadow-md transition"
                    >
                        <img
                            src={item.icon}
                            alt={item.title}
                            className="w-12 h-12 mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-700">{item.value}</p>
                    </div>
                ))}
            </div>


            <div className="max-w-5xl mx-auto py-16 px-4">
                {/* Header Section */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-2">
                        <img src={logoblack} alt="Send us a message" className="w-5 h-5" />
                        <p className="text-sm text-gray-700">Send us a Message</p>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-[#133029]">
                        Send us a message anytime, <br className="hidden sm:block" /> anywhere.
                    </h2>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border rounded-md p-3 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border rounded-md p-3 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-1">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full border rounded-md p-3 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Company Name</label>
                            <input
                                type="text"
                                placeholder="Company Name"
                                className="w-full border rounded-md p-3 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Subject</label>
                        <input
                            type="text"
                            placeholder="Select a Subject"
                            className="w-full border rounded-md p-3 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea
                            rows="6"
                            placeholder="Please describe your requirement in details"
                            className="w-full border rounded-md p-3 focus:outline-none resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#133029] text-white px-6 py-3 rounded-md hover:bg-[#0f271f] transition"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </>
    )
}

export default ContactUs
