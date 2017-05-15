import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  hashHistory
} from 'react-router-dom';  
import './index.css';
import Home from './Containers/HomeContainer/home.js'
import GoogleMapView from './Containers/GoogleMapContainer/GoogleMapView.js'
import Nav from './components/Nav/nav.js'



var app = document.getElementById('root');
ReactDOM.render(
	<Router history={hashHistory}>
		<div>
		   <Nav/>
           <Route exact path='/' component={Home}></Route>
           <Route exact path='/map' component={GoogleMapView}></Route>
         </div>
    </Router>,
 app); 