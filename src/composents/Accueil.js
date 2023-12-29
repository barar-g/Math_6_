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
import QuizTwoToneIcon from '@mui/icons-material/QuizTwoTone';


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
  const Button2 = ({ children, onClick }) => (
    <MuiButton 
      variant="contained" 
      onClick={onClick}
      style={{
        padding: "30px 60px",
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
  const Button3 = ({ children, onClick }) => (
    <MuiButton 
      variant="contained" 
      onClick={onClick}
      style={{
        padding: "30px 60px",
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

  const Button4 = ({ children, onClick }) => (
    <MuiButton 
      variant="contained" 
      onClick={onClick}
      style={{
        padding: "30px 60px",
        fontSize: `18px`,
        textTransform: "none",
        width: `${200 * scale}px`,
        backgroundColor: '#98FF98',
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
    <Button justifyContent="center" onClick={() => navigate('/Math')}>
    <Box display="flex" flexDirection="column" alignItems="center" >
    <PercentIcon style={{ fontSize: 35, border: 'none' }}/>
    <div>Mathematique</div>
  </Box>
      </Button>
  </Grid>

 
  

  <Grid item >
    <Button1 justifyContent="center" onClick={() => navigate('/Science')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    <BiotechTwoToneIcon style={{ fontSize: 35, border: 'none' }}/>
    <div>Science</div>
  </Box>
      </Button1>
  </Grid>

  <Grid item >
    <Button2 justifyContent="center" onClick={() => navigate('/Histoire')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    <LibraryBooksTwoToneIcon style={{ fontSize: 35, border: 'none' }}/>
    <div>التاريخ</div>
  </Box>
      </Button2>
  </Grid>

  <Grid item>
    <Button3 justifyContent="center" onClick={() => navigate('/Islamique')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    <MosqueTwoToneIcon style={{ fontSize: 35, border: 'none' }}/>
    <div>الاسلامية</div>
  </Box>
      </Button3>
  </Grid>

  <Grid item>
    <Button4 justifyContent="center" onClick={() => navigate('/Evaluation')}>
    <Box display="flex" flexDirection="column" alignItems="center">
    <QuizTwoToneIcon style={{ fontSize: 35, border: 'none' }}/>
    <div>Evalutaion</div>
  </Box>
      </Button4>
  </Grid>

</Grid>
</BandeBox>
    </Box>
  );
}

export default Acceuil;
