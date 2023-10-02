import React, { useState } from 'react';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components';

const StyledText = styled.p`
    padding: 10px 20px;
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

    return (
        <Box sx={containerStyle}>
            <StyledText variant="h6">Aire d'un carré</StyledText>
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
                <StyledText variant="body1">{sideLength}</StyledText>
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
            <StyledText variant="body1" gutterBottom>
                La surface du carré est  {sideLength}×{sideLength} = {sideLength * sideLength} cm², ce qui signifie qu'on peut y placer {sideLength * sideLength} petits carrés !
            </StyledText>
        </Box>
    );
}

export default CalculateSquareArea;

    