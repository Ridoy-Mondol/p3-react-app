// import necessary images
import coverImage from "../assets/coverImage.png";
import aboutUsPhoto from "../assets/aboutUsPhoto.png";
import imageOne from "../assets/imageOne.png";
import imageTwo from "../assets/imageTwo.png";
import imageThree from "../assets/imageThree.png";
import imageFour from "../assets/imageFour.png";
import companyLogo from "../assets/companyLogo.svg";

// Combined initial states for all forms
const FormInitialStates = {
  // Initial state for the homepage form
  form1: {
    title: "Welcome to Liceria Construction, Let's Build the Future, Together",
    description:
      "Expertise and innovation in every build. Whether it’s residential, commercial, or industrial, we ensure precision, transparency, and satisfaction. Start your project with us today",
    buttonText: "Get Started",
    backgroundImage: coverImage,
  },
  // Initial state for the About Us form
  form2: {
    title: "About Us",
    description: "Our Commitment to Excellence",
    textParagraphOne:
      "At BuildPro Solutions, we are committed to turning your construction dreams into reality. With years of experience in the industry, we specialize in delivering high-quality residential, commercial, and industrial projects. Our team of experts combines innovative design with reliable craftsmanship to create spaces that inspire and endure.",
    textParagraphTwo:
      "We take pride in our client-focused approach, ensuring transparency, precision, and satisfaction at every step. From new builds to renovations, we provide tailored solutions that meet your needs, budget, and timeline.",
    backgroundImage: aboutUsPhoto,
  },
  // Initial state for the Why Us section
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
  // Initial state for the Services section
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
  // Initial state for the Projects section
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
  // Initial state for the Contact section
  form6: {
    title: "Get In Touch",
    phoneNumber: "+152 534-468-854",
    emailAdd: "contact@example.com",
    location: "C/54 Northwest Freeway, Suite 558, Houston, Usa 485",
  },
  // Initial state for the navbar section
  form7: {
    listOne: "HOME",
    listTwo: "ABOUT US",
    listThree: "SERVICES",
    listFour: "WHY US",
    listFive: "PROJECTS",
    listSix: "CONTACT US",
    logoOne: companyLogo,
  },
};

export default FormInitialStates;
