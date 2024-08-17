"use client";
import {
  addToFav,
  createMessage,
  deleteConversation,
  getChatUsersByConversationId,
  getMessage,
  isFavoriteConversation,
  markAsUnread,
  removeFromFav,
} from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useChats from "@/lib/hooks/useChats";
import useSocket from "@/lib/hooks/useSocket";
import { handelError } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { IoMdTrash } from "react-icons/io";
import { LuMailOpen } from "react-icons/lu";
import { MdLocationOn, MdStar, MdStarOutline } from "react-icons/md";

export const MessagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const params: any = useParams();
  const { user } = useAuth();
  const { socket } = useSocket();
  const [messageInput, setMessageInput] = useState<string>("");
  const {
    setMessages,
    chatUser,
    setChatUser,
    refresh,
    setRefresh,
    isFavConversation,
    setIsFavConversation,
    removeFevCon,
    setRemoveFevCon,
  } = useChats();
  const router = useRouter();
  const [lastMessage, setLastMessage] = useState<any>();
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [params]);

  const addToFavFn = async () => {
    try {
      await addToFav(params?.username);
      setRefresh(!refresh);
    } catch (error) {
      handelError(error);
    }
  };
  const removeFavFn = async () => {
    try {
      await removeFromFav(params?.username);
      setRefresh(!refresh);
    } catch (error) {
      handelError(error);
    }
  };

  useEffect(() => {
    removeFavFn();
  }, [removeFevCon]);

  const getChatUsersByConversationIdFn = async () => {
    try {
      const { data } = await getChatUsersByConversationId(params?.username);
      setChatUser(data);
      setRefresh(!refresh);
    } catch (error) {
      handelError(error);
    }
  };

  useEffect(() => {
    getChatUsersByConversationIdFn();
  }, []);

  const isFavoriteConversationFn = async () => {
    try {
      const { data } = await isFavoriteConversation(params?.username);
      setIsFavConversation(data);
    } catch (error) {
      handelError(error);
    }
  };

  useEffect(() => {
    isFavoriteConversationFn();
  }, [refresh]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await createMessage({
        text: messageInput,
        conversationId: params?.username,
      });
      toast.success("Message Send Successfully");
      setMessageInput("");
      setRefresh(!refresh);
    } catch (error) {
      handelError(error);
    }
  };

  const messageFn = async () => {
    try {
      const { data } = await getMessage(params?.username);
      setMessages(data.messages);
      setRefresh(!refresh);
    } catch (error) {
      handelError(error);
    }
  };

  useEffect(() => {
    messageFn();
  }, [messageInput]);

  const deleteConversationFn = async () => {
    try {
      await deleteConversation(params?.username);
      toast.success("Conversation Deleted");
      setRefresh(!refresh);
      router.push(
        `${user?.role === "Vendor" ? "/vendor/profile/inbox" : "/user/inbox"}`
      );
    } catch (error) {
      handelError(error);
    }
  };

  const markAsUnreadFn = async () => {
    try {
      await markAsUnread();
      setRefresh(!refresh);
      router.push(
        user?.role !== "Vendor" ? `/user/inbox` : `/vendor/profile/inbox`
      );
    } catch (error) {
      handelError(error);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on(`new-message-${params?.username}-${user?.id}`, (data: any) => {
        setMessages(data.message);
      });
    }
    return () => {
      if (socket) {
        socket.off(`new-message-${params?.username}-${user?.id}`);
      }
    };
  }, [socket]);

  return (
    <div className="w-full">
      <div className="max-h-[75vh] w-full">
        {/* Header */}
        <div className="w-full h-[60px] border-b border-b-paginationBg-900 px-4 flex justify-between items-center sticky top-0">
          {/* Left */}
          <div className="w-full">
            {/* Name */}
            <h2 className="text-textSecondary-900 lg:text-base text-sm font-bold mb-[4px]">
              {chatUser?.name}
            </h2>

            {chatUser?.city && (
              <p
                title="Location"
                className="text-textPrimary-900 text-xs font-semibold flex items-center">
                <MdLocationOn className="mr-1" />
                <span className="capitalize">{chatUser?.city}</span>
              </p>
            )}
          </div>
          {/* Right */}
          <div className="w-full flex justify-end">
            <div className="text-textSecondary-900 flex gap-4">
              {isFavConversation ? (
                <MdStar
                  className="cursor-pointer text-yellow-500 hover:text-yellow-500 duration-200 text-xl"
                  title="Mark the Conversation as UnStar"
                  onClick={removeFavFn}
                />
              ) : (
                <MdStarOutline
                  className="cursor-pointer hover:text-textPrimary-900 duration-200 text-xl"
                  title="Mark the Conversation as Star"
                  onClick={addToFavFn}
                />
              )}
              <IoMdTrash
                className="cursor-pointer hover:text-textPrimary-900 duration-200 text-xl"
                title="Delete"
                onClick={deleteConversationFn}
              />
              {/* {lastMessage?.conversation.id !== user?.id && ( */}
              <LuMailOpen
                className="cursor-pointer hover:text-textPrimary-900 duration-200 text-lg"
                title="Mark as unread"
                onClick={markAsUnreadFn}
              />
              {/* )} */}
            </div>
          </div>
        </div>
        <div className="h-full min-h-[calc(75vh-134px)] max-h-[calc(75vh-134px)] overflow-y-scroll">
          {children}
        </div>
        {/* SendBox */}
        <form
          onSubmit={handleSubmit}
          className="bg-white h-[74px] lg:px-4 px-1 flex justify-between items-center border-y border-y-paginationBg-900 sticky bottom-0">
          {/* Upper Part */}
          <div className="w-full border border-paginationBg-900 flex gap-4 items-center justify-between px-2 rounded-l">
            <div className="w-full">
              <input
                type="text"
                placeholder="Write Message..."
                ref={inputRef}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="w-full text-textSecondary-900 outline-none text-xs lg:text-sm py-3 focus:border-textPrimary-900 rounded-sm"
                maxLength={100}
              />
            </div>
          </div>

          {/* button */}
          <div className="w-max">
            <button
              className="text-white text-xs lg:text-sm font-semibold bg-textPrimary-900 px-4 flex items-center gap-1 py-[13px] rounded-tr rounded-br"
              type="submit">
              Send <FiSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
