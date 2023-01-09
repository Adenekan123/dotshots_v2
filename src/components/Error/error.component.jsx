import React from "react";
import { Stack, Typography } from "@mui/material";
import { Warning } from "@mui/icons-material";

const Error = ({ message }) => {
  return (
    <Stack direction="row" justifyContent={"center"}>
      <Warning />
      <Typography color="error">{message}</Typography>
    </Stack>
  );
};

export default Error;
