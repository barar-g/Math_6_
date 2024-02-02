import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';




const Card = styled.div`
  background-color: white;
  width: 90%;
  padding: 20px;
  border-radius: 40px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #E1F5FE;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

const StyledText = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  transition: background-color 0.4s, transform 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-family: 'Comic Sans MS', sans-serif;

  &:hover {
    transform: scale(1.05);
  }
`;

const lineStyle = { stroke: "black", strokeWidth: "2", strokeLinecap: "round" };

function QuizComponent() {
  const [lineRelation, setLineRelation] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [lineVariation, setLineVariation] = useState(null);


  const generateLines = () => {
    setUserAnswer(null);
    setShowAnswer(false);
    const randomChoice = Math.floor(Math.random() * 3);
    const randomVariation = Math.floor(Math.random() * 3);
    setLineRelation(randomChoice === 0 ? "parallel" : randomChoice === 1 ? "perpendicular" : "none");
    setLineVariation(randomVariation);
  };
  

  const checkAnswer = (answer) => {
    setUserAnswer(answer);
    setShowAnswer(true);
  };

  const renderLines = () => {
    switch (lineRelation) {
      case "parallel":
        switch (lineVariation) {
          case 0:  // Horizontales
            return (
              <svg width="200" height="100">
                <line x1="10" y1="40" x2="190" y2="40" {...lineStyle} />
                <line x1="10" y1="60" x2="190" y2="60" {...lineStyle} />
              </svg>
            );
          case 1:  // Verticales
            return (
              <svg width="200" height="100">
                <line x1="80" y1="10" x2="80" y2="90" {...lineStyle} />
                <line x1="120" y1="10" x2="120" y2="90" {...lineStyle} />
              </svg>
            );
          case 2:  // Inclinées
            return (
              <svg width="200" height="100">
                <line x1="30" y1="30" x2="170" y2="30" {...lineStyle} />
                <line x1="30" y1="70" x2="170" y2="70" {...lineStyle} />
              </svg>
            );
          default:
            return null;
        }
        break;
      case "perpendicular":
        switch (lineVariation) {
          case 0:  // Standard
            return (
              <svg width="200" height="100">
                <line x1="10" y1="50" x2="100" y2="50" {...lineStyle} />
                <line x1="100" y1="10" x2="100" y2="90" {...lineStyle} />
              </svg>
            );
          case 1:  // Inversé
            return (
              <svg width="200" height="100">
                <line x1="50" y1="10" x2="50" y2="90" {...lineStyle} />
                <line x1="10" y1="50" x2="190" y2="50" {...lineStyle} />
              </svg>
            );
          case 2:  // Inclinées
            return (
              <svg width="200" height="200">
              <line x1="30" y1="30" x2="170" y2="70" {...lineStyle} />
              <line x1="170" y1="70" x2="130" y2="210" {...lineStyle} />
            </svg>

            );
          default:
            return null;
        }
        break;
      case "none":
        switch (lineVariation) {
          case 0:  // Votre SVG original pour "aucune des deux"
            return (
              <svg width="200" height="100">
                <line x1="10" y1="10" x2="190" y2="10" {...lineStyle} />
                <line x1="10" y1="90" x2="190" y2="50" {...lineStyle} />
              </svg>
            );
          case 1:
            return (
              <svg width="200" height="100">
                <line x1="100" y1="10" x2="100" y2="90" {...lineStyle} transform="rotate(30 100 50)" />
                <line x1="10" y1="50" x2="190" y2="50" {...lineStyle} transform="rotate(30 100 50)" />
              </svg>
            );
          case 2:
            return (
              <svg width="200" height="100">
                <line x1="50" y1="10" x2="150" y2="90" {...lineStyle} />
                <line x1="150" y1="10" x2="50" y2="90" {...lineStyle} />
              </svg>
            );
          default:
            return null;
        }
        break;
      default:
        return null;
    }
  };
  
  

  const handleNextButtonClick = () => {
    generateLines();
    setShowAnswer(false);
  };
  useEffect(() => {
    generateLines(); // Génère les lignes initiales dès le chargement du composant
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <Card>
        <br />
        <Card>
          <StyledText> Ces deux lignes sont-elles parallèles, perpendiculaires ou d'une autre relation ?</StyledText>
        </Card>
        <br />
        <br />
        <div style={{ marginBottom: '20px' }}>
          {renderLines()}
        </div>

        <div>
          {["parallel", "perpendicular", "none"].map((answer) => (
            <Button
              key={answer}
              variant="contained"
              color="primary"
              onClick={() => checkAnswer(answer)}
              style={{ margin: '5px', padding: answer === "none" ? '10px' : undefined }}
              disabled={showAnswer}
            >
              {answer === "parallel" ?
                <span style={{ fontSize: '24px' }}>∥</span>
                : answer === "perpendicular" ?
                  <span style={{ fontSize: '24px' }}>⊥</span>
                  : "Autre"}
            </Button>
          ))}
        </div>

        {showAnswer && (
          <div style={{ marginTop: '20px' }}>
            {userAnswer === lineRelation ? (
              <span style={{ color: 'green' }}><StyledText>Correct!</StyledText></span>
            ) : (
              <span style={{ color: 'red' }}><StyledText>Faux! La réponse correcte est {lineRelation}</StyledText></span>
            )}
          </div>
        )}

        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleNextButtonClick}
          style={{ marginTop: '20px' }}
          disabled={!showAnswer}
        >
          Suivant
        </Button>
      </Card>
    </div>
  );
}

export default QuizComponent;
