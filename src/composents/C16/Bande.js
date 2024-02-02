import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Comic Sans MS', sans-serif;
`;

const Instruction = styled.p`
    background-color: #E1F5FE;
    border: 3px dashed #B3E5FC;
    padding: 10px 20px;
    text-align: center;
    margin-bottom: 20px;
`;

const FractionContainer = styled.div`
    width: 180vw;  
    height: 80vw; 
    max-width: 320px;  
    max-height: 100px;  
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
    flex: 1;
    background-color: ${(props) => (props.isSelected ? '#FFC107' : '#E1F5FE')};
    border-right: ${(props) => props.isLast ? 'none' : '3px dashed #B3E5FC'};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        transform: scale(1.05);
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const VerifyButton = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 50%;
    font-size: 1.5em;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    &:hover {
        background-color: #45a049;
    }
`;

const GenerateButton = styled(VerifyButton)`
    background-color: #FFC107;
    color: black;
    &:hover {
        background-color: #FF9800;
    }
`;

const Message = styled.p`
    color: ${props => props.isCorrect ? '#4CAF50' : '#D32F2F'};
    font-weight: bold;
    margin-top: 1rem;
`;

function FractionalFigure() {
  const [numFractions, setNumFractions] = useState(Math.floor(Math.random() * 19) + 1);
  const [selectedFractionCount, setSelectedFractionCount] = useState(Math.floor(Math.random() * numFractions) + 1);
  const [userSelected, setUserSelected] = useState([]);
  const [message, setMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelectedFractionCount(Math.floor(Math.random() * numFractions) + 1);
  }, [numFractions]);

  const handleUserSelection = (index) => {
    if(userSelected.includes(index)) {
      setUserSelected(prev => prev.filter(item => item !== index));
    } else {
      setUserSelected(prev => [...prev, index]);
    }
  };

  const verifyAnswer = () => {
    if (userSelected.length === selectedFractionCount) {
      setMessage("Correcte! Vous avez sélectionné exactement " + userSelected.length + "/" + numFractions);
      setIsCorrect(true);
    } else {
      setMessage(`Faux. Vous avez sélectionné ${userSelected.length}/${numFractions}, alors que vous deviez en sélectionner ${selectedFractionCount}/${numFractions}.`);
      setIsCorrect(false);
    }
  };

  const randomizeFractions = () => {
    const newNumFractions = Math.floor(Math.random() * 19) + 1;
    setNumFractions(newNumFractions);
    setUserSelected([]);
    setMessage("");
  };

    
  return (
    <Card style={{ width: '90%', margin: '2rem auto', padding: '1rem' }}>
        <CardContent>
            <Container>
                <Instruction>Cocher {selectedFractionCount}/{numFractions} fractions </Instruction>
                <FractionContainer>
                    {Array.from({ length: numFractions }).map((_, index) => (
                        <Fraction
                            key={index}
                            isLast={index === numFractions - 1}
                            isSelected={userSelected.includes(index)}
                            onClick={() => handleUserSelection(index)}
                        ></Fraction>
                    ))}
                </FractionContainer>
                <ButtonContainer>
                    <VerifyButton onClick={verifyAnswer}>&#10004;</VerifyButton>
                    <GenerateButton onClick={randomizeFractions}>↺</GenerateButton>
                </ButtonContainer>
                <Message isCorrect={isCorrect}>{message}</Message>
            </Container>
        </CardContent>
    </Card>
);
}

export default FractionalFigure;





