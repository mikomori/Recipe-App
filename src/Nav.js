import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'

const Nav = props =>
    <div className="Nav">
        <Link id="logo" to="/">RECIPE APP</Link>
        <div id="navbar">
            <div id="add-new" onClick={props.onClick}><span>+</span><p>Add New</p></div>
            <Link id="about" to="/about">About</Link>
        </div>            
    </div>
  
export default Nav;