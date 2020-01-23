import React from 'react';
import { Playing } from "./Playing";
import { Tracks } from "./Tracks";
import { Search } from "./Search";

export const Dashboard = ({showTracks, showSearch}) => {
    return (
        <div>
        
            
        {/* {showTracks && !showSearch && <Tracks />}
        {showSearch && !showTracks && <Search />} */}
        {showTracks &&  <Tracks />}
        {showSearch && <Search />}
        
        </div>
    )
}
