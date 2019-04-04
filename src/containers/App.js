import React, { Component } from "react";
// import Artist from "../components/Artists/Artist/Artist";
import Artists from "../components/Artists/Artists";

class App extends Component {
  state = {
    artists: [
      { name: "TESTPILOT", frequency: 3, rating: 5 },
      { name: "Giuseppe Ottaviani", frequency: 6, rating: 5 },
      { name: "Nicole Moudaber", frequency: 2, rating: 4.5 }
    ]
  };

  addArtistHandler = () => {
    const artists = [...this.state.artists];
    artists.push({
      name: "Random Artist",
      frequency: Math.floor(Math.random() * 10),
      rating: Math.floor(Math.random() * 5 + 1)
    });
    this.setState({ artists: artists });
  };

  render() {
    return (
      <div className="App">
        <h1>Festival Tracker</h1>
        <button onClick={this.addArtistHandler}>Add Artist</button>
        <Artists artists={this.state.artists} />
      </div>
    );
  }
}

export default App;
