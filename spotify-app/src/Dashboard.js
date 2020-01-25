import React from "react";
import { Playing } from "./Playing";
import { Tracks } from "./Tracks";
import { Search } from "./Search";
import { Popular } from "./Popular";
import { SearchE } from "./SearchE";

export const Dashboard = ({ showTracks, showSearch }) => {
  const divStyle = {
    //backgroundImage: `url(${'https://trianglify.io/p/w:1440!h:900!x:PuBu!v:0.774!c:0.025!s:8fbb47'})`,
   // backgroundColor: 'red',
    width: '100',
    marginLeft: '15em',
    marginRight: '0em'
};
  return (
    <div style={divStyle}>
      {/* {showTracks && <Tracks />}
      {showSearch && <Search />} */}
      {/* <Popular/> */}
      {/* <Search/> */}
      {/* <Playing/> */}
      <SearchE/>
    </div>
  );
};
