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
  const [unit, setUnit] = useState("meters");
  const [convertedValue, setConvertedValue] = useState({});

  const conversions = {
    millimeters: 1,
    centimeters: 10,
    meters: 1000,
    kilometers: 1000000,
  };

  const convertValue = (value, newUnit) => {
    const conversionFactor = conversions[newUnit];
    setConvertedValue({
      millimeters: value * conversionFactor / conversions['millimeters'],
      centimeters: value * conversionFactor / conversions['centimeters'],
      meters: value * conversionFactor / conversions['meters'],
      kilometers: value * conversionFactor / conversions['kilometers'],
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
          <Typography variant="h5" align="center">Convertiseur d'unités de longueur</Typography>
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
              <MenuItem value="millimeters">Millimètres</MenuItem>
              <MenuItem value="centimeters">Centimètres</MenuItem>
              <MenuItem value="meters">Mètres</MenuItem>
              <MenuItem value="kilometers">Kilomètres</MenuItem>
            </Select>
          </Box>
          <Typography align="center">{value} {unit} équivaut à:</Typography>
          <Typography>{convertedValue.millimeters} millimètres</Typography>
          <Typography>{convertedValue.centimeters} centimètres</Typography>
          <Typography>{convertedValue.meters} mètres</Typography>
          <Typography>{convertedValue.kilometers} kilomètres</Typography>
        </CardContent>
      </Card>
    </StyledBox>
  );
}

export default Converter;
