import { createContext, useContext, useState, useMemo } from 'react';

// Create a context
const CityContext = createContext();

// Create a provider component
export const CityProvider = ({ children }) => {
  const [city, setCity] = useState('Burgas');

  // Memoize the context value
  const contextValue = useMemo(() => {
    return { city, setCity };
  }, [city]); // Only recompute the memoized value when 'city' changes

  return (
    <CityContext.Provider value={contextValue}>
      {children}
    </CityContext.Provider>
  );
};

// Create a custom hook to use the context
export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
};
