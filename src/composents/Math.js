import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button as MuiButton, Stack, Grid } from '@mui/material';
import { Box  } from '@mui/system';
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import BiotechTwoToneIcon from '@mui/icons-material/BiotechTwoTone';
import MosqueTwoToneIcon from '@mui/icons-material/MosqueTwoTone';
import PercentIcon from '@mui/icons-material/Percent';
import styled from "styled-components";


const BandeBox = styled.div`
  overflow: hidden;
  border-radius: 15px;
  background-color: #F7F9FA;
  border:'none';
`;

function Acceuil() {
  const navigate = useNavigate();
  const scale = 0.8;

  const Button = ({ children, onClick }) => (
    <MuiButton 
      variant="contained" 
      onClick={onClick}
      style={{
        padding: "30px 60px",
        fontSize: `18px`,
        textTransform: "none",
        width: `${200 * scale}px`,
        backgroundColor: '#87CEEB',
        color: 'black',
        '&:hover': {
          backgroundColor: '#0000FF',
        },
      }}
    >
      {children}
    </MuiButton>
  );

  

  const Button1 = ({ children, onClick }) => (
    <MuiButton 
      variant="contained" 
      onClick={onClick}
      style={{
        padding: "30px 60px",
        fontSize: `18px`,
        textTransform: "none",
        width: `${200 * scale}px`,
        backgroundColor: '#00BFFF',
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
      <BandeBox>
      
      
      <Grid container spacing={2} style={{  justifyContent:"center"}}>

      <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Periode1')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    <PercentIcon style={{ fontSize: 35, border: 'none' }}/>
    <div>Periode1</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button1 justifyContent="center" onClick={() => navigate('/Periode2')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    <CalculateTwoToneIcon style={{ fontSize: 35, border: 'none' }}/>
    <div>Periode2</div>
  </Box>
      </Button1>
  </Grid>
  

  

</Grid>
</BandeBox>
    </Box>
  );
}

export default Acceuil;
