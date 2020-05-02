import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

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
      <Footer />
    </>
  );
};

export default App;
