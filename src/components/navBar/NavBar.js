import React from 'react';
import './NavBar.css'

const NavBar = ({children}) => {
    return ( 
        <div className="NavBar">
            <nav className="NavBar-Style">
                <ul className="NavBar-Options">
                    <li><a href="/">Home</a></li>
                    <li><a href="/cursos">Cursos</a></li>
                </ul>
            </nav>
        
            {children}

        </div>
     );
}
 
export default NavBar;