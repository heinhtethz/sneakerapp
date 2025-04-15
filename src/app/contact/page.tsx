"use client";

import OurShoes from "@/components/OurShoes";
import { buttonCss, inputCss, textareaCss } from "@/utils/page";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ContactDetails = [
  {
    icon: "/phoneIcon.png",
    text: "Call us directly",
    address: "+959 7855 68 747",
  },
  {
    icon: "/messageIcon.png",
    text: "Sent us a message",
    address: "info@perfectpair.com",
  },
  {
    icon: "/questionMarkIcon.png",
    text: "Looking for support?",
    address: "Help Center",
  },
];

const ContactUs = () => {
  return (
    <div>
      {/* Contact Form */}
      <div className="w-[800px] m-auto mt-14">
        <h1 className="text-3xl font-semibold text-center">Contact Us</h1>
        <div className="grid grid-cols-2 gap-5 mt-10">
          <input className={`${inputCss}`} placeholder="First Name" />
          <input className={`${inputCss}`} placeholder="Last Name" />
          <input className={`${inputCss} col-span-2`} placeholder="Email" />
          <input className={`${inputCss} col-span-2`} placeholder="Subject" />
          <textarea
            className={`${textareaCss} h-[150px] col-span-2`}
            placeholder="Message"
            maxLength={500}
          ></textarea>
        </div>
        <button className={`${buttonCss} mt-8 flex m-auto`}>Submit</button>
      </div>
      {/* Contact Details*/}
      <div className="flex justify-around px-10 bg-[#F6F6F6] py-32 mt-28">
        {ContactDetails.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <img src={item.icon} />
              <p>{item.text}</p>
              <h5>{item.address}</h5>
            </div>
          );
        })}
      </div>
      {/* Our Stores */}
      <OurShoes />
    </div>
  );
};

export default ContactUs;
