import MessageContainer from "@/components/vendorProfile/messages/messageContainer";
import React from "react";

export default function page() {
  return (
    <div className="container w-full lg:w-7/12 mx-auto my-8">
      <MessageContainer border={true} />
    </div>
  );
}
