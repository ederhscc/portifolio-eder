import '../../style/globais.css';
import './index.css';
import Perfil from '../../images/foto-perfil.jpg';
import CV from '../../arquivos/cv.pdf';

export const AboutMe = () => {
  return (
    <section className="sobre-mim section" id="sobre-mim">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Sobre mim</h2>
          </div>
        </div>
        <div className="row">
          <div className="imagem-sobre-mim">
            <div className="img-box inner-shadow">
              <img
                src={Perfil}
                alt="foto sobre mim"
                className="outer-shadow"
              />
            </div>
          </div>
          <div className="informacoes-sobre-mim">
            <p>
              <strong>
                Olá! Me chamo Eder Henrique e sou um desenvolvedor frontend em
                formação! 👨‍🎓
              </strong>
               Gosto MUITO da área de tecnologia, e tenho certeza que posso
              contribuir em qualquer time com as minhas habilidades.
            </p>

            <p>
              Estou sempre me desafiando com novos projetos e participando de
              comunidades de programação para buscar feedback de outros
              desenvolvedores e desenvolvedoras. Além de tentar ajudar essas
              pessoas com o que eu já aprendi. 😁
            </p>

            <p>
              Ah, gosto de filmes, séries, animes e outras nerdices. 😅
            </p>

            <div className="botoes">
              <a
                target="_blank"
                rel= "noreferrer"
                href={CV}
                className="botao outer-shadow"
              >
                Veja meu CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
