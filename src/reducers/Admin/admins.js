import { ADMINS_FETCHED, LOADING_STARTED, LOADING_STOPPED, ADMINS_REMOVED, ADMIN_ADDED } from "../../config/reduxContants";

const admins = (state = {loading: false, data: []}, action) => {
    switch (action.type) {
        case LOADING_STARTED:
            return {...state, loading: true}
        case ADMINS_FETCHED:
            return {...state, data: action.payload}
        case LOADING_STOPPED:
            return {...state, loading: false}
        case ADMIN_ADDED:
            return {...state, data:[action.payload, ...state.data]}
        case ADMINS_REMOVED:
            const filtedList = [...state.data].filter(item => item._id !== action.payload);
            return {...state, data: filtedList};
        default:
            return state;
    }
}


export default admins;