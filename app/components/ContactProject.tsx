import Image from "next/image";
import React from "react";
import inbox from "@/public/image/contact/inbox.png";
import message from "@/public/image/contact/message.png";
import callIcon from "@/public/image/contact/Group.svg";

const ContactProject = () => {
  return (
    <div className="bg-[#F9EFEE] font-libre relative">
      <div className="bg-bg-menu-tr h-[166px] w-[320px] md:h-[278px] md:w-[548px] absolute right-0 top-0 bg-no-repeat"></div>
      <div className="md:px-[50px] xl:px-[215px] px-[16px] md:pt-[112px] pt-[66px] md:pb-[160px] pb-[80px] flex flex-col md:flex-row md:items-center md:justify-center md:gap-[100px] xl:gap-[346px]">
        <div className="w-1/2">
          <div className="mb-16 md:mb-[98px]">
            <h1 className="text-[50px] md:text-[80px] font-bold leading-[56px] md:leading-[94px] mb-6">
              Start your project
            </h1>
            <p className="md:text-xl">
              Our team of experts will reach out within 1-2 business days.
            </p>
          </div>
          <div>
            <Image
              src={inbox}
              alt="inbox"
              height={192}
              width={192}
              className="mb-10 md:mb-16"
            />
            <div className="mb-16">
              <h3 className="text-[34px] font-bold md:leading-10 md:mb-6">
                Thank you for sharing your project
              </h3>
              <p>One of our experts will reach out to you shortly</p>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="mb-10 md:mb-16">
            <Image
              src={message}
              alt="message"
              height={64}
              width={64}
              className="mb-4"
            />
            <div>
              <h5 className="text-xl md:text-[22px] md:leading-[26px] font-bold mb-4">
                Chat with us
              </h5>
              <p className="mb-4">Our friendly team is here to help</p>
              <p className="text-[#C05E51] font-[600] md:leading-6">
                sales@nomadory.com
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={callIcon}
              alt="callIcon"
              height={64}
              width={64}
              className="mb-4"
            />
            <div>
              <h5 className="text-xl md:text-[22px] md:leading-[26px] font-bold mb-4">
                Phone
              </h5>
              <p className="mb-4">Mon-Fri from 9am-5pm</p>
              <p className="text-[#C05E51] font-[600] md:leading-6">
                +1 213 44215512
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactProject;
