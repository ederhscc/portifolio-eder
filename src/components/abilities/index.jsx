import "../../style/globais.css";
import "./index.css";
import "../../style/font-awesome.css";

export const Abilities = () => {
  return (
    <section className="habilidades section" id="habilidades">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Habilidades</h2>
          </div>
        </div>

        <div className="container-habilidades">
          <div className="informacoes">
            <div className="logo">
              <i className="devicon devicon-javascript-plain"></i>
            </div>
            <h3>JavaScript</h3>
          </div>

          <div className="informacoes">
            <div className="logo">
              <i class="devicon-nodejs-plain-wordmark"></i>
            </div>
            <h3>NodeJs</h3>
          </div>

          <div className="informacoes">
            <div className="logo">
              <i class="devicon-react-original"></i>
            </div>
            <h3>React.js</h3>
          </div>

          <div className="informacoes">
            <div className="logo">
              <i class="devicon-typescript-plain"></i>
            </div>
            <h3>TypeScript</h3>
          </div>

          <div className="informacoes">
            <div className="logo">
              <i className="devicon devicon-html5-plain-wordmark"></i>
            </div>
            <h3>HTML5</h3>
          </div>

          <div className="informacoes">
            <div className="logo">
              <i className="devicon devicon-css3-plain-wordmark"></i>
            </div>
            <h3>CSS3</h3>
          </div>

          <div className="informacoes">
            <div className="logo">
              <i className="devicon devicon-github-original"></i>
            </div>
            <h3>GitHub</h3>
          </div>

          <div className="informacoes">
            <div className="logo">
              <i className="devicon devicon-git-plain"></i>
            </div>
            <h3>Git</h3>
          </div>

          <div className="informacoes">
            <div className="logo">
              <i class="devicon-npm-original-wordmark"></i>
            </div>
            <h3>npm</h3>
          </div>

          <div className="informacoes">
            <div className="logo">
              <i class="devicon-jest-plain"></i>
            </div>
            <h3>Jest</h3>
          </div>

          <div className="informacoes">
            <div className="logo">
              <i class="devicon-vscode-plain"></i>
            </div>
            <h3>VSCode</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
