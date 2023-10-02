import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import P2A3_1 from "./P2A3-1";
import P2A3_2 from "./P2A3-2";
import P2A3_3 from "./P2A3-3";

const P2A3 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          
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
          <Tab label="P2A3-1" />
          <Tab label="P2A3-2" />
          <Tab label="P2A3-3" />
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <Box mt={2}>
          {value === 0 && <P2A3_1 />}
          {value === 1 && <P2A3_2 />}
          {value === 2 && <P2A3_3 />}
        </Box>
      </Grid>
    </Grid>
  );
};

export default P2A3;