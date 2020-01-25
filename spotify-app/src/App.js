import React, { Component } from "react";
import "./App.css";
import SpotifyWebAPI from "spotify-web-api-js";
import { Button, Segment, Grid, GridColumn, Container } from "semantic-ui-react";
import { Navbar } from "./Navbar";
import { Dashboard } from "./Dashboard";
//NAME OF THIS APP IS DENS
const spotifyApi = new SpotifyWebAPI();
var token;
var rtoken;

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    token = params.access_token;
    rtoken = params.refresh_token;

    if (token) {
      spotifyApi.setAccessToken(token);
    }

    this.state = {
      loggedIn: token ? true : false,
      showTracks: false,
      showSearch: false,
      showNowPlaying: false,
      showPopular: false
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

  handleOpenSearch = () => {
    this.setState({
      showSearch: true,
      showTracks: false,
      showPopular: false
    });
  }

  handleOpenTracks = () => {
    this.setState({
      showTracks: true,
      showSearch: false,
      showPopular: false
    });
  }

  handleOpenPopular = () => {
    this.setState({
      showTracks: false,
      showSearch: false,
      showPopular: true
    });
  }

  render() {
    const {showTracks, showSearch} = this.state;
    const divStyle = {
        marginRight: '0em',
        paddingRight: '0px'
    };
    return (
      <div className="App" style={divStyle}>
        <h1>DENS</h1>
        {!this.state.loggedIn ? (
          <a href="http://localhost:8888">
            <Button inverted color="red">
              {" "}
              Login to Spotify
            </Button>
          </a>
        ) : null}

        <Navbar openSearch={this.handleOpenSearch} openTracks={this.handleOpenTracks}/>
        <Container style={{  width: '100%', paddingRight: '0px' }}>
          <Dashboard showSearch={showSearch} showTracks={showTracks}/>
        </Container>
        
      </div>
    );
  }
}

export default App;

