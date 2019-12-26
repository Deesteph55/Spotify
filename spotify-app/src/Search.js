import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import "./Search.css";
import SpotifyWebAPI from "spotify-web-api-js";
const spotifyApi = new SpotifyWebAPI();
let prev = null;

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: ""
    };
    this.cancel = "";
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  handleOnInputChange = event => {
    const query = event.target.value;
    if (!query) {
      this.setState({ query, results: {}, message: "" });
    } else {
      this.setState({ query, loading: true, message: "" }, () => {
        this.fetchResults(query);
      });
    }
  };
  fetchResults = query => {
    // abort previous request, if any
    if (prev !== null) {
      prev.abort();
    }
    // store the current promise in case we need to abort it
    prev = spotifyApi.searchTracks(query, { limit: 20 });
    prev.then(
      function(response) {
        // clean the promise so it doesn't call abort
        prev = null;
        this.setState({
          results: response.tracks.items,
          message: "THEY ARE HERE",
          loading: false
        });
        // ...render list of search results...
      },
      function(err) {
        console.error(err);
        this.setState({
          loading: false,
          message: "Failed to fetch results.Please check network"
        });
      }
    );
  };

  renderSearchResults = () => {
    const { results } = this.state;
    if (Object.keys(results).length && results.length) {
      return (
        <div className="results-container">
          {results.map(track => {
            return (
              <a
                key={track.id}
                href={track.preview_url}
                className="result-items"
              >
                <h6 className="image-username">{track.name}</h6>
                <div className="image-wrapper">
                  <img
                    className="image"
                    src={track.album.images[0].url}
                    alt={track.name}
                  />
                </div>
              </a>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const {message} = this.state; 
    return (
      <div className="container">
        {/*Heading*/}
        <h2 className="heading">Search me</h2>
        {/*Search Input*/}
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            value=""
            id="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
          />
          <Icon color="red" name="search" className="search-icon" />
        </label>
        {this.renderSearchResults()}
        {message && <p className="message">{message}</p>}
      </div>
    );
  }
}

export default Search;
