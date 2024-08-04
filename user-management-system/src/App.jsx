import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import FilterSort from './components/FilterSort';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    const newUser = { ...user, id: users.length + 1 };
    setUsers([...users, newUser]);
    setFilteredUsers([...users, newUser]);
    setEditingUser(null); // Hide form after adding
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setEditingUser(null); // Hide form after updating
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const handleFilter = (name) => {
    setFilteredUsers(
      users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()))
    );
  };

  const handleSort = (order) => {
    const sortedUsers = [...filteredUsers].sort((a, b) =>
      order === 'asc' ? a.age - b.age : b.age - a.age
    );
    setFilteredUsers(sortedUsers);
  };

  return (
    <div className="app">
      <h1>User Management System</h1>
      <button
        className="add-user-button"
        onClick={() => setEditingUser({})} // Set to empty object to indicate adding
      >
        Add User
      </button>
      <FilterSort onFilter={handleFilter} onSort={handleSort} />
      <UserList users={filteredUsers} onEdit={setEditingUser} onDelete={deleteUser} />
      {editingUser !== null && (
        <UserForm
          user={editingUser}
          onSave={editingUser?.id ? updateUser : addUser}
          onCancel={() => setEditingUser(null)}
        />
      )}
    </div>
  );
};

export default App;
