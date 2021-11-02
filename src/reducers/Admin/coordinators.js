import {COORDINATORS_FETCHED} from "../../config/reduxContants";


export default (state = {loading: false, data: []}, action) => {
    switch(action.type){
        case COORDINATORS_FETCHED:
            return {...state, data: action.payload};
        default:
            return state;
    }
}