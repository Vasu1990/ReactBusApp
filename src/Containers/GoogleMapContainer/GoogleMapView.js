import React, { Component } from 'react';
import Map from '../../components/Map/Map.js'

class GoogleMapView extends Component {

	constructor() {
		super();
			this.state = {
				locationLoaded : false
			}
	}

	pos = {};

	componentWillMount() {
		this.init();
	}


	init() {
		let currentPos;
		if (typeof(Storage) !== "undefined") {
		    if(window.localStorage.getItem("location") !==  null && window.localStorage.getItem("location") !== "undefined") {
		    	 currentPos =  window.localStorage.getItem("location");
		    	 this.updateLocation(JSON.parse(currentPos));
		     } else {
		     	this.getCurrentLocation();
		     }
		} else{
				this.getCurrentLocation();
		}
	}

	updateLocation(currentPos)  {
			var tempData = {
			 			"latitude" : currentPos.latitude  ,
			 			"longitude" : currentPos.longitude
			};

	     	window.localStorage.setItem("location" , JSON.stringify(tempData));
	 		this.updateState(currentPos);
	}

	getCurrentLocation() {
 			if (navigator.geolocation) {
			        navigator.geolocation.getCurrentPosition((pos) => {
			        	this.updateLocation(pos.coords);
			        });
			   	}else {
			       alert('current location not found');
			       return;	
			   }
	}


	updateState(position , cb) {

		this.pos = {
					lat :position.latitude, 
					lng : position.longitude
				};
		this.setState({
				locationLoaded : true
			});
	}



	 render () {
	 	return (

	 		<div className="googleMapContainer">
	 		{  this.state.locationLoaded ? <Map  location={ this.pos }/> : <h1>Fetching Location...</h1> } 

	 		</div>
	 	);

	 }
}

export default GoogleMapView;