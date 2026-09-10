import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return (
      <div className="empty-state">
        <h2>No users found.</h2>
        <p>Try adjusting your search query.</p>
      </div>
    );
  }

  return (
    <div className="user-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
