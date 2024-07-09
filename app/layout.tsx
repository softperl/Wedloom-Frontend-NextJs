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
  let siteData = null;

  try {
    const data = await fetchFn(`/site/data`, {
      method: "GET",
      next: {
        revalidate: 0,
      },
    });
    siteData = data.siteData;
    console.log(siteData);
  } catch (error) {
    console.log(error);
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers siteData={siteData}>{children}</Providers>
      </body>
    </html>
  );
}
