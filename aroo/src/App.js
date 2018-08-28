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
      parks: []
      // loggedIn: false
    }
  }



  getParks = async () => {
    try {
      const parks = await fetch('https://api.yelp.com/v3/businesses/search?categories=dog_parks&location=Chicago, IL')
      const parksJson = await parks.json();
      console.log(parksJson, ' this is parks')
      return parksJson
    } catch(err) {
        console.log(err, 'error in catch block')
        return err
    }
  }



  componentDidMount(){
    this.getParks().then((data) => {
      console.log(data, 'this is data in componentDidMount in App')
      this.setState({parks: data.features})
    });
  }


// try a ternary with parkslist -- only append if parkslist has values
  render() {
    return (
      <div className='app'>

        <div className='mapContainer'>
          <MapContainer map={this.map} />
        </div>

        <div className='parkContainer'>
          <h1>Dog parks in your area: </h1>
          <ParksList parks={this.state.parks} />
        </div>
        
      </div>
    );
  }
}

export default App;

// {this.state.editedPlace.id === "" ? null :  <EditPlace placeToEdit={this.state.editedPlace.destination } editPlace={this.editPlace}/>}

// {this.state.getParks.id == "" ? null : <ParksList parks={this.state.getParks.____} getParks={this.____}/>}








