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
            // const courseObject = {_id: "new1", title: action.payload.title, enrollments: 0, coordinator: action.paylod.coordinator.name};
            let {title, coordinator:{name}} = action.payload;
            const courseObject = {_id: Date.now().toString(), title, enrollments: 0, coordinator: name};
            
            return {...state, data: [courseObject, ...state.data]};

        default:
            return state;
    }
}


export default courses;