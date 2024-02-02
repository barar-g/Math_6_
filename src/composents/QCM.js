import React, { useState } from "react";
import styled from "styled-components";
import { Button,   CardContent, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { Card } from "./Styles/MajorStyles";

const CardContainer = styled.div`
  perspective: 1000px;
  margin: 20px auto;
`;


const StyledText = styled.p`
  padding: 2px 2px;
 
  align-items: center;
  font-size: 1.2em;
  font-family: "Comic Sans MS", sans-serif;
  &:hover {
    transform: scale(1.05);
  }`;



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
                            <Typography variant="h6"><StyledText>{question.question}</StyledText></Typography>
                            
                            <RadioGroup
                                value={selectedAnswers[index] || ''}
                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                            >
                                {question.answers.map((answer, aIndex) => (
                                    <FormControlLabel key={aIndex} value={answer} control={<Radio />} label= <StyledText>{answer}</StyledText> />
                                ))}
                            </RadioGroup>
                            
                            <Button variant="contained" color="primary" style={{ padding: '-18px 10px' }} onClick={() => handleFlip(index)}>Explication</Button>
                        </CardContent>
                    ) : (
                        <CardContent>
                             <Typography variant="h5" color={correct[index] ? "green" : "red"}>
                             <StyledText>  {correct[index] ? "Bonne réponse!" : "Mauvaise réponse"}</StyledText>
                            </Typography>
                            
                            <Typography variant="h6"><StyledText>Explication:</StyledText></Typography>
                            
                            <Typography variant="body1"><StyledText>{question.explanation}</StyledText></Typography>
                           
                            
                            <Button variant="contained" color="primary"  style={{ padding: '-18px 10px' }} onClick={() => handleFlip(index)}>Retour</Button>
                        </CardContent>
                    )}
                </Card>
                </CardContainer>
            ))}
        </div>
    );
}

export default QCM;    