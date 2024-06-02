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
        <main className="bg-sectionBg-900 overflow-x-hidden h-full">
          <TopNav />
          <Navbar />
          {children}
          <Footer />
          <Copyright />
        </main>
      </body>
    </html>
  );
}
