import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <section id="home" className="">
      <Home />
    </section>
    <section id="about" className="">
      <About />
    </section>
    <section id="services" className="">
      <Services />
    </section>
    <section id="contact" className="">
      <Contact />
    </section>
    <Footer />
  </StrictMode>
);
