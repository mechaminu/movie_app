import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import './Navigation.css'

function Navigation() {
    return <div className="navigation">
        <Link to="/"><div className="logo_area"><FontAwesomeIcon className="logo" icon={faFilm} size="3x" color="gray"/><span className="logoText">CinemaList</span></div></Link>
        <div className="menu_area">
            {/* <Link to="/old">Old Home</Link> */}
            <Link to="/about">About</Link>
        </div>
    </div>
}

export default Navigation;