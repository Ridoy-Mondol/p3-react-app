import React, { useState, useEffect } from "react"; // Importing React hooks
import NoCodeWebsiteBuilder from "../assets/NoCodeWebsiteBuilder.png"; // Importing assets
import landingPageImageOne from "../assets/landingPageImageOne.png"; // Importing landing page images
import landingPageImageTwo from "../assets/landingPageImageTwo.png";
import landingPageImageThree from "../assets/landingPageImageThree.png";
import { useNavigate } from "react-router-dom"; // Importing navigation hook
import { createOrGetProject } from "../indexDB/Dexie"; // Importing function to create or get project

// Redux imports
import { useSelector, useDispatch } from "react-redux"; // Importing Redux hooks
import { setProjectId } from "../store/ProjectSlice"; // Importing action to set project ID in Redux

function LandingPage() {
  const navigate = useNavigate(); // Initialize navigation
  const dispatch = useDispatch(); // Initialize Redux dispatch

  // Get projectId from the "project" slice in Redux state
  const projectId = useSelector((state) => state.project.projectId);
  const [loading, setLoading] = useState(true); // Track loading state

  console.log("Current projectId in Redux:", projectId); // Log current project ID for debugging

  useEffect(() => {
    const loadProject = async () => {
      // Check if the projectId is already in localStorage
      let storedProjectId = parseInt(localStorage.getItem("projectId"));

      if (storedProjectId) {
        // If projectId exists in localStorage, use it
        console.log("Using projectId from localStorage:", storedProjectId);
        dispatch(setProjectId(storedProjectId)); // Dispatch the projectId to Redux
        console.log(
          "Dispatched projectId to Redux from localStorage:",
          storedProjectId
        );
      } else {
        const id = await createOrGetProject(); // Create or get a new project ID
        if (id) {
          console.log("Project loaded with ID:", id);
          dispatch(setProjectId(id)); // Dispatch the projectId to Redux
          console.log("Redux dispatch: id", id);
          localStorage.setItem("projectId", id); // Store the projectId in localStorage
          console.log("Project ID stored in localStorage:", id);
        } else {
          console.error("Failed to load projectId"); // Log error if project ID creation fails
        }
      }
    };

    loadProject(); // Call the loadProject function
  }, [dispatch]);

  useEffect(() => {
    console.log("projectId changed in Redux:", projectId); // Log project ID change
    if (projectId) {
      setLoading(false); // Set loading to false if projectId is available
    }
  }, [projectId]);

  const handleCreateWebsite = () => {
    if (projectId) {
      console.log("Navigating to edit-home with projectId:", projectId); // Log navigation
      navigate(`/website-generator/${projectId}/edit-home/`); // Navigate to the editor page
    } else {
      console.error("Project ID is not available yet."); // Log error if project ID is not available
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-gray-300 via-gray-800 to-black text-white">
        <div className="flex justify-between items-center p-4">
          <img src={NoCodeWebsiteBuilder} alt="My Logo" className="w-[12em]" /> {/* Logo */}
          {/* Uncomment this button if needed */}
          {/* <button className="bg-green-950 h-[3em] px-6 py-2 rounded-lg text-white">
            How to Create a Website
          </button> */}
        </div>
        <div>
          <div className="flex gap-3 p-4 w-full m-2 justify-center items-center mb-[1.25em]">
            <h1 className="text-[1.875em] text-center">
              Build a professional website without writing a single line of
              code. <br /> Our user-friendly platform and pre-designed templates{" "}
              <br /> make it easy to create your dream website.
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 p-4 w-full m-2 justify-center items-center mb-[3em]">
            {/* Landing page images */}
            <img
              src={landingPageImageOne}
              alt="Website Editor Image Home"
              className="w-full h-auto md:h-auto lg:h-[14rem] md:w-9/12 lg:w-1/4"
            />
            <img
              src={landingPageImageTwo}
              alt="Website Editor Image Home"
              className="w-full h-auto md:h-auto lg:h-[14rem] md:w-9/12 lg:w-1/4"
            />
            <img
              src={landingPageImageThree}
              alt="Website Editor Image Home"
              className="w-full h-auto md:h-auto lg:h-[14rem] md:w-9/12 lg:w-1/4"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleCreateWebsite} // Handle button click to create website
              className={`bg-white h-[3em] px-6 py-2 rounded-lg text-green-900 mb-[4em] ${
                loading || !projectId ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading || !projectId} // Disable button if loading or no projectId
            >
              {loading ? "Loading..." : "Create Your Own Website"} {/* Button text */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage; // Exporting the LandingPage component
