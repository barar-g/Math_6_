// Rapporteur.js

import React from 'react';
import styled from 'styled-components';

const RapporteurDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    opacity: 0.7;
`;

function Rapporteur() {
    return (
        <svg width="300" height="150" viewBox="0 0 400 200">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#dfe4ea", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#ced6e0", stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="180" fill="url(#gradient)" stroke="black" strokeWidth="2" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="black" strokeWidth="2" />
            {Array.from({ length: 180 }).map((_, i) => (
                <line
                    key={i}
                    x1="200"
                    y1={i % 10 === 0 ? "195" : "200"}
                    x2="200"
                    y2={i % 10 === 0 ? "30" : "40"}
                    stroke={i % 10 === 0 ? "#2f3542" : "#747d8c"}
                    strokeWidth={i % 10 === 0 ? "2" : "1"}
                    transform={`rotate(${i}, 200, 200)`}
                />
            ))}
            {Array.from({ length: 19 }).map((_, i) => (
                <text
                    key={i}
                    x="200"
                    y="15"
                    fill="#2f3542"
                    fontSize="25"
                    fontWeight="bold"
                    textAnchor="middle"
                    transform={`rotate(${i * 10}, 200, 200)`}
                >
                    {i * 10}
                </text>
            ))}
        </svg>
    );
}

export default Rapporteur;
