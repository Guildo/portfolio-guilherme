import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <h1>Guilherme Jin Kajimura</h1>
      <About />
      <Projects />
      <Contact />
      <a href="/curriculo.pdf" download>Baixar Currículo</a>
    </div>
  );
};

export default App;
