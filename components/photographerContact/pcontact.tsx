"use client";
import { createConversation, createMessage } from "@/lib/api";
import { handelError } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { formatDate } from "date-fns/format";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { HiMail } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";

const Pcontact = () => {
  const router = useRouter();
  // All States
  const [showContact, setShowContact] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [value, setValue] = useState("+92");
  const [switchInput, setSwitchInput] = useState();
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    date: null,
    details: "",
    functionType: "",
    functionTime: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    contactNumber: false,
    email: false,
    date: false,
    details: false,
    functionType: false,
    functionTime: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDateChange = (date: any) => {
    setFormData((prevState) => ({
      ...prevState,
      date,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      contactNumber: !formData.contactNumber,
      email: !formData.email,
      date: !formData.date,
      details: !formData.details,
      functionType: !formData.functionType,
      functionTime: !formData.functionTime,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const { data } = await createConversation("clzv5jxpt00002yyxisszlwp8");
        await createMessage({
          text: `Name: ${formData?.name} \nContact Number: ${
            formData?.contactNumber
          } \nE-mail: ${formData?.email} \nDate: ${formatDate(
            formData?.date || new Date(),
            "EEEE',' do MMMM YYY"
          )} \nDetails: ${formData?.details} \nFunction Type: ${
            formData?.functionType
          } \nFunction Time: ${formData?.functionTime}`,
          conversationId: data.conversation.id,
        });
        router.push(`/user/inbox/${data.conversation.id}`);
      } catch (error) {
        handelError(error);
      }
    } else {
      handelError("All fill out all fields");
    }
  };

  const toggleMenuContact = () => {
    setShowContact(true);
    setShowMessage(false);
  };

  const toggleMessage = () => {
    setShowMessage(true);
    setShowContact(false);
  };

  const functionType = [
    {
      name: "Mehndi",
    },
    {
      name: "Barat",
    },
    {
      name: "Walima",
    },
    {
      name: "Engagement",
    },
    {
      name: "Nikkah",
    },
    {
      name: "Party",
    },
    {
      name: "Other",
    },
  ];
  return (
    <div className="p_contact bg-white shadow-md">
      <div className="p_contact_button flex flex-wrap lg:justify-around gap-8 justify-center items-center lg:px-4 py-6 my-4">
        <div className="send">
          <button
            className="text-white lg:text-lg text-sm bg-textPrimary-900 lg:py-3 flex items-center flex-nowrap p-4 rounded-full hover:bg-btnHover-900 duration-200"
            onClick={toggleMessage}>
            <div className="flex"></div>
            <HiMail className="mr-2" />
            Send Message
          </button>
        </div>
        <div className="view">
          <button
            className="text-white lg:text-lg text-sm bg-greenBG-900 lg:py-3 flex items-center flex-nowrap rounded-full hover:bg-greenHover-900 duration-200 p-4"
            onClick={toggleMenuContact}>
            <IoMdCall className="mr-2" />
            View Contact
          </button>
        </div>
      </div>
      <div className="my-6 pb-6 text-center text-textSecondary-900">
        <span className="bg-demandBg-900 text-xs p-1 mr-3">In High Demand</span>{" "}
        <span>15 exquiries last week</span>
      </div>

      {/* Message Form */}
      {showMessage && (
        <div className="pContact_modal border-t border-textPrimary-900">
          <div className="pContact_modal_Content px-4 py-4">
            <h1 className="text-textSecondary-900 font-semibold text-lg">
              Hello Dear,
            </h1>
            <form className="form_fields my-6" onSubmit={handleSubmit}>
              <div className="frist_row flex gap-8 justify-between my-4">
                <div className="name w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full outline-none pb-2 focus:border-b focus:border-textPrimary-900 border-b border-newBorder-900"
                  />
                </div>
                <div className="number w-full">
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number*"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full outline-none pb-2 focus:border-b focus:border-textPrimary-900 border-b border-newBorder-900"
                  />
                </div>
              </div>
              <div className="second_row flex gap-8 justify-between my-8 w-full">
                <div className="name w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full outline-none pb-2 focus:border-b focus:border-textPrimary-900 border-b border-newBorder-900"
                  />
                </div>
                <div className="date w-full border-b">
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Function Date"
                    className="outline-none border-none"
                  />
                </div>
              </div>
              <div className="third_row mt-8 mb-4">
                <div className="name w-full">
                  <input
                    type="text"
                    name="details"
                    placeholder="Details About Your Wedding*"
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full outline-none pb-2 focus:border-b focus:border-textPrimary-900 border-b border-newBorder-900"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 my-8">
                <div className="w-full">
                  <h5 className="text-lg text-textSecondary-900 font-semibold">
                    Function Type
                  </h5>
                  <div className="flex items-center gap-4 lg:gap-6 mt-4 flex-wrap">
                    {/* Replace this with your functionType array */}
                    {functionType?.map((item, i) => (
                      <label key={i}>
                        <input
                          type="radio"
                          name="functionType"
                          value={item?.name}
                          checked={formData.functionType === item?.name}
                          onChange={handleChange}
                          className="scale-150 accent-textPrimary-900"
                        />
                        <span className="pl-2 font-medium text-textSecondary-900">
                          {item?.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="w-full text-start">
                  <h5 className="text-lg text-textSecondary-900 font-semibold">
                    Function Time
                  </h5>
                  <div className="flex items-start gap-4 lg:gap-6 mt-4 flex-wrap flex-col lg:flex-row">
                    <div>
                      <input
                        type="radio"
                        id="evening"
                        name="functionTime"
                        value="Evening"
                        checked={formData.functionTime === "Evening"}
                        onChange={handleChange}
                        className="scale-150 accent-textPrimary-900"
                      />
                      <label
                        className="pl-2 font-medium text-textSecondary-900"
                        htmlFor="evening">
                        Evening
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="day"
                        name="functionTime"
                        value="Day"
                        checked={formData.functionTime === "Day"}
                        onChange={handleChange}
                        className="scale-150 accent-textPrimary-900"
                      />
                      <label
                        className="pl-2 font-medium text-textSecondary-900"
                        htmlFor="day">
                        Day
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="button mb-4">
                <button
                  type="submit"
                  className="w-full bg-textPrimary-900 py-4 text-white font-semibold text-lg">
                  Send Message
                </button>
              </div>

              <div className="text text-center">
                <span className="text-sm text-dateColor-900">
                  Complete information ensures you get accurate and timely
                  vendor responses
                </span>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contact Form*/}
      {showContact && (
        <div className="message border-t border-textPrimary-900">
          <div className="message_Content px-4 py-8">
            <h1 className="text-textSecondary-900 font-semibold text-base">
              Verify you phone number to contact the vendor
            </h1>
            <div className="form_fields">
              <div className="frist_row flex gap-8 justify-between my-4">
                <div className="name w-full">
                  <label className="text-textPrimary-900 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="mt-2 w-full outline-none focus:border-b focus:border-textPrimary-900  border-b border-paginationBg-900"
                  />
                </div>
                <div className="number w-full">
                  <label className="text-textPrimary-900 font-medium">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="mt-2 w-full outline-none focus:border-b focus:border-textPrimary-900  border-b border-paginationBg-900"
                  />
                </div>
              </div>

              <div className="button mt-10">
                <button
                  type="submit"
                  className="w-full duration-300 bg-greenBG-900 hover:bg-greenHover-900 py-4 text-white font-semibold text-lg">
                  View Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pcontact;
