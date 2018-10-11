import React, { Component } from "react";
import MapView from "./MapView";

class UI extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MapView />
      </div>
    );
  }
}

export default UI;
