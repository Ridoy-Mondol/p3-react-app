// This is the previous form field with no validation.If you don't want input field data to your email, then you can uncomment the code below and use it.

// import emailIcon from "../assets/emailICon.svg"; // Importing the email icon SVG
// import addressLocation from "../assets/addressLocation.svg"; // Importing the address location icon SVG
// import pinMap from "../assets/pinMap.svg"; // Importing the pin map icon SVG
// import "../styles/WebsiteGeneratorEditor.css"; // Importing the CSS styles for the component

// import useFormData from "../hooks/useFormData"; // Importing custom hook to manage form data

// function ContactUs() {
//   // Using the custom hook to retrieve form data for 'form6'
//   const { formData } = useFormData("form6");

//   return (
//     <section className="bg-gradient-to-b from-blue-800 to-blue-950 py-12 text-white p-2 md:p-15 lg:p-20">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex flex-wrap">
//           <div className="w-full md:w-1/2 sm:w-full mb-8 md:mb-0">
//             <h2 className="text-4xl font-semibold mb-10">
//               {formData.title || "Contact Us"} {/* Displaying the title from formData or a default */}
//             </h2>

//             <div className="flex flex-row mb-4 gap-4 md:w-1/2">
//               <img
//                 src={addressLocation} // Displaying the address location icon
//                 alt="Company Phone Icon"
//                 className="w-12"
//               />
//               <div>
//                 <h3 className="text-lg font-medium">Phone</h3>
//                 <p className="text-white">
//                   {formData.phoneNumber || "+1921-9000-500"} {/* Displaying phone number from formData or a default */}
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-row mb-4 gap-4">
//               <img src={emailIcon} alt="Email Icon" className="w-12" /> {/* Displaying the email icon */}
//               <div>
//                 <h3 className="text-lg font-medium">Email</h3>
//                 <p className="text-white">
//                   {formData.emailAdd || "max.mustermann@max.com"} {/* Displaying email from formData or a default */}
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-row gap-4 mb-4">
//               <img src={pinMap} alt="Location" className="w-12" /> {/* Displaying the pin map icon */}
//               <div>
//                 <h3 className="text-lg font-medium">Location</h3>
//                 <p className="text-white mr-2">
//                   {formData.location ||
//                     "C/54 Northwest Freeway, Suite 558, Houston, Usa 485"} {/* Displaying location from formData or a default */}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="w-full md:w-1/2 sm:w-full bg-gradient-to-r from-blue-50 to-blue-300 p-8 rounded-lg shadow-lg">
//             <form>
//               <div className="flex flex-wrap -mx-3 mb-6">
//                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                   <label
//                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                     htmlFor="name"
//                   >
//                     Name
//                   </label>
//                   <input
//                     className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
//                     id="name"
//                     type="text"
//                     placeholder="Your name" // Placeholder for the name input field
//                   />
//                 </div>

//                 <div className="w-full md:w-1/2 px-3">
//                   <label
//                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                     htmlFor="email"
//                   >
//                     Email
//                   </label>
//                   <input
//                     className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
//                     id="email"
//                     type="email"
//                     placeholder="Your email" // Placeholder for the email input field
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="subject"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
//                   id="subject"
//                   type="text"
//                   placeholder="Subject" // Placeholder for the subject input field
//                 />
//               </div>

//               <div className="mb-6">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="message"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 h-48"
//                   id="message"
//                   placeholder="Write your message" // Placeholder for the message textarea
//                 ></textarea>
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="submit" // Submit button for the form
//                   className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactUs; // Exporting the ContactUs component for use in other parts of the application





// This is the updated form field with necessary validation. If you want input field data to your email, then you can use this. you need to change the form action "formspree endpoint goes here" to your own endpoint in line no. 215. If you don't want input field data to your email, then you can uncomment the above code and use that.
import React, { useState } from "react";
import emailIcon from "../assets/emailICon.svg"; // Import email icon image
import addressLocation from "../assets/addressLocation.svg"; // Import address location icon image
import pinMap from "../assets/pinMap.svg"; // Import pin map icon image
import "../styles/WebsiteGeneratorEditor.css"; // Import custom styles for the component
import useFormData from "../hooks/useFormData"; // Custom hook to manage form data for dynamic content

function ContactUs() {
  const { formData } = useFormData("form6"); // Using a custom hook to get form data dynamically

  // useState hook to manage the form's input field values (name, email, subject, and message)
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // This function handles input changes for all form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Get the name and value of the changed input field
    setFormValues({ ...formValues, [name]: value }); // Update the form values in state
  };

  return (
    <section className="bg-gradient-to-b from-blue-800 to-blue-950 py-12 text-white p-2 md:p-15 lg:p-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap">

          {/* Left section with company information like phone, email, and location */}
          <div className="w-full md:w-1/2 sm:w-full mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold mb-10">
              {formData.title || "Contact Us"} {/* Render the form title dynamically or use default */}
            </h2>

            {/* Display company phone number */}
            <div className="flex flex-row mb-4 gap-4 md:w-1/2">
              <img src={addressLocation} alt="Company Phone Icon" className="w-12" />
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-white">
                  {formData.phoneNumber || "+1921-9000-500"} {/* Dynamic phone number or default */}
                </p>
              </div>
            </div>

            {/* Display company email */}
            <div className="flex flex-row mb-4 gap-4">
              <img src={emailIcon} alt="Email Icon" className="w-12" />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-white">
                  {formData.emailAdd || "max.mustermann@max.com"} {/* Dynamic email address or default */}
                </p>
              </div>
            </div>

            {/* Display company location */}
            <div className="flex flex-row gap-4 mb-4">
              <img src={pinMap} alt="Location" className="w-12" />
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-white mr-2">
                  {formData.location || "C/54 Northwest Freeway, Suite 558, Houston, USA 485"} {/* Dynamic location */}
                </p>
              </div>
            </div>
          </div>

          {/* Right section with the contact form */}
          <div className="w-full md:w-1/2 sm:w-full bg-gradient-to-r from-blue-50 to-blue-300 p-8 rounded-lg shadow-lg">
            {/* Form submission is handled by formspree.io, a form handling service */}
            <form action="https://formspree.io/f/xkndrzjn" method="POST">
              
              {/* First row: Name and Email input fields */}
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                    id="name"
                    name="name"
                    type="text"
                    required="required" // Required input field
                    value={formValues.name} // Controlled input using formValues state
                    onChange={handleInputChange} // Update state on input change
                    placeholder="Your name"
                  />
                </div>

                {/* Email input field */}
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                    id="email"
                    name="email"
                    type="email"
                    required="required" // Required input field
                    value={formValues.email} // Controlled input using formValues state
                    onChange={handleInputChange} // Update state on input change
                    placeholder="Your email"
                  />
                </div>
              </div>

              {/* Subject input field */}
              <div className="mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                  id="subject"
                  name="subject"
                  type="text"
                  required="required" // Required input field
                  value={formValues.subject} // Controlled input using formValues state
                  onChange={handleInputChange} // Update state on input change
                  placeholder="Subject"
                />
              </div>

              {/* Message input field (textarea) */}
              <div className="mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 h-48"
                  id="message"
                  name="message"
                  required="required" // Required textarea field
                  value={formValues.message} // Controlled textarea using formValues state
                  onChange={handleInputChange} // Update state on input change
                  placeholder="Write your message"
                ></textarea>
              </div>

              {/* Submit button to send the form */}
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
