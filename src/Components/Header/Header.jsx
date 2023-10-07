import React from "react";
import HeaderPic from "../../assets/Image.png";

export default function Header() {
  return (
    <div className="w-full lg:text-left text-center">
      <div className="lg:flex w-full items-center md:px-10 px-0 justify-around space-y-5 lg:space-y-0">
        <div className="space-y-6">
          <h1 className=" headerh1 text-[56px] roboto">
            Learn new skills online <br /> with ease
          </h1>
          <p className=" headerp text-[18px] roboto">
            Discover a wide range of courses covering a variety of subjects,
            taught <br /> by expert instructors.
          </p>
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <Btn btnItems="Start learning now" />
            <Btn btnItems="Explore Courses" />
          </div>
        </div>
        <div>
          <img className=" px-10 w-[100%] lg:w-[80vh]" src={HeaderPic} alt="" />
        </div>
      </div>
    </div>
  );
}

export function Btn(BtnProps) {
  return (
    <>
      <button className=" py-[12px] px-[24px] bg-black text-lg font-semibold text-white rounded-lg">
        {BtnProps.btnItems}
      </button>
    </>
  );
}
