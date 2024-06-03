import { FiSend } from "react-icons/fi";
import { ImAttachment } from "react-icons/im";
import { IoMdTrash } from "react-icons/io";
import { LuMailOpen } from "react-icons/lu";
import { MdLocationOn, MdStarOutline } from "react-icons/md";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full hidden md:block">
      <div className="max-h-[75vh] w-full">
        {/* Header */}
        <div className="w-full h-[60px] border-b border-b-paginationBg-900 px-4 flex justify-between items-center sticky top-0">
          {/* Left */}
          <div className="w-full">
            {/* Name */}
            <h2 className="text-textSecondary-900 lg:text-base text-sm font-bold mb-[4px]">
              Junaid Asghar
            </h2>

            <p
              title="Location"
              className="text-textPrimary-900 text-xs font-semibold flex items-center">
              <MdLocationOn className="mr-1" />
              <span>Islamabad</span>
            </p>
          </div>
          {/* Right */}
          <div className="w-full flex justify-end">
            <div className="text-textSecondary-900 flex gap-4">
              <MdStarOutline
                className="cursor-pointer hover:text-textPrimary-900 duration-200 text-xl"
                title="Mark the Conversation as Star"
              />
              <IoMdTrash
                className="cursor-pointer hover:text-textPrimary-900 duration-200 text-xl"
                title="Delete"
              />
              <LuMailOpen
                className="cursor-pointer hover:text-textPrimary-900 duration-200 text-lg"
                title="Mark as unread"
              />
            </div>
          </div>
        </div>
        <div className="h-full min-h-[calc(75vh-134px)] max-h-[calc(75vh-134px)] overflow-scroll">
          {children}
        </div>
        {/* SendBox */}
        <div className="bg-white h-[74px] lg:px-4 px-1 flex justify-between items-center border-y border-y-paginationBg-900 sticky bottom-0">
          {/* Upper Part */}
          <div className="w-full border border-paginationBg-900 flex gap-4 items-center justify-between px-2 rounded-l">
            <div className="w-full">
              <input
                type="text"
                placeholder="Write Message..."
                className="w-full text-textSecondary-900 outline-none text-xs lg:text-sm py-3 focus:border-textPrimary-900 rounded-sm"
                maxLength={100}
              />
            </div>
            <div>
              <label
                htmlFor="file"
                className="text-[10px] lg:text-xs border-l border-l-paginationBg-900 text-textSecondary-900 flex items-center gap-1 pl-1 cursor-pointer">
                <ImAttachment />
                Attachments
              </label>
              <input type="file" id="file" className="hidden" />
            </div>
          </div>

          {/* button */}
          <div className="w-max">
            <button
              className="text-white text-xs lg:text-sm font-semibold bg-textPrimary-900 px-4 flex items-center gap-1 py-[13px] rounded-tr rounded-br"
              type="submit">
              Send <FiSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
