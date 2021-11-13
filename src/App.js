import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";



import Admin from "./pages/Admin";
import CoordinatorCourse from "./pages/Coordiantor/Course";
import Enrollments from "./pages/Coordiantor/Enrollments";
import Header from "./components/Header/Header";
import Coordinator from "./pages/Coordiantor";

const App = () => {
    return (
        <div>
            <Header/>
            <div style={{marginTop: 80}}>
                <Switch>
                    <Route path="/home" render={() => <>Home</>}/>
                    <Redirect exact from="/" to="/home"/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/coordinator/enrollments" component={Enrollments}/>
                    <Route path="/coordinator/course" component={CoordinatorCourse}/>
                    <Route path="/coordinator/" component={Coordinator}/>
                    <Redirect to="/not-found" render={() => <>Home</>}/>
                </Switch>
            </div>
        </div>
    )
}

export default App
