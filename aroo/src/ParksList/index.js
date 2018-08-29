import React, {Component} from 'react';

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
    <div>
      <h1>Dog parks in your area: </h1>
      <ul>
        {parksList}
      </ul>
    </div>
  )
}


export default ParksList