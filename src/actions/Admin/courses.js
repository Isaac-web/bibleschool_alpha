import {ADMIN_COURSES_FETCHED, LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";
import {colors} from "../../config"
import * as api from "../../api/index";

const fetchCourses = () => async (dispatch) => {
  dispatch({ type: LOADING_STARTED });
  const { data } = await api.getAdminCourses();
  dispatch({ type: ADMIN_COURSES_FETCHED, payload: data });
  dispatch({ type: LOADING_STOPPED });
};

const addCourse = (courseData, notify) => async (dispatch) => {
  const apiData = {
    coordinator: courseData.coordinator._id,
    title: courseData.title,
  };

  try {
    const { data } = await api.addCourse(apiData);

    notify("Course Added Successfully", colors.success);
    dispatch({ type: "COURSE_ADDED", payload: data });
  } catch (err) {
    notify("Opps! Could not add course.", "red");
  }
};

const removeCourse = (courseId, notify) => async (dispatch) => {
  try {
    await api.deleteCourse(courseId);
    dispatch({ type: "COURSE_DELETED", payload: courseId });
    notify("Course Deleted.", colors.success);
  } catch (err) {
    notify("Opps! Could not delete course.", "red");
  }
};



export default {
    fetchCourses,
    addCourse,
    removeCourse
}