import {ADMIN_COURSES_FETCHED, LOADING_STARTED, LOADING_STOPPED} from "../../config/reduxContants";



const data = [
    {_id: "1", title: "New Course 1", enrollments: 10, coordinator: "Appiah Agyei 1"},
    {_id: "2", title: "New Course 2", enrollments: 10, coordinator: "Appiah Agyei 2"},
    {_id: "3", title: "New Course 3", enrollments: 10, coordinator: "Appiah Agyei 3"},
    {_id: "4", title: "New Course 4", enrollments: 10, coordinator: "Appiah Agyei 4"},
    {_id: "5", title: "New Course 5", enrollments: 10, coordinator: "Appiah Agyei 5"},
    {_id: "6", title: "New Course 5", enrollments: 10, coordinator: "Appiah Agyei 5"},
    {_id: "7", title: "New Course 6", enrollments: 10, coordinator: "Appiah Agyei 5"},
    {_id: "8", title: "New Course 7", enrollments: 10, coordinator: "Appiah Agyei 5"},
    {_id: "9", title: "New Course 8", enrollments: 10, coordinator: "Appiah Agyei 5"},
]



const fetchCourses = () => async dispatch => {
    dispatch({type: LOADING_STARTED});
    dispatch({type: ADMIN_COURSES_FETCHED, payload: [...data]});
    dispatch({type: LOADING_STOPPED});
}



const addCourse = (courseData, notify) => async dispatch => {
    dispatch({type: "COURSE_ADDED", payload: courseData});
    notify(true);
}



export default {
    fetchCourses,
    addCourse,
}