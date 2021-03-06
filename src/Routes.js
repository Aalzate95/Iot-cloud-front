import React,{useState,useEffect,useCallback} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from "./views/home/Home";
import NotFound from "./views/notFound/NotFound";
import Courses from "./views/resources/courses/Courses";
import Evaluation from "./views/evaluation/Evaluation";
import FeedBack from "./views/feedBack/FeedBack";
import Dashboard from "./components/dashboard/Dashboard";
import Resources from "./views/resources/Resources";
import Papers from "./views/resources/papers/Papers";
import CreatePaper from "./views/resources/papers/CreatePaper";
import Tutorials from "./views/resources/tutorials/Tutorials";
import Foro from "./views/foro/Foro";
import TemplateForo from "./views/foro/TemplateForo";
import datosRecursos from "./data/dataResources.json";

const Routes = () => {

    const [resourcesData, setResourcesData] = useState(datosRecursos);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    useEffect(() => {
        setResourcesData(datosRecursos);
      }, [datosRecursos]);
    
    
    return ( 
        <Router>
            <Switch>
                <Route exact path="/">
                    <Dashboard>
                        <Home/>
                    </Dashboard>
                </Route>

                <Route path="/resources/Cursos">
                    <Dashboard>
                        <Courses
                            resourcesData={resourcesData}
                            setResourcesData = {setResourcesData}
                        />
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

                <Route path="/resources/Papers">
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

                <Route path="/resources/Tutorials">
                    <Dashboard>
                        <Tutorials
                            resourcesData={resourcesData}
                            setResourcesData = {setResourcesData}
                        />
                    </Dashboard>
                </Route>

                <Route path="/foros">
                    <Dashboard>
                        <Foro
                            
                        />
                    </Dashboard>
                </Route>

                <Route path="/foro/:id">
                    <Dashboard>
                        <TemplateForo
                            forceUpdate={forceUpdate}
                        />
                    </Dashboard>
                </Route>

                <Route component={NotFound}/>

            </Switch>
        </Router>
     );
};
 
export default Routes;
 
