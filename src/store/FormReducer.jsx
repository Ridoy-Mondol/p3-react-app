import FormInitialStates from "../initialStates/FormInitialStates";

const initialState = {
  projectId: null,
  ...FormInitialStates,
};

export default function FormReducer(state = initialState, action) {
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
            [field]: updatedArray,
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
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
