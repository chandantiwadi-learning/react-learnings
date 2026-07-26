import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <header style={{ padding: '20px', color: 'white' }}>
          <nav>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <li>
                <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px' }}>Home</Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px' }}>About</Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px' }}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main style={{ minHeight: '60vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
