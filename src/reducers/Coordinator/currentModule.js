import { CURRENT_MODULE_SET, CURRENT_MODULE_CLEARED, FILE_SUPPLIED, QUESTION_ADDED, 
QUESTION_DELETED, QUESTION_UPDATED, CHANGES_SAVED } from "../../config/reduxContants";


const initialState = {
  loading: false,
  data: { questions: [], file: null, fileUri: "" },
};

const currentModule = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_MODULE_SET:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };

    case CURRENT_MODULE_CLEARED:
      return { ...state, data: initialState };

    case FILE_SUPPLIED:
      return { ...state, data: { ...state.data, file: action.payload } };

    case QUESTION_ADDED:
      return {
        ...state,
        data: {
          ...state.data,
          questions: [...state.data.questions, action.payload],
        },
      };

    case QUESTION_UPDATED:
      return { ...state, data: { ...state.data, questions: action.payload } };

    case QUESTION_DELETED:
      return { ...state, data: { ...state.data, questions: action.payload } };

    case "FILE_URI_SET":
      return { ...state, data: { ...state.data, fileUri: action.payload } };

    case "FILE_CLEARED":
      return { ...state, data: { ...state.data, file: null } };

    case "FILE_URI_CLEARED":
      return { ...state, data: { ...state.data, fileUri: "" } };

    case CHANGES_SAVED:
      return state;

    case "MODULE_LOADING_STARTED":
      return { ...state, loading: true };

    case "MODULE_LOADING_STOPPED":
      return { ...state, loading: false };
    default:
      return state;
  }
};


export default currentModule;