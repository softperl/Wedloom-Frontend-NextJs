"use client";
import MessageSender from "@/components/vendorProfile/messages/messageSender";
import { getConversationsByUser } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useChats from "@/lib/hooks/useChats";
import useUi from "@/lib/hooks/useUi";
import { handelError } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

const MessageUsers = () => {
  const { user } = useAuth();
  const [lastMessage, setLastMessage] = useState<any>();
  const {
    conversations,
    setConversations,
    favConversations,
    setFavConversations,
    messages,
    refresh,
  } = useChats();
  const [search, setSearch] = useState<any>("");

  const conversationsFn = async () => {
    try {
      const { data } = await getConversationsByUser();
      console.log(data);
      setConversations(data.conversations);
      setFavConversations(data.favConversations);
    } catch (error) {
      handelError(error);
    }
  };

  useEffect(() => {
    conversationsFn();
  }, [refresh]);

  const filterConversations = (data: any[]) => {
    return data?.filter((item: any) => {
      const currentUser = item?.users
        .filter((currItem: any) => currItem?.userId !== user?.id)
        .map((receiver: any) => receiver);
      return currentUser[0]?.user?.name
        .toLowerCase()
        .includes(search.toLowerCase());
    });
  };

  const getLastMessage = () => {
    if (messages.length === 0) return null;
    return messages.slice(-1)[0];
  };

  useEffect(() => {
    const last = getLastMessage();
    setLastMessage(last);
  }, [messages]);

  return (
    <>
      <div className="w-full md:w-[35%] lg:w-56 flex-shrink-0 h-[75vh] border-r-paginationBg-900 border-r max-h-[75vh] overflow-scroll">
        {/* <MessageSidebar /> */}
        <div className="h-full overflow-y-scroll">
          {/* SearchBar */}
          <div className="w-full flex gap-2 justify-between items-center border-b border-b-paginationBg-900 text-textSecondary-900 h-[60px] px-4">
            <input
              type="text"
              placeholder="Search....."
              value={search}
              onChange={(e: any) => setSearch(e.target.value)}
              className="w-full bg-transparent placeholder:text-textSecondary-900 border-none outline-none text-sm"
            />
            <BiSearch className="text-xl" />
          </div>

          {/* Desktop Message Components */}
          <div className="hidden md:block">
            {filterConversations(favConversations)
              ?.filter((conversation: any) => {
                const currentUser = conversation?.users
                  .filter((item: any) => item.userId !== user?.id)
                  .map((receiver: any) => receiver);
                return currentUser[0]?.user?.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              ?.map((data: any, i: number) => {
                const currentuser = data?.users
                  .filter((item: any) => item.userId !== user?.id)
                  .map((receiver: any) => receiver);
                return (
                  <Link
                    key={i}
                    href={`${
                      user?.role === "Vendor"
                        ? "/vendor/profile/inbox"
                        : "/user/inbox"
                    }/${data?.id}`}>
                    <MessageSender
                      img={""}
                      date={formatDistanceToNow(
                        new Date(data.messages[0]?.createdAt)
                      )}
                      name={currentuser[0]?.user?.name}
                      text={data.messages[0]?.text}
                    />
                  </Link>
                );
              })}
            {filterConversations(conversations)?.map((data: any, i: number) => {
              const currentuser = data?.users
                .filter((item: any) => item.userId !== user?.id)
                .map((receiver: any) => receiver);
              return (
                <Link
                  key={i}
                  href={`${
                    user?.role === "Vendor"
                      ? "/vendor/profile/inbox"
                      : "/user/inbox"
                  }/${data?.id}`}>
                  <MessageSender
                    img={""}
                    date={formatDistanceToNow(
                      new Date(data.messages[0]?.createdAt)
                    )}
                    name={currentuser[0]?.user?.name}
                    text={data.messages[0]?.text}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Messages */}
          <div className="block md:hidden">
            {filterConversations(favConversations)?.map(
              (data: any, i: number) => {
                const currentuser = data?.users
                  .filter((item: any) => item.userId !== user?.id)
                  .map((receiver: any) => receiver);
                return (
                  <Link key={i} href={`/mobilemessage/${data?.id}`}>
                    <MessageSender
                      img={""}
                      date={formatDistanceToNow(new Date(data?.createdAt))}
                      name={currentuser[0]?.user?.name}
                      text={data?.messages[0]?.text}
                    />
                  </Link>
                );
              }
            )}
            {filterConversations(conversations)?.map((data: any, i: number) => {
              const currentuser = data?.users
                .filter((item: any) => item.userId !== user?.id)
                .map((receiver: any) => receiver);
              return (
                <Link key={i} href={`/mobilemessage/${data?.id}`}>
                  <MessageSender
                    img={""}
                    date={formatDistanceToNow(new Date(data?.createdAt))}
                    name={currentuser[0]?.user?.name}
                    text={data?.messages[0]?.text}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageUsers;
