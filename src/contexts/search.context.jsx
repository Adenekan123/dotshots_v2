import { createContext, useState } from "react";

export const SearchContext = createContext({
  query: "",
  onChangeHandler: () => null,
  clearQuery: () => null,
  putQuery: () => null,
});

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const onChangeHandler = ({ target: { value } }) => setQuery(value);
  const clearQuery = () => setQuery("");
  const putQuery = (query) => setQuery(query);
  const value = { query, onChangeHandler, clearQuery, putQuery };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
