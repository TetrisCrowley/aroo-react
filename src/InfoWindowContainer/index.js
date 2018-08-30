///////////////////////////////////////////////
// IDEA ONE
///////////////////////////////////////////////

// import React, {Component} from 'react';


// export class InfoWindowContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {},
//   };
 
//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
 
//   onMapClicked = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       })
//     }
//   };
 
//   render() {
//     return (
//       <Map google={this.props.google}
//           onClick={this.onMapClicked}>
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     )
//   }
// }

// export default InfoWindowContainer;







///////////////////////////////////////////////
// IDEA TWO
///////////////////////////////////////////////

// import React, {Component} from 'react';
// import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';



// class MarkerContainer extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             isOpen: ""
//         }
//     }

//     handleToggleOpen = (i) => {
//         this.setState({
//             isOpen: i
//         })
//     }

//     handleToggleClose = () => {
//         this.setState({
//             isOpen: false
//         })
//     }

//     render(){
//         return(
        
//             <GoogleMap
//                 center={{lat:41.881832, lng: -87.623177}}
//                 zoom={13}
//             >
//                 {this.props.allEvents.map((event, i) => {

//                     return(
//                         <Marker key={i}
//                                 position={{
//                                     lat: event.latitude,
//                                     lng: event.longitude
//                                 }}
//                                 onClick={() => this.handleToggleOpen(i)}          
//                         >

//                         {this.state.isOpen === i ?
//                              <InfoWindow onCloseClick={this.handleToggleOpen}>
//                              <div>
//                                   <h4>{event.name}</h4>
//                                   <a target='_blank' href={event.url}>here</a>
//                              </div>
//                              </InfoWindow> : null
//                          }

//                         </Marker>
//                         )
//                     })
//                 }
                 
                              
//             </GoogleMap>

//             )
//     }
// }




// export default withGoogleMap(MarkerContainer);


