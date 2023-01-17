import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuperHero from "../../models/SuperHero";

type props = {
  hero: SuperHero;
};
type champs = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type Form = {
  name: champs;
  civil: champs;
  age: champs;
  ville: champs;
};

const HerosForm: React.FC<props> = ({ hero }) => {

    const[form, setForm] = useState<Form>({
        name : {
            value: hero.name,
            isValid: true,

        },
        civil : {
            value: hero.civil,
            isValid: true,
        },
        age : {
            value : hero.age,
            isValid: true,
        },
        ville : {
            value : hero.ville,
            isValid: true
        },
    });

    const redirection = useNavigate();

const editHeros = (event : React.ChangeEvent<HTMLInputElement>) => {

    const nomDuchamps : string = event.target.name;
    const valeurDuChamps : string = event.target.value;
    const nouveauChamps : champs = {[nomDuchamps] : {value:valeurDuChamps}};
    setForm({ ...form, ...nouveauChamps});
};

const soumission = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    redirection(`/${hero.id}`);
}

  return (
    <form onSubmit={soumission}>
      <img src={hero.image} alt={hero.name} />
      <label htmlFor="name"> nom : </label>
      <input type="text" name="name" value={form.name.value} onChange={editHeros}/>

      <label htmlFor="age"> age : </label>
      <input type="number" name="age" value={form.age.value} onChange={editHeros}/>

      <label htmlFor="ville"> ville : </label>
      <input type="text" name="ville" value={form.ville.value} onChange={editHeros}/>

      <label htmlFor="civil"> Identité secrète : </label>
      <input type="text" name="civil"value={form.civil.value} onChange={editHeros} />

      <input type="submit">Submit</input>
    </form>
  );
  <></>;
};

export default HerosForm;
