"use client";

import { FaX } from "react-icons/fa6";
import { usePlacesWidget } from "react-google-autocomplete";

export const AddressPopup = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded shadow-lg relative w-full max-w-md flex flex-col gap-5">
        <FaX
          onClick={closeModal}
          className="text-red-500 w-4 h-4 absolute right-2 top-2 cursor-pointer"
        />
        <form className="divide-y">
          <p className="pb-5">Add a location</p>
          <div className="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            veniam ipsum necessitatibus debitis labore enim incidunt quae
            quisquam minus eaque!
          </div>
          <div className="flex gap-5 pt-5">
            <button
              onClick={closeModal}
              className="border p-4 mx-auto text-center text-gray-700 font-semibold rounded-md w-full">
              Cancel
            </button>
            <button
              onClick={() => {
                closeModal();
              }}
              className="border bg-textPrimary-900 p-4 mx-auto text-center text-white font-semibold rounded-md w-full">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
