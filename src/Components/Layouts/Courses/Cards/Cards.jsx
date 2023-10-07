import "./Cards.css";
import { AiFillStar } from "react-icons/ai";
import React from "react";

let AllCources = [
  {
    CLink:
      "https://s3-alpha-sig.figma.com/img/23cb/c2ed/e62b5f71371a891c6389bec5b65e22bf?Expires=1697414400&Signature=YZ0T209QG8Z-ERV0p~ez1z1CSBOrBrZHIelrtFlWxv21rCuP7igaiRfH4WYDGBVw3vIu9-7PGT39GFbHVcC4BuskFQ1GxIfqVwW7VIDPdJCgp070n5DhmvN2D13xyk3WWHn7HcUqFgTIEQlGHObN3pnRbObZJJmFLLGrR-NSHhrIgRaPMF6z31wn0PLf-ZS3hLwAAOtK0LsboZvCmKWpQI0iLqF~JNymyTbyoJenV1Mk5LwWDDD-yHfVimw5AOL4PZreauoHLIn~YqQZut4aIMqyFADBl7M4KulVaM97sZzuXRRkWlkES6BNf4bpgC-lWPffdgVpmKwhHxBu-fvFnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    id: 1,
  },
  {
    CLink:
      "https://s3-alpha-sig.figma.com/img/99fe/f53a/a46b11e5e4099d82795afa1a9c86b105?Expires=1697414400&Signature=CtQw7QavwiBDK3U5p3c149ecOYtVKBfwLfp1c~0BY2LV2408bDtsZu3PfNxlstM6sbohEATAaWU453QYVNMZGNAVmUvfLRuIARCZ9SBc1Jg9PA3RNxhyQleV~Nq02yW~dk26dpnIjV~mal9ksb1dd1t8RCjt7VRvYx5uCDjjQrhPDsXwZKZ0S~Eb6tAwIAJdAOJB9dmMbqcBYYsUEflV5WY0GZ8PlXDbjq5ltaJGi4ALQCVaOmMcNmWin3SSqbzpDnLS5Mrj9Cp7gooLD4mHTvdbx63sQ3VuEmbuEOZv0ETVu7x62l0xzEmvQAljI~SzU6UKnnRzZfSMtX6n6VMk6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    id: 2,
  },
  {
    CLink:
      "https://s3-alpha-sig.figma.com/img/ee94/3139/4fb7e1e117b5202fd73be5b49ea20b47?Expires=1697414400&Signature=ZF2gm7RIYqQlHy4PI0G8s12Udw6uKk7hOKUcDuCIOCEXyzRCe6FfXRIVGnb4X91gZnw0CWr9esvuUzJe0amJxZt0RduoGALBEZAgkjIQhIi5UHijAO7CKwghVNU7hHPY5dMHODX7~ZVz0jMRz35r0gVaXlCEMVyHk5Kmn3Rtw1JbIL9bYA1Q1qloWIjtpjVtp6aZmK5ykVAy6g-gPtSGGO5hVUMBCTqqi0H5Vx28Hf~7FufTWjEljAx0y5JlZJeYzWUoS~BB0j0xly-N7J-jJMLI7d4hoI4oAGZE7-4GL6Hq8FZWsN~4NG1Et07PRiWbJr2EgTS6x8Bny2iUa3wVCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    id: 4,
  },
  {
    CLink:
      "https://s3-alpha-sig.figma.com/img/bc5a/16ce/118f64b050bc2f3f8c17fef35c8d1838?Expires=1697414400&Signature=DfUM2b~j~Ha8Ii-m2OyJgkr83hSSLyhq8UWf4jeaoKMhd2PLnPj6vkQJEmxIVelbEHkl3a7OlPF0BwuZeiCzyy~cnI9ylhKF1v7IICp0S53oQBmkc7Ie4qEUrvlEAWLBh5nblRtJq~oDGDZOxOcHQslUP0jEld49D9kUPrIyYDHcyFxlkCYjoRLSNs-fAW9DxSiYMk-IQXpA1DVkjqZfO7vj~r7xifOY7yiDEsT7oQHT-ItWl6KN4VYmefU3pSpLwH~k0oH7-KPbJTBUckOLU63p7r~M65hCBrfiXFG6H2iZZWOT~x11qYLJTSmdCrYikVKZJ5cPHPbxCfjLHZIdoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    id: 5,
  },
  {
    CLink:
      "https://s3-alpha-sig.figma.com/img/7398/3e19/cdf68a4ac8b7039c979017d2dd9b5e96?Expires=1697414400&Signature=R6tdMKYnkUFggcdDCYUYXJ-XMaCZm-ZoMJuHUWawisTHMkpsCDO8MngIKrAVfkD0mpBPa9NMBIgmoVdNpQeUMxTjX2az4Nb8sarCH84Q9ff2IeCf9--UY8mLY9HGM1FJccSzO1hTdTcmzKsEgXYAgZj9Cvn5X8wZtWR9YwymFicMVKPZQfKDLCIpHS9M5uBVvzQzuowCcsIR69GjE1WcG~NpUX-GGKnxA47R~~6EaMbSnMwnjioEUrOvGl6xqO-3R2hhrps180WkVTAXoEfNc4ZyOiIzerGC81hUvi2tqbHITH99YXUFuXK1xddRbVzb1fWrYizt-JEwpM04pXieXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    id: 6,
  },
  {
    CLink:
      "https://s3-alpha-sig.figma.com/img/23cb/c2ed/e62b5f71371a891c6389bec5b65e22bf?Expires=1697414400&Signature=YZ0T209QG8Z-ERV0p~ez1z1CSBOrBrZHIelrtFlWxv21rCuP7igaiRfH4WYDGBVw3vIu9-7PGT39GFbHVcC4BuskFQ1GxIfqVwW7VIDPdJCgp070n5DhmvN2D13xyk3WWHn7HcUqFgTIEQlGHObN3pnRbObZJJmFLLGrR-NSHhrIgRaPMF6z31wn0PLf-ZS3hLwAAOtK0LsboZvCmKWpQI0iLqF~JNymyTbyoJenV1Mk5LwWDDD-yHfVimw5AOL4PZreauoHLIn~YqQZut4aIMqyFADBl7M4KulVaM97sZzuXRRkWlkES6BNf4bpgC-lWPffdgVpmKwhHxBu-fvFnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    id: 7,
  },
  {
    CLink:
      "https://s3-alpha-sig.figma.com/img/99fe/f53a/a46b11e5e4099d82795afa1a9c86b105?Expires=1697414400&Signature=CtQw7QavwiBDK3U5p3c149ecOYtVKBfwLfp1c~0BY2LV2408bDtsZu3PfNxlstM6sbohEATAaWU453QYVNMZGNAVmUvfLRuIARCZ9SBc1Jg9PA3RNxhyQleV~Nq02yW~dk26dpnIjV~mal9ksb1dd1t8RCjt7VRvYx5uCDjjQrhPDsXwZKZ0S~Eb6tAwIAJdAOJB9dmMbqcBYYsUEflV5WY0GZ8PlXDbjq5ltaJGi4ALQCVaOmMcNmWin3SSqbzpDnLS5Mrj9Cp7gooLD4mHTvdbx63sQ3VuEmbuEOZv0ETVu7x62l0xzEmvQAljI~SzU6UKnnRzZfSMtX6n6VMk6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    id: 8,
  },
  {
    CLink:
      "https://s3-alpha-sig.figma.com/img/ee94/3139/4fb7e1e117b5202fd73be5b49ea20b47?Expires=1697414400&Signature=ZF2gm7RIYqQlHy4PI0G8s12Udw6uKk7hOKUcDuCIOCEXyzRCe6FfXRIVGnb4X91gZnw0CWr9esvuUzJe0amJxZt0RduoGALBEZAgkjIQhIi5UHijAO7CKwghVNU7hHPY5dMHODX7~ZVz0jMRz35r0gVaXlCEMVyHk5Kmn3Rtw1JbIL9bYA1Q1qloWIjtpjVtp6aZmK5ykVAy6g-gPtSGGO5hVUMBCTqqi0H5Vx28Hf~7FufTWjEljAx0y5JlZJeYzWUoS~BB0j0xly-N7J-jJMLI7d4hoI4oAGZE7-4GL6Hq8FZWsN~4NG1Et07PRiWbJr2EgTS6x8Bny2iUa3wVCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    id: 9,
  },
  {
    CLink:
      "https://s3-alpha-sig.figma.com/img/bc5a/16ce/118f64b050bc2f3f8c17fef35c8d1838?Expires=1697414400&Signature=DfUM2b~j~Ha8Ii-m2OyJgkr83hSSLyhq8UWf4jeaoKMhd2PLnPj6vkQJEmxIVelbEHkl3a7OlPF0BwuZeiCzyy~cnI9ylhKF1v7IICp0S53oQBmkc7Ie4qEUrvlEAWLBh5nblRtJq~oDGDZOxOcHQslUP0jEld49D9kUPrIyYDHcyFxlkCYjoRLSNs-fAW9DxSiYMk-IQXpA1DVkjqZfO7vj~r7xifOY7yiDEsT7oQHT-ItWl6KN4VYmefU3pSpLwH~k0oH7-KPbJTBUckOLU63p7r~M65hCBrfiXFG6H2iZZWOT~x11qYLJTSmdCrYikVKZJ5cPHPbxCfjLHZIdoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    id: 10,
  },
  {
    CLink:
      "https://s3-alpha-sig.figma.com/img/7398/3e19/cdf68a4ac8b7039c979017d2dd9b5e96?Expires=1697414400&Signature=R6tdMKYnkUFggcdDCYUYXJ-XMaCZm-ZoMJuHUWawisTHMkpsCDO8MngIKrAVfkD0mpBPa9NMBIgmoVdNpQeUMxTjX2az4Nb8sarCH84Q9ff2IeCf9--UY8mLY9HGM1FJccSzO1hTdTcmzKsEgXYAgZj9Cvn5X8wZtWR9YwymFicMVKPZQfKDLCIpHS9M5uBVvzQzuowCcsIR69GjE1WcG~NpUX-GGKnxA47R~~6EaMbSnMwnjioEUrOvGl6xqO-3R2hhrps180WkVTAXoEfNc4ZyOiIzerGC81hUvi2tqbHITH99YXUFuXK1xddRbVzb1fWrYizt-JEwpM04pXieXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
