import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card-header">
        <h3 className="user-name">{user.name}</h3>
        <span className="user-id">User #{user.id}</span>
      </div>
      <div className="user-card-body">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
        <p><strong>City:</strong> {user.address.city}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
