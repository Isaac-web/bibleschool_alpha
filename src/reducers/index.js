import {combineReducers} from 'redux';


import admins from './Admin/admins';
import adminCourses from './Admin/courses';
import adminCoordinators from './Admin/coordinators';


export default combineReducers({
    admins,
    adminCourses, 
    adminCoordinators
})