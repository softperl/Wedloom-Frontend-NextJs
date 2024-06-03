import MessageUsers from "@/components/vendorProfile/messages/messageUsers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container w-full lg:w-7/12 mx-auto my-8">
      <div
        className={`border border-paginationBg-900
     w-full h-full max-h-[75vh] flex`}>
        <MessageUsers />
        {children}
      </div>
    </div>
  );
}
