import "../styles/WebsiteGeneratorEditor.css"; // Importing the CSS styles
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Importing Redux hooks
import { useParams } from "react-router-dom"; // Importing useParams for route parameters
import { LoadFormData } from "../store/ProjectSlice"; // Importing the action to load form data

function WhyUs() {
  const dispatch = useDispatch(); // Initializing the dispatch function
  const formData = useSelector((state) => state.project.formData.form3); // Selecting form data from the Redux store
  const { projectId } = useParams(); // Getting projectId from URL parameters

  // useEffect to load form data when projectId changes
  useEffect(() => {
    if (projectId) {
      dispatch(LoadFormData(projectId)); // Dispatching action to load form data
    }
  }, [projectId, dispatch]);

  return (
    <div>
      <section className="bg-gray-100 py-12 p-5 md:p-15 lg:p-20">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-2">
            {formData.sectionTitle || "Why Choose Us?"} {/* Section title */}
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div> {/* Underline for the title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Each service item */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#48A0DC]">
                {formData.subtitleOne || "Expert Team"} {/* Subtitle with fallback */}
              </h3>
              <p className="text-gray-700">
                {formData.textAreaOne || "Default description goes here."} {/* Description with fallback */}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#48A0DC]">
                {formData.subtitleTwo || "Client-Focused Approach"} {/* Subtitle with fallback */}
              </h3>
              <p className="text-gray-700">
                {formData.textAreaTwo || "Default description goes here."} {/* Description with fallback */}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#48A0DC]">
                {formData.subtitleThree || "Quality Materials"} {/* Subtitle with fallback */}
              </h3>
              <p className="text-gray-700">
                {formData.textAreaThree || "Default description goes here."} {/* Description with fallback */}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#48A0DC]">
                {formData.subtitleFour || "Transparent Pricing"} {/* Subtitle with fallback */}
              </h3>
              <p className="text-gray-700">
                {formData.textAreaFour || "Default description goes here."} {/* Description with fallback */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyUs; // Exporting the component for use in other parts of the application
