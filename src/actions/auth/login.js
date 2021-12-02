import * as api from "../../api";
import * as auth from "../../services/userServices";

export const loginUser = (userData, redirect, notify) => async (dispatch) => {
  try {
    const { data } = await api.signInUser(userData);
    const token = data.token;

    if (!token) return;
    dispatch({ type: "USER_LOGGED_IN", payload: token });

    let path = "";
    const user = auth.getCurrentUser();
    switch (user.status) {
      case "normal":
        path = "/user";
        break;
      case "admin":
        path = "/admin";
        break;
      case "coordinator":
        path = "/coordinator";
        break;
      default:
        path = "/user";
    }

    redirect(path);
  } catch (err) {
    notify(err.response?.data);
  }
};

export const registerUser = (userData, history, notify) => async (dispatch) => {
  try {
    const { headers } = await api.registerUser(userData);
    const token = headers["x-auth-token"];

    dispatch({ type: "USER_LOGGED_IN", payload: token });

    let path = "";
    const user = auth.getCurrentUser();
    switch (user.status) {
      case "normal":
        path = "/user";
        break;
      case "admin":
        path = "/admin";
        break;
      default:
        path = "/user";
    }

    history.replace(path);
  } catch (ex) {
    notify(ex.response.data);
  }
};

export const logout = (history) => async (dispatch) => {
  console.log("Logging out...");
  dispatch({ type: "USER_LOGGED_OUT" });
  history.push("/login");
};
