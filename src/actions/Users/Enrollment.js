import * as api from "../../api/index";
import { clearQuiz } from "../Users/quiz";
import fileDownloader from "js-file-download";

export const fetchEnrollments = () => async (dispatch) => {
  dispatch({ type: "LOADING_STARTED" });
  const { data } = await api.fetchEnrollments();
  dispatch({ type: "ENROLLMENTS_FETCHED", payload: data });
  dispatch({ type: "LOADING_STOPPED" });
};

export const loadEnrollmentCourse =
  (id, enrollment, redirect) => async (dispatch) => {
    const data = {
      _id: "enrollment_id_1",
      title: "Lesson One",
      subtitle: "Lesson Subtitle",
    };
    dispatch({ type: "LOADING_STARTED" });
    dispatch({ type: "LOAD_ENROLLMENT_COURSE", payload: data });
    dispatch({ type: "LOADING_STOPPED" });
    redirect(`${id}/${enrollment._id}`);
  };

export const addEnrollment =
  (enrollmentData, redirect, notify) => async (dispatch) => {
    try {
      await api.createEnrollment(enrollmentData);
      dispatch({ type: "ENROLLMENT_ADDED" });

      redirect();
    } catch (err) {
      notify(err?.response?.data);
    }
  };

export const deleteEnrollment =
  (enrollmentId, prevState) => async (dispatch) => {
    try {
      await api.deleteEnrollment(enrollmentId);

      dispatch({ type: "ENROLLMENT_DELETED", payload: enrollmentId });
    } catch (ex) {
      dispatch({ type: "ENROLLMENTS_REVOKED", payload: prevState });
    }
  };

export const getCourseModules = (courseId) => async (dispatch) => {
  dispatch({ type: "LOADING_STARTED" });
  const { data } = await api.getCourseModules(courseId);
  dispatch({ type: "MODULES_FETCHED", payload: data });
  dispatch({ type: "LOADING_STOPPED" });
};

export const getEnrollmentCourse = (courseId) => async (dispatch) => {
  try {
    dispatch(clearQuiz());
    dispatch({ type: "MODULE_LOADING_STARTED" });
    const { data } = await api.getEnrollmentCourse(courseId);
    dispatch({ type: "CURRENT_MODULE_SET", payload: data });
    dispatch({ type: "MODULE_LOADING_STOPPED" });
  } catch (ex) {
    if (ex.response.data) return console.log(ex.response.data);
    console.log(ex);
  }
};

export const downloadModule = (fileUri) => async (dispatch) => {
  try {
    const filename = fileUri.replace("uploads\\files\\", "");
    console.log(filename);
    const { data } = await api.downloadModule(fileUri);
    fileDownloader(data, filename);

    // dispatch({ type: "MODULE_DOWNLOADED" });
  } catch (ex) {
    console.log(ex);
  }
};
