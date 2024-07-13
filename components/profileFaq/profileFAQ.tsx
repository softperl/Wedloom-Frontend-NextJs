import React, { useState } from "react";
import ProfileFAQCard from "@/components/profileFaq/profileFAQCard";
import { FaqPopup } from "../popups/faqPopup";
import useFaq from "@/lib/hooks/useFaq";

const ProfileFAQ = () => {
  const [isFaqOpen, setFaqOpen] = useState(false);
  const [isEditFaqOpen, setEditFaqOpen] = useState(false);
  const { faq } = useFaq();

  return (
    <section className="container mx-auto lg:px-20 px-2 my-6">
      <div className="faq__container bg-white shadow-md border-b border-paginationBg-900">
        <div className="faq__container__content border-b border-paginationBg-900">
          <div className="faq__container__heading px-5 py-4  border-b border-paginationBg-900 flex items-center justify-between">
            <h5 className="text-lg text-left font-medium text-textBlack-900">
              FAQ about THE MEMORY CAPTURE
            </h5>
            <button
              onClick={() => setFaqOpen(true)}
              className="py-2 px-4 text-textPrimary-900 border border-textPrimary-900 hover:bg-textPrimary-900 hover:text-white duration-300 font-semibold text-sm rounded-full">
              Add FAQ
            </button>
          </div>
        </div>
        {/* Bottom */}
        {faq?.length > 0 && (
          <div className="w-full px-5 pt-5 pb-0">
            {faq?.map((item, i) => {
              return (
                <ProfileFAQCard
                  key={i}
                  question={item?.question}
                  answer={item?.answer}
                  setFaqOpen={setFaqOpen}
                />
              );
            })}
          </div>
        )}
      </div>
      {isFaqOpen && <FaqPopup closeModal={() => setFaqOpen(false)} />}
    </section>
  );
};

export default ProfileFAQ;
