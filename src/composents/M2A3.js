import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, TextField, Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import styled1 from 'styled-components';

const StyledText = styled1.div`
box-sizing: border-box;
width: 100%; 
height: 80%; 
background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};

transition: background-color 0.4s, transform 0.3s;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.3em;
font-family: 'Comic Sans MS', sans-serif;
&:hover {
    transform: scale(1.05);
}
`;

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



const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',
  backgroundColor: '#f2f2f2',
  color: '#333',
});

const M2A3 = () => {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("kilograms");
  const [convertedValue, setConvertedValue] = useState({});

  const conversions = {
    grams: 1,
    decagrams: 10,
    hectograms: 100,
    kilograms: 1000,
    dekagrams: 0.1,
    centigrams: 0.01,
  };

  const convertValue = (value, newUnit) => {
    const conversionFactor = conversions[newUnit];
    setConvertedValue({
      grams: value * conversionFactor,
      decagrams: value * conversionFactor / conversions['decagrams'],
      hectograms: value * conversionFactor / conversions['hectograms'],
      kilograms: value * conversionFactor / conversions['kilograms'],
      dekagrams: value * conversionFactor / conversions['dekagrams'],
      centigrams: value * conversionFactor / conversions['centigrams'],
    });
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
    convertValue(event.target.value, unit);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
    convertValue(value, event.target.value);
  };

  return (
   
      <Card style={{marginTop: '-100px'}}>
        <CardContent>
          <StyledText variant="h5" align="center">Convertiseur de masse</StyledText>
          <Box my={2}>
            <TextField
              type="number"
              value={value}
              onChange={handleValueChange}
              label="Valeur"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box my={2}>
            <Select
              value={unit}
              onChange={handleUnitChange}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="grams">Grammes</MenuItem>
              <MenuItem value="decagrams">Décagrammes</MenuItem>
              <MenuItem value="hectograms">Hectogrammes</MenuItem>
              <MenuItem value="kilograms">Kilogrammes</MenuItem>
              <MenuItem value="dekagrams">Dékagrammes</MenuItem>
              <MenuItem value="centigrams">Centigrammes</MenuItem>
            </Select>
          </Box>
          <StyledText>{value} {unit} équivaut à:</StyledText>
          
<StyledTableContainer>
    <StyledTable>
   
        <TableBody>
            <StyledTableRow>
                <StyledTableCell>Grammes</StyledTableCell>
                <StyledTableCell>{convertedValue.grams}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell>Décagrammes</StyledTableCell>
                <StyledTableCell>{convertedValue.decagrams}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell>Hectogrammes</StyledTableCell>
                <StyledTableCell>{convertedValue.hectograms}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell>Kilogrammes</StyledTableCell>
                <StyledTableCell>{convertedValue.kilograms}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell>Dékagrammes</StyledTableCell>
                <StyledTableCell>{convertedValue.dekagrams}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell>Centigrammes</StyledTableCell>
                <StyledTableCell>{convertedValue.centigrams}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
    </StyledTable>
</StyledTableContainer>

        </CardContent>
      </Card>
  
  );
}

export default M2A3;





