"use client";
import CustomarMessage from "@/components/vendorProfile/messages/customarMessage";
import useChats from "@/lib/hooks/useChats";

const Chatbox = () => {
  const { message } = useChats();
  return (
    /* Message Box */
    <div className="w-full h-full flex justify-end flex-col">
      {/* Messages */}
      <div className="overflow-y-scroll flex flex-col-reverse px-4 py-2 h-full">
        <div>
          {message?.map((item: any, i: number) => {
            return <CustomarMessage key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
