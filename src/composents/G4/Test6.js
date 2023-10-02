import React, { useState } from "react";
import styled from "styled-components";
import { Button, Card as MuiCard, CardContent, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";
      
      const Card = styled(MuiCard)`
        margin: 30px 0;
      
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
                question: "Quel type de triangle a un angle droit?",
                answers: ["Triangle isocèle", " Triangle équilatéral", "Triangle rectangle"],
                correctAnswer: "Triangle rectangle",
                explanation: "Triangle rectangle"
              },
         
            {
                question: "Quel est le nom du triangle qui a deux côtés de même longueur?",
                answers: ["Triangle isocèle", "Triangle rectangle", "Triangle scalène"],
                correctAnswer: " Triangle isocèle",
                explanation: "Triangle isocèle"
            },
            {
                question: "Quelle est la formule pour calculer l'aire d'un triangle?",
                answers: ["Aire = base x hauteur", "Aire = (base x hauteur) / 2", "Aire = côté x côté","Aire = (côté x côté) / 2"],
                correctAnswer: "Aire = (base x hauteur) / 2",
                explanation: "le fromule pour calculer l'aire est Aire = (base x hauteur) / 2" 
            },
            {
                question: "Si deux côtés d'un triangle mesurent 3 cm et 4 cm, quelle est la longueur du troisième côté dans un triangle non droit?",
                answers: ["1 cm", "5 cm","7 cm"," 12 cm"],
                correctAnswer: "",
                explanation: "" 
            },
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
              <div>
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