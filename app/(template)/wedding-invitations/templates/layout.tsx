import Copyright from "@/components/footer/copyright/copyRight";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import TopNav from "@/components/topNav/topNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="bg-sectionBg-900 overflow-x-hidden h-screen">
          <TopNav />
          <Navbar />
          <div className="flex items-center justify-center border w-[414px] h-[658px] mt-10 mb-20 mx-auto">
            {children}
          </div>
        </main>
        <div className="sticky bottom-0 bg-sectionBg-900">
          <div className="flex items-center justify-center">
            <div className="bg-white w-[414px] shadow mx-auto flex items-center justify-center py-5">
              <button className="border bg-textPrimary-900 py-4 px-20 mx-auto text-center text-white font-semibold rounded-md">
                Customize the card
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
