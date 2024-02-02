import React, { useState, useEffect } from 'react';
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

  const [Ruler, setRuler] = useState(0);
  const [showKangaroo, setShowKangaroo] = useState(true);
  const[index, setIndex]=useState(true);



  

  const initialMessage =
    "Dites-moi le nombre de fois que je dois sauter et la distance  pour chaque saut.";

    const handleJump = () => {

      if (numJumps === '' || jumpDistance === '') {
        // Handle invalid input here
        return;
      }
    
      if (numJumps * jumpDistance <= 60 && numJumps * jumpDistance !== 0) {

        setIsJumping(true);
        setShowMessage(true);
        setShowInitialMessage(false);
    

        setAnimationDistance(0);
    

        for (let i = 0; i < numJumps; i++) {
          setTimeout(() => {
            play();
            setPosition((prevPosition) => prevPosition + jumpDistance);

            setAnimationDistance((prevDistance) => prevDistance + 1);
    
            if (i === numJumps - 1) {
              // This is the last iteration of the loop
              setIsJumping(false); // Set isJumping to false after the loop is complete
            }
          }, i * 1000);

        }
      } else {
        setTimeout(() => {
          setShowWarningMessage(false);
          reset();
        }, 3000);
        setShowWarningMessage(true);
      }

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

    setRuler(0);
    setIndex(0);
  


  };
  useEffect(() => {
    reset();
  }, []);

  
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


  
  const message = `Nombre des sautes = ${numJumps} mètres, Distance de chaque  saut = ${jumpDistance} mètres, la distance totale = ${numJumps}×${jumpDistance}= ${numJumps*jumpDistance} mètres.`;

  
const updatePosition = () => {
    setPosition((position-10));
    setRuler(position);
    setAnimationDistance((position-10)/jumpDistance);
    setIndex((prevIndex) => prevIndex + 1);
};

useEffect(() => {
  if (
    (position > 10)||(position > 20)||(position > 30)||(position > 40 )||
    (position > 50)
    ){
    updatePosition();
  }
}, [position]);
  
  
  
  

  

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
{!showInitialMessage &&(
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
        {showWarningMessage &&  (
          <Card style={{ 
            backgroundColor: 'white', 
            borderRadius: '25px', 
            padding: '0px',
            width: '80%', // Ajustez comme vous le souhaitez
          }}>
            <CardContent>

              <div style={{ color: 'red' }}> {numJumps}x{jumpDistance} ={numJumps*jumpDistance} metres, Le distance total doit etre inferieur a 60 metres</div>

            </CardContent>
          </Card>
        )}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box my={2}>
            {showKangaroo && (
              <Kangaroo
                position={position}
                numJumps={numJumps}
                jumpDistance={jumpDistance}
                showMessage={showMessage}
                initialMessage={initialMessage}
              />

            )}

              <div style={{
                marginTop: '10px',
                height: '20px',
                backgroundColor: '#4CAF50',

                width: `${animationDistance * (7.5)*jumpDistance}vw`, // Adjust width based on your needs
                transition: 'width 0.5s',
              }}/>
             <BandeBox1>
    {[...Array(11)].map((_, i) => (
      <FractionBande1 key={i}>
        <div className="frac">
        
        <span>{i + ((index)*10)}</span>
        
       
          <span className="symbol">/</span>
          <span className="bottom"></span>
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
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Distance de saut"
              type="number"
              value={jumpDistance}
              onChange={handleJumpDistanceChange}
              required
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

              disabled={isJumping}
              

              
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

