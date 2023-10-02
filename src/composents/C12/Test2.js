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
                question: "Ana a acheté 3 boîtes de crayons. Chaque boîte contient 12 crayons. Combien de crayons au total a-t-elle achetés ?",
                answers: ["16 crayons", "48 crayons", "32 crayons", "40 crayons"],
                correctAnswer: "48 crayons",
                explanation: "Ana a acheté 3 boîtes avec 12 crayons chacun. Donc, 12 crayons x 3 boîtes= 48 crayons."
              },
         
            {
                question: "Ahmedou veut acheter 8 cahiers pour 200 MRU le cahier, et 5 Stylos pour 100 le stylo, combien doit-t-il depanser?",
                answers: ["2100 MRU", "2500 MRU", "3000 MRU"],
                correctAnswer: "2100 MRU",
                explanation: "Ahmedou doit depanser (8 x 200) + (5 x 100) = 2100 MRU"
            },
            {
                question: "L'épicier emballe 120 bonbons dans des sachets de 8 bonbons chacun. Combien de sachets complets pourra-t-il réaliser ?",
                answers: ["20 sachets", "10 sachets", "15 sachets"],
                correctAnswer: "15 sachets",
                explanation: "Le nombre des sachets est de ( 120 / 8 ) = 15 sachets."
            },
            {
                question: "Le jardinier a planté 24 arbres  et veut les organiser en rangées avec le même nombre d'arbres dans chaque rangée. Combien de rangées peut-il former? ",
                answers: ["6 rangées", "4 rangées", "3 rangées"],
                correctAnswer: "6 rangées",
                explanation: "Le diviseurs de 24 sont 12,8,6,4,3,2 (6 diviseurs) donc il peut forme 6 rangées." }
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