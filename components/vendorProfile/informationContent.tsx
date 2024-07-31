"use client";

import { useEffect, useState } from "react";
import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6";
import { EditorState } from "draft-js";
import AppReactDraftWysiwyg from "@/libs/styles/AppReactDraftWysiwyg";
import { AddressPopup } from "../popups/addressPopup";
import { getQuestions } from "@/lib/api";
import useUi from "@/lib/hooks/useUi";
import useAuth from "@/lib/hooks/useAuth";

const InformationContent = () => {
  const { cities } = useUi();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  console.log(questions);

  const [locationPopUp, setLocationPopUp] = useState(false);
  const [value, setValue] = useState(EditorState.createEmpty());
  const [formData, setFormData] = useState<any>({
    name: "",
    personName: "",
    additionalMail: "",
    contactNumber: "",
    numberType: "",
    website: "",
    facebook: "",
    instagram: "",
    youtube: "",
    city: "",
    address: "",
  });

  const [numberBox, setNumberBox] = useState([{ number: "9566423200" }]);

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
      [field.label]: value,
    });
  };

  const fetchData = async () => {
    try {
      const { data } = await getQuestions();
      setQuestions(data.questions);
      console.log(data.questions);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full">
      {/* ProgressBar of Profile Completation */}
      <div className="h-full w-full px-2 lg:px-6 my-4">
        {/* Heading */}
        <span className="text-textSecondary-900">Profile Completation</span>
        <div className="bg-white overflow-hidden p-[6px] shadow-md border border-textPrimary-900 rounded-[4px] mt-2">
          <div className="relative h-7 flex items-center justify-center">
            <div className="absolute top-0 bottom-0 left-0 w-[10%] bg-textPrimary-900"></div>
            <div className="relative text-textSecondary-900 font-medium text-sm">
              10% COMPLETE
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
        <form>
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
                  <input
                    id="loginid"
                    type="text"
                    placeholder="User@gmail.com"
                    disabled
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
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
                  <input
                    id="brand"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
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
                  <input
                    id="category"
                    type="text"
                    placeholder="Photographer"
                    disabled
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
                  />
                </div>
              </div>

              {/* Contact person name *  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="contactname"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Contact person name{" "}
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <input
                    id="contactname"
                    type="text"
                    placeholder=""
                    value={formData.personName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        personName: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
                  />
                </div>
              </div>

              {/* Additional email ID   */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="additionalmail"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    Additional email ID
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border py-1 lg:px-4 px-2">
                  <input
                    id="additionalmail"
                    type="email"
                    placeholder=""
                    value={formData.additionalMail}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalMail: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
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
                  <input
                    id="websiteLink"
                    type="text"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        website: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
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
                  <input
                    id="facebook"
                    type="text"
                    value={formData.facebook}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        facebook: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
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
                  <input
                    id="instagram"
                    type="text"
                    value={formData.instagram}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        instagram: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
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
                  <input
                    id="ytLink"
                    type="text"
                    placeholder=""
                    value={formData.youtube}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        youtube: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
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
                    editorState={value}
                    onEditorStateChange={(data) => setValue(data)}
                  />
                </div>
              </div>

              {/* City *  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="city"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    City*(Choose your base city here)
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2 bg-[#efefef] ">
                  <select
                    id="city"
                    className="w-full bg-transparent outline-none text-textSecondary-900 text-xs lg:text-sm"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        city: e.target.value,
                      })
                    }>
                    {cities?.map((city: any, i: number) => (
                      <option value={city?.name} key={i}>
                        {city?.name}
                      </option>
                    ))}
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

            {questions?.map((q: any, index: number) => {
              const d = [
                {
                  option: "sjsjj",
                },
                {
                  option: "yriiwr",
                },
                {
                  option: "lroem",
                },
              ];

              return (
                <div key={index} className="border-b py-2 lg:pt-4 lg:pb-6">
                  <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                    {q?.label}
                  </p>
                  {q?.inputType === "Radio" && (
                    <div className="mt-2 pl-4">
                      {q?.others?.map((item: any, i: number) => {
                        return (
                          <div key={i}>
                            <input
                              className="accent-textPrimary-900"
                              type="radio"
                              id={item}
                              name={item}
                              value={item}
                            />
                            <label
                              className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                              htmlFor="one_day">
                              {item}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {q?.inputType === "Textarea" && (
                    <div className="mt-4">
                      <textarea
                        rows={5}
                        className="text-xs lg:text-sm outline-none border w-full px-2 py-1"></textarea>
                    </div>
                  )}
                  {q?.inputType === "Checkbox" && (
                    <div className="mt-2 pl-4">
                      {q?.others?.map((item: any, i: number) => {
                        return (
                          <div className="mb-1" key={i}>
                            <input
                              className="accent-textPrimary-900"
                              type="checkbox"
                              id={item}
                              checked={formData.candid}
                              value={formData.candid}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  candid: e.target.checked,
                                })
                              }
                            />
                            <label
                              className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                              htmlFor={item}>
                              {item}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {q?.inputType === "Text" && (
                    <input
                      className="border mt-2 outline-none text-xs lg:text-sm px-2 py-[2px] w-full"
                      type="text"
                      onChange={(e) => handleChange(q, e)}
                    />
                  )}
                  {q?.inputType === "Number" && (
                    <input
                      className="border mt-2 outline-none text-xs lg:text-sm px-2 py-[2px] w-full"
                      type="number"
                      onChange={(e) => handleChange(q, e)}
                    />
                  )}
                  {q?.inputType === "Date" && (
                    <input type="date" onChange={(e) => handleChange(q, e)} />
                  )}
                  {q?.inputType === "Select" && (
                    <select onChange={(e) => {}} className="text-sm mt-2">
                      {q?.others?.map((option: any, idx: number) => (
                        <option key={idx} value={option} className="text-sm">
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  {q?.inputType === "File" && (
                    <input type="file" onChange={(e) => handleChange(q, e)} />
                  )}
                </div>
              );
            })}
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
