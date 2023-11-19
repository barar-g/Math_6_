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
        <Button onClick={() => navigate('/EquilibrAlimantaire')}>Equilibre Alimantaire</Button>
        <Button onClick={() => navigate('/EquilibrEnergitique')}>Equilibre Energitique</Button>
        <Button onClick={() => navigate('/Desertfication')}>Desertfication</Button>
        <Button onClick={() => navigate('/Pollution')}>Pollution</Button>
        <Button onClick={() => navigate('/EauEtSante')}>L'eau et la Santé</Button>
        <Button onClick={() => navigate('/Vaccination')}>La Vaccination</Button>
        <Button onClick={() => navigate('/Sida')}>Sida</Button>

      </Stack>
    </Box>
  );
}

export default Accueil;


