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
        <Button onClick={() => navigate('/Science')}>Science</Button>
        

      </Stack>
    </Box>
  );
}

export default Acceuil;
