import React from "react";
import { Playing } from "./Playing";
import { Tracks } from "./Tracks";
import { Popular } from "./Popular";
import { SearchE } from "./SearchE";

export const Dashboard = ({ showSearchE, showTracks, showPopular }) => {
  const divStyle = {
    //backgroundImage: `url(${'https://trianglify.io/p/w:1440!h:900!x:PuBu!v:0.774!c:0.025!s:8fbb47'})`,
   // backgroundColor: 'red',
    width: '100',
    marginLeft: '15em',
    marginRight: '0em'
};
  return (
    <div style={divStyle}>
      {showTracks && <Tracks />}
      {showSearchE && <SearchE />}
      {showPopular && <Popular/>}

      {/* <Popular/> */}
      {/* <Search/> */}
      {/* <Playing/> */}
      {/* <SearchE/> */}
    </div>
  );
};
