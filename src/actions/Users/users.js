import {
  LOADING_STARTED,
  LOADING_STOPPED,
  USERS_FETCHED,
  USERS_SEARCHED,
} from "../../config/reduxContants";
import * as api from "../../api/index";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_STARTED });
    const { data } = await api.getUsers();
    dispatch({ type: USERS_FETCHED, payload: data });
    dispatch({ type: LOADING_STOPPED });
  } catch (ex) {
    console.log(ex.response.data);
  }
};

export const searchUsers = (searchQuery) => async (dispatch) => {
  dispatch({ type: "USER_LOAD_STARTED" });
  const { data } = await api.searchUsers(searchQuery);
  dispatch({ type: USERS_SEARCHED, payload: data });
  dispatch({ type: "USER_LOAD_STOPPED" });
};

export const clearSearchedUsers = () => async (dispatch) => {
  dispatch({ type: "USER_LOAD_STARTED" });
  const { data } = await api.getUsers();
  dispatch({ type: USERS_SEARCHED, payload: data });
  dispatch({ type: "USER_LOAD_STOPPED" });
};
