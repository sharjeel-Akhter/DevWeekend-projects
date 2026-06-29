import React, { useState } from 'react';

function Input(props) {
    const [name, setName] = useState("");
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <p>{name}</p>
        </div>
    );
}

export default Input;