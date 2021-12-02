import * as api from "../../api/index";

export const fetchEnrollments = () => async (dispatch) => {
  const data = await api.fetchEnrollments();

  dispatch({ type: "LOADING_STARTED" });
  dispatch({ type: "ENROLLMENTS_FETCHED", payload: data });
  dispatch({ type: "LOADING_STOPPED" });
};

export const loadEnrollmentCourse = (id, redirect) => async (dispatch) => {
  console.log(id);
  const data = {
    _id: "enrollment_id_1",
    title: "Lesson One",
    subtitle: "Lesson Subtitle",
  };
  dispatch({ type: "LOADING_STARTED" });
  dispatch({ type: "LOAD_ENROLLMENT_COURSE", payload: data });
  dispatch({ type: "LOADING_STOPPED" });
  redirect(id);
};

export const addEnrollment = (courseId, redirect) => async (dispatch) => {
  try {
    const data = { _id: courseId };

    console.log(courseId);

    dispatch({ type: "ENROLLMENT_ADDED", payload: data });

    redirect();
  } catch (err) {
    console.log(err?.response?.data.msg);
  }
};
