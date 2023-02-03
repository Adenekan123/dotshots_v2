import { createContext, useState } from "react";
const initialFilterState = {
  size: "",
  orientation: "",
  per_page: "",
  color: "",
};
export const FilterContext = createContext({
  filter: {},
  resetFilter: () => null,
  onFilterChange: () => null,
  mobileFilter: false,
  toggleMobileFilter: () => null,
});

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState(initialFilterState);
  const [mobileFilter, setMobileFilter] = useState(false);

  const onFilterChange = (e) => {
    const { target, hex } = e;
    if (target) {
      setFilter({ ...filter, [target.name]: target.value });
    }

    if (hex) {
      setFilter({ ...filter, color: hex });
    }
  };

  const resetFilter = () => setFilter(initialFilterState);

  const toggleMobileFilter = () => setMobileFilter(!mobileFilter);

  const value = {
    filter,
    onFilterChange,
    resetFilter,
    mobileFilter,
    toggleMobileFilter,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
