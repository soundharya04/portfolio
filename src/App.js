import React, { Component, ReactDOM } from "react";

//Components
import About from "./Components/About";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

//styles
import "./App.css";
import "./grid.css";
//import "./normalize.css";
import "./ionicons.min.css";
import "./bootstrap.css";

//images
import profpic from "./images/profpic.jpg";

class App extends Component {
  render() {
    return (
      <div class="body">
        <div class="layout">
          <Navbar></Navbar>
          <Header></Header>
          <About></About>
        </div>
      </div>
    );
  }
}

export default App;
