import React from "react";
import { Card } from "./Cards/Cards";

let coursesitems = [
  { hreflink: "@", id: 1, items: "populer" },
  { hreflink: "@", id: 2, items: "recommended" },
  { hreflink: "@", id: 3, items: "best price" },
];

export default function Courses() {
  return (
    <div>
      <div className=" py-[112px] px-[64px]">
        <div>
          <h1 className=" mb-[24px] text-center capitalize text-[56px] roboto font-bold">
            courses
          </h1>
          <p className=" mb-[60px] py-[18px] font-['Roboto'] text-center">
            Your Ultimate Guide to learning
          </p>
        </div>

        <div>
          <div>
            <ul className="flex mb-[64px] items-center roboto text-[16px] capitalize justify-center space-x-5">
              {coursesitems.map((itms) => (
                <li className="hover:border-b-2 border-gray-600 px-6" key={itms.id}>
                  <a href={itms.hreflink}>{itms.items}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
         <Card/>
        </div>
          <div className="flex mt-10 items-center justify-center">
            <button className=" py-[8px] px-[20px] bg-white  ring-1 ring-gray-500 text-lg font-semibold text-black rounded-lg capitalize">View All Course</button>
          </div>

      </div>
    </div>
  );
}
