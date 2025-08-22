import React, { useState, useEffect } from "react";
import {navbarOptions} from "../utils/NavbarUtils";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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


  return (
    <div
      className={`fixed  top-0 left-0 w-full p-4  duration-500 transition-all flex justify-around items-center ${
        scrolled ? "bg-gray-900 text-white shadow-lg h-20 " : "bg-transparent text-black h-28"
      }`}
    >
        <div>
        <img src="https://rha.socet.edu.in/img/logo.png" className="h-12 w-36" alt=""  />

        </div>
        <div className="flex gap-6 text-black">
            {
                navbarOptions.map((option)=>(
                    <a href={`#${option}`} className=" relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
                 after:h-[3px] after:w-0 after:bg-red-800 
                 after:transition-all after:duration-300 
                 hover:after:w-full hover:text-white text-gray-300 font-semibold ">{option}</a>
                ))
            }
        </div>
    </div>
  );
}

export default Navbar;
