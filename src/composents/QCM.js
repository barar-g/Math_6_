import React, { useState } from "react";
import styled from "styled-components";
import { Button, Card as MuiCard, CardContent, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";


const CardContainer = styled.div`
  perspective: 1000px;
  margin: 20px auto;
`;

const Card = styled(MuiCard)`
    margin: 30px 0;
    font-family: 'Comic Sans MS', sans-serif;
    box-sizing: border-box;
    width: 100%; 
    margin: 20px auto;
    padding: 20px;
    font-size: 1em;

    &.flipped {
      transform: rotateY(360deg);
      transition: transform 2s;
      perspective: 1000px;
    }

    &.not-flipped {
      transform: rotateY(0deg);
      transition: transform 2s;
      perspective: 1000px;
    }

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 0.8em;
    }
`;




function QCM({ questionsArray }) {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [isFlipped, setIsFlipped] = useState(null);
    const [correct, setCorrect] = useState({});

   
         
        const handleAnswerChange = (questionIndex, answer) => {
            setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answer }));
        };
    
        const handleFlip = (questionIndex) => {
            if (isFlipped === questionIndex) {
                setIsFlipped(null);
            } else {
                setIsFlipped(questionIndex);
                const correctAnswer = questionsArray[questionIndex].correctAnswer;
                setCorrect(prev => ({ ...prev, [questionIndex]: selectedAnswers[questionIndex] === correctAnswer }));
            }
        };
    
    return (
        <div style={{ fontFamily: "Comic Sans MS, sans-serif" }}>
            {questionsArray.map((question, index) => (
                <CardContainer key={index}>
                <Card className={isFlipped === index ? "flipped" : "not-flipped"}>
                    {isFlipped !== index ? (
                        <CardContent>
                            <Typography variant="h6">{question.question}</Typography>
                            <RadioGroup
                                value={selectedAnswers[index] || ''}
                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                            >
                                {question.answers.map((answer, aIndex) => (
                                    <FormControlLabel key={aIndex} value={answer} control={<Radio />} label={answer} />
                                ))}
                            </RadioGroup>
                            <Button variant="contained" color="primary" onClick={() => handleFlip(index)}>Explication</Button>
                        </CardContent>
                    ) : (
                        <CardContent>
                            <Typography variant="h6">Explication:</Typography>
                            <Typography variant="body1">{question.explanation}</Typography>
                            <Typography variant="h5" color={correct[index] ? "green" : "red"}>
                                {correct[index] ? "Bonne réponse!" : "Mauvaise réponse"}
                            </Typography>
                            <Button variant="contained" color="primary" onClick={() => handleFlip(index)}>Retour</Button>
                        </CardContent>
                    )}
                </Card>
                </CardContainer>
            ))}
        </div>
    );
}

export default QCM;    