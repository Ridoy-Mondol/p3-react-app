import React from 'react'; // Importing React
import imageOne from "../assets/imageOne.png"; // Importing images for the project
import imageTwo from "../assets/imageTwo.png";
import imageThree from "../assets/imageThree.png";
import imageFour from "../assets/imageFour.png";
import coverImage from "../assets/coverImage.png";
import "../styles/WebsiteGeneratorEditor.css"; // Importing CSS styles for the component
import useFormData from "../hooks/useFormData"; // Custom hook to retrieve form data

function Projects() {
  const { formData } = useFormData("form5"); // Using the custom hook to get form data

  return (
    <div className="bg-white max-w-7xl mx-auto px-4 py-8 p-20">
      <h2 className="text-center text-4xl font-bold mb-2 mt-6">
        {formData.title || "Our Projects – Turning Vision into Reality"} {/* Title from formData or fallback */}
      </h2>
      <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div> {/* Underline for the title */}

      <div className="flex flex-col gap-4 p-5 ">
        {/* First row of project items */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-3">
          <div className="relative group bg-purple-200 h-64 rounded-lg shadow-lg flex justify-center items-center w-full md:w-1/2 lg:w-1/2">
            <img
              src={formData.imageOne || imageOne} // Project image from formData or default
              alt="Portfolio Item 1"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-xl font-semibold">
                {formData.projectNameOne || "Residential Project"} {/* Project name from formData or fallback */}
              </p>
            </div>
          </div>

          <div className="relative group bg-pink-200 h-64 rounded-lg shadow-lg flex justify-center items-center w-full md:w-1/2 lg:w-1/2">
            <img
              src={formData.imageTwo || imageTwo} // Second project image
              alt="Portfolio Item 2"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-xl font-semibold">
                {formData.projectNameTwo || "Second Project"}
              </p>
            </div>
          </div>
        </div>

        {/* Second row of project items */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-3 ">
          <div className="relative group bg-purple-200 h-64 rounded-lg shadow-lg flex justify-center items-center w-full md:w-1/3 lg:w-1/3 ">
            <img
              src={formData.imageThree || imageThree} // Third project image
              alt="Portfolio Item 3"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-xl font-semibold">
                {formData.projectNameThree || "Renovations"}
              </p>
            </div>
          </div>

          <div className="relative group bg-pink-200 h-64 rounded-lg shadow-lg flex justify-center items-center w-full md:w-1/3 lg:w-1/3 ">
            <img
              src={formData.imageFour || imageFour} // Fourth project image
              alt="Portfolio Item 4"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-xl font-semibold">
                {formData.projectNameFour || "Planning"}
              </p>
            </div>
          </div>

          <div className="relative group bg-purple-200 h-64 rounded-lg shadow-lg flex justify-center items-center w-full md:w-1/3 lg:w-1/3 ">
            <img
              src={formData.imageFive || coverImage} // Fifth project image
              alt="Portfolio Item 5"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-xl font-semibold">
                {formData.projectNameFive || "Construction Projects"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects; // Exporting the Projects component for use in other parts of the application
