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
  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);
    dom.addEventListener("mousemove", (e) => {
      return <Navbar></Navbar>;
    });
  }
  render() {
    return (
      <div class="body">
        <div class="layout">
          <Header></Header>
          <About></About>
        </div>
      </div>
    );
  }
}

export default App;
