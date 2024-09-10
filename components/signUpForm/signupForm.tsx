"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OthersLogin from "@/components/othersLoginButton/othersLogin";
import { InputField } from "@/components/global/formFields/inputField";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiAtSign } from "react-icons/fi";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { signUp } from "@/lib/api";
import toast from "react-hot-toast";

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email("E-mail is required"),
  password: z.string().min(6, "Password is required"),
});

type SignUpFormValues = z.infer<typeof formSchema>;

const SignUpForm = () => {
  const router = useRouter();

  const defaultValues: Partial<SignUpFormValues> = {
    fullName: undefined,
    email: undefined,
    password: undefined,
  };

  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: Partial<SignUpFormValues>) => {
    try {
      await signUp({
        name: data.fullName,
        email: data.email,
        password: data.password,
      });
      toast.success("Please check your email for verify!");
      reset(defaultValues);
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/signin");
    }
  };

  // Password Show State
  const [showPass, setShowPass] = useState(false);

  // Forgot Pass States
  const [clickedForgot, setClickedForgot] = useState(false);
  const [email, setEmail] = useState("");
  const [otpBox, setOtpBox] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [showBtn, setShowBtn] = useState(true);
  const [hiddenBtn, setHiddenBtn] = useState(false);

  const hideButton = () => {
    setOtpBox(!otpBox);
    setShowBtn(false);
    setHiddenBtn(true);
  };

  // New Password Box
  const [newPassword, setNewPassword] = useState(false);
  const [newPassValue, setNewPassValue] = useState("");
  const [confirmPassValue, setConfirmPassValue] = useState("");
  const [newpassText, setNewpassText] = useState(false);
  const [confirmNewPassText, setconfirmNewPassText] = useState(false);
  const [passDontMatch, setPassDontMatch] = useState("");

  const handlePasswordBox = (e: any) => {
    e.preventDefault();
    setNewPassword(true);
  };

  const backtoLoginPage = () => {
    if (newPassValue === "" && confirmPassValue === "") {
      setPassDontMatch("Password Box is Empty!");
    } else if (newPassValue !== confirmPassValue) {
      setPassDontMatch("Passwords Do not Match!");
    } else {
      alert("Password Reset Successfully");
      router.push("/");
    }
  };

  return (
    <div className="w-full h-full lg:w-6/12 bg-white lg:shadow-lg shadow-sm p-5 lg:px-16 rounded-l-xl">
      {/* Welcome Text */}
      <div className="lg:mt-8 mt-4 mb-4 lg:text-start text-center">
        {clickedForgot ? (
          <h1 className="lg:text-4xl text-3xl font-bold text-textSecondary-900">
            Recover Your <span className="text-textPrimary-900">Password</span>
          </h1>
        ) : (
          <h1 className="lg:text-4xl text-3xl font-bold text-textSecondary-900">
            Sign <span className="text-textPrimary-900">Up</span>
          </h1>
        )}
      </div>

      {/* Paragraph */}

      <div>
        {clickedForgot ? (
          <p className="text-sm text-textSecondary-900 leading-6 lg:text-start text-center">
            Enter your email then click send confirmation code button. you will
            get a 6 digit code on your email and then write the code into the
            box and click continue and is everything goes well you are ready to{" "}
            <span className="text-textPrimary-900">set your new password</span>
          </p>
        ) : (
          <p className="text-sm text-textSecondary-900 leading-6 lg:text-start text-center">
            If you are new here then create an account and if you already have
            an account please{" "}
            <Link href="/signin" className="text-textPrimary-900 text-sm">
              Login
            </Link>
          </p>
        )}
      </div>

      <>
        {/* Normal Screen */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 bg-white rounded">
          {/* Email */}
          <div className="mb-10">
            <InputField
              control={control}
              name={"fullName"}
              label={"Full Name"}
              placeholder="Full Name"
            />
          </div>

          <div className="mb-10">
            <InputField
              control={control}
              name={"email"}
              label={"E-mail"}
              righticon={<FiAtSign />}
              placeholder="example@gmail.com"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <InputField
              control={control}
              name={"password"}
              label={"Password"}
              type={showPass ? "text" : "password"}
              placeholder="1234#$%*"
              righticon={
                <>
                  {showPass ? (
                    <IoMdEyeOff
                      className=""
                      onClick={() => setShowPass(!showPass)}
                    />
                  ) : (
                    <IoEye onClick={() => setShowPass(!showPass)} />
                  )}
                </>
              }
            />
          </div>

          {/* Buttons */}
          <div className="mt-8 mb-4 text-center">
            <button
              className="w-full px-4 py-5 font-bold text-white bg-textPrimary-900 focus:outline-none focus:shadow-outline"
              type="submit">
              Continue
            </button>
          </div>
        </form>
        <div className="bg-white px-2 text-center">
          <span className="text-sm"> Already have an account please </span>
          <Link href="/signin" className="text-textPrimary-900 text-sm">
            Login
          </Link>
        </div>
        {/* Login With Others Option */}
        <div className="others_option my-8">
          <div className="heading text-center mb-10">
            <span className="text-textPrimary-900 bg-white px-2 font-medium">
              Or continue with
            </span>
            <hr className="mt-[-11px]" />
          </div>
          <OthersLogin />
        </div>
      </>

      {/* Vendor Sign Up */}
      <div className="w-full">
        <div className="content flex justify-center items-center gap-2">
          <span className="text-textSecondary-900 font-medium">
            Are you a vendor?
          </span>
          <Link href="/vendor-signup">
            <button className="py-2 rounded px-4 bg-textPrimary-900 text-white font-medium">
              Business Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
