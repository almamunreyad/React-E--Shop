import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
  //   const [user, setUser] = useState(null);
  //   const [token, setToken] = useState(null);

  // lazy initialization for saving data on localstorage
  // User State
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Token State
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");

    return savedToken || null;
  });

  // Save User
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Save token
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // login(authData) কী করে? Response থেকে user এবং token State Update করে।
  function login(authData) {
    setUser(authData.user);
    setToken(authData.token);
  }

  function logout() {
    setUser(null);
    setToken(null);
  }

  // Share Data
  const value = {
    user,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
