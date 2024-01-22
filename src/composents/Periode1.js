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
    <Button justifyContent="center" onClick={() => navigate('/C1')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>C1</div>
  </Box>
      </Button>
  </Grid>


  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/C2')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>C2</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/C3')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>C3</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/C4')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>C4</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/C5')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>C5</div>
  </Box>
      </Button>
  </Grid>


  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/C6')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>C6</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/C7')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>C7</div>
  </Box>
      </Button>
  </Grid>


  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/M1')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>M1</div>
  </Box>
      </Button>
  </Grid>



  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/G1')}>
    <Box display="flex" flexDirection="column" alignItems="center">
  
    <div>G1</div>
  </Box>
      </Button>
  </Grid>

        
  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/G2')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>G2</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/G3')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>G3</div>
  </Box>
      </Button>
  </Grid>

      </Grid>
      </BandeBox>
    </Box>
  );
}

export default Accueil;


