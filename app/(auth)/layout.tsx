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
    <div className="bg-sectionBg-900 h-screen overflow-x-hidden">
      <TopNav />
      <Navbar />
      {children}
      <Footer />
      <Copyright />
    </div>
  );
}
