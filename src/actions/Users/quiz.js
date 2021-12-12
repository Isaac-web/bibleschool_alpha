import * as api from "../../api/index";
import { setCurrentEnrollment } from "./currentEnrollment";

const formatEnrollment = (enrollment) => {
  return {
    courseId: enrollment.course,
    coveredModules: enrollment.coveredModules,
    currentModule: enrollment.currentModule,
    imageUri: enrollment.imageUri,
    status: enrollment.status,
    title: enrollment.title,
    userId: enrollment.user,
  };
};

export const markQuiz = (quizData) => async (dispatch) => {
  try {
    dispatch({ type: "QUIZ_LOAD_STARTED" });
    const { data } = await api.markQuiz(quizData);
    const enrollment = formatEnrollment(data.enrollment);
    dispatch(setCurrentEnrollment(enrollment));
    dispatch({ type: "QUIZ_MARKED", payload: data });
    dispatch({ type: "QUIZ_LOAD_STOPPED" });
  } catch (ex) {
    if (ex.response.data) return console.log(ex.response.data);

    console.log(ex);
  }
};

export const clearQuiz = () => (dispatch) => {
  dispatch({ type: "QUIZ_CLEARED" });
};
