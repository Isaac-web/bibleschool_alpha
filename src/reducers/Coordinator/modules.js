import {LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";

const modules = (state = {loading: false, data: []}, action) => {
    switch(action.type) {
        case 'MODULES_FETCHED':
            return {...state, data: action.payload}
        case 'MODULE_ADDED':
            return {...state, data: [...state.data, action.payload]}
        case 'MODULE_DELETED':
            const clonedModules = [...state.data];
            const remaining = clonedModules.filter(m => m._id !== action.payload._id);
            return {...state, data: remaining}
        case 'MODULES_REVOKED':
            return {...state, data: action.payload}
    
        case LOADING_STARTED:
            return {...state, loading: true}
        case LOADING_STOPPED:
            return {...state, loading: false}
        default: 
            return state;
    }
}


export default modules;