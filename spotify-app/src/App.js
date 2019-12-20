import React, { Component } from "react";
import "./App.css";
import SpotifyWebAPI from 'spotify-web-api-js';
import { Playing } from "./Playing";
import { Tracks } from "./Tracks";
import axios from 'axios';

const spotifyApi = new SpotifyWebAPI();

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if(token){
      spotifyApi.setAccessToken(token)
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: {
        name: 'Not Checked',
        image: ''
      },
      tracks: [{
        id:'',
        name: '',
        artist: '',
        album: ''
      }],
    }
    
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getNowPlaying = () => {
    spotifyApi.getMyCurrentPlaybackState()
     .then((response) => {
       this.setState({
         nowPlaying: {
           name: response.item.name,
           image: response.item.album.images[0].url
         }
       });
     })
  }
  getMyTracks = () => {
    spotifyApi.getMySavedTracks({limit: 50})
   // axios.get("https://api.spotify.com/v1/me/tracks?limit=50")
     .then((response) => {
       console.log("the response")
       console.log(typeof response)
       console.log(response);
       this.setState({
        tracks: response.items
       });
     })  
  }
  render() {
    return (
      <div className="App">
       
        <h1>HOLLA</h1>
        <a href="http://localhost:8888">
          <button>Login with Spotify</button>
       </a>
       
       <Playing displayPlaying={this.getNowPlaying} now={this.state.nowPlaying}/>
       {console.log("track from app")} 
       {console.log(typeof this.state.tracks)}
       {console.log(this.state.tracks)} 
       <Tracks displayTracks={this.getMyTracks} tracked={this.state.tracks} />
      </div>
    );
  }
}

export default App;
