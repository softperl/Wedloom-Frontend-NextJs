"use client";

import { Data } from "@/components/editor/Data";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentBg, setCurrentBg] = useState<string | null>(null);

  const pageNumber = searchParams.get("pageNumber");

  useEffect(() => {
    const hasPageNumber = pageNumber ? parseInt(pageNumber) : 1;
    const dataIndex = Data?.find(
      (item: any) => item?.id === hasPageNumber?.toString()
    );
    if (dataIndex) {
      setCurrentBg(dataIndex?.bg);
    }
  }, [params, router, pathname, pageNumber]);

  return (
    <div className="my-4">
      <div
        className="flex flex-1 border w-[414px] h-[659.288px] mx-auto bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${currentBg})`,
        }}>
        <p className="text-yellow-800 cursor-pointer absolute top-28 left-20">
          This is a sample paragraph
        </p>
      </div>
    </div>
  );
}
