import "./Cards.css";
import { AiFillStar } from "react-icons/ai";
import React from "react";

let AllCources = [
  {
    CLink: "https://picsum.photos/1300/800",
    id: 1,
  },
  {
    CLink: "https://picsum.photos/1300/800",
    id: 2,
  },
  {
    CLink: "https://picsum.photos/1300/800",
    id: 4,
  },
  {
    CLink: "https://picsum.photos/1300/800",
    id: 5,
  },
  {
    CLink: "https://picsum.photos/1300/800",
    id: 6,
  },
  {
    CLink: "https://picsum.photos/1300/800",
    id: 7,
  },
  {
    CLink: "https://picsum.photos/1300/800",
    id: 8,
  },
  {
    CLink: "https://picsum.photos/1300/800",
    id: 9,
  },
  {
    CLink: "https://picsum.photos/1300/800",
    id: 10,
  },
  {
    CLink: "https://picsum.photos/1300/800",
    id: 11,
  },
];

export function Card(CardProps) {
  return (
    <>
      <div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {AllCources.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.CLink}
                  alt={product.CLink}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div>
                <div className=" bg-slate-100 pt-0 pb-[24px] px-[16px] space-y-4">
                  <div>
                    <div className=" flex items-center justify-between ">
                      <p className='text-[14px] font-semibold font-["Roboto"] capitalize'>
                        design
                      </p>
                      <p className=' font-["Roboto"] flex items-center justify-center space-x-1'>
                        <AiFillStar /> <p>5.0</p>
                      </p>
                    </div>
                    <div>
                      <h1 className='flex text-[25px] font-["Roboto"] items-center space-x-2'>
                        <p className=" uppercase">ux/ui</p>
                        <p>Design 201</p>
                      </h1>
                      <p className='font-["Roboto"] text-[16px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Susjpendisse varius enim in eros.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <button className=" py-[8px] px-[20px] bg-white  ring-1 ring-gray-500 text-lg font-semibold text-black rounded-lg capitalize">
                      enroll now
                    </button>
                    <h1 className="py-[8px] px-[20px] font-['Roboto']">$500</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
