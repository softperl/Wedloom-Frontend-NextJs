import MessageUsers from "@/components/vendorProfile/messages/messageUsers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <div className={`w-full h-full max-h-[75vh] flex`}>
        <MessageUsers />
        {children}
      </div>
    </div>
  );
}
