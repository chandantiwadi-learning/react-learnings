import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="container">
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <p>
        This app uses useState to toggle the theme and useEffect to apply it to
        the body element.
      </p>

      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default App;