import { ADMINS_FETCHED, LOADING_STARTED, LOADING_STOPPED } from "../../config/reduxContants";

const admins = (state = {loading: false, data: []}, action) => {
    switch (action.type) {
        case LOADING_STARTED:
            return {...state, loading: true}
        case ADMINS_FETCHED:
            return {...state, data: action.payload}
        case LOADING_STOPPED:
            return {...state, loading: false}
        default:
            return state;
    }
}


export default admins;