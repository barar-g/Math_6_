import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import C3A1 from "./C3A1";
import C3A2 from "./C3A2";
import C3A3 from "./C3A3";

const C3 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
           C3 : Titre de votre chapitre
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
          {value === 0 && <C3A1 />}
          {value === 1 && <C3A2 />}
          {value === 2 && <C3A3 />}
        </Box>
      </Grid>
    </Grid>
  );
};

export default C3;
