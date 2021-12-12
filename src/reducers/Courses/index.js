const courses = (state = { loading: false, data: [] }, action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return { ...state, data: action.payload };
    case "LOADING_STARTED":
      return { ...state, loading: true };
    case "LOADING_STOPPED":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default courses;
