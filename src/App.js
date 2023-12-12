import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container text-centered">
        <Weather defaultCity="Johannesburg" />
        <footer>
          This project was coded by{" "}
          <a
            text="decoration-none"
            href="https://dynamic-froyo-de370c.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Ofentse Ngatane
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Ofentse-Ngatane/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
