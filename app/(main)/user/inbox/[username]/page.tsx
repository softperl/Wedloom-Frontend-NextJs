"use client";
import Chatbox from "@/components/vendorProfile/messages/chatbox";
import { useRouter } from "next/navigation";

export default function page() {
  const user = useRouter();
  return <Chatbox user={true} />;
}
