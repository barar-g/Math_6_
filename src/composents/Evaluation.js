import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button as MuiButton, Stack, Grid } from '@mui/material';
import { Box  } from '@mui/system';
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import BiotechTwoToneIcon from '@mui/icons-material/BiotechTwoTone';
import MosqueTwoToneIcon from '@mui/icons-material/MosqueTwoTone';
import PercentIcon from '@mui/icons-material/Percent';
import styled from "styled-components";
import QuizTwoToneIcon from '@mui/icons-material/QuizTwoTone';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';


const BandeBox = styled.div`
  overflow: hidden;
  border-radius: 15px;
  background-color: #F7F9FA;
  border:'none';
`;

function Acceuil() {
  
  const scale = 0.8;

  

  const Button = ({ children, onClick }) => (
    <MuiButton 
      variant="contained" 
      onClick={onClick}
      style={{
        padding: "5px 30px",
        fontSize: `18px`,
        textTransform: "none",
        width: `${200 * scale}px`,
        backgroundColor: '#F4F4F9',
        color: 'black',
        '&:hover': {
          backgroundColor: '#0000FF',
        },
        borderRadius:'15px'
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
        padding: "5px 30px",
        fontSize: `18px`,
        textTransform: "none",
        width: `${200 * scale}px`,
        backgroundColor: '#98FB98',
        color: 'black',
        borderRadius:'15px',
        '&:hover': {
          backgroundColor: '#0000FF',
        },
      }}
    >
      {children}
    </MuiButton>
  );
  const Button2 = ({ children, onClick }) => (
    <MuiButton 
      variant="contained" 
      onClick={onClick}
      style={{
        padding: "10px 30px",
        fontSize: `18px`,
        textTransform: "none",
        width: `${200 * scale}px`,
        backgroundColor: '#FF6347',
        borderRadius:'15px',
        color: 'White',
        '&:hover': {
          backgroundColor: '#0000FF',
        },
      }}
    >
      {children}
    </MuiButton>
  );
  const Button3 = ({ children, onClick }) => (
    <MuiButton 
      variant="contained" 
      onClick={onClick}
      style={{
        padding: "10px 30px",
        fontSize: `18px`,
        textTransform: "none",
        width: `${200 * scale}px`,
        backgroundColor: '#008080',
        borderRadius:'15px',
        color: 'White',
        '&:hover': {
          backgroundColor: '#0000FF',
        },
      }}
    >
      {children}
    </MuiButton>
  );


  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    // Function to update the count from 0 to 100 rapidly
    const updateCount = () => {
      let currentCount = 0;
      const interval = setInterval(() => {
        if (currentCount <= Math.floor(Math.random() * (100 - 50 + 1)) + 50) {
          setCount(currentCount);
          currentCount += 1;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval based on your preference for animation speed

      return () => clearInterval(interval);
    };

    // Call the updateCount function when the component mounts
    updateCount();
    const updateCount1 = () => {
      let currentCount = 0;
      const interval = setInterval(() => {
        if (currentCount <= Math.floor(Math.random() * (10 - 5 + 1)) + 5) {
          setCount1(currentCount);
          currentCount += 1;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval based on your preference for animation speed

      return () => clearInterval(interval);
    };

    // Call the updateCount function when the component mounts
    updateCount1();


  },
  
  
  
  
  []);
 

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
    <Button justifyContent="center">
    <Box display="flex"alignItems="center" style={{  marginLeft: '50px'}} >
    <RocketLaunchTwoToneIcon style={{ fontSize: 40, border: 'none' }}/>
    
  </Box>
  <Box display="flex"  flexDirection="column" style={{  marginLeft: '0px'}}  >
  <div style={{ fontSize: 20, marginRight: '130px'}}><strong>{count}</strong></div>
  <div style={{ fontSize: 15, marginRight: '59px', whiteSpace: 'nowrap' }}>Min de revision</div>
  </Box>
      </Button>
  </Grid>

 
  

  <Grid item >
    <Button1 justifyContent="center">
    <Box display="flex"alignItems="center" style={{  marginLeft: '50px'}} >
    <SpeedTwoToneIcon style={{ fontSize: 40, border: 'none' }}/>
    
  </Box>
  <Box display="flex"  flexDirection="column" style={{  marginLeft: '0px'}}  >
  <div style={{ fontSize: 20, marginRight: '130px'}}><strong>{count1}</strong></div>
  <div style={{ fontSize: 15, marginRight: '59px', whiteSpace: 'nowrap' }}>moy generale</div>
  </Box>
      </Button1>
  </Grid>

  <Grid item >
    <Button2 justifyContent="center" >
    <Box display="flex" flexDirection="column" >
    <div style={{ fontSize: 18, marginRight: '0px', whiteSpace: 'nowrap' }}><strong>QUIZ DE JOUR!</strong></div>
    <div style={{ fontSize: 15, marginRight: '35px', whiteSpace: 'nowrap' }}>Test aleatoire</div>
    <div style={{ fontSize: 15, marginRight: '10px', whiteSpace: 'nowrap' }}> sur tes matieres</div>
  </Box>
      </Button2>
  </Grid>

  <Grid item >
    <Button3 justifyContent="center"  >
    <Box display="flex" flexDirection="column" style={{ opacity: 0 }}>
    <div style={{ fontSize: 18, marginRight: '0px', whiteSpace: 'nowrap' }}><strong>QUIZ DE JOUR!</strong></div>
    <div style={{ fontSize: 15, marginRight: '35px', whiteSpace: 'nowrap' }}>Test aleatoire</div>
    <div style={{ fontSize: 15, marginRight: '10px', whiteSpace: 'nowrap' }}> sur tes matieres</div>
  </Box>
      </Button3>
  </Grid>



</Grid>
</BandeBox>
    </Box>
  );
}

export default Acceuil;
