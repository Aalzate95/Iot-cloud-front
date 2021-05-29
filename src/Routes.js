import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './views/home/Home'
import NotFound from './views/notFound/NotFound'
import Courses from './views/courses/Courses'
import Evaluation from './views/evaluation/Evaluation'
import FeedBack from './views/feedBack/FeedBack'
import NavBar from './components/navBar/NavBar'
import Resources from './views/resources/Resources';
const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/">
                    <NavBar>
                        <Home/>
                    </NavBar>
                </Route>

                <Route path="/courses">
                    <NavBar>
                        <Courses/>
                    </NavBar>
                </Route>
                    
                <Route path="/evaluations" >
                    <NavBar>
                        <Evaluation/>
                    </NavBar>
                </Route>

                <Route path="/feedback">
                    <NavBar>
                        <FeedBack/>
                    </NavBar>
                </Route>

                <Route path="/resources">
                    <NavBar>
                        <Resources/>
                    </NavBar>
                </Route>

                <Route component={NotFound}/>

            </Switch>
        </Router>
     );
}
 
export default Routes;