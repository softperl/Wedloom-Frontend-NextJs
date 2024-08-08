import { getAllPlan } from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";

const MembershipCard = ({ planType }: { planType: string }) => {
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await getAllPlan();
      setPlans(data?.plans);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 flex flex-wrap lg:flex-nowrap justify-between gap-4">
      {plans
        ?.filter((item) => item?.type.toLowerCase() === planType.toLowerCase())
        ?.map((item: any, i: number) => {
          return (
            <div key={i} className="w-full lg:w-4/12 shadow-lg">
              {item?.popular && (
                <div>
                  <Image width={500} height={500} src={"/popular.svg"} alt="" />
                </div>
              )}

              <div className="px-4 text-center pb-[42px]">
                <h1 className="text-lg lg:text-xl text-textSecondary-900 font-semibold">
                  {item?.name}
                </h1>
                <p className="text-textSecondary-900 text-xs lg:text-sm mt-2 mb-4">
                  PKR. {item?.price}
                </p>
                <button className="bg-[#27AE5F] py-3 font-semibold text-white px-8 rounded-md text-xs lg:text-sm">
                  Request
                </button>
              </div>

              <div>
                {item?.features?.map((data: any, idx: number) => (
                  <div key={idx} className="border-t py-8 px-4 text-center">
                    <span className="text-xs lg:text-sm text-textSecondary-900">
                      {data?.feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MembershipCard;
