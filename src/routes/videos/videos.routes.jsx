import React from "react";
import { Box } from "@mui/material";
import comingSoon from "../../assets/comingSoon.jpg";

import { Grid } from "@mui/material";

const Videos = () => {
  return (
    <Box
      sx={{
        flex: "1",

        p: 3,
        height: "100%",
      }}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={6}>
          <img src={comingSoon} width="100%" alt="coming soon" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Videos;
