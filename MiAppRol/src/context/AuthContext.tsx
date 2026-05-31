import React, { createContext, useState, useContext, ReactNode } from 'react';

type UserRole = 'admin' | 'common' | null;

interface AuthContextType {
  role: UserRole;
  isAuthenticated: boolean;
  login: (selectedRole: 'admin' | 'common') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (selectedRole: 'admin' | 'common') => {
    setRole(selectedRole);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setRole(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ role, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};