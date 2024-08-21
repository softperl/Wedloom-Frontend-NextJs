"use client";

import { StickyPagesCustomized } from "@/components/editor/stickyPagesCustomized";
import Navbar from "@/components/navbar/navbar";
import TopNav from "@/components/topNav/topNav";
import useCardEditor from "@/lib/hooks/useCardEditor";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div>
        <div className="bg-sectionBg-900 overflow-x-hidden h-full">
          <TopNav />
          <Navbar />
          <div className="container mx-auto px-5 lg:px-20">
            <StickyPagesCustomized />
            {children}
          </div>
        </div>
        <div className="sticky bottom-0 bg-sectionBg-900">
          <div className="flex items-center justify-center">
            <div className="bg-white w-[414px] shadow mx-auto flex items-center justify-center py-5">
              <button
                onClick={() => {
                  router.push(
                    `/invite/edit-card?cardId=${params.cards[1]}&pageNumber=1`
                  );
                }}
                className="border bg-textPrimary-900 py-4 px-20 mx-auto text-center text-white font-semibold rounded-md">
                Customize the card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
