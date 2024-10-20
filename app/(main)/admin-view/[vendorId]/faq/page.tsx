"use client";
import ProfileFAQCard from "@/components/profileFaq/profileFAQCard";
import { getFaq } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useFaq from "@/lib/hooks/useFaq";
import { handelError } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";

export default function Page() {
  const params = useParams();
  const { user } = useAuth();
  const { setFaqOpen } = useFaq();
  const [faq, setFaq] = useState<any>([]);
  const [isAdminView, setIsAdminView] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.includes("admin-view")) {
      setIsAdminView(true);
    } else {
      setIsAdminView(false);
    }
  }, [pathname]);

  const getFaqFn = async () => {
    try {
      const { data } = await getFaq(params?.vendorId);
      setFaq(data?.faq);
      console.log(data);
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  useEffect(() => {
    getFaqFn();
  }, [user?.id]);
  return (
    <div className="w-full h-full">
      <div>
        {/* Heading */}
        <div className="bg-sectionBg-900 px-4 py-2 flex justify-between items-center">
          <h2 className="text-textSecondary-900 lg:text-lg font-medium">FAQ</h2>

          {!isAdminView && (
            <button
              onClick={() => setFaqOpen(true)}
              className={`border border-paginationBg-900 py-1 px-2 text-xs lg:text-sm rounded-sm`}>
              Add Faq
            </button>
          )}
        </div>

        <div className="w-full">
          {faq?.length > 0 && (
            <div className="w-full px-5 pt-5 pb-0">
              {faq?.map((item: any, i: number) => {
                return <ProfileFAQCard key={i} data={item} editMode={true} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
