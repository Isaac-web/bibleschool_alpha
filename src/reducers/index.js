import {combineReducers} from 'redux';


import admins from './Admin/admins';
import adminCourses from './Admin/courses';
import adminEnrollments from "./Admin/enrollments";
import users from "./Users/users";
import coordinators from './Admin/coordinators';
import modules from "./Coordinator/modules";
import currentModule from "./Coordinator/currentModule";
import coordinatorEnrollments from "./Coordinator/enrollments";
import courses from "./Courses";
import auth from "./Auth";
import userEnrollments from "./Users/enrollments";
import currentEnrollment from "./Users/currentEnrollment";
import adminSummery from "./Admin/summery";
import quiz from "./Users/quiz";

export default combineReducers({
  admins,
  adminCourses,
  adminEnrollments,
  adminSummery,
  coordinators,
  courses,
  users,
  modules,
  currentModule,
  coordinatorEnrollments,
  auth,
  userEnrollments,
  currentEnrollment,
  quiz,
});