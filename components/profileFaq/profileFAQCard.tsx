"use client";
import { removeFaq } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useFaq from "@/lib/hooks/useFaq";
import { handelError } from "@/lib/utils";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { BiPencil, BiTrash } from "react-icons/bi";

const ProfileFAQCard = ({ data }: { data: any }) => {
  const { user } = useAuth();
  const params = useParams();
  const { setEditFaq, setFaqOpen, refresh, setRefresh } = useFaq();
  const removeFaqFn = async () => {
    try {
      await removeFaq(data?.id);
      setRefresh(!refresh);
      toast.success("FAQ removed successfully");
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  return (
    <div className="">
      {user?.id === params?.profileId && (
        <div className="flex justify-end items-end gap-2">
          <BiPencil
            onClick={() => {
              setFaqOpen(true);
              setEditFaq({ data });
            }}
            className="w-5 h-5 cursor-pointer mb-2"
          />
          <BiTrash
            onClick={removeFaqFn}
            className="w-5 h-5 cursor-pointer text-red-500 mb-2"
          />
        </div>
      )}
      <div className="faqCards w-full bg-copyrightFooter-900 p-4 rounded-lg mb-4 relative">
        <div className="faq_card_content">
          <div className="faq_question mb-2">
            <span className="cursor-pointer text-textSecondary-900 font-semibold">
              {data?.question}
            </span>
          </div>
          <div className="faq_answer text-textSecondary-900 text-sm">
            {data?.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFAQCard;
