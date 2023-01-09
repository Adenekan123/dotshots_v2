import React from "react";
import { Box, Paper } from "@mui/material";

const Template = ({ children }) => {
  return (
    <Paper square>
      <Box sx={{ height: "100vh", display: "flex" }}>{children}</Box>
    </Paper>
  );
};

export default Template;
