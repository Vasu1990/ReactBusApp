import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  hashHistory
} from 'react-router-dom';  
import './index.css';
import Layout from './layout.js'


var app = document.getElementById('root');
ReactDOM.render(
	<Router history={hashHistory}>
           <Route exact path='/home' component={Layout}></Route>
 	</Router>,
 app); 