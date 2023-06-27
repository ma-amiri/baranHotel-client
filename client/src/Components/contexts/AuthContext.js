import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = async () => {
    setLoading(true);
    setError(null);

    try {
      // Perform login logic

      const loggedInUser = { id: 1, username: "exampleUser" };
      setUser(loggedInUser);
    } catch (error) {
      setError("Login failed. Please try again.");
    }

    setLoading(false);
  };

  const logout = () => {
    setUser(null);

    // Perform logout logic
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
