"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import jwtDecode from "jwt-decode";

const AuthContext = createContext<any>(undefined);

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [authenticating, setAuthenticating] = useState(true);

  const value = {
    authenticating,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
