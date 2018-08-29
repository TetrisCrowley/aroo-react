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
      width: '600px',
      height: '400px'
    }


    const parkMarkers = this.props.parks.map((park, i) => {
      return(
        <Marker 
          key={i}
          name={park.name}
          position={{
            lat: park.coordinates.latitude,
            lng: park.coordinates.longitude,
          }}
        />
      )
    })


    return(
      <Map google={this.props.google}
        style={style}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
        center={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
        onReady={this.fetchPlaces}
        visible={true}
        zoom={this.props.zoom}
        onClick={this.onMapClicked}>
          {parkMarkers}
      </Map>
    );
  }
}

export default GoogleApiWrapper({ 
  apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
  })(MapContainer)