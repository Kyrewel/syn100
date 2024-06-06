import React from 'react';

export const LogoSVG = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="green" strokeWidth="4" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="green" fontSize="15" fontFamily="Arial" fontWeight="bold">
            UG
        </text>
    </svg>
);

export const BuildingSVG = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="30" width="80" height="70" fill="#6200ea" />
        <rect x="20" y="40" width="20" height="20" fill="#ffffff" />
        <rect x="60" y="40" width="20" height="20" fill="#ffffff" />
        <rect x="20" y="70" width="20" height="20" fill="#ffffff" />
        <rect x="60" y="70" width="20" height="20" fill="#ffffff" />
    </svg>
);

export const LeafSVG = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10C30 30 10 50 50 90C90 50 70 30 50 10Z" fill="#00dc63" />
    </svg>
);
