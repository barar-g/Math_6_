import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button as MuiButton, Stack } from '@mui/material';
import { Box } from '@mui/system';


function Accueil() {
  const navigate = useNavigate();

  const Button = ({ children, onClick }) => (
    <MuiButton 
      variant="contained" 
      onClick={onClick}
      style={{
        borderRadius: 35,
        padding: "18px 36px",
        fontSize: "18px",
        textTransform: "none",
        width: "200px",
        backgroundColor: '#0000FF',
        '&:hover': {
          backgroundColor: '#0000FF',
        },
      }}
    >
      {children}
    </MuiButton>
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="#F7F9FA"
    >
      
      <Stack
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "20px" }}
      >
        <Button onClick={() => navigate('/C1')}>C1</Button>
        <Button onClick={() => navigate('/C2')}>C2</Button>
        <Button onClick={() => navigate('/C3')}>C3</Button>
        <Button onClick={() => navigate('/C4')}>C4</Button>
        <Button onClick={() => navigate('/C5A1')}>C5</Button>
        <Button onClick={() => navigate('/C6')}>C6</Button>
        <Button onClick={() => navigate('/C7')}>C7</Button>
        <Button onClick={() => navigate('/M2')}>M2</Button>
        <Button onClick={() => navigate('/G1')}>G1</Button>
        <Button onClick={() => navigate('/G2')}>G2</Button>
        <Button onClick={() => navigate('/G3')}>G3</Button>
      </Stack>
    </Box>
  );
}

export default Accueil;


