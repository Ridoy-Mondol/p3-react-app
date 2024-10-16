import FormInitialStates from "../initialStates/FormInitialStates"; // Importing the initial states for forms

// Initial state structure containing project ID and form initial states
const initialState = {
  projectId: null, // Starting with no project ID
  ...FormInitialStates, // Spreading the initial states for forms into the initial state
};

// Reducer function to manage form-related state
export default function FormReducer(state = initialState, action) {
  console.log("Current state before action:", state); // Logging the current state before processing the action
  switch (action.type) {
    case "SET_PROJECT_ID":
      return {
        ...state, // Maintaining the previous state
        projectId: action.payload, // Setting the new project ID from the action payload
      };

    case "UPDATE_FORM_FIELD":
      const { formName, field, value, index } = action.payload; // Destructuring payload for easier access
      if (index !== undefined) {
        const updatedArray = [...state[formName][field]]; // Creating a copy of the array at the specified field
        updatedArray[index] = value; // Updating the specific index with the new value
        return {
          ...state,
          [formName]: {
            ...state[formName], // Spreading the existing form state
            [field]: updatedArray, // Updating the field with the new array
          },
        };
      }
      return {
        ...state,
        [formName]: {
          ...state[formName], // Spreading the existing form state
          [field]: value, // Updating the specified field with the new value
        },
      };

    case "SET_FORM_DATA":
      console.log("Updating state with payload:", action.payload); // Logging the payload being set in the state
      return {
        ...state,
        ...action.payload, // Merging the payload into the state
      };

    default:
      return state; // Returning the current state if no actions match
  }
}
