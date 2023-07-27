import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import C2A1 from "./C2A1";
import C2E1 from "./C2E1";
import C2E2 from "./C2E2";

const C2 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
           C2 : Comparer et ordonner des nombers
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
          <Tab label="Activité éducative" />
          <Tab label="Exercice 1" />
          <Tab label="Exercice 2" />
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <Box mt={2}>
          {value === 0 && <C2A1 />}
          {value === 1 && <C2E1 />}
          {value === 2 && <C2E2 />}
        </Box>
      </Grid>
    </Grid>
  );
};

export default C2;
