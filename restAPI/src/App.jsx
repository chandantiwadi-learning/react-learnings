import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1> API Data Fetching</h1>
      <p className="subtitle">
        User Details from JSONPlaceholder API
      </p>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="card-container">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <h2>{user.name}</h2>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Website:</strong> {user.website}
              </p>
              <p>
                <strong>Company:</strong> {user.company.name}
              </p>
              <p>
                <strong>City:</strong> {user.address.city}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;