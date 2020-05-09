import React, { Component, ReactDOM } from "react";

//Components
import About from "./Components/About";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";

//styles
import "./App.css";
import "./grid.css";
//import "./normalize.css";
import "./ionicons.min.css";
import "./bootstrap.css";

class App extends Component {
  render() {
    return (
      <div class="body">
        <div class="layout">
          <Navbar></Navbar>
          <Header></Header>
          <About></About>
          <Projects></Projects>
          <Contacts></Contacts>
        </div>
      </div>
    );
  }
}

export default App;
