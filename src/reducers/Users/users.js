import {LOADING_STARTED, LOADING_STOPPED, USERS_FETCHED, USERS_SEARCHED} from "../../config/reduxContants";


const users = (state = { loading: false, data: [] }, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      return { ...state, data: action.payload };
    case "USER_LOAD_STARTED":
      return { ...state, loading: true };
    case "USER_LOAD_STOPPED":
      return { ...state, loading: false };
    case USERS_SEARCHED:
      return { ...state, data: action.payload };
    case "SEARCHED_USERS_CLEARED":
      return { ...state, data: [] };
    default:
      return state;
  }
};

export default users;