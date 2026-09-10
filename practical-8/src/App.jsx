import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // This useEffect will run every time the 'count' state changes (which happens on button click)
  useEffect(() => {
    if (count > 0) {
      console.log(`Button was clicked! Current count: ${count}`);
    }
  }, [count]);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>useEffect Click Logger</h1>
      <p style={{ fontSize: '18px' }}>
        Open the browser console (F12) to see the message logged on each click.
      </p>
      <h2 style={{ fontSize: '48px', margin: '20px 0' }}>{count}</h2>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{ fontSize: '20px', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }}
        >
          Click Me
        </button>

      </div>
    </div>
  );
}

export default App;