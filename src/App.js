import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://github.com/Trishgachau"
            target="_blank"
            rel="noreferrer"
          >
            Beatrice Gachau{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Trishgachau/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app98.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
