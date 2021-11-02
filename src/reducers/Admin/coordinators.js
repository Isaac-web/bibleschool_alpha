import {COORDINATORS_FETCHED} from "../../config/reduxContants";



const coordinators = (state = {loading: true, data: []}, action) => {
    
    switch (action.type) {
        case COORDINATORS_FETCHED:
            return {...state, data: action.payload}
            
        default:
            return state;
    }
}


export default coordinators;