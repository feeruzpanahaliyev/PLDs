import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';

const UserList = ({ users, onEdit, onDelete }) => (
    <div className="user-list">
        {users.map((user) => (
            <UserCard key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
        ))}
    </div>
);

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default UserList;
