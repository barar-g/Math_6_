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
                question: "Pourquoi l'aire d'un rectangle de 4 cm de long et 2 cm de large est-elle de 8 cm², et comment peut-on vérifier cette mesure en comptant les carrés à l'intérieur ?",
                answers: ["1", "2", "3", "4"],
                correctAnswer: "1",
                explanation: "1"
              },
         
            {
                question: "Une piscine rectangulaire mesure 5 mètres de long sur 3 mètres de large. Quelle est l'aire de la surface de l'eau en m², et comment peut-on exprimer cette aire en ares ?",
                answers: ["1", "2"],
                correctAnswer: "1",
                explanation: "1"
            },
            {
                question: "Si un triangle a une base de 10 cm et une hauteur de 8 cm, comment calcule-t-on son aire en cm², et pourquoi divise-t-on le produit de la base et de la hauteur par 2 ?",
                answers: ["1", "2"],
                correctAnswer: "1",
                explanation: "1" 
            },
            {
                question: "Un cercle a un rayon de 6 cm. Comment calcule-t-on son aire en cm², et pourquoi doit-on utiliser la formule πr² pour cette mesure ?",
                answers: ["1", "2"],
                correctAnswer: "1",
                explanation: "1" 
            },
            {
                question: "Un terrain carré a une aire de 225 m². Quelle est la longueur de chaque côté du terrain, et comment peut-on exprimer cette aire en ares et centiares ?",
                answers: ["1", "2"],
                correctAnswer: "1",
                explanation: "1" 
            },
            {
                question: "Pour mesurer l'aire d'une forme complexe, comme un parc de jeux pour enfants, quelles méthodes pourrais-tu utiliser pour découper cette forme en sections plus simples et additionner les aires individuelles ?",
                answers: ["1", "2"],
                correctAnswer: "1",
                explanation: "1" 
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