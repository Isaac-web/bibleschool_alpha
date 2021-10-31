import {ADMIN_ENROLLMENTS_FETCHED, LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";

const enrollments = (state = {loading: false, data: []}, action) => {
    switch(action.type) {
        case LOADING_STARTED:
            return {...state, loading: true}
        case ADMIN_ENROLLMENTS_FETCHED:
            return ({...state, data: action.payload});
        case LOADING_STOPPED:
            return {...state, loading: false}
        default:
            return state;
    }
}


export default enrollments;