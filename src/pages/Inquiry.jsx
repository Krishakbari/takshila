import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { API } from "../constant";
import bgImage from "../assets/background.png";
import location from "../assets/loc.svg";
import mobile from "../assets/mob.svg";
import email from "../assets/ema.svg";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const contactDetails = [
    {
      icon: location,
      title: "Address",
      info: "123 Trade Center Business District City 12345, Country",
    },
    {
      icon: mobile,
      title: "Phone",
      info: "+1-234-567-8900",
    },
    {
      icon: email,
      title: "Email",
      info: "sales@globalagro.com",
    },
  ];

  // Handle change for all inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(`${API}/contact`, formData);
      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative w-full h-[40vh] sm:h-[30vh] md:h-[40vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 px-4 sm:px-6">
          <p className="text-sm sm:text-base md:text-lg font-light mb-2">
            Contact Us
          </p>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3">
            Inquiry For Trade Requirements
          </h1>
          <p className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Comprehensive casting and machining solutions for diverse industrial
            applications
          </p>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <div className="max-w-7xl mx-auto mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192648.6679127226!2d70.52782123777496!3d22.206558853674267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835725e055b7b%3A0x56c8a8cf562adf71!2sTakshila%20Industries%20Private%20Limited!5e1!3m2!1sen!2sin!4v1761720048724!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* ===== CONTACT INFO ===== */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="bg-[#6B2E00] text-white p-8 rounded-md flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-4 filter brightness-0 invert"
                />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="sm:py-12 pt-0 pb-6 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sm text-gray-700">Send us a Message</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#6B2E00] leading-snug mt-1">
              Contact us anytime, anywhere.
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#6B2E00]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#6B2E00]"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#6B2E00]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#6B2E00]"
                />
              </div>
            </div>

            {/* Subject (Input field instead of dropdown) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#6B2E00]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your requirement in details"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#6B2E00]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#6B2E00] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#5a2600] transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Inquiry;
