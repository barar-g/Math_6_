import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import C4A1 from "./C4A1";
import C4A2 from "./C4A2";
import C4A3 from "./C4A3";

const C4 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
           C4 : Résolvez les problèmes suivants
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
          {value === 0 && <C4A1 />}
          {value === 1 && <C4A2 />}
          {value === 2 && <C4A3 />}
        </Box>
      </Grid>
    </Grid>
  );
};

export default C4;
