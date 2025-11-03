import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

const Navbarr = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  const toggleMenu = () => {
    console.log("toggleMenu called ->", !isOpen);
    setIsOpen((v) => !v);
  };
  const closeMenu = () => {
    console.log("closeMenu called");
    setIsOpen(false);
  };
  const isActive = (path) => location.pathname === path;

  // close when clicking outside the panel
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e) => {
      // if click is inside the panel, ignore
      if (panelRef.current && panelRef.current.contains(e.target)) return;
      // otherwise close
      console.log("outside click detected -> closing menu");
      closeMenu();
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  // Inline style for sliding — reliable even if tailwind classes not applied
  const panelWidth = "85%"; // wider menu
  const panelStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: panelWidth,
    background: "#fff",
    boxShadow: "rgba(0,0,0,0.35) 0px 5px 25px",
    zIndex: 2000,
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.35s ease",
    display: "flex",
    flexDirection: "column",
  };


  return (
    <>
      {/* Desktop Navbar */}
      <div className="w-full h-20 items-center border-b border-gray-200 text-black text-sm hidden md:flex sticky top-0 z-50 bg-white">
        {/* Desktop Navbar */}
        <div className="w-full h-20 border-b border-gray-200 text-black hidden md:flex items-center justify-between sticky top-0 z-50 bg-white px-10">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" className="h-12" />
          </div>

          {/* Center: Nav Links */}
          <nav className="flex gap-10 text-sm font-medium">
            <Link to="/" className={`${isActive("/") ? "text-[#ff6100]" : "hover:text-gray-700"}`}>Home</Link>
            <Link to="/about" className={`${isActive("/about") ? "text-[#ff6100]" : "hover:text-gray-700"}`}>About</Link>
            <Link to="/product" className={`${isActive("/product") ? "text-[#ff6100]" : "hover:text-gray-700"}`}>Product</Link>
            <Link to="/services" className={`${isActive("/services") ? "text-[#ff6100]" : "hover:text-gray-700"}`}>Services</Link>
            <Link to="/foundry" className={`${isActive("/foundry") ? "text-[#ff6100]" : "hover:text-gray-700"}`}>Foundry</Link>
            <Link to="/industry" className={`${isActive("/industry") ? "text-[#ff6100]" : "hover:text-gray-700"}`}>Industry</Link>
            <Link to="/material" className={`${isActive("/material") ? "text-[#ff6100]" : "hover:text-gray-700"}`}>Material & Grades</Link>
          </nav>

          {/* Right: Inquiry Button */}
          <button
            onClick={() => navigate("/inquiry")}
            className="bg-[#ff6100] text-white px-5 py-2 rounded text-sm font-medium hover:bg-[#e25700] transition-all"
          >
            Inquiry Now
          </button>
        </div>

      </div>

      {/* Mobile Navbar */}
      <div className="w-full md:hidden text-black border-b border-gray-200 relative z-50">
        <div className="flex items-center justify-between px-0 h-20 bg-white">
          <img src={logo} alt="Logo" className="h-12 cursor-pointer" onClick={() => navigate("/")} />
          {/* DEBUG: show current state in console when button clicked */}
          <button onClick={toggleMenu} aria-label="Toggle menu" className="pr-5">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Overlay: only render when open */}
        {isOpen && (
          <div
            onClick={closeMenu}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(4px)",
              zIndex: 1500,
            }}
          />
        )}

        {/* Sliding panel (shutter) */}
        <div ref={panelRef} style={panelStyle} aria-hidden={!isOpen}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, borderBottom: "1px solid #eee" }}>
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>Menu</h3>
            <button onClick={closeMenu} aria-label="Close menu"><X size={22} /></button>
          </div>

          <nav style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/product", label: "Product" },
              { to: "/foundry", label: "Foundry" },
              { to: "/industry", label: "Industry" },
              { to: "/material", label: "Material & Grades" },
              ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => {
                  console.log("nav click", item.to);
                  closeMenu();
                }}
                style={{
                  color: isActive(item.to) ? "#ff6100" : "#222",
                  fontWeight: isActive(item.to) ? 600 : 500,
                  textDecoration: "none",
                  fontSize: 16,
                }}
              >
                {item.label}
              </Link>
            ))}

            <button
              style={{
                marginTop: 12,
                background: "#ff6100",
                color: "#fff",
                padding: "8px 14px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                width: "fit-content",
              }}
              onClick={() => {
                console.log("inquiry clicked");
                closeMenu();
                navigate("/inquiry");
              }}
            >
              Live Chat
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbarr;
