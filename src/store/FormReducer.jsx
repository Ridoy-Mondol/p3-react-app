import FormInitialStates from "../initialStates/FormInitialStates";

const initialState = {
  projectId: null,
  ...FormInitialStates,
};

export default function FormReducer(state = initialState, action) {
  console.log("Current state before action:", state);
  switch (action.type) {
    case "SET_PROJECT_ID":
      return {
        ...state,
        projectId: action.payload,
      };

    case "UPDATE_FORM_FIELD":
  const { formName, field, value, index } = action.payload;
  if (index !== undefined) {
    const updatedArray = [...state[formName][field]];
    updatedArray[index] = value; 
    return {
      ...state,
      [formName]: {
        ...state[formName],
        [field]: updatedArray, // This might be where the problem lies
      },
    };
  }
  return {
    ...state,
    [formName]: {
      ...state[formName],
      [field]: value, 
    },
  };

    case "SET_FORM_DATA":
      console.log("Updating state with payload:", action.payload);
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
