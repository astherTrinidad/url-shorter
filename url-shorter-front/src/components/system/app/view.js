import logo from "../../../assets/images/logo.svg";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <form className="App-form">
          <label>Introduce la dirección que deseas acortar</label>
          <input type="text" />
          <button value="Generar url">Generar url</button>
        </form>
        <p>
          <code>url Original</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          url acortada
        </a>
      </main>
    </div>
  );
}
