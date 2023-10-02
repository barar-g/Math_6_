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
                question: "Quel type de droite fait un angle 90 degrees par rapport un autre ligne",
                answers: ["Droite perpandiculaire", "Droite paralelle", "Droite de mediane"],
                correctAnswer: "Droite perpandiculaire",
                explanation: "Droite perpandiculaire"
              },
         
            {
                question: "Si deux droites  sont  perpendiculaires a un troiseume droite, donc ce sont... ",
                answers: ["perpendiculaire", "parallele", "quelqonque"],
                correctAnswer: "parallele",
                explanation: "les droites sont parallele"
            },
            {
                question: "Combien de points sont suffisantes pour construire une droite ",
                answers: ["1 points", "2 points", "3 points"],
                correctAnswer: "2 points",
                explanation: "On est besoin de deux points seulmet pour construire une droite " 
            },
            {
                question: "Quelle droite est perpendiculaire à un segment et le divise en deux parties égales ?",
                answers: ["Mediatrice", "Le mediane","Hauteur "," 12 cm"],
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