"use client";

import { vendorProfileInfo } from "@/lib/api";
import { cn, handelError } from "@/lib/utils";
import AppReactDraftWysiwyg from "@/libs/styles/AppReactDraftWysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6";
import { AddressPopup } from "../popups/addressPopup";
import toast from "react-hot-toast";

const calculateProfileCompletion = (profileData: any) => {
  // Define field groups and their weights
  const group1Fields = [
    "brandName",
    "categoryName",
    "contactPersonName",
    "additionalMail",
    "contactNumber",
    "website",
    "facebook",
    "instagram",
    "youtube",
    "addInfo",
    "city",
    "address",
  ];
  const group2Fields = ["additionalData"];
  const group3Fields = ["projects"];

  const group1Weight = 0.2; // 20%
  const group2Weight = 0.65; // 65%
  const group3Weight = 0.15; // 15%

  // Helper function to check if a field is filled
  const isFieldFilled = (field: any) =>
    field !== null && field !== undefined && field !== "";

  // Calculate completion for group 1
  const filledGroup1Fields = group1Fields.filter((field) =>
    isFieldFilled(profileData[field])
  );
  const group1Completion =
    (filledGroup1Fields.length / group1Fields.length) * group1Weight;

  // Calculate completion for group 2
  const filledGroup2Fields = group2Fields.filter((field) =>
    isFieldFilled(profileData[field])
  );
  const group2Completion =
    (filledGroup2Fields.length / group2Fields.length) * group2Weight;

  // Calculate completion for group 3
  const filledGroup3Fields = group3Fields.filter((field) =>
    isFieldFilled(profileData[field])
  );
  const group3Completion =
    (filledGroup3Fields.length / group3Fields.length) * group3Weight;

  // Total profile completion percentage
  const totalCompletion =
    (group1Completion + group2Completion + group3Completion) * 100;

  return {
    totalCompletion,
    filledFieldsCount: {
      group1: filledGroup1Fields.length,
      group2: filledGroup2Fields.length,
      group3: filledGroup3Fields.length,
    },
    totalFieldsCount: {
      group1: group1Fields.length,
      group2: group2Fields.length,
      group3: group3Fields.length,
    },
  };
};

const InformationContent = ({ data }: any) => {
  const { vendorProfile, vendorInfo, questions } = data;
  const [locationPopUp, setLocationPopUp] = useState(false);
  const [valueEditor, setValueEditor] = useState(EditorState.createEmpty());
  const [formData, setFormData] = useState<any>({});
  const [additionalData, setAdditionalData] = useState<any>({});
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const [numberBox, setNumberBox] = useState([{ number: "9566423200" }]);

  const defaultValues = useMemo(
    () => ({
      email: vendorProfile?.email,
      brandName: vendorProfile?.brand,
      categoryName: vendorProfile?.vendorType,
      contactPersonName: vendorInfo?.contactPersonName,
      additionalMail: vendorInfo?.additionalMail,
      contactNumber: vendorInfo?.contactNumber,
      website: vendorInfo?.website,
      facebook: vendorInfo?.facebook,
      instagram: vendorInfo?.instagram,
      youtube: vendorInfo?.youtube,
      city: vendorProfile?.city,
      address: vendorInfo?.address,
      addInfo: vendorInfo?.addInfo,
      additionalData: vendorInfo?.additionalData,
    }),
    [vendorInfo, vendorProfile]
  );

  const { totalCompletion, filledFieldsCount, totalFieldsCount } =
    calculateProfileCompletion({
      brandName: vendorProfile?.brand,
      categoryName: vendorProfile?.vendorType,
      contactPersonName: vendorInfo?.contactPersonName,
      additionalMail: vendorInfo?.additionalMail,
      contactNumber: vendorInfo?.contactNumber,
      website: vendorInfo?.website,
      facebook: vendorInfo?.facebook,
      instagram: vendorInfo?.instagram,
      youtube: vendorInfo?.youtube,
      city: vendorProfile?.city,
      address: vendorInfo?.address,
      addInfo: vendorInfo?.addInfo,
      additionalData: vendorInfo?.additionalData,
      projects: vendorInfo?.projects,
    });

  console.log({ totalCompletion, filledFieldsCount, totalFieldsCount });

  const { control, handleSubmit, setValue } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: any) => {
    try {
      await vendorProfileInfo({
        brandName: vendorProfile?.brand,
        categoryName: vendorProfile?.vendorType,
        contactPersonName: data.contactPersonName,
        additionalMail: data.additionalMail,
        contactNumber: data.contactNumber,
        website: data.website,
        facebook: data.facebook,
        instagram: data.instagram,
        youtube: data.youtube,
        city: data.city,
        address: data.address,
        addInfo: data.addInfo,
        additionalData: additionalData,
      });
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
      handelError("Something went wrong");
    }
  };

  // Add Dynamic Number Boxes
  const addNumberBox = () => {
    setNumberBox([...numberBox, { number: "" }]);
  };

  // Remove Input Field Function
  const removeNumberBox = (index: number) => {
    const list = [...numberBox];
    list.splice(index, 1);
    setNumberBox(list);
  };

  // Handle Number Box Values
  const handleNumberChange = (e: any, index: number) => {
    const { name, value } = e.target;
    const list: any = [...numberBox];
    list[index][name] = value;
    setNumberBox(list);
  };

  const handleChange = (field: any, event: any) => {
    const value =
      field.inputType === "File" ? event.target.files[0] : event.target.value;
    setFormData({
      ...formData,
      [field.labelName]: value,
    });
  };

  //@ts-ignore
  const handleCheckboxChange = (option: any, isChecked: boolean) => {
    let updatedOptions;
    if (isChecked) {
      updatedOptions = [...selectedOptions, option];
    } else {
      updatedOptions = selectedOptions.filter((opt) => opt !== option);
    }
    setSelectedOptions(updatedOptions);
    setAdditionalData({
      ...additionalData,
      others: updatedOptions,
    });
  };

  const handleChangeAdditional = (field: any, event: any) => {
    const value =
      field.inputType === "File" ? event.target.files[0] : event.target.value;

    setAdditionalData({
      ...additionalData,
      [field.labelName]: value,
    });
  };

  return (
    <div className="w-full">
      {/* ProgressBar of Profile Completation */}
      <div className="h-full w-full px-2 lg:px-6 my-4">
        {/* Heading */}
        <span className="text-textSecondary-900">Profile Completation</span>
        <div className="bg-white overflow-hidden p-[6px] shadow-md border border-textPrimary-900 rounded-[4px] mt-2">
          <div className="relative h-7 flex items-center justify-center">
            <div
              style={{ width: `${totalCompletion}%` }}
              className="absolute top-0 bottom-0 left-0  bg-textPrimary-900"></div>
            <div
              className={cn(
                "relative text-textSecondary-900 font-medium text-sm",
                totalCompletion > 50 && "text-white"
              )}>
              {Math.floor(totalCompletion)}% COMPLETE
            </div>
          </div>
        </div>

        {/* Complete Profile Steps */}
        <div className="border border-paginationBg-900 mt-6 pt-4 px-4 pb-6 rounded-md">
          <h2 className="lg:text-lg text-textSecondary-900 font-medium">
            Complete your profile by:{" "}
          </h2>

          {/* STeps */}
          <div className="flex flex-col gap-2 mt-2 lg:pl-10 pl-4">
            <span className="text-[13px] text-textSecondary-900">
              Answering your FAQs
            </span>
            <span className="text-[13px] text-textSecondary-900">
              Linking your profile to your Facebook page/ website
            </span>
            <span className="text-[13px] text-textSecondary-900">
              Adding images to your portfolio
            </span>
            <span className="text-[13px] text-textSecondary-900">
              Get featured in a Real Wedding. Email your work to
              submissions@wedmegood.com
            </span>
            <span className="text-[13px] text-textSecondary-900">
              Upload your first album to get visibility on our inspiration
              gallery and social media handles
            </span>
            <span className="text-[13px] text-textSecondary-900">
              Invite clients to review your work
            </span>
          </div>
        </div>
      </div>
      {/* Form Content */}
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Heading */}
          <div className="bg-sectionBg-900 px-2 py-3">
            <h2 className="text-textSecondary-900 lg:text-lg">
              Personal Information
            </h2>
          </div>
          {/* Additional Input Fields */}
          <div className="additional_inputs w-full py-6 lg:px-8 px-2">
            {/* First Fields */}
            <div className="w-full">
              {/* Login ID */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="loginid"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Login email ID
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <Controller
                    control={control}
                    name="email"
                    disabled
                    render={({ field }) => (
                      <input
                        {...field}
                        className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md w-full"
                      />
                    )}
                  />
                </div>
              </div>

              {/* Brand Name*  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="brand"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Brand Name*
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <Controller
                    control={control}
                    name="brandName"
                    disabled
                    render={({ field }) => (
                      <input
                        {...field}
                        className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md w-full"
                      />
                    )}
                  />
                </div>
              </div>

              {/* Category Name*  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="category"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Category Name*
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <Controller
                    control={control}
                    name="categoryName"
                    disabled
                    render={({ field }) => (
                      <input
                        {...field}
                        className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md w-full"
                      />
                    )}
                  />
                </div>
              </div>

              {/* Contact person name *  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor=""
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Contact person name{" "}
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <Controller
                    control={control}
                    name="contactPersonName"
                    render={({ field }) => (
                      <input
                        {...field}
                        className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md w-full"
                      />
                    )}
                  />
                </div>
              </div>

              {/* Additional email ID   */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="additionalMail"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Additional email ID
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border py-1 lg:px-4 px-2">
                  <Controller
                    control={control}
                    name="additionalMail"
                    render={({ field }) => (
                      <input
                        {...field}
                        className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md w-full"
                      />
                    )}
                  />
                </div>
              </div>

              {/* Contact Number   */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="contactnumber"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Contact number*
                  </label>
                </div>

                <div className="lg:w-8/12 w-full">
                  {/* Main Div */}
                  <div className="w-full flex lg:flex-nowrap flex-wrap justify-between items-start">
                    <div className="w-full lg:w-10/12">
                      {/* Input Field */}
                      {numberBox.map((singleNumberBox, i) => (
                        <div
                          key={i}
                          className="w-full flex justify-between items-center gap-3 mb-2 lg:mb-0">
                          <div className="w-full flex lg:flex-nowrap flex-wrap border border-t-0">
                            {/* Country */}
                            <div className="bg-[#efefef] w-full lg:w-2/12 flex justify-center items-center">
                              <span className="text-xs py-1">Pak(+92)</span>
                            </div>

                            {/* Number */}
                            <div className="w-full lg:w-5/12 flex items-center">
                              <input
                                name="number"
                                id="number"
                                type="text"
                                value={singleNumberBox.number}
                                onChange={(e) => handleNumberChange(e, i)}
                                className="bg-transparent px-2 py-1 outline-none border-none text-textSecondary-900 text-[13px] font-semibold rounded-md"
                              />
                            </div>

                            {/* Select Box */}
                            <div className="w-full lg:w-5/12">
                              <select className="w-full px-4 py-2 bg-[#efefef] text-xs border-none outline-none">
                                <option value="mobile">Mobile</option>
                                <option value="landline">Landline</option>
                              </select>
                            </div>
                          </div>

                          {/* Close */}
                          {numberBox.length >= 2 && (
                            <span
                              className="text-textPrimary-900"
                              onClick={() => removeNumberBox(i)}>
                              <FaCircleXmark className="w-4 h-4 cursor-pointer" />
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Clear and add more */}
                    <div className="w-max lg:w-2/12 flex justify-end px-2 mt-2">
                      {numberBox.length < 5 && (
                        <span
                          className="flex items-center text-xs text-textPrimary-900 font-semibold cursor-pointer"
                          onClick={addNumberBox}>
                          <FaCirclePlus className="w-4 h-4 mr-2" /> ADD MORE
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Fields */}
            <div className="w-full mt-8">
              {/* Website link  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="websiteLink"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Website link
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <Controller
                    control={control}
                    name="website"
                    render={({ field }) => (
                      <input
                        {...field}
                        className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md w-full"
                      />
                    )}
                  />
                </div>
              </div>

              {/* Facebook Url  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="facebook"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Facebook url
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <Controller
                    control={control}
                    name="facebook"
                    render={({ field }) => (
                      <input
                        {...field}
                        className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md w-full"
                      />
                    )}
                  />
                </div>
              </div>

              {/* Insta*  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="instagram"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Instagram url
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <Controller
                    control={control}
                    name="instagram"
                    render={({ field }) => (
                      <input
                        {...field}
                        className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md w-full"
                      />
                    )}
                  />
                </div>
              </div>

              {/* Yt & Vimeo *  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="ytLink"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Youtube/Vimeo url
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border py-1 lg:px-4 px-2">
                  <Controller
                    control={control}
                    name="youtube"
                    render={({ field }) => (
                      <input
                        {...field}
                        className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md w-full"
                      />
                    )}
                  />
                </div>
              </div>

              {/* Additional Information  */}
              <div className="w-full my-8">
                <div className="w-full">
                  <label
                    htmlFor="additionalInfo"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900 flex flex-col">
                    <span>Additional Information</span>
                    <span className="text-[10px]">
                      (To update your description, please send a mail to
                      vendors@weedloom.com)
                    </span>
                  </label>
                </div>
                <div className="mt-2 lg:mt-0 py-1 h-auto">
                  <AppReactDraftWysiwyg
                    editorState={valueEditor}
                    onEditorStateChange={(data) => {
                      const blocks = convertToRaw(
                        data.getCurrentContent()
                      ).blocks;
                      const value = blocks
                        .map(
                          (block) => (!block.text.trim() && "\n") || block.text
                        )
                        .join("\n");

                      setValueEditor(data);
                      setValue("addInfo", value);
                    }}
                  />
                </div>
              </div>

              {/* City *  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="city"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    City
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2 bg-[#efefef] ">
                  <select
                    id="city"
                    className="w-full bg-transparent outline-none text-textSecondary-900 text-xs lg:text-sm"
                    value={vendorProfile?.city}
                    disabled>
                    {/* {cities?.map((city: any, i: number) => ( */}
                    <option disabled value={vendorProfile?.city}>
                      {vendorProfile?.city}
                    </option>
                    {/* ))} */}
                  </select>
                </div>
              </div>

              {/* Address  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="address"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Address
                  </label>
                </div>
                <div className="w-full lg:w-8/12 py-1 lg:px-4 px-2">
                  <p
                    onClick={() => setLocationPopUp(true)}
                    className="text-xs lg:text-sm font-bold text-textPrimary-900 cursor-pointer">
                    Add a Location
                  </p>
                  {locationPopUp && (
                    <AddressPopup closeModal={() => setLocationPopUp(false)} />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details Heading*/}
          <div className="bg-sectionBg-900 px-2 py-3">
            <h2 className="text-textSecondary-900 lg:text-lg">
              Additional Details
            </h2>
          </div>

          {/* Additional Details Boxes */}
          <div className="w-full mt-2 mb-8 lg:px-8 px-2">
            {/* Booked Package */}
            {questions?.map((item: any, index: number) => (
              <div key={index} className="border-b py-2 lg:pt-4 lg:pb-6">
                <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                  {item?.question}
                </p>
                {item?.questionType === "Radio" && (
                  <div className="mt-2 pl-4">
                    {item?.others?.map((option: any, i: number) => {
                      return (
                        <div key={i} className="">
                          <input
                            className="accent-textPrimary-900"
                            type="radio"
                            id={`${item?.question}-${i}`}
                            name={item?.others}
                            value={option?.value}
                            onChange={(e) => handleChangeAdditional(item, e)}
                          />
                          <label
                            className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                            htmlFor={`${item?.question}-${i}`}>
                            {option?.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                )}
                {item?.questionType === "Multiple_Choice" && (
                  <div className="mt-2 pl-4">
                    {item?.others?.map((option: any, i: number) => (
                      <div className="mb-1" key={i}>
                        <input
                          className="accent-textPrimary-900"
                          type="checkbox"
                          id={`${item?.question}-${i}`}
                          name={option?.value}
                          onChange={(e) =>
                            handleCheckboxChange(option, e.target.checked)
                          }
                        />
                        <label
                          className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                          htmlFor={`${item?.question}-${i}`}>
                          {option?.value}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
                {item?.inputType === "Text_Number" &&
                  item?.questionType !== "Multiple_Choice" &&
                  item?.questionType !== "Radio" && (
                    <input
                      className="border mt-2 outline-none text-xs lg:text-sm px-2 py-[2px] w-full"
                      type="text"
                      name={item?.question}
                      onChange={(e) => handleChangeAdditional(item, e)}
                    />
                  )}
                {item?.inputType === "Number" && (
                  <input
                    className="border mt-2 outline-none text-xs lg:text-sm px-2 py-[2px] w-full"
                    type="number"
                    name={item?.question}
                    onChange={(e) => handleChangeAdditional(item, e)}
                  />
                )}
                {/* {item?.inputType === "Textarea" && (
                  <div className="mt-4">
                    <textarea
                      rows={5}
                      className="text-xs lg:text-sm outline-none border w-full px-2 py-1"
                      name={item?.question}
                      value={formData[item?.question] || ""}
                      onChange={(e) => handleChangeAdditional(item, e)}
                    ></textarea>
                  </div>
                )} */}
                {/* {item?.inputType === "Date" && (
                  <input
                    type="date"
                    name={item?.question}
                    onChange={(e) => handleChangeAdditional(item, e)}
                  />
                )} */}
                {/* {item?.inputType === "Select" && (
                  <select
                    className="text-sm mt-2"
                    name={item?.question}
                    // onChange={(e) => handleChangeAdditional(item, e)}
                  >
                    {item?.others?.map((option: any, idx: number) => (
                      <option key={idx} className="text-sm">
                        {option?.value}
                      </option>
                    ))}
                  </select>
                )} */}
                {/* {item?.inputType === "File" && (
                  <input
                    type="file"
                    name={item?.question}
                    onChange={(e) => handleChangeAdditional(item, e)}
                  />
                )} */}
              </div>
            ))}
          </div>

          {/* Save Button */}
          <div className="w-full pb-8 px-8 text-end">
            <button
              type="submit"
              className="w-4/12 py-[6px] bg-textPrimary-900 text-[15px] text-white">
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InformationContent;
