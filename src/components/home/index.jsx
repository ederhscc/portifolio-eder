import '../../style/globais.css';
import './index.css';
import '../../style/font-awesome.css';
import Perfil from '../../images/perfil2.png';

export const Home = () => {
  return (
      <section className="home">
        <div className="container">
          <div className="row full-screen alinhar-itens-no-centro">
            <div className="texto-home">
              <p>Olá 🖖,</p>
              <h1>Sou o Eder Henrique</h1>
              <h2>Desenvolvedor Frontend</h2>

              <div className="redes-sociais">
                <a href="https://www.linkedin.com/in/eder-henrique-santos/" target="_blank" rel= "noreferrer" className="outer-shadow">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5521969003081" target="_blank" rel= "noreferrer" className="outer-shadow">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://github.com/ederhscc" target="_blank" rel= "noreferrer" className="outer-shadow">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:ederhscc@gmail.com" target="_blank" rel= "noreferrer" className="outer-shadow">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="img-home">
              <div className="img-box inner-shadow">
                <img
                  className="outer-shadow"
                  src={Perfil}
                  alt="foto do perfil do Eder"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
