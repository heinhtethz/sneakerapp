import React from "react";

const Testimonial = () => {
  return (
    <div className="w-[90%] mx-auto mb-20 rounded-3xl">
      <h1 className="text-[32px] font-bold mt-20 mb-6">What they says</h1>
      <div className="bg-[#f6f6f6] relative px-[128px] py-[64px] animate-fade-in-up">
        <img src="/quotation.svg" className="absolute top-[-30px] right-0" />
        <h2 className="text-[#525252] font-bold text-xl font-serif mb-8 ">
          "Game changer for my runs!"
        </h2>
        <p className="text-[#525252] font-serif text-xl">
          I've always struggled to find the perfect running shoe, but when I
          came across the latest sneakers from PERFECTPAIR, it was a total game
          changer. The Nike Air Zoom Pegasus gave me unmatched comfort, support,
          and responsiveness on my runs, and I could feel the difference from
          day one. I even found the perfect pair of Adidas Ultraboost for
          everyday wear that adds a stylish touch to my wardrobe without
          compromising comfort. Now, whether I'm hitting the track or just out
          and about, I know I've got the best on my feet!
        </p>
        <div className="border border-b-[#E5E5E5] border-solid border-b-2 my-8"></div>
        <div className="flex items-center gap-4">
          <img src="https://surl.li/jjcule" className="w-14 rounded-full" />
          <span>Lu Hpring</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
