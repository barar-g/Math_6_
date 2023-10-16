import React, { useState } from "react";
import {
  Box, Button, Typography, Table, TableBody, TableCell,
  TableContainer, TableRow, TextField, LinearProgress, Grid
} from "@mui/material";
import _ from "lodash";
import styled from "styled-components";

const Fraction = styled.div`
    box-sizing: border-box;
    width: 100%; 
    margin: 20px auto;
    padding: 20px;
    background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};
    border: ${(props) => (props.isActive ? '3px dashed #FF5722' : '3px dashed #B3E5FC')};
    transition: background-color 0.4s, transform 0.3s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 0.8em;
    }
`;

const StyledTextField = styled(TextField)`
    width: 60px;

    @media (max-width: 768px) {
        width: 45px;
    }
`;

const ranges = [999, 99999, 9999999, 999999999, 99999999999];

const C1A3 = () => {
  const [progress, setProgress] = useState(0);
  const [randomNumber, setRandomNumber] = useState(_.random(0, ranges[progress]));
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);
  const [numbers, setNumbers] = useState({
    milliards: { C: "", D: "", U: "" },
    millions: { C: "", D: "", U: "" },
    mille: { C: "", D: "", U: "" },
    unités: { C: "", D: "", U: "" },
  });

  const handleChange = (event, type, col) => {
    setNumbers({ ...numbers, [type]: { ...numbers[type], [col]: event.target.value } });
  };

  const handleValidate = () => {
    const total =
      parseInt(numbers.milliards.C || 0) * 100000000000 +
      parseInt(numbers.milliards.D || 0) * 10000000000 +
      parseInt(numbers.milliards.U || 0) * 1000000000 +
      parseInt(numbers.millions.C || 0) * 100000000 +
      parseInt(numbers.millions.D || 0) * 10000000 +
      parseInt(numbers.millions.U || 0) * 1000000 +
      parseInt(numbers.mille.C || 0) * 100000 +
      parseInt(numbers.mille.D || 0) * 10000 +
      parseInt(numbers.mille.U || 0) * 1000 +
      parseInt(numbers.unités.C || 0) * 100 +
      parseInt(numbers.unités.D || 0) * 10 +
      parseInt(numbers.unités.U || 0);
    if (total === randomNumber) {
      setScore(score + 4);
      if (progress < 4) {
        setProgress(progress + 1);
        setRandomNumber(_.random(0, ranges[progress + 1]));
      } else {
        setOpen(true);
      }
      setNumbers({ 
        milliards: { C: "", D: "", U: "" },
        millions: { C: "", D: "", U: "" },
        mille: { C: "", D: "", U: "" },
        unités: { C: "", D: "", U: "" },
      });
    } else {
      alert("Faux!");
    }
  };

  const handleReset = () => {
    setProgress(0);
    setRandomNumber(_.random(0, ranges[0]));
    setScore(0);
    setOpen(false);
    setNumbers({
      milliards: { C: "", D: "", U: "" },
      millions: { C: "", D: "", U: "" },
      mille: { C: "", D: "", U: "" },
      unités: { C: "", D: "", U: "" },
    });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
       
        
          <Typography variant="h5">Remplir la table par : {randomNumber}</Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  {["", "C", "D", "U"].map((value, i) => (
                    <TableCell key={i} align="center">
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
                {["milliards", "millions", "mille", "unités"].map((type) => (
                  <TableRow key={type}>
                    <TableCell>{type}</TableCell>
                    {["C", "D", "U"].map((col) => (
                      <TableCell key={col}>
                        <StyledTextField
                          variant="outlined"
                          value={numbers[type][col]}
                          onChange={(event) => handleChange(event, type, col)}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button variant="contained" color="primary" onClick={handleValidate}>
              Valider
            </Button>
            
            <Button variant="contained" color="primary"  style={{ marginLeft: '20px' }} onClick={handleReset}>
              Réinitialiser
            </Button>
          </Box>
       
      </Grid>
    </Grid>
  );
};

export default C1A3;