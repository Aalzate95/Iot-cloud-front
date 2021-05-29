import React,{useState} from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import {IoHome,IoStatsChart,IoBookOutline} from "react-icons/io5";
import { FaCommentAlt } from "react-icons/fa";
import {BiArrowFromRight, BiArrowFromLeft} from "react-icons/bi";

const usuario = {
    name:"Usuario 1",
    type:"Docente",
    image:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png"
}

const NavBar = ({children}) => {
    const [isHidden,setIsHidden] = useState(false)

    const activeStyles = {        
        color:"white",
        backgroundColor: "#D97706",
    }

    const renderPerfilImage = () =>{
        return(
            <div className="flex flex-row space-x-3">
                <div className="flex mx-1 pt-2" style={{backgroundImage:`url(${usuario.image})`}}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="text-white">
                    <p>{usuario.name}</p>
                    <p>{usuario.type}</p>
                </div>
            </div>
            )
    }

    return ( 
        <div className="flex flex-row">
            <nav  className="flex flex-col h-screen bg-yellow-800" >
                <div className="flex justify-end h-12 pr-3">
                    <div className="text-white text-lg rounded-full" onClick={()=>{setIsHidden(!isHidden)}}>
                        <BiArrowFromRight 
                            style={{display:`${isHidden?"none":"inline"}`}}
                        />
                        <BiArrowFromLeft
                            style={{display:`${isHidden?"inline":"none"}`}}
                        />
                    </div>
                </div>
                <div className="flex flex-row">
                    {renderPerfilImage()}
                </div>
                <div className="mt-10 h-48 inset-0 space-y-2">
                        <div className="pt-1 hover:bg-yellow-600">
                        <NavLink className="flex my-2 p-2 space-x-3 text-white rounded-md hover:bg-yellow-600" exact={true} to='/' activeStyle={activeStyles}>
                            
                                <IoHome className="w-5 h-5"/>
                            
                            <p>Inicio</p>
                        </NavLink>
                        </div>
                        <NavLink className="flex my-2 p-2 space-x-3 text-white rounded-md hover:bg-white hover:text-yellow-800"  to='/cursos' activeStyle={activeStyles}>
                            <div className="pt-1">
                                <IoBookOutline className="w-5 h-5"/>
                            </div>
                            <p>Cursos</p>
                        </NavLink>
                        <NavLink className="flex my-2 p-2 space-x-3 text-white rounded-md hover:bg-white hover:text-yellow-800" to='/evaluations/inicio' activeStyle={activeStyles}>
                            <div className="pt-1">
                                <IoStatsChart className="w-5 h-5"/>
                            </div>
                            <p>Evaluación</p>
                        </NavLink>
                        <NavLink className="flex my-2 p-2 space-x-3 text-white rounded-md hover:bg-white hover:text-yellow-800" to='/feedback' activeStyle={activeStyles}>
                            <div className="pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pb-1" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </div>
                            <p>Retroalimentación</p>
                        </NavLink>
                </div>
                <div className="flex flex-row absolute inset-x-0 bottom-0 h-10 px-3 text-white">
                    <div className="pt-1 pr-2">
                        <FiLogOut className="w-5 h-5"/>
                    </div>
                    <p className="align-center">Cerrar sesión</p>
                </div>
            </nav>
            <div>
                {children}
            </div>
        </div>
     );
}
export default NavBar;

