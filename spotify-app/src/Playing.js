import React from "react";


export const Playing = ({displayPlaying, now}) => {
  return (
    <div>
      {/* <div>Now playing: {this.state.nowPlaying.name}</div> */}
      <div>Now playing: {now.name}</div>
      <div>
        <img src={now.image} style={{ width: 100 }} alt={'song pic'} />
      </div>
      <button onClick={displayPlaying}>Check Now Playing</button>
    </div>
  );
};
