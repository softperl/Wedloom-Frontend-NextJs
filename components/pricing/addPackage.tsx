"use client";

import { createPackage, getPackage } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import { cn, handelError, NumberWithCommas } from "@/lib/utils";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiPlus, BiTrash } from "react-icons/bi";
import { FaTrash, FaX } from "react-icons/fa6";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import useUi from "@/lib/hooks/useUi";

type FormValues = {
  name: string;
  price: number;
  services: { value: string }[];
};

export const AddPackage = ({ admin = false }: any) => {
  const { user } = useAuth();
  const [openPopup, setOpenPopup] = useState(false);
  const { refresh, setRefresh } = useUi();
  const [packages, setPackages] = useState<any>([]);

  const {
    control,
    watch,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      price: 0,
      services: [{ value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "services",
  });

  useEffect(() => {
    setValue("services", fields);
  }, []);

  const onSubmit = async (value: FormValues) => {
    try {
      await createPackage({
        id: nanoid(),
        packageName: value?.name,
        packagePrice: value?.price,
        services: value?.services,
      });
      setRefresh(!refresh);
      setOpenPopup(false);
      toast.success("Package Added Successfully!");
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  const getPackagesFn = async () => {
    try {
      const { data } = await getPackage();
      setPackages(data.packages);
      console.log(data);
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  // Remove Banquets Function
  const removePackageFn = async (id: string) => {
    try {
      await removePackageFn(id);
      setRefresh(!refresh);
      toast.success("Deleted Successfully!");
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  useEffect(() => {
    getPackagesFn();
  }, [refresh]);

  useEffect(() => {}, [openPopup]);

  return (
    <div className="w-full h-full">
      <div>
        {/* Heading */}
        <div className="bg-sectionBg-900 px-4 py-2 flex justify-between items-center">
          <h2 className="text-textSecondary-900 lg:text-lg font-medium">
            Packages
          </h2>
          {!admin && (
            <button
              onClick={() => setOpenPopup(true)}
              className={`border border-paginationBg-900 py-1 px-2 text-xs lg:text-sm rounded-sm`}>
              Add Package
            </button>
          )}
        </div>

        <div className="w-full">
          {/* Heading */}
          <div className="px-4 py-3 border-b border-b-paginationBg-900 font-semibold text-textSecondary-900 flex justify-between items-center text-xs lg:text-[15px]">
            <div className="w-3/12">
              <p>Name</p>
            </div>

            <div className="w-3/12">
              <p>Price </p>
            </div>

            <div className="w-3/12 text-end">{!admin && <p>Actions</p>}</div>
          </div>

          {packages?.length > 0 &&
            packages.map((item: any, i: number) => (
              <div
                key={i}
                className="px-4 py-3 border-b border-b-paginationBg-900 font-medium text-textSecondary-900 flex justify-between items-center text-xs lg:text-sm">
                <div className="w-3/12">
                  <p>{item.packageName}</p>
                </div>

                <div className="w-3/12">
                  <p>PKR {NumberWithCommas(item.packagePrice)}</p>
                </div>

                <div className="w-3/12 text-end">
                  {!admin && (
                    <span className="text-textSecondary-900 flex justify-end">
                      <FaTrash
                        onClick={() => removePackageFn(item?.id)}
                        className="cursor-pointer"
                      />
                    </span>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Popup */}
      {openPopup && (
        <div className="w-screen h-screen bg-black bg-opacity-70 fixed top-0 right-0 flex justify-center items-center">
          <div className="max-h-[80vh] overflow-y-auto rounded-md flex lg:items-start items-end gap-2 w-full px-4 lg:w-[40%] flex-col-reverse ">
            <div className="w-full h-max bg-white text-black px-6 py-4 rounded-md">
              <FaX
                onClick={() => setOpenPopup(false)}
                className="float-right w-4 h-4 text-red-500 cursor-pointer"
              />

              {/* Heading */}
              <h2 className="text-textSecondary-900 text-base lg:text-xl font-semibold text-center">
                Add New Package
              </h2>

              <div className="mt-4 lg:mt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Menu Name Input */}
                  <div className="mb-2">
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            required
                            {...field}
                            placeholder="Name"
                            maxLength={15}
                            className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900 placeholder:text-textSecondary-900"
                          />
                        );
                      }}
                    />
                  </div>

                  <div className="flex justify-between gap-2 items-center">
                    <div className="mb-2 w-full">
                      <Controller
                        name="price"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => {
                          return (
                            <input
                              {...field}
                              type="number"
                              required
                              placeholder="Price"
                              className="pl-1 w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-xs lg:text-[13px] font-medium text-textSecondary-900 placeholder:text-textSecondary-900"
                            />
                          );
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    {fields?.map((item, i) => {
                      return (
                        <div key={i} className="">
                          <label className="text-xs">Service {i + 1}</label>
                          <div className="flex flex-nowrap gap-2 mb-2">
                            <Controller
                              name={`services.${i}.value`}
                              control={control}
                              rules={{ required: true }}
                              render={({ field }) => {
                                return (
                                  <input
                                    className="mt-0.5 w-full py-2 px-[22px] text-xs leading-tight border-b border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                                    placeholder={`Service ${i + 1}`}
                                    required
                                    {...field}
                                  />
                                );
                              }}
                            />

                            <div className={cn("flex gap-2 mt-[1.10rem]")}>
                              {fields.length > 1 && (
                                <button type="button" onClick={() => remove(i)}>
                                  <BiTrash />
                                </button>
                              )}
                              {i === fields.length - 1 && (
                                <button
                                  type="button"
                                  onClick={() => append({ value: "" })}>
                                  <BiPlus />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
            </div>
            {/* Close Icon */}
            <div className="-mt-2">
              <i
                className="fa-solid fa-xmark text-3xl text-white cursor-pointer"
                onClick={() => setOpenPopup(!openPopup)}></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
