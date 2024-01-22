import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button as MuiButton, Stack, Grid } from '@mui/material';
import { Box } from '@mui/system';
import PercentIcon from '@mui/icons-material/Percent';
import styled from "styled-components";


const BandeBox = styled.div`
  overflow: hidden;
  border-radius: 15px;
  background-color: #F7F9FA;
  border:'none';
`;

function Accueil() {
  const navigate = useNavigate();
  const scale = 0.8;

  const Button = ({ children, onClick }) => (
    <MuiButton 
      variant="contained" 
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: `18px`,
        textTransform: "none",
        width: `${200 * scale}px`,
        backgroundColor: '#FF69B4',
        color: 'black',
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
        <Button onClick={() => navigate('/Islamique1')}>السيرة النبوية </Button>
        <Button onClick={() => navigate('/Islamique2')}>الاخلاق</Button>
        <Button onClick={() => navigate('/Islamique3')}>العقيدة</Button>
        <Button onClick={() => navigate('/Islamique4')}>العبادات</Button>
      </Stack>
      <BandeBox>
      
      
      <Grid container spacing={2} style={{  justifyContent:"center"}}>

      <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Islamique1')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>السيرة النبوية </div>
  </Box>
      </Button>
  </Grid>


  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Islamique2')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>الاخلاق</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Islamique3')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>العقيدة</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Islamique4')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>العبادات</div>
  </Box>
      </Button>
  </Grid>

  
      </Grid>
      </BandeBox>
    </Box>
  );
}

export default Accueil;


