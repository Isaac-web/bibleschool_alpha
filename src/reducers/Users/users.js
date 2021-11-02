import {LOADING_STARTED, LOADING_STOPPED, USERS_FETCHED, USERS_SEARCHED} from "../../config/reduxContants";


export default (state = {loading: false, data: []}, action) => {
    switch(action.type){
        case USERS_FETCHED:
            return {...state, data: action.payload};
        case LOADING_STARTED:
            return {...state, loading: true};
        case LOADING_STOPPED:
            return {...state, loading: false};
        case USERS_SEARCHED:
            return {...state, data: action.payload};
        default: 
            return state;
    }
}