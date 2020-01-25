import React, { Component } from "react";
import { SearchEList } from "./SearchEList";
import SpotifyWebAPI from "spotify-web-api-js";
const spotifyApi = new SpotifyWebAPI();

export class SearchE extends Component {
  constructor(props) {
    super(props);
    // let options: {artist,album,track,playlist};
    this.state = {
      trackR: [],
      artistR: [],
      albumR: [],
      playlistR: [],
      query: ""
    };
  }

  handleOnInputChange = event => {
    const newQuery = event.target.value;
    this.getAlbum(newQuery);
    this.getTrack(newQuery);
    this.getArtist(newQuery);
    this.getPlaylist(newQuery);

    this.setState({ query: event.target.value });
  };

  getTrack = query => {
    spotifyApi.searchTracks(query, {limit: 4}).then(response => {
      this.setState({
        trackR: response.tracks.items
      });
    });
  };

  getArtist = query => {
    spotifyApi.searchArtists(query, {limit: 4}).then(response => {
      this.setState({
        artistR: response.artists.items
      });
    });
  };

  getAlbum = query => {
    spotifyApi.searchAlbums(query, {limit: 4}).then(response => {
      this.setState({
        albumR: response.albums.items
      });
    });
  };

  getPlaylist = query => {
    spotifyApi.searchPlaylists(query, {limit: 4}).then(response => {
      this.setState({
        playlistR: response.playlists.items
      });
    });
  };

  //   renderReturned = () => {
  //     let found = <h1>Find me</h1>;
  //     if(this.state.results) {
  //       found = <Searc
  //     }
  //     return found;
  //   }

  render() {
    return (
      <div className="container">
        {/* <div> */}
        <input
          value={this.state.query}
          onChange={e => this.handleOnInputChange(e)}
          placeholder="Search"
        />
        {/* {this.renderReturned()} */}
        <SearchEList
          track={this.state.trackR}
          artist={this.state.artistR}
          album={this.state.albumR}
          playlist={this.state.playlistR}
        />
      </div>
    );
  }
}
