import "../../style/globais.css";
import "../../style/font-awesome.css";
import "./index.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2>
          Está precisando de um desenvolvedor Frontend? Que tal trabalharmos
          juntos!😉
        </h2>
        <div className="redes-sociais">
          <a
            href="https://www.linkedin.com/in/eder-henrique-santos/"
            target="_blank"
            rel="noreferrer"
            className="outer-shadow"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5521969003081"
            target="_blank"
            rel="noreferrer"
            className="outer-shadow"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://github.com/ederhscc"
            target="_blank"
            rel="noreferrer"
            className="outer-shadow"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:ederhscc@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="outer-shadow"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
