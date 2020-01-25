import React, { Component } from "react";
import SpotifyWebAPI from "spotify-web-api-js";
import { List, Image } from "semantic-ui-react";
import {token, rtoken} from "./App"
const spotifyApi = new SpotifyWebAPI();

export class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    };
  }

  getMyTracks = () => {
    spotifyApi.getMySavedTracks({ limit: 50 }).then(response => {
      console.log("the response");
      console.log(typeof response);
      console.log(response);
      this.setState({
        tracks: response.items
      });
    });
  };

  if (token) {
    spotifyApi.setAccessToken(token);
  }
  

  componentDidMount() {
    this.getMyTracks();
  }

  render() {
    const songs = this.state.tracks.filter(item => item.track);
    // const divStyle = {
    //   height: "800px",
    //   overflowY: "scroll"
    // };
    return (
      <div>
        <List selection >
          {songs.map(song => (
            <List.Item key={song.track.id}>
              <Image
                avatar
                src={song.track.album.images[0].url}
              />
              <List.Content>
                <List.Header color="red" as="a">{song.track.name}</List.Header>
                <List.Description>
                  By{" "}
                  <a>
                    <b>{song.track.artists[0].name}</b>
                  </a>
                  {" "}
                </List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default Tracks;

