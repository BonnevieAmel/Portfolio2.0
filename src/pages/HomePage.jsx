import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <div className="hero">
        <img src="../src/assets/woman-5854291_1280.png" alt="avatar" />
        <div className="presentation">
          <h1>Présentation</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            corrupti culpa iure explicabo fugit, nihil tempora consequuntur hic
            laboriosam dolore modi assumenda nobis aliquam cumque, labore
            dolores perferendis asperiores quo?
          </p>
        </div>
      </div>
      <div className="skills">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vitae
          ab impedit error vel deleniti laudantium dolor veniam nesciunt cum.
          Ea, suscipit repellendus reprehenderit pariatur corporis ad sequi
          exercitationem, nam laudantium distinctio in cumque consequatur,
          reiciendis non consectetur blanditiis voluptates commodi porro
          recusandae deleniti magnam eveniet a sint. Dolorem fuga labore
          eligendi laudantium deleniti cum necessitatibus nostrum! Dolores
          mollitia quis praesentium nesciunt a! Itaque, totam. Sed voluptatem
          expedita libero natus molestias voluptates accusamus aliquam fuga
          facere, perferendis, soluta sint omnis aspernatur provident. Culpa
          consequuntur doloribus placeat iure vero. Molestias pariatur possimus
          ullam architecto ea aspernatur aperiam natus quidem fugiat
          necessitatibus quo ipsum tempore ipsam, odit repudiandae mollitia
          placeat minus, magnam ut itaque sed quam? Aperiam temporibus soluta ut
          corrupti nisi.
        </p>
        <Link to="/ContactPage" className="cta">
          {" "}
          Contactez Moi{" "}
        </Link>
      </div>
    </>
  );
}

export default HomePage;
