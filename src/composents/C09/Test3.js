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
                question: "Marie a 36 crayons et elle veut les partager également entre 4 amis. Combien de crayons auront-ils chacun ?",
                answers: ["8 crayons", "10 crayons", "12 crayons", "6 crayons"],
                correctAnswer: "48 crayons",
                explanation: "Le reponse correct est 8 crayons car (8 x 4) = 36"
              },
         
            {
                question: "Un paquet de gâteaux contient 24 biscuits. Si on veut les distribuer équitablement entre 8 enfants, combien de biscuits chacun recevra-t-il ?",
                answers: ["2 biscuits", "5 biscuits", "3 biscuits"],
                correctAnswer: "3 biscuits",
                explanation: "Le reponse correct est 3 biscuits car (8 x 3) = 36"
            },
            {
                question: "L'épicier emballe 120 bonbons dans des sachets de 8 bonbons chacun. Combien de sachets complets pourra-t-il réaliser ?",
                answers: ["20 sachets", "10 sachets", "15 sachets"],
                correctAnswer: "15 sachets",
                explanation: "Le reponse correct est 15 sachets car (15 x 8) = 120"
            },
            {
                question: "Il y a 42 œufs dans une boîte et on veut les mettre dans des cartons de 6 œufs chacun. Combien de cartons remplira-t-on ?",
                answers: ["7 œufs", "10 œufs", "12 œufs"],
                correctAnswer: "7 œufs",
                explanation: "Le reponse correctest 7 œufs car (7 x 6) = 120" }
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