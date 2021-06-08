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
import Dashboard from './components/dashboard/Dashboard'
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
                    <Dashboard>
                        <Home/>
                    </Dashboard>
                </Route>

                <Route path="/courses">
                    <Dashboard>
                        <Courses/>
                    </Dashboard>
                </Route>
                    
                <Route path="/evaluations" >
                    <Dashboard>
                        <Evaluation/>
                    </Dashboard>
                </Route>

                <Route path="/feedback">
                    <Dashboard>
                        <FeedBack/>
                    </Dashboard>
                </Route>

                <Route path="/resources/main">
                    <Dashboard>
                        <Resources
                            resourcesData={resourcesData}
                        />
                    </Dashboard>
                </Route>

                <Route path="/resources/papers">
                    <Dashboard>
                        <Papers
                            resourcesData={resourcesData}
                            setResourcesData = {setResourcesData}
                        />
                    </Dashboard>
                </Route>

                <Route path="/resources/create-paper">
                    <Dashboard>
                        <CreatePaper
                            resourcesData={resourcesData}
                            setResourcesData = {setResourcesData}
                        />
                    </Dashboard>
                </Route>

                <Route component={NotFound}/>

            </Switch>
        </Router>
     );
}
 
export default Routes;
 
