import useFormData from "../hooks/useFormData"; // Importing custom hook to get form data
import imageOne from "../assets/imageOne.png"; // Default images for services
import imageTwo from "../assets/imageTwo.png";
import imageThree from "../assets/imageThree.png";
import imageFour from "../assets/imageFour.png";

function Services() {
  const { formData } = useFormData("form4"); // Using the custom hook to get form data for "form4"

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-300 p-6 md:p-14">
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">
            {formData.sectionTitle || "Our Services"} {/* Title from formData or fallback */}
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div> {/* Underline for the title */}

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5">
            {/* Service Item 1 */}
            <div className="flex gap-5 flex-col md:flex-row lg:flex-col bg-gray-100 p-6 rounded-lg shadow-md ">
              <img
                src={formData.firstImage || imageOne} // First service image from formData or default
                alt="Residential Construction"
                className="rounded-t-lg w-full md:w-1/2 lg:w-full"
              />
              <div className="flex justify-center flex-col">
                <h3 className="text-2xl font-semibold mb-4">
                  {formData.subtitleOne || "Residential Construction"} {/* Subtitle from formData or fallback */}
                </h3>
                <p className="text-gray-700">
                  {formData.textAreaOne || "Default description goes here."} {/* Description from formData or fallback */}
                </p>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="flex flex-col sm:flex-col-reverse lg:flex-col-reverse md:flex-row gap-5 bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex justify-center flex-col">
                <h3 className="text-2xl font-semibold mb-4">
                  {formData.subtitleTwo || "Commercial Construction"} {/* Subtitle from formData or fallback */}
                </h3>
                <p className="text-gray-700">
                  {formData.textAreaTwo || "Default description goes here."} {/* Description from formData or fallback */}
                </p>
              </div>
              <img
                src={formData.secondImage || imageTwo} // Second service image
                alt="Commercial Construction"
                className="rounded-t-lg mb-4 w-full md:w-1/2 lg:w-full"
              />
            </div>

            {/* Service Item 3 */}
            <div className="flex flex-col lg:flex-col md:flex-row gap-5 bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src={formData.thirdImage || imageThree} // Third service image
                alt="Renovation and Remodeling"
                className="rounded-t-lg w-full mb-4 md:w-1/2 lg:w-full"
              />
              <div className="flex justify-center flex-col">
                <h3 className="text-2xl font-semibold mb-4">
                  {formData.subtitleThree || "Renovation & Remodeling"} {/* Subtitle from formData or fallback */}
                </h3>
                <p className="text-gray-700">
                  {formData.textAreaThree || "Default description goes here."} {/* Description from formData or fallback */}
                </p>
              </div>
            </div>

            {/* Service Item 4 */}
            <div className="flex flex-col sm:flex-col-reverse lg:flex-col-reverse md:flex-row gap-5 bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex justify-center flex-col">
                <h3 className="text-2xl font-semibold mb-4">
                  {formData.subtitleFour || "Custom Builds"} {/* Subtitle from formData or fallback */}
                </h3>
                <p className="text-gray-700">
                  {formData.textAreaFour || "Default description goes here."} {/* Description from formData or fallback */}
                </p>
              </div>
              <img
                src={formData.fourthImage || imageFour} // Fourth service image
                alt="Custom Builds"
                className="rounded-t-lg w-full mb-4 md:w-1/2 lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services; // Exporting the Services component for use in other parts of the application
