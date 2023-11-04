"use client";

import React from "react";

const Menu = () => {
  return (
    <>
      <div className="bg-bg-menu md:h-max md:w-full w-full text-[38px] md:text-[60px] font-[700] font-libre relative">
        <div className="bg-bg-menu-tr h-[166px] w-[320px] md:h-[278px] md:w-[548px] absolute right-0 top-0 bg-no-repeat"></div>
        <ul className="list-none ml-[25px] md:ml-[127px] pt-[207px] pb-[167px] space-y-[16px]">
          <li className="hover:max-w-fit hover:border-b-2 hover:border-black">
            Home
          </li>
          <li className="hover:max-w-fit hover:border-b-2 hover:border-black">
            For trade
          </li>
          <li>
            <div className="hover:max-w-fit hover:border-b-2 hover:border-black">
              Our Products
            </div>
            <ul className="ml-[24px] md:ml-[60px] mt-[16px]">
              <li className="hover:max-w-fit hover:border-b-2 hover:border-black">
                Handmade rugs
              </li>
            </ul>
          </li>
          <li className="hover:max-w-fit hover:border-b-2 hover:border-black">
            Contact us
          </li>
        </ul>
        <div className="bg-bg-menu-bl h-[194px] w-[252px] md:h-[272px] md:w-[353.1px] left-0 bottom-0 bg-no-repeat"></div>
      </div>
    </>
  );
};

export default Menu;
