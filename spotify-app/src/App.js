import React, { Component } from "react";
import "./App.css";
import SpotifyWebAPI from "spotify-web-api-js";
import { Playing } from "./Playing";
import { Tracks } from "./Tracks";
import { Search } from "./Search";
import { Button, Segment } from "semantic-ui-react";
//NAME OF THIS APP IS DENS
const spotifyApi = new SpotifyWebAPI();
//spotifyApi.setPromiseImplementation(Q);

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false
    };
  }
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  render() {
    return (
      <div className="App">
        <h1>DENS</h1>
        <Segment inverted>
          <a href="http://localhost:8888">
            {/* <button>Login with Spotify</button> */}
            <Button inverted color="red">
              {" "}
              Login to Spotify
            </Button>
          </a>
        </Segment>

        {/* <Playing /> */}
        {/* <Tracks /> */}
        {/* <Search /> */}
      </div>
    );
  }
}

export default App;
