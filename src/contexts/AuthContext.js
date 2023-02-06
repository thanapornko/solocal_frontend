import { createContext, useState } from "react";
import * as authApi from "../api/auth-api";
import { setAccessToken } from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] =
    useState(null);

  const login = async (email, password) => {
    const res = await authApi.login({
      email,
      password
    });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(true);
  };
  return (
    <AuthContext.Provider value={{ login }}>
      {children}
    </AuthContext.Provider>
  );
}
