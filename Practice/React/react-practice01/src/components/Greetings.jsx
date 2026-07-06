import React from 'react';

function Greetings({name, age}) {
    return (
        <div>
            <p>Hello {name}, you are {age} years old!</p>
        </div>
    );
}
 
export default Greetings;