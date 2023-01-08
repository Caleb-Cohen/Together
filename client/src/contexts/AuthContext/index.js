import React, { createContext, useContext } from 'react';
import useProvideAuth from './useProvideAuth';

// Creating a named context
const AuthContext = createContext();

// Hook for consuming Authentication or User related data (For components to use the context)
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// Creating a provider to wrap components that needs to access Auth/User's data
// Note: A provider is a special component that pass the context to its children to access the context's value
const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider;