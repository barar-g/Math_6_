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
    <Button justifyContent="center" onClick={() => navigate('/P2A1A')}>
    <Box display="flex" flexDirection="column" alignItems="center">
 
    <div>Division des nombres entiers</div>
  </Box>
      </Button>
  </Grid>


  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/C2')}>
    <Box display="flex" flexDirection="column" alignItems="center">
  
    <div>les multiples et les diviseurs</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/P3A3')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>Caractères de divisibilité</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/P3A4')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>Les Fractions</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Chap13')}>
    <Box display="flex" flexDirection="column" alignItems="center">
  
    <div>Fractions équivalents</div>
  </Box>
      </Button>
  </Grid>


  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/P3A5')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>Comparaison des fraction</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/P3A6')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>Construction des triangles</div>
  </Box>
      </Button>
  </Grid>


  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/P3A7')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>Droites remerquable</div>
  </Box>
      </Button>
  </Grid>



  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/P3A8')}>
    <Box display="flex" flexDirection="column" alignItems="center">
  
    <div>Perimetres et Aires</div>
  </Box>
      </Button>
  </Grid>

        
  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/P2A1C')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>Calcue des prix</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Aire2')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>Mesures des angles</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Fraction2')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>Mesures des aires</div>
  </Box>
      </Button>
  </Grid>

      </Grid>
      </BandeBox>
    </Box>
  );
}

export default Accueil;


