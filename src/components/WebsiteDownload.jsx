import React from "react"; // Importing React
import { renderToString } from "react-dom/server.browser"; // Importing renderToString for server-side rendering in React 18
import JSZip from "jszip"; // Importing JSZip to create zip files
import { saveAs } from "file-saver"; // Importing file-saver to save files on the client side
import { useSelector } from "react-redux"; // Importing useSelector to access Redux store state
import { Provider } from "react-redux"; // Importing Provider to give access to the Redux store
import store from "../store/store"; // Importing the Redux store
import WebsiteGeneratorEditor from "../pages/WebsiteGeneratorEditor"; // Importing the main editor component

// Importing static icon assets
import addressLocation from "../assets/addressLocation.svg";
import pinMap from "../assets/pinMap.svg";
import emailIcon from "../assets/emailIcon.svg";

function WebsiteDownload() {
  // Extract images from various forms using Redux
  const form1Images = useSelector((state) =>
    [state.form.form1.backgroundImage].filter(Boolean) // Filtering out any undefined or null values
  );

  const form2Images = useSelector((state) =>
    [state.form.form2.backgroundImage].filter(Boolean) // Same as above for form2
  );

  const form4Images = useSelector((state) =>
    [
      state.form.form4.firstImage,
      state.form.form4.secondImage,
      state.form.form4.thirdImage,
      state.form.form4.fourthImage,
    ].filter(Boolean) // Filtering images for form4
  );

  const form5Images = useSelector((state) =>
    [
      state.form.form5.imageOne,
      state.form.form5.imageTwo,
      state.form.form5.imageThree,
      state.form.form5.imageFour,
      state.form.form5.imageFive,
    ].filter(Boolean) // Filtering images for form5
  );

  const form7Images = useSelector((state) =>
    [state.form.form7.logoOne].filter(Boolean) // Filtering images for form7
  );

  // Static icons to include in the download
  const staticIcons = [
    { url: addressLocation, name: "addressLocation.svg" },
    { url: pinMap, name: "pinMap.svg" },
    { url: emailIcon, name: "emailIcon.svg" },
  ];

  // Function to handle the download of the website as a zip file
  const handleDownload = async () => {
    const zip = new JSZip(); // Creating a new instance of JSZip
    const imgFolder = zip.folder("images"); // Creating a folder for images in the zip

    // Render the main website component to HTML string
    const staticHTML = renderToString(
      <Provider store={store}> {/* Providing Redux store to the component */}
        <WebsiteGeneratorEditor /> {/* Rendering the WebsiteGeneratorEditor */}
      </Provider>
    );

    // Combine images from all forms into an array
    const allImages = [
      ...form1Images.map((url, index) => ({ url, name: `form1Image${index + 1}.png` })),
      ...form2Images.map((url, index) => ({ url, name: `form2Image${index + 1}.png` })),
      ...form4Images.map((url, index) => ({ url, name: `form4Image${index + 1}.png` })),
      ...form5Images.map((url, index) => ({ url, name: `form5Image${index + 1}.png` })),
      ...form7Images.map((url, index) => ({ url, name: `form7Image${index + 1}.png` })),
    ];

    let imageHtmlEntries = ""; // To hold HTML for images
    let updatedStaticHTML = staticHTML; // Copy of the static HTML for modifications

    // Fetching static icons and adding them to the zip and HTML
    for (let i = 0; i < staticIcons.length; i++) {
      const { url, name } = staticIcons[i];
      const response = await fetch(url); // Fetching the icon

      if (response.ok) {
        const blob = await response.blob(); // Converting the response to a Blob
        imgFolder.file(name, blob); // Adding the icon to the images folder in the zip
        const newIconPath = `./images/${name}`; // New path for the icon in HTML
        updatedStaticHTML = updatedStaticHTML.replace(url, newIconPath); // Updating HTML with the new icon path
      } else {
        console.error(`Failed to fetch icon ${name}:`, response.statusText); // Error handling for icon fetch
      }
    }

    // Fetch and add each image to the ZIP and update the HTML
    for (let i = 0; i < allImages.length; i++) {
      const { url, name } = allImages[i];
      const response = await fetch(url); // Fetching the image

      if (response.ok) {
        const blob = await response.blob(); // Converting the response to a Blob
        imgFolder.file(name, blob); // Adding the image to the images folder in the zip

        // Updating HTML with the new image path
        const newImagePath = `./images/${name}`;
        updatedStaticHTML = updatedStaticHTML.replace(url, newImagePath); // Updating HTML with the new image path

        // Optional: Creating HTML entries for images
        imageHtmlEntries += `
          <div class="image-container">
            <img src="${newImagePath}" alt="Uploaded Image ${i + 1}" />
          </div>
        `;
      } else {
        console.error(`Failed to fetch image ${i + 1}:`, response.statusText); // Error handling for image fetch
      }
    }

    // Creating the full HTML file content
    const fullHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Website Preview</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900&display=swap">
        <style>
          .editorPage {
            margin: 0;
            padding: 0;
          }
          .navBar {
            background: #001A57;
            position: fixed; /* Makes the navBar fixed in the preview */
            top: 0;
            left: 0;
            width: 100%;
            z-index: 50;
          }
          h1, h2, h3 {
            font-family: "Barlow Condensed", sans-serif;
            font-weight: 900;
            font-style: normal;
          }
          li {
            font-family: "Barlow Condensed", sans-serif;
            font-weight: 400;
            font-size: 15px;
            line-height: 21px;
          }
          .logo {
            width: 100px;
          }
          .home {
            font-family: "Lato", sans-serif;
            background-size: cover;
            background-position: center;
            height: 100vh;
          }
          p {
            font-family: "Lato", sans-serif;
            font-weight: 300;
            font-style: normal;
          }
          button {
            font-family: "Lato", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
          .aboutUsPhoto {
            width: 600px;
          }
          #about-us {
            background: #FFF8E1;
          }
        </style>
      </head>
      <body>
        ${updatedStaticHTML} <!-- The static HTML from your React component -->

        <script>
          // JavaScript for handling mobile navigation
          document.addEventListener("DOMContentLoaded", function () {
            const hamburgerIcon = document.querySelector('.md\\\\:hidden');
            const menu = document.querySelector('nav ul');

            hamburgerIcon.addEventListener('click', function () {
              menu.classList.toggle('hidden');
            });

            window.addEventListener('resize', function () {
              if (window.innerWidth >= 768) {
                menu.classList.remove('hidden');
              } else {
                menu.classList.add('hidden');
              }
            });
          });
        </script>
      </body>
      </html>
    `;

    // Adding the HTML file to the zip
    zip.file("index.html", fullHTML);

    // Generating the zip file and prompting the user to download it
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "website-preview.zip"); // Saving the zip file with a specified name
    });
  };

  return (
    // Button to trigger the download
    <button
      className="bg-gradient-to-r from-gray-800 to-green-900 w- text-white py-2 text-center transform transition-transform duration-300 hover:scale-105 hover:bg-green-900 rounded-md shadow-md"
      onClick={handleDownload} // Triggering download on button click
    >
      Download Website
    </button>
  );
}

export default WebsiteDownload; // Exporting the component for use in other files
