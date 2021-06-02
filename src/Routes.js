import React,{useState,useEffect} from 'react'
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
import Papers from './views/resources/papers/Papers'
import CreatePaper from './views/resources/papers/CreatePaper'

import datosRecursos from './data/dataResources.json'

const Routes = () => {

    const [resourcesData, setResourcesData] = useState(datosRecursos)

    useEffect(() => {
        setResourcesData(datosRecursos)
      }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
    
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

                <Route path="/resources/main">
                    <NavBar>
                        <Resources
                            resourcesData={resourcesData}
                        />
                    </NavBar>
                </Route>

                <Route path="/resources/papers">
                    <NavBar>
                        <Papers
                            resourcesData={resourcesData}
                            setResourcesData = {setResourcesData}
                        />
                    </NavBar>
                </Route>

                <Route path="/resources/create-paper">
                    <NavBar>
                        <CreatePaper
                            resourcesData={resourcesData}
                            setResourcesData = {setResourcesData}
                        />
                    </NavBar>
                </Route>

                <Route component={NotFound}/>

            </Switch>
        </Router>
     );
}
 
export default Routes;
 
