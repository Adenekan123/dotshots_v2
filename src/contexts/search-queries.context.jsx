import React, { createContext, useState } from "react";

export const defaultQueries = [
  "wallpaper",
  "nature",
  "technology",
  "fashion",
  "travel",
  "galaxy",
  "animals",
  "people",
];

export const SearchQueriesContext = createContext({
  queries: [],
  addQuery: () => null,
  removeQuery: () => null,
});

export const SearchQueriesProvider = ({ children }) => {
  const [queries, setQueries] = useState([]);

  const addQuery = (query) => {
    const qs = [...queries];
    if (
      !query ||
      query.length < 3 ||
      qs.includes(query) ||
      defaultQueries.includes(query)
    )
      return false;
    if (qs.length === 5) {
      qs.pop();
      setQueries([query, ...qs]);
    } else setQueries([query, ...qs]);
  };
  const removeQuery = (query) => {
    const qs = queries.filter((q) => q !== query);
    setQueries(qs);
  };

  const value = { queries, addQuery, removeQuery };

  return (
    <SearchQueriesContext.Provider value={value}>
      {children}
    </SearchQueriesContext.Provider>
  );
};
