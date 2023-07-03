import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Header } from "./components/header";
import { usePersistedState } from "./utils/usePersistedState";
import dark from "./style/dark";
import light from "./style/light";
import { Home } from "./components/home";
import { AboutMe } from "./components/about-me";
import { Abilities } from "./components/abilities";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";

function App() {

  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Home />
      <AboutMe />
      <Abilities />
      <Projects />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
    }

    ul{
        list-style: none;
    }

    img{
        max-width: 100%;
    }
    html {
    font-size: 62.5%;
    color: ${(props) => props.theme.colors.text};
    font-weight: 300;
    scroll-behavior: smooth;
  }
  
  body {
    background-color:  ${(props) => props.theme.colors.secondary};
    font-family: var(--fonte-primaria);
    font-size: var(--fonte-normal);
  }

  .redes-sociais a {
    display: inline-block;
    width: 40px;
    height: 40px;
    font-size: 1.8rem;
    text-align: center;
    color: ${(props) => props.theme};
    margin: 0 4px;
    border-radius: 50%;
    transition: all 0.3s ease;
}

`;

