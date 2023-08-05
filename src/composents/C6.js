import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import C5A3 from "./C5A3";
import C5A4 from "./C5A4";
import C5A5 from "./C5A5";

const C6 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
           C6 : Multiplicatier des nombers entiers
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          centered
        >
          <Tab label="Activité 1" />
          <Tab label="Activité 2" />
          <Tab label="Activité 3" />
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <Box mt={2}>
          {value === 0 && <C5A3 />}
          {value === 1 && <C5A4 />}
          {value === 2 && <C5A5 />}
        </Box>
      </Grid>
    </Grid>
  );
};

export default C6;
