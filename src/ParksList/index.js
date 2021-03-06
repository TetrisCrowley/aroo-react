import React, {Component} from 'react';
// import InfoWindow from '../InfoWindow';

const ParksList = (props) => {

  console.log(props.parks, " props, in ParksList");

                                    // a callback is an function that is passed as an argument to another function
  const parksList = props.parks.map((park, i) => {
    console.log(park)

    // this will be the JSX element corresponding to ONE --ONE-----ONE ONE ONE park
    return <li key={i}>{park.name}, {park.location.address1}, {park.location.city}, {park.location.state} {park.location.zip_code}</li>

  })
  // parksList is now an array of JSX elements and can be rendered inside {} below


  return(
    <div className='results'>
      <h1>Dog parks in your area: </h1>
      {(props.parks.length > 0)
      ? <ol>{parksList}</ol>
      : null
      } 
      {(props.showError === true && props.parks.length === 0)
      ? <h3>Sorry! No parks found. Please try again or enter a valid zip code</h3>
      : null
      }
    </div>
  )
}
    // ternary statement render below if props.parks.length is 0, otherwise, render above

      


export default ParksList