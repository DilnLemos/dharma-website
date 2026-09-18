import { domAnimation, LazyMotion } from "motion/react";
import { lazy, Suspense } from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const Training = lazy(() => import("./components/Training"));
const Schedule = lazy(() => import("./components/Schedule"));
const Coach = lazy(() => import("./components/Coach"));
const Location = lazy(() => import("./components/Location"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={null}>
        <Training />
        <Schedule />
        <Coach />
        <Location />
        <Contact />
        <Footer />
      </Suspense>
    </LazyMotion>
  );
}

export default App;
