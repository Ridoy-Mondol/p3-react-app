import emailIcon from "../assets/emailICon.svg";
import addressLocation from "../assets/addressLocation.svg";
import pinMap from "../assets/pinMap.svg";
import "../styles/WebsiteGeneratorEditor.css";

import useFormData from "../hooks/useFormData";

function ContactUs() {
  const { formData } = useFormData("form6");

  return (
    <section className="bg-gradient-to-b from-blue-800 to-blue-950 py-12 text-white p-2 md:p-15 lg:p-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 sm:w-full mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold mb-10">
              {formData.title || "Contact Us"}
            </h2>

            <div className="flex flex-row mb-4 gap-4 md:w-1/2">
              <img
                src={addressLocation}
                alt="Company Phone Icon"
                className="w-12"
              />
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-white">
                  {formData.phoneNumber || "+1921-9000-500"}
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-4 gap-4">
              <img src={emailIcon} alt="Email Icon" className="w-12" />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-white">
                  {formData.emailAdd || "max.mustermann@max.com"}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 mb-4">
              <img src={pinMap} alt="Location" className="w-12" />
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-white mr-2">
                  {formData.location ||
                    "C/54 Northwest Freeway, Suite 558, Houston, Usa 485"}
                </p>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 sm:w-full bg-gradient-to-r from-blue-50 to-blue-300 p-8 rounded-lg shadow-lg">
            <form>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                    id="name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                    id="email"
                    type="email"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 h-48"
                  id="message"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
