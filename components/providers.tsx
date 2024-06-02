"use client";

import * as React from "react";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import useAuth from "@/lib/hooks/useAuth";

export function Providers({ children, ...props }: any) {
  const accessToken = getCookie("accessToken");
  const { setAccessToken, setIsAuthenticating } = useAuth();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    } else {
      setIsAuthenticating(false);
    }
  }, [accessToken]);

  return (
    <>
      <Toaster position="bottom-right" />
      {children}
    </>
  );
}
