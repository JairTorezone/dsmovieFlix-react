import Navbar from "components/Navbar";
import { ReactComponent as HomeImage } from "assets/images/home.svg";
import Button from "components/Button";

import "./styles.css";

const Home = () => {
  return (
    <div>
      <div className="dsmovies-home-container">
        <div className="dsmovies-home-content">
          <div className="home-description">
            <div className="info">
              <h2>Avalie Filmes</h2>
              <p>Diga o que você achou do seu filme favorito</p>
            </div>

            <div className="image">
              <HomeImage />
            </div>
          </div>

          <div className="home-login">
            <div className="home-form">
              <h2>Login</h2>

              <form>
                <div className="form-wrapper">
                  <label htmlFor="email">informe o E-mail</label>
                  <input type="email" placeholder="Email" />
                </div>

                <div className="form-wrapper">
                  <label htmlFor="password">informe a senha</label>
                  <input type="password" placeholder="Senha" />
                </div>

                <Button title="fazer login" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
