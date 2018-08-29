import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParksList from './ParksList';
import MapContainer from './MapContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userId: '',
      userLocation: '',
      parks: [],
      lat: 37.09024,
      lng: -95.712891,
      zoom: 3.8
      // loggedIn: false
    }
  }


  // adjust the map
  handleSubmit = async (e) => {
    e.preventDefault()
    console.log(this.state.userLocation)
    this.getParks(this.state.userLocation)
  }


  getParks = async (parklocation) => {
    try {
      console.log('http://localhost:9000/parks/search/' + parklocation)
      const parks = await fetch('http://localhost:9000/parks/search/' + parklocation)
      const parksJson = await parks.json();
      console.log(parksJson, ' this is parksJson')
      this.setState({
        parks: parksJson.businesses,
        lat: parksJson.businesses[0].coordinates.latitude,
        lng: parksJson.businesses[0].coordinates.longitude,
        zoom: 12
      })
    } catch(err) {
        console.log(err, 'error in catch block')
        return err 
    }
  }

  // data and parksJson are the same thing, but different variables


  componentDidMount(){
    // this.getParks()
    // .then((data) => {
    //   console.log(data, 'this is data in componentDidMount in App')
    //   this.setState({parks: data.businesses})
    // });
  }


  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      userLocation: e.target.value
    })
  }



  render() {
    return (
      <div className='app'>

        <form className='search' onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='search' value={this.state.parks.location} placeholder='Enter City or Zip' />
          <button>Fetch!</button>
        </form>


        <div className='parkContainer'>
          <h4>When visiting your local dog park, please follow the posted rules. Each park's individually posted rules and regulations will help keep dog parks safe and open/available to all dogs.</h4>
          <ParksList parks={this.state.parks} />
        </div>


        <div className='mapContainer'>
          <MapContainer 
            parks={this.state.parks} 
            map={this.map} 
            lat={this.state.lat}
            lng={this.state.lng}
            zoom={this.state.zoom}
          />
        </div>
        
      </div>
    );
  }
}



export default App;

// {this.state.editedPlace.id === "" ? null :  <EditPlace placeToEdit={this.state.editedPlace.destination } editPlace={this.editPlace}/>}

// {this.state.getParks.id == "" ? null : <ParksList parks={this.state.getParks.____} getParks={this.____}/>}








