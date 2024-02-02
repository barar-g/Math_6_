import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ReplyIcon from '@mui/icons-material/Reply';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
  },
  buttons: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

function C4A2() {
  const classes = useStyles();
  const [values, setValues] = useState(new Array(9).fill(""));
  const [isMagic, setIsMagic] = useState(null);

  const handleChange = (index) => (event) => {
    let newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
  }

  useEffect(() => {
    reset();
  }, []);

  const checkMagic = () => {
    // convert string values to integers
    const nums = values.map((value) => parseInt(value, 10));
    const sum = nums[0] + nums[1] + nums[2];  // sum of first row

    // check rows
    for (let i = 0; i < 9; i += 3) {
      if (nums[i] + nums[i + 1] + nums[i + 2] !== sum) {
        setIsMagic(false);
        return;
      }
    }
    
    // check columns
    for (let i = 0; i < 3; ++i) {
      if (nums[i] + nums[i + 3] + nums[i + 6] !== sum) {
        setIsMagic(false);
        return;
      }
    }

    // check diagonals
    if (nums[0] + nums[4] + nums[8] !== sum || nums[2] + nums[4] + nums[6] !== sum) {
      setIsMagic(false);
      return;
    }

    setIsMagic(true);
  }

  const reset = () => {
    let newValues = new Array(9).fill("");
    for (let i = 0; i < 4; ++i) {
      let position, number;
      do {
        position = Math.floor(Math.random() * 9);
        number = Math.floor(Math.random() * 9) + 1;
      } while (newValues[position] !== "");
      newValues[position] = number.toString();
    }
    setValues(newValues);
    setIsMagic(null);
  }

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} className={classes.container}>
      <Card>
        <CardContent>
          <Typography variant="h5">
            Un carré "magique" est un carré où les sommes des nombres en colonne, en ligne et en diagonale sont égales. 
            Complète le carré magique suivant :
          </Typography>
          <Grid container spacing={1} justifyContent="center">
            {[...Array(9)].map((_, index) => (
              <Grid item xs={4} key={index}>
                <TextField 
                  variant="outlined" 
                  type="number" 
                  value={values[index]} 
                  onChange={handleChange(index)} 
                  inputProps={{ min: "1", max: "9", step: "1" }}
                />
              </Grid>
            ))}
          </Grid>
          <div className={classes.buttons}>
            <Button variant="contained" color="primary" onClick={checkMagic} style={{borderRadius: '50%'}}>OK</Button>
            <Button variant="contained" color="primary" onClick={reset} style={{borderRadius: '50%'}}><ReplyIcon/></Button>
          </div>
          {isMagic !== null && (
            isMagic ? <Typography variant="h6" color="success">C'est un carré magique !</Typography>
                     : <Typography variant="h6" color="error">Ce n'est pas un carré magique.</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default C4A2;





