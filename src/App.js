import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("darkmode")) || false;
  };
  const [darkMode, setMode] = useState(getMode());

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <div className="nav">
        {/* Rounded switch */}
        <label class="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setMode(!darkMode)}
          />

          <span class="slider round"></span>
        </label>
      </div>
      <div className="content">
        <h1>{darkMode ? "Dark mode is on" : "Light mode is on"}</h1>
        <p>See the magic press toggle button</p>
      </div>
    </div>
  );
}

export default App;
