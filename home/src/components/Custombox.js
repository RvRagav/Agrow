// src/components/CustomBox.js
import React from 'react';

const CustomBox = ({ title, imgSrc, description, link, bgColor }) => {
    return (
        <div className={`custom-box ${bgColor}`}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <h2>{title}</h2>
                <img src={imgSrc} alt={title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <p>{description}</p>
            </a>
        </div>
    );
};

export default CustomBox;
