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

const Converter = () => {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("squareMeters");
  const [convertedValue, setConvertedValue] = useState({});

  const conversions = {
    squareMillimeters: 1,
    squareCentimeters: 100,
    squareMeters: 1000000,
    squareKilometers: 1000000000000,
  };

  const convertValue = (value, newUnit) => {
    const conversionFactor = conversions[newUnit];
    setConvertedValue({
      squareMillimeters: value * conversionFactor / conversions['squareMillimeters'],
      squareCentimeters: value * conversionFactor / conversions['squareCentimeters'],
      squareMeters: value * conversionFactor / conversions['squareMeters'],
      squareKilometers: value * conversionFactor / conversions['squareKilometers'],
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
          <Typography variant="h5" align="center">Convertiseur d'unités d'aire</Typography>
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
              <MenuItem value="squareMillimeters">Millimètres carrés</MenuItem>
              <MenuItem value="squareCentimeters">Centimètres carrés</MenuItem>
              <MenuItem value="squareMeters">Mètres carrés</MenuItem>
              <MenuItem value="squareKilometers">Kilomètres carrés</MenuItem>
            </Select>
          </Box>
          <Typography align="center">{value} {unit.replace("square", "").replace(/([A-Z])/g, ' $1').toLowerCase()} carrés équivaut à:</Typography>
          <Typography>{convertedValue.squareMillimeters} millimètres carrés</Typography>
          <Typography>{convertedValue.squareCentimeters} centimètres carrés</Typography>
          <Typography>{convertedValue.squareMeters} mètres carrés</Typography>
          <Typography>{convertedValue.squareKilometers} kilomètres carrés</Typography>
        </CardContent>
      </Card>
    </StyledBox>
  );
}

export default Converter;





















