import React, { useState, useEffect } from 'react';
import { Container, Button, Select, MenuItem, Typography, Box, ImageList, ImageListItem } from '@mui/material';
import prof1 from '../Images/Prof1.png';

function App() {
    const [shape, setShape] = useState('carre');
    const [startAnimation, setStartAnimation] = useState(false);

    const getDPath = () => {
        switch(shape) {
            case 'carre':
                // Assumant que le carré a une taille de 200 pour le centrer dans un espace de 350x300
                return { path: `M75 50 H275 V250 H75 V50`, perimeter: 800 };
            case 'triangle':
                // Ajustant les points pour le centrer
                return { path: `M175 50 L325 250 L25 250 Z`, perimeter: 644 };
            case 'cercle':
                // Ajustant pour un cercle centré avec un rayon de 100
                return { path: `M175 50 A100 100 0 0 1 175 250 A100 100 0 0 1 175 50`, perimeter: 2 * Math.PI * 100 }; // 2*pi*r, avec r=100
                // 2*pi*r, avec r=100
            case 'rectangle':
                // Ajustant pour un rectangle centré de 200x100
                return { path: `M75 100 H275 V200 H75 V100`, perimeter: 600 };
            case 'quadrilateral':
                // Vous devrez ajuster selon la forme exacte de votre quadrilatéral
                // Exemple : un losange
                return { path: `M175 50 L325 150 L175 250 L25 150 Z`, perimeter: 780 };
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
                <Typography variant="body2">Forme: </Typography>
                <Select value={shape} style={{ 
        width: '70%', // Élargit le champ de sélection
        textAlign: 'center' // Centralise le texte
    }}
    MenuProps={{
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
        },
        getContentAnchorEl: null,
    }} onChange={(e) => setShape(e.target.value)}>
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