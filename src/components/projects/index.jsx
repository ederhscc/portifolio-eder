import "../../style/globais.css";
import "./index.css";
import PokeAPI from "../../images/pokeapi.png";
import Huddle from "../../images/huddle.png";
import Conselhos from "../../images/conselhos.png";
import Git from "../../images/git.png";
import MiniBlog from "../../images/miniblog.png";
import Todo from "../../images/todo.png";
import MoviesLib from "../../images/movieslib.png";

export const Projects = () => {
  return (
    <section className="projetos section" id="projetos">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Meus projetos</h2>
          </div>
        </div>

        <div className="container-projetos">
          <div className="projeto">
            <a
              href="https://project-poke-api-gules.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={PokeAPI} alt="Projeto PokéAPI" />
              <h3>PokéAPI</h3>
              <div className="informacoes-projeto">
                <p>
                  Este projeto foi criado como um SPA (Single Page Application)
                  utilizando o React e a biblioteca React Router Dom para fazer
                  o direcionamento das páginas. O tema de cores é distribuído
                  por toda a aplicação através do Context API e, além do mais,
                  toda a estilização foi feita utilizando a biblioteca Styled
                  Component.
                </p>
                <p>🔗 Ver no Vercel</p>
              </div>
            </a>
          </div>

          <div className="projeto">
            <a
              href="https://miniblog-weld.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={MiniBlog} alt="Projeto MiniBlog" />
              <h3>MiniBlog</h3>
              <div className="informacoes-projeto">
                <p>
                Este projeto consiste em um blog feito com React no front-end e Firebase no back-end.
                </p>
                <p>🔗 Ver no Vercel</p>
              </div>
            </a>
          </div>

          <div className="projeto">
            <a
              href="https://react-movies-lib-eight.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={MoviesLib} alt="Projeto MoviesLib" />
              <h3>MoviesLib</h3>
              <div className="informacoes-projeto">
                <p>
                Este projeto é um frontend em React que se conecta a API da TMDB para a exibição dos filmes mais bem avaliados.
                </p>
                <p>🔗 Ver no Vercel</p>
              </div>
            </a>
          </div>

          <div className="projeto">
            <a
              href="https://ederhscc.github.io/todo_react/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Todo} alt="React + TS Todo" />
              <h3>React + TS Todo</h3>
              <div className="informacoes-projeto">
                <p>
                  Este projeto é um gerenciador de tarefas utilizando o TypeScrip e o React.
                </p>
                <p>🔗 Ver no GitHub Pages</p>
              </div>
            </a>
          </div>

          <div className="projeto">
            <a
              href="https://ederhscc.github.io/desafio-huddle-landing-page/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Huddle} alt="Huddle Landing Page" />
              <h3>Huddle Landing Page</h3>
              <div className="informacoes-projeto">
                <p>
                  Este projeto foi feito com HTML e CSS. Contudo, aprendi:{" "}
                  <br /> - Posicionar os elementos na tela;
                  <br /> - Utilizar fontes externas <br /> - Trabalhar com
                  imagens em backgrounds; <br /> - Construir layout com Grid;{" "}
                  <br /> - Trabalahar com as propriedades do Display Flex.
                </p>
                <p>🔗 Ver no GitHub Pages</p>
              </div>
            </a>
          </div>

          <div className="projeto">
            <a
              href="https://ederhscc.github.io/advice-generator-app-main/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Conselhos} alt="Gerador de Conselhos" />
              <h3>Gerador de Conselhos</h3>
              <div className="informacoes-projeto">
                <p>
                  Este projeto é uma solução para o 'Advice generator app
                  challenge on Frontend Mentor'. Ele foi desenvolvido com HTML,
                  CSS e Javascript. Para gerar os conselhos o app consome uma
                  API de conselhos através do Javascript.
                </p>
                <p>🔗 Ver no GitHub Pages</p>
              </div>
            </a>
          </div>

          <div className="projeto">
            <a
              href="https://ederhscc.github.io/project-fetch-github-api/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Git} alt="Fetch GitHub API com JS" />
              <h3>Fetch GitHub API com JS</h3>
              <div className="informacoes-projeto">
                <p>
                  Este projeto foi feito em HTML, CSS e JavaScript. Ele recebe
                  como parâmetro um nome de usuário do GitHub e retorna os seus
                  dados de repositórios e seus últimos eventos.
                </p>
                <p>🔗 Ver no GitHub Pages</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
