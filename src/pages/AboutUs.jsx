import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LoadFormData } from "../store/ProjectSlice"; // Action to load form data

function AboutUs() {
  const dispatch = useDispatch(); // Dispatch function to trigger Redux actions
  const formData = useSelector((state) => state.project.formData.form2); // Access form2 data from Redux store (specific to "About Us" section)
  const { projectId } = useParams(); // Get projectId from the URL

  useEffect(() => {
    // Fetch form data when component mounts or when projectId changes
    if (projectId) {
      dispatch(LoadFormData(projectId)); // Load data for the project using the ID from URL
    }
  }, [projectId, dispatch]); // Re-run effect if projectId or dispatch changes

  return (
    <div className="flex flex-col lg:flex-row md:flex-row p-10 bg-lightBeige gap-6">
      {/* Image section on the left (centered for smaller screens) */}
      <div className="w-full md:w-1/2 lg:w-2/3 p-4 flex justify-center items-center">
        <img
          className="aboutUsPhoto" // CSS class for image styling
          src={formData.backgroundImage || "defaultImagePath"} // Display image from formData, use a default if not available
          alt="About Us" // Alt text for the image
        />
      </div>
      
      {/* Text section on the right */}
      <div className="w-full md:w-1/2 p-6">
        <h3 className="mb-3 text-4xl font-bold text-[#48A0DC]">
          {formData.title || "About Us"} {/* Show formData title or default title */}
        </h3>
        <h2 className="text-4xl text-gray-800 font-medium mb-9">
          {formData.description || "Default description goes here."} {/* Show formData description or default */}
        </h2>
        <p className="mb-2">
          {formData.textParagraphOne || "Default paragraph one goes here."} {/* Show first paragraph */}
        </p>
        <p>
          {formData.textParagraphTwo || "Default paragraph two goes here."} {/* Show second paragraph */}
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
