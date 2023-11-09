import React from "react";
import scaling from "@/public/image/trade/scale.png";
import file from "@/public/image/trade/file.png";
import starOrange from "@/public/image/trade/brandStarOrange.png";
import starGreen from "@/public/image/trade/brandStarGreen.png";
import Image from "next/image";

const TradeCustomize = () => {
  return (
    <>
      <div className="mb-36">
        <h1 className="font-libre text-[32px] md:text-[46px] leading-[96px] font-bold mt-6">
          Custom made easy
        </h1>
        <p className="text-[#3F3F3F] text-[18px] md:text-xl w-[328px] md:w-[570px] font-normal mb-10">
          For ease of project timelines, you can start with existing Nomadory
          Studio designs and concepts, or collaborate with us to create a
          completely new concept. Limitless possibilities, at affordable prices.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-y-8 sm:gap-x-[15px] md:gap-x-[30px]">
          <div className="w-[328px] md:w-[570px] p-8 border-[#CD7E74] border h-auto">
            <div>
              <Image src={scaling} alt="scaling" width={60} height={60} />
            </div>
            <h2 className="text-[28px] md:text-[34px] leading-[40px] font-bold mt-6 mb-4">
              Customize a nomadory design
            </h2>
            <h6 className="font-semibold leading-6 mb-6">6-8 WEEKS</h6>
            <div>
              <div className="w-full flex gap-x-3 items-center mb-4">
                <Image
                  src={starOrange}
                  alt="starOrange"
                  width={24}
                  height={24}
                />
                <p className="w-full text-[#3F3F3F] font-normal leading-6">
                  Select colors that meet your design project needs
                </p>
              </div>
              <div className="w-full flex gap-x-3 items-center mb-4">
                <Image
                  src={starOrange}
                  alt="starOrange"
                  width={24}
                  height={24}
                />
                <p className="w-full text-[#3F3F3F] font-normal leading-6">
                  Customize your size (we even can create cut outs for power
                  outlets!) 
                </p>
              </div>
              <div className="w-full flex gap-x-3 items-start mb-4">
                <Image
                  src={starOrange}
                  alt="starOrange"
                  width={24}
                  height={24}
                />
                <p className="w-full text-[#3F3F3F] font-normal leading-6">
                  Like an indoor design but need it for outdoor, we can provide
                  material options as well 
                </p>
              </div>
              <div className="flex justify-center items-center mt-auto">
                <button className="bg-[#C05E51] w-full border-none p-4 text-white font-semibold">
                  Browse collection
                </button>
              </div>
            </div>
          </div>

          <div className="w-[328px] md:w-[570px] p-8 border-[#CD7E74] border h-auto">
            <div>
              <Image src={file} alt="scaling" width={60} height={60} />
            </div>
            <h2 className="text-[28px] md:text-[34px] leading-[40px] font-bold mt-6 mb-4">
              Create a new design
            </h2>
            <h6 className="font-semibold leading-6 mb-6">6-15 WEEKS</h6>
            <div>
              <div className="w-full flex gap-x-3 items-center mb-4">
                <Image
                  src={starGreen}
                  alt="starOrange"
                  width={24}
                  height={24}
                />
                <p className="w-full text-[#3F3F3F] font-normal leading-6">
                  Partner with our designers to create new concepts 
                </p>
              </div>
              <div className="w-full flex gap-x-3 items-center mb-4">
                <Image
                  src={starGreen}
                  alt="starOrange"
                  width={24}
                  height={24}
                />
                <p className="w-full text-[#3F3F3F] font-normal leading-6">
                  Define your style, colors, environment and we’ll do the rest! 
                </p>
              </div>
              <div className="w-full flex gap-x-3 items-start mb-4">
                <Image
                  src={starGreen}
                  alt="starOrange"
                  width={24}
                  height={24}
                />
                <p className="w-full text-[#3F3F3F] font-normal leading-6 mb-6">
                  Budget friendly with ease of delivery and logistics
                </p>
              </div>
              <div className="flex justify-center items-center mt-auto">
                <button className="bg-[#014F52] w-full border-none p-4 text-white font-semibold">
                  Customize a rug
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradeCustomize;
