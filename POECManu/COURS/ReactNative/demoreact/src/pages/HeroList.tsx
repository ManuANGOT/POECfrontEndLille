import { useEffect, useState } from "react";
import Card from "../components/card/card";
import SuperHero from "../models/SuperHero";

const HerosList2 = () => {
  const [afficher, setAfficher] = useState<SuperHero[]>([]);

  useEffect(() => {
    fetch("http://localhost:3004/superHeros")
      .then((response) => response.json())
      .then((data) => setAfficher(data));
  }, []);

  return (
    <>
      {afficher.map((hero) => (
        <Card key={hero.id} superHero={hero} />
      ))}
    </>
  );
};
export default HerosList2;