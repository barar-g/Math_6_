import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Fab, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { styled } from '@mui/system';
import ReplayIcon from '@mui/icons-material/Replay';
import writtenNumber from 'written-number';

const gridItemStyle = {
    paddingLeft: '4px',  // Réduisez la marge selon vos besoins
    paddingRight: '4px'
};


const StyledBox = styled(Box)({
 
});

const NumberDisplay = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    margin: '20px auto',
    padding: '20px',
    backgroundColor:  '#E1F5FE',
    border:  '3px dashed #B3E5FC',
    transition: 'background-color 0.4s, transform 0.3s',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1em',
    fontFamily: "'Comic Sans MS', sans-serif",
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const StyledTableContainer = styled(TableContainer)({
    marginTop: '20px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
});

const StyledTable = styled(Table)({
    '& th, & td': {
        border: '1px solid #B3E5FC',
        padding: '10px 15px',
    },
});

const StyledTableRow = styled(TableRow)({
    '&:nth-of-type(odd)': {
        backgroundColor: '#E1F5FE',
    },
    '&:hover': {
        backgroundColor: '#B3E5FC',
    },
});

const StyledTableCell = styled(TableCell)({
    fontSize: '1.1em',
    fontFamily: "'Comic Sans MS', sans-serif",
});



const VibrantFab = styled(Fab)({
    margin: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    '&:hover, &:focus-visible': {
        backgroundColor: '#0056b3',
    },
});

const C1A1 = () => {
    const [inputNumber, setInputNumber] = useState("");
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [numberInWords, setNumberInWords] = useState("");

    const handleNumberClick = (number) => {
        setInputNumber(inputNumber + number.toString());
        setSelectedNumber(number);
        setNumberInWords(writtenNumber(parseInt(inputNumber + number.toString()), { lang: 'fr' }));
    }

    const resetNumber = () => {
        setInputNumber("");
        setSelectedNumber(null);
        setNumberInWords("");
    }
    const digits = [1000000000, 1000000, 1000, 100,1];
const labels = ['Milliard', 'Million', 'Mille','Cent', 'Unité'];


    const decomposeNumber = () => {
        let remainder = parseInt(inputNumber);
        const parts = [];
        for (let i = 0; i < digits.length; i++) {
            const quantity = Math.floor(remainder / digits[i]);
            remainder %= digits[i];
            if (quantity > 0) {
                parts.push({ label: labels[i], quantity });
            }
        }
        return parts;
    }

    const parts = decomposeNumber();

    return (
        <StyledBox>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card style={{ marginTop: '-100px' }}>
                        <CardContent>
                            <Box mb={1}>
                            <NumberDisplay isActive={!!inputNumber}>
                              {inputNumber} 
                            </NumberDisplay>
                            <NumberDisplay isActive={!!inputNumber}>
                            <Typography>{numberInWords}</Typography> 
                            </NumberDisplay>

                            </Box>
                            <Box display="flex" justifyContent="center" alignItems="center">
    <Grid container spacing={-8}> 
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
            <Grid item xs={4} key={number}>
                <VibrantFab onClick={() => handleNumberClick(number)}>{number}</VibrantFab>
            </Grid>
        ))}
        <Grid item xs={4}>
            <VibrantFab onClick={() => handleNumberClick(9)}>9</VibrantFab>
        </Grid>
        <Grid item xs={4}>
            <VibrantFab onClick={resetNumber}><ReplayIcon /></VibrantFab>
        </Grid>
    </Grid>
</Box>

                            
                           
                            {inputNumber && (
    <StyledTableContainer>
        <StyledTable>
            <TableBody>
                {parts.map((part, index) => (
                    <StyledTableRow key={index}>
                        <StyledTableCell>{part.quantity}</StyledTableCell>
                        <StyledTableCell>{part.label}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </StyledTable>
    </StyledTableContainer>
)}

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </StyledBox>
    );
};

export default C1A1;
