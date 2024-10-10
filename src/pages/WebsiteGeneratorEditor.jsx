import NavBar from "./Navbar.jsx";
import WebsiteGeneratorHome from "./WebsiteGeneratorHome.jsx";
import AboutUs from "./AboutUs.jsx";
import WhyUs from "./WhyUs.jsx";
import Services from "./Services.jsx";
import Projects from "./Projects.jsx";
import ContactUs from "./ContactUs.jsx";

import "../styles/WebsiteGeneratorEditor.css";

function WebsiteGeneratorEditor() {

  return (
    <div className="editorPage">
      <div id="navBarSection" className="navBar">
        <NavBar />
      </div>

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
