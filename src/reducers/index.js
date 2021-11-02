import {combineReducers} from 'redux';


import admins from './Admin/admins';
import adminCourses from './Admin/courses';
import adminEnrollments from "./Admin/enrollments";
import users from "./Users/users";
import coordinators from './Admin/coordinators';



export default combineReducers({
    admins,
    adminCourses, 
    adminEnrollments, 
    coordinators,
    users
})