import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton
} from "@mui/material";
import { styled } from "@mui/system";
import _ from "lodash";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CloseIcon from "@mui/icons-material/Close";


const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  backgroundColor: "#f2f2f2",
  color: "#333",
});

const StyledButton = styled(Button)({
  backgroundColor: '#7ec0ee',
  color: 'white',
  '&:hover': {
    backgroundColor: '#6caedd',
  },
  margin: '10px',
  borderRadius: '15px',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#7ec0ee',
      borderRadius: '15px',
    },
    '&:hover fieldset': {
      borderColor: '#6caedd',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7ec0ee',
    },
  },
});

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
    <>
    <br></br>
  
      <LinearProgress variant="determinate" value={(progress / 4) * 100} />
      <br></br>
      <StyledBox>
      <br></br>
      <Typography variant="h5" style={{marginBottom: '20px', fontSize: '1.5rem', padding: '10px', borderRadius: '15px', backgroundColor: '#7ec0ee', color: 'white'}}>Remplir la table par  : {randomNumber}</Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                {["", "C", "D", "U"].map((value, i) => (
                  <TableCell key={i} align="center">
                    <Typography variant="h6">{value}</Typography>
                  </TableCell>
                ))}
              </TableRow>
              {["milliards", "millions", "mille", "unités"].map((type) => (
                <TableRow key={type}>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6">{type}</Typography>
                  </TableCell>
                  {["C", "D", "U"].map((col) => (
                    <TableCell key={col}>
                      <StyledTextField
                        variant="outlined"
                        value={numbers[type][col]}
                        onChange={(event) => handleChange(event, type, col)}
                        style={{ width: '60px' }}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="center" gap={2}>
          <StyledButton variant="contained" onClick={handleValidate}>
            Valider
          </StyledButton>
          <StyledButton variant="contained" color="secondary" onClick={handleReset}>
            Réinitialiser
          </StyledButton>
        </Box>
      </StyledBox>
      <Dialog open={open}>
        <DialogTitle>Félicitations!</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DialogContentText>
            Bravo, vous avez réussi toutes les questions ! Vous avez fait preuve d'un excellent niveau en écrivant les nombres.
          </DialogContentText>
          {score >= 10 && (
            <>
              <DialogContentText>Votre score est {score}, ce qui signifie que vous avez réussi ! 🎉</DialogContentText>
              <EmojiEventsIcon style={{ fontSize: 50, color: '#FFD700' }} />
            </>
          )}
          {score < 10 && (
            <DialogContentText>Votre score est {score}, ce qui signifie que vous devez encore pratiquer. Continuez à travailler !</DialogContentText>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default C1A3;
