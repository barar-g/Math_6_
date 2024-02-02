import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import correctSound from '../sounds/correct.mp3';
import incorrectSound from '../sounds/incorrect.mp3';

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
    width: 80vw;  // Utilisez 80% de la largeur de l'écran pour le Box
    height: 80vw;  // Gardez-le carré
    max-width: 520px;  // Mais ne dépassez pas 520px
    max-height: 520px;  // Assurez-vous que la hauteur ne dépasse pas non plus
    border: 4px solid #4CAF50;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    background-color: #FFEB3B;
    margin-bottom: 20px;  // Un peu d'espace entre le Box et les boutons pour les petits écrans
`;

const Fraction = styled.div`
    box-sizing: border-box;
    width: 25%; 
    height: 25%; 
    background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};
    border: ${(props) => (props.isActive ? '3px dashed #FF5722' : '3px dashed #B3E5FC')};
    transition: background-color 0.4s, transform 0.3s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;

    @media (max-width: 767px) { // Pour smartphones
        font-size: 0.8em; // Réduisez la taille de la police si nécessaire
    }
    &:hover {
        transform: scale(1.05);
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;  // Correspond à la largeur du Box
    max-width: 520px;  // Assurez-vous que cela ne dépasse pas 520px
    margin-top: 20px;
`;

const ActionButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50%;
    font-size: 1.5em;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #45a049;
    }
`;

const Message = styled.p`
    font-size: 1.2em;
    margin-top: 20px;
    font-family: 'Comic Sans MS', sans-serif;
    text-align: center;
    color: ${(props) => (props.isCorrect ? 'green' : 'red')};

    @media (max-width: 767px) {
        font-size: 1em;
    }
`;

const FractionActivity = () => {
    const TOTAL_FRACTIONS = 16;
    const [activeFractions, setActiveFractions] = useState(Array(TOTAL_FRACTIONS).fill(false));
    const [requiredSelection, setRequiredSelection] = useState(Math.ceil(Math.random() * TOTAL_FRACTIONS));
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        setRequiredSelection(Math.ceil(Math.random() * TOTAL_FRACTIONS));
    }, []);

    const toggleFraction = (index) => {
        const updatedActiveFractions = [...activeFractions];
        updatedActiveFractions[index] = !updatedActiveFractions[index];
        setActiveFractions(updatedActiveFractions);
    };

    const playSound = (src) => {
        const audio = new Audio(src);
        audio.play();
    };

    const checkAnswer = () => {
        if (activeFractions.filter(val => val).length === requiredSelection) {
            setIsCorrect(true);
            playSound(correctSound);
        } else {
            setIsCorrect(false);
            playSound(incorrectSound);
        }
    };

    const reset = () => {
        setActiveFractions(Array(TOTAL_FRACTIONS).fill(false));
        setIsCorrect(null);
        setRequiredSelection(Math.ceil(Math.random() * TOTAL_FRACTIONS));
    };

    return (
        <MainContainer>
            <StyledText>
                Sélectionnez {requiredSelection} fractions parmi {TOTAL_FRACTIONS}
            </StyledText>
            <Box>
                {activeFractions.map((isActive, index) => (
                    <Fraction
                        key={index}
                        isActive={isActive}
                        onClick={() => toggleFraction(index)}
                    />
                ))}
            </Box>
            <ButtonContainer>
                <ActionButton onClick={reset}>&#8634;</ActionButton> {/* Ceci est le symbole de réinitialisation */}
                <ActionButton onClick={checkAnswer}>&#10004;</ActionButton> {/* Ceci est le symbole OK */}
            </ButtonContainer>
            {isCorrect !== null && (
                <Message isCorrect={isCorrect}>
                    {isCorrect 
                        ? `🎉 Bravo! 🎉 C'est exactement ${requiredSelection} fractions parmi 16, c'est-à-dire ${requiredSelection}/16.` 
                        : `😞 Désolé, votre sélection représente ${activeFractions.filter(val => val).length}/16 et non ${requiredSelection}/16.`
                    }
                </Message>
            )}
        </MainContainer>
    );
}

export default FractionActivity;


