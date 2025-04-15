import { inputCss } from "@/utils/page";
import { Checkbox } from "@headlessui/react";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex gap-8">
      {/* Left side photo */}
      <div className="relative">
        <img src="/signinImg.png" className="" />
        <img src="/logoWhitecolor.png" className="absolute top-0 left-20" />
      </div>
      {/* Right side input */}
      <div className="w-[488px] flex flex-col gap-16 mt-20">
        <h2 className="font-bold text-3xl">Create Account</h2>
        {/* Input Group */}
        <div className="flex flex-col gap-8">
          <input className={`${inputCss} w-full h-[50px]`} placeholder="Name" />
          <input
            className={`${inputCss} w-full h-[50px]`}
            placeholder="Email Address"
            type="email"
          />
          <input
            className={`${inputCss} w-full h-[50px]`}
            placeholder="Password"
            type="password"
          />
          <div className="flex gap-2 items-center">
            <input type="checkbox" className="scale-125 accent-black" />
            <label className="text-sm text-[#525252] cursor-pointer select-none">
              I agree to the terms and conditions
            </label>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-full w-fit self-end">
            Sign Up
          </button>
        </div>
        {/* Already Registered? */}
        <div className="flex justify-center gap-1">
          <p className="text-sm text-[#525252]">Already Registered?</p>
          <p className="cursor-pointer select-none underline text-sm text-[#171717]">
            Sign In
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
