import React from 'react';
import {Link} from "react-router-dom";
import Contact from './Contact/Contact';

// Importation de fichiers comportant les données.
import personnes from"../data";

// Création et exportation du composant ContactList
export default function ContactList(){
    return (
        <>
        <Link to={"/Count"}>count</Link>

{/* Méthode map sure le fichier data pour avoir une liste de contacts */}
        {personnes.map((personne, index) => (
        <Contact key={index} {...personne} />
      ))}
        </>

    );

}

