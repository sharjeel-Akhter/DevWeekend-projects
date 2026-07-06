import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ name, avatar, email }) => {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            width: "250px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            margin: "10px",
            alignItems: "center",
        }}>
            <img src={avatar} alt={`${name}'s avatar`} style={{ width: "100px", borderRadius: "50%" }} />
            <h3>{name}</h3>
            <p>{email}</p>
            
        </div>
    );
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default UserCard;