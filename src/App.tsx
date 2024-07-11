import React from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Faq from "./components/Faq";
import Planet from "./components/Planet";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Planet />
      <Gallery />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
