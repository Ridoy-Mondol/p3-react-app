import React from "react";
import NavBar from "./Navbar.jsx"; // Importing the navigation bar component
import WebsiteGeneratorHome from "./WebsiteGeneratorHome.jsx"; // Importing the home section component
import AboutUs from "./AboutUs.jsx"; // Importing the About Us section component
import WhyUs from "./WhyUs.jsx"; // Importing the Why Us section component
import Services from "./Services.jsx"; // Importing the Services section component
import Projects from "./Projects.jsx"; // Importing the Projects section component
import ContactUs from "./ContactUs.jsx"; // Importing the Contact Us section component

import "../styles/WebsiteGeneratorEditor.css"; // Importing CSS styles for the editor

function WebsiteGeneratorEditor() {
  return (
    <div className="editorPage"> {/* Main container for the editor page */}
      <div id="navBarSection" className="navBar"> {/* Section for the navigation bar */}
        <NavBar /> {/* Render the NavBar component */}
      </div>

      <div>
        {/* Each section represents a different part of the website being edited */}
        <section id="home" className="homeSection"> {/* Home section of the website */}
          <WebsiteGeneratorHome /> {/* Render the Home section component */}
        </section>
        <section id="about-us"> {/* About Us section of the website */}
          <AboutUs /> {/* Render the About Us section component */}
        </section>
        <section id="why-us"> {/* Why Us section of the website */}
          <WhyUs /> {/* Render the Why Us section component */}
        </section>
        <section id="services"> {/* Services section of the website */}
          <Services /> {/* Render the Services section component */}
        </section>
        <section id="projects"> {/* Projects section of the website */}
          <Projects /> {/* Render the Projects section component */}
        </section>
        <section id="contact-us"> {/* Contact Us section of the website */}
          <ContactUs /> {/* Render the Contact Us section component */}
        </section>
      </div>
    </div>
  );
}

export default WebsiteGeneratorEditor; // Exporting the WebsiteGeneratorEditor component for use in other parts of the application
