import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo2.png"
import {UserContext} from '../App'

const Navbar = () => {
    const {state} = useContext(UserContext);
    const RenderMenu=()=>{
  
       if(state && localStorage.getItem("tok")){
           return(
               <>
               <li className="nav-item"> <NavLink className="nav-link" to="/" data-abc="true">HOME </NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/about" data-abc="true">ABOUT</NavLink> </li>
                      <li className="nav-item"> <NavLink className="nav-link" to="/contact" data-abc="true">CONTACT</NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/signup" data-abc="true">SIGNUP</NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/logout" data-abc="true">LOGOUT</NavLink> </li>
    
               </>
           )
       }
       else{
           return(
               <>
               <li className="nav-item"> <NavLink className="nav-link" to="/" data-abc="true">HOME </NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/about" data-abc="true">ABOUT</NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/contact" data-abc="true">CONTACT</NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/signup" data-abc="true">SIGNUP</NavLink> </li>
                        <li className="nav-item"> <NavLink className="nav-link" to="/login" data-abc="true">LOGIN</NavLink> </li>
                       
    
               </>
           )
       }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> <NavLink className="navbar-brand" to="#" data-abc="true"><img className="image" src={logo} alt=""  /></NavLink> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav ms-auto">
                        <RenderMenu/>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
