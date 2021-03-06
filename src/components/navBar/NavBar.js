import React,{useState} from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import {IoHome,IoStatsChart,IoGrid} from "react-icons/io5";
import { FaCommentAlt } from "react-icons/fa";
import {BiArrowFromRight, BiArrowFromLeft,BiBookBookmark} from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";

const usuario = {
    name:"Usuario 1",
    type:"Docente",
    image:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png"
};

const NavBar = () => {
    const [isHidden,setIsHidden] = useState(false);

    const activeStyles = {        
        color:"lightgray",
    };

    const renderPerfilImage = () =>{
        return(
            <div className="NavBar-Profile">
                <div className="Profile-Photo" style={{backgroundImage:`url(${usuario.image})`}}></div>
                <div className="Profile-description">
                    <p>{usuario.name}</p>
                    <p>{usuario.type}</p>
                </div>
            </div>
            );
    };

    return ( 
        <div className="NavBar">
            <nav  className="NavBar-Style" >
                <div className="HideNav">
                    <div className="HideNav-button" onClick={()=>{setIsHidden(!isHidden);}}>
                        <BiArrowFromRight
                            style={{display:`${isHidden?"none":"inline"}`}}
                        />
                        <BiArrowFromLeft
                            style={{display:`${isHidden?"inline":"none"}`}}
                        />
                    </div>
                </div>
                <div className="NavBar-user">
                    {renderPerfilImage()}
                </div>
                <div className="NavBar-links">
                        <NavLink className="Nav_link" activeClassName="activeRoute" exact={true} to="/" activeStyle={activeStyles}>
                            <div className="icon">
                                <IoHome/>
                            </div>
                            <p>Inicio</p>
                        </NavLink>
                        <NavLink className="Nav_link" activeClassName="activeRoute"  to="/resources/courses" activeStyle={activeStyles}>
                            <div className="icon">
                                <IoGrid/>
                            </div>
                            <p>Cursos</p>
                        </NavLink>
                        <NavLink className="Nav_link" activeClassName="activeRoute" to="/resources/main" activeStyle={activeStyles}>
                            <div className="icon">
                                <BiBookBookmark/>
                            </div>
                            <p>Recursos</p>
                        </NavLink>
                        <NavLink className="Nav_link" activeClassName="activeRoute" to="/evaluations" activeStyle={activeStyles}>
                            <div className="icon">
                                <IoStatsChart/>
                            </div>
                            <p>Evaluaci??n</p>
                        </NavLink>
                        <NavLink className="Nav_link" activeClassName="activeRoute" to="/feedback" activeStyle={activeStyles}>
                            <div className="icon">
                                <FaCommentAlt/>
                            </div>
                            <p>Retroalimentaci??n</p>
                        </NavLink>
                        <NavLink className="Nav_link" activeClassName="activeRoute" to="/foros" activeStyle={activeStyles}>
                            <div className="icon">
                                <VscFeedback/>
                            </div>
                            <p>Foro</p>
                        </NavLink>
                </div>
                <div className="NavBar-logout">
                    <div className="icon">
                        <FiLogOut/>
                    </div>
                    <p>Cerrar sesi??n</p>
                </div>
            </nav>
        </div>
     );
};
export default NavBar;

