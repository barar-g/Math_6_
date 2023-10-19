import React, { useState } from 'react';
import { Button, Card, CardContent, Box, TextField, Grid } from '@mui/material';
import useSound from 'use-sound';
import jumpSound from '../sounds/jump.mp3';
import Kangaroo from './Kangaroo';
import ReplyIcon from '@mui/icons-material/Reply';
import styled from "styled-components";

const FractionBande1 = styled.div`
  flex: 1;
 

  background-color: white;
  transition: background-color 0.4s, transform 0.3s;
  cursor: pointer;
  display: flex;
  
  align-items: center;
  font-size: 0.8em;
  font-family: "Comic Sans MS", sans-serif;

`;

const BandeBox1 = styled.div`
  width: 82vw;
  height: 5vw;
  display: flex;
  overflow: hidden;
  box-shadow: 0vw 0vw 0vw rgba(0, 0, 0, 0.3);
  border-radius: 15vw;
  background-color: white;
`;


function C6A1() {
  const [position, setPosition] = useState(0);
  const [play] = useSound(jumpSound);
  const [isJumping, setIsJumping] = useState(false);
  const [numJumps, setNumJumps] = useState('');
  const [jumpDistance, setJumpDistance] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const [animationDistance, setAnimationDistance] = useState(0);
  const [showWarningMessage, setShowWarningMessage] = useState(false);

  

  const initialMessage =
    "Dites-moi le nombre de fois que je dois sauter et la distance parcourue pour chaque saut, et je le ferai. Je vous dirai ensuite combien de mètres j'ai parcourus.";

    const handleJump = () => {
      if(numJumps*jumpDistance<=16){
      setIsJumping(true);
      setShowMessage(true);
      setShowInitialMessage(false);
  
      // Reset animation distance
      setAnimationDistance(0);
  
      // Jump multiple times based on numJumps
      for (let i = 0; i < numJumps; i++) {
        setTimeout(() => {
          play();
          setPosition((prevPosition) => prevPosition + jumpDistance);
  
          // Update animation distance
          setAnimationDistance((prevDistance) => prevDistance + 1);
        }, i * 1000 ); // Adjust the delay based on your needs
      }}else{
        setTimeout(()=>{
          setShowWarningMessage(false);
          reset();
        },3000)
        setShowWarningMessage(true);
        
      }
  
      // Set a timeout to clear isJumping after the entire animation is complete
      
    };

  const reset = () => {
    setPosition(0);
    setIsJumping(false);
    setNumJumps('');
    setJumpDistance('');
    setShowMessage(false);
    setShowInitialMessage(true);
    setAnimationDistance(0);
    setShowWarningMessage(false);
  };

  const handleNumJumpsChange = (event) => {
    if(parseInt(event.target.value)<0){
      setNumJumps(0);
    } else {
      setNumJumps(parseInt(event.target.value))
    }
  };
  const handleJumpDistanceChange = (event) => {
    if(parseInt(event.target.value)<0){
      setJumpDistance(0);
    } else{
      setJumpDistance(parseInt(event.target.value))
    }
  };

  const message = `J'ai sauté ${numJumps} fois, et dans chaque saut, j'ai parcouru ${jumpDistance} mètres. Donc, la distance totale parcourue est ${numJumps} multiplié par ${jumpDistance} métres  ce qui donne   ${position} mètres.`;
  

  return (
    <Card style={{ minHeight: '400px' }}>
      <CardContent>
        {showInitialMessage && !showWarningMessage && (
          <Card style={{ 
            backgroundColor: '#1877f2', 
            borderRadius: '25px', 
            padding: '0px',
            width: '80%', // Ajustez comme vous le souhaitez
          }}>
            <CardContent>
              <div style={{ color: '#ffffff' }}>{initialMessage}</div>
            </CardContent>
          </Card>
        )}
{!showInitialMessage && (
          <Card style={{ 
            backgroundColor: 'white', 
            borderRadius: '25px', 
            padding: '0px',
            width: '80%', // Ajustez comme vous le souhaitez
          }}>
            <CardContent>
              <div style={{ color: 'black' }}>{message}</div>
            </CardContent>
          </Card>
        )}
        {showWarningMessage && (
          <Card style={{ 
            backgroundColor: 'white', 
            borderRadius: '25px', 
            padding: '0px',
            width: '80%', // Ajustez comme vous le souhaitez
          }}>
            <CardContent>
              <div style={{ color: 'red' }}> {numJumps}x{jumpDistance} ={numJumps*jumpDistance} metres, Le distance total doit etre inferieur a 16 metres</div>
            </CardContent>
          </Card>
        )}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box my={2}>
              <Kangaroo
                position={position}
                numJumps={numJumps}
                jumpDistance={jumpDistance}
                showMessage={showMessage}
                initialMessage={initialMessage}
              />
              <div style={{
                marginTop: '10px',
                height: '20px',
                backgroundColor: '#4CAF50',
                width: `${animationDistance * (5)*jumpDistance}vw`, // Adjust width based on your needs
                transition: 'width 0.5s',
              }}/>
              <BandeBox1>
          {[...Array(17)].map((_, index) => (
            <FractionBande1>
              
                <div class="frac">
                  <span>{`${index}`}</span>
                  <span class="symbol">/</span>
                  <span class="bottom"></span>
                </div>
              
            </FractionBande1>
            
          ))}
        </BandeBox1>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Nombre de sauts"
              type="number"
              value={numJumps}
              onChange={handleNumJumpsChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Distance de saut"
              type="number"
              value={jumpDistance}
              onChange={handleJumpDistanceChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleJump}
              disabled={isJumping}
              fullWidth
            >
              Sauter
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={reset}
              
              fullWidth
            >
              <ReplyIcon/>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default C6A1;

