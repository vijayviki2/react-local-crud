import React from "react";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../data/user";
import { toast } from "react-toastify";

function Menu(props) {
    let loginStatus = localStorage.getItem('loginStatus') || false  

    const logoutHandler = async () => {
       if(window.confirm('Are you sure to logout?')){
        await logoutUser();
       }else {
            toast.warning('logout Terminated')
       }
        }
   

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="container">
                <NavLink to={'/'} className="navbar-brand">CRUD-App</NavLink>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu"><span className="navbar-toggler-icon"></span></button>

                <div className={loginStatus ? "collapse navbar-collapse justify-content-between":"collapse navbar-collapse justify-content-end"} id="menu">
                   { 
                    loginStatus ? (
                   <React.Fragment>
                     <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/Create'} className="nav-link">Create</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className="navbar-nav">
                            <NavLink onClick={logoutHandler} className="btn btn-danger">Logout</NavLink>
                        </li>
                    </ul>
                   </React.Fragment>
                    ):(
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink to={'/Login'} className="nav-link">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={'/register'} className="nav-link">Register</NavLink>
                        </li>
                    </ul>)
                        }                       
                </div>
            </div>
        </nav>
    )
}
export default Menu