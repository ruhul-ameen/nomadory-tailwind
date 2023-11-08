import Link from "next/link";
import React from "react";

const Navbar = ({ openItems }) => {
  return (
    <nav
      className={`bg-bg-menu md:h-max md:w-full w-full text-[38px] md:text-[60px] font-[700] font-libre relative ${
        openItems ? "hidden" : "block"
      }`}
    >
      <div className="bg-bg-menu-tr h-[166px] w-[320px] md:h-[278px] md:w-[548px] absolute right-0 top-0 bg-no-repeat"></div>
      <ul className="list-none ml-[25px] md:ml-[127px] pt-[207px] pb-[167px] space-y-[16px]">
        <li>
          <Link
            href="/"
            className="hover:max-w-fit hover:border-b-2 hover:border-black"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/trade"
            className="hover:max-w-fit hover:border-b-2 hover:border-black"
          >
            For trade
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="hover:max-w-fit hover:border-b-2 hover:border-black"
          >
            Our Products
          </Link>
          <ul className="ml-[24px] md:ml-[60px] mt-[16px]">
            <li>
              <Link
                href="rugs"
                className="hover:max-w-fit hover:border-b-2 hover:border-black"
              >
                Handmade rugs
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:max-w-fit hover:border-b-2 hover:border-black"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <div className="bg-bg-menu-bl h-[194px] w-[252px] md:h-[272px] md:w-[353.1px] left-0 bottom-0 bg-no-repeat"></div>
    </nav>
  );
};

export default Navbar;
