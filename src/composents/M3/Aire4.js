import React, { useState, useEffect } from 'react';
import { Container, Button, Select, MenuItem, Typography, Box, ImageList, ImageListItem } from '@mui/material';
import prof1 from '../images/Prof1.png';

function App() {
    const [shape, setShape] = useState('carre');
    const [startAnimation, setStartAnimation] = useState(false);

    const getDPath = () => {
        switch(shape) {
            case 'carre':
                return { path: `M50 50 H250 V250 H50 V50`, perimeter: 800 };
            case 'triangle':
                return { path: `M50 250 L150 50 L250 250 L50 250`, perimeter: 644 };
            case 'cercle':
                return { path: `M150 25 A125 125 0 1 1 149.9999 25.0001`, perimeter: 785 };
            case 'rectangle':
                return { path: `M50 50 H300 V150 H50 V50`, perimeter: 900 };
            case 'quadrilateral':
                return { path: `M50 50 L150 50 L250 150 L100 250 L50 50`, perimeter: 780 };
            default:
                return { path: '', perimeter: 0 };
        }
    };

    const startPerimetreAnimation = () => {
        setStartAnimation(true);
    };

    useEffect(() => {
        setStartAnimation(false);
    }, [shape]);

    const currentPath = getDPath();

    return (
        <Container maxWidth="md" style={{padding: '20px', borderRadius: '15px' }}>
            <ImageList>
                <ImageListItem>
                    <img src={prof1} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto', borderRadius: '15px' }} />
                </ImageListItem>
            </ImageList>
            
            <Box margin="20px 0">
                <svg width="350" height="300">
                    <path d={currentPath.path} fill="none" stroke="black" strokeWidth="2"></path>
                    
                    {startAnimation && 
                      <path d={currentPath.path} fill="none" stroke="limegreen" strokeWidth="2">
                        <animate attributeName="stroke-dasharray" from={`0,${currentPath.perimeter}`} to={`${currentPath.perimeter},${currentPath.perimeter}`} dur="4s" begin="0s" repeatCount="indefinite" />
                      </path>
                    }
                </svg>
            </Box>
            
            <Box marginBottom="15px">
                <Typography variant="body1">Forme: </Typography>
                <Select value={shape} onChange={(e) => setShape(e.target.value)}>
                    <MenuItem value="carre">Carré</MenuItem>
                    <MenuItem value="triangle">Triangle</MenuItem>
                    <MenuItem value="cercle">Cercle</MenuItem>
                    <MenuItem value="rectangle">Rectangle</MenuItem>
                    <MenuItem value="quadrilateral">Quadrilatéral</MenuItem>
                </Select>
            </Box>
            <Button variant="contained" color="primary" onClick={startPerimetreAnimation}>
                Voir le périmètre
            </Button>
        </Container>
    );
}

export default App;







