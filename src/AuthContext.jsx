import { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Rehidratar sesión desde localStorage al iniciar
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('sessionUser'));
    if (savedUser) setUser(savedUser);
    setLoading(false);
  }, []);

  const login = (userData) => {
    localStorage.setItem('sessionUser', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('sessionUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
