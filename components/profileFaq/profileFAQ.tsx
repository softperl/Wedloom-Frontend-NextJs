import ProfileFAQCard from "@/components/profileFaq/profileFAQCard";
import { getFaq } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useFaq from "@/lib/hooks/useFaq";
import { handelError } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FaqPopup } from "../popups/faqPopup";

const ProfileFAQ = () => {
  const { user } = useAuth();
  const params = useParams();
  const { faq, setFaq, setFaqOpen, refresh } = useFaq();

  const getFaqFn = async () => {
    try {
      const { data } = await getFaq(params?.profileId);
      setFaq(data?.faq);
      console.log(data);
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  useEffect(() => {
    getFaqFn();
  }, [params?.profileId, refresh]);

  return (
    <section className="container mx-auto lg:px-20 px-2 my-6">
      <div className="faq__container bg-white shadow-md border-b border-paginationBg-900">
        <div className="faq__container__content border-b border-paginationBg-900">
          <div className="faq__container__heading px-5 py-4  border-b border-paginationBg-900 flex items-center justify-between">
            <h5 className="text-lg text-left font-medium text-textBlack-900">
              FAQ about THE MEMORY CAPTURE
            </h5>
          </div>
        </div>
        {/* Bottom */}
        {faq?.length > 0 && (
          <div className="w-full px-5 pt-5 pb-0">
            {faq?.map((item: any, i: number) => {
              return <ProfileFAQCard key={i} data={item} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfileFAQ;
