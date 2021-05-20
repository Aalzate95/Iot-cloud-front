import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = ({children}) => {

    const activeStyles = {        
        backgroundColor:"rgb(221, 221, 221)"
    }

    return ( 
        <div className="NavBar">
        
            <nav  className="NavBar-Style">
                <NavLink className="navlink" exact={true} to='/' activeStyle={activeStyles}><p>Home</p></NavLink>
                <NavLink className="navlink" to='/cursos' activeStyle={activeStyles}><p>Courses</p></NavLink>
                <NavLink className="navlink" to='/evaluations' activeStyle={activeStyles}><p>Evaluations</p></NavLink>
                <NavLink className="navlink" to='/feedback' activeStyle={activeStyles}><p>Feedback</p></NavLink>
            </nav>
            {children}
        </div>
     );
}
 
export default NavBar;