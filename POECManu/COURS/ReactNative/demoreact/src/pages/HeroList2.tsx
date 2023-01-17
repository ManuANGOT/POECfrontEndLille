import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card/card";
import SuperHeros from "../data/SuperHeros";
import SuperHero from "../models/SuperHero";

const HerosList = () => {
  const [afficher, setAfficher] = useState<SuperHero[]>([]);

  useEffect(() => {
    fetch('http://localhost:3004/superHeros')
    .then
  }, []);

  return (
    <>
      {afficher.map((hero) => (
        <Card key={hero.id} superHero={hero} />
      ))}
    </>
  );
};
export default HerosList;