import {ADMIN_COURSES_FETCHED, LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";


const courses = (state = {loading: false, data: []}, action) => {
    switch(action.type){
        case ADMIN_COURSES_FETCHED:
            return({...state, data: action.payload});

        case LOADING_STARTED:
            return ({...state, loading: true});

        case LOADING_STOPPED:
            return({...state, loading: false});
        
        case "COURSE_ADDED":
            let {title, coordinator:{name}} = action.payload;
            const courseObject = {_id: Date.now().toString(), title, enrollments: 0, coordinator: name};
            return {...state, data: [courseObject, ...state.data]};
        case 'COURSE_DELETED':
            let filtedList = [...state.data].filter(course => course._id !== action.payload);
            return {...state, data: filtedList};

        default:
            return state;
    }
}


export default courses;