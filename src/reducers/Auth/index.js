import * as authService from "../../services/userServices";

const initialState = { user: null, token: null };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      authService.setToken(action.payload);
      const user = authService.getCurrentUser();
      return { ...state, user };
    case "USER_LOGGED_OUT":
      localStorage.clear();
      return initialState;
    default:
      return state;
  }
};

export default auth;
