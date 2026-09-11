import About from "./components/About";
import Coach from "./components/Coach";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Training from "./components/Training";
import Why from "./components/Why";

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Training/>
    <Schedule/>
    <Coach/>
    <Why/>
    <Gallery/>
    <Location/>
    <Contact/>
    </>

  );
}

export default App;
