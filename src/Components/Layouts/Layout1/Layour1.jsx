import React from 'react'
import './Layout.css'

import { Btn } from '../../Header/Header'

export default function Layour1() {
  return (
    <div  className='roboto  lg:flex items-center justify-between px-[64px] py-[30px] lg:py-[112px] space-y-8 lg:space-y-0'>
        <div className=' space-y-3 lg:w-[40%]'>
            <h1 className='text-[40px] roboto font-semibold'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</h1>
            <div className=' space-y-3'>
            <p className='text-[19px] text-justify lg:text-left  popins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestias, dolores maiores, sequi, corporis eum quae dignissimos quidem sed harum veritatis. Perspiciatis corrupti maxime, facilis adipisci aspernatur sit dolorum minima accusantium dolore?</p>
            <p className='text-[19px] text-justify lg:text-left  popins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestias, dolores maiores, sequi, corporis eum quae dignissimos quidem sed harum veritatis. Perspiciatis corrupti maxime, facilis adipisci aspernatur sit dolorum minima accusantium dolore?</p>
            <p className='text-[19px] text-justify lg:text-left  popins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestias, dolores maiores, sequi, corporis eum quae dignissimos quidem sed harum veritatis. Perspiciatis corrupti maxime, facilis adipisci aspernatur sit dolorum minima accusantium dolore?</p>
           
            </div>
            <div className=' flex items-center justify-center lg:block py-[30px]'>

            <Btn btnItems="Explore Courses"/>
            </div>
        </div>
        <div className=' lg:w-[50%]  flex items-center  justify-center'>
            <div className=' layout1'>
              
            </div>
        </div>
    </div>
  )
}
