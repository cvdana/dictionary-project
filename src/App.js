import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/cvdana/dictionary-project"
              target="blank"
              title="github"
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
