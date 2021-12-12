import axios from "axios";
import * as authService from "../services/userServices";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.defaults.headers.common["x-auth-token"] = authService.getToken();

export const getAdminEnrollments = () => {
  return API.get("/enrollments");
};

export const getAdminCourses = () => {
  return API.get("/courses");
};

export const getAdminSummery = () => {
  return API.get("/admin/summery");
};

export const removeAdmin = (id) => {
  return API.delete(`/users/admins/remove/${id}`);
};

export const deleteCourse = (courseId) => {
  return API.delete(`/courses/${courseId}`);
};

export const addCourse = (data) => {
  return API.post("/courses", data);
};

export const getAdminCoordinators = () => {
  return API.get("/users/coordinators");
};

export const getEnrollmentCourse = (moduleId) => {
  return API.get(`/modules/${moduleId}`);
};

export const getAdmins = () => {
  return API.get("/users/admins");
};

export const addAdmin = (userId) => {
  return API.post(`/users/admins/${userId}`);
};

export const getCoordinatorModules = async (courseId) => {
  return API.get(`/modules/all/${courseId}`);
};

export const getCurrentModule = (moduleId) => {
  return API.get(`/modules/${moduleId}`);
};

export const addCourseModule = (module) => {
  return API.post(`/modules`, module);
};

export const updateModule = (id, payload) => {
  // delete payload._id;
  // delete payload.course;

  // const data = new FormData();

  // for (let key in payload) {
  //   if (key === "file") {
  //     data.append({
  //       name: key,
  //       type: "*",
  //       uri: payload[key],
  //     });
  //   }

  //   data.append(key, payload[key]);
  // }

  return API.patch(`/modules/${id}`, payload);
};

export const saveFile = (moduleId, file) => {
  return API.patch(`/modules/upload/${moduleId}`, file);
};

export const downloadModule = (fileUri) => {
  return API.get(`/modules/download?path=${fileUri}`);
};

export const deleteModule = (moduleId) => {
  return API.delete(`/modules/${moduleId}`);
};

export const deleteModuleQuestion = (moduleId, questionId) => {
  return API.delete(`/modules/${moduleId}/${questionId}`);
};

export const getCoordinatorEnrollments = async () => {
  const user = authService.getCurrentUser();
  if (!user?.courseId) return;
  return API.get(`/enrollments/${user.courseId}`);
};

export const signInUser = async (data) => {
  return API.post("/auth", {
    email: data.username,
    password: data.password,
  });
};

export const registerUser = (data) => {
  return API.post("/users", data);
};

export const fetchEnrollments = () => {
  const user = authService.getCurrentUser();

  return API.get(`/enrollments/${user._id}`);
};

export const createEnrollment = (data) => {
  return API.post("/enrollments", data);
};

export const deleteEnrollment = (enrollmentId) => {
  return API.delete(`/enrollments/${enrollmentId}`);
};

export const getUsers = () => {
  return API.get("/users");
};

export const searchUsers = ({ query }) => {
  return API.get(`/users/search?searchQuery=${query || "none"}`);
};

export const getCourseModules = (courseId) => {
  return API.get(`/modules/all/${courseId}`);
};

export const markQuiz = (data) => {
  return API.post("/quizes", data);
};


