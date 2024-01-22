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
        backgroundColor: '#98FB98',
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
    <Button justifyContent="center" onClick={() => navigate('/EquilibrAlimantaire')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>Equilibre Alimantaire</div>
  </Box>
      </Button>
  </Grid>


  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/EquilibrEnergitique')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>Equilibre Energitique</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Desertfication')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>Desertfication</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Pollution')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>Pollution</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/EauEtSante')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>L'eau et la Santé</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Vaccination')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>La Vaccination</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Sida')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>Sida</div>
  </Box>
      </Button>
  </Grid>
  
      </Grid>
      </BandeBox>
    </Box>
  );
}

export default Accueil;


