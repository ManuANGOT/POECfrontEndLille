import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card/card";
import SuperHero from "../models/SuperHero";
import HeroService from "../services/herosService";

const HerosList = () => {
  const [afficher, setAfficher] = useState<SuperHero[]>([]);

  useEffect(() => {
    HeroService.getAllHeros().then((heroes) => setAfficher(heroes));
  }, []);

  return (
    <>
      {afficher.map((hero) => (
        <Card key={hero.id} superHero={hero} />
      ))}
      <Link to="/create">
        <button>+</button>
      </Link>
    </>
  );
};
export default HerosList;