import React from "react";
import TradeHero from "../components/TradeHero";
import TradeCustomize from "../components/TradeCustomize";
import TradeWork from "../components/TradeWork";

const Trade = () => {
  return (
    <div className="px-4 md:px-[50px] xl:px-[215px] pt-[66px] md:py-8 bg-[#F9EFEE] font-libre relative">
      <div className="bg-bg-menu-tr h-[300px] w-[400px] md:h-[278px] md:w-[548px] absolute right-0 top-0 bg-no-repeat"></div>
      <div>
        <TradeHero />
        <TradeCustomize />
        <TradeWork />
      </div>
    </div>
  );
};

export default Trade;
