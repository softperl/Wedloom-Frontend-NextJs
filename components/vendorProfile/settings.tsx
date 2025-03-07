"use client";

import { changePasswordVendor } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import { handelError } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Settings = () => {
  const { setAccessToken } = useAuth();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [file, setFile] = useState<any>([]);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }
    try {
      const { data } = await changePasswordVendor({
        oldPassword,
        newPassword,
      });
      setAccessToken(data?.accessToken);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      router.push("/signin");
    } catch (error) {
      handelError(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="py-10">
      <div className="w-full h-full flex flex-col lg:flex-row justify-between">
        {/* Avatar Option */}
        <div className="w-full lg:w-6/12 text-center my-6">
          <span className="text-[#333] text-lg lg:text-xl font-medium tracking-wide">
            Upload Your Brand Logo
          </span>

          {/* Image Upload */}
          <div className="flex justify-center lg:mt-10 mt-4">
            <label htmlFor="file" className="cursor-pointer">
              <div className="lg:w-48 lg:h-48 w-32 h-32 rounded-full bg-slate-100 border-paginationBg-900 border overflow-hidden">
                {file?.length === 0 && (
                  <div className="w-full h-full relative flex justify-center items-center">
                    <Image
                      width={500}
                      height={500}
                      src="/User_icon-cp.png"
                      alt="blank_avatar"
                      className="w-20 lg:w-28 opacity-50"
                    />
                  </div>
                )}

                {Array.from(file).map((img: any, i: number) => (
                  <Image
                    fill
                    key={i}
                    //@ts-ignore
                    src={img ? URL.createObjectURL(img) : null}
                    alt="images"
                    className="w-full h-full"
                  />
                ))}
              </div>
            </label>
            <input
              type="file"
              id="file"
              accept=".png, .jpeg, .jpg"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files)}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="flex flex-col gap-y-2 lg:gap-y-8 justify-center items-center w-full lg:w-6/12 h-full mt-6 border-l">
          <h1 className="text-[#333] text-lg lg:text-xl font-medium">
            Change Password
          </h1>
          {/* Password Box */}
          <div className="w-full lg:px-10 px-4 mt-4 lg:mt-0">
            <label
              htmlFor="old"
              className="text-textSecondary-900 text-xs lg:text-sm font-medium tracking-wider">
              OLD PASSWORD
            </label>
            {/* Input Box */}
            <div className="flex items-center gap-4 mt-[2px]">
              <input
                id="old"
                type={showPass ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="border outline-none border-paginationBg-900 w-full py-1 lg:py-[10px] px-4 text-textSecondary-900 rounded-md font-semibold"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="text-textSecondary-900 cursor-pointer text-2xl">
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* New Password */}
          <div className="w-full lg:px-10 px-4">
            <label
              htmlFor="new"
              className="text-textSecondary-900 text-xs lg:text-sm font-medium tracking-wider">
              NEW PASSWORD
            </label>
            {/* Input Box */}
            <div className="flex items-center gap-4 mt-[2px]">
              <input
                id="new"
                type={showPass ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border outline-none border-paginationBg-900 w-full py-1 lg:py-[10px] px-4 text-textSecondary-900 rounded-md font-semibold"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="text-textSecondary-900 cursor-pointer text-2xl">
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/*Confirm New Password */}
          <div className="w-full lg:px-10 px-4">
            <label
              htmlFor="confirm"
              className="text-textSecondary-900 text-xs lg:text-sm font-medium tracking-wider">
              CONFIRM PASSWORD
            </label>
            {/* Input Box */}
            <div className="flex items-center gap-4 w-full mt-[2px]">
              <input
                id="confirm"
                type={showPass ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border outline-none border-paginationBg-900 w-full py-1 lg:py-[10px] px-4 text-textSecondary-900 rounded-md font-semibold"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="text-textSecondary-900 cursor-pointer text-2xl">
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full lg:mt-16 mt-8 flex gap-4 lg:gap-8 justify-center">
        <button
          type="submit"
          className="bg-textPrimary-900 text-white font-semibold text-xs lg:text-sm w-max px-6 lg:px-0 lg:w-[15%] py-3 rounded-md">
          SAVE CHANGES
        </button>
        <button
          className="bg-[#d0d0d0] text-white font-semibold text-xs lg:text-sm w-max px-6 lg:px-0 lg:w-[15%] py-3 rounded-md"
          onClick={() => {
            router.refresh();
          }}>
          CANCEL
        </button>
      </div>
    </form>
  );
};

export default Settings;
