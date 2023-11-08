"use client";
import React from "react";
import Image from "next/image";
import image1 from "@/public/image/trade/image-1.png";
import image2 from "@/public/image/trade/image-2.png";
import image3 from "@/public/image/trade/image-3.png";
import image4 from "@/public/image/trade/image-4.png";
import image5 from "@/public/image/trade/image-5.png";
import image6 from "@/public/image/trade/image-6.png";
import image7 from "@/public/image/trade/image-7.png";
import image8 from "@/public/image/trade/image-8.png";
import image9 from "@/public/image/trade/image-9.png";
import dot from "@/public/image/trade/dot.png";

const TradeWork = () => {
  return (
    <div>
      <div>
        <h1 className="text-[46px] font-bold leading-[54px] mb-6">Our work</h1>
        <p className="text-[#3F3F3F] text-xl font-normal leading-8 mb-10">
          Get inspired by the custom projects we have worked on
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-6 md:gap-[20px] mb-[113px]">
          <div className="md:col-span-2 md:row-span-2">
            <Image
              src={image1}
              alt="image1"
              className="w-[328px] h-[202px] md:w-[770px] md:h-[472px] mb-4"
            />
            <div className="block md:hidden">
              <div className="flex gap-[4px] items-center mb-10">
                <h3 className="text-[18px] font-bold leading-[22px]">
                  Norwest Ventures
                </h3>
                <Image src={dot} alt="dot" width={5} height={5} />
                <p className="text-[#3F3F3F] text-[14px] font-normal leading-5">
                  San Francisco
                </p>
              </div>
            </div>
          </div>

          <div className="md:row-span-1">
            <Image
              src={image2}
              alt="image2"
              className="w-[328px] h-[202px] md:w-[370px] md:h-[221px]"
            />
            <div className="block md:hidden">
              <div className="flex gap-[4px] items-center mb-10">
                <h3 className="text-[18px] font-bold leading-[22px]">
                  KBM Hogue
                </h3>
                <Image src={dot} alt="dot" width={5} height={5} />
                <p className="text-[#3F3F3F] text-[14px] font-normal leading-5">
                  Google, San Francisco
                </p>
              </div>
            </div>
          </div>
          <div className="md:row-span-2">
            <Image
              src={image5}
              alt="image5"
              className="w-[328px] h-[202px] md:w-[370px] md:h-[472px]"
            />
            <div className="block md:hidden">
              <div className="flex gap-[4px] items-center mb-10">
                <h3 className="text-[18px] font-bold leading-[22px]">
                  Mother's room
                </h3>
                <Image src={dot} alt="dot" width={5} height={5} />
                <p className="text-[#3F3F3F] text-[14px] font-normal leading-5">
                  Bay Area
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={image3}
              alt="image3"
              className="w-[328px] h-[202px] md:w-[370px] md:h-[221px]"
            />
            <div className="block md:hidden">
              <div className="flex gap-[4px] items-center mb-10">
                <h3 className="text-[18px] font-bold leading-[22px]">
                  KBM Hogue
                </h3>
                <Image src={dot} alt="dot" width={5} height={5} />
                <p className="text-[#3F3F3F] text-[14px] font-normal leading-5">
                  Google, San Francisco
                </p>
              </div>
            </div>
          </div>

          <div className="md:row-span-2">
            <Image
              src={image4}
              alt="image4"
              className="w-[328px] h-[202px] md:w-[370px] md:h-[472px]"
            />
            <div className="block md:hidden">
              <div className="flex gap-[4px] items-center mb-10">
                <h3 className="text-[18px] font-bold leading-[22px]">
                  KBM Hogue
                </h3>
                <Image src={dot} alt="dot" width={5} height={5} />
                <p className="text-[#3F3F3F] text-[14px] font-normal leading-5">
                  Google, San Francisco
                </p>
              </div>
            </div>
          </div>
          <div className="md:row-span-2">
            <Image
              src={image6}
              alt="image6"
              className="w-[328px] h-[202px] md:w-[370px] md:h-[472px]"
            />
            <div className="block md:hidden">
              <div className="flex gap-[4px] items-center mb-10">
                <h3 className="text-[18px] font-bold leading-[22px]">
                  Denvir Enterprises
                </h3>
                <Image src={dot} alt="dot" width={5} height={5} />
                <p className="text-[#3F3F3F] text-[14px] font-normal leading-5">
                  Los Angeles
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={image7}
              alt="image7"
              className="w-[328px] h-[202px] md:w-[370px] md:h-[221px]"
            />
            <div className="block md:hidden">
              <div className="flex gap-[4px] items-center mb-10">
                <h3 className="text-[18px] font-bold leading-[22px]">
                  Work In Progress
                </h3>
                <Image src={dot} alt="dot" width={5} height={5} />
                <p className="text-[#3F3F3F] text-[14px] font-normal leading-5">
                  Los Angeles
                </p>
              </div>
            </div>
          </div>
          <div className="md:row-span-2 md:col-span-2">
            <Image
              src={image9}
              alt="image9"
              className="w-[328px] h-[202px] md:w-[770px] md:h-[472px]"
            />
            <div className="block md:hidden">
              <div className="flex gap-[4px] items-center mb-10">
                <h3 className="text-[18px] font-bold leading-[22px]">
                  Norwest Ventures
                </h3>
                <Image src={dot} alt="dot" width={5} height={5} />
                <p className="text-[#3F3F3F] text-[14px] font-normal leading-5">
                  San Francisco
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={image8}
              alt="image8"
              className="w-[328px] h-[202px] md:w-[370px] md:h-[221px]"
            />
            <div className="block md:hidden">
              <div className="flex gap-[4px] items-center mb-10">
                <h3 className="text-[18px] font-bold leading-[22px]">
                  L'oreal
                </h3>
                <Image src={dot} alt="dot" width={5} height={5} />
                <p className="text-[#3F3F3F] text-[14px] font-normal leading-5">
                  El Segundo
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bg-trade-work h-[166px] w-[266px] md:h-[62px] md:w-[266px] md:absolute left-0 bottom-0 bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default TradeWork;
