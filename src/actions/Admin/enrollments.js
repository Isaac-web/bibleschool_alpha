import {ADMIN_ENROLLMENTS_FETCHED} from "../../config/reduxContants";

const enrollmentsData = [
    {_id: "_enrollment_1", title: "New Course 1", enrollments: 10, coordinator: "Appiah Agyei 1"},
    {_id: "_enrollment_2", title: "New Course 2", enrollments: 10, coordinator: "Appiah Agyei 2"},
    {_id: "_enrollment_3", title: "New Course 3", enrollments: 10, coordinator: "Appiah Agyei 3"},
    {_id: "_enrollment_4", title: "New Course 4", enrollments: 10, coordinator: "Appiah Agyei 4"},
    {_id: "_enrollment_5", title: "New Course 5", enrollments: 10, coordinator: "Appiah Agyei 5"},
    {_id: "_enrollment_6", title: "New Course 5", enrollments: 10, coordinator: "Appiah Agyei 5"},
    {_id: "_enrollment_7", title: "New Course 6", enrollments: 10, coordinator: "Appiah Agyei 5"},
    {_id: "_enrollment_8", title: "New Course 7", enrollments: 10, coordinator: "Appiah Agyei 5"},
    {_id: "_enrollment_9", title: "New Course 8", enrollments: 10, coordinator: "Appiah Agyei 5"},
]


export const fetchEnrollments = () => async dispatch => {
    console.log("Fetching enrollments...");
    dispatch({type: ADMIN_ENROLLMENTS_FETCHED, payload: enrollmentsData})
}