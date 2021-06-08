import React from 'react';
import Navbar from '../navBar/NavBar'
import './Dashboard.css'

const Dashboard = ({children}) => {
    return ( 
        <div className="Dashboard">
            <Navbar/>
            <div className="views">
                {children}
            </div>
        </div>
     );
}
 
export default Dashboard;