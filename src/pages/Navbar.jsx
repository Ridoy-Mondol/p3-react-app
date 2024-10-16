import React, { useState } from "react"; // Importing React and useState hook
import companyLogo from "../assets/companyLogo.svg"; // Importing the default company logo
import useFormData from "../hooks/useFormData"; // Custom hook to retrieve form data

const NavBar = () => {
  // Getting form data for the navbar
  const { formData } = useFormData("form7");

  // State to manage the open/close status of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  // Styles for hover effect on menu items
  const hoverStyles =
    "hover:text-yellow-300 hover:underline transition duration-300";
  const textSize = "text-base lg:text-xl"; // Text size for menu items

  return (
    <div className="navBar relative w-full">
      {/* Navbar container */}
      <nav className="flex justify-between items-center text-white p-4 bg-gradient-to-l from-blue-800 to-blue-950">
        {/* Logo linking to the contact section */}
        <a href="#contact-us">
          <img
            className="logo"
            src={formData.logoOne || companyLogo} // Use logo from formData or fallback to default
            alt="Company Logo"
          />
        </a>

        {/* Hamburger Icon for mobile view */}
        <div className="md:hidden" onClick={toggleMenu}>
          <div className="space-y-2">
            {/* Lines of the hamburger icon */}
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </div>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden" // Show menu if isOpen is true
          } md:flex md:space-x-8 absolute md:static top-16 left-0 right-0 bg-gradient-to-l from-blue-800 to-blue-950 md:bg-transparent text-center md:text-left space-y-4 md:space-y-0 py-4 md:py-0`}
        >
          {/* List of navigation items */}
          <li>
            <a href="#home" className={`${textSize} ${hoverStyles}`}>
              {formData.listOne || "HOME"} {/* Use data from formData or fallback text */}
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

export default NavBar; // Exporting the NavBar component for use in other parts of the application
