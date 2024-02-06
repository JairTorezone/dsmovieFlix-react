import "./styles.css";
import startImg from "assets/images/start.png";

const Card = () => {
  return (
    <div className="card">
      <div className="title">
        <div className="card-image">
          <img src={startImg} alt="estrela" />
        </div>
        <h2>Maria Silva</h2>
      </div>

      <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
    </div>
  );
};

export default Card;
