import * as api from "../../api";

export const getAllCourses = () => async (dispatch) => {
  dispatch({ type: "LOADING_STARTED" });
  const { data } = await api.getAdminCourses();
  dispatch({ type: "FETCH_COURSES", payload: data });
  dispatch({ type: "LOADING_STOPPED" });
};
