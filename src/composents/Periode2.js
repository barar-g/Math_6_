import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button as MuiButton, Stack } from '@mui/material';
import { Box  } from '@mui/system';


function Acceuil() {
  const navigate = useNavigate();
  const scale = 0.8;

  const Button = ({ children, onClick }) => (
    <MuiButton 
      variant="contained" 
      onClick={onClick}
      style={{
        borderRadius: 35 * scale,
        padding: `${18 * scale}px ${36 * scale}px`,
        fontSize: `${18 * scale}px`,
        textTransform: "none",
        width: `${200 * scale}px`,
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
      marginTop="130px"
    >
      
      <Stack
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "20px" }}
      >
        <Button onClick={() => navigate('/P2A1A')}>Division des nombres entiers</Button>
        <Button onClick={() => navigate('/P2A1B')}>les multiples et les diviseurs</Button>
        <Button onClick={() => navigate('/P3A3')}>Caractères de divisibilité</Button>
        <Button onClick={() => navigate('/P3A4')}>Les Fractions</Button>
        <Button onClick={() => navigate('/Chap13')}>Fractions équivalents</Button>
        <Button onClick={() => navigate('/P3A5')}>Comparaison des fraction</Button>
        <Button onClick={() => navigate('/P3A6')}>Construction des triangles</Button>
        <Button onClick={() => navigate('/P3A7')}>Droites remerquable</Button>
        <Button onClick={() => navigate('/P3A8')}>Perimetres et Aires</Button>
        <Button onClick={() => navigate('/P2A1C')}>Calcue des prix</Button>
        <Button onClick={() => navigate('/Aire2')}>Mesures des angles</Button>
        <Button onClick={() => navigate('/Fraction2')}>Mesures des aires</Button>
        

      </Stack>
    </Box>
  );
}

export default Acceuil;
