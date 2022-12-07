export default function Contact({ nom, prenom, email, telephone, button }) {
  return (
    <>
      <div className="contact">
        <h2>
          Nom : {nom} <br />
          Prénom : {prenom}
        </h2>
        <h3>
          Email : {email} <br />
          Téléphone : {telephone}
        </h3>
        {button && <button>DELETE</button>}
  
      </div>
    </>
  );
}
