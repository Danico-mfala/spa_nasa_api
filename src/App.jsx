import "./App.css";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Planet";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Gallery />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
