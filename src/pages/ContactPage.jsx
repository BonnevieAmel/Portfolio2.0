import cv from "../assets/Cv.png";
import "../style/ContactPage.scss";

function ContactPage() {
  return (
    <>
      <div className="contact-container">
        <address>
          <a href="tel:0678921722">06.78.92.17.22</a>

          <a href="mailto:amel.bonnevie@gmail.com" target="_blank">
            Email
          </a>

          <a href="https://github.com/BonnevieAmel" target="_blank">
            {" "}
            Github{" "}
          </a>
          {""}
          <a
            href="https://www.linkedin.com/in/amel-bonnevie-54099833/"
            target="_blank"
          >
            Linkedin
          </a>
        </address>
      </div>
      <div className="CV">
        <h2
          className="title-h2
        "
        >
          Mon CV
        </h2>
        <img className="cv-img" src={cv} alt="cv" />
      </div>
    </>
  );
}

export default ContactPage;
