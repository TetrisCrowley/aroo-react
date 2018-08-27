import React, {Component} from 'react';

const ParksList = (props) => {

  console.log(props, " props, in ParksList");

                                    // a callback is an function that is passed as an argument to another function
  const parksList = props.parksList.map((park, i) => {

    // this will be the JSX element corresponding to ONE --ONE-----ONE ONE ONE park
    return <li key={i}>{park.properties.name}</li>

  })
  // parksList is now an array of JSX elements and can be rendered inside {} below

  return(
    <div>
      <h4>Parks</h4>
      <ul>
        {parksList}
      </ul>
    </div>
  )
}


export default ParksList