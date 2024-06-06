import React from 'react';

const TextBlock = ({ title, text, className }) => {
    return (
        <div className={className}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default TextBlock;