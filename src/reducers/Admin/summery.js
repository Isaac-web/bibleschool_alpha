const summery = (state = {}, action) => {
  switch (action.type) {
    case "ADMIN_SUMMERY_FETCHED":
      return action.payload;
    case "ADMIN_ADDED":
      return { ...state, adminsCount: ++state.adminsCount };
    case "ADMIN_REMOVED":
      return { ...state, adminsCount: --state.adminsCount };
    case "COORDINATOR_ADDED":
      return { ...state, coordinatorsCount: ++state.coordinatorsCount };
    case "COORDINATOR_REMOVED":
      return { ...state, coordinatorsCount: --state.coordinatorsCount };
    case "COURSE_ADDED":
      return { ...state, coursesCount: ++state.coursesCount };
    case "COURSE_REMOVED":
      return { ...state, coursesCount: --state.coursesCount };

    default:
      return state;
  }
};

export default summery;
