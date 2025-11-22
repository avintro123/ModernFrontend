import React from "react";
import Navabar from "./components/Navabar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main>
      <Navabar />
      <Hero />
      <ProductViewer />
    </main>
  );
}
