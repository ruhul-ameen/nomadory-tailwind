import Image from "next/image";
import React from "react";
import rectangle71 from "@/public/image/contact/rectangle-71.png";
import rectangle72 from "@/public/image/contact/rectangle-72.png";
import rectangle73 from "@/public/image/contact/rectangle-73.png";
import rectangle74 from "@/public/image/contact/rectangle-74.png";
import rectangle75 from "@/public/image/contact/rectangle-75.png";
import rectangle76 from "@/public/image/contact/rectangle-76.png";

const ContactProjectView = () => {
  return (
    <div className="bg-[#F5C266] lg:bg-bg-pattern bg-no-repeat bg-center lg:h-[921px] lg:relative">
      <div className="px-4 md:px-[100px] lg:px-[215px] py-20 md:py-24 lg:py-[128px] font-libre">
        <h4 className="text-[32px] font-bold leading-9 mb-[49px]">Instagram</h4>
        <div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 justify-items-center">
            <Image
              src={rectangle71}
              alt="rectangle71"
              className="lg:absolute w-[156px] h-[156px] md:w-[180px] md:h-[180px] lg:w-[265px] lg:h-[265px] top-[436px] lg:left-[150px] lg:top-[350px]"
            />
            <Image
              src={rectangle72}
              alt="rectangle72"
              className="lg:absolute w-[156px] h-[156px] md:w-[180px] md:h-[180px] top-[628px] lg:w-[205px] lg:h-[205px] lg:left-[250px] xl:left-[327px] bottom-[128px]"
            />
            <Image
              src={rectangle73}
              alt="rectangle73"
              className="lg:absolute w-[156px] h-[156px] md:w-[180px] md:h-[180px] lg:w-[234px] lg:h-[234px] top-[231px] lg:left-[350px] xl:left-[498px]"
            />
            <Image
              src={rectangle74}
              alt="rectangle74"
              className="lg:absolute w-[156px] h-[156px] md:w-[180px] md:h-[180px] lg:w-[400px] lg:h-[400px] 2xl:w-[452px] 2xl:h-[452px] lg:top-[400px] xl:top-[400px] 2xl:top-[335px] lg:left-[440px] xl:left-[580px] 2xl:left-[597px]"
            />
            <Image
              src={rectangle75}
              alt="rectangle75"
              height={156}
              width={156}
              className="lg:absolute w-[156px] h-[156px] md:w-[180px] md:h-[180px] lg:top-[280px] xl:top-[334px] lg:right-[240px] xl:right-[285px]"
            />
            <Image
              src={rectangle76}
              alt="rectangle76"
              className="lg:absolute w-[156px] h-[156px] md:w-[180px] md:h-[180px] xl:w-[185px] xl:h-[185px] lg:top-[500px] top-[462px] lg:right-[150px] xl:right-[215px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactProjectView;

// w-[156px] h-[156px]
// className="grid grid-cols-2 gap-x-4 gap-y-6"
// className = "flex justify-center items-center";
// lg:left-[597px]
