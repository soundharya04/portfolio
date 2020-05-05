import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Services from "./Components/Services";

const App = () => {
  React.useEffect(() => {
    if (document.querySelector("#root") !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      console.log("loaded");
    }
  }, []);
  return (
    <>
      <Header />
      <Main />
      <About />
      <Contact />
      <Skills />
      <Services />
      <Footer />
    </>
  );
};

export default App;
