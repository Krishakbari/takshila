import React from 'react'
import layer from "../assets/Layer.png";
import logo from '../assets/logo.png';
import logoblack from '../assets/logoblack.png';

const Documentation = () => {
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
                    <p className="text-lg font-medium text-white/50">Documentation & Compliance </p>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl ml-10 font-semibold text-white/50 mb-2">
                    Ensuring quality through complete documentation.
                </h2>
            </div>


            <div className="px-6 md:px-16 py-10 text-[#102B26]">
                {/* Privacy Policy */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <img src={logoblack} alt="logo" className="w-5 h-5" />
                        <h2 className="text-lg font-semibold">Privacy Policy</h2>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                        How we collect, use, and protect your personal information
                    </h3>

                    <div className="mb-6">
                        <p className="font-semibold mb-1">
                            Quality assurance and reliability you can trust
                        </p>
                        <p className="mb-2">
                            We collect information you provide directly to us, such as when you create an account, request a quote, or contact us for support. This may include:
                        </p>
                        <ul className="list-disc pl-6">
                            <li>Name, email address, and contact information</li>
                            <li>Company information and business details</li>
                            <li>Product inquiries and trade requirements</li>
                            <li>Communication preferences</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <p className="font-semibold mb-1">How We Use Your Information</p>
                        <p className="mb-2">We use the information we collect to:</p>
                        <ul className="list-disc pl-6">
                            <li>Provide and improve our services</li>
                            <li>Process your inquiries and requests</li>
                            <li>Communicate with you about our services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </div>

                    <p className="mb-4 font-semibold">Information Sharing</p>
                    <p className="mb-4">
                        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
                    </p>

                    <p className="mb-4 font-semibold">Data Security</p>
                    <p className="mb-4">
                        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>

                    <p className="mb-2 font-semibold">Contact Us</p>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at{" "}
                        <a href="mailto:privacy@globalagroexports.com" className="text-blue-600 underline">
                            privacy@globalagroexports.com
                        </a>
                    </p>
                </div>

                {/* Terms & Conditions */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img src={logoblack} alt="logo" className="w-5 h-5" />
                        <h2 className="text-lg font-semibold">Terms & Condition</h2>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                        Terms governing the use of our services and website
                    </h3>

                    <div className="mb-6">
                        <p className="font-semibold mb-1">Acceptance of Terms</p>
                        <p>
                            By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </div>

                    <div className="mb-6">
                        <p className="font-semibold mb-1">Services</p>
                        <p className="mb-2">
                            GlobalAgro Exports provides international trade services including but not limited to:
                        </p>
                        <ul className="list-disc pl-6">
                            <li>Export and import services</li>
                            <li>Logistics and shipping solutions</li>
                            <li>Quality inspection and certification</li>
                            <li>Trade consultation and documentation</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <p className="font-semibold mb-1">Payment Terms</p>
                        <p>
                            Payment terms are specified in individual service agreements. All payments must be made according to the agreed terms and conditions.
                        </p>
                    </div>

                    <div className="mb-6">
                        <p className="font-semibold mb-1">Limitation of Liability</p>
                        <p>
                            Our liability is limited to the extent permitted by law. We are not responsible for indirect, incidental, or consequential damages.
                        </p>
                    </div>

                    <div className="mb-6">
                        <p className="font-semibold mb-1">Governing Law</p>
                        <p>
                            These terms are governed by the laws of the jurisdiction in which our company is incorporated.
                        </p>
                    </div>
                </div>
                <p className="mb-2 font-semibold">Contact Us</p>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@globalagroexports.com" className="text-blue-600 underline">
                        privacy@globalagroexports.com
                    </a>
                </p>
            </div>
        </>
    )
}

export default Documentation
