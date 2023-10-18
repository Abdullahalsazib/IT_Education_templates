import React from "react";
import { AiFillStar } from "react-icons/ai";
import { RxDotFilled, RxDot } from "react-icons/rx";
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'

export default function Testimonial() {
  return (
    <div>
      <div className=" py-[112px] px-[64px]  ">
        <div className="mb-[80px]">
          <h1 className=' text-[48px] font-["Roboto"] mb-[24px]'>
            What Our Student Say
          </h1>
          <p className="font-['Roboto']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="  grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <TestimonialCards />
          <TestimonialCards />
          <TestimonialCards />
          <TestimonialCards />
          <TestimonialCards />
          <TestimonialCards />
         
        </div>
        <div className="flex py-4 items-center justify-between">
            <div className="text-[35px] flex items-center ">
              <RxDotFilled />
              <RxDotFilled />
              <RxDot/>
              <RxDot/>
            </div>
            <div className=" space-x-4 text-blue-500 flex items-center text-[40px]">
                <BsArrowLeftCircle/>
                <BsArrowRightCircle/>
            </div>
          </div>
      </div>
    </div>
  );
}

function TestimonialCards() {
  return (
    <>
      <div className=" ring-4 ring-blue-400 hover:bg-gray-300 duration-200 p-[32px]  rounded-lg">
        <div className=" flex items-center text-yellow-400 text-[23px] mb-[24px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="mb-[24px]">
          <h1 className="font-['Roboto']">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </h1>
        </div>
        <div className=" flex items-center space-x-5 font-['Roboto'] capitalize">
          <div>
            <img
              className=" rounded-full"
              src="https://picsum.photos/40/40"
              alt="Error"
            />
          </div>
          <div>
            <h1>wade warren</h1>
            <p>Position, Company name</p>
          </div>
        </div>
      </div>
    </>
  );
}
