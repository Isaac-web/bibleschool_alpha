const userEnrollments = (state = {loading: false, data: []}, action) => {
    switch(action.type){
        case "ENROLLMENTS_FETCHED":
            return {...state, data: action.payload}
        case "ENROLLMENT_ADDED":
            return { ...state };
        case "LOADING_STARTED":
            return {...state, loading: true}
        case "LOADING_STOPPED":
            return {...state, loading: false}
        case "ENROLLMENT_DELETED":
            let clonedEnrollments = [...state.data];
            let remainingEnrollments = clonedEnrollments.filter(e => e._id !== action.payload);
            return {...state, data: remainingEnrollments};
        case "ENROLLMENTS_REVOKED":
            return {...state, data: action.payload};
        default: 
            return state;
    }
}


export default userEnrollments;