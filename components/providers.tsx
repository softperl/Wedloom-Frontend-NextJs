"use client";

import * as React from "react";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import useAuth from "@/lib/hooks/useAuth";
import useUi from "@/lib/hooks/useUi";
import useSocket from "@/lib/hooks/useSocket";
import useChats from "@/lib/hooks/useChats";
import { getUnReadConversationCount } from "@/lib/api";
import { set } from "date-fns";
import { usePathname, useRouter } from "next/navigation";

export function Providers({ children, ...props }: any) {
  const pathname = usePathname();
  const { connect, socket } = useSocket();
  const accessToken = getCookie("accessToken");
  const { setAccessToken, setIsAuthenticating, user } = useAuth();
  const {
    setUnReadConversation,
    refresh,
    setRefresh,
    updateUserConversation,
    setUpdateUserConversation,
  } = useChats();
  const audio = new Audio("/notification-sound.mp3");

  const {
    setAboutData,
    setSocialLinks,
    setMenus,
    setCities,
    setVendorCategories,
    setContactInfo,
    setMap,
  } = useUi();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    } else {
      setIsAuthenticating(false);
    }
  }, [accessToken]);

  useEffect(() => {
    setAboutData(props.siteData?.about);
    setSocialLinks(props.siteData?.socialLink);
    setMenus(props.siteData?.menus);
    setCities(props.siteData?.cities);
    setVendorCategories(props.siteData?.vendorCategories);
    setContactInfo(props.siteData?.contactInfo);
    setMap(props.siteData?.map);
  }, []);

  const getUnReadConversationFn = async () => {
    try {
      const { data } = await getUnReadConversationCount();
      setUnReadConversation(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUnReadConversationFn();
  }, [refresh]);

  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on(`new-message-${user?.id}`, (data: any) => {
        data?.message?.sender !== user?.id && audio.play();
        setUpdateUserConversation(!updateUserConversation);
      });
    }
    return () => {
      if (socket) {
        socket.off(`new-message-${user?.id}`);
      }
    };
  }, [socket]);

  return (
    <>
      <Toaster position="bottom-right" />
      {children}
    </>
  );
}
