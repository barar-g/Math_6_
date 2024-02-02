import React, { useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 30vh;
   
`;

const StyledText = styled.p`
    box-sizing: border-box;
    background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};
    border: ${(props) => (props.isActive ? '3px dashed #FF5722' : '3px dashed #B3E5FC')};
    transition: background-color 0.4s, transform 0.3s;
    cursor: pointer;
    padding: 10px 20px;  // Pour donner de l'espace autour du texte
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;
    &:hover {
        transform: scale(1.05);
    }
`;

const Box = styled.div`
    width: 180vw;  
    height: 80vw; 
    max-width: 260px;  
    max-height: 260px;  
    border: 4px solid #4CAF50;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    background-color: #FFEB3B;
    margin-bottom: 20px;
`;

const Fraction = styled.div`
    box-sizing: border-box;
    width: 50%; 
    height: 50%; 
    background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};
    border: ${(props) => (props.isActive ? '3px dashed #FF5722' : '3px dashed #B3E5FC')};
    transition: background-color 0.4s, transform 0.3s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;
    &:hover {
        transform: scale(1.05);
    }
`;

const ResetButton = styled.button`
    background-color: #4CAF50;
    color: white;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    font-size: 1.5em;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #45a049;
    }
`;

const FractionActivity = () => {
    const [activeFractions, setActiveFractions] = useState([false, false, false, false]);

    const toggleFraction = (index) => {
        const updatedActiveFractions = [...activeFractions];
        updatedActiveFractions[index] = !updatedActiveFractions[index];
        setActiveFractions(updatedActiveFractions);
    };

    const reset = () => {
        setActiveFractions([false, false, false, false]);
    };

    return (
        <MainContainer>
         <StyledText>Cocher une fraction</StyledText>
            <Box>
                {activeFractions.map((isActive, index) => (
                    <Fraction
                        key={index}
                        isActive={isActive}
                        onClick={() => toggleFraction(index)}
                    >
                        {isActive && 'Une fraction parmi 4 donc 1/4'}
                    </Fraction>
                ))}
            </Box>
            <ResetButton onClick={reset}>
                ↺
            </ResetButton>
        </MainContainer>
    );
}

export default FractionActivity;




