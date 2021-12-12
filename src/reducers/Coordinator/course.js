const initialState = { title: "" };

const currentModule = (state = initialState, action) => {
  switch (action.type) {
    case "COURSE_SET":
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default currentModule;
