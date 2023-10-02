import React, { useState } from 'react';
import Draggable from 'react-draggable';

function Regle() {
    const [rotated, setRotated] = useState(false);

    const handleRotate = () => {
        setRotated(!rotated);
    };

    const rotationTransform = rotated ? 'rotate(90, 300, 20)' : '';

    return (
        <div>
            <button onClick={handleRotate}>
                {rotated ? 'Réinitialiser' : 'Tourner'}
            </button>
            <Draggable>
                <svg width={rotated ? "360" : "320"} height={rotated ? "320" : "60"} viewBox={rotated ? "-20 -20 360 360" : "0 0 320 60"}>
                    <g transform={rotationTransform}>
                        <defs>
                            <linearGradient id="gradientR" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: "#f1f2f6", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#e9eaed", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <rect x="0" y="0" width="300" height="30" fill="url(#gradientR)" stroke="black" strokeWidth="2" />
                        <line x1="0" y1="15" x2="300" y2="15" stroke="black" strokeWidth="1" />
                        {Array.from({ length: 101 }).map((_, i) => (
                            <line
                                key={i}
                                x1={i * 3}
                                y1="0"
                                x2={i * 3}
                                y2={i % 10 === 0 ? "30" : i % 5 === 0 ? "20" : "10"}
                                stroke={i % 10 === 0 ? "#2f3542" : "#747d8c"}
                                strokeWidth={i % 10 === 0 ? "2" : "1"}
                            />
                        ))}
                        {Array.from({ length: 11 }).map((_, i) => (
                            <text
                                key={i}
                                x={i * 30}
                                y="41"
                                fill="#2f3542"
                                fontSize="13"
                                fontWeight="bold"
                                textAnchor="middle"
                            >
                                {i}
                            </text>
                        ))}
                    </g>
                </svg>
            </Draggable>
        </div>
    );
}

export default Regle;




