import React, { Component } from "react";
import logo from "./spotify-logo.jpg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/users").then(response => {
      console.log(response);
      this.setState({
        contacts: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Spotify</h1>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
