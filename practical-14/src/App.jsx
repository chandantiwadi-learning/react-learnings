import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import UserList from './components/UserList';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import { getUsers } from './services/userApi';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Failed to load users.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Optional: Client-side search implementation
  const filteredUsers = users.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  });

  return (
    <div className="app-container">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="main-content">
        {loading && <Loading />}
        
        {error && !loading && (
          <ErrorMessage message={error} onRetry={fetchUsers} />
        )}
        
        {!loading && !error && (
          <UserList users={filteredUsers} />
        )}
      </main>
    </div>
  );
}

export default App;
