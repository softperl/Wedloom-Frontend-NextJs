"use client";
import useAuth from "@/lib/hooks/useAuth";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck, FaPen, FaXmark } from "react-icons/fa6";

const UserSettings = () => {
  const { user } = useAuth();
  const [file, setFile] = useState<any>([]);
  const [editName, setEditName] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [userData, setUserData] = useState({
    name: "Junaid Asghar",
    email: "junaidofficial@gmail.com",
    phone: "",
    password: "",
    retypePass: "",
  });
  const [showPop, setShowPop] = useState(false);

  //   Male Select
  const maleSelect = () => {
    setMale(true);
    setFemale(false);
  };

  //   Female Select
  const femaleSelect = () => {
    setFemale(true);
    setMale(false);
  };

  //   New Password Save
  const newPassword = () => {
    if (userData.password.length >= 4 && userData.retypePass.length >= 4) {
      if (userData.password === userData.retypePass) {
        setShowPop(false);
      }
    }
  };

  return (
    <div className="bg-sectionBg-900 py-4 px-8 flex flex-col justify-center items-center">
      {showPop && (
        <div className="w-screen h-screen fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[100000]">
          <div className="w-11/12 md:w-3/12 bg-white shadow-lg px-4 md:px-8 py-4 rounded-md relative">
            {/* Heading */}
            <h2 className="text-base md:text-xl font-semibold text-textSecondary-900">
              Set Password
            </h2>

            <div className="mt-4">
              <input
                id="password"
                type="password"
                value={userData.password}
                placeholder="New password*"
                required
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    password: e.target.value,
                  })
                }
                className="bg-transparent w-full border text-xs outline-none p-2 rounded-sm focus:border-textPrimary-900"
              />
            </div>

            <div className="mt-4">
              <input
                id="password"
                type="password"
                value={userData.retypePass}
                placeholder="Retype new password*"
                required
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    retypePass: e.target.value,
                  })
                }
                className="bg-transparent w-full border text-xs outline-none p-2 rounded-sm focus:border-textPrimary-900"
              />
            </div>

            <div className="w-full mt-6 text-center">
              <button
                className="w-6/12 bg-textPrimary-900 text-white py-3 md:text-base text-xs rounded-md font-semibold"
                onClick={newPassword}
                disabled={
                  (userData.password.length < 4 &&
                    userData.retypePass.length < 4) ||
                  userData.password !== userData.retypePass
                }>
                Set New Password
              </button>
            </div>

            <div className="absolute top-2 right-4">
              <FaXmark
                onClick={() => setShowPop(!showPop)}
                className="cursor-pointer text-textSecondary-900"
              />
            </div>
          </div>
        </div>
      )}
      {/* Profile Pictures */}
      <div>
        <div className="w-full text-center">
          <span className="text-textSecondary-900 text-[15px] font-bold">
            Profile Settings
          </span>

          {/* Image Upload */}
          <div className="flex justify-center mt-4">
            <label htmlFor="file" className="cursor-pointer">
              <div className="lg:w-48 lg:h-48 w-32 h-32 rounded-full bg-slate-100 border-paginationBg-900 border overflow-hidden">
                {file.length === 0 && (
                  <div className="w-full h-full relative flex justify-center items-center">
                    <Image
                      width={500}
                      height={500}
                      src="/User_icon-cp.png"
                      alt="blank_avatar"
                      className="w-16 lg:w-24 opacity-50"
                    />
                  </div>
                )}

                {Array.from(file).map((img, i) => (
                  <Image
                    width={500}
                    height={500}
                    key={i}
                    //@ts-ignore
                    src={img ? URL.createObjectURL(img) : null}
                    alt="images"
                    className="w-full h-full object-cover rounded-full"
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
      </div>

      {/* Name */}
      <div className="mt-6 w-full flex flex-col justify-center items-center">
        {!editName && (
          <h5 className="text-sm font-bold text-textSecondary-900 inline-flex items-center">
            {userData.name}{" "}
            <FaPen
              onClick={() => setEditName(!editName)}
              className="ml-2 cursor-pointer"
            />
          </h5>
        )}

        {editName && (
          <div className="w-full md:w-5/12 flex items-center justify-between gap-4">
            <div className="w-full bg-white p-2 shadow-sm rounded-md">
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    name: e.target.value,
                  })
                }
                className="bg-transparent text-textSecondary-900 text-sm outline-none border-none w-full"
              />
            </div>
            <div className="w-max">
              <FaCheck
                onClick={() => setEditName(!editName)}
                className="text-textSecondary-900 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>

      {/* Gender Select */}
      <div className="mt-6 w-full flex justify-center items-center">
        {/* Select Gender  */}
        {/* Male */}
        <div
          className={`${
            male
              ? "text-white bg-textPrimary-900"
              : "text-textPrimary-900 bg-transparent"
          } border border-textPrimary-900 w-16 md:w-24 text-center py-2 font-semibold cursor-pointer text-xs md:text-sm`}
          onClick={maleSelect}>
          <span>Male</span>
        </div>

        {/* Female */}
        <div
          className={`${
            female
              ? "text-white bg-textPrimary-900"
              : "text-textPrimary-900 bg-transparent"
          } border border-textPrimary-900 border-l-0 w-16 md:w-24 text-center py-2 font-semibold cursor-pointer text-xs md:text-sm`}
          onClick={femaleSelect}>
          <span>Female</span>
        </div>
      </div>

      {/* Form Content */}
      <div className="w-full flex justify-center md:mt-12 mt-4">
        <form className="w-full">
          {/* Email Address */}
          <div className="w-full md:w-7/12 mx-auto mb-4">
            <label htmlFor="email" className="text-xs font-bold text-gray-500">
              Email Address
            </label>
            <div className="w-full bg-white shadow-sm py-3 text-xs md:text-sm border border-paginationBg-900 px-4 text-textSecondary-900 mt-1 rounded-sm">
              <input
                id="email"
                type="email"
                value={userData.email}
                disabled
                className="bg-transparent w-full border-none outline-none"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="w-full md:w-7/12 mx-auto mb-4">
            <label htmlFor="number" className="text-xs font-bold text-gray-500">
              Set Phone Number
            </label>
            <div className="w-full bg-white shadow-sm py-3 text-xs md:text-sm border border-paginationBg-900 px-4 text-textSecondary-900 mt-1 rounded-sm">
              <input
                id="number"
                type="number"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    phone: e.target.value,
                  })
                }
                className="bg-transparent w-full border-none outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-full md:w-7/12 mx-auto mb-4">
            <label
              htmlFor="password"
              className="text-xs font-bold text-gray-500">
              Set Password
            </label>
            <div
              className="w-full bg-white shadow-sm py-3 text-xs md:text-sm border border-paginationBg-900 px-4 text-textSecondary-900 mt-1 rounded-sm"
              onClick={() => setShowPop(true)}>
              <input
                id="password"
                type="password"
                value="0134342312"
                className="bg-transparent w-full border-none outline-none cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Buttons */}
      <div className="w-full flex justify-center items-center flex-col gap-4 mt-4 md:mt-8">
        {/* Save Button */}
        <div className="w-full text-center">
          <button className="w-6/12 md:w-3/12 bg-textPrimary-900 text-white py-3 rounded-md font-semibold text-xs md:text-sm">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
