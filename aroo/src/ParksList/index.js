import React from 'react';

const ParksList = (props) => {

  console.log(props, " props, in ParksList");

  const parksList = props.parks.map((parks, i) => {
    console.log(park, "this is a park on the map")
    return <li key={i}>{park.properties.name}</li>

  })

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