import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SuperHero from "../models/SuperHero";
import SuperHeros from "../data/SuperHeros";

const HerosDetails: React.FC = () => {
  const [herosDetails, setHerosDetails] = useState<SuperHero>();

  const { id } = useParams<string>();

  useEffect(() => {
    if (id) {
      SuperHeros.forEach((hero) => {
        if (hero.id === +id) {
          setHerosDetails(hero);
        }
      });
    }
  }, [id]);

  return (
    <>
      <div className="card">
        <h2>Name : {herosDetails?.name}</h2>
        <img src={herosDetails?.image} alt={herosDetails?.name} />
        <div className="infos">
          <p>Age : {herosDetails?.age}</p>
          <p>Secret name : {herosDetails?.civil}</p>
          <p>City : {herosDetails?.ville}</p>
        </div>
      </div>
    </>
  );
};

export default HerosDetails;
