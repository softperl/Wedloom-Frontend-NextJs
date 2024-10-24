"use client";
import MessageSender from "@/components/vendorProfile/messages/messageSender";
import { getConversationsByUser } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useChats from "@/lib/hooks/useChats";
import { handelError, timeFormat } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

const MessageUsers = ({ admin = false }: any) => {
  const { user } = useAuth();
  const {
    conversations,
    setConversations,
    favConversations,
    setFavConversations,
    refresh,
    lastMessage,
  } = useChats();
  const [search, setSearch] = useState<any>("");
  const pathname = usePathname();
  const vendorId = admin ? pathname?.split("/")[2]! : null;

  const conversationsFn = async () => {
    try {
      const { data } = await getConversationsByUser();
      setConversations(data.conversations);
      setFavConversations(data.favConversations);
    } catch (error) {
      handelError(error);
    }
  };

  useEffect(() => {
    conversationsFn();
  }, [refresh, lastMessage]);

  // const getLastMessageFn = async () => {
  //   try {
  //     const { data } = await getLastMessages();
  //     setLastMessage(data);
  //   } catch (error) {
  //     handelError(error);
  //   }
  // };

  // useEffect(() => {
  //   getLastMessageFn();
  // }, [refresh]);

  const filterConversations = (data: any[]) => {
    return data?.filter((conversation: any) => {
      const currentConversation = conversation?.users
        .filter((item: any) => item.userId !== user?.id)
        .map((receiver: any) => receiver);
      return currentConversation[0]?.user?.name
        .toLowerCase()
        .includes(search.toLowerCase());
    });
  };

  return (
    <>
      <div className="w-full md:w-[35%] lg:w-64 flex-shrink-0 h-[75vh] border-r-paginationBg-900 border-r max-h-[75vh] overflow-scroll">
        <div className="h-full overflow-y-scroll">
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
            {filterConversations(favConversations)?.map(
              (data: any, i: number) => {
                const currentuser = data?.users
                  .filter((item: any) => item.userId !== user?.id)
                  .map((receiver: any) => receiver);
                return (
                  <Link
                    key={i}
                    href={`${
                      admin
                        ? `/admin-view/${vendorId}/inbox`
                        : user?.role === "Vendor"
                        ? "/vendor/profile/inbox"
                        : "/user/inbox"
                    }/${data?.id}`}>
                    <MessageSender
                      admin={admin}
                      fevCon={true}
                      img={""}
                      date={timeFormat(data.messages[0]?.createdAt)}
                      name={currentuser[0]?.user?.name}
                      text={data.messages[0]?.text}
                      seen={
                        data.messages[0]?.senderId === user?.id
                          ? true
                          : data.messages[0]?.seen
                      }
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
                <Link
                  key={i}
                  href={`${
                    admin
                      ? `/admin-view/${vendorId}/inbox`
                      : user?.role === "Vendor"
                      ? "/vendor/profile/inbox"
                      : "/user/inbox"
                  }/${data?.id}`}>
                  <MessageSender
                    admin={admin}
                    img={""}
                    date={timeFormat(data.messages[0]?.createdAt)}
                    name={currentuser[0]?.user?.name}
                    text={data.messages[0]?.text}
                    seen={
                      data.messages[0]?.senderId === user?.id
                        ? true
                        : data.messages[0]?.seen
                    }
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
                      admin={admin}
                      img={""}
                      date={timeFormat(data.messages[0]?.createdAt)}
                      name={currentuser[0]?.user?.name}
                      text={data?.messages[0]?.text}
                      seen={
                        data.messages[0]?.senderId === user?.id
                          ? true
                          : data?.messages[0]?.seen
                      }
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
                    admin={admin}
                    img={""}
                    date={timeFormat(data.messages[0]?.createdAt)}
                    name={currentuser[0]?.user?.name}
                    text={data?.messages[0]?.text}
                    seen={
                      data.messages[0]?.senderId === user?.id
                        ? true
                        : data.messages[0]?.seen
                    }
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
