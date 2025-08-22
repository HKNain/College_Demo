import React, { useState, useEffect } from "react";
import {navbarOptions} from "../utils/NavbarUtils";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div
      className={`fixed  top-0 left-0 w-full p-4 transition-colors duration-300 ${
        scrolled ? "bg-gray-900 text-white shadow-lg" : "bg-transparent text-black flex justify-around items-center"
      }`}
    >
        <div>
        <img src="https://rha.socet.edu.in/img/logo.png" className="h-12 w-12" alt=""  />

        </div>
        <div className="flex gap-6 text-black">
            {
                navbarOptions.map((option)=>(
                    <button className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                 after:h-[3px] after:w-0 after:bg-black 
                 after:transition-all after:duration-300 
                 hover:after:w-full hover:text-white ">{option}</button>
                ))
            }
        </div>
    </div>
  );
}

export default Navbar;
