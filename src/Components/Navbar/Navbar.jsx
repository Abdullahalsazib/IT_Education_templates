import React from "react";
let Lilist = [
  { hrefLink: "@", TextLink: "home", id: 1 },
  { hrefLink: "@", TextLink: "about us", id: 2 },
  { hrefLink: "@", TextLink: "courses", id: 3 },
  { hrefLink: "@", TextLink: "contact", id: 4 },
];

export default function Navbar() {
  return (
    <div>
      <nav className="roboto bg-[#fff] py-2 px-5 md:px-10 border-y-[1px] border-gray-600 ">
        <div className="flex items-center justify-between">
          <h1 className="flex items-center justify-center text-[25.067px] font-bold space-x-0 lg:space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M15.7929 4.59521V4.59626C15.776 4.62534 12.2955 10.6292 7.95067 17.9595C3.59532 25.3077 0 31.1906 0 31.1906L12.3315 31.1365L12.3323 31.1364L12.3297 31.1459C18.3172 31.03 23.7182 27.0934 25.3119 21.1453C25.8102 19.286 25.8853 17.4143 25.5964 15.6255C24.8043 10.3582 20.9149 6.07448 15.7929 4.59521Z"
                fill="black"
              />
              <path
                d="M22.6078 0.809326V0.81037C22.591 0.839449 19.1104 6.8433 14.7656 14.1736C10.4103 21.5218 6.81494 27.4047 6.81494 27.4047L19.1464 27.3506L19.1472 27.3505L19.1446 27.36C25.1321 27.2441 30.5331 23.3075 32.1269 17.3594C32.6251 15.5001 32.7003 13.6284 32.4113 11.8396C31.6192 6.57236 27.7299 2.28859 22.6078 0.809326Z"
                fill="#10F2C5"
              />
            </svg>
            <h1>Ddsgnr</h1>
          </h1>
          {/* ulAndLi */}
          <div>
            <ul className=" hidden lg:flex items-center roboto justify-center space-x-1 lg:space-x-6 text-[17px] capitalize">
              {Lilist.map((navLi) => (
                <li
                  className=" border-b-2 border-white hover:border-gray-800 duration-200 px-1 lg:px-5 py-2"
                  key={navLi.id}
                >
                  <a className=" py-2 px-1 lg:px-5" href={navLi.hrefLink}>
                    {navLi.TextLink}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* navBtns */}
          <div className="flex items-center justify-center space-x-4">
            <button className="  border-[2px] border-gray-500 hover:bg-gray-300 hover:border-white duration-200   py-[6px] sm:py-2 px-5 sm:px-7 rounded-lg text-[16px] bg-white capitalize ">
              login
            </button>
            <button className=" bg-gray-900 border-[2px] border-gray-900 hover:border-gray-50 duration-200 text-white py-[6px]  sm:py-2 px-5 sm:px-7  rounded-lg text-[16px]  capitalize ">
              sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
