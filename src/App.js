import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Resume from "./Components/Resume";

const App = () => {
  React.useEffect(() => {
    if (document.querySelector("#root") !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      <Services />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
