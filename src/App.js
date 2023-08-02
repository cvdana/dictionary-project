import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/cvdana/dictionary-project"
              target="blank"
              rel="noreferrer"
            >
              Open-source project
            </a>{" "}
            coded by Dana Visnitchi
          </small>
        </footer>
      </div>
    </div>
  );
}
