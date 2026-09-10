import React from 'react';

const Header = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1>Practical 14: User Directory</h1>
        <p className="subtitle">Fetching user data from a public REST API using React.</p>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by name, username, or email..." 
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
