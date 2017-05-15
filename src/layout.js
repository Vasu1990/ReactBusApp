import React from 'react';
import './components/Nav/nav.css'
import {
  Route,
  Link
} from 'react-router-dom'; 
import Home from './Containers/HomeContainer/home.js'
import GoogleMapView from './Containers/GoogleMapContainer/GoogleMapView.js'


const Layout = ({ match }) => (
  <div>
				<h1>Layout</h1>

  		 <div className="nav-bar">
         	<ul className="nav-links">
         		<li><Link to={`${match.url}/map`}>Map</Link></li>
         	</ul>
     	 </div>
 				<Route path={`${match.url}`} component={Home}/>
 				<Route path={`${match.url}/:key`} component={GoogleMapView}/>
			
  </div>
)

export default Layout;