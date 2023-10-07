import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

export default function Banner() {
  return (
    <div>
      <nav className=" flex items-center justify-between md:py-[10px] px-5 md:px-10  w-full">
        <div className="  font-semibold bannerpopins md:flex items-center justify-center md:space-x-4">
          <h1 className=" flex items-center justify-center">
            Phone Number: <p>956 742 455 678</p>
          </h1>
          <div className=" hidden md:block">|</div>
          <h1>Email:info@gmail.com</h1>
        </div>
        <div className=" flex items-center justify-center space-x-3">
            <a className=" text-[19px] md:text-[23px]" href="@"> <FaFacebookF /></a>
            <a className=" text-[19px] md:text-[23px]" href="@"> <AiOutlineInstagram /></a>
            <a className=" text-[19px] md:text-[23px]" href="@"> <AiOutlineTwitter /></a>
            <a className=" text-[19px] md:text-[23px]" href="@"> <AiFillLinkedin /></a>
         
        </div>
      </nav>
    </div>
  );
}
