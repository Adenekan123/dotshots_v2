import { Chip } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";

import { SearchQueriesContext } from "../../contexts/search-queries.context";
import { defaultQueries } from "../../contexts/search-queries.context";
import { SearchContext } from "../../contexts/search.context";

const SearchHistory = () => {
  const { queries, removeQuery } = useContext(SearchQueriesContext);
  const { putQuery } = useContext(SearchContext);

  const search = (query) => {
    putQuery(query);
  };

  return (
    <Stack
      direction={"row"}
      sx={{ mb: 2, justifyContent: "center", flexWrap: "wrap", gap: "8px" }}>
      {queries.map((query) => {
        return (
          <Chip
            onDelete={() => removeQuery(query)}
            onClick={() => search(query)}
            size={"small"}
            color="info"
            key={query}
            label={query}
          />
        );
      })}

      {defaultQueries.map((query) => {
        return (
          <Chip
            onClick={() => search(query)}
            size={"small"}
            key={query}
            label={query}
          />
        );
      })}
    </Stack>
  );
};

export default SearchHistory;
