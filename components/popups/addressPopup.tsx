"use client";

import { FaX } from "react-icons/fa6";
import { usePlacesWidget } from "react-google-autocomplete";

export const AddressPopup = ({ closeModal }: { closeModal: () => void }) => {
  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    onPlaceSelected: (place) => console.log(place),
  });

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded shadow-lg relative w-full max-w-lg lg:max-w-screen-md flex flex-col gap-5">
        <FaX
          onClick={closeModal}
          className="text-red-500 w-4 h-4 absolute right-2 top-2 cursor-pointer"
        />
        <form className="divide-y">
          <p className="pb-5">Add a location</p>
          <div className="py-5">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <div className="">
                  <label className="text-sm">Store Name</label> <br />
                  <input
                    className="mt-0.5 w-full py-2 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                    placeholder="Store Name"
                    required
                  />
                </div>
                <div className="">
                  <label className="text-sm">Landmark*</label> <br />
                  <input
                    className="mt-0.5 w-full py-2 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                    placeholder="Landmark"
                    required
                  />
                </div>
                <div className="">
                  <label className="text-sm">Pincode*</label> <br />
                  <input
                    className="mt-0.5 w-full py-2 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                    placeholder="Pincode*"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="">
                  <label className="text-sm">
                    Add location on map. It helps customers to find you easily.
                  </label>
                  <input
                    className="mt-0.5 w-full py-2 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                    placeholder="Add location on map. It helps customers to find you easily."
                    required
                  />
                </div>
                <div className="">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.101285788842!2d89.62541948715818!3d23.755390199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe41ddf2d143ef%3A0xec36a531efa1e3ad!2sHotel%2071%20%26%20Resort!5e0!3m2!1sen!2sbd!4v1720286610560!5m2!1sen!2sbd"
                    className="w-full h-72 rounded"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 pt-5">
            <button
              onClick={closeModal}
              className="border p-2 mx-auto text-center text-gray-700 font-semibold rounded-md w-full">
              Cancel
            </button>
            <button
              onClick={() => {
                closeModal();
              }}
              className="border bg-textPrimary-900 p-2 mx-auto text-center text-white font-semibold rounded-md w-full">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
