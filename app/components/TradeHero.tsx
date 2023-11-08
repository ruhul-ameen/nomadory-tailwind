import Image from "next/image";
import React from "react";
import hero from "@/public/image/trade/hero.png";
import TradeCustomize from "./TradeCustomize";
import TradeWork from "./TradeWork";

const TradeHero = () => {
  return (
    <div>
      <div className="w-full h-[608px] flex flex-col md:relative">
        <div className="w-[328px] md:absolute md:bg-[#FDF9F7] md:w-[600px] h-[342px] top-20 md:z-10">
          <h1 className="font-libre text-[50px] md:text-[80px] leading-[56px] md:leading-[96px] font-bold my-8">
            For trade
          </h1>
          <p className="w-[328px] text-[18px] md:text-xl font-normal leading-8 mb-8">
            We partner with the A&D industry for bespoke, ethical and
            sustainable handmade rugs.
          </p>
          <button className="w-[328px] md:w-[270px] p-4 bg-[#C05E51] font-semibold text-[#FCFCFC] mb-8">
            Start your project
          </button>
        </div>
        <div className="md:absolute top-0 right-0">
          <Image src={hero} alt="hero" height={540} width={800} />
        </div>
      </div>
      <TradeCustomize />
      <TradeWork />
    </div>
  );
};

export default TradeHero;
