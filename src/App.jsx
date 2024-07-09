import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
