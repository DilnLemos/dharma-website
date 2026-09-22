import { domAnimation, LazyMotion } from "motion/react";
import { lazy, Suspense } from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

// Lazy-load below-the-fold sections independently to allow parallel chunk fetching.
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

      {/* Suspense boundaries per-section (or small groups) so chunks are requested in parallel */}
      <Suspense fallback={null}>
        <Training />
      </Suspense>

      <Suspense fallback={null}>
        <Schedule />
      </Suspense>

      <Suspense fallback={null}>
        <Coach />
      </Suspense>

      <Suspense fallback={null}>
        <Location />
      </Suspense>

      <Suspense fallback={null}>
        <Contact />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </LazyMotion>
  );
}

export default App;
