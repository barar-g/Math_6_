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
                question: "Sidi a acheté 2 ballons. Chaque ballon coûte 10 MRU. Combien de MRU Sidi a-t-il dépensé en tout?",
                answers: ["10 MRU", "20 MRU", "30 MRU", "40 MRU"],
                correctAnswer: "20 MRU",
                explanation: "Sidi a acheté 2 ballons à 10 MRU chacun. Donc, 2 ballons x 10 MRU = 20 MRU."
              },
         
            {
                question: "Sidi a vendu un livre pour 20 MRU qu'il avait acheté pour 40 MRU. Combien a-t-il perdu?",
                answers: ["10 MRU", "20 MRU", "30 MRU"],
                correctAnswer: "20 MRU",
                explanation: "La perte est de 40 MRU - 20 MRU = 20 MRU."
            },
            {
                question: "Sidi a vendu un crayon pour 15 MRU et a réalisé un bénéfice de 5 MRU. Combien l'a-t-il acheté?",
                answers: ["5 MRU", "10 MRU", "15 MRU"],
                correctAnswer: "10 MRU",
                explanation: "Le prix d'achat est de 15 MRU - 5 MRU = 10 MRU."
            },
            {
                question: "Sidi a acheté une balle pour 10 MRU et a dépensé 5 MRU pour la peindre. Quel est le prix de revient?",
                answers: ["10 MRU", "15 MRU", "20 MRU"],
                correctAnswer: "15 MRU",
                explanation: "Le prix de revient est de 10 MRU + 5 MRU = 15 MRU."
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




