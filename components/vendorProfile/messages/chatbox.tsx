"use client";
import CustomarMessage from "@/components/vendorProfile/messages/customarMessage";
import useChats from "@/lib/hooks/useChats";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Chatbox = () => {
  const { messages } = useChats();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Depend on messages so it scrolls whenever messages change

  return (
    /* Message Box */
    <div className="w-full h-full flex flex-col justify-end">
      {/* Messages */}
      <div className="overflow-y-auto flex flex-col px-4 py-2 h-full">
        <AnimatePresence>
          {messages?.map((item: any, i: number) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
              transition={{
                opacity: { duration: 0.1 },
                layout: {
                  type: "spring",
                  bounce: 0.3,
                  duration: messages.indexOf(item) * 0.05 + 0.2,
                },
              }}
              style={{
                originX: 0.5,
                originY: 0.5,
              }}
              key={item?.id}>
              <CustomarMessage item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default Chatbox;
