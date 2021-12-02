import {combineReducers} from 'redux';


import admins from './Admin/admins';
import adminCourses from './Admin/courses';
import adminEnrollments from "./Admin/enrollments";
import users from "./Users/users";
import coordinators from './Admin/coordinators';
import coordinatorModules from "./Coordinator/modules";
import currentModule from './Coordinator/currentModule';
import coordinatorEnrollments from "./Coordinator/enrollments";
import courses from "./Courses";
import auth from "./Auth";
import userEnrollments from "./Users/enrollments";



export default combineReducers({
    admins,
    adminCourses, 
    adminEnrollments, 
    coordinators,
    courses,
    users, 
    coordinatorModules,
    currentModule,
    coordinatorEnrollments, 
    auth, 
    userEnrollments
})