import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './views/home/Home'
import NotFound from './views/notFound/NotFound'
import Cursos from './views/cursos/Cursos'

const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/cursos" component={Cursos}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
     );
}
 
export default Routes;