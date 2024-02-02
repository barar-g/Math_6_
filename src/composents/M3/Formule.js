// FormulaCard.js
import React from 'react';
import styled from 'styled-components';

const FormulaBox = styled.div`
    width: 300px;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #ffffff;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Subtitle = styled.h3`
    font-size: 1.5em;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
`;

const FormulaText = styled.p`
    font-size: 1em;
    color: #555;
    text-align: center;
    margin: 10px 0;
`;

const FormulaCard = () => {
    return (
        <FormulaBox>
            <Subtitle>🔍 Utiliser le Rapporteur pour mesurer l'angle puis saisir votre reponse 🔍</Subtitle>
            
        </FormulaBox>
    );
}

export default FormulaCard;
