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
import Leccion from './views/evaluation/components/Leccion'
import ControlLectura from './views/evaluation/components/ControlLectura'
import Examen from './views/evaluation/components/Examen'
const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <NavBar>
                    <Route exact path="/" component={Home}/>
                    <Route path="/courses" component={Courses}/>
                    <Route path="/evaluations/inicio" component={Evaluation}/>
                    <Route path="/feedback" component={FeedBack}/>
                    <Route path="/evaluations/leccion" component={Leccion}/>
                    <Route path="/evaluations/controlLectura" component={ControlLectura}/>
                    <Route path="/evaluations/examen" component={Examen}/>
                </NavBar>

                <Route component={NotFound}/>

            </Switch>
        </Router>
     );
}
 
export default Routes;