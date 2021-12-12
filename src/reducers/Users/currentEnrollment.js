const currentEnrollment = (state = { data: {} }, action) => {
  switch (action.type) {
    case "CURRENT_ENROLLMENT_SET":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default currentEnrollment;
