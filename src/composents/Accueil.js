import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button as MuiButton, Stack } from '@mui/material';
import { Box } from '@mui/system';
import logo from './logoM.png';

function Accueil() {
  const navigate = useNavigate();

  const navigateToExam = () => {
    navigate('/choix examn');
  };

  const Button = ({ children }) => (
    <MuiButton 
      variant="contained" 
      onClick={navigateToExam}
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
      <img src={logo} alt="logo" width="250" height="250" style={{ position: "absolute", top: "30px" }} />
      <Stack
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "20px" }}
      >
        <Button>Sciencs Naturel</Button>
        <Button>Mathématique</Button>
        <Button>Français</Button>
        <Button>Arabe</Button>
      </Stack>
    </Box>
  );
}

export default Accueil;

