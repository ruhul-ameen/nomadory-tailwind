import React from "react";
import footerLogo from "@/public/image/footer-logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#014F52] py-20 md:py-24 px-4 md:px-[100px] lg:px-[215px]">
      <div className="flex flex-col sm:flex-row justify-between md:gap-x-16]">
        <div className="xs:mb-[30px]">
          <Image
            src={footerLogo}
            alt="footerLogo"
            height={79.982}
            width={79.982}
          />
          <h6 className="text-xs leading-[18px] text-white mt-4">
            Copyright © Nomadory, LLC
          </h6>
        </div>
        <div className="flex justify-between sm:gap-x-20 md:gap-x-28 xl:gap-x-[165px]">
          <div>
            <p className="font-semibold leading-[24px] mb-8">LEGAL</p>
            <p className="font-normal leading-[24px] mb-4">Terms & services</p>
            <p className="font-normal leading-[24px] mb-4">Privacy policy</p>
          </div>
          <div>
            <p className="font-semibold leading-[24px] mb-8">LEGAL</p>
            <p className="font-normal leading-[24px] mb-4">Terms & services</p>
            <p className="font-normal leading-[24px] mb-4">Privacy policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
