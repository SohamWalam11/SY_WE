// Counter.js
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    // Inline styles
    const containerStyle = {
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        border: '2px solid #007BFF',
        borderRadius: '10px',
        backgroundColor: '#f0f8ff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    };

    const titleStyle = {
        fontSize: '2rem',
        color: '#007BFF',
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    const incrementButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#28a745',
        color: 'white',
    };

    const decrementButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#dc3545',
        color: 'white',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Counter: {count}</h1>
            <button onClick={increment} style={incrementButtonStyle}>
                Increment
            </button>
            <button onClick={decrement} style={decrementButtonStyle}>
                Decrement
            </button>
        </div>
    );
};

export default Counter;