import useFaq from "@/lib/hooks/useFaq";
import React from "react";
import { BiPencil, BiTrash } from "react-icons/bi";

const ProfileFAQCard = ({ question, answer, setFaqOpen }: any) => {
  const { deleteFaq, editFaq } = useFaq();
  return (
    <div className="">
      <div className="flex justify-end items-end gap-2">
        <BiPencil
          onClick={() => {
            setFaqOpen(true);
            editFaq(question, answer);
          }}
          className="w-5 h-5 cursor-pointer mb-2"
        />
        <BiTrash
          onClick={() => deleteFaq(question)}
          className="w-5 h-5 cursor-pointer text-red-500 mb-2"
        />
      </div>
      <div className="faqCards w-full bg-copyrightFooter-900 p-4 rounded-lg mb-4 relative">
        <div className="faq_card_content">
          <div className="faq_question mb-2">
            <span className="cursor-pointer text-textSecondary-900 font-semibold">
              {question}
            </span>
          </div>
          <div className="faq_answer text-textSecondary-900 text-sm">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFAQCard;
