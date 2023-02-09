import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import * as authApi from "../api/auth-api";
import * as userApi from "../api/user-api";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] =
    useState(getAccessToken() ? true : null);

  //?
  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe();
        setAuthenticatedUser(res.data.user);
        // console.log(res.data.user);
      } catch (err) {
        removeAccessToken();
      }
    };
    if (getAccessToken()) {
      fetchAuthUser();
    }
  }, []);

  const login = async (email, password) => {
    const res = await authApi.login({
      email,
      password
    });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(jwtDecode(res.data.accessToken));
    // ได้มาเป็น payload
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  const updateProfile = async data => {
    const res = await userApi.updateProfileImage(data);
    // res.data =  {"profileImage": "https://res.cloudinary.com/dhgny94kc/image/upload/v1675919318/1675915242378428504823.jpg"}
    setAuthenticatedUser({
      ...authenticatedUser,
      ...res.data
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authenticatedUser,
        login,
        logout,
        updateProfile
      }}>
      {children}
    </AuthContext.Provider>
  );
}
