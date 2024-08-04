import React from 'react';

function SelectedCiaoList({ users }) {
  const selectedUsers = users.filter((user) => user.isSelected);
  return (
    <ul>
      {selectedUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default SelectedCiaoList;
