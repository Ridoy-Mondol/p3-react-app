import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import UseCustomSubmitPageRoute from "../hooks/useCustomSubmitPageRoute";
import WebsitePreview from "../components/WebsitePreview";
import WebsiteDownload from "../components/WebsiteDownload";

import { clearIndexedDB } from "../indexDb/Dexie";
import { clearProject } from "../store/ProjectSlice";
import { useDispatch } from "react-redux";

import WebsiteGeneratorEditor from "../pages/WebsiteGeneratorEditor";
import { Provider } from "react-redux"; 
import store from "../store/store"; 
import ReactDOM from "react-dom/client";

import "../styles/LeftSideBar.css";

function LeftSideBar() {
  const handleButtonClick = UseCustomSubmitPageRoute();
  const projectId = useSelector((state) => state.project.projectId);
  console.log("Project ID", projectId); //debugging
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleExitClick = async () => {
    await clearIndexedDB();

    dispatch(clearProject());
    navigate("/");
  };

  //button style
  const buttonStyles =
    "bg-gradient-to-r from-gray-800 to-green-900 w- text-white py-2 text-center transform transition-transform duration-300 hover:scale-105 hover:bg-green-900 hover:text-yellow-200";

  return (
    <div className="sideBar">
      <div>
        <div className="homeButton tracking-wider">
          <button className={buttonStyles} onClick={handleExitClick}>
            Home
          </button>
          <WebsitePreview />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 selectionButton tracking-wide">
          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(`/website-generator/${projectId}/edit-home`);
              window.location.hash = "#home";
            }}
          >
            Edit Home
          </button>
          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(`/website-generator/${projectId}/edit-about`);
              window.location.hash = "#about-us";
            }}
          >
            Edit About Us
          </button>
          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(`/website-generator/${projectId}/edit-whyus`);
              window.location.hash = "#why-us";
            }}
          >
            Edit Why Us
          </button>
          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(
                `/website-generator/${projectId}/edit-services`
              );
              window.location.hash = "#services";
            }}
          >
            Edit Services
          </button>
          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(
                `/website-generator/${projectId}/edit-projects`
              );
              window.location.hash = "#projects";
            }}
          >
            Edit Projects
          </button>

          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(
                `/website-generator/${projectId}/edit-contactus`
              );
              window.location.hash = "#contact-us";
            }}
          >
            Edit Contact
          </button>
          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(`/website-generator/${projectId}/edit-navbar`);
              window.location.hash = "#navBarSection";
            }}
          >
            Edit NavBar
          </button>

          <WebsiteDownload />
        </div>

        <section className="sectionDesign">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default LeftSideBar;
