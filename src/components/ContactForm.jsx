import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  //const handleSubmit = (event) => event.preventDefault();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeMail = (event) => {
    setMail(event.target.value);
  };
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <form className="ContactForm">
        <label htmlFor="name">Nom :</label>

        <input
          className="ContactName"
          required
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleChangeName}
        />

        <label htmlFor="name">Adresse Mail :</label>
        <input
          className="ContactMail"
          required
          id="mail"
          name="mail"
          type="text"
          value={mail}
          onChange={handleChangeMail}
        />

        <label htmlFor="name">Ecrivez votre Message :</label>
        <input
          className="ContactMessage"
          required
          id="message"
          name="message"
          type="text"
          value={message}
          onChange={handleChangeMessage}
        />
        <button className="button" type="submit">
          Envoyez votre demande
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
