import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const getAdminEnrollments = () => {
  const enrollmentsData = [
    {
      _id: "_enrollment_1",
      title: "New Course 1",
      enrollments: 10,
      coordinator: "Appiah Agyei 1",
    },
    {
      _id: "_enrollment_2",
      title: "New Course 2",
      enrollments: 10,
      coordinator: "Appiah Agyei 2",
    },
    {
      _id: "_enrollment_3",
      title: "New Course 3",
      enrollments: 10,
      coordinator: "Appiah Agyei 3",
    },
    {
      _id: "_enrollment_4",
      title: "New Course 4",
      enrollments: 10,
      coordinator: "Appiah Agyei 4",
    },
    {
      _id: "_enrollment_5",
      title: "New Course 5",
      enrollments: 10,
      coordinator: "Appiah Agyei 5",
    },
    {
      _id: "_enrollment_6",
      title: "New Course 5",
      enrollments: 10,
      coordinator: "Appiah Agyei 5",
    },
    {
      _id: "_enrollment_7",
      title: "New Course 6",
      enrollments: 10,
      coordinator: "Appiah Agyei 5",
    },
    {
      _id: "_enrollment_8",
      title: "New Course 7",
      enrollments: 10,
      coordinator: "Appiah Agyei 5",
    },
    {
      _id: "_enrollment_9",
      title: "New Course 8",
      enrollments: 10,
      coordinator: "Appiah Agyei 5",
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: enrollmentsData });
    }, 1000);
  });
};

export const getAdminCourses = () => {
  return API.get("/courses");
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

export const getAdmins = () => {
  return API.get("/users/admins");
};

export const addAdmin = (userId) => {
  return API.post(`/users/admins/${userId}`);
};

export const getCoordinatorModules = () => {
  const data = [
    { _id: "1", title: "Title1", subtitle: "subtitle1" },
    { _id: "2", title: "Title2", subtitle: "subtitle2" },
    { _id: "3", title: "Title3", subtitle: "subtitle3" },
    { _id: "4", title: "Title4", subtitle: "subtitle4" },
    { _id: "5", title: "Title5", subtitle: "subtitle5" },
    { _id: "6", title: "Title6", subtitle: "subtitle6" },
    { _id: "7", title: "Title7", subtitle: "subtitle7" },
    { _id: "8", title: "Title8", subtitle: "subtitle8" },
    { _id: "9", title: "Title9", subtitle: "subtitle9" },
    { _id: "10", title: "Title10", subtitle: "subtitle10" },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: data });
    }, 1000);
  });
};

export const getCoordinatorEnrollments = () => {
  const enrollmentsData = [
    {
      _id: "_enrollment_1",
      name: "New Course 1",
      progress: "10%",
      status: "in progress",
    },
    {
      _id: "_enrollment_2",
      name: "New Course 2",
      progress: "20%",
      status: "complete",
    },
    {
      _id: "_enrollment_3",
      name: "New Course 3",
      progress: "30%",
      status: "in progress",
    },
    {
      _id: "_enrollment_4",
      name: "New Course 4",
      progress: "40%",
      status: "complete",
    },
    {
      _id: "_enrollment_5",
      name: "New Course 5",
      progress: "50%",
      status: "in progress",
    },
    {
      _id: "_enrollment_6",
      name: "New Course 5",
      progress: "50%",
      status: "complete",
    },
    {
      _id: "_enrollment_7",
      name: "New Course 6",
      progress: "50%",
      status: "complete",
    },
    {
      _id: "_enrollment_8",
      name: "New Course 7",
      progress: "50%",
      status: "complete",
    },
    {
      _id: "_enrollment_9",
      name: "New Course 8",
      progress: "50%",
      status: "inprogress",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: enrollmentsData });
    }, 1000);
  });
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
  const data = [
    {
      _id: "enrollment_id_1",
      title: "Course 1",
      imageUri: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      _id: "enrollment_id_2",
      title: "Course 2",
      imageUri: "https://picsum.photos/id/237/200/300",
    },
    {
      _id: "enrollment_id_3",
      title: "Course 3",
      imageUri: "https://picsum.photos/200/300?grayscale",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const getUsers = () => {
  return API.get("/users");
};

export const searchUsers = ({ query }) => {
  return API.get(`/users/search?searchQuery=${query || "none"}`);
};
