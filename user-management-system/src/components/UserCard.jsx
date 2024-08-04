import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.css';

const UserCard = ({ user, onEdit, onDelete }) => (
    <div className="user-card">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.age} years old</p>
        <button onClick={() => onEdit(user)}>Edit</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
);

UserCard.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default UserCard;
