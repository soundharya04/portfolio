<<<<<<< HEAD
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
          <Projects></Projects>
          <Contacts></Contacts>
        </div>
      </div>
    );
  }
}
=======
import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <h1>hi</h1>
    </>
  );
};
>>>>>>> 503598573ac0ba393a8c52698f5db1fb84b2c70d

export default App;
