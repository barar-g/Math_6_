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
        <Button onClick={() => navigate('/Hist1')}>1الملف</Button>
        <Button onClick={() => navigate('/Hist2')}>2الملف</Button>
        <Button onClick={() => navigate('/Hist3')}>3الملف</Button>
        <Button onClick={() => navigate('/Hist4')}>4الملف</Button>
        <Button onClick={() => navigate('/Hist5')}>5الملف</Button>
        <Button onClick={() => navigate('/Hist6')}>6الملف</Button>
        <Button onClick={() => navigate('/Hist7')}>7الملف</Button>
        <Button onClick={() => navigate('/Hist8')}>8الملف</Button>
        <Button onClick={() => navigate('/Hist9')}>9الملف</Button>
        <Button onClick={() => navigate('/Hist10')}>10الملف</Button>
        <Button onClick={() => navigate('/Hist11')}>11الملف</Button>
        <Button onClick={() => navigate('/Hist12')}>12الملف</Button>
        <Button onClick={() => navigate('/Hist13')}>13الملف</Button>
        <Button onClick={() => navigate('/Hist14')}>14الملف</Button>
        <Button onClick={() => navigate('/Hist15')}>15الملف</Button>
        <Button onClick={() => navigate('/Hist16')}>16الملف</Button>
        <Button onClick={() => navigate('/Hist17')}>17الملف</Button>
        <Button onClick={() => navigate('/Hist18')}>18الملف</Button>

      </Stack>
    </Box> </div>
  );
}

export default Accueil;
