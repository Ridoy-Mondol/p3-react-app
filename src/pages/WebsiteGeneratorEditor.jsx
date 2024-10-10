//import {NavLink, Route, Routes} from "react-router-dom";
import NavBar from "./Navbar.jsx";
import WebsiteGeneratorHome from "./WebsiteGeneratorHome.jsx";
import AboutUs from "./AboutUs.jsx";
import WhyUs from "./WhyUs.jsx";
import Services from "./Services.jsx";
import Projects from "./Projects.jsx";
import ContactUs from "./ContactUs.jsx";

import { useState } from "react";

import "../styles/WebsiteGeneratorEditor.css";

// import companyLogo from "../assets/companyLogo.svg";

function WebsiteGeneratorEditor() {
  const [isOpen, setIsOpen] = useState(false);

  ;

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // }
  return (
    <div className="editorPage">
      <div id="navBarSection" className="navBar">
        <NavBar />
      </div>

      {/* <div className="navBar">
        <nav className="flex justify-between items-center text-white p-4">
          <img className="logo" src={companyLogo} alt="Company Logo" />
          <ul className="flex justify-end space-x-8">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about-us">ABOUT US</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#why-us">Why Us?</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact-us">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </div> */}

      <div>
        <section id="home" className="homeSection">
          <WebsiteGeneratorHome />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="why-us">
          <WhyUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact-us">
          <ContactUs />
        </section>
      </div>
    </div>
  );
}

export default WebsiteGeneratorEditor;
