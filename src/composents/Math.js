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
        width: "100px",
        backgroundColor: '#0000FF',
        '&:hover': {
          backgroundColor: '#0000FF',
        },
      }}
    >
      {children}
    </MuiButton>
  );

  return ( <div>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="#F7F9FA"
      style={{ paddingTop: "300px" }} 
    >
      
      <Stack
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "20px" }}
      >
      <Button onClick={() => navigate('/Periode1')}>Periode1</Button>
     <Button onClick={() => navigate('/Periode2')}>Periode2</Button>
      </Stack>
    </Box> </div>
  );
}

export default Accueil;
