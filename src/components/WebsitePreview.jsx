// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "../store/store"; // Import your Redux store
// import WebsiteGeneratorEditor from "../pages/WebsiteGeneratorEditor"; // Import the editor component

// function WebsitePreview() {
//   const handlePreview = () => {
//     // Open a new blank window (new tab)
//     const newWindow = window.open("", "_blank", "width=800,height=600");

//     // Add basic HTML structure for the new tab
//     newWindow.document.write(`
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Website Preview</title>
//         <script src="https://cdn.tailwindcss.com"></script>
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap">
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap">
//         <style>
//           .editorPage {
//             margin: 0;
//             padding: 0;
//           }
//           .navBar {
//             background: #001A57;
//             position: fixed; /* Makes the navBar fixed in the preview */
//             top: 0;
//             left: 0;
//             width: 100%;
//             z-index: 50;
//           }
//           h1, h2, h3 {
//             font-family: "Barlow Condensed", sans-serif;
//             font-weight: 900;
//             font-style: normal;
//           }
//           li {
//             font-family: "Barlow Condensed", sans-serif;
//             font-weight: 400;
//             font-size: 15px;
//             line-height: 21px;
//           }
//           .logo {
//             width: 100px;
//           }
//           .home {
//             font-family: "Lato", sans-serif;
//             background-image: url(../assets/coverImage.png);
//             background-size: cover;
//             background-position: center;
//           }
//           p {
//             font-family: "Lato", sans-serif;
//             font-weight: 300;
//             font-style: normal;
//           }
//           button {
//             font-family: "Lato", sans-serif;
//             font-weight: 400;
//             font-style: normal;
//           }
//           .aboutUsPhoto {
//             width: 400px;
//           }

//           .textGroup {
//           margin-top: 50px;
//           }

//           #about-us {
//           background: #FFF8E1;
//           }
//         </style>
//       </head>
//       <body>
//         <div id="root"></div>
//       </body>
//       </html>
//     `);

//     newWindow.document.close();

//     // Render the WebsiteGeneratorEditor component in the new window/tab
//     const rootElement = newWindow.document.getElementById("root");

//     // Use ReactDOM to render in the new tab
//     /* const root = ReactDOM.createRoot(rootElement);
//     root.render(
//       <Provider store={store}>
//         <WebsiteGeneratorEditor />
//       </Provider>
//     ); */

//     if (rootElement) {
//       const root = ReactDOM.createRoot(rootElement);
//       root.render(
//         <Provider store={store}>
//           <WebsiteGeneratorEditor />
//         </Provider>
//       );
//     }
//   };

//   return (
//     <button
//       className="bg-gradient-to-r from-gray-800 to-green-900 w- text-white py-2 text-center transform transition-transform duration-300 hover:scale-105 hover:bg-green-900 hover:text-yellow-200"
//       onClick={handlePreview}
//     >
//       Preview Website
//     </button>
//   );
// }

// export default WebsitePreview;











import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "../store/store"; 
import WebsiteGeneratorEditor from "../pages/WebsiteGeneratorEditor";

function WebsitePreview() {
  const handlePreview = () => {
    const newWindow = window.open("", "_blank", "width=800,height=600");

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
          .editorPage {
            margin: 0;
            padding: 0;
          }
          .navBar {
            background: #001A57;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 50;
          }
          h1, h2, h3 {
            font-family: "Barlow Condensed", sans-serif;
            font-weight: 900;
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
            background-image: url(../assets/coverImage.png);
            background-size: cover;
            background-position: center;
          }
          p {
            font-family: "Lato", sans-serif;
            font-weight: 300;
          }
          button {
            font-family: "Lato", sans-serif;
            font-weight: 400;
          }
          .aboutUsPhoto {
            width: 400px;
          }
          .textGroup {
            margin-top: 50px;
          }
          #about-us {
            background: #FFF8E1;
          }
        </style>
      </head>
      <body>
        <div id="root"></div>
      </body>
      </html>
    `);

    newWindow.document.close();

    newWindow.onload = () => {
      const rootElement = newWindow.document.getElementById("root");

      if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);
        root.render(
          <Provider store={store}>
            <WebsiteGeneratorEditor />
          </Provider>
        );
      }
    };
  };

  return (
    <button
      className="bg-gradient-to-r from-gray-800 to-green-900 text-white py-2 text-center transform transition-transform duration-300 hover:scale-105 hover:bg-green-900 hover:text-yellow-200"
      onClick={handlePreview}
    >
      Preview Website
    </button>
  );
}

export default WebsitePreview;


