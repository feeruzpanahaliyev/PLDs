import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';

const UserForm = ({ user, onSave, onCancel }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setAge(user.age);
        } else {
            setName('');
            setEmail('');
            setAge('');
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ id: user ? user.id : undefined, name, email, age });
        setName('');
        setEmail('');
        setAge('');
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <button type="submit">Save</button>
            <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

UserForm.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
    }),
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default UserForm;
