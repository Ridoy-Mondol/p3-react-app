import React from "react";
import { renderToString } from "react-dom/server.browser"; // For React 18 in the browser
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "../store/store"; // Import your Redux store
import WebsiteGeneratorEditor from "../pages/WebsiteGeneratorEditor";

import addressLocation from "../assets/addressLocation.svg";
import pinMap from "../assets/pinMap.svg";
import emailIcon from "../assets/emailICon.svg";

function WebsiteDownload() {
  // Extract images from form1, form2, form4, and form5
  const form1Images = useSelector((state) =>
    [state.form.form1.backgroundImage].filter(Boolean)
  );

  const form2Images = useSelector((state) =>
    [state.form.form2.backgroundImage].filter(Boolean)
  );

  const form4Images = useSelector((state) =>
    [
      state.form.form4.firstImage,
      state.form.form4.secondImage,
      state.form.form4.thirdImage,
      state.form.form4.fourthImage,
    ].filter(Boolean)
  );

  const form5Images = useSelector((state) =>
    [
      state.form.form5.imageOne,
      state.form.form5.imageTwo,
      state.form.form5.imageThree,
      state.form.form5.imageFour,
      state.form.form5.imageFive,
    ].filter(Boolean)
  );

  const form7Images = useSelector((state) =>
    [state.form.form7.logoOne].filter(Boolean)
  );

  // Static icons
  const staticIcons = [
    { url: addressLocation, name: "addressLocation.svg" },
    { url: pinMap, name: "pinMap.svg" },
    { url: emailIcon, name: "emailIcon.svg" },
  ];

  const handleDownload = async () => {
    const zip = new JSZip();
    const imgFolder = zip.folder("images");

    const staticHTML = renderToString(
      <Provider store={store}>
        <WebsiteGeneratorEditor />
      </Provider>
    );

    // Combine images from all forms
    const allImages = [
      ...form1Images.map((url, index) => ({
        url,
        name: `form1Image${index + 1}.png`,
      })),
      ...form2Images.map((url, index) => ({
        url,
        name: `form2Image${index + 1}.png`,
      })),
      ...form4Images.map((url, index) => ({
        url,
        name: `form4Image${index + 1}.png`,
      })),
      ...form5Images.map((url, index) => ({
        url,
        name: `form5Image${index + 1}.png`,
      })),
      ...form7Images.map((url, index) => ({
        url,
        name: `form7Image${index + 1}.png`,
      })),
    ];

    let imageHtmlEntries = "";
    let updatedStaticHTML = staticHTML;

    //to add the static icons
    for (let i = 0; i < staticIcons.length; i++) {
      const { url, name } = staticIcons[i];
      const response = await fetch(url);
      if (response.ok) {
        const blob = await response.blob();
        imgFolder.file(name, blob);
        const newIconPath = `./images/${name}`;
        updatedStaticHTML = updatedStaticHTML.replace(url, newIconPath);
      } else {
        console.error(`Failed to fetch icon ${name}:`, response.statusText);
      }
    }

    // Fetch and add each image to the ZIP and update HTML
    for (let i = 0; i < allImages.length; i++) {
      const { url, name } = allImages[i];
      const response = await fetch(url);

      if (response.ok) {
        const blob = await response.blob();
        imgFolder.file(name, blob); // Add each image to the images folder

        // updated html
        const newImagePath = `./images/${name}`;
        const backLash = `/\\/g, '\\\\'`;
        updatedStaticHTML = updatedStaticHTML.replace(
          url,
          newImagePath,
          backLash
        );

        // Optional
        imageHtmlEntries += `
          <div class="image-container">
            <img src="${newImagePath}" alt="Uploaded Image ${i + 1}" />
          </div>
        `;
      } else {
        console.error(`Failed to fetch image ${i + 1}:`, response.statusText);
      }
    }

    // for downloading the html
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

    //zipping the html
    zip.file("index.html", fullHTML);

    // zip file download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "website-preview.zip");
    });
  };

  return (
    <button
      className="bg-gradient-to-r from-gray-800 to-green-900 w- text-white py-2 text-center transform transition-transform duration-300 hover:scale-105 hover:bg-green-900 hover:text-yellow-200"
      onClick={handleDownload}
    >
      Download Website
    </button>
  );
}

export default WebsiteDownload;
