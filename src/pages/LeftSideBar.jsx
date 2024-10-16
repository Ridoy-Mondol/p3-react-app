import React from "react";
import { useSelector } from "react-redux"; // Importing useSelector to access Redux store state
import { Outlet, useNavigate } from "react-router-dom"; // Outlet for nested routes, useNavigate for navigation
import UseCustomSubmitPageRoute from "../hooks/UseCustomSubmitPageRoute"; // Custom hook for handling route submissions
import WebsitePreview from "../components/WebsitePreview"; // Component to preview the website
import WebsiteDownload from "../components/WebsiteDownload"; // Component for downloading the website
import { clearIndexedDB } from "../indexDB/Dexie"; // Function to clear IndexedDB
import { clearProject } from "../store/ProjectSlice"; // Action to clear the project data from Redux store
import { useDispatch } from "react-redux"; // Importing useDispatch to send actions to the Redux store

import { clearProjectIdField } from '../indexDB/Dexie';

import "../styles/LeftSideBar.css"; // Importing CSS styles for the component

function LeftSideBar() {
  // Using the custom hook to handle button clicks
  const handleButtonClick = UseCustomSubmitPageRoute();

  // Selecting the project ID from the Redux store
  const projectId = useSelector((state) => state.project.projectId);
  console.log("Project ID", projectId); // Logging the project ID for debugging purposes

  const dispatch = useDispatch(); // Getting the dispatch function to send actions to Redux
  const navigate = useNavigate(); // Getting the navigate function for routing

  // Function to handle exit button click
  const handleExitClick = async () => {
    await clearIndexedDB(); // Clear IndexedDB to remove any stored data
    await clearProjectIdField(); // "Clear projectId field from all entries in projects"
    dispatch(clearProject()); // Dispatch action to clear the project data from Redux
    localStorage.removeItem("projectId"); // Remove the project ID from localStorage
    setTimeout(() => {
      localStorage.removeItem("persist:root"); // Clear persist:root after timeout
    }, 50);
    navigate("/"); // Navigate to the home page
};

  // Define button styles for consistent styling
  const buttonStyles =
    "bg-gradient-to-r from-gray-800 to-green-900 w- text-white py-2 text-center transform transition-transform duration-300 hover:scale-105 hover:bg-green-900 hover:text-yellow-200";

  return (
    <div className="sideBar">
      <div>
        <div className="homeButton tracking-wider">
          {/* Button to go home */}
          <button className={buttonStyles} onClick={handleExitClick}>
            Home
          </button>
          {/* Component to show a preview of the website */}
          <WebsitePreview />
        </div>
        
        {/* Buttons for editing different sections of the website */}
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 selectionButton tracking-wide">
          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(`/website-generator/${projectId}/edit-home`); // Navigate to edit home page
              window.location.hash = "#home"; // Scroll to the home section
            }}
          >
            Edit Home
          </button>
          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(`/website-generator/${projectId}/edit-about`); // Navigate to edit about page
              window.location.hash = "#about-us"; // Scroll to the about section
            }}
          >
            Edit About Us
          </button>
          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(`/website-generator/${projectId}/edit-whyus`); // Navigate to edit why us page
              window.location.hash = "#why-us"; // Scroll to the why us section
            }}
          >
            Edit Why Us
          </button>
          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(`/website-generator/${projectId}/edit-services`); // Navigate to edit services page
              window.location.hash = "#services"; // Scroll to the services section
            }}
          >
            Edit Services
          </button>
          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(`/website-generator/${projectId}/edit-projects`); // Navigate to edit projects page
              window.location.hash = "#projects"; // Scroll to the projects section
            }}
          >
            Edit Projects
          </button>

          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(`/website-generator/${projectId}/edit-contactus`); // Navigate to edit contact page
              window.location.hash = "#contact-us"; // Scroll to the contact section
            }}
          >
            Edit Contact
          </button>
          <button
            className={buttonStyles}
            onClick={() => {
              handleButtonClick(`/website-generator/${projectId}/edit-navbar`); // Navigate to edit navbar page
              window.location.hash = "#navBarSection"; // Scroll to the navbar section
            }}
          >
            Edit NavBar
          </button>

          {/* Component for downloading the website */}
          <WebsiteDownload />
        </div>

        {/* Outlet for rendering nested routes */}
        <section className="sectionDesign">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default LeftSideBar; // Exporting the LeftSideBar component for use in other parts of the application
