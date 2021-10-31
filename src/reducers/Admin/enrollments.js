import {ADMIN_ENROLLMENTS_FETCHED} from "../../config/reduxContants";

const enrollments = (state = {loading: false, data: []}, action) => {
    switch(action.type) {
        case ADMIN_ENROLLMENTS_FETCHED:
            return ({...state, data: action.payload});
        default:
            return state;
    }
}


export default enrollments;