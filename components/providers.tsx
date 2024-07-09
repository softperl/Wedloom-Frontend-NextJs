"use client";

import * as React from "react";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import useAuth from "@/lib/hooks/useAuth";
import useUi from "@/lib/hooks/useUi";

export function Providers({ children, ...props }: any) {
  const accessToken = getCookie("accessToken");
  const { setAccessToken, setIsAuthenticating } = useAuth();
  const { setAboutData, setSocialLinks, setMenus } = useUi();
  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    } else {
      setIsAuthenticating(false);
    }
  }, [accessToken]);

  useEffect(() => {
    setAboutData(props.siteData?.about);
    setSocialLinks(props.siteData?.socialLinks);
    setMenus(props.siteData?.menus);
  }, []);

  return (
    <>
      <Toaster position="bottom-right" />
      {children}
    </>
  );
}
