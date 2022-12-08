import "./App.css";
import Bouton from "./components/Bouton";
import Checkbox from "./components/Checkbox";
import ContactList from "./components/ContactList";
import Count from "./components/Count";
import { Route, Routes} from 'react-router-dom';
import Home from "./components/pages/Home";
import {Link} from "react-router-dom";


function App() {

    return (
      <>
      <ul>
        <Link to={"/"}>Accueil</Link>
        <Link to={"/contact"}>Contacts</Link>
        <Link to={"/count"}>Count</Link>

      </ul>

      <Routes>
      <Route path="/" element ={<Home />} />
       <Route path="/contact" element ={<ContactList />}/>
        <Route path="/count" element ={<Count />}/>
    </Routes>

      
      </>

    )

}

export default App;

