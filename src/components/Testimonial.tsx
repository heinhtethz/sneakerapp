import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      quote: "Game changer for my runs!",
      content:
        "I've always struggled to find the perfect running shoe, but when I came across the latest sneakers from PERFECTPAIR, it was a total game changer...",
      image: "https://surl.li/jjcule",
      name: "Lu Hpring",
    },
    {
      quote: "Best purchase ever!",
      content:
        "These shoes are the most comfortable pair I've ever worn. Great support, stylish, and perfect for running or casual wear!",
      image: "https://tinyurl.com/muxfbuut",
      name: "Rose",
    },
    {
      quote: "Love these shoes!",
      content:
        "Absolutely love how these shoes fit. The quality is top-notch and they provide great arch support.",
      image: "https://tinyurl.com/bdzd2bkv",
      name: "Lee Dong Wook",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-[90%] mx-auto mb-20 rounded-3xl">
      <h1 className="text-[32px] font-bold mt-20 mb-6">What they says</h1>
      <div className="bg-[#f6f6f6] relative px-[128px] py-[64px] animate-fade-in-up">
        <img src="/quotation.svg" className="absolute top-[-30px] right-0" />

        <h2 className="text-[#525252] font-bold text-xl font-serif mb-8 ">
          {testimonials[index].quote}
        </h2>
        <p className="text-[#525252] font-serif text-xl">
          {testimonials[index].content}
        </p>
        <div className="border border-b-[#E5E5E5] border-solid border-b-2 my-8"></div>
        <div className="flex items-center gap-4">
          <img
            src={testimonials[index].image}
            className="w-14 h-14 rounded-full text-center"
          />
          <span>{testimonials[index].name}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
