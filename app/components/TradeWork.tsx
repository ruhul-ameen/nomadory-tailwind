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
      <div className="h-auto">
        <h1 className="text-[46px] font-bold leading-[54px] mb-6">Our work</h1>
        <p className="text-[#3F3F3F] text-xl font-normal leading-8 mb-10">
          Get inspired by the custom projects we have worked on
        </p>

        <div className="grid xs:justify-items-center grid-cols-1 md:grid-cols-3 md:grid-rows-6 md:gap-[1.25rem] md:mb-[113px]">
          <div className="md:col-span-2 md:row-span-2">
            <div className="group relative overflow-hidden cursor-pointer">
              <Image
                src={image1}
                alt="image1"
                className="w-[328px] h-[202px] md:w-[770px] md:h-[472px] object-cover"
              />
              <div className="absolute w-full h-[202px] md:h-full bg-[#733831] flex justify-start items-end group-hover:top-0 md group-hover:top-0:md:group-hover:bottom-0 opacity-0 group-hover:opacity-[0.8] transition-all duration-300">
                <div className="absolute w-full h-full bg-bg-hover bg-no-repeat"></div>
                <div className="hidden md:block">
                  <div className="flex gap-[4px] flex-col justify-start p-6">
                    <h3 className="text-[18px] text-white font-bold leading-[22px]">
                      Norwest Ventures
                    </h3>
                    <p className="text-white text-[14px] font-normal leading-5">
                      San Francisco
                    </p>
                  </div>
                </div>
              </div>

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
          </div>

          <div className="md:row-span-1">
            <div className="group relative overflow-hidden cursor-pointer">
              <Image
                src={image2}
                alt="image2"
                className="w-[328px] h-[202px] md:w-[370px] md:h-[221px] object-cover"
              />
              <div className="absolute w-full h-[202px] md:h-full bg-[#733831] flex justify-start items-end group-hover:top-0 md:group-hover:bottom-0 opacity-0 group-hover:opacity-[0.8] transition-all duration-300">
                <div className="absolute w-full h-full bg-bg-hover bg-no-repeat"></div>
                <div className="hidden md:block">
                  <div className="flex gap-[4px] flex-col justify-start p-6">
                    <h3 className="text-[18px] md:text-white font-bold leading-[22px]">
                      KBM Hogue
                    </h3>
                    <p className="md:text-white text-[14px] font-normal leading-5">
                      Google, San Francisco
                    </p>
                  </div>
                </div>
              </div>

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
          </div>

          <div className="md:row-span-2">
            <div className="group relative overflow-hidden cursor-pointer">
              <Image
                src={image5}
                alt="image5"
                className="w-[328px] h-[202px] md:w-[370px] md:h-[472px]"
              />
              <div className="absolute w-full h-[202px] md:h-full bg-[#733831] flex justify-start items-end group-hover:top-0 md:group-hover:bottom-0 opacity-0 group-hover:opacity-[0.8] transition-all duration-300">
                <div className="absolute w-full h-full bg-bg-hover bg-no-repeat"></div>
                <div className="hidden md:block">
                  <div className="flex gap-[4px] flex-col justify-start p-6">
                    <h3 className="text-[18px] md:text-white font-bold leading-[22px]">
                      Mother's room
                    </h3>
                    <p className="md:text-white text-[14px] font-normal leading-5">
                      Bay Area
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
            <div className="group relative overflow-hidden cursor-pointer">
              <Image
                src={image3}
                alt="image3"
                className="w-[328px] h-[202px] md:w-[370px] md:h-[221px]"
              />
              <div className="absolute w-full h-[202px] md:h-full bg-[#733831] flex justify-start items-end group-hover:top-0 md:group-hover:bottom-0 opacity-0 group-hover:opacity-[0.8] transition-all duration-300">
                <div className="absolute w-full h-full bg-bg-hover bg-no-repeat"></div>
                <div className="hidden md:block">
                  <div className="flex gap-[4px] flex-col justify-start p-6">
                    <h3 className="text-[18px] md:text-white font-bold leading-[22px]">
                      KBM Hogue
                    </h3>
                    <p className="md:text-white text-[14px] font-normal leading-5">
                      Google, San Francisco
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
            <div className="group relative overflow-hidden cursor-pointer">
              <Image
                src={image4}
                alt="image4"
                className="w-[328px] h-[202px] md:w-[370px] md:h-[472px]"
              />
              <div className="absolute w-full h-[202px] md:h-full bg-[#733831] flex justify-start items-end group-hover:top-0 md:group-hover:bottom-0 opacity-0 group-hover:opacity-[0.8] transition-all duration-300">
                <div className="absolute w-full h-full bg-bg-hover bg-no-repeat"></div>
                <div className="hidden md:block">
                  <div className="flex gap-[4px] flex-col justify-start p-6">
                    <h3 className="text-[18px] md:text-white font-bold leading-[22px]">
                      KBM Hogue
                    </h3>
                    <p className="md:text-white text-[14px] font-normal leading-5">
                      Google, San Francisco
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
            <div className="group relative overflow-hidden cursor-pointer">
              <Image
                src={image6}
                alt="image6"
                className="w-[328px] h-[202px] md:w-[370px] md:h-[472px]"
              />
              <div className="absolute w-full h-[202px] md:h-full bg-[#733831] flex justify-start items-end group-hover:top-0 md:group-hover:bottom-0 opacity-0 group-hover:opacity-[0.8] transition-all duration-300">
                <div className="absolute w-full h-full bg-bg-hover bg-no-repeat"></div>
                <div className="hidden md:block">
                  <div className="flex gap-[4px] flex-col justify-start p-6">
                    <h3 className="text-[18px] md:text-white font-bold leading-[22px]">
                      Denvir Enterprises
                    </h3>
                    <p className="md:text-white text-[14px] font-normal leading-5">
                      Los Angeles
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
            <div className="group relative overflow-hidden cursor-pointer">
              <Image
                src={image7}
                alt="image7"
                className="w-[328px] h-[202px] md:w-[370px] md:h-[221px]"
              />
              <div className="absolute w-full h-[202px] md:h-full bg-[#733831] flex justify-start items-end group-hover:top-0 md:group-hover:bottom-0 opacity-0 group-hover:opacity-[0.8] transition-all duration-300">
                <div className="absolute w-full h-full bg-bg-hover bg-no-repeat"></div>
                <div className="hidden md:block">
                  <div className="flex gap-[4px] flex-col justify-start p-6">
                    <h3 className="text-[18px] md:text-white font-bold leading-[22px]">
                      Work In Progress
                    </h3>
                    <p className="md:text-white text-[14px] font-normal leading-5">
                      Los Angeles
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
            <div className="group relative overflow-hidden cursor-pointer">
              <Image
                src={image9}
                alt="image9"
                className="w-[328px] h-[202px] md:w-[770px] md:h-[472px]"
              />
              <div className="absolute w-full h-[202px] md:h-full bg-[#733831] flex justify-start items-end group-hover:top-0 md:group-hover:bottom-0 opacity-0 group-hover:opacity-[0.8] transition-all duration-300">
                <div className="absolute w-full h-full bg-bg-hover bg-no-repeat"></div>
                <div className="hidden md:block">
                  <div className="flex gap-[4px] flex-col justify-start p-6">
                    <h3 className="text-[18px] md:text-white font-bold leading-[22px]">
                      Norwest Ventures
                    </h3>
                    <p className="md:text-white text-[14px] font-normal leading-5">
                      San Francisco
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
            <div className="group relative overflow-hidden cursor-pointer">
              <Image
                src={image8}
                alt="image8"
                className="w-[328px] h-[202px] md:w-[370px] md:h-[221px]"
              />
              <div className="absolute w-full h-[202px] md:h-full bg-[#733831] flex justify-start items-end group-hover:top-0 md:group-hover:bottom-0 opacity-0 group-hover:opacity-[0.8] transition-all duration-300">
                <div className="absolute w-full h-full bg-bg-hover bg-no-repeat"></div>
                <div className="hidden md:block">
                  <div className="flex gap-[4px] flex-col justify-start p-6">
                    <h3 className="text-[18px] md:text-white font-bold leading-[22px]">
                      L'oreal
                    </h3>
                    <p className="md:text-white text-[14px] font-normal leading-5">
                      El Segundo
                    </p>
                  </div>
                </div>
              </div>
            </div>

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

        <div className="bg-bg-trade-work h-[47px] w-[200px] md:h-[62px] md:w-[266px] absolute left-0 bottom-0 bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default TradeWork;
