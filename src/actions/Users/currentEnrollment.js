import * as enrollmentService from "../../services/enrollmentService";

export const setCurrentEnrollment = (currentEnrollment) => async (dispatch) => {
  if (currentEnrollment) {
    enrollmentService.setEnrollment(currentEnrollment);
  }

  dispatch({ type: "CURRENT_ENROLLMENT_SET", payload: currentEnrollment });
};

export const clearCurrentEnrollment = () => async (dispatch) => {
  dispatch({ type: "CURRENT_ENROLLMENT_CLEARED" });
  enrollmentService.clearEnrollment();
};

export const updateQuestion = (questions) => async (dispatch) => {
  dispatch({ type: "QUESTION_UPDATED", payload: questions });
};
