import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/movies";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import Navbar from "./components/navbar";
library.add(fasHeart, farHeart);
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main role="main" className="container">
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
