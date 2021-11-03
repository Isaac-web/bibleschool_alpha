import {COORDINATORS_FETCHED, COORDINATOR_ADDED, LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";


export default (state = {loading: false, data: []}, action) => {
    switch(action.type){
        case COORDINATORS_FETCHED:
            return {...state, data: action.payload};
        case LOADING_STARTED:
            return {...state, loading: true};
        case LOADING_STOPPED:
            return {...state, loading: false};
        case COORDINATOR_ADDED:
            return {...state, data: [...state.data, action.payload]};
       
        default:
            return state;
    }
}