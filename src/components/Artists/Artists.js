import React, { Component } from "react";
import Artist from "./Artist/Artist";

class artist extends Component {
  render() {
    return this.props.artists.map((a, index) => (
      <Artist
        name={a.name}
        frequency={a.frequency}
        rating={a.rating}
        // key={Math.floor(Math.random() * 1000)}
        key={index}
      />
    ));
  }
}

export default artist;
