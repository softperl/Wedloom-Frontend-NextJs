import { MessagesLayout } from "@/components/vendorProfile/messages/messagesLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MessagesLayout>{children}</MessagesLayout>;
}
