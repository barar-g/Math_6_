import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import M2A3 from "./M2A3";
import M2A2 from "./M2A2";
import M2A1 from "./M2A1";

const M2 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
           M2 : Mesurer des masses
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
          {value === 0 && <M2A3 />}
          {value === 1 && <M2A1 />}
          {value === 2 && <M2A2 />}
        </Box>
      </Grid>
    </Grid>
  );
};

export default M2;