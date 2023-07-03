import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext, styled } from "styled-components";

export const Header = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <HeaderConatainer>
      <Container>
        <div>
          <ContainerLogo>
            <a href="#sobre-mim">
              <h1>EH</h1>
            </a>
            <Switch
              onChange={toggleTheme}
              checked={title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={35}
              handleDiameter={20}
              offColor="#1A202C"
              onColor="#F7FAFC"
              offHandleColor="#43bd8e"
              onHandleColor="#43bd8e"
            />
          </ContainerLogo>
          <nav>
            <input id="menu-hamburguer" type="checkbox" />

            <label htmlFor="menu-hamburguer">
              <div>
                <span></span>
              </div>
            </label>
            <ul>
              <li>
                <a href="#sobre-mim">Sobre mim</a>
              </li>
              <li>
                <a href="#habilidades">Habilidades</a>
              </li>
              <li>
                <a href="#projetos">Meus projetos</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </HeaderConatainer>
  );
};

const HeaderConatainer = styled.header`
  padding: 30px 15px;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: auto;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  div nav ul {
    display: flex;
  }

  div nav li a {
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 20px;
    transition: 0.2s;
    letter-spacing: 1px;
    user-select: none;
  }

  div nav li a:hover {
    background-color: var(--cor-primaria);
    color: var(--cor-branca);
  }

  div nav label {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  div nav label div {
    display: none;
    width: 60px;
    height: 60px;
    align-self: self-end;
  }

  div nav label div span {
    position: relative;
    display: block;
    background-color: ${(props) => props.theme.colors.text};
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;
  }

  div nav label div span::before,
  div nav label div span::after {
    background-color: ${(props) => props.theme.colors.text};
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.2s ease-in-out;
  }

  div nav label div span::before {
    top: -10px;
  }

  div nav label div span::after {
    bottom: -10px;
  }
  div input {
    display: none;
  }

  div input:checked ~ label div span {
    transform: rotate(45deg);
  }

  div input:checked ~ label div span::before {
    transform: rotate(90deg);
    top: 0;
  }

  div input:checked ~ label div span::after {
    transform: rotate(90deg);
    bottom: 0;
  }

  @media (max-width: 1280px) {
    padding: var(--mobile-padding);
  }

  @media (max-width: 900px) {
    div nav label div {
      display: block;
    }

    /* pega todos os itens que após o input e que sao irmaos dele */
    div nav input:checked ~ ul {
      display: block;
    }

    div nav {
      position: absolute;
      top: 62px;
      right: 20px;
      z-index: 1;
    }

    div nav ul {
      display: none;
      background-color: var(--cor-fundo-escuro);
      padding: 20px;
    }

    div nav li a {
      color: var(--cor-branca);
      text-align: center;
      padding: 20px;
      display: block;
    }
  }
`;

const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    font-family: var(--fonte-secundaria);
    font-size: var(--fonte-extra-grande);
    border: 2px solid ${(props) => props.theme.colors.text};
    border-radius: 50%;
    width: 65px;
    height: 65px;
    line-height: 58px;
    text-align: center;
    margin-bottom: 10px;
    text-decoration: underline;
    transition: 0.2s;
  }

  a:hover h1 {
    color: var(--cor-primaria);
    border: 2px solid var(--cor-primaria);
  }
`;
