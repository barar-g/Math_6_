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
            question: "Si vous divisez une pomme en 4 parts égales et que vous mangez 1 part, combien de parts avez-vous mangé?",
            answers: ["1/4", "1/2", "3/4", "1/8"],
            correctAnswer: "1/4",
            explanation: "Vous avez mangé 1 des 4 parts, donc vous avez mangé 1/4 de la pomme.",
            userAnswer: null
        },
        {
            question: "Vous avez une barre de chocolat divisée en 5 morceaux. Si vous mangez 2 morceaux, quelle fraction de la barre de chocolat avez-vous mangé?",
            answers: ["1/5", "2/5", "3/5", "4/5"],
            correctAnswer: "2/5",
            explanation: "Vous avez mangé 2 des 5 morceaux, donc vous avez mangé 2/5 de la barre de chocolat.",
            userAnswer: null
        },
        {
            question: "Dans une boîte de 6 bonbons, si vous donnez 3 bonbons à votre ami, quelle fraction des bonbons avez-vous donnée?",
            answers: ["1/2", "1/3", "2/3", "1/6"],
            correctAnswer: "1/2",
            explanation: "Vous avez donné 3 des 6 bonbons, donc vous avez donné 1/2 des bonbons.",
            userAnswer: null
        },
        {
            question: "Si une pizza est coupée en 8 parts et que vous mangez 3 parts, combien de parts de pizza avez-vous mangé?",
            answers: ["1/8", "2/8", "3/8", "4/8"],
            correctAnswer: "3/8",
            explanation: "Vous avez mangé 3 des 8 parts, donc vous avez mangé 3/8 de la pizza.",
            userAnswer: null
        }
    
        // ... vos questions ici
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
