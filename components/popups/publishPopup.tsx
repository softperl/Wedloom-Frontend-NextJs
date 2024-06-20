"use client";

import { useRouter } from "next/navigation";
import { FaX } from "react-icons/fa6";

export const PublishPopup = ({ closeModal }: { closeModal: () => void }) => {
  const router = useRouter();
  const publishId = 1647813;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded shadow-lg relative w-full max-w-md flex flex-col gap-5">
        <FaX
          onClick={closeModal}
          className="text-red-500 w-4 h-4 absolute right-2 top-2 cursor-pointer"
        />
        <div className="py-5">
          <h2 className="text-xl font-semibold text-gray-600 text-center max-w-60 mx-auto">
            Are you sure you want to Publish the card?
          </h2>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => {
              closeModal;
              router.push(`/invite/share-card?uid=${publishId}`);
            }}
            className="border bg-textPrimary-900 p-4 mx-auto text-center text-white font-semibold rounded-md w-full">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};
