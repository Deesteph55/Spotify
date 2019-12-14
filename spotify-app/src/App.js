import React, { Component } from "react";
import "./App.css";
import SpotifyWebAPI from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebAPI();

class App extends Component {
  /*state = {
    contacts: []
  };*/

  /* componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/users").then(response => {
      console.log(response);
      this.setState({
        contacts: response.data
      });
    });
  }
*/

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
      }
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

  getNowPlaying(){
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
  render() {
    return (
      <div className="App">
        {/*} <img src={logo} className="App-logo" alt="logo" />
        <h1>Spotify</h1>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
          </div>*/}
        <h1>HOLLA</h1>
        <a href="http://localhost:8888">
          <button>Login with Spotify</button>
        </a>
        <div>Now playing: {this.state.nowPlaying.name}</div>
        <div>
          <img src={this.state.nowPlaying.image} style={{ width: 100 }} />
        </div>
        <button onClick={() => this.getNowPlaying()}>
          Check Now Playing
        </button>
      </div>
    );
  }
}

export default App;
