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
                question: "Qu'est-ce que le périmètre ?",
                answers: ["La mesure de la surface à l'intérieur d'une figure géométrique.", "La somme des longueurs de tous les côtés d'une figure géométrique.", "La mesure de la distance entre le centre et le bord d'une figure géométrique"],
                correctAnswer: "La somme des longueurs de tous les côtés d'une figure géométrique.",
                explanation: "Voir la definition"
              },
         
            {
                question: "Comment calculez-vous le périmètre d'un rectangle ?",
                answers: ["Longueur * Largeure", "2 * (Longueur + Largeur)", "(Longueur + Largeur) / 2"],
                correctAnswer: "Longueur * Largeure",
                explanation: "Voir la definition"
            },
            {
                question: "Quelle formule utilisez-vous pour calculer l'aire d'un triangle ?",
                answers: ["Longueur * Largeur", "(Base * Hauteur) / 2", "Longueur + Largeur"],
                correctAnswer: "(Base * Hauteur) / 2",
                explanation: "Voir la definition" 
            },
            {
                question: "Si un carré a un côté de 6 unités, quelle est son aire ?",
                answers: ["6 unités carrées", "12 unités carrées","36 unités carrées "],
                correctAnswer: "6 unités carrées",
                explanation: "Voir la definition" 
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