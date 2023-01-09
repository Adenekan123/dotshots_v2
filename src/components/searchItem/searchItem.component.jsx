import React, { useContext } from "react";
import { Paper, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";

import { SearchContext } from "../../contexts/search.context";

const SearchItem = ({ placeholder }) => {
  const { query, onChangeHandler } = useContext(SearchContext);
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        px: 0,
        flexBasis: "60%",
        backgroundColor: "secondary.main",
      }}>
      <IconButton type="button" arial-label="search">
        <Search />
      </IconButton>
      <InputBase
        type="search"
        placeholder={placeholder}
        inputProps={{ "aria-label": placeholder }}
        value={query}
        onChange={onChangeHandler}
        fullWidth
      />
    </Paper>
  );
};

export default SearchItem;
