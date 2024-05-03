// SearchContext.js
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  console.log(showSearchHistory);
  return (
    <SearchContext.Provider value={{ showSearchHistory, setShowSearchHistory }}>
      {children}
    </SearchContext.Provider>
  );
};
