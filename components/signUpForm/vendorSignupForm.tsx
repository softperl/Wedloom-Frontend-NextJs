"use client";
import React, { useEffect } from "react";
import OthersLogin from "@/components/othersLoginButton/othersLogin";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// import required modules
// import { Pagination, Autoplay } from "swiper";
import AuthPhotos from "@/components/signupCarouselItem/authPhotos";
import { useState } from "react";
import MobileSignupLoginBanner from "@/components/signuploginBanner/mobileSignupLoginBanner";
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { InputField } from "@/components/global/formFields/inputField";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn, handelError } from "@/lib/utils";
import { signIn, signUp } from "@/lib/api";
import toast from "react-hot-toast";
import { BiChevronUp } from "react-icons/bi";
import useUi from "@/lib/hooks/useUi";

const formSchema = z.object({
  name: z.string(),
  brand: z.string(),
  city: z.string().optional(),
  vendorType: z.string().optional(),
  email: z.string().email("Email is required"),
  phoneNumber: z.string(),
  password: z.string().min(6, "Password is required"),
});

type VendorSignUpFormValues = z.infer<typeof formSchema>;

const VendorSignupForm = () => {
  const { cities, vendorCategories } = useUi();
  const defaultValues: Partial<VendorSignUpFormValues> = {
    email: undefined,
    password: undefined,
    phoneNumber: undefined,
    name: undefined,
    brand: undefined,
    city: undefined,
    vendorType: undefined,
  };

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: Partial<VendorSignUpFormValues>) => {
    try {
      await signUp({
        email: data.email,
        password: data.password,
        phone: data.phoneNumber,
        name: data.name,
        brand: data.brand,
        city: "",
        vendorType: "Photograper",
        role: "Vendor",
      });
      toast.success("Please check your email for verify!");
      router.push("/signin");
    } catch (error) {
      handelError(error);
    }
  };

  // Password Show State
  const [showPass, setShowPass] = useState(false);

  //   Number Input Initial Value
  const [numberValue, setNumberValue] = useState("+92");

  // Dropdown City Open States
  const [cityOpen, setCityOpen] = useState(false);
  const [value, setValue] = useState("");

  // Dropdown City Open States
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryValue, setCategoryValue] = useState("");

  // Toggle State Function
  const clickedCity = () => {
    if (value) {
      setValue("");
      setCityOpen(!cityOpen);
    }
    setCityOpen(!cityOpen);
    setCategoryOpen(false);
  };

  const clickedVendor = () => {
    setCategoryOpen(!categoryOpen);
    setCityOpen(false);
  };

  const changeCategoryValue = (e: any) => {
    setCategoryValue(e.target.value);
  };

  //   Input Value Change
  const selectCityValue = (option: any) => {
    setValue(option);
    setCityOpen(!cityOpen);
  };

  const selectCategoryValue = (option: any) => {
    setCategoryValue(option);
    setCategoryOpen(!categoryOpen);
  };

  //   Navigation
  const router = useRouter();

  // Outside Click Off dropdown
  const ref = useRef<any>();
  const ref2 = useRef<any>();

  useEffect(() => {
    const closePopup = (e: any) => {
      if (!ref.current.contains(e.target) && !ref2.current.contains(e.target)) {
        setCityOpen(false);
        setCategoryOpen(false);
      }
    };
    document.addEventListener("click", closePopup);
    return () => {
      document.removeEventListener("click", closePopup);
    };
  }, [cityOpen, categoryOpen]);

  return (
    <div className="contact_form">
      {/* Mobile Banner */}
      <div className="block lg:hidden">
        <MobileSignupLoginBanner image="https://images.pexels.com/photos/1345352/pexels-photo-1345352.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      </div>
      <div className="container mx-auto">
        {/* Desktop Part */}
        <div className="flex justify-center lg:px-6 lg:my-8">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* Left */}
            <div className="w-full h-full lg:w-6/12 bg-white lg:shadow-lg shadow-sm p-5 lg:p-16 rounded-l-xl">
              {/* <div className="already lg:text-start text-center">
                <h3 className="text-textSecondary-900 text-sm">
                  Already have an account?{" "}
                  <span className="text-textPrimary-900 cursor-pointer font-medium">
                    <Link href="/vendor-signin">Sign in </Link>
                  </span>
                </h3>
              </div> */}

              {/* Welcome Text */}
              <div className="my-4 lg:text-start text-center">
                <h1 className="lg:text-3xl text-2xl font-bold text-textSecondary-900">
                  Business Account
                  <span className="text-textPrimary-900"> Sign Up</span>
                </h1>
              </div>

              {/* Paragraph */}
              <p className="text-sm text-textSecondary-900 leading-6 lg:text-start text-center">
                <span className="text-textPrimary-900">
                  if you don&apos;t have any account{" "}
                </span>{" "}
                please create it from here for get access to your dashboard
              </p>

              {/* Form */}
              <form className="mt-10 bg-white rounded">
                {/* Full Name */}
                <div className="mb-6">
                  <InputField
                    control={control}
                    name="name"
                    label="Full Name"
                    type="text"
                    placeholder="Your Full Name*"
                  />
                </div>

                {/* Brand Name */}
                <div className="mb-6">
                  <InputField
                    control={control}
                    name="brand"
                    label="Brand Name"
                    type="text"
                    placeholder="Your Brand Name*"
                  />
                </div>

                {/* City Name */}
                <div className="mb-6" ref={ref}>
                  <div className="w-full relative">
                    <div className="labels bg-white px-2 absolute left-[15px] top-[-15%]">
                      <label
                        className="block text-base font-bold text-textPrimary-900"
                        htmlFor="city">
                        Select City
                      </label>
                    </div>
                    <div className="input_container">
                      <div onClick={clickedCity}>
                        <input
                          className="w-full py-6 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold cursor-pointer"
                          id="brand"
                          type="text"
                          value={value}
                          placeholder="Select Your City"
                          required
                          onChange={(e) => setValue(e.target.value)}
                        />
                        <div className="absolute right-5 top-6">
                          <span className="text-textPrimary-900 cursor-pointer">
                            <BiChevronUp
                              className={cn(
                                "duration-300 transition-all",
                                !cityOpen && "rotate-180"
                              )}
                            />
                          </span>
                        </div>
                      </div>
                      {cityOpen && (
                        <div className="dropdown border border-t-0 border-textPrimary-900 box-border absolute w-full z-30">
                          <div className="max-h-[200px] overflow-scroll">
                            {cities
                              ?.filter((item: any) =>
                                item?.name?.toLocaleLowerCase().includes(value)
                              )
                              ?.map((opt: any) => {
                                return (
                                  <div
                                    className="bg-white text-black p-2 flex items-center cursor-pointer hover:bg-gray-300 text-sm"
                                    key={opt?.id}
                                    onClick={() => selectCityValue(opt?.name)}>
                                    {opt?.name}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Vendor Type Select */}
                <div className="mb-6" ref={ref2}>
                  <div className="w-full relative">
                    <div className="labels bg-white px-2 absolute left-[15px] top-[-15%]">
                      <label
                        className="block text-base font-bold text-textPrimary-900"
                        htmlFor="category">
                        Vendor Type
                      </label>
                    </div>
                    <div className="input_container">
                      <div onClick={clickedVendor}>
                        <input
                          className="w-full py-6 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold cursor-pointer"
                          id="brand"
                          type="text"
                          placeholder="Select Vendor Type*"
                          value={categoryValue}
                          required
                          onChange={changeCategoryValue}
                        />
                        <div className="absolute right-5 top-6">
                          <span className="text-textPrimary-900 cursor-pointer">
                            <BiChevronUp
                              className={cn(
                                "duration-300 transition-all",
                                !categoryOpen && "rotate-180"
                              )}
                            />
                          </span>
                        </div>
                      </div>
                      {categoryOpen && (
                        <div className="dropdown border border-t-0 border-textPrimary-900 box-border absolute w-full z-30">
                          <div className="max-h-[200px] overflow-scroll">
                            {vendorCategories
                              ?.filter((item: any) =>
                                item?.name
                                  .toLocaleLowerCase()
                                  .includes(categoryValue)
                              )
                              ?.map((opt: any) => (
                                <div
                                  className="bg-white text-black p-2 flex items-center cursor-pointer hover:bg-gray-300 text-sm"
                                  key={opt?.id}
                                  onClick={() =>
                                    selectCategoryValue(opt?.name)
                                  }>
                                  {opt?.name}
                                </div>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <InputField
                    control={control}
                    name={"email"}
                    label={"E-mail"}
                    placeholder="example@gmail.com"
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-6">
                  <InputField
                    control={control}
                    name={"phoneNumber"}
                    label={"Number"}
                    placeholder="Your Contact Number"
                    type="number"
                  />
                </div>

                {/* Password */}
                <div className="mb-6">
                  <InputField
                    control={control}
                    name={"password"}
                    label={"Password"}
                    type={showPass ? "text" : "password"}
                    placeholder="1234#$%*"
                  />
                </div>

                {/* Buttons */}
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-5 font-bold text-white bg-textPrimary-900 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit(onSubmit)}>
                    Create an account
                  </button>
                </div>
              </form>

              {/* Login With Others Option */}
              <div className="others_option">
                <div className="heading text-center mb-6">
                  <span className="text-textPrimary-900 bg-white px-2 font-medium">
                    Or sign up with
                  </span>
                  <hr className="mt-[-11px]" />
                </div>
                {/* Others Login Buttons */}
                <OthersLogin />
              </div>
            </div>

            {/* Right */}
            <div className="w-full h-full shadow-lg hidden lg:block lg:w-6/12 bg-cover brightness-75 rounded-r-xl">
              {/* Carousel Start */}
              <Swiper
                // spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                // modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={true}
                className="rounded-r-xl h-full">
                <SwiperSlide className="w-full h-full">
                  <AuthPhotos
                    className="h-[1180px]"
                    image="https://images.pexels.com/photos/1934780/pexels-photo-1934780.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                  <AuthPhotos
                    className="h-[1180px]"
                    image="https://images.pexels.com/photos/1345352/pexels-photo-1345352.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                  <AuthPhotos
                    className="h-[1180px]"
                    image="https://images.pexels.com/photos/2106687/pexels-photo-2106687.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSignupForm;
