import React, { createContext, useContext } from 'react';
import useProvideRouting from './useProvideRouting';

// Creating a named context
const RoutingContext = createContext();

// Creat a hook for consuming context
export const useRoutingContext = () =>{
  return useContext(RoutingContext);
}

// Create a special Provider component
const RoutingProvider = ({ children }) => {
  const routing = useProvideRouting();
  return <RoutingContext.Provider value={routing}>{children}</RoutingContext.Provider>
}

export default RoutingProvider;