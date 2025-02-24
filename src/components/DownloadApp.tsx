import React from "react";

const DownloadApp = () => {
  return (
    <div className="w-[90%] mt-52 mx-auto">
      <h1 className="text-3xl font-bold mb-7">
        Step Into the Future with Our App
      </h1>
      <div className="flex justify-between bg-black text-white h-[350px] relative rounded-lg p-10">
        <div className="w-[470px] flex flex-col justify-evenly">
          <h2 className="text-xl font-bold">
            Download Our App - Shop Anytime, Anywhere
          </h2>
          <div className="flex items-center gap-x-6">
            <img src="/qrcode.png" className="w-20"></img>
            <p className="text-[#E5E5E5] w-[250px] ">
              Stay ahead with exclusive deals and new arrivals at your
              fingertips.
            </p>
          </div>
          <div className="flex gap-x-5">
            <img src="/appStore.png"></img>
            <img src="/playStore.png"></img>
          </div>
        </div>
        <img src="/phone.png" className="absolute right-16 top-[-133px]"></img>
      </div>
    </div>
  );
};

export default DownloadApp;
