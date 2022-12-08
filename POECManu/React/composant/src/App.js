import Welcome from "./Welcome/Welcome";
import "./app.css";
import Contact from "./component/Contact/Contact";
import { useState } from "react";
import personnes from "./data";
import Count from "./component/Count";

function App() {
  
  return (
    <> 
      <h1>Liste de Contacts</h1>
      <Count />
      
      {personnes.map((personne, index) => (
        <Contact key={index} {...personne} />
      ))}
    </>
  );
}

export default App;


