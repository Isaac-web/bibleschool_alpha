const enrollmentCourse = (state ={}, action) => {
    switch(action.type){
        case "LOAD_ENROLLMENT_COURSE":
            return action.payload;
        default:
            return state;
    }
}