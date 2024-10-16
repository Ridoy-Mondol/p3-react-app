import React, { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux"; 
import { useParams } from "react-router-dom"; 
import { LoadFormData } from "../store/ProjectSlice"; // Action to load form data from the store

function WebsiteGeneratorHome() {
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux
  const formData = useSelector((state) => state.project.formData.form1); // Access form data (form1) from the Redux store
  const { projectId } = useParams(); // Extract the projectId from the URL

  useEffect(() => {
    // Fetch form data when the component mounts or projectId changes
    if (projectId) {
      dispatch(LoadFormData(projectId)); // Load data for the current projectId
    }
  }, [projectId, dispatch]); // Re-run the effect if projectId or dispatch changes

  return (
    <div
      className="home flex items-center justify-center min-h-screen bg-gray-200"
      style={{
        backgroundImage: `url(${formData.backgroundImage || ""})`, // Set the background image if available in form data
        backgroundSize: "cover", // Ensure the background covers the entire div
        backgroundPosition: "center", // Center the background image
      }}
    >
      <div className="textGroup bg-transparent p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {formData.title} {/* Display the title from form data */}
        </h1>
        <p className="text-lg text-white mb-4">
          {formData.description} {/* Display the description from form data */}
        </p>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          {formData.buttonText} {/* Display the button text from form data */}
        </button>
      </div>
    </div>
  );
}

export default WebsiteGeneratorHome;
