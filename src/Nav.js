import React, { Component } from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
        <div className="Nav">
            <Link id="logo" to="/">RECIPE APP</Link>
            <div id="navbar">
                <div id="add-new" onClick={this.props.onClick}><span>+</span><p>Add New</p></div>
                <Link id="about" to="/about">About</Link>
            </div>            
        </div>
        );
    }
}
  
export default Nav;