import React from 'react'
import image1 from "../assets/Group.png";
import image2 from "../assets/58.png";
const End = () => {
  return (
    <div className='bg-[#F7FDFF] h-auto  lg:h-[42rem] w-full'>
<div className='pt-10 md:pt-24 ml-6 lg:ml-24 w-[35.3rem] mb-10 flex flex-col  '>
<p className='italic font-semibold text-2xl lg:text-4xl'>Your <span className='text-indigo-500'>Hobby</span>, Your <span className='text-indigo-400'>Community...</span></p>
<button className='bg-[#8064A2] h-[3rem] w-[9.1rem]  rounded text-white font-bold'>Get started</button>
</div>
<div className='flex mx-6 lg:mx-24 justify-between mt-[7.5rem] '>
    <img className=' w-[8.3rem] md:w-auto pb-6' src={image1} alt="" />
    <img className=' w-[8.3rem] md:w-auto pb-6' src={image2} alt="" />
</div>
    </div>
  )
}

export default End