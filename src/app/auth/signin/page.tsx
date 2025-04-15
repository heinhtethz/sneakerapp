import { inputCss } from "@/utils/page";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex gap-8">
      {/* Left side photo */}
      <div className="relative">
        <img src="/signinImg.png" className="" />
        <img src="/logoWhitecolor.png" className="absolute top-0 left-20" />
      </div>
      {/* Right side input */}
      <div className="w-[488px] flex flex-col gap-16 mt-20">
        <h2 className="font-bold text-3xl">Already Registered?</h2>
        {/* Signin with */}
        <div className="flex flex-col gap-8">
          <button className="flex items-center justify-center gap-2 text-sm text-[#525252] w-full bg-[#F6F6F6] p-3 border border-[#A3A3A3] rounded-md">
            <img src="/googleLogo.png" className="w-[14px] h-[14px]" />
            <p>Signup with Google</p>
          </button>
          <button className="flex items-center justify-center gap-2 text-sm text-[#525252] w-full bg-[#F6F6F6] p-3 border border-[#A3A3A3] rounded-md">
            <img src="/facebookLogo.png" className="w-[10px] h-[14px]" />
            <p>Signup with Facebook</p>
          </button>
        </div>
        {/* Divider */}
        <div className="flex items-center gap-5">
          <hr className="w-[200px] border-[#E5E5E5]" />
          <p className="text-[#A3A3A3] text-sm mx-4 ">or</p>
          <hr className="w-[200px] border-[#E5E5E5] " />
        </div>
        {/* Input Group */}
        <div className="flex flex-col gap-8">
          <input
            className={`${inputCss} w-full h-[50px]`}
            placeholder="Email Address"
            type="email"
          ></input>
          <input
            className={`${inputCss} w-full h-[50px]`}
            placeholder="Password"
            type="password"
          ></input>
          <p className="self-end text-sm text-[#525252] underline cursor-pointer select-none">
            Forgot Password?
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-full w-fit self-end">
            Sign In
          </button>
        </div>
        <div className="flex justify-center gap-1">
          <p className="text-sm text-[#525252]">Not registered yet?</p>
          <p className="cursor-pointer select-none underline text-sm text-[#171717]">
            Create an account
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
