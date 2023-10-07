import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
let courses = [
  { id: 1, items: "business", hreflink: "@" },
  { id: 2, items: "development", hreflink: "@" },
  { id: 3, items: "technology", hreflink: "@" },
  { id: 4, items: "design", hreflink: "@" },
  { id: 5, items: "programming", hreflink: "@" },
];
let resources = [
  { id: 1, items: "career", hreflink: "@" },
  { id: 2, items: "resume", hreflink: "@" },
  { id: 3, items: "learning", hreflink: "@" },
  { id: 4, items: "interview preparation", hreflink: "@" },
  { id: 5, items: "jobs", hreflink: "@" },
];
let about_us = [
  { id: 1, items: "contact", hreflink: "@" },
  { id: 2, items: "help/support", hreflink: "@" },
  { id: 3, items: "FAQ", hreflink: "@" },
  { id: 4, items: "terms and conditions", hreflink: "@" },
  { id: 5, items: "partners", hreflink: "@" },
];

export default function Footer() {
  return (
    <div>
      <div className=" py-[112px] px-[64px] capitalize">
        <div>
          <div className=" text-center space-y-4 lg:space-y-0 lg:text-left lg:flex items-center justify-between">
            <div>
              <h1 className=" text-[18px] font-['Roboto']">
                Subscribe to our newsletter
              </h1>
              <p className="font-['Roboto'] font-[300]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <div className=" space-y-4">
                <div className="  lg:space-x-4 space-y-5 lg:space-y-0">
                  <input
                    className=" w-[100%] lg:w-auto py-[12px] px-[12px] font-['Roboto'] rounded-lg border-none ring-2 ring-gray-400"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button className=" w-full lg:w-auto font-['Roboto'] font-[500] py-[12px] px-[24px] ring-2 ring-gray-400 rounded-lg">
                    Subscribe
                  </button>
                </div>

                <div>
                  <p className="  flex items-center justify-center lg:justify-start font-['Roboto'] text-[12px] space-x-3">
                    <p>By subscribing you agree to with our</p>
                    <p className=" underline"> Privacy Policy</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:text-left text-center lg:flex justify-between py-[50px] lg:py-[80px] lg:space-y-0 space-y-8">
            <div className="flex items-center justify-center lg:justify-start font-['Roboto'] text-[20px] space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  d="M15.7929 4.48401V4.48505C15.776 4.51413 12.2955 10.518 7.95067 17.8483C3.59532 25.1964 0 31.0794 0 31.0794L12.3315 31.0253L12.3323 31.0252L12.3297 31.0347C18.3172 30.9188 23.7182 26.9822 25.3119 21.0341C25.8102 19.1748 25.8853 17.3031 25.5964 15.5143C24.8043 10.247 20.9149 5.96327 15.7929 4.48401Z"
                  fill="black"
                />
                <path
                  d="M22.6078 0.697998V0.699042C22.591 0.728121 19.1104 6.73197 14.7656 14.0623C10.4103 21.4104 6.81494 27.2934 6.81494 27.2934L19.1464 27.2393L19.1472 27.2391L19.1446 27.2487C25.1321 27.1327 30.5331 23.1962 32.1269 17.2481C32.6251 15.3887 32.7003 13.517 32.4113 11.7283C31.6192 6.46103 27.7299 2.17726 22.6078 0.697998Z"
                  fill="#10F2C5"
                />
              </svg>
              <h1 className=" font-[600] font-['Roboto']">Ddsgnr</h1>
            </div>
            <CourseUi />
            <ResourcesUi />
            <About_usUi />
          </div>
        </div>
        <div>
          <span className=" block w-[100%] h-[2px] bg-black">
            
          </span>
        </div>
        <div className="  lg:flex items-center justify-between py-5 lg:space-y-0 space-y-7">
          <div className="  underline flex items-center lg:justify-start justify-center font-['Roboto'] space-x-4">
            <p className="hover:text-gray-600 duration-200 cursor-pointer">2023 Ddsgnr. All right reserved.</p>
            <p className="hover:text-gray-600 duration-200 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-gray-600 duration-200 cursor-pointer">Terms of Service</p>
            <p className="hover:text-gray-600 duration-200 cursor-pointer">Cookies Settings</p>
          </div>
          <div className=" flex items-center justify-center space-x-3">
            <a className=" text-[19px] md:text-[23px]" href="@">
              {" "}
              <FaFacebookF />
            </a>
            <a className=" text-[19px] md:text-[23px]" href="@">
              {" "}
              <AiOutlineInstagram />
            </a>
            <a className=" text-[19px] md:text-[23px]" href="@">
              {" "}
              <AiOutlineTwitter />
            </a>
            <a className=" text-[19px] md:text-[23px]" href="@">
              {" "}
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseUi() {
  return (
    <>
      <div className=" space-y-3 capitalize">
        <h1 className=" text-[20px] font-['Roboto'] font-[600]">courses</h1>
        <ul className="font-['Roboto'] text-[15px] space-y-5">
          {courses.map((course) => (
            <li key={course.id}>
              <a href={course.hreflink}>{course.items}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
function ResourcesUi() {
  return (
    <>
      <div className=" space-y-3 capitalize">
        <h1 className=" text-[20px] font-['Roboto'] font-[600]">Resources</h1>
        <ul className="font-['Roboto'] text-[15px] space-y-5">
          {resources.map((resour) => (
            <li key={resour.id}>
              <a href={resour.hreflink}>{resour.items}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
function About_usUi() {
  return (
    <>
      <div className=" space-y-3 capitalize">
        <h1 className=" text-[20px] font-['Roboto'] font-[600]">About us</h1>
        <ul className="font-['Roboto'] text-[15px] space-y-5">
          {about_us.map((about) => (
            <li key={about.id}>
              <a href={about.hreflink}>{about.items}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/*



 
              
*/
