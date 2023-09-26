import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, TextField, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

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
    <StyledBox>
      <Card style={{marginTop: '-100px'}}>
        <CardContent>
          <Typography variant="h5" align="center">Convertiseur d'unités de masse</Typography>
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
          <Typography align="center">{value} {unit} équivaut à:</Typography>
          <Typography>{convertedValue.grams} grammes</Typography>
          <Typography>{convertedValue.decagrams} décagrammes</Typography>
          <Typography>{convertedValue.hectograms} hectogrammes</Typography>
          <Typography>{convertedValue.kilograms} kilogrammes</Typography>
          <Typography>{convertedValue.dekagrams} dékagrammes</Typography>
          <Typography>{convertedValue.centigrams} centigrammes</Typography>
        </CardContent>
      </Card>
    </StyledBox>
  );
}

export default M2A3;





