const initialState = {
  loading: false,
  data: { score: undefined, correctAnswers: [] },
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case "QUIZ_MARKED":
      return { ...state, data: { ...state.data, ...action.payload } };
    case "QUIZ_CLEARED":
      return initialState;
    case "QUIZ_LOAD_STARTED":
      return { ...state, loading: true };
    case "QUIZ_LOAD_STOPPED":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default quiz;
