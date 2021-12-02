import React, { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import Admin from "./pages/Admin";
import Coordinator from "./pages/Coordiantor";
import CoordinatorCourse from "./pages/Coordiantor/Course";
import Enrollments from "./pages/Coordiantor/Enrollments";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import User from "./pages/User/index";
import AllCourses from "./pages/User/AllCourses";
import EnrollmentCourse from "./pages/User/EnrollmentCourse/EnrollmentCourse";
import ProtectedUserRoute from "./components/ProtectedRoutes/ProtectedUserRoute";
import ProtectedCoordinatorRoute from "./components/ProtectedRoutes/ProtectedCoordinatorRoutes";
import ProtectedAdminRoute from "./components/ProtectedRoutes/ProtectedAdminRoutes";

const App = () => {
  const user = Boolean(localStorage.getItem("profile"));
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return (
    <div>
      <Header />
      <div style={{ marginTop: 80 }}>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect exact from="/" to="/home" />
          <ProtectedAdminRoute path={"/admin"} render={() => <Admin />} />
          {/* <ProtectedCoordinatorRoute path="/coordinator/enrollments" component={Enrollments}/>
                    <ProtectedCoordinatorRoute path="/coordinator/course" component={CoordinatorCourse}/> */}
          <ProtectedCoordinatorRoute
            path="/coordinator/"
            component={Coordinator}
          />
          <ProtectedUserRoute
            path="/user/enrollment/:enrollmentId"
            component={EnrollmentCourse}
          />
          <ProtectedUserRoute path="/user/" render={() => <User />} />
          <Route path="/courses" component={AllCourses} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
