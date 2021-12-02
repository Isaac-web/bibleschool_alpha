const userEnrollments = (state = {loading: false, data: []}, action) => {
    switch(action.type){
        case "ENROLLMENTS_FETCHED":
            return {...state, data: action.payload}
        case "ENROLLMENT_ADDED":
            return {...state, data: [...state.data, action.payload]}
        case "LOADING_STARTED":
            return {...state, loading: true}
        case "LOADING_STOPPED":
            return {...state, loading: false}

        default: 
            return state;
    }
}


export default userEnrollments;