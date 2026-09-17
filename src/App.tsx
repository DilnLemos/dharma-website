import About from "./components/About";
import Coach from "./components/Coach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Training from "./components/Training";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Training />
      <Schedule />
      <Coach />
      <Location />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
