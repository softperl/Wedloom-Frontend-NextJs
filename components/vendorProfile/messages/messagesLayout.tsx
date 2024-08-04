"use client";
import React from "react";
import { createMessage, deleteConversation, getMessage } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useChats from "@/lib/hooks/useChats";
import useSocket from "@/lib/hooks/useSocket";
import { handelError } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { IoMdTrash } from "react-icons/io";
import { LuMailOpen } from "react-icons/lu";
import { MdLocationOn, MdStarOutline } from "react-icons/md";

export const MessagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const params: any = useParams();
  const { user } = useAuth();
  const { socket } = useSocket();
  const [messageInput, setMessageInput] = useState<string>("");
  const { conversations, setMessage, chatUser, setChatUser } = useChats();
  const router = useRouter();

  useEffect(() => {
    if (!conversations || !params?.username || !user?.id) return;

    const filterData = (
      data: any,
      conversationId: string,
      userId: string
    ): any => {
      const conversation = data?.find(
        (convo: any) => convo?.id === conversationId
      );
      if (!conversation) return null;

      const user = conversation?.users?.find(
        (user: any) => user?.userId !== userId
      );
      if (!user) return null;

      return {
        ...conversation,
        users: [user],
      };
    };

    const filteredConversation = filterData(
      conversations,
      params?.username,
      user?.id
    );
    const data = filteredConversation?.users[0];
    setChatUser(data);
  }, [conversations, params?.username, user?.id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await createMessage({
        text: messageInput,
        conversationId: params?.username,
      });

      toast.success("Message Send Successfully");
      setMessageInput("");
    } catch (error) {
      handelError(error);
    }
  };

  const messageFn = async () => {
    try {
      const { data } = await getMessage(params?.username);
      setMessage(data.messages);
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
      router.push("/user/inbox");
    } catch (error) {
      handelError(error);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on(`new-message-${params?.username}-${user?.id}`, (data: any) => {
        console.log("data", data);
      });
    }
    return () => {
      if (socket) {
        socket.off("new-notification");
      }
    };
  }, [socket]);
  return (
    <div className="w-full hidden md:block">
      <div className="max-h-[75vh] w-full">
        {/* Header */}
        <div className="w-full h-[60px] border-b border-b-paginationBg-900 px-4 flex justify-between items-center sticky top-0">
          {/* Left */}
          <div className="w-full">
            {/* Name */}
            <h2 className="text-textSecondary-900 lg:text-base text-sm font-bold mb-[4px]">
              {chatUser?.user?.name}
            </h2>

            {chatUser?.user?.city && (
              <p
                title="Location"
                className="text-textPrimary-900 text-xs font-semibold flex items-center">
                <MdLocationOn className="mr-1" />
                <span className="capitalize">{chatUser?.user?.city}</span>
              </p>
            )}
          </div>
          {/* Right */}
          <div className="w-full flex justify-end">
            <div className="text-textSecondary-900 flex gap-4">
              <MdStarOutline
                className="cursor-pointer hover:text-textPrimary-900 duration-200 text-xl"
                title="Mark the Conversation as Star"
              />
              <IoMdTrash
                className="cursor-pointer hover:text-textPrimary-900 duration-200 text-xl"
                title="Delete"
                onClick={deleteConversationFn}
              />
              <LuMailOpen
                className="cursor-pointer hover:text-textPrimary-900 duration-200 text-lg"
                title="Mark as unread"
              />
            </div>
          </div>
        </div>
        <div className="h-full min-h-[calc(75vh-134px)] max-h-[calc(75vh-134px)] overflow-scroll">
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
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="w-full text-textSecondary-900 outline-none text-xs lg:text-sm py-3 focus:border-textPrimary-900 rounded-sm"
                maxLength={100}
              />
            </div>
            {/* <div>
          <label
            htmlFor="file"
            className="text-[10px] lg:text-xs border-l border-l-paginationBg-900 text-textSecondary-900 flex items-center gap-1 pl-1 cursor-pointer">
            <ImAttachment />
            Attachments
          </label>
          <input type="file" id="file" className="hidden" />
        </div> */}
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
