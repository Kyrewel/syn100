import React from 'react';

const Card = ({ title, text, className, imageUrl }) => {
    return (
        <div className={className}>
            <img src={imageUrl} alt={text} />
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default Card;

