"use client";
import { createBanquet, getBanquets, removeBanquet } from "@/lib/api";
import { handelError } from "@/lib/utils";
import { get } from "http";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaX, FaXmark } from "react-icons/fa6";

const Banquets = () => {
  const [refresh, setRefresh] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [value, setValue] = useState({
    title: "",
    type: "",
    fixedCapacity: "",
    floatCapacity: "",
  });
  const [data, setData] = useState<any>([]);

  const getBanquetsFn = async () => {
    try {
      const { data } = await getBanquets();
      setData(data?.banquet);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBanquetsFn();
  }, [refresh]);

  // Form Submit Function
  const formSubmitted = async (e: any) => {
    e.preventDefault();
    try {
      await createBanquet({
        title: value.title,
        type: value.type,
        fixedCapacity: value.fixedCapacity,
        floatCapacity: value.floatCapacity,
      });
      setValue({
        title: "",
        type: "",
        fixedCapacity: "",
        floatCapacity: "",
      });
      setRefresh(!refresh);
      toast.success("Banquet has been added!");
    } catch (error) {
      console.log(error);
    } finally {
      setOpenPopup(false);
    }
  };

  // Remove Banquets Function
  const deleteBanquetes = async (id: string) => {
    try {
      await removeBanquet(id);
      setRefresh(!refresh);
      toast.success("Banquet has been deleted!");
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  return (
    <div className="w-full h-full">
      {/* Heading */}
      <div className="bg-sectionBg-900 px-4 py-3 flex justify-between items-center">
        <h2 className="text-textSecondary-900 lg:text-lg">Banquets</h2>
        <button
          onClick={() => setOpenPopup(true)}
          className={`border border-paginationBg-900 py-2 px-4 text-xs lg:text-sm rounded-sm`}>
          Add Bunquets
        </button>
      </div>

      {/* Content */}
      <div className="w-full h-full">
        {/* Initial Div */}
        {data?.length < 1 && (
          <div className="flex items-center flex-col my-8 lg:my-16 gap-4">
            <p className="text-textSecondary-900 font-semibold lg:text-base text-sm">
              No Banquets found. Add a new banquet
            </p>
            <button
              onClick={() => setOpenPopup(!openPopup)}
              className={`bg-textPrimary-900 text-white border border-paginationBg-900 py-2 px-4 text-xs lg:text-sm rounded-sm`}>
              Add Bunquets
            </button>
          </div>
        )}

        {data?.length >= 1 && (
          <>
            <div className="w-full flex justify-between px-4 border-b-paginationBg-900 border-b mt-4 pb-2">
              <div className="w-[20%]">
                <p className="font-semibold text-textSecondary-900 text-xs lg:text-[15px]">
                  Title
                </p>
              </div>
              <div className="w-[20%]">
                <p className="font-semibold text-textSecondary-900 text-xs lg:text-[15px]">
                  Type
                </p>
              </div>
              <div className="w-[20%]">
                <p className="font-semibold text-textSecondary-900 text-xs lg:text-[15px]">
                  Fixed Capacity
                </p>
              </div>
              <div className="w-[20%]">
                <p className="font-semibold text-textSecondary-900 text-xs lg:text-[15px]">
                  Float Capacity
                </p>
              </div>
              <div className="w-[20%] text-end">
                <p className="font-semibold text-textSecondary-900 text-xs lg:text-[15px]">
                  Actions
                </p>
              </div>
            </div>

            {data.map((v: any, i: number) => (
              <div
                key={i}
                className="w-full flex items-center px-4 py-2 border-b border-b-paginationBg-900">
                <div className="w-[20%]">
                  <p className="text-xs lg:text-sm font-medium text-textSecondary-900">
                    {v.title}
                  </p>
                </div>
                <div className="w-[20%]">
                  <p className="text-xs lg:text-sm font-medium text-textSecondary-900">
                    {v.type}
                  </p>
                </div>
                <div className="w-[20%]">
                  <p className="text-xs lg:text-sm font-medium text-textSecondary-900">
                    {v.fixedCapacity}
                  </p>
                </div>
                <div className="w-[20%]">
                  <p className="text-xs lg:text-sm font-medium text-textSecondary-900">
                    {v.floatCapacity}
                  </p>
                </div>
                <div className="w-[20%] text-end">
                  <span className="text-textSecondary-900 flex justify-end">
                    <FaTrash
                      onClick={() => deleteBanquetes(v?.id)}
                      className="cursor-pointer"
                    />
                  </span>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {openPopup && (
        <div className="w-screen h-screen bg-black bg-opacity-70 fixed top-0 right-0 flex justify-center items-center">
          <div className="flex flex-col-reverse lg:flex-row items-end justify-center lg:items-start gap-2 w-full px-4 lg:px-0">
            {/* Content */}
            <div className="w-full lg:max-w-[400px] h-max bg-white text-black px-6 py-4 rounded-md relative">
              <div className="flex justify-center mb-4">
                <Image
                  width={500}
                  height={500}
                  src="https://www.svgrepo.com/show/16895/wedding-cake.svg"
                  alt=""
                  className="w-14 lg:w-16"
                />
              </div>
              {/* Heading */}
              <h2 className="text-textSecondary-900 lg:text-xl font-semibold text-center">
                Add New Banquet
              </h2>

              <div className="mt-6">
                <form onSubmit={formSubmitted}>
                  {/* Name Input */}
                  <div className="mb-2">
                    <input
                      value={value.title}
                      onChange={(e) =>
                        setValue({
                          ...value,
                          title: e.target.value,
                        })
                      }
                      type="text"
                      required
                      placeholder="Name*"
                      maxLength={15}
                      className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900"
                    />
                  </div>

                  {/* Fixed Capacity Input */}
                  <div className="mb-2">
                    <input
                      value={value.fixedCapacity}
                      onChange={(e) =>
                        setValue({
                          ...value,
                          fixedCapacity: e.target.value,
                        })
                      }
                      type="number"
                      required
                      placeholder="Fixed Capacity*"
                      className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900"
                    />
                  </div>

                  {/* Floating Capacity Input */}
                  <div className="mb-2">
                    <input
                      value={value.floatCapacity}
                      onChange={(e) =>
                        setValue({
                          ...value,
                          floatCapacity: e.target.value,
                        })
                      }
                      type="number"
                      required
                      placeholder="Floating Capacity*"
                      className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900"
                    />
                  </div>

                  {/* Banquets Type */}
                  <div className="mb-6">
                    <select
                      value={value.type}
                      onChange={(e) =>
                        setValue({
                          ...value,
                          type: e.target.value,
                        })
                      }
                      required
                      className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900 bg-transparent">
                      <option>Select Banquete</option>
                      <option value="indoor">Indoor</option>
                      <option value="Outdoor">Outdoor</option>
                      <option value="Indoor & Outdoor">Indoor & Outdoor</option>
                      <option value="Poolside">Poolside</option>
                      <option value="Terrace">Terrace</option>
                    </select>
                  </div>
                  {/* Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-textPrimary-900 text-white py-3 text-xs lg:text-sm font-semibold">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {/* Close Icon */}
              <div className="absolute right-5 top-5">
                <FaXmark
                  className="text-2xl text-red-500 cursor-pointer"
                  onClick={() => setOpenPopup(!openPopup)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banquets;
