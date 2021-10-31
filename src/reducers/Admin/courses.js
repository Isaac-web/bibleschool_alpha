import {ADMIN_COURSES_FETCHED, LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";


const courses = (state = {loading: false, data: []}, action) => {
    switch(action.type){
        case ADMIN_COURSES_FETCHED:
            return({...state, data: action.payload});

        case LOADING_STARTED:
            return ({...state, loading: true});

        case LOADING_STOPPED:
            return({...state, loading: false});

        default:
            return state;
    }
}


export default courses;