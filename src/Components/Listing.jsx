import React from 'react'
import { IoIosPeople } from "react-icons/io";
import image2 from "../assets/Vector1.png";
import { IoLocationOutline } from "react-icons/io5";
import image1 from "../assets/Add.png";
import image4 from "../assets/Vector3.png";
const Listing = () => {
  return (
    <div className='w-full'>
      <div className="font-bold text-xl mt-10 ml-[2.75rem]  h-10 mb-4 flex items-center justify-center gap-1 py-4">
            <img className="w-8 h-8" src={image1} alt="" />
            Add Your Listing
          </div>
      <div className='h-auto  lg:w-[77.5rem] lg:my-[6.25rem] mx-6 lg:mx-auto flex flex-wrap  '>
        <div className=' lg:w-[38rem] h-auto border-black shadow-sm hover:border  hover:border-indigo-500 rounded mb-6 lg:mr-6 hover:bg-[#8064A2] hover:text-white pb-6'>
          <div className='font-bold text-xl mt-10 ml-[2.75rem] w-[9.18rem] h-10 mb-4 flex items-center gap-1'>
           
            <IoIosPeople className='w-10 h-7  ' />
            People
          </div>
          <p className='mx-[2.75rem]'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
          
        </div>
        <div className='lg:w-[38rem] h-auto pb-6 border-black rounded shadow-sm hover:border hover:border-indigo-500 mb-6 hover:bg-[#77933C] hover:text-white'>
          <div className='font-bold text-xl mt-10 ml-[2.75rem] w-[9.18rem] h-10 mb-4 flex items-center gap-1'>
            <IoLocationOutline className='w-10 h-7 hover:bg-white ' />
            Place
          </div>
          <p className='mx-[2.75rem]'>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
          
        </div>
        <div className='lg:w-[38rem] h-auto pb-6 border-black rounded shadow-sm hover:border hover:border-indigo-500 mb-6 lg:mr-6 hover:bg-[#C0504D] hover:text-white'>
          <div className='font-bold text-xl mt-10 ml-[2.75rem] w-[9.18rem] h-10 mb-4 flex items-center gap-1'>
            <img className='w-10 h-8 hover:bg-white' src={image2} alt="" />
            Product
          </div>
          <p className='mx-[2.75rem]'>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
          
        </div>
        <div className='w-full lg:w-[38rem] h-auto pb-6 border-black rounded hover:border hover:border-indigo-500 shadow-sm mb-6 hover:bg-[#0096C8] hover:text-white'>
          <div className='font-bold text-xl mt-10 ml-[2.75rem] w-[9.18rem] h-10 mb-4 flex items-center gap-1'>
            <img className='w-8 h-8' src={image4} alt="" />
            People
          </div>
          <p className='mx-[2.75rem]'>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
         
        </div>
      </div>
    </div>
  )
}

export default Listing