import React, { useState } from "react";
import styled from "styled-components";
import { Button, Card as MuiCard, CardContent, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";

const Card = styled(MuiCard)`
    margin: 30px 0;
    font-family: 'Comic Sans MS', sans-serif;

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
`;

function QuestionCard() {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [isFlipped, setIsFlipped] = useState(null);
    const [correct, setCorrect] = useState({});

    const questionsArray = [
        {
            question: "Quelle est la somme des angles intérieurs d'un triangle?",
            answers: ["90°", "180°", "270°", "360°"],
            correctAnswer: "180°",
            explanation: "La somme des angles intérieurs d'un triangle est toujours de 180°.",
            userAnswer: null
        },
        {
            question: "Si un angle mesure 90°, comment est-il appelé?",
            answers: ["Aigu", "Obtus", "Droit", "Plat"],
            correctAnswer: "Droit",
            explanation: "Un angle qui mesure 90° est appelé angle droit.",
            userAnswer: null
        },
        {
            question: "Comment appelle-t-on un angle qui mesure moins de 90°?",
            answers: ["Aigu", "Obtus", "Droit", "Plat"],
            correctAnswer: "Aigu",
            explanation: "Un angle qui mesure moins de 90° est appelé angle aigu.",
            userAnswer: null
        },
        {
            question: "Si un angle mesure plus de 90° mais moins de 180°, comment est-il appelé?",
            answers: ["Aigu", "Obtus", "Droit", "Plat"],
            correctAnswer: "Obtus",
            explanation: "Un angle qui mesure plus de 90° mais moins de 180° est appelé angle obtus.",
            userAnswer: null
        },
        {
            question: "Quelle est la mesure d'un angle plat?",
            answers: ["90°", "180°", "270°", "360°"],
            correctAnswer: "180°",
            explanation: "Un angle plat mesure 180°.",
            userAnswer: null
        }
    ];
    

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
                <Card 
                    key={index} 
                    className={isFlipped === index ? "flipped" : "not-flipped"}
                >
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
            ))}
        </div>
    );
}

export default QuestionCard;
