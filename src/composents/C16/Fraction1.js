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

const Box1 = styled.div`
  width: 390px;  
  height: 260px; 
  border: 4px solid #4CAF50;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: #FFEB3B;

  @media (max-width: 600px) {
    width: 270px;  // Réduit pour les smartphones
    height: 180px; // Réduit pour les smartphones
  }
`;

const Fraction1 = styled.div`
  box-sizing: border-box;
  width: 33.33%;  
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

  @media (max-width: 600px) {
    font-size: 0.7em;  // Réduit pour les smartphones
  }
`;

const ResetButton1 = styled.button`
  margin-top: 20px;
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

  @media (max-width: 600px) {
    width: 40px;     // Réduit pour les smartphones
    height: 40px;    // Réduit pour les smartphones
    font-size: 1.2em;  // Réduit pour les smartphones
  }
`;

const FractionActivity1 = () => {
  const [activeFractions, setActiveFractions] = useState([false, false, false, false, false, false]);

  const toggleFraction = (index) => {
    const updatedActiveFractions = [...activeFractions];
    updatedActiveFractions[index] = !updatedActiveFractions[index];
    setActiveFractions(updatedActiveFractions);
  };

  const reset = () => {
    setActiveFractions([false, false, false, false, false, false]);
  };

  return (
    <MainContainer>
      <StyledText>Cocher une fraction</StyledText>
      <Box1>
        {activeFractions.map((isActive, index) => (
          <Fraction1
            key={index}
            isActive={isActive}
            onClick={() => toggleFraction(index)}
          >
            {isActive && 'Une fraction parmi 6 donc 1/6'}
          </Fraction1>
        ))}
      </Box1>
      <ResetButton1 onClick={reset}>
        ↺
      </ResetButton1>
    </MainContainer>
  );
}

export default FractionActivity1;
