import React, { useState } from "react";
import companyLogo from "../assets/companyLogo.svg"; // Replace with actual path to the logo
import useFormData from "../hooks/useFormData";

const NavBar = () => {
  const { formData } = useFormData("form7");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hoverStyles =
    "hover:text-yellow-300 hover:underline transition duration-300";
  const textSize = "text-base lg:text-xl";

  return (
    <div className="navBar relative w-full">
      <nav className="flex justify-between items-center text-white p-4 bg-gradient-to-l from-blue-800 to-blue-950">
        <a href="#contact-us">
          <img
            className="logo"
            src={formData.logoOne || companyLogo}
            alt="Company Logo"
          />
        </a>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </div>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-8 absolute md:static top-16 left-0 right-0 bg-gradient-to-l from-blue-800 to-blue-950 md:bg-transparent text-center md:text-left space-y-4 md:space-y-0 py-4 md:py-0`}
        >
          <li>
            <a href="#home" className={`${textSize} ${hoverStyles}`}>
              {formData.listOne || "HOME"}
            </a>
          </li>
          <li>
            <a href="#about-us" className={`${textSize} ${hoverStyles}`}>
              {formData.listTwo || "ABOUT-US"}
            </a>
          </li>
          <li>
            <a href="#services" className={`${textSize} ${hoverStyles}`}>
              {formData.listThree || "SERVICES"}
            </a>
          </li>
          <li>
            <a href="#why-us" className={`${textSize} ${hoverStyles}`}>
              {formData.listFour || "WHY US"}
            </a>
          </li>
          <li>
            <a href="#projects" className={`${textSize} ${hoverStyles}`}>
              {formData.listFive || "PROJECTS"}
            </a>
          </li>
          <li>
            <a href="#contact-us" className={`${textSize} ${hoverStyles}`}>
              {formData.listSix || "CONTACT US"}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
