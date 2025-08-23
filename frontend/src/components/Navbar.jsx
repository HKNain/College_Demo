import React, { useState, useEffect } from "react";
import { navbarOptions } from "../utils/NavbarUtils";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (option) => {
    if (option.id === "hero") {
      if (location.pathname === "/") {
        scrollToSection(option.id);
      } else {
        navigate("/");
      }
    } else {
      if (location.pathname === "/") {
        scrollToSection(option.id);
      } else {
        navigate("/", { state: { scrollToId: option.id } });
      }
    }
  };

  const styleProp = `relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                    after:h-[3px] after:w-0 after:bg-red-800 
                    after:transition-all after:duration-300 
                    hover:after:w-full hover:text-white text-gray-300 font-semibold`;

  return (
    <div
      className={`fixed top-0 left-0 z-40 w-full p-4 duration-500 transition-all flex justify-around items-center ${
        scrolled ? "bg-gray-900 text-white shadow-lg h-20 " : "bg-transparent text-black h-28"
      }`}
    >
      <div>
        <img src="https://rha.socet.edu.in/img/logo.png" className="h-12 w-36" alt="" />
      </div>
      <div className="flex gap-6 text-black">
        {navbarOptions.map((option) => (
          <button
            onClick={() => handleNavClick(option)}
            key={option.id}
            className={`${styleProp}`}
          >
            {option.label}
          </button>
        ))}
        <Link to="/signup" className={`${styleProp}`}>
          SignUp
        </Link>
        <Link to="/login" className={`${styleProp}`}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
