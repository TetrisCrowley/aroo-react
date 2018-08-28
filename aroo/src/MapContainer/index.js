import React, {Component} from 'react';
import ParksList from '../ParksList';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {


  fetchPlaces(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
  }


  render(){
    console.log(this.props, ' this is the map thingy')
    const style = {
      width: '500px',
      height: '500px'
    }


    const parkMarkers = this.props.parks.map((park, i) => {
      // console.log(park.coordinates.latitude, park.coordinates.longitude)
      return(
        <Marker 
          key={i}
          name={park.name}
          position={{
            lat: park.coordinates.latitude,
            lng: park.coordinates.longitude
          }}
        />
      )
    })


    return(
      <Map google={this.props.google}
        style={style}
        initialCenter={{
          lat: 41.8781,
          lng: -87.6298
        }}
        onReady={this.fetchPlaces}
        visible={true}
        zoom={4}
        onClick={this.onMapClicked}>
          {parkMarkers}
      </Map>
    );
  }
}

export default GoogleApiWrapper({ 
  apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
  })(MapContainer)