import * as api from "../../api";

export const signUpUser = (userData, redirect) => async (dispatch) => {
  console.log(userData);
  await api.signInUser();

  console.log(userData);

  // dispatch({type: "USER_LOGGED_IN", payload: data});
  // let path = "";

  // if(data.status === "coordinator")
  //     path = "/coordinator"
  // redirect(path);
};
