import React from "react";
import Icon1 from "./Icons/icon1.png";
import Icon2 from "./Icons/icon2.png";
import Icon3 from "./Icons/icon3.png";
import Icon4 from "./Icons/icon4.png";
import Icon5 from "./Icons/icon5.png";
import Icon6 from "./Icons/icon6.png";

export default function Logo() {
  return (
    <div className="lg:flex items-center justify-around bg-[#F7F7F7] py-[80px] px-10 text-black">
      <div className="lg:w-[320px]">
        <h1 className=" roboto text-[24px] text-center lg:text-left font-semibold">
          Trusted by 2000+ companies worldwide.
        </h1>
      </div>
      <div className=" w-[80%] lg:w-[880px]">
        <div className="flex items-center justify-center ">
          <img className=" w-[123.805px]" src={Icon1} alt="imgError" />
          <img className=" w-[123.805px]" src={Icon2} alt="imgError" />
          <img className=" w-[123.805px]" src={Icon3} alt="imgError" />
          <img className=" w-[123.805px]" src={Icon4} alt="imgError" />
          <img className=" w-[123.805px]" src={Icon5} alt="imgError" />
          <img className=" w-[123.805px]" src={Icon6} alt="imgError" />
        </div>
      </div>
    </div>
  );
}
