import React, { Component } from "react";
import "./App.css";
import SpotifyWebAPI from 'spotify-web-api-js';
import { Playing } from "./Playing";
import { Tracks } from "./Tracks";

const spotifyApi = new SpotifyWebAPI();

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if(token){
      spotifyApi.setAccessToken(token)
    }
    this.state ={
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
      limit: ''
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
    spotifyApi.getMySavedTracks()
     .then((response) => {
      // console.log(response);
       this.setState({
         tracks: [{
           id: response.items[0].track.id,
           name: response.items[0].track.name,
           artist:response.items[0].track.artists[0].name,
           album: response.items[0].track.name
         }],
         limit: 50
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
       {/* <div>Now playing: {this.state.nowPlaying.name}</div>
        <div>
          <img src={this.state.nowPlaying.image} style={{ width: 100 }} />
        </div>
        <button onClick={() => this.getNowPlaying()}>
          Check Now Playing
    </button>*/}

       <Playing displayPlaying={this.getNowPlaying} now={this.state.nowPlaying}/>
       <Tracks displayTracks={this.getMyTracks} tracked={this.state.tracks} limit={this.state.limit}/>
      </div>
    );
  }
}

export default App;
