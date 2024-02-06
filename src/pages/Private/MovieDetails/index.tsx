import Button from "components/Button";

import "./styles.css";
import Card from "components/Card";

function MovieDetails() {
  return (
    <div className="moviedetails-container">
      <h2>Tela detalhes do filme id: 1</h2>

      <div className="moviedetails-form">
        <form>
          <div className="form-wrapper">
            <input
              type="text"
              name="assessment"
              placeholder="Deixe sua avaliação aqui"
            />
          </div>
          <Button title="SALVAR AVALIAÇÃO" />
        </form>
      </div>

      <div className="moviedetails-info-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default MovieDetails;
