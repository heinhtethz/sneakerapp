import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F6F6F6] h-[526px] mt-28 flex flex-col justify-center">
      <div className="flex justify-around pt-16">
        <div className="w-[384px]">
          <img src="/logo.svg"></img>
          <p className="text-[#4F4F4F] mt-8">
            PERFECTPAIR brings you the latest in style and performance, offering
            top sneaker brands like Nike, Adidas, Puma, and Converse—all in one
            place for fast and easy shopping.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-7">Company</h3>
          <ul className="text-[#4F4F4F] flex flex-col gap-y-2">
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-7">Brands</h3>
          <ul className="text-[#4F4F4F] flex flex-col gap-y-2">
            <li>Nike</li>
            <li>Adidas</li>
            <li>Puma</li>
            <li>Converse</li>
          </ul>
        </div>
        <div className="w-[280px]">
          <h3 className="font-bold text-xl mb-7">Download Our App</h3>
          <p className="text-[#4F4F4F]">
            Get instant access to exclusive features for FREE!
          </p>
          <div className="flex gap-x-5 mt-5">
            <img src="/appStore.png"></img>
            <img src="/playStore.png"></img>
          </div>
          <div className="mt-10">
            <h3 className="font-bold text-xl mb-7">Follow On:</h3>
            <div className="flex gap-x-5">
              <img src="/facebookIcon.svg"></img>
              <img src="/twitterIcon.svg"></img>
              <img src="/instagramIcon.svg"></img>
              <img src="/linkedinIcon.svg"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E5E5E5] h-[1px] w-[90%] mx-auto mt-8"></div>
      <div className="flex justify-between w-[90%] mx-auto mt-8 text-[#525252] text-sm">
        <p>Copyrights ©2024 PERFECTPAIR. Build by Hein Htet Zaw.</p>
        <div className="flex gap-x-5">
          <p>Privacy Policy</p>
          <p>Terms & conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
