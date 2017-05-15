import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory
} from 'react-router-dom';  
import './index.css';
import './components/Nav/nav.css'
import Home from './Containers/HomeContainer/home.js'
import GoogleMapView from './Containers/GoogleMapContainer/GoogleMapView.js'


var app = document.getElementById('root');
ReactDOM.render(
	<Router history={hashHistory}>
		<div>
			 <div className="nav-bar">
	         	<ul className="nav-links">
	         		<li><Link to="/">Home</Link></li>
	         		<li><Link to="/map">Map</Link></li>
	         	</ul>
     		 </div>
           <Route exact path='/' component={Home}></Route>
           <Route exact path='/map' component={GoogleMapView}></Route>
         </div>
    </Router>,
 app); 