import React from "react";


export const Tracks = ({ displayTracks, tracked }) => {
  const divStyle = {
    height: "500px",
    overflowY: "scroll"
  };


  //var songs = tracked.items;
  
  const songs = tracked.filter(item => item.track);
  console.log("songs");
  console.log(typeof songs);
  console.log(songs);


  return (
    <div style={divStyle}>
      <h1>Tracks</h1>
      {console.log("track from tracks")} 
      {console.log(typeof tracked)}
       {console.log(tracked)} 

       <button onClick={displayTracks}>My tracks</button>
  
       <ol>
         {
          songs.map((song) =>   {
            console.log("the song");
            console.log(songs);
            return <li key={song.track.id}> {song.track.name} </li>
          })
        }   
      </ol>

    </div>
  );
};
