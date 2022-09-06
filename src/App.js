import { Article, Brand, CTA, Feature, Navbar } from "./components";
import {
  Footer,
  Header,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
} from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
