import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-52 flex bg-[#0a0d18] flex-col justify-center items-center py-5">
      <h3 className="text-gray-300 text-sm text-center leading-6 px-3">
        © Copyright <span className="font-bold text-white">TheEvent</span>. All Rights Reserved 
        Designed by{" "}
        <span className="text-red-500 hover:underline cursor-pointer">
          BootstrapMade
        </span>
        <br />
        Developed By{" "}
        <span className="text-red-500 font-semibold">Ujas Bhadani</span> &{" "}
        <span className="text-red-500 font-semibold">Devansh Mehta</span>
      </h3>
    </div>
  );
};

export default Footer;
