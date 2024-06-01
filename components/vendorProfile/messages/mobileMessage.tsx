import React from "react";
import Chatbox from "@/components/vendorProfile/messages/chatbox";

const MobileMessage = () => {
  const user = true;
  return (
    <div>
      <Chatbox user={user} />
    </div>
  );
};

export default MobileMessage;
