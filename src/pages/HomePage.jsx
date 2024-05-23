import { Link } from "react-router-dom";
import "../style/HomePage.scss";
import technoFront from "../datas/technoFront";
import technoBack from "../datas/technoBack";

function HomePage() {
  return (
    <div className="global">
      <div className="hero">
        <img src="../src/assets/woman-5854291_1280.png" alt="avatar" />
        <div className="presentation">
          <h1>Développeuse Web FullStack</h1>
          <p>
            développeuse web en reconversion. engagée, curieuse et persévérante,
            je développe passion pour ce métier en constante évolution.
          </p>
        </div>
      </div>

      <div className="skills">
        <h2>Stack utilisées </h2>

        <div className="techno">
          <h3>Front-End : </h3>
          {technoFront.map((technologie) => (
            <div className="sous-unite" key={technologie.description}>
              <img src={technologie.image} alt={technologie.description} />
              <p>{technologie.description}</p>
            </div>
          ))}
        </div>

        <div className="techno">
          <h3>Back-End :</h3>
          {technoBack.map((technologie) => (
            <div className="sous-unite" key={technologie.description}>
              <img src={technologie.image} alt={technologie.description} />
              <p>{technologie.description}</p>
            </div>
          ))}
        </div>
        <Link to="/ContactPage" className="cta">
          {" "}
          Contactez Moi{" "}
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
