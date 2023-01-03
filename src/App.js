import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Tamara Dörflinger and is
          <a
            href="https://github.com/tamara-doe/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
