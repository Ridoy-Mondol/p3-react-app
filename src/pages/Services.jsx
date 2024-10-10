import useFormData from "../hooks/useFormData";
import imageOne from "../assets/imageOne.png";
import imageTwo from "../assets/imageTwo.png";
import imageThree from "../assets/imageThree.png";
import imageFour from "../assets/imageFour.png";

function Services() {
  const { formData } =useFormData("form4");

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-300 p-6 md:p-14">
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">
            {formData.sectionTitle || "Our Services"}
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-7 gap-5">
            <div className="flex gap-5 flex-col md:flex-row lg:flex-col bg-gray-100 p-6 rounded-lg shadow-md ">
              <img
                src={formData.firstImage || imageOne}
                alt="Residential Construction"
                className="rounded-t-lg w-full md:w-1/2 lg:w-full"
              />
              <div className="flex justify-center flex-col">
                <h3 className="text-2xl font-semibold mb-4">
                  {formData.subtitleOne || "Residential Construction"}{" "}
                </h3>
                <p className="text-gray-700">
                  {formData.textAreaOne || "Default description goes here."}{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-col-reverse lg:flex-col-reverse md:flex-row gap-5 bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex justify-center flex-col">
                <h3 className="text-2xl font-semibold mb-4">
                  {formData.subtitleTwo || "Default description goes here."}{" "}
                </h3>
                <p className="text-gray-700">
                  {formData.textAreaTwo || "Default description goes here."}{" "}
                </p>
              </div>
              <img
                src={formData.secondImage || imageTwo}
                alt="Commercial Construction"
                className="rounded-t-lg mb-4 w-full md:w-1/2 lg:w-full"
              />
            </div>

            <div className="flex flex-col lg:flex-col md:flex-row gap-5 bg-gray-100 p-6 rounded-lg shadow-md">
              <img
                src={formData.thirdImage || imageThree}
                alt="Renovation and Remodeling"
                className="rounded-t-lg w-full mb-4 md:w-1/2 lg:w-full"
              />
              <div className="flex justify-center flex-col">
                <h3 className="text-2xl font-semibold mb-4">
                  {formData.subtitleThree || "Renovation & Remodeling"}{" "}
                </h3>
                <p className="text-gray-700">
                  {formData.textAreaThree || "Default description goes here."}{" "}
                </p>
              </div>
            </div>

            <div className=" flex flex-col sm:flex-col-reverse lg:flex-col-reverse md:flex-row gap-5 bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex justify-center flex-col">
                <h3 className="text-2xl font-semibold mb-4">
                  {formData.subtitleFour || "Custom Builds"}{" "}
                </h3>
                <p className="text-gray-700">
                  {formData.textAreaFour || "Default description goes here."}{" "}
                </p>
              </div>
              <img
                src={formData.fourthImage || imageFour}
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

export default Services;
