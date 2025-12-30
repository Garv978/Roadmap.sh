import { FaHome, FaUser, FaFolder, FaCode, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "projects", label: "Projects", icon: <FaFolder /> },
    { id: "services", label: "Services", icon: <FaCode /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <div className="flex justify-center mt-8">
      <div className="flex gap-2 bg-white shadow-md py-2 px-5 rounded-full font-serif">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all 
              ${active === item.id
                ? "bg-black text-white shadow-md"
                : "text-gray-700 hover:text-black"}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
