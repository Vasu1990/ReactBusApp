import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
         <div className="nav-bar">
         	<ul className="nav-links">
         		<li><Link to='/home'>Home</Link></li>
         		<li><Link to='/map'>Map</Link></li>
         	</ul>
     	 </div>
    );
  }
}

export default Nav;
