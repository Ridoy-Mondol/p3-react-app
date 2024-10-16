// Importing necessary assets and libraries
import coverImage from "../assets/coverImage.png";
import aboutUsPhoto from "../assets/aboutUsPhoto.png";
import imageOne from "../assets/imageOne.png";
import imageTwo from "../assets/imageTwo.png";
import imageThree from "../assets/imageThree.png";
import imageFour from "../assets/imageFour.png";
import companyLogo from "../assets/companyLogo.svg";
import { createSlice } from "@reduxjs/toolkit";
import { saveFormData, getFormDataById } from "../indexDB/Dexie"; // Importing functions to interact with IndexedDB

// Initial state for the project forms
const initialState = {
  projectId: null,
  formData: {
    form1: {
      title: "Welcome to Liceria Construction, Let's Build the Future, Together",
      description:
        "Expertise and innovation in every build. Whether it’s residential, commercial, or industrial, we ensure precision, transparency, and satisfaction. Start your project with us today",
      buttonText: "Get Started",
      backgroundImage: coverImage,
    },
    form2: {
      title: "About Us",
      description: "Our Commitment to Excellence",
      textParagraphOne:
        "At BuildPro Solutions, we are committed to turning your construction dreams into reality. With years of experience in the industry, we specialize in delivering high-quality residential, commercial, and industrial projects. Our team of experts combines innovative design with reliable craftsmanship to create spaces that inspire and endure.",
      textParagraphTwo:
        "We take pride in our client-focused approach, ensuring transparency, precision, and satisfaction at every step. From new builds to renovations, we provide tailored solutions that meet your needs, budget, and timeline.",
      backgroundImage: aboutUsPhoto,
    },
    form3: {
      sectionTitle: "Why Choose Us?",
      subtitleOne: "Expert Team",
      textAreaOne:
        "Our skilled professionals bring years of experience, creativity, and innovation to every project, ensuring top-notch quality and timely delivery.",
      subtitleTwo: "Client-Focused Approach",
      textAreaTwo:
        "Your satisfaction is our top priority. We work closely with you to understand your goals, budget, and timeline, offering personalized solutions for your project.",
      subtitleThree: "Quality Materials",
      textAreaThree:
        "We use the best materials to ensure durability, sustainability, and safety. Our focus is on creating long-lasting structures that stand the test of time.",
      subtitleFour: "Transparent Pricing",
      textAreaFour:
        "No hidden fees or surprises. We offer clear, competitive pricing and keep you informed every step of the way.",
    },
    form4: {
      sectionTitle: "Our Services",
      subtitleOne: "Residential Construction",
      textAreaOne:
        "We create homes that reflect your personality and meet your family’s needs. From design to final touches, we handle each detail with precision.",
      firstImage: imageOne,
      subtitleTwo: "Commercial Construction",
      textAreaTwo:
        "We design and build commercial spaces that combine aesthetics, functionality, and efficiency, whether it’s an office, retail store, or large facility.",
      secondImage: imageTwo,
      subtitleThree: "Renovation & Remodeling",
      textAreaThree:
        "Our team breathes new life into existing spaces, delivering modern, beautiful, and functional transformations for any environment.",
      thirdImage: imageThree,
      subtitleFour: "Custom Builds",
      textAreaFour:
        "Have a unique vision? We’ll make it happen, with custom-built solutions that exceed expectations, from start to finish.",
      fourthImage: imageFour,
    },
    form5: {
      title: "Our Projects – Turning Vision into Reality",
      imageOne: imageOne,
      projectNameOne: "Residential Projects",
      imageTwo: imageTwo,
      projectNameTwo: "Building Projects",
      imageThree: imageThree,
      projectNameThree: "Renovations",
      imageFour: imageFour,
      projectNameFour: "Planning",
      imageFive: coverImage,
      projectNameFive: "High Constructions",
    },
    form6: {
      title: "Get In Touch",
      phoneNumber: "+152 534-468-854",
      emailAdd: "contact@example.com",
      location: "C/54 Northwest Freeway, Suite 558, Houston, Usa 485",
    },
    form7: {
      listOne: "HOME",
      listTwo: "ABOUT US",
      listThree: "SERVICES",
      listFour: "WHY US",
      listFive: "PROJECTS",
      listSix: "CONTACT US",
      logoOne: companyLogo,
    },
  },
};

// Creating a Redux slice for managing project data
const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    // Action to set the current project ID
    setProjectId: (state, action) => {
      state.projectId = action.payload;
    },
    // Action to update a specific form field
    updateFormField: (state, action) => {
      const { formName, field, value, index } = action.payload;
      if (index !== undefined) {
        // If an index is provided, update the specific index in an array
        const updatedArray = [...state.formData[formName][field]];
        updatedArray[index] = value;
        state.formData[formName][field] = updatedArray;
      } else {
        // Otherwise, update the field directly
        state.formData[formName][field] = value;
      }
    },
    // Action to set multiple form data fields at once
    setFormData: (state, action) => {
      const { formName, data } = action.payload;
      state.formData[formName] = {
        ...state.formData[formName],
        ...data,
      };
    },
    // Action to clear the current project data
    clearProject: (state) => {
      state.projectId = null;
      state.formData = initialState.formData; // Reset to the initial state
    },
  },
});

// Async actions for data fetching and saving
// Action to load form data from IndexedDB based on project ID
export const LoadFormData = (projectId) => async (dispatch) => {
  try {
    const data = await getFormDataById(projectId); // Fetch data from IndexedDB
    if (data) {
      dispatch(setFormData({ formName: 'form4', data })); // Update Redux state with retrieved data
      console.log("Data fetched from IndexedDB:", data);
    } else {
      console.log("No data found for the project");
    }
  } catch (error) {
    console.error("Failed to load form data:", error); // Log errors if data loading fails
  }
};

// Action to save form data to IndexedDB
export const SaveFormDataToDB = (projectId, formData) => async () => {
  try {
    await saveFormData(projectId, formData); // Save the form data to IndexedDB
  } catch (error) {
    console.error("Failed to save form data:", error); // Log errors if saving fails
  }
};

// Exporting actions for use in components
export const { setProjectId, updateFormField, setFormData, clearProject } = projectSlice.actions;

// Exporting the reducer to be used in the store
export default projectSlice.reducer;
