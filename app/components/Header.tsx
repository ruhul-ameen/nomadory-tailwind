"use client";

import React, { useState } from "react";
import menu from "@/public/image/header/menu.png";
import nomadory from "@/public/image/header/logo-nomadory.png";
import logoN from "@/public/image/header/logo-n.png";
import close from "@/public/image/header/close.png";
import Image from "next/image";
import Navbar from "./NavBar";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [openItems, setOpenItems] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setOpenItems(!openItems);
  };
  return (
    <>
      <header className="px-4 md:px-[50px] xl:px-[215px] py-6 bg-[#F9EFEE] font-libre">
        <div className="flex justify-between items-center">
          <Image
            src={nomadory}
            alt="nomadory"
            height={32}
            width={252}
            className="hidden lg:block"
          />
          <Image
            src={logoN}
            alt="nomadory"
            height={47}
            width={47}
            className="block lg:hidden"
          />

          <div onClick={toggleMenu} className="cursor-pointer">
            {menuVisible ? (
              <div className="flex items-center gap-2 hover:scale-105">
                <h4 className="font-semibold leading-6">MENU</h4>
                <Image src={menu} alt="menu" height={32} width={32} />
              </div>
            ) : (
              <Image
                src={close}
                alt="menu"
                height={32}
                width={32}
                className="hover:scale-105"
              />
            )}
          </div>
        </div>
      </header>
      <Navbar openItems={openItems} />
    </>
  );
};

export default Header;
