"use client";

import { getUnReadConversationCount } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useChats from "@/lib/hooks/useChats";
import useSocket from "@/lib/hooks/useSocket";
import useUi from "@/lib/hooks/useUi";
import { getCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export function Providers({ children, ...props }: any) {
  const pathname = usePathname();
  const { connect, socket } = useSocket();
  const accessToken = getCookie("accessToken");
  const { setAccessToken, setIsAuthenticating, user } = useAuth();
  const { setUnReadConversation, refresh, setRefresh, setLastMessage } =
    useChats();
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const {
    setAboutData,
    setSocialLinks,
    setMenus,
    setFooterMenus,
    setCities,
    setVendorCategories,
    setContactInfo,
    setMap,
    setSteps,
  } = useUi();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    } else {
      setIsAuthenticating(false);
    }
  }, [accessToken]);

  useEffect(() => {
    console.log("ma", props.siteData);
    setAboutData(props.siteData?.about);
    setSocialLinks(props.siteData?.socialLink);
    setMenus(props.siteData?.menus);
    setFooterMenus(props.siteData?.footerMenu);
    setCities(props.siteData?.cities);
    setVendorCategories(props.siteData?.vendorCategories);
    setContactInfo(props.siteData?.contactInfo);
    setMap(props.siteData?.map);
    setSteps(props.siteData?.steps);
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
    const audio = audioRef.current;
    if (socket) {
      socket.on(`new-message-${user?.id}`, (data: any) => {
        if (data?.message?.sender !== user?.id) {
          if (audio) {
            audio.play().catch((error) => {
              if (error.name === "NotAllowedError") {
                toast.error(
                  "Please interact with the page to enable audio playback."
                );
              } else {
                console.error(
                  "Playback failed due to an unknown error:",
                  error
                );
              }
            });
          }
          setLastMessage(data.message);
          setRefresh(!refresh);
        }
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

      <audio
        ref={audioRef}
        src={"/notification-sound.mp3"}
        className="hidden"
      />
      {children}
    </>
  );
}
