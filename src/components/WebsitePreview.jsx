import React from "react"; // Importing React
import ReactDOM from "react-dom/client"; // Importing ReactDOM for rendering components
import { Provider } from "react-redux"; // Importing Provider for Redux
import store from "../store/store"; // Importing the Redux store
import WebsiteGeneratorEditor from "../pages/WebsiteGeneratorEditor"; // Importing the main editor component

function WebsitePreview() {
  // Function to handle the website preview
  const handlePreview = () => {
    // Opening a new window for the website preview
    const newWindow = window.open("", "_blank", "width=800,height=600");

    // Writing the basic HTML structure for the new window
    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Website Preview</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap">
        <style>
          /* Basic styling for the editor page */
          .editorPage {
            margin: 0;
            padding: 0;
          }
          /* Navbar styling */
          .navBar {
            background: #001A57; /* Dark blue background */
            position: fixed; /* Fixes the navbar at the top */
            top: 0;
            left: 0;
            width: 100%; /* Full width */
            z-index: 50; /* Keeps the navbar above other elements */
          }
          /* Heading styles */
          h1, h2, h3 {
            font-family: "Barlow Condensed", sans-serif; /* Custom font */
            font-weight: 900; /* Bold weight */
          }
          /* List item styles */
          li {
            font-family: "Barlow Condensed", sans-serif;
            font-weight: 400; /* Regular weight */
            font-size: 15px; /* Font size */
            line-height: 21px; /* Line height */
          }
          .logo {
            width: 100px; /* Logo width */
          }
          /* Home section background image */
          .home {
            font-family: "Lato", sans-serif; /* Font for the home section */
            background-image: url(../assets/coverImage.png); /* Background image */
            background-size: cover; /* Cover the whole section */
            background-position: center; /* Center the image */
          }
          /* Paragraph styling */
          p {
            font-family: "Lato", sans-serif;
            font-weight: 300; /* Light weight */
          }
          /* Button styling */
          button {
            font-family: "Lato", sans-serif;
            font-weight: 400; /* Regular weight */
          }
          /* About Us photo width */
          .aboutUsPhoto {
            width: 400px; /* Width for the about us photo */
          }
          /* Margin for text group */
          .textGroup {
            margin-top: 50px; /* Top margin */
          }
          /* About Us section background */
          #about-us {
            background: #FFF8E1; /* Light background */
          }
        </style>
      </head>
      <body>
        <div id="root"></div> <!-- Placeholder for React app -->
      </body>
      </html>
    `);

    // Closing the document to finalize the HTML
    newWindow.document.close();

    // On window load, render the React app into the new window
    newWindow.onload = () => {
      const rootElement = newWindow.document.getElementById("root"); // Getting the root element

      if (rootElement) {
        const root = ReactDOM.createRoot(rootElement); // Creating a root for ReactDOM
        root.render(
          <Provider store={store}> {/* Providing the Redux store */}
            <WebsiteGeneratorEditor /> {/* Rendering the WebsiteGeneratorEditor component */}
          </Provider>
        );
      }
    };
  };

  return (
    // Button to trigger the preview functionality
    <button
      className="bg-gradient-to-r from-gray-800 to-green-900 text-white py-2 text-center transform transition-transform duration-300 hover:scale-105 hover:bg-green-900 hover:text-yellow-200" // Button styling
      onClick={handlePreview} // Triggering the preview on click
    >
      Preview Website
    </button>
  );
}

export default WebsitePreview; // Exporting the component for use in other files
