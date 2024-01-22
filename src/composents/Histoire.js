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
    <Button justifyContent="center" onClick={() => navigate('/Hist1')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>1الملف</div>
  </Box>
      </Button>
  </Grid>


  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist2')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>2الملف</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist3')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>3الملف</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist4')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>4الملف</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist5')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>5الملف</div>
  </Box>
      </Button>
  </Grid>


  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist6')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>6الملف</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist7')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>7الملف</div>
  </Box>
      </Button>
  </Grid>


  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist8')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>8الملف</div>
  </Box>
      </Button>
  </Grid>



  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist9')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>9الملف</div>
  </Box>
      </Button>
  </Grid>

        
  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist10')}>
    <Box display="flex" flexDirection="column" alignItems="center">
   
    <div>10الملف</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist11')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>11الملف</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist12')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>12الملف</div>
  </Box>
      </Button>
  </Grid>
  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist13')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>13الملف</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist14')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>14الملف</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist15')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>15الملف</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist16')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>16الملف</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist17')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>17الملف</div>
  </Box>
      </Button>
  </Grid>

  <Grid item >
    <Button justifyContent="center" onClick={() => navigate('/Hist18')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    
    <div>18الملف</div>
  </Box>
      </Button>
  </Grid>


      </Grid>
      </BandeBox>
    </Box>
  );
}

export default Accueil;


