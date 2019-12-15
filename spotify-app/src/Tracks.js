import React from "react";


export const Tracks = ({ displayTracks, tracked, limit }) => {
  const divStyle = {
    height: "500px",
    overflowY: "scroll"
  };
  return (
    <div style={divStyle}>
      <h1>Tracks</h1>
      {console.log(tracked)}
       <button onClick={displayTracks}>My tracks</button> 
       <ul>
        {tracked.map((track) => (
          <li key={tracked.id}>{tracked.name}</li>
        ))}
      </ul> 
{/* <p>{tracked.name}</p> */}
    </div>
  );
};
