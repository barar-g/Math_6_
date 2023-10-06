import React, { useState, useEffect } from 'react';
import Reply from '@mui/icons-material/Reply';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const Card = styled.div`
  background-color: white;
  width : 90%;
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

function QuizComponent() {
    const [lineRelation, setLineRelation] = useState(null);
    const [userAnswer, setUserAnswer] = useState(null);

    const generateLines = () => {
        setUserAnswer(null);
        const randomChoice = Math.floor(Math.random() * 3);
        switch (randomChoice) {
            case 0:
                setLineRelation("parallel");
                break;
            case 1:
                setLineRelation("perpendicular");
                break;
            default:
                setLineRelation("none");
                break;
        }
    };

    useEffect(() => {
        generateLines();
    }, []);

    const renderLines = () => {
        const randomVariation = Math.floor(Math.random() * 3);
    
        switch (lineRelation) {
            case "parallel":
    switch (randomVariation) {
        case 0:  // Horizontales
            return (
                <svg width="200" height="100">
                    <line x1="10" y1="30" x2="190" y2="30" stroke="black" strokeWidth="2"/>
                    <line x1="10" y1="70" x2="190" y2="70" stroke="black" strokeWidth="2"/>
                </svg>
            );

            case 1:  // Verticales
            return (
                <svg width="200" height="100">
                    <line x1="60" y1="10" x2="60" y2="90" stroke="black" strokeWidth="2"/>
                    <line x1="140" y1="10" x2="140" y2="90" stroke="black" strokeWidth="2"/>
                </svg>
            );
        
                    case 2:  // Inclinées
                        return (
                            <svg width="200" height="100">
                                <line x1="10" y1="10" x2="190" y2="90" stroke="black" strokeWidth="2"/>
                                <line x1="10" y1="90" x2="190" y2="10" stroke="black" strokeWidth="2"/>
                            </svg>
                        );
                }
                break;
    
            case "perpendicular":
                switch (randomVariation) {
                    case 0:  // Standard
                        return (
                            <svg width="200" height="100">
                                <line x1="10" y1="10" x2="10" y2="90" stroke="black" strokeWidth="2"/>
                                <line x1="10" y1="50" x2="190" y2="50" stroke="black" strokeWidth="2"/>
                            </svg>
                        );
                    case 1:  // Inversé
                        return (
                            <svg width="200" height="100">
                                <line x1="10" y1="50" x2="190" y2="50" stroke="black" strokeWidth="2"/>
                                <line x1="100" y1="10" x2="100" y2="90" stroke="black" strokeWidth="2"/>
                            </svg>
                        );
                    case 2:  // Inclinées
                        return (
                            <svg width="200" height="100">
                                <line x1="10" y1="10" x2="190" y2="90" stroke="black" strokeWidth="2"/>
                                <line x1="10" y1="90" x2="100" y2="50" stroke="black" strokeWidth="2"/>
                            </svg>
                        );
                }
                break;
    
            case "none":
                switch (randomVariation) {
                    case 0:  // Votre SVG original pour "aucune des deux"
                        return (
                            <svg width="200" height="100">
                                <line x1="10" y1="10" x2="190" y2="10" stroke="black" strokeWidth="2"/>
                                <line x1="10" y1="90" x2="190" y2="50" stroke="black" strokeWidth="2"/>
                            </svg>
                        );
                    
                    case 1:
                        return (
                            <svg width="200" height="100">
                                <line x1="100" y1="10" x2="100" y2="90" stroke="black" strokeWidth="2"  transform="rotate(30 100 50)"/>
                                <line x1="10" y1="50" x2="190" y2="50" stroke="black" strokeWidth="2" transform="rotate(30 100 50)"/>
                            </svg>
                        );
                }
                break;
    
            default:
                return null;
        }
    }
    

    return (
        <div style={{ textAlign: 'center' }}>
            <Card>
            <br/>
            <Card><StyledText> Ces deux lignes sont-elles parallèles, perpendiculaires ou autre realtion ?</StyledText></Card>
            <br/>
            <br/>
            <div style={{ marginBottom: '20px' }}>
                {renderLines()}
            </div>

            <div>
                
            {["parallel", "perpendicular", "none"].map((answer) => (
    <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setUserAnswer(answer)}
        style={{ margin: '5px', padding: answer === "none" ? '10px' : undefined }}
    >
        {answer === "parallel" ? 
            <span style={{ fontSize: '24px' }}>∥</span> 
        : answer === "perpendicular" ? 
            <span style={{ fontSize: '24px' }}>⊥</span> 
        : 
            "Autre"}
    </Button>
))}


            </div>

            {userAnswer && (
                <div style={{ marginTop: '20px' }}>
                    {userAnswer === lineRelation ? (
                        <span style={{ color: 'green' }}><StyledText>Correct!</StyledText></span>
                    ) : (
                        <span style={{ color: 'red' }}><StyledText>Incorrect! Essayez à nouveau</StyledText>.</span>
                    )}
                </div>
            )}

            <div style={{ marginTop: '20px' }}>
                <Button variant='contained' color='primary' onClick={generateLines} style={{ padding: '10px' }}>
                <Reply/>
                </Button>
            </div>
            </Card>
        </div>
    );
}

export default QuizComponent;
