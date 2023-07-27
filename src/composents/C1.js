import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import C1A1 from "./C1A1";
import C1A2 from "./C1A2";
import C1A3 from "./C1A3";

const C1 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
           C1 : Lire et écrire des nombres
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
        <Box mt={2}> {/* Added this Box with margin-top */}
          {value === 0 && <C1A1 />}
          {value === 1 && <C1A2 />}
          {value === 2 && <C1A3 />}
        </Box>
      </Grid>
    </Grid>
  );
};

export default C1;
