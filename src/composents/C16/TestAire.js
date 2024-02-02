import React, { useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
`;

const Instruction = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const PlayArea = styled.div`
    width: 90%;
    height: 500px;
    border: 2px solid black;
    position: relative;
`;

const Rectangle = styled.div`
    position: absolute;
    background-color: #E1F5FE;
    border: 3px dashed #B3E5FC;
`;

const MesurAire = () => {
    const [startPoint, setStartPoint] = useState(null);
    const [currentRect, setCurrentRect] = useState(null);
    const [rectangles, setRectangles] = useState([]);

    const handleMouseDown = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        setStartPoint({ x, y });
    };

    const handleMouseMove = (event) => {
        if (startPoint) {
            const x = event.nativeEvent.offsetX;
            const y = event.nativeEvent.offsetY;

            const width = x - startPoint.x;
            const height = y - startPoint.y;

            setCurrentRect({
                x: startPoint.x,
                y: startPoint.y,
                width: Math.abs(width),
                height: Math.abs(height)
            });
        }
    };

    const handleMouseUp = () => {
        if (currentRect) {
            setRectangles([...rectangles, currentRect]);
            setCurrentRect(null);
            setStartPoint(null);
        }
    };

    return (
        <Container>
            <Instruction>Créez un rectangle pour mesurer son aire!</Instruction>
            <PlayArea 
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                {currentRect && (
                    <Rectangle
                        style={{
                            left: currentRect.x,
                            top: currentRect.y,
                            width: currentRect.width,
                            height: currentRect.height
                        }}
                    >
                        Aire: {currentRect.width * currentRect.height} px²
                    </Rectangle>
                )}
                {rectangles.map((rect, index) => (
                    <Draggable key={index}>
                        <Rectangle
                            style={{
                                left: rect.x,
                                top: rect.y,
                                width: rect.width,
                                height: rect.height
                            }}
                        >
                            Aire: {rect.width * rect.height} px²
                        </Rectangle>
                    </Draggable>
                ))}
            </PlayArea>
        </Container>
    );
}

export default MesurAire;

