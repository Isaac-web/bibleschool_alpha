import {LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";

const enrollments = (state = {loading: false, data: []}, action) => {
    switch(action.type) {
        case 'ENROLLMENTS_FETCHED':
            return {...state, data: action.payload}
        case 'ENROLLMENT_DELETED':
            const clonedModules = [...state.data];
            const remaining = clonedModules.filter(m => m._id !== action.payload._id);
            return {...state, data: remaining}
        case 'LOADING_STARTED':
            return {...state, loading: true}
        case 'LOADING_STOPPED':
            return {...state, loading: false}
        default: 
            return state;
    }
}


export default enrollments;