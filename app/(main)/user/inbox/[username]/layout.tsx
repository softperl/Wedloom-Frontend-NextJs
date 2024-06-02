import MessageContainer from "@/components/vendorProfile/messages/messageContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container w-full lg:w-7/12 mx-auto my-8">
      <MessageContainer border={true} children={children} />
    </div>
  );
}
