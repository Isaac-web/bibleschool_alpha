import {combineReducers} from 'redux';


import admins from './Admin/admins';
import adminCourses from './Admin/courses';
import adminCoordinators from './Admin/coordinators';
import adminEnrollments from "./Admin/enrollments";


export default combineReducers({
    admins,
    adminCourses, 
    adminCoordinators,
    adminEnrollments
})