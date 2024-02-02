import React, { useState, useEffect } from 'react';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from 'styled-components';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const StyledText = styled.p`
    padding: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;
    &:hover {
        transform: scale(1.05);
    }
`;

function CalculateSquareArea() {
    const [sideLength, setSideLength] = useState(10);
    const pixelsPerCm = 30;
    const sideLengthInPx = sideLength * pixelsPerCm;
    const generateNumber=()=>{
        return Math.floor(Math.random() * 11) + 2
    }
    const [sideNumber, setsideNumber] = useState(generateNumber);
    const [ShowCongrats, setShowCongrats] = useState(false);
    const [showX, setShowX] = useState(false);
    const [opVerify, setOpverify] = useState(false);


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        padding: 4,
        maxWidth: isMobile ? '90vw' : 'auto',
        fontFamily: "'Comic Sans MS', sans-serif",
        transition: 'all 0.5s ease',
        boxShadow: '4px 4px 15px rgba(0,0,0,0.2)',
        
    };
    const verify=()=>{
        if (sideNumber == sideLength) {
            setShowCongrats(true);
        }else{
            setShowCongrats(false);
            setShowX(true);
           
            setTimeout(() => {
              setShowX(false); // Hide the "X" element after 2 seconds
            }, 2000);
        }
        console.log(sideNumber);

    }
    useEffect(() => {
        // Update originalCount and toAdd with new random values
        setsideNumber(generateNumber);
        setShowCongrats(false);
        
      }, []); 
      const reset = () => {
        setShowCongrats(false);
        setsideNumber(Math.floor(Math.random() * 11) + 2)// Hide the "X" element after 2 seconds
      };

    return (
        <Box sx={containerStyle}>
            <StyledText variant="h6">Aire d'un carré</StyledText>
            <StyledText variant="body1" gutterBottom>
                Quelle doit etre le mesure du coté  pour que La surface soit {sideNumber*sideNumber}!
            </StyledText>
            <Box
                sx={{
                    width: `${sideLengthInPx}px`,
                    height: `${sideLengthInPx}px`,
                    display: 'grid',
                    gridTemplateColumns: `repeat(${sideLength}, ${pixelsPerCm}px)`,
                    gridTemplateRows: `repeat(${sideLength}, ${pixelsPerCm}px)`,
                    transition: 'all 0.5s ease',
                }}
            >
                {[...Array(sideLength * sideLength)].map((_, idx) => (
                    <Box key={idx} sx={{
                        width: `${pixelsPerCm}px`,
                        height: `${pixelsPerCm}px`,
                        border: '0.5px solid #2196F3',
                    }} />
                ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setSideLength(prev => Math.max(prev - 1, 2))}
                >
                    <RemoveIcon />
                </Button>
                {!ShowCongrats && 
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={verify}
                >
                    <CheckCircleIcon />
                </Button>
                
}
{ShowCongrats && 
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={reset}
                >
                    <RestartAltIcon />
                </Button>

}
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setSideLength(prev => Math.min(prev + 1, 12))}
                >
                    <AddIcon />
                </Button>
            </Box>
            <StyledText variant="body1" gutterBottom>
                Côté = {sideLength} cm
            </StyledText>
            {ShowCongrats &&
            <StyledText>
                correct ✅
               
                
                <span style={{alignItems:"center"}}>{sideNumber}x{sideNumber}={sideNumber*sideNumber}</span>
            </StyledText>

            }
             <div>{showX && <span>✖️</span>}
          </div>
           
           
        </Box>
    );
}

export default CalculateSquareArea;

    