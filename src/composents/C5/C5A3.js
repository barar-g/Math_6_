import React, { useState } from 'react';
import { Button, Card, CardContent, Box, TextField, Grid } from '@mui/material';
import useSound from "use-sound";
import jumpSound from '../sounds/jump.mp3';
import Kangaroo from '../Kangaroo';

function C6A1() {
  const [position, setPosition] = useState(0);
  const [play] = useSound(jumpSound);
  const [isJumping, setIsJumping] = useState(false);
  const [numJumps, setNumJumps] = useState('');
  const [jumpDistance, setJumpDistance] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  const initialMessage =
    "Dites-moi le nombre de fois que je dois sauter et la distance parcourue pour chaque saut, et je le ferai. Je vous dirai ensuite combien de mètres j'ai parcourus.";

  const handleJump = () => {
    setIsJumping(true);
    play();
    setPosition(numJumps * jumpDistance);
    setShowMessage(true);
    setShowInitialMessage(false);
  };

  const reset = () => {
    setPosition(0);
    setIsJumping(false);
    setNumJumps('');
    setJumpDistance('');
    setShowMessage(false);
    setShowInitialMessage(true);
  };

  const handleNumJumpsChange = (event) => {
    setNumJumps(parseInt(event.target.value));
  };

  const handleJumpDistanceChange = (event) => {
    setJumpDistance(parseInt(event.target.value));
  };

  return (
    <Card style={{ minHeight: '400px' }}>
      <CardContent>
        {showInitialMessage && (
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
              label="Distance de chaque saut"
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
              disabled={!isJumping}
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

