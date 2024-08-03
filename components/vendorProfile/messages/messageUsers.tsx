"use client";
import MessageSender from "@/components/vendorProfile/messages/messageSender";
import { getConversationsByUser } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useChats from "@/lib/hooks/useChats";
import { handelError } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import Link from "next/link";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";

const MessageUsers = () => {
  const { user } = useAuth();
  const { conversations, setConversations } = useChats();

  const conversationsFn = async () => {
    try {
      const { data } = await getConversationsByUser();
      setConversations(data.conversations);
    } catch (error) {
      handelError(error);
    }
  };

  useEffect(() => {
    conversationsFn();
  }, []);

  return (
    <>
      <div className="w-full md:w-[35%] lg:w-56 flex-shrink-0 h-full border-r-paginationBg-900 border-r max-h-[75vh] overflow-scroll">
        {/* <MessageSidebar /> */}
        <div className="h-full overflow-y-scroll">
          {/* SearchBar */}
          <div className="w-full flex gap-2 justify-between items-center border-b border-b-paginationBg-900 text-textSecondary-900 h-[60px] px-4">
            <input
              type="text"
              placeholder="Search....."
              className="w-full bg-transparent placeholder:text-textSecondary-900 border-none outline-none text-sm"
            />
            <BiSearch className="text-xl" />
          </div>

          {/* Desktop Message Components */}
          <div className="hidden md:block">
            {conversations?.map((data: any, i: number) => {
              const currentuser = data?.users
                .filter((item: any) => item.userId !== user?.id)
                .map((receiver: any) => receiver);

              return (
                <Link
                  key={i}
                  href={`${
                    user?.role === "Vendor"
                      ? "/vendor/profile/inbox"
                      : "/user/inbox" + `/${data?.id}`
                  }/`}>
                  <MessageSender
                    img={""}
                    date={formatDistanceToNow(new Date(data?.createdAt))}
                    name={currentuser[0]?.user?.name}
                    text={data.messages[0]?.text}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Messages */}
          <div className="block md:hidden">
            {conversations?.map((data: any, i: number) => {
              const currentuser = data?.users
                .filter((item: any) => item.userId !== user?.id)
                .map((receiver: any) => receiver);
              return (
                <Link key={i} href={`/mobilemessage/${conversations?.id}`}>
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
