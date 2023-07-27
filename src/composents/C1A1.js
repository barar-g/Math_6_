import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Card, CardContent, Grid, Button, Collapse, Fab } from '@mui/material';
import { styled } from '@mui/system';
import writtenNumber from 'written-number';

const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: 2,
    backgroundColor: '#f2f2f2',
    color: '#333',
});

const StyledFab = styled(Fab)(({ $isSelected }) => ({
  margin: '10px',
  backgroundColor: $isSelected ? 'blue' : '#7ec0ee',
  color: 'white',
  '&:hover, &:focus-visible': {
    backgroundColor: '#6caedd',
  },
}));

const StyledButton = styled(Button)({
  margin: '10px',
  backgroundColor: '#7ec0ee',
  color: 'white',
  '&:hover, &:focus-visible': {
    backgroundColor: '#6caedd',
  },
  borderRadius: '15px',
});

const digits = [1000000000, 1000000, 1000, 1];
const labels = ['Milliard', 'Million', 'Mille', 'Unité'];
const superScriptNumbers = {
    '1': '¹',
    '2': '²',
    '3': '³',
    '4': '⁴',
    '5': '⁵',
    '6': '⁶',
    '7': '⁷',
    '8': '⁸',
    '9': '⁹',
    '0': '⁰',
};

const C1A1 = () => {
    const [inputNumber, setInputNumber] = useState("");
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [openTable, setOpenTable] = useState(false);
    const [openExponential, setOpenExponential] = useState(false);
    const [numberInWords, setNumberInWords] = useState("");
    const [openNumberInWords, setOpenNumberInWords] = useState(false);

    const handleNumberClick = (number) => {
        setInputNumber(inputNumber + number);
        setSelectedNumber(number);
        setNumberInWords(writtenNumber(parseInt(inputNumber + number), {lang: 'fr'}));
    }

    const resetNumber = () => {
        setInputNumber("");
        setSelectedNumber(null);
        setNumberInWords("");
    }

    const decomposeNumber = () => {
        let remainder = parseInt(inputNumber);
        const parts = [];
        for (let i = 0; i < digits.length; i++) {
            const quantity = Math.floor(remainder / digits[i]);
            remainder %= digits[i];
            if (quantity > 0) {
                parts.push({label: labels[i], quantity});
            }
        }
        return parts;
    }

    const parts = decomposeNumber();

    const explainDecomposition = () => {
        return parts.map(part => ` ${part.quantity}  ${part.label}.`).join(' ');
    }

    const explainExponential = () => {
        return parts.map(part => {
            const exponent = Math.log10(digits[labels.indexOf(part.label)]);
            const superscriptExponent = exponent.toString().split('').map(char => superScriptNumbers[char]).join('');
            return exponent > 0 ? `${part.quantity} x 10${superscriptExponent}` : `${part.quantity}`;
        }).join(' + ');
    }

    const explainEachTerm = () => {
        const terms = [];
        parts.forEach(part => {
            const exponent = Math.log10(digits[labels.indexOf(part.label)]);
            const superscriptExponent = exponent.toString().split('').map(char => superScriptNumbers[char]).join('');
            if (exponent > 0) {
                const term = `${part.quantity} x 10${superscriptExponent}`;
                const result = part.quantity * digits[labels.indexOf(part.label)];
                const explanation = `10${superscriptExponent} représente ${labels[labels.indexOf(part.label)].toLowerCase()}. Donc, ${term} donne ${result.toLocaleString()}.`;
                terms.push(explanation);
            }
        });
        return terms.join('\n');
    }

    return (
        <StyledBox>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card style={{marginTop: '-100px'}}>
                        <CardContent>
                            <Box mb={1}>
                              <Typography>Ecrire un nombre  : {inputNumber}</Typography>
                            </Box>
                            <br/>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                                <StyledFab key={number} onClick={() => handleNumberClick(number)} $isSelected={selectedNumber === number}>{number}</StyledFab>
                            ))}
                            <StyledFab onClick={resetNumber}>Reset</StyledFab>
                            <br/>
                            <br/>
                            <StyledButton variant="outlined" onClick={() => setOpenNumberInWords(!openNumberInWords)}>
                                {openNumberInWords ? 'Cacher le nombre en mots' : 'Afficher le nombre en mots'}
                            </StyledButton>
                            <Collapse in={openNumberInWords}>
                                {inputNumber && (
                                    <Typography>{numberInWords}</Typography>
                                )}
                            </Collapse>
                            <br/>
                            <StyledButton variant="outlined" onClick={() => setOpenTable(!openTable)}>
                                {openTable ? 'Cacher le tableau' : 'Afficher le tableau de numération.'}
                            </StyledButton>
                            <Collapse in={openTable}>
                                {inputNumber && (
                                    <Typography>{explainDecomposition()}</Typography>
                                )}
                                <TableContainer>
                                    <Table>
                                        <TableBody>
                                            {parts.map((part, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{part.quantity}</TableCell>
                                                    <TableCell>{part.label}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Collapse>
                            <br/>
                            <StyledButton variant="outlined" onClick={() => setOpenExponential(!openExponential)}>
                                {openExponential ? 'Cacher la  décompositions ' : 'Afficher la  décompositions '}
                            </StyledButton>
                            <Collapse in={openExponential}>
                                {inputNumber && <Typography>{explainExponential()}</Typography>}
                                {inputNumber && (
                                    <div>
                                        <Typography>Dans cette expression :</Typography>
                                        <Typography component="pre">{explainEachTerm()}</Typography>
                                        <Typography>En ajoutant tous ces termes, on obtient le nombre original.</Typography>
                                    </div>
                                )}
                            </Collapse>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </StyledBox>
    );
};

export default C1A1;



