import React, { Component } from "react";
import { Grid, Image, Container } from "semantic-ui-react";
import SpotifyWebAPI from "spotify-web-api-js";
import { Suggestions } from "./Suggestions";
import { Compare } from "./Compare";
const spotifyApi = new SpotifyWebAPI();

export class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsOne: [],
      resultsTwo: [],
      queryOne: "",
      queryTwo: "",
      popularityOne: 1,
      popularityTwo: 1
    };
  }

  getArtistOne = (queryOne) => {
    spotifyApi.searchArtists(queryOne).then(response => {
      this.setState({
        resultsOne: response.artists.items
      });
    });
    
  };

  getArtistTwo = (queryTwo) => {
    spotifyApi.searchArtists(queryTwo).then(response => {
      this.setState({
        resultsTwo: response.artists.items
      });
    });

  };

  handleInputOneChange = (event) => {
    const newQuery = event.target.value;
    this.setState(
      {
        queryOne: event.target.value
      },
      () => {
        if (this.state.queryOne && this.state.queryOne.length > 1) {
          if (this.state.queryOne.length % 2 === 0) {
            this.getArtistOne(newQuery);
          }
        }
      }
    );
  };

  handleInputTwoChange = (event) => {
    const newQuery = event.target.value;
    this.setState(
      {
        queryTwo: event.target.value
      },
      () => {
        if (this.state.queryTwo && this.state.queryTwo.length > 1) {
          if (this.state.queryTwo.length % 2 === 0) {
            this.getArtistTwo(newQuery);
          }
        }
      }
    );
  };

  getPopOne = (pop) => {
    this.setState({
        popularityOne: pop
    })
  }

 getPopTwo = (pop) => {
    this.setState({
        popularityTwo: pop
    })
 }

  render() {
    return (
      <div>
        <div>
          <h1>Which one of your favorite artists is the most popular</h1>
        </div>
        <Grid columns={2} padded>
          <Grid.Column>
            <form>
              <input
                value={this.state.queryOne}
                onChange={this.handleInputOneChange}
                placeholder="Artist 1"
                // ref={input => (this.search = input)}
              />
              {this.state.queryOne.length < 1 ? null : (
                <Suggestions results={this.state.resultsOne} getPop={this.getPopOne} />
              )}
              
            </form>
          </Grid.Column>
          <Grid.Column>
            <form>
              <input 
              value={this.state.queryTwo}
              onChange={this.handleInputTwoChange}
              placeholder="Artist 2"
            //   ref={input => (this.search = input)}    
              />
              {this.state.queryTwo.length < 1 ? null : (
                <Suggestions results={this.state.resultsTwo} getPop={this.getPopTwo}/>
              )}

              {/* <p>{this.state.queryTwo}</p> */}
            </form>
          </Grid.Column>
        </Grid>
        <Container>The results
            Artist 1: {this.state.popularityOne}
            Artist 2: {this.state.popularityTwo}
            <Compare popOne={this.state.popularityOne} popTwo={this.state.popularityTwo}/>
        </Container>

      </div>
    );
  }
}
