import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import { Providers } from "@/components/providers";
import { fetchFn } from "@/lib/server-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pakistan's Most Popular Wedding Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let aboutData = null;

  try {
    const data = await fetchFn(`/site/about`, {
      method: "GET",
      next: {
        revalidate: 0,
      },
    });
    aboutData = data.about;
    console.log(aboutData);
  } catch (error) {
    console.log(error);
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers aboutData={aboutData}>{children}</Providers>
      </body>
    </html>
  );
}
