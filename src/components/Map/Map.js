import React, { Component } from 'react';
import MapContent from '../../SubComponents/Map/MapContent.js'
import './Map.css';
import axios from 'axios';

class Map extends Component {

	  constructor(props) {
		super(props);
		this.state = {
			isMapInitialized :false,
			mapKey :"AIzaSyAlHOcVj4EZRjlYtT1Nq_iUEDZJPmce8H8",
			zoom: 18
		}
	  }

	areaName = "";

	initMap() {
				let mapObj , marker;
	      		// if(this.props.parentProps.mapObject === undefined) {
	      			mapObj = new window.google.maps.Map(document.getElementById('map'), {
	      			  center: this.props.location,
			          zoom: this.state.zoom
		        	});

	      			// this.props.parentProps.updateGoogleObj(mapObj);
			 		// this.setState({"mapObj" : mapObj});
		            

		            marker = new window.google.maps.Marker({
			          position: this.props.location,
			          map: mapObj,
			          title: this.areaName
			        });
      				mapObj.setCenter(this.props.location);
      			// }
      	
	}

	fetchLocationData() {
		console.log(this.props);
		    return axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.props.location.lat +',' + this.props.location.lng + '&key=' + this.state.mapKey)
		      .then(res => {
		       	console.log(res.data.results[1].formatted_address);
		       	this.areaName = res.data.results[1].formatted_address;
		      });
	}

	updateCurrentState()  {
				this.setState({
					isMapInitialized :true
				})
	 }


	componentWillMount() {
	 	 window.mapAPILoaded = () => {
				
			this.fetchLocationData().then(() => {
					this.updateCurrentState();
				  	this.initMap();
			});
		}

		if(!window.google) {
	  		this.loadGoogleMapJS( null , 'https://maps.googleapis.com/maps/api/js?key='+ this.state.mapKey +'&callback=mapAPILoaded');
		} else {
			window.mapAPILoaded();
		}

	}

	 

	  componentDidMount() {
	  		if(this.state.mapAPIReady) {
	  			this.initMap();
	  		}
	  }

	  loadGoogleMapJS(callback , url) {
		    var script = document.createElement( 'script' );
		    script.type = 'text/javascript';
		    script.src = url;
		    document.body.appendChild( script );  

		    if( callback ) callback();
	  }

   

	 render () {

	 	return (
	 			<div className="map">
	 				<div className="head">
		 				<h1>Current Location</h1>
		 				 <strong>Latitude </strong>: <label>{this.props.location.lat} </label>
		 				<strong>Longitude </strong>: <label>{this.props.location.lng} </label>
	 				</div>
	 				<div className="content">
	 					{ this.state.isMapInitialized ?  <MapContent /> : <h1>Loading Map ...</h1>}
	 				</div>
	 			</div>
	 	);
	 }
}

export default Map;

