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
                <NavLink className="navlink" to='/cursos' activeStyle={activeStyles}><p>Cursos</p></NavLink>
            </nav>

            {children}
        </div>
     );
}
 
export default NavBar;