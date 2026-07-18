import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter-box">
        <h2>Counter App</h2>

        <h2>{count}</h2>

        <div className="buttons">
          <button
            className="btn increment"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>

          <button
            className="btn decrement"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>

          <button
            className="btn reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;