"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OthersLogin from "@/components/othersLoginButton/othersLogin";

const LoginForm = () => {
  const router = useRouter();

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

  // Input Values
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  // Submit Handler
  const submitHandler = (e: any) => {
    e.preventDefault();
    router.push("/");
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
            Sign <span className="text-textPrimary-900">In</span> / Sign{" "}
            <span className="text-textPrimary-900">Up</span>
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
            If you are new here then create an account and{" "}
            <span className="text-textPrimary-900">
              if you already have an account then you will redirect to your
              account!
            </span>
          </p>
        )}
      </div>

      {/* Forgot Pass Screen */}
      {clickedForgot ? (
        <div className="mt-10">
          {newPassword ? (
            <>
              {/* New Password Box */}
              <div className="mb-4">
                <div className="w-full relative">
                  <div className="labels bg-white px-2 absolute left-[15px] top-[-15%]">
                    <label
                      className="block text-base font-bold text-textPrimary-900"
                      htmlFor="newpassword">
                      New Password
                    </label>
                  </div>
                  <div className="input_div">
                    <input
                      className="w-full py-6 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                      id="newpassword"
                      type={newpassText ? "text" : "password"}
                      value={newPassValue}
                      onChange={(e) => setNewPassValue(e.target.value)}
                      placeholder="Enter Your New 6 Digit Password..."
                      required
                    />
                    <div className="absolute right-5 top-5">
                      <span>
                        <i
                          className={`fa-solid ${
                            showPass ? "fa-eye-slash" : "fa-eye"
                          } text-xl text-paginationBg-900 cursor-pointer`}
                          onClick={() => setNewpassText(!newpassText)}></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/*Confirm New Password Box */}
              <div className="mb-4">
                <div className="w-full relative">
                  <div className="labels bg-white px-2 absolute left-[15px] top-[-15%]">
                    <label
                      className="block text-base font-bold text-textPrimary-900"
                      htmlFor="confirmnewpassword">
                      New Password
                    </label>
                  </div>
                  <div className="input_div">
                    <input
                      className="w-full py-6 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                      id="confirmnewpassword"
                      type={confirmNewPassText ? "text" : "password"}
                      placeholder="Re-enter your password..."
                      value={confirmPassValue}
                      onChange={(e) => setConfirmPassValue(e.target.value)}
                      required
                    />
                    <div className="absolute right-5 top-5">
                      <span>
                        <i
                          className={`fa-solid ${
                            showPass ? "fa-eye-slash" : "fa-eye"
                          } text-xl text-paginationBg-900 cursor-pointer`}
                          onClick={() =>
                            setconfirmNewPassText(!confirmNewPassText)
                          }></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Password Dont Match Text */}
              <div className="mb-4">
                <p className="text-red-600 text-lg font-semibold">
                  {passDontMatch}
                </p>
              </div>

              {/* Button */}
              <div className="mb-10 text-center">
                <button
                  className="w-full px-4 py-5 font-bold text-white bg-textPrimary-900 focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={backtoLoginPage}>
                  Confirm Password
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handlePasswordBox}>
              {/* Email Box*/}
              <div className={`${otpBox === true ? "mb-10" : "mb-2"}`}>
                <div className="w-full relative">
                  <div className="labels bg-white px-2 absolute left-[15px] top-[-15%]">
                    <label
                      className="block text-base font-bold text-textPrimary-900"
                      htmlFor="email">
                      E-mail
                    </label>
                  </div>
                  <div className="input_div">
                    <input
                      className="w-full py-6 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="mb-4">
                {!otpBox && (
                  <p className="text-sm text-textPrimary-900 font-semibold">
                    Please enter a valid email address to continue*
                  </p>
                )}
              </div>

              {/* Otp Box */}
              {otpBox && (
                <div className="mb-10">
                  <div className="w-full relative">
                    <div className="labels bg-white px-2 absolute left-[15px] top-[-15%]">
                      <label
                        className="block text-base font-bold text-textPrimary-900"
                        htmlFor="otp">
                        Confirmation Code
                      </label>
                    </div>
                    <div className="input_div">
                      <input
                        className="w-full py-6 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                        id="otp"
                        type="otp"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        placeholder="Enter 6 Digit Confirmation Code..."
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Button */}
              {showBtn && (
                <div className="mb-10 text-center">
                  <button
                    className="w-full px-4 py-5 font-bold text-white bg-textPrimary-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={hideButton}
                    disabled={email.length === 0 ? true : false}>
                    {otpBox ? "Continue" : "Send Confirmation Code"}
                  </button>
                </div>
              )}
              {hiddenBtn && (
                <div className="mb-10 text-center">
                  <button
                    className="w-full px-4 py-5 font-bold text-white bg-textPrimary-900 focus:outline-none focus:shadow-outline"
                    type="submit">
                    Set New Password
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      ) : (
        <>
          {/* Normal Screen */}
          <form className="mt-10 bg-white rounded" onSubmit={submitHandler}>
            {/* Email */}
            <div className="mb-10">
              <div className="w-full relative">
                <div className="labels bg-white px-2 absolute left-[15px] top-[-15%]">
                  <label
                    className="block text-base font-bold text-textPrimary-900"
                    htmlFor="email">
                    E-mail
                  </label>
                </div>
                <div className="input_div">
                  <input
                    className="w-full py-6 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                    id="email"
                    type="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder="example@gmail.com"
                    required
                  />
                  <div className="absolute right-5 top-4">
                    <span className="text-2xl text-paginationBg-900 cursor-pointer">
                      @
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="mb-2">
              <div className="w-full relative">
                <div className="labels bg-white px-2 absolute left-[15px] top-[-15%]">
                  <label
                    className="block text-base font-bold text-textPrimary-900"
                    htmlFor="email">
                    Password
                  </label>
                </div>
                <div className="input_div">
                  <input
                    className="w-full py-6 px-[22px] text-sm leading-tight border border-paginationBg-900 focus:outline-none focus:border-textPrimary-900 rounded text-textSecondary-900 font-semibold"
                    id="password"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    type={showPass ? "text" : "password"}
                    placeholder="1234#$%*"
                    required
                  />
                  <div className="absolute right-5 top-5">
                    <span>
                      <i
                        className={`fa-solid ${
                          showPass ? "fa-eye-slash" : "fa-eye"
                        } text-xl text-paginationBg-900 cursor-pointer`}
                        onClick={() => setShowPass(!showPass)}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Forget Password */}
            <div className="forgot mb-8">
              <span
                className="text-textPrimary-900 font-semibold text-sm cursor-pointer"
                onClick={() => setClickedForgot(!clickedForgot)}>
                Forgot password?
              </span>
            </div>

            {/* Buttons */}
            <div className="mb-10 text-center">
              <button
                className="w-full px-4 py-5 font-bold text-white bg-textPrimary-900 focus:outline-none focus:shadow-outline"
                type="submit">
                Continue
              </button>
            </div>
          </form>

          {/* Login With Others Option */}
          <div className="others_option mb-8">
            <div className="heading text-center mb-10">
              <span className="text-textPrimary-900 bg-white px-2 font-medium">
                Or continue with
              </span>
              <hr className="mt-[-11px]" />
            </div>
            <OthersLogin />
          </div>
        </>
      )}

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

export default LoginForm;
