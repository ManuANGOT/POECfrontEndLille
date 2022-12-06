import Welcome from "./Welcome/Welcome";
import "./app.css";
import Contact from "./Contact/Contact";

function App() {
  const paragraphe = true;
  
  const button = true;
 

  const personnes = [
    {
      nom: "Doe",
      prenom: "John",
      email: "john.doe@toto.to",
      telephone: "555.3562",
    },
    {
      nom: "Sparrow",
      prenom: "Jane",
      email: "john.doe@toto.to",
      telephone: "555.3562",
    },
    {
      nom: "Doe",
      prenom: "Jane",
      email: "john.doe@toto.to",
      telephone: "555.3562",
    },

    {
      nom: "WindRunner",
      prenom: "John",
      email: "john.doe@toto.to",
      telephone: "555.3562",
    },

    {
      nom: "Menethil",
      prenom: "John",
      email: "john.doe@toto.to",
      telephone: "555.3562",
    },
  ];

  return (
    <>
 
      <h1 className={paragraphe? "para" : "dauphin"}> Contacts</h1>
      {personnes.map((personne) => (
        <Contact {...personne} />
      ))}
    </>
  );
}

export default App;
