import React, { useEffect, useState } from "react";

const Forms: React.FC = () => {
  const [personne, setPersonne] = useState<string>("Lucky Luke");

  useEffect(() => {
    console.log(personne);
  }, [personne]);

  const changePersonne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonne(event.target.value);
    console.log(personne);
  };

  const soumettre = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Le formulaire est envoyé");
  };

  return (
    <form onSubmit={soumettre}>
      <label htmlFor="nom">Name : </label>
      <input
        type="text"
        id="name"
        name="nom"
        value={personne}
        onChange={changePersonne}
      />
      <input type="submit" value="Send response" />
    </form>
  );
};

export default Forms;
